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
