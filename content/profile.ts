export const PROFILE = {
  name: "Aunsh Bandivadekar",
  shortName: "Aunsh",
  headline: "Full-stack engineer. I ship products end to end.",
  role: "Full-Stack Engineer",
  location: "Davis, California",
  coordinates: "38.54°N 121.74°W",
  bio: "I build and ship production systems. TypeScript and React on the front, Node and FastAPI behind it, PostgreSQL underneath, deployed on CI/CD I set up myself. Five years across startups, agencies and research labs, from a pre-seed founding engineer role to now developing AI for fields it hasn't touched.",
  /** Short version for the landing. The full bio lives below. */
  pitch: "TypeScript and React on the front. Node, FastAPI and PostgreSQL behind it. Five years shipping, now building AI for fields it hasn't touched.",
  tagline: "Fast interfaces, solid APIs, and infrastructure that stays up.",
  avatar: "/images/asxPortfolio.jpeg",
  /** Front and centre in the hero: what a reviewer scans for first. */
  stack: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "Docker", "AWS"],
} as const;

export const LINKS = {
  linkedin: "https://linkedin.com/in/aunsh",
  medium: "https://aunsh.medium.com/",
  email: "mailto:aunsh.spb@gmail.com",
  github: "https://github.com/aunshx",
  resume:
    "https://drive.google.com/file/d/12DklMUKkmv4QJcPMAh5xUn6p-NZDR1vJ/view?usp=sharing",
  license: "https://creativecommons.org/licenses/by-nc/4.0/deed.en",
} as const;

export const SITE = {
  url: "https://aun.sh",
  title: "Aunsh Bandivadekar, Full-Stack Engineer",
  description:
    "Full-stack engineer building production systems with React, Next.js, TypeScript, Node, FastAPI and PostgreSQL.",
} as const;

export const COLOPHON = {
  forged: "Forged with 🔥 in CA",
  note: {
    text: "Honoring our new AI overlords",
  },
  version: "v6.0.0",
  year: "2026",
} as const;
