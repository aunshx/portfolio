import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, BookOpen, FileText } from "lucide-react";

import ThemeToggle from "@/components/layout/ThemeToggle";
import { PROFILE, LINKS, SITE } from "@/content/profile";
import { TLDR_LINKS } from "@/content/tldr";
import { SKILLS } from "@/content/skills";

export const metadata: Metadata = {
  title: "TLDR",
  description: PROFILE.tagline,
  alternates: { canonical: "/tldr" },
  openGraph: {
    type: "profile",
    url: `${SITE.url}/tldr`,
    title: `${PROFILE.name}, TLDR`,
    description: PROFILE.tagline,
  },
};

const SOCIAL = [
  { href: LINKS.github, label: "GitHub", Icon: Github },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: LINKS.medium, label: "Medium", Icon: BookOpen },
  { href: LINKS.email, label: "Email", Icon: Mail },
];

const STACK = SKILLS.flatMap((g) => g.items).slice(0, 14);

export default function Tldr() {
  return (
    <main className="relative min-h-dvh overflow-hidden">

      <div className="relative z-10 mx-auto max-w-[38rem] px-5 py-14 sm:py-20">
        <div className="flex items-start justify-between gap-4">
          <Image
            src={PROFILE.avatar}
            alt={`Portrait of ${PROFILE.name}`}
            width={80}
            height={80}
            priority
            className="size-16 rounded-full object-cover ring-1 ring-line"
          />
          <ThemeToggle />
        </div>

        <h1 className="mt-6 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-text sm:text-[2.6rem]">
          Full-stack engineer. I ship products end to end.
        </h1>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {PROFILE.tagline}
        </p>

        <p className="tabular mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          {PROFILE.role} <span className="text-line-strong">/</span>{" "}
          {PROFILE.location}
        </p>

        <ul className="mt-9 flex flex-wrap gap-2">
          {SOCIAL.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <ol className="mt-10 border-t border-line">
          {TLDR_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-4"
              >
                <span
                  aria-hidden="true"
                  className="tabular font-mono text-[11px] text-faint transition-colors group-hover:text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[17px] font-semibold text-text transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="block text-[13px] text-muted">
                    {link.detail}
                  </span>
                </span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-4"
            >
              <FileText
                size={14}
                strokeWidth={1.6}
                aria-hidden="true"
                className="text-faint transition-colors group-hover:text-accent"
              />
              <span className="min-w-0">
                <span className="block text-[17px] font-semibold text-text transition-colors group-hover:text-accent">
                  Résumé
                </span>
                <span className="block text-[13px] text-muted">
                  The one-page version
                </span>
              </span>
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ol>

        <h2 className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          Stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
          {STACK.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
