import type { MetadataRoute } from "next";

import { getPosts, getStaffMembers } from "@/lib/contentful";
import { getNewsDetailRoute, getStaffDetailRoute, ROUTES } from "@/lib/routes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const [staffMembers, posts] = await Promise.all([getStaffMembers(), getPosts()]);
  const staticRoutes = [
    ROUTES.home,
    ROUTES.menu,
    ROUTES.staff,
    ROUTES.voice,
    ROUTES.access,
    ROUTES.contact,
    ROUTES.news,
    ROUTES.siteMap,
  ].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() }));
  const staffRoutes = staffMembers.map((member) => ({ url: `${siteUrl}${getStaffDetailRoute(member.slug)}`, lastModified: new Date() }));
  const newsRoutes = posts.map((post) => ({ url: `${siteUrl}${getNewsDetailRoute(post.slug)}`, lastModified: new Date(post.publishedAt) }));
  return [...staticRoutes, ...staffRoutes, ...newsRoutes];
}
