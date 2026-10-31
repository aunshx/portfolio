"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeShot } from "@/content/types";

/**
 * A pre-encoded WebP screenshot with a responsive srcset. Below-the-fold
 * shots load lazily. If a file fails to load, a labelled panel takes its
 * place instead of a broken-image icon.
 */
export default function Screenshot({
  shot,
  sizes,
  label,
  priority = false,
  aspect,
}: {
  shot: HomeShot;
  sizes: string;
  /** Shown on the fallback panel, usually the project name. */
  label: string;
  priority?: boolean;
  /** Crop to this ratio (e.g. "16 / 9"); defaults to the file's own. */
  aspect?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // An image can fail before hydration, when React isn't listening yet.
  // A lazy image that hasn't started loading reports complete === false.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const largest = shot.widths[shot.widths.length - 1];

  return (
    <div className="shot" style={{ aspectRatio: aspect ?? `${shot.w} / ${shot.h}` }}>
      {failed ? (
        <div className="shot-fallback" role="img" aria-label={shot.alt}>
          <span className="t-h3">{label}</span>
          <span className="t-meta">Screenshot unavailable</span>
        </div>
      ) : (
        // A plain <img>: the files are already sized and encoded, so the
        // image optimizer would only re-compress fine UI text.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={`${shot.base}-${largest}.webp`}
          srcSet={shot.widths.map((w) => `${shot.base}-${w}.webp ${w}w`).join(", ")}
          sizes={sizes}
          alt={shot.alt}
          width={shot.w}
          height={shot.h}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
