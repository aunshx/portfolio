import type { ExperienceItem } from "./types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    name: "University of California, Davis",
    position: "Software Developer",
    duration: "July 2024 - Present",
    link: "https://its.ucdavis.edu",
    work: [
      "Spearheaded development and system design of version 2.0 of the Forest Resources and Renewable Energy Decision Support System (FRREDSS)",
      "Implemented competitive feedstock analysis visualization using Python, TypeScript, Leaflet, CSS, and PostgreSQL",
      "Orchestrated CI/CD pipeline development and oversaw production deployment of the application",
    ],
    tech: ["Biomass", "Technoeconomic Analysis", "Lifecycle Assessment", "GIS"],
  },
  {
    name: "mlpal.ai",
    position: "Founding Engineer",
    duration: "July 2024 - Sept 2024",
    link: "https://mlpal.ai",
    work: [
      "Architected and developed pre-seed AI startup's application using FastAPI backend and NextJS frontend",
      "Created 'Sage', a RAG-based AI model selector agent that uses Langchain to determine optimal ML models based on user interactions",
      "Collaborated closely with founders to implement the model selection and inference pipeline for the platform",
    ],
    tech: ["Machine Learning", "Web Dev", "RAG", "Langchain"],
  },
  {
    name: "Prosperix",
    position: "Software Engineer",
    duration: "March 2023 - August 2023",
    link: "https://prosperix.com",
    work: [
      "Collaborated with an international team to develop two key in-app modules for the company's brand cut-over project",
      "Implemented robust UI/UX using ReactJS, CSS, Tailwind, and Git",
      "Designed fast and reliable APIs using GraphQL queries and enabled agile software development using CI-CD techniques",
    ],
    tech: ["React", "GraphQL", "Tailwind", "CSS"],
  },
  {
    name: "2WheelR",
    position: "Business Analyst",
    duration: "July 2021 - June 2022",
    link: "https://2wheelr.com",
    work: [
      "Designed and implemented comprehensive KPI dashboards using SQL and Tableau that streamlined decision-making processes",
      "Reduced reporting time by 20% and enabled real-time performance monitoring across departments",
      "Developed market segmentation models and competitive analyses that strengthened the company's market positioning",
    ],
    tech: ["SQL", "Tableau", "Analytics"],
  },
  {
    name: "Teach for India",
    position: "Fellow",
    duration: "May 2020 - June 2021",
    link: "https://www.teachforindia.org/",
    work: [
      "Led high school mathematics and science curriculum for underprivileged students",
      "Conducted personality development workshops, field visits and gatherings to increase engagement",
      "Received fellowship for commitment to educational equity",
    ],
  },
];
