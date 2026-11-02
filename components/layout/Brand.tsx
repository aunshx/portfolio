"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PROFILE } from "@/content/profile";

const LETTERS = [...PROFILE.name];

/**
 * The header's home link. The name shows first, then folds away into the
 * logo and the pin drops onto the "a". Once per session: after that (and
 * with reduced motion) it starts as the logo. Hover brings the name back.
 * The `brand-seen` class on <html> holds the state; the bootstrap in the
 * root layout sets it before paint on later loads.
 */
export default function Brand({ href }: { href: string }) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion") || root.classList.contains("brand-seen")) return;
    // Let the loading screen finish first, if it's playing.
    const wait = root.classList.contains("intro") ? 2900 : 900;
    const t = setTimeout(() => {
      root.classList.add("brand-seen");
      try {
        sessionStorage.setItem("brand", "1");
      } catch {}
    }, wait);
    return () => clearTimeout(t);
  }, []);

  return (
    <Link href={href} aria-label={PROFILE.name} className="brand">
      <svg className="brand-mark" viewBox="8 7 51 48" aria-hidden="true">
        <path
          transform="translate(7.02 52.83) scale(0.06586 -0.06586)"
          d="M216 -12Q175 -12 141.0 -4.5Q107 3 82.0 20.5Q57 38 43.5 66.5Q30 95 30 136Q30 195 54.5 232.0Q79 269 126.0 289.0Q173 309 240.5 316.5Q308 324 395 324V350Q395 372 384.5 385.5Q374 399 357.0 406.0Q340 413 318 413Q301 413 283.0 409.0Q265 405 253.5 395.0Q242 385 242 367V363H46Q45 367 45.0 370.0Q45 373 45 377Q45 426 76.5 462.5Q108 499 169.5 519.5Q231 540 321 540Q394 540 456.0 524.0Q518 508 556.0 470.5Q594 433 594 368V162Q594 146 602.0 134.5Q610 123 626 123H662V8Q650 1 622.5 -5.5Q595 -12 558 -12Q518 -12 488.0 -4.0Q458 4 439.5 19.0Q421 34 414 54H407Q386 35 358.5 20.0Q331 5 296.0 -3.5Q261 -12 216 -12ZM297 112Q316 112 333.5 117.5Q351 123 365.0 132.5Q379 142 387.0 155.5Q395 169 395 185V230Q336 230 299.5 221.0Q263 212 246.0 197.0Q229 182 229 162Q229 142 239.0 131.0Q249 120 264.5 116.0Q280 112 297 112Z"
          fill="currentColor"
        />
        <g className="brand-pin">
          <circle cx="48.74" cy="16.64" r="9.22" fill="var(--bg)" />
          <circle cx="48.74" cy="16.64" r="6.26" fill="var(--accent)" />
        </g>
      </svg>
      <span className="brand-name" aria-hidden="true">
        <span style={{ ["--n" as string]: LETTERS.length }}>
          {LETTERS.map((c, i) => (
            <i key={i} style={{ ["--i" as string]: i }}>
              {c === " " ? " " : c}
            </i>
          ))}
        </span>
      </span>
    </Link>
  );
}
