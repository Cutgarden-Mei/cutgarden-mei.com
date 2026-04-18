import type { Metadata } from "next";
import type { Document } from "@contentful/rich-text-types";

export type NavItem = {
  label: string;
  href: string;
};

export type Seo = {
  title: string;
  description: string;
  keywords: string[];
};

export type SiteSettings = {
  siteName: string;
  siteDescription: string;
  phoneNumber: string;
  reservationUrl: string;
  address: string;
  businessHours: string;
  holiday: string;
  instagramUrl: string;
  seo: Seo;
  navItems: NavItem[];
};

export type Hero = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type MenuItem = {
  name: string;
  price: string;
  duration: string;
  description: string;
  notes?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export type StaffMember = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  specialties: string[];
  image: string;
  instagramUrl?: string;
};

export type Voice = {
  customerName: string;
  menuLabel: string;
  comment: string;
  staffSlug?: string;
};

export type HomeUpdatePostType = "blog" | "news";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** Contentful Rich Text（本文内の埋め込み画像・見出し等を含む） */
  body: Document;
  category: string;
  publishedAt: string;
  type: HomeUpdatePostType;
};

export type NewsPost = Post;

export type HomeUpdatePost = {
  id: string;
  slug: string;
  title: string;
  type: HomeUpdatePostType;
  publishedAt: string;
};

export type AccessInfo = {
  storeName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  businessHours: string;
  holiday: string;
  parking: string;
  mapEmbedUrl: string;
  directions: string[];
};

export type HomePageData = {
  hero: Hero;
  conceptTitle: string;
  conceptBody: string[];
};

export type ContactSettings = {
  toEmail: string;
  fromEmail: string;
  thanksMessage: string;
  privacyPolicyUrl: string;
  autoReplySubject: string;
  autoReplyBody: string;
};

export type MetadataFactoryInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export type MetadataFactory = (input: MetadataFactoryInput) => Metadata;
