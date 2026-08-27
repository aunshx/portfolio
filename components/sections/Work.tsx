"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import BrowserFrame from "@/components/ui/BrowserFrame";
import StatusPill from "@/components/ui/StatusPill";
import { WORK } from "@/content/work";
import { LINKS } from "@/content/profile";

export default function Work() {
  const [active, setActive] = useState(0);
  const marks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = marks.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const root = document.documentElement;
    const live = new Set<Element>();

    // A zero-height band across the middle of the viewport. Exactly one
    // sentinel crosses it at a time, and that is the page we are turned to.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            live.add(e.target);
            const i = els.indexOf(e.target as HTMLDivElement);
            if (i !== -1) setActive(i);
          } else {
            live.delete(e.target);
          }
        }
        // Chrome steps aside while the projects hold the screen.
        root.dataset.story = live.size > 0 ? "on" : "off";
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      delete root.dataset.story;
    };
  }, []);

  const goTo = useCallback((i: number) => {
    const el = marks.current[i];
    if (el) {
      window.scrollTo({
        top: el.offsetTop + el.offsetHeight / 2 - window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <section
        id="work"
        aria-labelledby="work-title-sr"
        className="story relative"
        style={{ ["--count" as string]: WORK.length }}
      >
        <h2 id="work-title-sr" className="sr-only">
          Selected work
        </h2>

        {/* Scroll sentinels, one screen tall each. */}
        <div aria-hidden="true" className="story-marks">
          {WORK.map((w, i) => (
            <div
              key={w.id}
              ref={(el) => {
                marks.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="story-stage">
          <div className="story-frame">
            {/* Chapter rail: where you are in the run. */}
            <nav className="story-rail" aria-label="Projects">
              <p className="story-rail-label">Selected work</p>
              <ol>
                {WORK.map((w, i) => (
                  <li key={w.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === active ? "true" : undefined}
                      className="story-rail-item"
                      data-on={i === active}
                    >
                      <span className="tabular story-rail-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="story-rail-name">{w.title}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <span className="story-rail-track" aria-hidden="true">
                <span
                  className="story-rail-fill"
                  style={{
                    transform: `scaleY(${(active + 1) / WORK.length})`,
                  }}
                />
              </span>
            </nav>

            {/* The pages. */}
            <div className="story-deck">
              {WORK.map((item, i) => (
                <article
                  key={item.id}
                  className="story-card"
                  data-state={
                    i === active ? "active" : i < active ? "past" : "next"
                  }
                  aria-hidden={i !== active}
                >
                  <div className="story-shot">
                    <BrowserFrame
                      src={item.image}
                      alt={`Screenshot of ${item.title}`}
                      domain={item.domain}
                      priority
                      sizes="(max-width: 1024px) 100vw, 1280px"
                    />
                  </div>

                  {/* Caption card overlapping the shot. */}
                  <div className="story-caption">
                    <div className="story-caption-top">
                      {item.status && <StatusPill status={item.status} />}
                      {item.tag && <span className="story-tag">{item.tag}</span>}
                    </div>

                    <h3 className="story-title">
                      <a
                        href={item.link ?? item.gitUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={i === active ? 0 : -1}
                        className="transition-colors hover:text-accent"
                      >
                        {item.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </h3>

                    <p className="story-sub">{item.subTitle}</p>
                    <p className="story-desc">{item.description}</p>

                    <ul className="story-tech">
                      {item.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>

                    <div className="story-actions">
                      <a
                        href={item.link ?? item.gitUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={i === active ? 0 : -1}
                        className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                      >
                        {item.domain ?? "Visit"}
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.2}
                          aria-hidden="true"
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                      {item.gitUrl && (
                        <a
                          href={item.gitUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          tabIndex={i === active ? 0 : -1}
                          aria-label={`${item.title} source on GitHub`}
                          className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                          <Github size={15} strokeWidth={1.8} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1180px] justify-center px-5 pb-16 sm:px-8">
        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          <Github size={15} strokeWidth={1.9} aria-hidden="true" />
          More on GitHub
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </>
  );
}
