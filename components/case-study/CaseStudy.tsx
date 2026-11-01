import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PROFILE } from "@/content/profile";
import type { CaseStudy as Study, Metric } from "@/content/types";
import { Phone, Shot } from "./Shot";
import { SPECIMEN_CLASS } from "./specimen-fonts";
import { CaseStudyMenu } from "@/components/layout/CaseStudyMenu";

const WIDE = "(max-width: 1240px) 100vw, 1180px";
const HALF = "(max-width: 900px) 100vw, 580px";

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function Eyebrow({ n, children }: { n?: number; children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cs-accent)]">
      {n !== undefined && <span className="tabular">{String(n).padStart(2, "0")} · </span>}
      {children}
    </p>
  );
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="max-w-[22ch] text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-text sm:text-[2.75rem]"
    >
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">{children}</p>;
}

function MetricValue({ m, size = "lg" }: { m: Metric; size?: "lg" | "md" }) {
  return (
    <p
      className={`tabular font-semibold leading-none tracking-[-0.03em] ${
        size === "lg" ? "text-[2.4rem] sm:text-[2.9rem]" : "text-[1.9rem]"
      } ${m.accent ? "text-[var(--cs-accent)]" : "text-text"}`}
    >
      {m.value}
      {m.unit && <span className="ml-1 text-[0.45em] font-medium text-faint">{m.unit}</span>}
    </p>
  );
}

function Section({
  id,
  children,
  tint = false,
}: {
  id: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      aria-labelledby={id}
      className={`border-t border-line ${tint ? "bg-surface-raised/60" : ""}`}
    >
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CaseStudy({ study }: { study: Study }) {
  let n = 0;
  const next = () => ++n;
  const perf = study.performance;

  return (
    <div className="cs" data-study={study.slug}>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      {/* Same header as the home page, so the two read as one site. */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg">
        <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-[0.875rem] font-semibold text-text"
          >
            {PROFILE.name}
          </Link>
          <div className="-mr-2 flex items-center gap-1">
            <CaseStudyMenu current={study.slug} />
            <Link
              href="/#work"
              className="hidden min-h-11 items-center gap-1.5 px-3 text-[0.875rem] text-muted transition-colors hover:text-accent sm:inline-flex"
            >
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              All work
            </Link>
            <a
              href={study.link}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden min-h-11 items-center gap-1 px-3 text-[0.875rem] text-muted transition-colors hover:text-accent sm:inline-flex"
            >
              {study.domain}
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </header>

      <main id="content" className="relative z-10">
        {/* Cover */}
        <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          <Eyebrow>Case study · Frontend</Eyebrow>
          <h1 className="text-[4.5rem] font-semibold leading-[0.9] tracking-[-0.05em] text-text sm:text-[7.5rem]">
            {study.title}
            {study.titleSuffix && <span className="text-[var(--cs-accent)]">{study.titleSuffix}</span>}
          </h1>
          <p className="mt-6 max-w-[34ch] text-[1.35rem] leading-snug tracking-[-0.015em] text-text sm:text-[1.75rem]">
            {study.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 lg:grid-cols-4">
            {study.meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">{m.label}</dt>
                <dd className="mt-1.5 text-[14.5px] leading-snug text-text">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={study.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-text px-5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {study.linkLabel ?? `Visit ${study.domain}`}
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {study.repo && (
              <a
                href={study.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={15} strokeWidth={1.9} aria-hidden="true" />
                Source
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>

          <div className="mt-12 sm:mt-16">
            <Shot shot={study.hero} sizes={WIDE} priority />
          </div>
        </div>

        {/* Summary */}
        <Section id="summary">
          <h2 id="summary" className="sr-only">
            Summary
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <p className="text-[1.45rem] leading-[1.35] tracking-[-0.015em] text-text sm:text-[1.8rem]">
              {study.summary}
            </p>
            <ul className="grid grid-cols-2 gap-3 self-start">
              {study.stats.map((s) => (
                <li key={s.label} className="rounded-2xl border border-line bg-surface p-5">
                  <MetricValue m={s} size="md" />
                  <p className="mt-2 text-[13px] leading-snug text-muted">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Ownership */}
        <Section id="ownership" tint>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <Eyebrow>My part</Eyebrow>
              <SectionTitle id="ownership">{study.ownership.heading}</SectionTitle>
              <Lead>{study.ownership.intro}</Lead>
            </div>
            <dl className="border-t border-line">
              {study.ownership.rows.map((r) => (
                <div
                  key={r.area}
                  className="grid gap-1 border-b border-line py-4 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-[12.5px] text-[var(--cs-accent)]">{r.area}</dt>
                  <dd className="text-[15.5px] leading-relaxed text-text">{r.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Chapters */}
        {study.chapters.map((c, ci) => {
          const id = `chapter-${ci + 1}`;
          const [first, ...rest] = c.shots;
          return (
            <Section key={id} id={id}>
              <Reveal>
                <Eyebrow n={next()}>{c.kicker ?? (ci === 0 ? "Landing page" : "Product")}</Eyebrow>
                <SectionTitle id={id}>{c.title}</SectionTitle>
                {c.lead && <Lead>{c.lead}</Lead>}
              </Reveal>
              <div className="mt-10 sm:mt-12">
                <Shot shot={first} sizes={WIDE} />
              </div>
              {rest.length > 0 && (
                <div
                  className={`mt-10 grid grid-cols-1 gap-10 md:gap-6 ${rest.length > 1 ? "md:grid-cols-2" : ""}`}
                >
                  {rest.map((s) => (
                    <Shot key={s.src} shot={s} sizes={rest.length > 1 ? HALF : WIDE} />
                  ))}
                </div>
              )}
            </Section>
          );
        })}

        {/* Mobile */}
        {study.mobile && (
          <Section id="mobile" tint>
            <Reveal>
              <Eyebrow n={next()}>Mobile</Eyebrow>
              <SectionTitle id="mobile">{study.mobile.title}</SectionTitle>
              <Lead>{study.mobile.lead}</Lead>
            </Reveal>
            <div className="cs-phones mt-12">
              {study.mobile.shots.map((s) => (
                <Phone key={s.src} shot={s} />
              ))}
            </div>
          </Section>
        )}

        {/* Design system */}
        <Section id="design">
          <Reveal>
            <Eyebrow n={next()}>Design system</Eyebrow>
            <SectionTitle id="design">{study.design.title}</SectionTitle>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-7">
            {study.design.swatches.map((s) => (
              <li
                key={s.hex}
                className="flex h-36 flex-col justify-end rounded-xl border border-line p-3.5"
                style={{ background: s.hex, color: s.onDark ? "#f5f2ea" : "#0d1117" }}
              >
                <span className="text-[14px] font-medium">{s.name}</span>
                <span className="font-mono text-[11px] opacity-80">{s.hex}</span>
              </li>
            ))}
          </ul>
          <div
            className={`mt-2.5 grid gap-2.5 ${study.design.fonts.length > 1 ? "md:grid-cols-2" : ""} ${
              study.design.fonts.length === 3 ? "lg:grid-cols-3" : ""
            }`}
          >
            {study.design.fonts.map((f) => (
              <div key={f.name} className="rounded-xl border border-line bg-surface p-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">{f.name}</p>
                <p
                  className={`${SPECIMEN_CLASS[f.family]} mt-4 text-[2rem] leading-[1.1] text-text sm:text-[2.4rem] ${
                    f.family === "geist" ? "tracking-[-0.05em]" : ""
                  }`}
                >
                  {f.sample}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted">{f.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-2.5 grid gap-2.5 md:grid-cols-[1.3fr_1fr]">
            {study.design.code && (
              <div className="min-w-0 rounded-xl border border-line bg-surface p-6">
                <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
                  {study.design.code.label}
                </p>
                <pre
                  tabIndex={0}
                  aria-label={study.design.code.label}
                  className="cs-code"
                >
                  <code>{study.design.code.source}</code>
                </pre>
              </div>
            )}
            <ul
              className={`flex flex-col gap-3 rounded-xl border border-line p-6 text-[15px] leading-relaxed text-muted ${
                study.design.code ? "" : "md:col-span-2"
              }`}
            >
              {study.design.notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-[var(--cs-accent)]" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Tech */}
        <Section id="tech" tint>
          <Reveal>
            <Eyebrow n={next()}>Tech</Eyebrow>
            <SectionTitle id="tech">{study.tech.title}</SectionTitle>
          </Reveal>
          <ol className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {study.tech.steps.map((s, i) => (
              <li
                key={s.title}
                className={`relative rounded-xl border bg-surface p-5 ${
                  i === 0 ? "border-[var(--cs-accent)]" : "border-line"
                }`}
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
                  <span className="tabular">{i + 1}</span> · {s.kicker}
                </p>
                <p className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-text">{s.title}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {study.tech.decisions.map((d) => (
              <div key={d.title} className="rounded-xl border border-line p-5">
                <h3 className="text-[16px] font-semibold text-text">{d.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{d.detail}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
            {study.tech.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11.5px] text-muted"
              >
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* Code */}
        {study.code && (
          <Section id="code">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
              <Reveal>
                <Eyebrow n={next()}>Code</Eyebrow>
                <SectionTitle id="code">{study.code.title}</SectionTitle>
                <Lead>{study.code.lead}</Lead>
                {study.code.note && (
                  <p className="mt-4 text-[14px] leading-relaxed text-faint">{study.code.note}</p>
                )}
              </Reveal>
              <figure className="m-0 min-w-0">
                <div className="overflow-hidden rounded-xl border border-line bg-surface">
                  <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
                    <a
                      href={study.code.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="truncate font-mono text-[11.5px] text-muted transition-colors hover:text-accent"
                    >
                      {study.code.file}
                      <span className="sr-only"> on GitHub (opens in a new tab)</span>
                    </a>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
                      {study.code.lang}
                    </span>
                  </div>
                  <pre tabIndex={0} aria-label={`Code from ${study.code.file}`} className="cs-code p-5">
                    <code>{study.code.source}</code>
                  </pre>
                </div>
              </figure>
            </div>
          </Section>
        )}

        {/* Performance */}
        {perf && (
        <Section id="performance" tint={!!study.code}>
          <Reveal>
            <Eyebrow n={next()}>Performance</Eyebrow>
            <SectionTitle id="performance">{perf.title}</SectionTitle>
            <Lead>{perf.lead}</Lead>
          </Reveal>
          <div className={`mt-10 grid gap-4 ${perf.groups.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {perf.groups.map((g) => (
              <div key={g.name} className="overflow-hidden rounded-2xl border border-line">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line bg-surface px-5 py-3.5">
                  <h3 className="text-[16px] font-semibold text-text">{g.name}</h3>
                  <span className="font-mono text-[11px] text-faint">{g.note}</span>
                </div>
                <dl
                  className={`grid grid-cols-2 ${
                    perf.groups.length > 1 ? "" : "sm:grid-cols-3"
                  }`}
                >
                  {g.metrics.map((m) => (
                    <div key={m.label} className="cs-cell p-5">
                      <dt className="sr-only">{m.label}</dt>
                      <dd>
                        <MetricValue m={m} />
                        <p aria-hidden="true" className="mt-2 text-[13px] leading-snug text-muted">
                          {m.label}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Section>
        )}

        {/* Optimization */}
        {study.optimization && (
          <Section id="optimization" tint={!study.code}>
            <Reveal>
              <Eyebrow n={next()}>Optimization</Eyebrow>
              <SectionTitle id="optimization">{study.optimization.title}</SectionTitle>
              <Lead>{study.optimization.lead}</Lead>
            </Reveal>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {study.optimization.cards.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-[var(--cs-accent)]"
                  >
                    <MetricValue m={{ value: c.value, label: c.title }} size="md" />
                    <h3 className="mt-4 text-[16px] font-semibold text-text">{c.title}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{c.detail}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors group-hover:text-[var(--cs-accent)]">
                      Read the write-up
                      <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            {study.optimization.shot && (
              <div className="mt-10">
                <Shot shot={study.optimization.shot} sizes={WIDE} />
              </div>
            )}
          </Section>
        )}

        {/* Applied AI */}
        {study.ai && (
        <Section id="ai">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow n={next()}>Applied AI</Eyebrow>
                <SectionTitle id="ai">{study.ai.title}</SectionTitle>
              </Reveal>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted">
                {study.ai.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {study.ai.stats && (
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {study.ai.stats.map((s) => (
                    <li key={s.label} className="rounded-xl border border-line bg-surface p-4">
                      <MetricValue m={s} size="md" />
                      <p className="mt-2 text-[13px] text-muted">{s.label}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="min-w-0 lg:pt-2">
              <Shot shot={study.ai.shot} sizes={HALF} />
            </div>
          </div>
        </Section>
        )}

        {/* Next */}
        <Section id="next" tint>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Eyebrow n={next()}>Next</Eyebrow>
              <SectionTitle id="next">What I&apos;d ship next</SectionTitle>
            </div>
            <ol className="border-t border-line">
              {study.next.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-line py-4 text-[16px] leading-relaxed text-text">
                  <span className="tabular pt-0.5 font-mono text-[12px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Onward */}
        <nav aria-label="More work" className="border-t border-line">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-5 py-14 sm:px-8">
            <Link
              href={`/work/${study.nextStudy.slug}`}
              className="group inline-flex items-center gap-3 text-text"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Next case study</span>
              <span className="text-[1.6rem] font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent">
                {study.nextStudy.title}
              </span>
              <ArrowRight
                size={20}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              All work
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
}
