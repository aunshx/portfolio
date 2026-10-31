"use client";

import { useEffect } from "react";
import "lenis/dist/lenis.css";

/**
 * Everything that moves after the intro: smooth scrolling, rules that draw
 * across, headings that rise line by line, screenshots that wipe in like a
 * scan, numbers that count up, a "View" bubble over projects, magnetic
 * buttons and a tilting hero shot.
 *
 * GSAP and Lenis load after hydration, so they never hold up the first
 * paint. Nothing here hides content until the script is running, and all of
 * it is skipped when the visitor prefers reduced motion.
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
      // Line splits must measure the real font, not the fallback.
      await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          fine: "(pointer: fine) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { motion, fine } = ctx.conditions as { motion: boolean; fine: boolean };
          if (!motion) return;
          const cleanups: (() => void)[] = [];

          // Anything already on screen when this runs stays as it is, so
          // nothing flashes visible, hidden, then visible again.
          const onScreen = (el: Element) => el.getBoundingClientRect().top < window.innerHeight;
          const below = <T extends Element>(sel: string) =>
            gsap.utils.toArray<T>(sel).filter((el) => !onScreen(el));

          // Smooth scrolling, driven by GSAP's clock so ScrollTrigger stays in step.
          // Anchor links glide; the CSS scroll-margin-top already clears the header.
          const lenis = new Lenis({ autoRaf: false, anchors: true });
          lenis.on("scroll", ScrollTrigger.update);
          const tick = (t: number) => lenis.raf(t * 1000);
          gsap.ticker.add(tick);
          gsap.ticker.lagSmoothing(0);
          cleanups.push(() => {
            gsap.ticker.remove(tick);
            lenis.destroy();
          });

          // Reading progress along the bottom of the header.
          gsap.fromTo(
            "[data-progress]",
            { scaleX: 0 },
            { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
          );

          // The hero recedes as you leave it: contours drift, text lifts, shot settles back.
          const hero = { trigger: "#top", start: "top top", end: "bottom top", scrub: true };
          gsap.to("[data-contours]", { yPercent: 14, ease: "none", scrollTrigger: hero });
          gsap.to("[data-hero-copy]", { yPercent: -12, opacity: 0.4, ease: "none", scrollTrigger: hero });
          gsap.to("[data-hero-shot]", { scale: 0.94, yPercent: 6, ease: "none", scrollTrigger: hero });

          // Rules draw across, the same gesture as the contour lines.
          below<HTMLElement>("[data-rule]").forEach((el) => {
            gsap.from(el, {
              scaleX: 0,
              duration: 1.4,
              ease: "expo.inOut",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
            });
          });

          // Headings rise out of their own line boxes.
          below<HTMLElement>("[data-split]").forEach((el) => {
            const split = SplitText.create(el, { type: "lines", mask: "lines" });
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1.1,
              stagger: 0.08,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
              onComplete: () => split.revert(),
            });
          });

          // Lists arrive as lists: a short stagger, capped.
          below<HTMLElement>("[data-stagger]").forEach((el) => {
            gsap.from(el.children, {
              y: 28,
              opacity: 0,
              duration: 0.9,
              stagger: { each: 0.07, amount: 0.35 },
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          // Screenshots wipe in top to bottom, like a scan, and settle from a slight zoom.
          below<HTMLElement>("[data-reveal]").forEach((el) => {
            const img = el.querySelector("img");
            const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
            tl.fromTo(
              el,
              { clipPath: "inset(0% 0% 100% 0% round 10px)" },
              { clipPath: "inset(0% 0% 0% 0% round 10px)", duration: 1.3, ease: "expo.inOut", clearProps: "clipPath" },
            );
            if (img) tl.from(img, { scale: 1.2, duration: 1.8, ease: "expo.out", clearProps: "transform" }, 0);
          });

          // Numbers count up the first time they're seen.
          below<HTMLElement>("[data-count]").forEach((el) => {
            const m = el.textContent?.match(/^(\d+)(\D*)$/);
            if (!m) return;
            const end = Number(m[1]);
            const n = { v: 0 };
            gsap.to(n, {
              v: end,
              duration: 1.6,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
              onStart: () => {
                el.textContent = `0${m[2]}`;
              },
              onUpdate: () => {
                el.textContent = `${Math.round(n.v)}${m[2]}`;
              },
            });
          });

          if (!fine) return () => cleanups.forEach((f) => f());

          // A "View" bubble that follows the pointer over project screenshots.
          const bubble = document.querySelector<HTMLElement>("[data-cursor-bubble]");
          if (bubble) {
            const label = bubble.querySelector("span")!;
            const xTo = gsap.quickTo(bubble, "x", { duration: 0.45, ease: "expo.out" });
            const yTo = gsap.quickTo(bubble, "y", { duration: 0.45, ease: "expo.out" });
            const move = (e: PointerEvent) => {
              xTo(e.clientX);
              yTo(e.clientY);
            };
            window.addEventListener("pointermove", move);
            cleanups.push(() => window.removeEventListener("pointermove", move));
            gsap.utils.toArray<HTMLElement>("[data-cursor]").forEach((el) => {
              const enter = () => {
                label.textContent = el.dataset.cursor || "View";
                gsap.to(bubble, { scale: 1, opacity: 1, duration: 0.4, ease: "expo.out" });
              };
              const leave = () => gsap.to(bubble, { scale: 0, opacity: 0, duration: 0.3, ease: "expo.out" });
              el.addEventListener("pointerenter", enter);
              el.addEventListener("pointerleave", leave);
              cleanups.push(() => {
                el.removeEventListener("pointerenter", enter);
                el.removeEventListener("pointerleave", leave);
              });
            });
          }

          // Buttons lean toward the pointer.
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "expo.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "expo.out" });
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
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

          // The hero shot tilts toward the pointer.
          gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((el) => {
            gsap.set(el, { transformPerspective: 1200 });
            const rx = gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "expo.out" });
            const ry = gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "expo.out" });
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              ry(((e.clientX - r.left) / r.width - 0.5) * 8);
              rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
            };
            const leave = () => {
              rx(0);
              ry(0);
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
    <div aria-hidden="true" data-cursor-bubble className="cursor-bubble">
      <span>View</span>
    </div>
  );
}
