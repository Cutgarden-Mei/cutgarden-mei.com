import "server-only";

import { createClient, type EntrySkeletonType } from "contentful";

import { accessInfo, contactSettings, homePage, menuCategories, newsPosts, siteSettings, staffMembers, voices } from "@/lib/mock-data";
import type { ContactFormPayload } from "@/lib/resend";
import type {
  AccessInfo,
  ContactSettings,
  HomePageData,
  HomeUpdatePost,
  HomeUpdatePostType,
  MenuCategory,
  NewsPost,
  Post,
  SiteSettings,
  StaffMember,
  Voice,
} from "@/lib/types";

const hasContentfulCredentials = Boolean(
  process.env.CONTENTFUL_SPACE_ID &&
    (process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN),
);
const CONTENTFUL_MANAGEMENT_API_BASE_URL = "https://api.contentful.com";

function getClient() {
  if (!hasContentfulCredentials) return null;

  const usePreview = process.env.CONTENTFUL_PREVIEW === "true";
  const accessToken = usePreview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;
  const host = usePreview ? "preview.contentful.com" : undefined;

  if (!process.env.CONTENTFUL_SPACE_ID || !accessToken) return null;

  return createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken, host });
}

function getManagementConfig() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID ?? "master";

  if (!spaceId || !accessToken) {
    throw new Error("Contentful Management API credentials are missing.");
  }

  return { spaceId, accessToken, environmentId };
}

type Fields = Record<string, unknown>;
type BasicEntry = EntrySkeletonType<Fields>;

function getField<T>(entry: { fields: Fields }, key: string, fallback: T): T {
  const value = entry.fields[key];
  return (value as T | undefined) ?? fallback;
}

function normalizePostType(value: unknown): HomeUpdatePostType | null {
  return value === "blog" || value === "news" ? value : null;
}

function normalizePublishedAt(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
}

type RichTextNode = {
  value?: unknown;
  content?: RichTextNode[];
};

function getRichTextNodeText(node: RichTextNode): string {
  const ownValue = typeof node.value === "string" ? node.value : "";
  const childValue = Array.isArray(node.content)
    ? node.content.map((child) => getRichTextNodeText(child)).join("")
    : "";

  return `${ownValue}${childValue}`;
}

function normalizeBody(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((paragraph): paragraph is string => typeof paragraph === "string" && paragraph.trim().length > 0);
  }

  if (!value || typeof value !== "object" || !("content" in value) || !Array.isArray(value.content)) {
    return [];
  }

  return value.content
    .map((node) => getRichTextNodeText(node as RichTextNode).replace(/\s+/g, " ").trim())
    .filter((paragraph): paragraph is string => paragraph.length > 0);
}

function getPostCategory(type: HomeUpdatePostType): string {
  return type === "blog" ? "記事" : "お知らせ";
}

function sortPostsByPublishedAt(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

function mapEntryToPost(entry: { sys: { id: string }; fields: Fields }): Post | null {
  const type = normalizePostType(entry.fields.type);
  if (!type) return null;

  const body = normalizeBody(entry.fields.body);
  const title = getField(entry, "title", "");

  if (!title) return null;

  return {
    slug: getField(entry, "slug", entry.sys.id),
    title,
    excerpt: body[0] ?? "",
    body,
    category: getField(entry, "category", getPostCategory(type)),
    publishedAt: normalizePublishedAt(getField(entry, "publishedAt", "")),
    image: getField(entry, "image", "/images/default-image.jpg"),
    type,
  };
}

type ContentfulLocaleResponse = {
  items?: Array<{
    code?: string;
    default?: boolean;
  }>;
};

type ContentfulEntryResponse = {
  sys?: {
    id?: string;
  };
};

async function getDefaultLocaleCode() {
  const { spaceId, accessToken, environmentId } = getManagementConfig();
  const response = await fetch(
    `${CONTENTFUL_MANAGEMENT_API_BASE_URL}/spaces/${spaceId}/environments/${environmentId}/locales`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to load Contentful locales.");
  }

  const data = (await response.json()) as ContentfulLocaleResponse;
  return data.items?.find((item) => item.default)?.code ?? data.items?.[0]?.code ?? "en-US";
}

function buildContactBody(payload: ContactFormPayload) {
  return payload.message || "本文未入力";
}

function buildContactSubject(payload: ContactFormPayload) {
  return payload.subject || "題名未入力";
}

export async function createContactEntry(payload: ContactFormPayload) {
  const { spaceId, accessToken, environmentId } = getManagementConfig();
  const localeCode = await getDefaultLocaleCode();
  const response = await fetch(
    `${CONTENTFUL_MANAGEMENT_API_BASE_URL}/spaces/${spaceId}/environments/${environmentId}/entries`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "contact",
      },
      body: JSON.stringify({
        fields: {
          name: { [localeCode]: payload.name },
          email: { [localeCode]: payload.email },
          subject: { [localeCode]: buildContactSubject(payload) },
          body: { [localeCode]: buildContactBody(payload) },
        },
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to create Contentful contact entry.");
  }

  const data = (await response.json()) as ContentfulEntryResponse;
  return { entryId: data.sys?.id ?? null };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const client = getClient();
  if (!client) return siteSettings;

  try {
    const response = await client.getEntries<BasicEntry>({ content_type: "siteSettings", limit: 1 });
    const entry = response.items[0];
    if (!entry) return siteSettings;

    return {
      siteName: getField(entry, "siteName", siteSettings.siteName),
      siteDescription: getField(entry, "siteDescription", siteSettings.siteDescription),
      phoneNumber: getField(entry, "phoneNumber", siteSettings.phoneNumber),
      reservationUrl: getField(entry, "reservationUrl", siteSettings.reservationUrl),
      address: getField(entry, "address", siteSettings.address),
      businessHours: getField(entry, "businessHours", siteSettings.businessHours),
      holiday: getField(entry, "holiday", siteSettings.holiday),
      instagramUrl: getField(entry, "instagramUrl", siteSettings.instagramUrl),
      seo: {
        title: getField(entry, "seoTitle", siteSettings.seo.title),
        description: getField(entry, "seoDescription", siteSettings.seo.description),
      },
      navItems: siteSettings.navItems,
    };
  } catch {
    return siteSettings;
  }
}

export async function getHomePageData(): Promise<HomePageData> { return homePage; }
export async function getMenuCategories(): Promise<MenuCategory[]> { return menuCategories; }
export async function getStaffMembers(): Promise<StaffMember[]> { return staffMembers; }
export async function getStaffMemberBySlug(slug: string): Promise<StaffMember | null> {
  const members = await getStaffMembers();
  return members.find((member) => member.slug === slug) ?? null;
}
export async function getVoices(): Promise<Voice[]> { return voices; }
export async function getPosts(): Promise<Post[]> {
  const client = getClient();
  if (!client) return sortPostsByPublishedAt(newsPosts);

  try {
    const response = await client.getEntries<BasicEntry>({
      content_type: "post",
      limit: 1000,
    });

    return sortPostsByPublishedAt(
      response.items
        .map((entry) => mapEntryToPost(entry))
        .filter((post): post is Post => Boolean(post)),
    );
  } catch {
    return sortPostsByPublishedAt(newsPosts);
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.type === "news");
}

export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  const post = await getPostBySlug(slug);
  return post?.type === "news" ? post : null;
}

export async function getHomeUpdatePosts(limit = 10): Promise<HomeUpdatePost[]> {
  const posts = await getPosts();

  return posts.slice(0, limit).map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.title,
    type: post.type,
    publishedAt: post.publishedAt,
  }));
}
export async function getAccessInfo(): Promise<AccessInfo> { return accessInfo; }
export async function getContactSettings(): Promise<ContactSettings> { return contactSettings; }
