import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import StackPanel from "@/components/ui/StackPanel";
import SplitText from "@/components/ui/SplitText";
import { PROFILE, LINKS } from "@/content/profile";

const SOCIAL = [
  { href: LINKS.github, label: "GitHub", Icon: Github },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: LINKS.medium, label: "Medium", Icon: BookOpen },
  { href: LINKS.email, label: "Email", Icon: Mail },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-var(--ticker-h)-3.5rem)] items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-16">
          <div>
            {/* Availability, as a pill rather than a stray line of text. */}
            <div
              className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur"
              style={{ animationDelay: "40ms" }}
            >
              <Image
                src={PROFILE.avatar}
                alt={`Portrait of ${PROFILE.name}`}
                width={72}
                height={72}
                priority
                className="size-7 rounded-full object-cover"
              />
              <span className="text-[13px] font-medium text-text">
                {PROFILE.name}
              </span>
            </div>

            <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.03] tracking-[-0.04em] text-text sm:text-[3.9rem] lg:text-[3.5rem] xl:text-[4.4rem]">
              <SplitText text="Full-stack engineer." />
              <br aria-hidden="true" />
              <SplitText text="End to end." offset={20} gradient />
            </h1>

            <p
              className="rise mt-6 max-w-[44ch] text-[15.5px] leading-[1.7] text-muted sm:text-[17px]"
              style={{ animationDelay: "620ms" }}
            >
              {PROFILE.pitch}
            </p>

            <div
              className="rise mt-7 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "700ms" }}
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                See the work
                <ArrowDown
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>

              <a
                href={LINKS.email}
                className="group inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Contact
                <Mail size={15} strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                Résumé
                <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </a>

            </div>

            <ul
              className="rise mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-7"
              style={{ animationDelay: "780ms" }}
            >
              {SOCIAL.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[13px] font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rise hidden lg:block" style={{ animationDelay: "700ms" }}>
            <StackPanel />
          </div>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint transition-colors hover:text-accent lg:flex"
      >
        Scroll
        <ArrowDown size={13} strokeWidth={2} className="animate-bounce" />
      </a>
    </section>
  );
}
