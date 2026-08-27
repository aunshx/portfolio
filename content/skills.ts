import type { SkillGroup } from "./types";

/** Ordered for full-stack roles: the everyday stack first. */
export const SKILLS: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Redux", "Tailwind", "D3.js", "Leaflet"],
  },
  {
    group: "Backend",
    items: ["Node.js", "FastAPI", "Python", "GraphQL", "REST", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Infra & Tooling",
    items: ["Docker", "CI/CD", "AWS", "Netlify", "Git", "PostGIS"],
  },
  {
    group: "ML & Data",
    items: ["LangChain", "RAG", "XGBoost", "Pandas", "SQL"],
  },
];
