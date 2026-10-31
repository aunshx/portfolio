import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Screenshot from "@/components/ui/Screenshot";
import { PROFILE, LINKS } from "@/content/profile";
import { HERO_SHOT } from "@/content/work";

/**
 * Name, one line on what he builds, availability, three actions, and the
 * newest project beside them. The work starts on the first screen.
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:pb-14 lg:pt-16">
        <div>
          <h1 id="hero-title" className="t-display">
            {PROFILE.name}
          </h1>

          <p className="t-lead mt-5 max-w-[34ch]">{PROFILE.pitch}</p>

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
            <a href={LINKS.email} className="btn btn-quiet">
              Email me
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="link px-2"
            >
              Résumé
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
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
              <span className="font-medium text-text">FRED</span>, 2026. AI that answers
              questions about California&rsquo;s forests.
            </span>
            <Link href="/work/fred" className="link">
              Read the case study
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
