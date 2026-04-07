import type { Metadata } from "next";

import { siteSettings } from "@/lib/mock-data";
import type { MetadataFactory } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const buildMetadata: MetadataFactory = ({
  title,
  description,
  path = "/",
  keywords = siteSettings.seo.keywords,
}) => {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: siteSettings.siteName,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  } satisfies Metadata;
};
