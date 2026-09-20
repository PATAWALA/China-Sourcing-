import type { Metadata } from "next";
import { site } from "@/data/site";

interface SEOInput {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
}

export function buildMetadata({ title, description, path = "/", keywords }: SEOInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: site.name },
    twitter: { card: "summary_large_image", title, description },
  };
}