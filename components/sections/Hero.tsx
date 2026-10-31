import { ArrowDown, ArrowUpRight } from "lucide-react";
import KineticText from "@/components/motion/KineticText";
import ContourField from "@/components/motion/ContourField";
import Contours from "@/components/motion/Contours";
import Clock from "@/components/ui/Clock";
import { PROFILE, LINKS } from "@/content/profile";

/**
 * Full screen: a live contour map, the name edge to edge, three short
 * facts across the top and the pitch and actions across the bottom.
 */
export default function Hero() {
  const [first, ...rest] = PROFILE.name.toUpperCase().split(" ");
  return (
    <section id="top" aria-labelledby="hero-title" className="hero">
      <Contours />
      <ContourField />

      <div className="hero-inner">
        <div className="hero-meta intro-fade" style={{ ["--d" as string]: "0.1s" }}>
          <p>
            Full-stack engineer
            <br />
            <span className="text-muted">Applied AI, mostly</span>
          </p>
          <p>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-emerald-500" />
              {PROFILE.availability}
            </span>
            <br />
            <span className="text-muted">{PROFILE.location}</span>
          </p>
          <p className="hidden text-right sm:block">
            Local time
            <br />
            <span className="text-muted">
              <Clock />
            </span>
          </p>
        </div>

        <KineticText
          as="h1"
          id="hero-title"
          lines={[first, rest.join(" ")]}
          fallback={[19.9, 8.95]}
          className="hero-name"
          delay={0.15}
        />

        <div className="hero-foot">
          <p className="hero-pitch intro-fade" style={{ ["--d" as string]: "0.7s" }}>
            {PROFILE.pitch} <span className="text-muted">{PROFILE.quip}</span>
          </p>
          <div className="hero-actions intro-fade" style={{ ["--d" as string]: "0.8s" }}>
            <a href="#work" className="btn btn-primary" data-magnetic>
              See the work
              <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href={LINKS.resume} target="_blank" rel="noreferrer noopener" className="btn btn-quiet" data-magnetic>
              Résumé
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
