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
  nextStudy: { slug: "frredss", title: "FRREDSS" },
};

const RESVIEW_IMG = "/images/case-studies/resview";

// Captured from the production build in the repo (the original deployment has
// moved), at 1505 x 812; the phone capture is an iPhone 13 at 3x, scaled down.
const resview: CaseStudy = {
  slug: "resview",
  title: "ResView",
  tagline: "Byzantine consensus you can watch, one message at a time.",
  description:
    "How ResView turns PBFT consensus in Apache ResilientDB into an animated graph you can inspect: D3 message flows, faulty replicas, a no-primary mode, message-timing charts and a teaching landing page.",
  domain: "aunsh.medium.com",
  link: "https://aunsh.medium.com/resview-a-pbft-visualizer-based-on-the-resilientdb-blockchain-fabric-3ffaeb2aaee5",
  linkLabel: "Read the write-up",
  repo: "https://github.com/ExpoLab-App/ResView",
  meta: [
    { label: "Role", value: "Designed and built the frontend. 316 of the repo's 385 commits" },
    { label: "Where", value: "ExpoLab, UC Davis, on Apache ResilientDB (incubating)" },
    { label: "Frontend", value: "React, D3.js, Nivo, Tailwind CSS" },
    { label: "Year", value: "2023 to 2025. Used in UC Davis courses" },
  ],
  hero: {
    src: `${RESVIEW_IMG}/hero.jpg`,
    alt: "ResView visualizer: a PBFT graph with the client and four replicas across request, pre-prepare, prepare, commit and reply, replica 3 marked faulty and sending nothing, beside overview and analytics panels",
    w: 1505,
    h: 812,
    domain: "ResView · /pages/visualizer",
  },
  summary:
    "PBFT is how a blockchain's replicas agree on a transaction even when some of them lie. On paper it's a wall of arrows. ResView draws each round the way it happened in ResilientDB: every pre-prepare, prepare, commit and reply as a line you can watch travel, with faulty replicas, timings and charts alongside.",
  stats: [
    { value: "5", label: "consensus phases, animated from request to reply" },
    { value: "f = 1", label: "faulty replica a 4-node cluster survives, and you pick which" },
    { value: "316", label: "of the repo's 385 commits are mine" },
    { value: "300+", label: "students in UC Davis courses", accent: true },
  ],
  ownership: {
    heading: "What I built",
    intro:
      "The frontend is mine, from the first commit in November 2023 to the latest release. Saipranav Kotamreddy wrote the replica data feed, over WebSockets in 2023 and by polling in 2024.",
    rows: [
      { area: "Consensus graph", detail: "The D3 graph: each message path fades in, then a dot travels it, phase by phase, with the primary and faulty replicas labelled." },
      { area: "Playback", detail: "Play, clear and three speeds, each with its own phase timings." },
      { area: "Fault modes", detail: "Faulty replicas drawn sending no prepare, commit or reply, and a no-primary mode where every healthy replica broadcasts." },
      { area: "Dashboard", detail: "Sidebar status, overview and analytics panels, message-timing charts that open full size, and a transaction table that replays a round on click." },
      { area: "Landing page", detail: "A PBFT explainer, light and dark themes, and the team page." },
      { area: "Delivery", detail: "Ticketed branches and 64 merged pull requests across the 2024 and 2025 releases." },
    ],
  },
  chapters: [
    {
      kicker: "Visualizer",
      title: "Every message in a round, drawn as it travels",
      lead: "Rows are the client and the replicas, columns are the phases. Each message fades in as a line and a dot runs along it, so you see who talked to whom and in what order.",
      shots: [
        {
          src: `${RESVIEW_IMG}/midflight.jpg`,
          alt: "The PBFT graph mid-round: the request has reached the primary, its pre-prepare has gone out, and prepare messages are being exchanged",
          w: 1505,
          h: 812,
          domain: "ResView · /pages/visualizer",
          caption: "Mid-round. The primary's pre-prepare is out and the replicas are trading prepare messages.",
        },
        {
          src: `${RESVIEW_IMG}/no-primary.jpg`,
          alt: "A transaction with no primary: an amber No Primary Exists badge, the request sent to every replica, every replica sending a pre-prepare, and faulty replica 1 silent after that",
          w: 1505,
          h: 812,
          caption: "No primary. The request goes to every replica, every healthy replica broadcasts, and a badge says why.",
        },
        {
          src: `${RESVIEW_IMG}/light.jpg`,
          alt: "The visualizer in the light theme, with darker phase colors on a pale blue background",
          w: 1505,
          h: 812,
          caption: "Light theme. The phase colors get darker versions instead of the dark theme's, so lines keep their contrast.",
        },
      ],
    },
    {
      kicker: "Dashboard",
      title: "Numbers next to the picture",
      lead: "Below the graph: when each replica's prepare and commit messages arrived, a form to send a transaction, the switch that makes a replica faulty, and every transaction in a table.",
      shots: [
        {
          src: `${RESVIEW_IMG}/charts.jpg`,
          alt: "Prepare and commit messages over time as step charts, one line per replica, above the send transaction form and the faulty replica selector",
          w: 1505,
          h: 812,
          caption: "Messages over time. One line per replica, each toggled on its own, all timed from when the first replica started accepting messages.",
        },
        {
          src: `${RESVIEW_IMG}/chart-modal.jpg`,
          alt: "The prepare messages chart open full size in a modal over the dimmed dashboard",
          w: 1505,
          h: 812,
          caption: "Any chart opens full size.",
        },
        {
          src: `${RESVIEW_IMG}/table.jpg`,
          alt: "Current transactions table: each transaction's primary, faulty replicas and per-replica commit and execution timestamps, with pagination",
          w: 1505,
          h: 812,
          caption: "Every transaction, with per-replica timestamps. Click a row to replay that round above.",
        },
      ],
    },
    {
      kicker: "Landing page",
      title: "Teach PBFT, then show it",
      lead: "The home page explains the five phases with a screenshot of the tool's graph, so a student arrives at the visualizer knowing what to watch for.",
      shots: [
        {
          src: `${RESVIEW_IMG}/home.jpg`,
          alt: "ResView home page: the headline Visualizer for New Age Blockchain Fabrics with Visualizer and Learn More buttons on a navy gradient",
          w: 1505,
          h: 812,
          domain: "ResView · /pages/home",
        },
        {
          src: `${RESVIEW_IMG}/pbft-intro.jpg`,
          alt: "What is PBFT section: a one-paragraph definition above a full consensus round drawn by the graph",
          w: 1505,
          h: 860,
          caption: "What is PBFT? One paragraph, then a screenshot of a full round.",
        },
        {
          src: `${RESVIEW_IMG}/pbft-phases.jpg`,
          alt: "Five numbered phase cards: request, pre-prepare, prepare, commit and reply, each with who sends to whom and what it means",
          w: 1505,
          h: 610,
          caption: "The five phases, each with who sends to whom.",
        },
      ],
    },
  ],
  mobile: {
    title: "Desktop only, on purpose",
    lead: "Five phases across and five rows down need the full width to stay readable, so phones get a short note pointing to a laptop instead of a squeezed graph. A phone layout is first on the list below.",
    shots: [
      { src: `${RESVIEW_IMG}/m-gate.jpg`, alt: "ResView on a phone: the logo and the message ResView is available only on desktops, Macs and PCs", w: 764, h: 1301, caption: "Phones" },
    ],
  },
  design: {
    title: "Night navy, teal, and one color per phase",
    swatches: [
      { name: "Ground", hex: "#0F172A", onDark: true },
      { name: "Teal", hex: "#26D8C4" },
      { name: "Request", hex: "#2196F3", onDark: true },
      { name: "Pre-prepare", hex: "#9C27B0", onDark: true },
      { name: "Prepare", hex: "#FFC107" },
      { name: "Commit", hex: "#00BCD4" },
      { name: "Reply", hex: "#4CAF50" },
    ],
    fonts: [
      { family: "system", name: "System UI", role: "Labels, numbers and headings. No web font to load in a tool that's mostly lines.", sample: "Replica 3 · Faulty" },
    ],
    notes: [
      "Each phase keeps its color in the graph and the explainer; the timing charts color by replica instead.",
      "The light theme swaps in darker versions of the five phase colors instead of reusing the dark ones.",
      "The theme is saved locally and set as data-theme on the page, which Tailwind's dark variant reads.",
    ],
  },
  tech: {
    title: "From replicas to a graph",
    steps: [
      { kicker: "Replicas", title: "ResilientDB with ResView on", detail: "Four replicas run with enable_resview, which exposes each transaction's phase timestamps, primary and messages received." },
      { kicker: "Fetch", title: "Four endpoints, in parallel", detail: "The app reads /consensus_data from every replica every 20 seconds and merges the results by transaction. The first version streamed over WebSockets." },
      { kicker: "Compute", title: "Points, lines, connections", detail: "Plain functions turn a transaction into grid points and the lines between them, allowing for faulty replicas and a missing primary." },
      { kicker: "Draw", title: "D3 on stacked SVGs", detail: "D3 draws on four stacked SVG layers, staggering each phase's messages, so a round plays back in order at any of three speeds." },
    ],
    decisions: [
      { title: "Works without a cluster", detail: "The app starts with six sample transactions and keeps them if the replicas can't be reached, so it teaches even offline." },
      { title: "Math apart from drawing", detail: "Layout lives in plain functions and D3 only renders, so a replay, resize or speed change just reruns the layout and redraws." },
      { title: "Small contexts", detail: "Five React contexts composed into one provider, so each panel reads only what it needs, with no props passed through every layer." },
    ],
    chips: ["React", "D3.js", "Nivo", "Tailwind CSS", "React Router", "Axios", "Apache ResilientDB"],
  },
  code: {
    title: "A dot that follows the line",
    lead: "Each message is a path that fades in after its phase delay. When it finishes, a dot appears and is moved along the path's own geometry with getPointAtLength, so it follows any curve exactly.",
    file: "src/.../Computation/D3Pbft.js",
    href: "https://github.com/ExpoLab-App/ResView/blob/main/src/Components/Pages/Visualizer/Ancilliary/Computation/D3Pbft.js#L51-L78",
    lang: "JavaScript",
    source: "line.transition()\n    .duration(duration / 2)\n    .delay(delay)\n    .style(\"opacity\", 1)\n    .on(\"end\", function () {\n        let dot = svg.append(\"circle\")\n            .attr(\"r\", 5)\n            .attr(\"fill\", `${dotColor}`)\n            .attr(\"cx\", lineData[0][0])\n            .attr(\"cy\", lineData[0][1])\n            .style(\"opacity\", 0);\n\n        dot.transition()\n            .duration(duration / 2)\n            .style(\"opacity\", 1)\n            .attrTween(\"cx\", function () {\n                return function (t) {\n                    var interpolatedPoint = line.node().getPointAtLength(t * line.node().getTotalLength());\n                    return interpolatedPoint.x;\n                };\n            })\n            .attrTween(\"cy\", function () {\n                return function (t) {\n                    var interpolatedPoint = line.node().getPointAtLength(t * line.node().getTotalLength());\n                    return interpolatedPoint.y;\n                };\n            });\n    })",
    note: "Lines 51 to 78, unedited apart from indentation.",
  },
  performance: {
    title: "What the build ships",
    lead: "The original deployment has moved, so these come from the production build in the repo, measured gzipped the way a static host serves it.",
    groups: [
      {
        name: "Production build",
        note: "Create React App · gzip",
        metrics: [
          { value: "261", unit: "KB", label: "main bundle, including D3 and the charts" },
          { value: "317", unit: "KB", label: "JavaScript in all 69 chunks" },
          { value: "7", unit: "KB", label: "CSS, one file" },
        ],
      },
    ],
  },
  next: [
    "A phone layout with one replica per row, so the desktop-only note can go.",
    "Fix the arrowheads: markers are defined as arrow-request but referenced as arrow-&request, so they never render.",
    "Step through a round one message at a time, not just play and clear.",
    "Split D3 and the charts out of the 261 KB main bundle so the landing page loads lighter.",
    "Bring the live deployment back at a stable address.",
  ],
  nextStudy: { slug: "portfolio", title: "aun.sh" },
};

const FRREDSS_IMG = "/images/case-studies/frredss";

// Live site captures from desktop Chrome at 1560 x 784.
const frredss: CaseStudy = {
  slug: "frredss",
  title: "FRREDSS",
  tagline: "Siting biomass power plants across California, from a map.",
  description:
    "How FRREDSS went from a single map page nobody had touched in two years to a routed app with saved, shareable runs, a new landing page and live map layers, plus the pipeline that loads its data.",
  domain: "forestdss.ucdavis.edu",
  link: "https://forestdss.ucdavis.edu",
  repo: "https://github.com/ucdavis/cecdss",
  meta: [
    { label: "Role", value: "Led the frontend from 2024: the rebuild, saved runs, map layers and the data loader" },
    { label: "Where", value: "UC Davis" },
    { label: "Frontend", value: "React, TypeScript, Leaflet, Recharts, Bootstrap" },
    { label: "Year", value: "2024 to 2025. Live at forestdss.ucdavis.edu" },
  ],
  hero: {
    src: `${FRREDSS_IMG}/hero.jpg`,
    alt: "FRREDSS landing page: Forest Resource and Renewable Energy Decision Support System over aerial forest canopy, with Run New Model, User Guide and Publications buttons",
    w: 1560,
    h: 784,
    domain: "forestdss.ucdavis.edu",
  },
  summary:
    "FRREDSS answers a planner's question: if we build a biomass power plant here, where does the wood come from, what does it cost and what does it emit? It runs three UC Davis models over forest data for the whole state. I took over a frontend that had been quiet for two years and made it a routed app with runs you can save and share.",
  stats: [
    { value: "94%", label: "of commits since July 2024 are mine" },
    { value: "3", label: "UC Davis models behind every run: cost, harvest and life cycle" },
    { value: "11", label: "map layers, from fire hazard zones to sawmills" },
    { value: "+7.4k", unit: "/ -1.7k", label: "lines changed across 150 files", accent: true },
  ],
  ownership: {
    heading: "What I shipped",
    intro:
      "I joined in July 2024 and led the frontend from there, with a backend API and a data loader on the side. The repo had been quiet since 2022.",
    rows: [
      { area: "Rebuild", detail: "React 17 to 18, react-leaflet 2 to 4, React Router 5 to 6 and TypeScript 3 to 4.9, then one map page split into routes." },
      { area: "Landing page", detail: "A home page with the models, the publications and the app's features, plus analytics." },
      { area: "Saved runs", detail: "A save flow that collects user details, stores the run and returns a short link that reopens it with every input in place, front end and API." },
      { area: "Map", detail: "Place search, new sources for the fire hazard and substation layers, two new layers, and a legend tied to the map." },
      { area: "Safety rails", detail: "A warning before leaving a running model, validated forms, and Jest for tests." },
      { area: "Data", detail: "Scripts that split statewide data by county and bulk-load it into PostgreSQL with COPY, alongside a batch job on the campus cluster that prepares the clusters." },
    ],
  },
  chapters: [
    {
      title: "A front door for a research tool",
      lead: "The old app opened straight onto the map. The new home page says what the models do and links the research behind them before anyone sets an input.",
      shots: [
        {
          src: `${FRREDSS_IMG}/model-features.jpg`,
          alt: "Model features: techno-economic assessment, fuel reduction cost simulator, life cycle assessment and transportation, each with an icon and one line",
          w: 1546,
          h: 616,
          caption: "The four model features, one line each.",
        },
        {
          src: `${FRREDSS_IMG}/publications.jpg`,
          alt: "Publications section: two paper cards on a green gradient, each with a summary and a Read More button",
          w: 1546,
          h: 784,
          caption: "The papers behind the models, one click away.",
        },
        {
          src: `${FRREDSS_IMG}/app-features.jpg`,
          alt: "App features: save model runs, cluster visualization, detailed assessment, map types, varied models and map layers",
          w: 1546,
          h: 784,
          caption: "What the app does, before anyone opens it.",
        },
      ],
    },
    {
      kicker: "Product",
      title: "Pick a site, set the inputs, run",
      lead: "The facility goes where you click or search. Inputs cover the forest treatment, the harvest system, transport and the plant itself, each starting from a sensible default.",
      shots: [
        {
          src: `${FRREDSS_IMG}/model.jpg`,
          alt: "Model page: a topographic map of the Central Valley and Sierra foothills with the facility marker, and the Select Inputs panel with facility coordinates, expansion factor, forest treatment and harvesting system",
          w: 1560,
          h: 784,
          domain: "forestdss.ucdavis.edu/pages/model",
          caption: "Model setup. The base map here is a stand-in: the live site's Mapbox token has lapsed, which is first on the list below.",
        },
        {
          src: `${FRREDSS_IMG}/layers.jpg`,
          alt: "Map layers panel with fire hazard zones, transmission lines and substations switched on across Northern California, and the layer legend with fire hazard and voltage classes",
          w: 1560,
          h: 784,
          caption: "Layers. Fire hazard zones, transmission lines and substations with their legend; ownership, air districts and sawmills are a click away.",
        },
      ],
    },
  ],
  design: {
    title: "Forest green on paper white",
    swatches: [
      { name: "Brand", hex: "#385542", onDark: true },
      { name: "Hover", hex: "#2F4538", onDark: true },
      { name: "Action", hex: "#069E39", onDark: true },
      { name: "Mint", hex: "#E4FDE6" },
      { name: "Paper", hex: "#F0F8F1" },
      { name: "Error", hex: "#FC031C", onDark: true },
      { name: "Substation", hex: "#3388FF", onDark: true },
    ],
    fonts: [
      { family: "system", name: "System UI", role: "Bootstrap's system stack. No web fonts in a form-heavy tool people keep open all day.", sample: "Medium Density Target (SDI-55)" },
    ],
    notes: [
      "Bootstrap 4 with reactstrap, so every input, select and validation message behaves the same way.",
      "One brand green for headers, buttons and the hero overlay, with pale greens for backgrounds.",
      "The hero is a slow aerial video under a translucent panel, so the headline stays readable over moving canopy.",
    ],
  },
  tech: {
    title: "Three models, one map",
    steps: [
      { kicker: "Browser", title: "React and Leaflet", detail: "TypeScript, react-leaflet, Recharts and Victory for inputs, maps and results. The cost, harvest and life-cycle models run on the API." },
      { kicker: "API", title: "Express on Azure", detail: "Runs the models. One call sets up the whole run, then one call per year carries the chosen clusters and the search radius forward." },
      { kicker: "Data", title: "PostgreSQL and PostGIS", detail: "Treated forest clusters by county and year, boxed by latitude and longitude in SQL, then trimmed to a radius in Node." },
      { kicker: "Pipeline", title: "Batch loads on the cluster", detail: "A SLURM job on the campus cluster prepares the clusters; a separate script loads county files with COPY and moves loaded and failed files aside, so a rerun picks up where it stopped." },
    ],
    decisions: [
      { title: "Routes before features", detail: "Moving to React Router first gave saved runs somewhere to live: /pages/model/:modelID." },
      { title: "Runs as short links", detail: "A run is stored on the server and shared as a short link that restores the model, the inputs and the map points." },
      { title: "Don't lose a run", detail: "A run can take a while, so leaving the page mid-run asks first." },
    ],
    chips: ["React 18", "TypeScript", "Leaflet", "Recharts", "Victory", "Bootstrap", "Express", "PostgreSQL", "PostGIS", "Azure", "Python", "SLURM"],
  },
  code: {
    title: "Open a shared link, get the same run",
    lead: "A saved run lives at /pages/model/:modelID. On load, the page fetches it and puts back the model, every input and both sets of coordinates before anyone touches the map.",
    file: "src/.../Map/MapContainer.tsx",
    href: "https://github.com/ucdavis/cecdss/blob/master/src/Platform/App/components/Map/MapContainer.tsx#L614-L640",
    lang: "TypeScript",
    source: "useEffect(() => {\n  const fetchOriginalUrl = async () => {\n    if (modelID && !hasLoaded) {\n      try {\n        setIsLoading(true);\n        const result = await getShortUrlData(modelID);\n\n        setTeaModel(result.allYearInputs.teaModel);\n        setTeaInputs(result.allYearInputs.teaInputs);\n        setFacilityCoordinates({\n          lat: result.allYearInputs.facilityLat,\n          lng: result.allYearInputs.facilityLng\n        });\n        setBiomassCoordinates(result.biomassCoordinates);\n        setFrcsInputs(result.frcsInputs);\n        setTransportInputs(result.transportInputs);\n      } catch (error) {\n        console.error('Error fetching original URL:', error);\n      } finally {\n        setIsLoading(false);\n        setHasLoaded(true);\n      }\n    }\n  };\n\n  fetchOriginalUrl();\n}, [modelID]);",
    note: "Lines 614 to 640, unedited apart from indentation.",
  },
  next: [
    "Renew the Mapbox token, or move the base map to tiles that don't expire, so the map isn't blank.",
    "Find why a default run times out on the per-year call, and show progress year by year while it works.",
    "Store cluster centers as geometry with a spatial index and filter the radius in SQL, instead of a box in SQL and a radius in Node.",
    "Serve the substation layer from the app instead of a personal GitHub repo.",
    "A phone layout for the model page.",
  ],
  nextStudy: { slug: "resview", title: "ResView" },
};

const PORTFOLIO_IMG = "/images/case-studies/portfolio";

// Captured from the production build (next start) at 1505 x 812 in headless
// Chromium; phones are an iPhone 13 at 3x, scaled down.
const portfolio: CaseStudy = {
  slug: "portfolio",
  title: "aun",
  titleSuffix: ".sh",
  tagline: "This site, explained by this site.",
  description:
    "How aun.sh is built: a WebGL landscape with my projects and career trail on it, a loading screen generated from the same land, scroll motion that stays out of the way, and the numbers.",
  domain: "aun.sh",
  link: "https://aun.sh",
  repo: "https://github.com/aunshx/portfolio",
  meta: [
    { label: "Role", value: "Designed and built it, rewrites included" },
    { label: "Stack", value: "Next.js, React, Tailwind CSS, WebGL2, GSAP" },
    { label: "Year", value: "2026" },
    { label: "Contours", value: "Made up. The projects are real" },
  ],
  hero: {
    src: `${PORTFOLIO_IMG}/hero.jpg`,
    alt: "The aun.sh hero: a 3D contour landscape with four project pins, the career trail with four jobs, and the legend card",
    w: 1505,
    h: 812,
    domain: "aun.sh",
  },
  summary:
    "A portfolio is usually a list. I wanted a place: the projects stand on a 3D landscape, my jobs run across it as a trail, and the loading screen is a survey of the same land drawn from above. No 3D library, no stock art, and it still loads like a page.",
  stats: [
    { value: "118", unit: "KB", label: "first-load JavaScript on the home page" },
    { value: "0.002", label: "layout shift on a cold load" },
    { value: "0", label: "3D libraries. The terrain is raw WebGL2" },
    { value: "1", label: "noise function behind the hero, the loader and the pins", accent: true },
  ],
  ownership: {
    heading: "What I made",
    intro: "All of it, design to deploy. The hero alone went through more drafts than I'll admit to.",
    rows: [
      { area: "Terrain", detail: "A WebGL2 landscape: a grid lifted by simplex noise, contour lines drawn from height, and a hill that rises under the pointer." },
      { area: "Pins and trail", detail: "Projects and jobs as HTML the camera keeps on the ground, joined by a dashed trail that shows faintly through hills." },
      { area: "Loading screen", detail: "A survey map of the same land, an SVG animated with CSS, that tips back into the 3D hero." },
      { area: "Motion", detail: "Smooth scrolling, headings that rise line by line, stacking project cards and a custom cursor, all skipped under reduced motion." },
      { area: "Case studies", detail: "These pages, with captures and numbers measured from the real products." },
      { area: "Words", detail: "The copy and the jokes. The contour lines are 10 m of scope creep each." },
    ],
  },
  chapters: [
    {
      kicker: "Loading screen",
      title: "A survey before the landscape",
      lead: "On the first visit, the land is drawn as a contour map: lines rise from the valleys, the career trail walks through each job, the projects get plotted, then the sheet tips back into the 3D hero.",
      shots: [
        {
          src: `${PORTFOLIO_IMG}/loader-plotted.jpg`,
          alt: "The loading screen at the end: a contour map with the dashed career trail through UC Davis, mlpal.ai, Prosperix and 2WheelR, four orange project pins and a counter at 100%",
          w: 1505,
          h: 812,
          domain: "aun.sh",
          caption: "Plotted. The map is generated from the same noise as the 3D terrain, so the pins land where the hero puts them.",
        },
        {
          src: `${PORTFOLIO_IMG}/loader-draw.jpg`,
          alt: "The loading screen mid-way: contour lines drawn, the trail partway through the jobs, the counter at 69%",
          w: 1505,
          h: 812,
          caption: "Mid-survey. The counter and the status line are CSS only, so they run before the page's JavaScript loads.",
        },
      ],
    },
    {
      kicker: "Hero",
      title: "The work, standing on the land",
      lead: "Each project is a pin and each job a stop on the trail. Move the pointer and a hill rises under it, its contours turning orange; hover a pin and the land glows under that project.",
      shots: [
        {
          src: `${PORTFOLIO_IMG}/hero-hill.jpg`,
          alt: "The hero with an orange-contoured hill raised under the pointer near the reaktr pin, and the survey readout showing coordinates and elevation",
          w: 1505,
          h: 812,
          domain: "aun.sh",
          caption: "Survey mode. The readout reports where the pointer is and how high, in made-up Bay Area coordinates.",
        },
        {
          src: `${PORTFOLIO_IMG}/hero-pin.jpg`,
          alt: "Hovering the FRED pin: a preview card with a screenshot, a one-line description and a link to the case study",
          w: 1505,
          h: 812,
          caption: "Pin cards open beside the pin, toward the middle of the screen.",
        },
        {
          src: `${PORTFOLIO_IMG}/work.jpg`,
          alt: "Selected work: a full-width FRED card in its own dark green with a count-up metric and a large screenshot",
          w: 1505,
          h: 812,
          caption: "Below the fold, each project card wears the product's own colors and stacks under the next.",
        },
      ],
    },
    {
      kicker: "The rest",
      title: "Then it's a fast, quiet page",
      shots: [
        {
          src: `${PORTFOLIO_IMG}/fineprint.jpg`,
          alt: "The fine print: experience, writing, papers, education and tools in three columns",
          w: 1505,
          h: 812,
          domain: "aun.sh/#experience",
          caption: "The fine print. Everything a recruiter scans for, in three columns.",
        },
        {
          src: `${PORTFOLIO_IMG}/footer.jpg`,
          alt: "Footer: Looking for a full-stack or applied AI role in serif italic, and a huge LET'S TALK in Archivo",
          w: 1505,
          h: 812,
          caption: "The footer's LET'S TALK bends its weight and width toward the pointer.",
        },
        {
          src: `${PORTFOLIO_IMG}/casestudy.jpg`,
          alt: "The FRED case study page cover on the same paper, ink and type as the home page",
          w: 1505,
          h: 812,
          caption: "Case studies share the paper, ink and Inter, so the site reads as one piece.",
        },
      ],
    },
  ],
  mobile: {
    title: "Same map at 390 pixels",
    lead: "The terrain takes the top of the screen and the legend moves below it. Pins pull toward the middle to stay on screen, job labels drop off, and the loader leaves out the outer project pins.",
    shots: [
      { src: `${PORTFOLIO_IMG}/m-loader.jpg`, alt: "Phone loading screen: the contour map cropped to its middle, with the trail, its four jobs and the ResView pin", w: 764, h: 1301, caption: "Loader" },
      { src: `${PORTFOLIO_IMG}/m-hero.jpg`, alt: "Phone hero: the terrain with four pins on top and the legend card below", w: 764, h: 1301, caption: "Hero" },
      { src: `${PORTFOLIO_IMG}/m-work.jpg`, alt: "Phone work section: the FRED card stacked full width", w: 764, h: 1301, caption: "Work" },
      { src: `${PORTFOLIO_IMG}/m-menu.jpg`, alt: "Phone menu open with the section links over the hero", w: 764, h: 1301, caption: "Menu" },
    ],
  },
  design: {
    title: "Warm paper, near-black ink, international orange",
    swatches: [
      { name: "Paper", hex: "#F3F1EC" },
      { name: "Surface", hex: "#FBFAF7" },
      { name: "Ink", hex: "#111111", onDark: true },
      { name: "Muted", hex: "#4A4741", onDark: true },
      { name: "Faint", hex: "#67635B", onDark: true },
      { name: "Orange", hex: "#FF4F00" },
      { name: "Orange ink", hex: "#C43C00", onDark: true },
    ],
    fonts: [
      { family: "archivo", name: "Archivo", role: "Statements and the big words, with weight and width that bend", sample: "LET'S TALK" },
      { family: "instrument", name: "Instrument Serif", role: "Asides and jokes, always italic", sample: "Also, yes, the CSS." },
      { family: "inter", name: "Inter", role: "Everything you read for longer than a line", sample: "Each line is 10 m of scope creep" },
    ],
    code: {
      label: "A loading counter with no JavaScript",
      source: `@property --n {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}
.preloader-n {
  counter-reset: n var(--n);
  animation: pre-count 1.75s forwards;
}
.preloader-n::after { content: counter(n); }
@keyframes pre-count { to { --n: 100; } }`,
    },
    notes: [
      "Orange is for things that respond to you: pins, the pointer's hill, links on hover.",
      "Light only. The paper is part of the map.",
      "A typed integer property animates from 0 to 100 and a CSS counter prints it, so the loader counts before the page's JavaScript arrives.",
    ],
  },
  tech: {
    title: "Static pages, a GPU and very little JavaScript",
    steps: [
      { kicker: "Build", title: "Next.js App Router", detail: "Every page is static. Fonts come through next/font, and the case studies are generated from one content file." },
      { kicker: "First paint", title: "CSS only", detail: "The loader, its counter and the intro fades run before the page's JavaScript loads, and only on the first visit of a session." },
      { kicker: "Hero", title: "Raw WebGL2", detail: "One shader pair for the land and one for the trail. Pins are HTML, placed each frame with a CPU copy of the same noise." },
      { kicker: "Motion", title: "GSAP and Lenis, later", detail: "Loaded after hydration, so they never hold up the first paint, and their effects are skipped under reduced motion." },
    ],
    decisions: [
      { title: "One noise, three uses", detail: "The shader, the pin placement and the loader's contour map share one simplex noise, so the map you see first is the land you arrive on." },
      { title: "Keep the GPU cheap", detail: "The canvas pauses offscreen and in background tabs, caps pixel density and draws a lighter mesh on phones." },
      { title: "An image, not markup", detail: "The loader's 142 contour lines ship as one animated SVG file, which keeps them out of the HTML and the hydration payload." },
    ],
    chips: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "WebGL2", "GLSL", "GSAP", "Lenis", "next/font", "d3-contour", "Netlify"],
  },
  code: {
    title: "Contour lines from height, in the shader",
    lead: "There's no line geometry. Each pixel checks how close its height is to a contour level and inks itself when it's close. fwidth keeps lines the same width at any distance, every fifth line is thicker, and the land fades into haze far away.",
    file: "components/motion/TerrainField.tsx",
    href: "https://github.com/aunshx/portfolio/blob/main/components/motion/TerrainField.tsx#L126-L140",
    lang: "GLSL",
    source: "void main() {\n  float v = vH * 9.0;\n  float f = fract(v);\n  float w = fwidth(v);\n  float band = floor(v + 0.5);\n  bool index = mod(band, 5.0) == 0.0;\n  float line = 1.0 - smoothstep(0.0, w * (index ? 1.7 : 1.0), min(f, 1.0 - f));\n\n  float haze = clamp(1.0 - (vDepth - 3.0) / 12.0, 0.0, 1.0);\n  vec3 ground = uBg * (0.9 + 0.1 * clamp(vShade, 0.0, 1.0));\n  vec3 ink = mix(uInk, uAccent, clamp(vNear * 1.4, 0.0, 1.0));\n  float a = line * mix(index ? 0.5 : 0.3, 0.95, clamp(vNear, 0.0, 1.0));\n  vec3 col = mix(ground, ink, a);\n  color = vec4(mix(uBg, col, haze), 1.0);\n}",
    note: "The fragment shader's main function, unedited.",
  },
  performance: {
    title: "Measured on a production build",
    lead: "A cold load of the home page with the loading screen, served by next start on November 1, 2026 and read from the browser's Performance API.",
    groups: [
      {
        name: "Home page",
        note: "next start · gzip",
        metrics: [
          { value: "175", unit: "KB", label: "JavaScript in 12 files, motion libraries included" },
          { value: "12", unit: "KB", label: "CSS" },
          { value: "111", unit: "KB", label: "fonts, three files" },
          { value: "26", unit: "KB", label: "the loader's animated map" },
          { value: "26", label: "requests" },
          { value: "0.002", label: "cumulative layout shift", accent: true },
        ],
      },
    ],
  },
  next: [
    "Keyboard access to the terrain: arrow keys to survey, not just the pointer.",
    "Pin cards on touch screens, which only get the labels today.",
    "Lighthouse in CI with budgets, so the 3D hero can't quietly get heavier.",
  ],
  nextStudy: { slug: "fred", title: "FRED" },
};

export const CASE_STUDIES: CaseStudy[] = [fred, reaktr, frredss, resview, portfolio];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
