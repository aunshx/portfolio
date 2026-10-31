import type { ExperienceItem } from "./types";

/** Titles, dates and results match the résumé. */
export const EXPERIENCE: ExperienceItem[] = [
  {
    name: "University of California, Davis",
    position: "Graduate Software Developer",
    duration: "Sept 2024 – Present",
    link: "https://its.ucdavis.edu",
    work: [
      "Extended an open source bioenergy decision support system used in California energy policy: data pipelines over 3M+ forest clusters in R, a Node.js backend and PostgreSQL, deployed on Azure.",
      "Cut a 3-day consultant workflow to 30 minutes with heuristic optimization and spatial indexing, so planners can run statewide biomass assessments themselves.",
      "Built reaktr, an analytics platform for cultivated food research with an AI assistant, live calculations across 60+ bioreactor setups, and links that save every setting.",
      "Built signed-link sign-in with automated emails, and Python import pipelines that halved import time and removed manual onboarding steps.",
    ],
  },
  {
    name: "mlpal.ai",
    position: "Software Engineer",
    duration: "Mar 2024 – Aug 2024",
    link: "https://mlpal.ai",
    work: [
      "Built agent workflows with LangChain, ChromaDB and OpenAI embeddings that turn plain-language requirements into ranked model suggestions through semantic search, at 70% accuracy.",
      "Built the model catalog in Next.js, TypeScript, FastAPI and shadcn/ui, pulling Hugging Face metadata into PostgreSQL for display and search, packaged with Docker.",
      "Demoed the platform to investors and customers during early fundraising. Offered the founding engineer role at the end of the engagement.",
    ],
  },
  {
    name: "Prosperix, Inc",
    position: "Software Engineer",
    duration: "Aug 2022 – Aug 2023",
    link: "https://prosperix.com",
    work: [
      "Built onboarding and gamification features in React, TypeScript and Tailwind CSS that raised engagement 15% across 1,000+ monthly active users.",
      "Built Node.js and Express API integrations with loading states and error boundaries, making core features more reliable.",
      "Restructured GraphQL queries to stop over-fetching, and added client-side caching for the screens people opened most.",
      "Wrote Jest and React Testing Library suites, run in CircleCI, to catch regressions before each deploy.",
    ],
  },
  {
    name: "2WheelR",
    position: "Business Analyst",
    duration: "July 2021 – June 2022",
    link: "https://2wheelr.com",
    work: [
      "Built KPI dashboards in SQL and Tableau that cut reporting time by 20% and gave each department live performance numbers.",
      "Built market segmentation models and competitive analyses for the company's positioning.",
    ],
  },
  {
    name: "Teach for India",
    position: "Fellow",
    duration: "May 2020 – June 2021",
    link: "https://www.teachforindia.org/",
    work: [
      "Taught high school math and science to students from low-income communities.",
      "Ran workshops, field visits and events to keep students engaged.",
    ],
  },
];
