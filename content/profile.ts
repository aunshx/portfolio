export const PROFILE = {
  name: "Aunsh Bandivadekar",
  shortName: "Aunsh",
  headline: "Full-stack engineer. I ship products end to end.",
  role: "Software Engineer",
  location: "San Francisco Bay Area",
  /** The one line under the name on the landing. */
  pitch: "Full-stack engineer. I build products end to end.",
  /** The aside under the pitch. */
  quip: "Yes, including the CSS.",
  availability: "Open to full-stack and applied AI roles",
  tagline: "Fast interfaces, solid APIs, and infrastructure that stays up.",
  email: "aunsh.spb@gmail.com",
  avatar: "/images/asxPortfolio.jpeg",
} as const;

export const LINKS = {
  linkedin: "https://linkedin.com/in/aunsh",
  medium: "https://aunsh.medium.com/",
  email: "mailto:aunsh.spb@gmail.com",
  github: "https://github.com/aunshx",
  /** Served from the site. Replace public/resume.pdf to update it. */
  resume: "/resume.pdf",
  license: "https://creativecommons.org/licenses/by-nc/4.0/deed.en",
} as const;

export const SITE = {
  url: "https://aun.sh",
  title: "Aunsh Bandivadekar · Software Engineer",
  description:
    "Full-stack engineer in the San Francisco Bay Area, building products end to end with React, Next.js, TypeScript, FastAPI and PostgreSQL.",
} as const;

export const COLOPHON = {
  credit: "Built in CA, mostly after midnight.",
  year: "2021–26",
  version: "7.0.3",
} as const;
