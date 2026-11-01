import type { SkillGroup } from "./types";

/** From the résumé, AI second to match the roles he's after. */
export const SKILLS: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "D3.js", "Leaflet"],
  },
  {
    group: "AI and agents",
    items: ["Anthropic SDK", "OpenAI API", "LangChain", "LangGraph", "ChromaDB", "RAG"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "PostGIS", "Redis", "GraphQL"],
  },
  {
    group: "Infrastructure",
    items: ["GCP", "AWS", "Azure", "Docker", "GitHub Actions"],
  },
];
