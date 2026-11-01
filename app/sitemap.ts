import type { MetadataRoute } from "next";
import { SITE } from "@/content/profile";
import { CASE_STUDIES } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/tldr`, changeFrequency: "monthly", priority: 0.6 },
    ...CASE_STUDIES.map((c) => ({
      url: `${SITE.url}/work/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
