import Image from "next/image";
import type { Shot as ShotData } from "@/content/types";

/**
 * A screenshot at its intrinsic size, optionally in browser chrome. Width and
 * height come from the capture, so the page reserves the space and never
 * shifts while images load.
 */
export function Shot({
  shot,
  sizes,
  priority = false,
}: {
  shot: ShotData;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure className="m-0 min-w-0">
      <div className="cs-shot">
        {shot.domain && (
          <div className="browser-bar">
            <span aria-hidden="true" className="browser-dots">
              <span />
              <span />
              <span />
            </span>
            <span className="browser-url">{shot.domain}</span>
          </div>
        )}
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.w}
          height={shot.h}
          sizes={sizes}
          priority={priority}
          // Same rule as the work cards: screenshots are full of fine text
          // that re-encoding blurs, so the source file is served as-is.
          unoptimized
          className="block h-auto w-full"
        />
      </div>
      {shot.caption && <figcaption className="cs-caption">{shot.caption}</figcaption>}
    </figure>
  );
}

/** A phone-width capture in a device bezel. */
export function Phone({ shot }: { shot: ShotData }) {
  return (
    <figure className="m-0 w-[min(216px,42vw)] shrink-0">
      <div className="cs-phone">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.w}
          height={shot.h}
          sizes="216px"
          unoptimized
          className="block h-auto w-full"
        />
      </div>
      {shot.caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {shot.caption}
        </figcaption>
      )}
    </figure>
  );
}
