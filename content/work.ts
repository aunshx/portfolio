import type { WorkItem } from "./types";

export const WORK: WorkItem[] = [
  {
    id: 1,
    title: "FRED",
    subTitle: "Spatial agents for biomass",
    description:
      "AI system that turns California forest spatial data into procurement decisions. Compositional Spatial RAG composes ML prediction layers, runs fire-risk-aware Pareto optimization, and responds in plain language.",
    image: "/images/work/fred.png",
    tech: ["Python", "FastAPI", "PostGIS", "RAG"],
    link: "https://biofred.us",
    domain: "biofred.us",
    status: "building",
    featured: true,
  },
  {
    id: 2,
    title: "reaktr",
    subTitle: "Sustainable food agentic analytics",
    description:
      "Techno-economic and sustainability analysis platform for cultivated meat production. Models bioreactor performance, cost metrics, and environmental impact across production scales.",
    image: "/images/work/reaktr.png",
    tech: ["Next.js", "TypeScript", "Python", "Vercel"],
    gitUrl: "https://github.com/mcdonald-nandi-lab/cultivision",
    link: "https://reaktr.cc",
    domain: "reaktr.cc",
    status: "handed-off",
  },
  {
    id: 3,
    title: "ResView",
    subTitle: "Blockchain visualizer",
    description:
      "Graphical PBFT consensus visualizer on Apache ResilientDB. Renders live node state, message passing, and fault-tolerance behavior in real time.",
    image: "/images/work/resview.png",
    tech: ["JavaScript", "WebSockets", "D3.js", "C++"],
    gitUrl: "https://github.com/ResilientApp/ResView",
    link: "https://resview.resilientdb.com/pages/home",
    domain: "resview.resilientdb.com",
    status: "archived",
    tag: "Open source",
    year: "2023",
  },
  {
    id: 4,
    title: "FRREDSS",
    subTitle: "Forest biomass siting tool",
    description:
      "Statewide decision support system for forest biomass energy siting in California. Built under a $1.2M CA OPR grant, coupling techno-economic assessment, LCA, and geospatial optimization.",
    image: "/images/work/frredss.jpg",
    tech: ["TypeScript", "React", "PostgreSQL", "Leaflet", "Python"],
    gitUrl: "https://github.com/ucdavis/cecdss",
    link: "https://forestdss.ucdavis.edu",
    domain: "forestdss.ucdavis.edu",
    status: "live",
    tag: "$1.2M CA OPR grant",
  },
];
