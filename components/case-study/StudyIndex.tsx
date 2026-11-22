"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type IndexStudy = {
  slug: string;
  title: string;
  titleSuffix?: string;
  tagline: string;
  year: string;
  role: string;
  chips: string[];
  stat: { value: string; unit?: string; label: string };
  hero: { src: string; alt: string; w: number; h: number; domain?: string };
  /** The product's own colors: the viewer's stage takes them on. */
  tone: { bg: string; fg: string; muted: string; accent: string };
  /** A shade of the product that reads on this site's paper, for the row's marks. */
  ink: string;
  swatches: { name: string; hex: string }[];
};

/**
 * Every case study as one ledger. Rows are plain links. On wide screens a
 * sheet sticks beside the list and shows whichever study is under the
 * pointer, has focus, or sits mid-screen while scrolling; on phones each row
 * carries its own picture instead.
 */
export default function StudyIndex({ studies }: { studies: IndexStudy[] }) {
  const [active, setActive] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const s = studies[active];

  // Scrolling drives the sheet too, so it works without a pointer.
  useEffect(() => {
    const el = list.current;
    if (!el || !matchMedia("(min-width: 1024px)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    el.querySelectorAll("[data-i]").forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <div className="si-grid">
      <ol ref={list} className="si-list">
        {studies.map((st, i) => (
          <li
            key={st.slug}
            data-i={i}
            data-active={i === active ? "" : undefined}
            className="si-item"
            style={{ ["--ink" as string]: st.ink, ["--tone-bg" as string]: st.tone.bg }}
          >
            <Link
              href={`/work/${st.slug}`}
              className="si-row"
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              {/* Phones only: the picture rides with its row. */}
              <span className="si-thumb" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={st.hero.src} alt="" width={st.hero.w} height={st.hero.h} loading="lazy" decoding="async" />
              </span>

              <span className="si-body">
                <span className="si-title">
                  {st.title}
                  {st.titleSuffix && <span className="si-suffix">{st.titleSuffix}</span>}
                </span>
                <span className="si-tagline">{st.tagline}</span>
                <span className="si-meta">
                  <span className="tabular">{st.year}</span>
                  <span aria-hidden="true" className="si-sep" />
                  <span>{st.role}</span>
                </span>
                <span className="si-chips">
                  {st.chips.map((c) => (
                    <span key={c} className="si-chip">
                      {c}
                    </span>
                  ))}
                </span>
              </span>

              <span className="si-stat">
                <span className="si-stat-value tabular">
                  {st.stat.value}
                  {st.stat.unit && <span className="si-stat-unit">{st.stat.unit}</span>}
                </span>
                <span className="si-stat-label">{st.stat.label}</span>
              </span>

              <span className="si-go" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={2} />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <aside className="si-viewer" aria-hidden="true">
        <div
          className="si-stage"
          style={{
            ["--stage-bg" as string]: s.tone.bg,
            ["--stage-fg" as string]: s.tone.fg,
            ["--stage-muted" as string]: s.tone.muted,
            ["--stage-accent" as string]: s.tone.accent,
          }}
        >
          <div className="si-frames">
            {studies.map((st, i) => (
              <figure key={st.slug} className="si-frame" data-on={i === active ? "" : undefined}>
                <div className="browser-bar">
                  <span aria-hidden="true" className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="browser-url">{st.hero.domain}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={st.hero.src}
                  alt=""
                  width={st.hero.w}
                  height={st.hero.h}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <div className="si-sheet-foot">
            <span className="si-sheet-name">
              {s.title}
              {s.titleSuffix}
            </span>
            <span className="si-swatches">
              {s.swatches.map((w) => (
                <span key={w.hex} className="si-swatch" style={{ background: w.hex }} title={`${w.name} ${w.hex}`} />
              ))}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
