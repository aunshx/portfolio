import type { SkillGroup } from "./types";

/** Ordered for full-stack roles: the everyday stack first. */
export const SKILLS: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "D3.js", "Leaflet", "WebSockets"],
  },
  {
    group: "Backend",
    items: ["Node.js", "FastAPI", "Python", "GraphQL", "REST", "PostgreSQL", "PostGIS", "Redis"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "CI/CD", "AWS", "GCP", "Azure", "Netlify", "Git"],
  },
  {
    group: "AI and data",
    items: ["LangChain", "RAG", "XGBoost", "Pandas", "SQL", "R"],
  },
];
