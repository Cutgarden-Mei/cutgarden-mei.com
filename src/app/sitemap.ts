import type { MetadataRoute } from "next";

import { getPosts, getStaffMembers } from "@/lib/contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const [staffMembers, posts] = await Promise.all([getStaffMembers(), getPosts()]);
  const staticRoutes = ["", "/menu", "/staff", "/voice", "/access", "/contact", "/news"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() }));
  const staffRoutes = staffMembers.map((member) => ({ url: `${siteUrl}/staff/${member.slug}`, lastModified: new Date() }));
  const newsRoutes = posts.map((post) => ({ url: `${siteUrl}/news/${post.slug}`, lastModified: new Date(post.publishedAt) }));
  return [...staticRoutes, ...staffRoutes, ...newsRoutes];
}
