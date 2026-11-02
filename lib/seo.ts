import type { CaseStudy } from "@/content/types";
import { EDUCATION } from "@/content/education";
import { SKILLS } from "@/content/skills";
import { SITE, PROFILE, LINKS } from "@/content/profile";

/**
 * Structured data (schema.org JSON-LD) for search engines. One Person and one
 * WebSite, each with a stable @id, so every page can point back to them
 * instead of describing them again.
 */
const PERSON_ID = `${SITE.url}/#person`;
const SITE_ID = `${SITE.url}/#website`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PROFILE.name,
  url: SITE.url,
  image: `${SITE.url}${PROFILE.avatar}`,
  email: `mailto:${PROFILE.email}`,
  jobTitle: PROFILE.role,
  description: SITE.description,
  address: { "@type": "PostalAddress", addressLocality: "San Francisco Bay Area", addressRegion: "CA", addressCountry: "US" },
  alumniOf: EDUCATION.map((e) => ({ "@type": "CollegeOrUniversity", name: e.title })),
  knowsAbout: SKILLS.flatMap((g) => g.items),
  sameAs: [LINKS.github, LINKS.linkedin, LINKS.medium],
};

/** On every page: who the site is by, and the site itself. */
export const SITE_LD = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE.url,
      name: PROFILE.name,
      description: SITE.description,
      inLanguage: "en-US",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

/** The home page is the profile page for the person. */
export const PROFILE_PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE.url,
  name: SITE.title,
  isPartOf: { "@id": SITE_ID },
  mainEntity: { "@id": PERSON_ID },
};

/** A case study: the write-up, the product it's about, and where it sits in the site. */
export function caseStudyLd(study: CaseStudy) {
  const url = `${SITE.url}/work/${study.slug}`;
  const year = study.meta.find((m) => m.label === "Year")?.value.match(/\d{4}/)?.[0];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: `${study.title}: ${study.tagline}`,
        description: study.description,
        image: `${SITE.url}${study.hero.src}`,
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
        inLanguage: "en-US",
        keywords: study.tech.chips.join(", "),
        about: {
          "@type": "SoftwareApplication",
          name: study.title,
          url: study.link,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          ...(year && { dateCreated: year }),
          ...(study.repo && { sameAs: study.repo }),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/#work` },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };
}

/** For a <script type="application/ld+json">: JSON with "<" escaped so it can't close the tag. */
export const ldJson = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
