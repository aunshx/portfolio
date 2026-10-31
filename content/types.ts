export type WorkItem = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  gitUrl?: string;
  /** Quiet credit line: grant, org, or status. */
  tag?: string;
  year?: string;
  /** Shown as a live status pill on the card. */
  status?: "live" | "building" | "handed-off" | "archived";
  /** Bare domain, rendered in the card's browser chrome. */
  domain?: string;
  /** The first card is featured and spans the grid. */
  featured?: boolean;
  /** Slug of a case study at /work/[slug], when one exists. */
  caseStudy?: string;
};

export type ExperienceItem = {
  name: string;
  position: string;
  duration: string;
  link?: string;
  work: string[];
  tech?: string[];
};

export type ResearchItem = {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  link?: string;
};

export type WritingItem = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  views: number;
  upvotes: number;
};

export type EducationItem = {
  title: string;
  degree: string;
  abbr?: string;
  duration?: string;
  extra?: string;
  logo: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

/* ------------------------------------------------------------------ */
/*  Case studies                                                       */
/* ------------------------------------------------------------------ */

export type Shot = {
  src: string;
  alt: string;
  /** Intrinsic size of the capture, so the layout never shifts. */
  w: number;
  h: number;
  /** Shown in the browser chrome when set. */
  domain?: string;
  caption?: string;
};

export type Metric = {
  value: string;
  unit?: string;
  label: string;
  accent?: boolean;
};

export type SpecimenFont = "outfit" | "dmSerif" | "jetbrains" | "geist" | "geistMono";

export type CaseStudy = {
  slug: string;
  title: string;
  /** Rendered after the title in the accent colour, e.g. ".cc". */
  titleSuffix?: string;
  tagline: string;
  /** Meta description. */
  description: string;
  domain: string;
  link: string;
  repo?: string;
  meta: { label: string; value: string }[];
  hero: Shot;
  summary: string;
  stats: Metric[];
  ownership: {
    heading: string;
    intro: string;
    rows: { area: string; detail: string }[];
  };
  chapters: { title: string; lead?: string; shots: Shot[] }[];
  mobile: { title: string; lead: string; shots: Shot[] };
  design: {
    title: string;
    swatches: { name: string; hex: string; onDark?: boolean }[];
    fonts: { family: SpecimenFont; name: string; role: string; sample: string }[];
    code?: { label: string; source: string };
    notes: string[];
  };
  tech: {
    title: string;
    steps: { kicker: string; title: string; detail: string }[];
    decisions: { title: string; detail: string }[];
    chips: string[];
  };
  performance: {
    title: string;
    lead: string;
    groups: { name: string; note: string; metrics: Metric[] }[];
  };
  optimization?: {
    title: string;
    lead: string;
    cards: { value: string; title: string; detail: string; href: string }[];
    shot?: Shot;
  };
  ai: { title: string; paragraphs: string[]; stats?: Metric[]; shot: Shot };
  code?: {
    title: string;
    lead: string;
    file: string;
    href: string;
    lang: string;
    source: string;
    note?: string;
  };
  next: string[];
  nextStudy: { slug: string; title: string };
};
