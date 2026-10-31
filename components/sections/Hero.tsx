import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import { PROFILE, LINKS } from "@/content/profile";
import { HERO_SHOT } from "@/content/work";

/** Name, one line, availability, three actions, and FRED beside them. */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="contours" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:pb-16 lg:pt-20">
        <div>
          <h1 id="hero-title" className="t-display">
            {PROFILE.name}
          </h1>

          <p className="t-lead mt-5 max-w-[32ch] text-text">
            {PROFILE.pitch} <span className="block text-muted">{PROFILE.quip}</span>
          </p>

          <p className="t-meta mt-5 flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
              {PROFILE.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={14} strokeWidth={2} aria-hidden="true" className="text-faint" />
              {PROFILE.location}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              See the work
            </a>
            <a href={LINKS.resume} target="_blank" rel="noreferrer noopener" className="btn btn-quiet">
              Résumé
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a href={LINKS.email} className="link px-2">
              Email me
            </a>
          </div>
        </div>

        <figure className="settle m-0 min-w-0">
          <Link href="/work/fred" tabIndex={-1} aria-hidden="true" className="block">
            <Screenshot
              shot={HERO_SHOT}
              label="FRED"
              priority
              sizes="(min-width: 1180px) 640px, (min-width: 1024px) 56vw, 100vw"
            />
          </Link>
          <figcaption className="t-meta mt-3 flex flex-wrap items-center justify-between gap-x-4">
            <span>
              <span className="font-semibold text-text">FRED</span>
              <span className="text-faint"> · 2026 · </span>
              Agentic AI for geospatial decisions
            </span>
            <Link href="/work/fred" className="link">
              Case study
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
