export type TldrLink = {
  label: string;
  detail: string;
  href: string;
  image?: string;
};

export const TLDR_LINKS: TldrLink[] = [
  {
    label: "FRED",
    detail: "Spatial agents for forest biomass procurement",
    href: "https://biofred.us",
    image: "/images/work/fred.png",
  },
  {
    label: "reaktr",
    detail: "Techno-economic analytics for cultivated meat",
    href: "https://reaktr.cc",
    image: "/images/work/reaktr.png",
  },
  {
    label: "ResView",
    detail: "PBFT consensus visualizer on Apache ResilientDB",
    href: "https://resview.resilientdb.com/pages/home",
    image: "/images/work/resview.png",
  },
  {
    label: "Portfolio",
    detail: "The long version, with work and writing",
    href: "https://aun.sh",
  },
];
