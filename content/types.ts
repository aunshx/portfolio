/**
 * A screenshot served as pre-sized WebP files: `${base}-${width}.webp` for
 * every width listed. Pre-encoded so fine UI text stays sharp.
 */
export type HomeShot = {
  base: string;
  widths: number[];
  /** Intrinsic size of the largest file, for the aspect ratio. */
  w: number;
  h: number;
  alt: string;
};

export type WorkItem = {
  id: number;
  title: string;
  /** A few words: what it is. */
  description: string;
  /** One result, with the number kept separate so it can carry weight. */
  metric: { value: string; label: string };
  shot: HomeShot;
  link?: string;
  gitUrl?: string;
  year: string;
  /** Bare domain, for link text. */
  domain?: string;
  /** Slug of a case study at /work/[slug], when one exists. */
  caseStudy?: string;
  /** The card's colors, taken from the product itself. */
  tone: { bg: string; fg: string; muted: string; accent: string };
};

export type ExperienceItem = {
  name: string;
  /** A short name, for tight spots like the loading screen's map. */
  short?: string;
  position: string;
  duration: string;
  link?: string;
  /** One line, from the résumé. */
  summary: string;
};

export type ResearchItem = {
  title: string;
  /** Venue or status, when there is one. */
  note?: string;
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
