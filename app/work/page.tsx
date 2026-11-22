import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Brand from "@/components/layout/Brand";
import Footer from "@/components/layout/Footer";
import Contours from "@/components/motion/Contours";
import { CaseStudyMenu } from "@/components/layout/CaseStudyMenu";
import StudyIndex, { type IndexStudy } from "@/components/case-study/StudyIndex";
import { CASE_STUDIES } from "@/content/case-studies";
import { CASE_STUDY_INDEX } from "@/content/case-study-index";
import { WORK } from "@/content/work";
import { SITE } from "@/content/profile";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "The long versions: what I owned, how each product is put together, the numbers, and what I'd do next. Scout, FRED, reaktr, FRREDSS, ResView and this site.",
  alternates: { canonical: "/work" },
  openGraph: { type: "website", url: `${SITE.url}/work`, title: "Case studies · Aunsh Bandivadekar" },
};

/* A shade of each product that reads on this site's paper, for the row marks. */
const INK: Record<string, string> = {
  scout: "#2e6b47",
  fred: "#7a5c24",
  reaktr: "#0b6e61",
  frredss: "#2f6b2a",
  resview: "#3d55c4",
  portfolio: "#c43c00",
};

/* This site has no work card, so its sheet is the site's own paper. */
const PAPER = { bg: "#e8e5dd", fg: "#111111", muted: "#4a4741", accent: "#ff4f00" };

const meta = (s: (typeof CASE_STUDIES)[number], label: string) => s.meta.find((m) => m.label === label)?.value ?? "";

const STUDIES: IndexStudy[] = CASE_STUDY_INDEX.map(({ slug }) => {
  const s = CASE_STUDIES.find((c) => c.slug === slug)!;
  const card = WORK.find((w) => w.caseStudy === slug);
  // The work card's headline number, else the study's first stat.
  const stat: { value: string; unit?: string; label: string } = card?.metric ?? s.stats[0];
  return {
    slug,
    title: s.title,
    titleSuffix: s.titleSuffix,
    tagline: s.tagline,
    // "2023 to 2025. Used in UC Davis courses" → "2023 to 2025"; "2026. Live at…" → "2026"
    year: meta(s, "Year").replace(/^(\d{4}(?: to \d{4})?)\..*$/, "$1"),
    // The role's first clause: "Led the frontend from 2024: the rebuild…" → "Led the frontend from 2024"
    role: meta(s, "Role").split(/[.:]/)[0],
    chips: s.tech.chips.slice(0, 4),
    stat,
    hero: s.hero,
    tone: card?.tone ?? PAPER,
    ink: INK[slug] ?? "#c43c00",
    swatches: s.design.swatches.slice(0, 6).map(({ name, hex }) => ({ name, hex })),
  };
});

export default function CaseStudiesPage() {
  return (
    <div className="si">
      <header className="sticky top-0 z-50 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
          <Brand href="/" />
          <div className="-mr-2 flex items-center gap-1">
            <CaseStudyMenu current="index" />
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center gap-1.5 px-3 text-[0.875rem] text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              Home
            </Link>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="si-head" aria-labelledby="si-title">
          <Contours />
          <div className="si-head-inner">
            <h1 id="si-title" className="si-h1">
              The long versions<span className="si-h1-dot">.</span>
            </h1>
            <p className="si-aside">With the receipts.</p>
            <p className="si-intro">
              Each one covers what I owned, how the thing is put together, the numbers I measured, and what I&rsquo;d
              change next. Pick one, or start at the top.
            </p>
          </div>
        </section>

        <StudyIndex studies={STUDIES} />
      </main>

      <Footer />
    </div>
  );
}
