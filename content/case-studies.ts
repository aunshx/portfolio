import type { CaseStudy } from "./types";

const FRED_IMG = "/images/case-studies/fred";
const REAKTR_IMG = "/images/case-studies/reaktr";

// Desktop captures are 1505 x 812 (FRED) and 1456 x 825 (reaktr); phones are
// 390 px viewports captured at 2x.
const fred: CaseStudy = {
  slug: "fred",
  title: "FRED",
  tagline: "Spatial agents for bioenergy optimization that show their work.",
  description:
    "How FRED's frontend makes an AI agent's work visible: landing page, design system, map workspace, streaming run log, performance and the retrieval architecture underneath.",
  domain: "biofred.us",
  link: "https://biofred.us",
  meta: [
    { label: "Role", value: "Founder. Designed and shipped the first release end to end" },
    { label: "Frontend", value: "React, TypeScript, Tailwind CSS, Leaflet" },
    { label: "Year", value: "2026. Live at biofred.us, in beta" },
    { label: "Recognition", value: "NSF I-Corps, 2026 cohort" },
  ],
  hero: {
    src: `${FRED_IMG}/landing-hero-dark.jpg`,
    alt: "FRED landing page hero: the headline Ask a question about a place, get an answer you can check, beside the map, the run log, a supply curve and the answer card",
    w: 1505,
    h: 812,
    domain: "biofred.us",
  },
  summary:
    "FRED turns a question about a place into a siting report with numbers you can check. The frontend's job was to make an AI agent's work visible: each tool call streams onto the screen as it runs, and every figure in the answer points back to the step that made it.",
  stats: [
    { value: "107", unit: "KB", label: "JavaScript on the landing page, compressed" },
    { value: "0", label: "layout shift on first load" },
    { value: "2", label: "themes from one set of color tokens" },
    { value: "7.2", unit: "s", label: "example run, streamed step by step" },
  ],
  ownership: {
    heading: "What I shipped",
    intro:
      "The first release was mine end to end, from the first sketch to the deploy pipeline. The team has grown since.",
    rows: [
      { area: "Design", detail: "Brand, layouts and the color-token system behind the dark and light themes." },
      { area: "Landing and blog", detail: "Scroll-driven sections that replay a real run, and the research blog on a Sanity CMS." },
      { area: "App frontend", detail: "Dashboard, Leaflet map workspace, the streaming run log and saved runs with export." },
      { area: "Agent backend", detail: "FastAPI agent loop, Redis caching and the PostGIS and H3 data layer." },
      { area: "Infrastructure", detail: "Deployment and continuous delivery on Google Cloud." },
      { area: "Research", detail: "The Compositional Spatial retrieval architecture and the write-ups behind it." },
    ],
  },
  chapters: [
    {
      title: "A landing page that shows the product working",
      lead: "No stock art. Every section replays a real run, so a visitor sees what the agent does before they sign in.",
      shots: [
        {
          src: `${FRED_IMG}/landing-hero-light.jpg`,
          alt: "The same landing hero in the light theme, with dark cards on warm paper and a darker gold call to action",
          w: 1505,
          h: 812,
          domain: "biofred.us · light theme",
          caption: 'Light theme. One toggle sets data-landing-theme="light" and the color variables do the rest.',
        },
        {
          src: `${FRED_IMG}/landing-run-replay.jpg`,
          alt: "Example run section: a replay of each tool step with its inputs, outputs and timing, and an answer typing in",
          w: 1505,
          h: 812,
          caption: "Run replay. Steps tick in with their timings and the answer types out the way it streams in the app.",
        },
        {
          src: `${FRED_IMG}/landing-platform.jpg`,
          alt: "Platform section: six cards with small animated diagrams for models as tools, reading the map, trade-offs, projections, streaming steps and new domains",
          w: 1505,
          h: 812,
          caption: "Platform grid. Each card's diagram is drawn in code and animates on scroll.",
        },
      ],
    },
    {
      title: "From a question to a report you can export",
      shots: [
        {
          src: `${FRED_IMG}/app-map-workspace.jpg`,
          alt: "The FRED workspace: a terrain map of Northern California with a location panel on the left and the agent panel on the right showing a procurement plan and cost breakdown",
          w: 1505,
          h: 812,
          domain: "biofred.us/chat",
          caption: "Workspace. A Leaflet map on terrain tiles, a location panel with an auto-sized radius, and the agent panel where results stream in as formatted tables.",
        },
        {
          src: `${FRED_IMG}/app-dashboard.jpg`,
          alt: "Dashboard: an Ask about a place input with suggested prompts, saved runs with chips for coordinates, capacity, tools and cost, and an overview panel",
          w: 1505,
          h: 812,
          caption: "Dashboard. Saved runs show their key numbers as chips, so a planner can scan results without opening each one.",
        },
        {
          src: `${FRED_IMG}/app-run-report.jpg`,
          alt: "Saved run page: title, a Continue this run button, summary cards, a summary and a transcript with Markdown and JSON export",
          w: 1505,
          h: 812,
          caption: "Saved run. Summary cards up top, the full transcript below, export to Markdown or JSON, and one button to pick the run back up.",
        },
      ],
    },
  ],
  mobile: {
    title: "The same product at 390 pixels",
    lead: "The hero trims down to the question, the map and the answer. Navigation folds into a full-width menu, the app sidebar becomes a menu button, and run summaries reflow into a two-column grid.",
    shots: [
      { src: `${FRED_IMG}/m-hero.jpg`, alt: "Mobile landing hero: headline, two call to action buttons and the start of the map card", w: 764, h: 1568, caption: "Hero" },
      { src: `${FRED_IMG}/m-menu.jpg`, alt: "Mobile menu open: full-width links for How it works, Platform, Research, Docs and Blog", w: 764, h: 1567, caption: "Menu" },
      { src: `${FRED_IMG}/m-platform.jpg`, alt: "Mobile platform section: heading and platform cards in one column", w: 764, h: 1568, caption: "Platform" },
      { src: `${FRED_IMG}/m-dashboard.jpg`, alt: "Mobile dashboard: menu button, Ask about a place input, suggested prompts and saved runs", w: 764, h: 1567, caption: "Dashboard" },
      { src: `${FRED_IMG}/m-run.jpg`, alt: "Mobile saved run: title, Continue this run button and summary cards in a two-column grid", w: 764, h: 1567, caption: "Saved run" },
    ],
  },
  design: {
    title: "Forest night, warm paper and one gold accent",
    swatches: [
      { name: "Canvas", hex: "#0A1410", onDark: true },
      { name: "Surface", hex: "#0E1814", onDark: true },
      { name: "Brand", hex: "#395442", onDark: true },
      { name: "Gold", hex: "#C8A96E" },
      { name: "Signal", hex: "#4ADE80" },
      { name: "Primary", hex: "#F5F0E6" },
      { name: "Ink", hex: "#16211B", onDark: true },
    ],
    fonts: [
      { family: "outfit", name: "Outfit", role: "Interface and headlines", sample: "Ask a question about a place." },
      { family: "dmSerif", name: "DM Serif Display", role: "Wordmark and one italic word per headline", sample: "check." },
      { family: "jetbrains", name: "JetBrains Mono", role: "Coordinates, timings, units and button labels", sample: "R* = 84 km · 1.8s" },
    ],
    code: {
      label: "Tokens as color channels",
      source: `/* :root and :root[data-landing-theme="light"] */
--c-canvas: 10 20 16;
--c-gold:   200 169 110;
--c-accent: 74 222 128;

/* Tailwind reads them by name */
<header class="sticky bg-canvas/85 backdrop-blur-md border-b border-edge-soft">`,
    },
    notes: [
      "Storing colors as bare RGB channels lets Tailwind add opacity, so bg-canvas/85 works with no extra tokens.",
      "Components use names like canvas, edge and gold, never hex values. The light theme only redefines the variables.",
      "A skip link and a focus ring token ship with the base layout.",
    ],
  },
  tech: {
    title: "How the frontend is put together",
    steps: [
      { kicker: "Browser", title: "React single-page app", detail: "TypeScript, Tailwind on shared tokens, Leaflet for the map. Routes load their own code." },
      { kicker: "Stream", title: "Server-sent events", detail: "Tool steps and answer text stream to the browser as they happen." },
      { kicker: "Agent", title: "FastAPI and Redis", detail: "Runs the agent loop on Google Cloud and caches result sets between turns." },
      { kicker: "Data", title: "PostGIS and models", detail: "Spatial queries, H3 hexagon grids and machine learning surrogates of cost and fire models." },
    ],
    decisions: [
      { title: "Code split by route", detail: "The landing page ships one script. The map and chat, about 134 KB more, load only when someone opens the app." },
      { title: "Streaming states", detail: "Steps appear as they finish, each with its inputs, output and time, so a multi-second run never looks frozen." },
      { title: "Runs you can resume", detail: "Every run is saved as a transcript that reopens in the workspace and exports to Markdown or JSON." },
    ],
    chips: ["React", "TypeScript", "Tailwind CSS", "Leaflet", "Server-sent events", "Sanity", "FastAPI", "Redis", "PostGIS", "H3", "Google Cloud"],
  },
  performance: {
    title: "Measured, not guessed",
    lead: "First load of biofred.us in desktop Chrome on October 30, 2026, read from the browser's Performance API.",
    groups: [
      {
        name: "Landing page",
        note: "biofred.us · HTTP/2",
        metrics: [
          { value: "107", unit: "KB", label: "JavaScript, compressed (352 KB uncompressed)" },
          { value: "13", unit: "KB", label: "CSS, one file" },
          { value: "13", label: "requests on first load" },
          { value: "0", label: "cumulative layout shift", accent: true },
          { value: "1.1", unit: "s", label: "until the load event" },
          { value: "+134", unit: "KB", label: "map and chat code, loaded only in the app", accent: true },
        ],
      },
    ],
  },
  optimization: {
    title: "Fast enough that a what-if feels instant",
    lead: "A run log only feels honest if it moves. Each fix below is written up on the FRED blog.",
    cards: [
      { value: "< 2 ms", title: "Hexagon drill-down", detail: "Records are pre-grouped at three hexagon sizes, so a region-wide question becomes three fast lookups.", href: "https://biofred.us/blog/hierarchical-hex-indexing" },
      { value: "1 to 3 s", title: "Radius before retrieval", detail: "A geometric binary search sizes the search area first, against 8 to 25 seconds for running the full pipeline to find out.", href: "https://biofred.us/blog/estimating-a-retrieval-radius" },
      { value: "½", title: "Half the wait on follow-ups", detail: "Splitting database reads from math over cached results halved latency when a user changes one input.", href: "https://biofred.us/blog/agent-tool-granularity" },
      { value: "5200×", title: "Surrogate cost model", detail: "Machine learning surrogates return cost estimates 5200 times faster than the Fuel Reduction Cost Simulator.", href: "https://biofred.us/blog/surrogate-deterministic-oracle" },
    ],
    shot: {
      src: `${FRED_IMG}/landing-research.jpg`,
      alt: "Research section of the landing page: cards for retrieval over prediction surfaces, hierarchical hexagon indexing and tool granularity",
      w: 1505,
      h: 812,
      caption: "Research grid. Each optimization has its own write-up with tags and a table of contents.",
    },
  },
  ai: {
    title: "Retrieve numbers, compute, then write",
    paragraphs: [
      "Standard retrieval-augmented generation pulls passages of text. Siting questions need numbers that don't exist until something computes them.",
      "FRED's Compositional Spatial retrieval pulls from three model prediction surfaces over 11.9 million spatial records, computes the answer, and only then lets the language model write.",
      "That order is what makes the interface possible. Every number in an answer comes from a tool call, so the screen can show where it came from.",
    ],
    stats: [
      { value: "166M", label: "model predictions statewide" },
      { value: "3.1M", label: "forest sites indexed" },
    ],
    shot: {
      src: `${FRED_IMG}/blog-article.jpg`,
      alt: "Blog article Retrieval over prediction surfaces, not documents, with tags, a table of contents and an illustration of three stacked prediction layers",
      w: 1505,
      h: 812,
      caption: "The write-up on biofred.us, with a sticky table of contents that tracks the section you're reading.",
    },
  },
  next: [
    "Run Lighthouse in CI with a budget that keeps the landing script near 107 KB.",
    "Rework the map workspace for phones, where the agent panel and map controls compete for the same space.",
    "Show each tool's latency and cache hits live in the run log.",
    "Open a public API once the first endpoints settle.",
  ],
  nextStudy: { slug: "reaktr", title: "reaktr" },
};

const reaktr: CaseStudy = {
  slug: "reaktr",
  title: "reaktr",
  titleSuffix: ".cc",
  tagline: "Cost analytics for cultivated food, with an AI copilot built in.",
  description:
    "How reaktr turns a lab's cost model for cultivated meat into a dashboard anyone can tune, share by link and question in plain English.",
  domain: "reaktr.cc",
  link: "https://reaktr.cc",
  repo: "https://github.com/mcdonald-nandi-lab/cultivision",
  meta: [
    { label: "Role", value: "Designed and built all of it. Led a team of three researchers" },
    { label: "Where", value: "McDonald-Nandi Lab, UC Davis" },
    { label: "Frontend", value: "Next.js, React, Tailwind CSS, Chart.js" },
    { label: "Year", value: "2025. Live at reaktr.cc" },
  ],
  hero: {
    src: `${REAKTR_IMG}/hero.jpg`,
    alt: "reaktr landing hero: the headline Cultivated food analytics, reimagined, beside a tilted preview of the dashboard with cost cards, an OPEX donut and a cost breakdown",
    w: 1456,
    h: 825,
    domain: "reaktr.cc",
  },
  summary:
    "The cost of cultivated meat swings on a few dozen inputs: reactor size, doubling time, media price, labor. reaktr turns the lab's cost model into a dashboard anyone can tune, share by link and question in plain English.",
  stats: [
    { value: "4", label: "bioreactor types to compare" },
    { value: "60+", label: "preset configurations" },
    { value: "7", label: "cost categories, each with its own chart" },
    { value: "$26.73", label: "per kg for the 105,000 L baseline", accent: true },
  ],
  ownership: {
    heading: "What I built",
    intro:
      "Every screen and service on this page is my work. I also ran the project for a team of three researchers in Jira.",
    rows: [
      { area: "Product and brand", detail: "The CultiVision product and its rebrand to reaktr." },
      { area: "Landing page", detail: "The redesign, with live analytics previews and the Wiz demo." },
      { area: "Dashboard", detail: "Parameters panel, result cards, OPEX and CAPEX charts including the nested doughnut, and the process flow diagrams." },
      { area: "Sharing and export", detail: "Share links that carry the whole configuration, chart and table downloads, CSV export and the full report." },
      { area: "Access control", detail: "The request form, email verification and expiring personal links." },
      { area: "Wiz", detail: "The retrieval-augmented assistant, its streaming API and the chat interface." },
    ],
  },
  chapters: [
    {
      title: "Show the numbers, not stock art",
      lead: "Every section of the redesigned landing page is built from the dashboard's real output, so a visitor sees the product before asking for access.",
      shots: [
        {
          src: `${REAKTR_IMG}/features.jpg`,
          alt: "Features section with six feature cards for cost analysis, visualizations, bioreactor configurations, parameters, sharing and research-grade data",
          w: 1456,
          h: 825,
          caption: "Features. Six cards on one hairline grid, with a scrolling ticker of the platform's numbers above.",
        },
        {
          src: `${REAKTR_IMG}/analytics.jpg`,
          alt: "Live analytics preview: an OPEX breakdown with bars and dollar amounts, key metric cards and a bioreactor comparison",
          w: 1456,
          h: 825,
          caption: "Live analytics preview. The same breakdown, metrics and reactor comparison the dashboard produces.",
        },
      ],
    },
    {
      title: "Change an input, see the cost move",
      lead: "Parameters on the left, results on the right. Reactor, doubling time and cell density come as presets, and every cost input shows its base case underneath.",
      shots: [
        {
          src: `${REAKTR_IMG}/dash.jpg`,
          alt: "Dashboard: a parameters panel, four result cards for COGS, operating and capital expenses and facilities, an OPEX donut chart and a cost breakdown table",
          w: 1456,
          h: 825,
          domain: "mcdonald-nandi-lab.github.io/cultivision",
          caption: "The dashboard. Four headline numbers, then a chart and a table for each cost type. Every chart and table has its own download button.",
        },
        {
          src: `${REAKTR_IMG}/capex.jpg`,
          alt: "CAPEX distribution as a nested doughnut: the outer ring shows main capital categories and the inner ring breaks down direct fixed capital",
          w: 1456,
          h: 825,
          caption: "Nested doughnut. The outer ring holds the capital categories and the inner ring splits the largest one, so a 93% slice still has detail.",
        },
        {
          src: `${REAKTR_IMG}/flow.jpg`,
          alt: "Process flow diagram for the 105,000 liter stirred configuration: seed reactors feeding a production reactor and centrifuge",
          w: 1164,
          h: 685,
          caption: "Process flow. Each configuration opens its own reactor train with the volumes for every stage.",
        },
      ],
    },
    {
      title: "Open to request, gated by link",
      lead: "Access is by request. Visitors fill in a short form, then get a personal link by email that expires after a few days. A three-step tracker shows where they are.",
      shots: [
        {
          src: `${REAKTR_IMG}/access.jpg`,
          alt: "Request Access page: a three-step progress card and a form for name, email, affiliation, use case and terms",
          w: 1456,
          h: 825,
          domain: "reaktr.cc/access",
          caption: "Request access. Required fields, a 20 to 500 character use case with a live counter, and terms to accept before sending.",
        },
      ],
    },
  ],
  mobile: {
    title: "The same tools at 390 pixels",
    lead: "The landing page stacks into one column and the copilot keeps its prompt chips. In the dashboard, parameters and charts stack, and each chart keeps its legend and download button.",
    shots: [
      { src: `${REAKTR_IMG}/m-hero.jpg`, alt: "Mobile landing hero with the headline and three call to action buttons", w: 764, h: 1567, caption: "Hero" },
      { src: `${REAKTR_IMG}/m-wiz.jpg`, alt: "Mobile Wiz section with a sample conversation and prompt chips", w: 764, h: 1567, caption: "Wiz" },
      { src: `${REAKTR_IMG}/m-params.jpg`, alt: "Mobile dashboard parameters panel with reactor, doubling time, density and cost inputs", w: 764, h: 1568, caption: "Parameters" },
      { src: `${REAKTR_IMG}/m-opex.jpg`, alt: "Mobile OPEX distribution donut with legend and the start of the breakdown table", w: 764, h: 1568, caption: "OPEX" },
      { src: `${REAKTR_IMG}/m-capex.jpg`, alt: "Mobile CAPEX nested doughnut with legend and chart guide", w: 764, h: 1568, caption: "CAPEX" },
    ],
  },
  design: {
    title: "Night navy and one mint signal",
    swatches: [
      { name: "Ground", hex: "#0A0F1A", onDark: true },
      { name: "Surface", hex: "#0F1824", onDark: true },
      { name: "Raised", hex: "#141F2E", onDark: true },
      { name: "Slate", hex: "#7A95B0" },
      { name: "Text", hex: "#EEF2F7" },
      { name: "Mint", hex: "#00E5C3" },
    ],
    fonts: [
      { family: "geist", name: "Geist 900", role: "Black-weight headlines with tight tracking", sample: "Real data. Real decisions." },
      { family: "geistMono", name: "Geist Mono", role: "Uppercase labels, pills and units", sample: "COGS W/ DEPR. · 105,000 L" },
    ],
    notes: [
      "One phrase per headline goes mint. Everything else stays in the navy and slate range.",
      "Both fonts load through next/font, so there's no layout jump when they arrive.",
      "The dashboard still runs the earlier CultiVision look. Moving it onto this system is next.",
    ],
  },
  tech: {
    title: "Two apps, one front door",
    steps: [
      { kicker: "reaktr.cc", title: "Marketing site", detail: "Next.js App Router with server components, built with Turbopack and served from Netlify." },
      { kicker: "/access", title: "Request and verify", detail: "A validated form, then a personal, expiring link sent by email." },
      { kicker: "Dashboard", title: "Static Next.js export", detail: "Hosted on GitHub Pages. Chart.js on canvas, Tailwind CSS v4 and the whole configuration kept in the URL." },
      { kicker: "Wiz", title: "Streaming assistant", detail: "Retrieval-augmented answers streamed back over its own API." },
    ],
    decisions: [
      { title: "Share by URL", detail: "Only the inputs that differ from the defaults go into the link, so a shared URL stays short and opens the exact same analysis." },
      { title: "Export everything", detail: "Every chart and table has its own download, plus a full report, so the numbers can go straight into a slide or a paper." },
      { title: "Explain every term", detail: "Each cost line has an info tooltip, and each input shows its base case, for readers who aren't bioprocess engineers." },
    ],
    chips: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Turbopack", "next/font", "Netlify", "GitHub Pages"],
  },
  performance: {
    title: "Measured on the live sites",
    lead: "Desktop Chrome, October 30, 2026, read from the browser's Performance API. Sizes are what travels over the network.",
    groups: [
      {
        name: "Landing page",
        note: "reaktr.cc · Brotli",
        metrics: [
          { value: "363", unit: "KB", label: "JavaScript in 20 chunks" },
          { value: "11", unit: "KB", label: "CSS" },
          { value: "48", label: "requests" },
          { value: "0", label: "layout shift", accent: true },
        ],
      },
      {
        name: "Dashboard",
        note: "GitHub Pages · gzip",
        metrics: [
          { value: "273", unit: "KB", label: "JavaScript in 18 chunks" },
          { value: "10", unit: "KB", label: "CSS" },
          { value: "20", label: "requests" },
          { value: "0", label: "layout shift", accent: true },
        ],
      },
    ],
  },
  ai: {
    title: "Ask the dashboard a question",
    paragraphs: [
      "Not every visitor knows which chart answers their question. Wiz takes the question in plain English and answers from the configuration on screen.",
      "Ask what drives cost and it ranks the categories with their share and dollar amount, then offers to model a change, like cutting media cost by 20%.",
      "Answers are retrieval-augmented and stream in as they're written. Prompt chips under the input give first-time users a place to start.",
    ],
    shot: {
      src: `${REAKTR_IMG}/wiz.jpg`,
      alt: "Meet Wiz section: a chat window where Wiz breaks down what affects cost of goods sold, next to three capability cards",
      w: 1456,
      h: 825,
      caption: "Wiz on the landing page, with the same answer format it gives inside the product.",
    },
  },
  code: {
    title: "Share links that only carry what changed",
    lead: "A shared link has to reopen the exact analysis without a database. The encoder keeps only the inputs that differ from the defaults and packs them into URL-safe base64.",
    file: "src/lib/url-params.ts",
    href: "https://github.com/mcdonald-nandi-lab/cultivision/blob/main/src/lib/url-params.ts",
    lang: "TypeScript",
    source: `export function encodeProductionCosts(costs: ProductionCosts): string {
  const changedParams: Record<string, number> = {};

  orderedKeys.forEach((key) => {
    const defaultValue = DEFAULT_PRODUCTION_COSTS[key];
    const currentValue = costs[key];

    if (Math.abs(currentValue - defaultValue) > 0.001) {
      changedParams[key] = currentValue;
    }
  });

  if (Object.keys(changedParams).length === 0) {
    return "";
  }

  return btoa(JSON.stringify(changedParams))
    .replace(/\\+/g, "-")
    .replace(/\\//g, "_")
    .replace(/=+$/, "");
}`,
    note: "Lightly trimmed. The decoder reverses it and merges onto the defaults, so old links survive new inputs.",
  },
  next: [
    "Move the dashboard onto the reaktr design system so the rebrand is complete end to end.",
    "Put the four headline results first on phones and fold the parameters into a drawer.",
    "Trim the landing page's 363 KB of JavaScript, starting with its three largest chunks.",
  ],
  nextStudy: { slug: "fred", title: "FRED" },
};

export const CASE_STUDIES: CaseStudy[] = [fred, reaktr];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
