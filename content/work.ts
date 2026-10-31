import type { HomeShot, WorkItem } from "./types";

/** The hero figure: FRED's landing page. */
export const HERO_SHOT: HomeShot = {
  base: "/images/home/fred-landing",
  widths: [800, 1500],
  w: 1500,
  h: 809,
  alt: "FRED's landing page: “Ask a question about a place. Get an answer you can check,” beside a map that answers a question about a 10 MW plant near Redding.",
};

/** Newest first. */
export const WORK: WorkItem[] = [
  {
    id: 1,
    title: "FRED",
    description:
      "An AI system that answers questions about California's forests, like where to source wood for a new energy plant and what it will cost, and shows its work.",
    role: "Founder. Designed and built it.",
    metric: { value: "5,200×", label: "faster cost estimates than the standard simulator" },
    shot: {
      base: "/images/home/fred-app",
      widths: [560, 960],
      w: 960,
      h: 518,
      alt: "FRED's map workspace: a selected site in Plumas County with its cost breakdown beside the map.",
    },
    tech: ["Next.js", "TypeScript", "FastAPI", "PostGIS"],
    link: "https://biofred.us",
    domain: "biofred.us",
    year: "2026",
    caseStudy: "fred",
  },
  {
    id: 2,
    title: "reaktr",
    description:
      "A web app that models what it costs to produce cultivated meat, and its environmental impact, from one bioreactor up to a full plant.",
    role: "Designed and built it. Led a team of three.",
    metric: { value: "60+", label: "bioreactor setups, calculated live" },
    shot: {
      base: "/images/home/reaktr",
      widths: [560, 960],
      w: 960,
      h: 524,
      alt: "reaktr's landing page: “Cultivated food analytics, reimagined,” beside a cost dashboard.",
    },
    tech: ["Next.js", "TypeScript", "Chart.js"],
    gitUrl: "https://github.com/mcdonald-nandi-lab/cultivision",
    link: "https://reaktr.cc",
    domain: "reaktr.cc",
    year: "2025",
    caseStudy: "reaktr",
  },
  {
    id: 3,
    title: "FRREDSS",
    description:
      "A statewide tool that helps California decide where forest biomass energy plants should go. Funded by a $1.2M state grant.",
    role: "Graduate software developer, UC Davis.",
    metric: { value: "3 days to 30 minutes", label: "for a statewide assessment" },
    shot: {
      base: "/images/home/frredss",
      widths: [560, 960],
      w: 960,
      h: 522,
      alt: "FRREDSS landing page over an aerial photo of forest canopy.",
    },
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gitUrl: "https://github.com/ucdavis/cecdss",
    link: "https://forestdss.ucdavis.edu",
    domain: "forestdss.ucdavis.edu",
    year: "Since 2024",
  },
  {
    id: 4,
    title: "ResView",
    description:
      "A live visualizer that shows, message by message, how the nodes of a blockchain network reach agreement. Used in UC Davis courses.",
    role: "Built it, open source, for Apache ResilientDB.",
    metric: { value: "60%", label: "less debugging time than reading logs" },
    shot: {
      base: "/images/home/resview",
      widths: [560, 960],
      w: 960,
      h: 522,
      alt: "ResView's landing page: “Visualizer for New Age Blockchain Fabrics.”",
    },
    tech: ["JavaScript", "D3.js", "WebSockets"],
    gitUrl: "https://github.com/ResilientApp/ResView",
    link: "https://resview.resilientdb.com/pages/home",
    domain: "resview.resilientdb.com",
    year: "2023",
  },
];
