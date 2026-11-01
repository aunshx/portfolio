/**
 * The case studies as the navigation lists them. Kept apart from
 * case-studies.ts so the menu doesn't pull every study's content into the
 * browser bundle. Slugs must match content/case-studies.ts.
 */
export const CASE_STUDY_INDEX = [
  { slug: "fred", name: "FRED", blurb: "Agentic AI for siting bioenergy" },
  { slug: "reaktr", name: "reaktr.cc", blurb: "Cost analytics for cultivated meat" },
  { slug: "frredss", name: "FRREDSS", blurb: "Biomass power planning for California" },
  { slug: "resview", name: "ResView", blurb: "Blockchain consensus, visualized" },
  { slug: "portfolio", name: "aun.sh", blurb: "This site, explained by this site" },
] as const;
