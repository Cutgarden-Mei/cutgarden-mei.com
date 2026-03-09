import "server-only";

import { createClient, type EntrySkeletonType } from "contentful";

import { accessInfo, contactSettings, homePage, menuCategories, newsPosts, siteSettings, staffMembers, voices } from "@/lib/mock-data";
import type { AccessInfo, ContactSettings, HomePageData, MenuCategory, NewsPost, SiteSettings, StaffMember, Voice } from "@/lib/types";

const hasContentfulCredentials = Boolean(
  process.env.CONTENTFUL_SPACE_ID &&
    (process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN),
);

function getClient() {
  if (!hasContentfulCredentials) return null;

  const usePreview = process.env.CONTENTFUL_PREVIEW === "true";
  const accessToken = usePreview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN;
  const host = usePreview ? "preview.contentful.com" : undefined;

  if (!process.env.CONTENTFUL_SPACE_ID || !accessToken) return null;

  return createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken, host });
}

type Fields = Record<string, unknown>;
type BasicEntry = EntrySkeletonType<Fields>;

function getField<T>(entry: { fields: Fields }, key: string, fallback: T): T {
  const value = entry.fields[key];
  return (value as T | undefined) ?? fallback;
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
export async function getNewsPosts(): Promise<NewsPost[]> { return newsPosts; }
export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  const posts = await getNewsPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
export async function getAccessInfo(): Promise<AccessInfo> { return accessInfo; }
export async function getContactSettings(): Promise<ContactSettings> { return contactSettings; }
