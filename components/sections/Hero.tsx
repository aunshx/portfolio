import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import Contours from "@/components/motion/Contours";
import { PROFILE, LINKS } from "@/content/profile";
import { HERO_SHOT } from "@/content/work";

/**
 * The focal sequence (CSS, plays on first paint): contour lines draw in, the
 * name rises out of them line by line, the rest follows, and FRED wipes in
 * like a scan. Scroll and pointer effects come from Motion.tsx.
 */
export default function Hero() {
  const [first, ...rest] = PROFILE.name.split(" ");
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <Contours />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:pb-16 lg:pt-20">
        <div data-hero-copy>
          <h1 id="hero-title" className="t-display">
            <span className="intro-line">
              <span>{first}</span>
            </span>{" "}
            <span className="intro-line">
              <span style={{ animationDelay: "0.27s" }}>{rest.join(" ")}</span>
            </span>
          </h1>

          <p className="t-lead intro-fade mt-5 max-w-[32ch] text-text" style={{ ["--d" as string]: "0.5s" }}>
            {PROFILE.pitch} <span className="block text-muted">{PROFILE.quip}</span>
          </p>

          <p
            className="t-meta intro-fade mt-5 flex flex-wrap items-center gap-x-5 gap-y-1"
            style={{ ["--d" as string]: "0.6s" }}
          >
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-emerald-500" />
              {PROFILE.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin size={14} strokeWidth={2} aria-hidden="true" className="text-faint" />
              {PROFILE.location}
            </span>
          </p>

          <div className="intro-fade mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "0.7s" }}>
            <a href="#work" className="btn btn-primary" data-magnetic>
              See the work
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-quiet"
              data-magnetic
            >
              Résumé
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a href={LINKS.email} className="link px-2" data-magnetic>
              Email me
            </a>
          </div>
        </div>

        <figure className="m-0 min-w-0" data-hero-shot>
          <Link
            href="/work/fred"
            tabIndex={-1}
            aria-hidden="true"
            className="block"
            data-tilt
            data-cursor="Case study"
          >
            <Screenshot
              shot={HERO_SHOT}
              label="FRED"
              priority
              className="intro-shot"
              sizes="(min-width: 1180px) 640px, (min-width: 1024px) 56vw, 100vw"
            />
          </Link>
          <figcaption
            className="t-meta intro-fade mt-3 flex flex-wrap items-center justify-between gap-x-4"
            style={{ ["--d" as string]: "1s" }}
          >
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
