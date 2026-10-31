"use client";

import { useEffect } from "react";
import "lenis/dist/lenis.css";

/**
 * Everything that moves after the intro. GSAP and Lenis load after
 * hydration, so they never hold up the first paint; nothing is hidden until
 * this script is running, anything already on screen is left alone, and all
 * of it is skipped under reduced motion.
 *
 * - smooth scrolling, and a reading-progress line under the header
 * - the hero lifting away as you leave it
 * - headings rising line by line, lists arriving in order
 * - the statement lighting up word by word
 * - the marquee speeding up and reversing with the scroll
 * - project cards stacking, each settling back under the next (wide screens)
 * - numbers counting up
 * - a custom cursor that labels projects, and magnetic buttons (fine pointers)
 */
export default function Motion() {
  useEffect(() => {
    let revert = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
        import("lenis"),
      ]);
      await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          fine: "(pointer: fine) and (prefers-reduced-motion: no-preference)",
          wide: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { motion, fine, wide } = ctx.conditions as Record<string, boolean>;
          if (!motion) return;
          const cleanups: (() => void)[] = [];
          const onScreen = (el: Element) => el.getBoundingClientRect().top < window.innerHeight;
          const below = <T extends Element>(sel: string) =>
            gsap.utils.toArray<T>(sel).filter((el) => !onScreen(el));

          // Smooth scrolling on GSAP's clock, so ScrollTrigger stays in step.
          const lenis = new Lenis({ autoRaf: false, anchors: true });
          lenis.on("scroll", ScrollTrigger.update);
          const tick = (t: number) => lenis.raf(t * 1000);
          gsap.ticker.add(tick);
          gsap.ticker.lagSmoothing(0);
          cleanups.push(() => {
            gsap.ticker.remove(tick);
            lenis.destroy();
          });

          gsap.fromTo(
            "[data-progress]",
            { scaleX: 0 },
            { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
          );

          // Leaving the hero: the legend and furniture fade while the terrain's
          // own camera climbs to a map view.
          const leave = { trigger: "#top", start: "top top", end: "60% top", scrub: true };
          gsap.fromTo(
            ".legend, .hero-corner, .map-furniture, .pins",
            { opacity: 1 },
            { opacity: 0, ease: "none", immediateRender: false, scrollTrigger: leave },
          );

          // Headings rise out of their own line boxes.
          below<HTMLElement>("[data-split]").forEach((el) => {
            const split = SplitText.create(el, { type: "lines", mask: "lines" });
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1.2,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
              onComplete: () => split.revert(),
            });
          });

          // Lists arrive in order, with the total delay capped.
          below<HTMLElement>("[data-stagger]").forEach((el) => {
            gsap.from(el.children, {
              y: 24,
              opacity: 0,
              duration: 0.9,
              stagger: { each: 0.06, amount: 0.3 },
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          // The statement lights up word by word as it passes through.
          below<HTMLElement>("[data-words]").forEach((el) => {
            gsap.fromTo(
              el.querySelectorAll(".word"),
              { opacity: 0.14 },
              {
                opacity: 1,
                stagger: 0.04,
                ease: "none",
                scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 50%", scrub: 0.6 },
              },
            );
          });

          // Numbers count up the first time they're seen ("5,200×", "60+").
          below<HTMLElement>("[data-count]").forEach((el) => {
            const m = el.textContent?.trim().match(/^([\d,]+)(\D*)$/);
            if (!m) return;
            const end = Number(m[1].replace(/,/g, ""));
            const n = { v: 0 };
            const show = () => (el.textContent = `${Math.round(n.v).toLocaleString("en-US")}${m[2]}`);
            gsap.to(n, {
              v: end,
              duration: 1.8,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
              onStart: show,
              onUpdate: show,
            });
          });

          // The marquee drifts on its own; scrolling speeds it up, scrolling back reverses it.
          const track = document.querySelector<HTMLElement>("[data-marquee]");
          const run = track?.getAnimations()[0];
          if (run) {
            let rate = 1, target = 1, dir = 1;
            const onScroll = () => {
              dir = lenis.direction === -1 ? -1 : 1;
              target = dir * (1 + Math.min(Math.abs(lenis.velocity) * 0.12, 5));
            };
            lenis.on("scroll", onScroll);
            const ease = () => {
              rate += (target - rate) * 0.08;
              target += (dir - target) * 0.04;
              run.playbackRate = rate;
            };
            gsap.ticker.add(ease);
            cleanups.push(() => {
              gsap.ticker.remove(ease);
              run.playbackRate = 1;
            });
          }

          // Cards stack: each settles back and dims as the next slides over it.
          if (wide) {
            const items = gsap.utils.toArray<HTMLElement>(".stack-item");
            items.slice(0, -1).forEach((item, i) => {
              const card = item.querySelector<HTMLElement>("[data-card]");
              const dim = item.querySelector<HTMLElement>(".card-dim");
              const next = items[i + 1];
              const st = { trigger: next, start: "top bottom", end: "top 18%", scrub: true };
              if (card) gsap.to(card, { scale: 0.9, ease: "none", scrollTrigger: st });
              if (dim) gsap.to(dim, { opacity: 0.55, ease: "none", scrollTrigger: st });
            });
          }

          if (!fine) return () => cleanups.forEach((f) => f());

          // A cursor of our own: a dot, a ring over links, a labelled disc over projects.
          const cursor = document.querySelector<HTMLElement>("[data-cursor-el]");
          if (cursor) {
            const label = cursor.querySelector<HTMLElement>(".cursor-label")!;
            const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "expo.out" });
            const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "expo.out" });
            document.documentElement.classList.add("cursor-on");
            let px = -1, py = -1;
            const read = (t: Element | null) => {
              const tagged = t?.closest<HTMLElement>("[data-cursor]");
              const link = t?.closest("a, button");
              cursor.dataset.state = tagged ? "label" : link ? "link" : "dot";
              if (tagged) label.textContent = tagged.dataset.cursor || "View";
            };
            const move = (e: PointerEvent) => {
              px = e.clientX;
              py = e.clientY;
              xTo(px);
              yTo(py);
              read(e.target as Element | null);
            };
            lenis.on("scroll", () => px >= 0 && read(document.elementFromPoint(px, py)));
            const hide = () => (cursor.dataset.state = "hidden");
            window.addEventListener("pointermove", move, { passive: true });
            document.addEventListener("pointerleave", hide);
            cleanups.push(() => {
              window.removeEventListener("pointermove", move);
              document.removeEventListener("pointerleave", hide);
              document.documentElement.classList.remove("cursor-on");
            });
          }

          // Buttons lean toward the pointer.
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "expo.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "expo.out" });
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", leave);
            });
          });

          return () => cleanups.forEach((f) => f());
        },
      );

      revert = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      revert();
    };
  }, []);

  return (
    <div aria-hidden="true" data-cursor-el data-state="hidden" className="cursor">
      <span className="cursor-ball" />
      <span className="cursor-label">View</span>
    </div>
  );
}
