import type { HomeShot, WorkItem } from "./types";

/** The hero figure: FRED's landing page. FRED is the hero, so it isn't in the grid. */
export const HERO_SHOT: HomeShot = {
  base: "/images/home/fred-landing-dark",
  widths: [800, 1500],
  w: 1500,
  h: 809,
  alt: "FRED's landing page in its dark theme: “Ask a question about a place. Get an answer you can check,” beside a map answering a question about a 10 MW plant near Redding.",
};

/** Newest first. The first item is shown large. */
export const WORK: WorkItem[] = [
  {
    id: 2,
    title: "reaktr",
    description: "Cost and impact modeling for cultivated meat.",
    metric: { value: "60+", label: "bioreactor setups, calculated live" },
    shot: {
      base: "/images/home/reaktr-landing",
      widths: [800, 1280],
      w: 1280,
      h: 698,
      alt: "reaktr's landing page: “Cultivated food analytics, reimagined,” beside a cost dashboard.",
    },
    gitUrl: "https://github.com/mcdonald-nandi-lab/cultivision",
    link: "https://reaktr.cc",
    domain: "reaktr.cc",
    year: "2025",
    caseStudy: "reaktr",
  },
  {
    id: 3,
    title: "FRREDSS",
    description: "Statewide planning for biomass energy in California.",
    metric: { value: "3 days to 30 min", label: "per assessment" },
    shot: {
      base: "/images/home/frredss",
      widths: [640, 1200],
      w: 1200,
      h: 652,
      alt: "FRREDSS landing page over an aerial photo of forest canopy.",
    },
    gitUrl: "https://github.com/ucdavis/cecdss",
    link: "https://forestdss.ucdavis.edu",
    domain: "forestdss.ucdavis.edu",
    year: "2024",
  },
  {
    id: 4,
    title: "ResView",
    description: "Live visualizer for blockchain consensus.",
    metric: { value: "300+", label: "students use it in UC Davis courses" },
    shot: {
      base: "/images/home/resview",
      widths: [640, 1200],
      w: 1200,
      h: 652,
      alt: "ResView's landing page: “Visualizer for New Age Blockchain Fabrics.”",
    },
    gitUrl: "https://github.com/ResilientApp/ResView",
    link: "https://resview.resilientdb.com/pages/home",
    domain: "resview.resilientdb.com",
    year: "2023",
  },
];
