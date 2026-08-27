import type { MetadataRoute } from "next";
import { SITE } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/tldr`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
