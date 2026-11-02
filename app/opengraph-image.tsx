import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PROFILE, SITE } from "@/content/profile";
import { CONTOURS } from "@/content/contours";
import { WORK } from "@/content/work";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${PROFILE.name}, ${PROFILE.role}: a contour map with a legend card and project pins`;

const PAPER = "#f3f1ec", SURFACE = "#faf9f6", INK = "#111111", MUTED = "#5b5a55", ORANGE = "#ff4f00";

/* Two pins on the land, like the hero's. */
const PINS = [
  { title: WORK[0].title, year: WORK[0].year, x: 930, y: 250 },
  { title: WORK[1].title, year: WORK[1].year, x: 1060, y: 470 },
];

/**
 * The share card: the hero in miniature. Contour land, a legend card with
 * the name, and two project pins. The fonts are static Archivo cuts in
 * assets/og (the image renderer can't read the site's WOFF2 variable font).
 */
export default async function Image() {
  const [display, text, mark] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/archivo-display.ttf")),
    readFile(join(process.cwd(), "assets/og/archivo-text.ttf")),
    readFile(join(process.cwd(), "public/icon.svg"), "utf8"),
  ]);
  const host = new URL(SITE.url).host;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER, position: "relative", fontFamily: "Archivo" }}>
        <svg
          width="1200"
          height="630"
          viewBox={`0 0 ${CONTOURS.w} ${CONTOURS.h}`}
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0 }}
        >
          {CONTOURS.paths.map((d, i) => (
            <path key={i} d={d} fill="none" stroke={INK} strokeOpacity={i % 5 === 0 ? 0.26 : 0.14} strokeWidth={i % 5 === 0 ? 2.2 : 1.5} />
          ))}
        </svg>

        {PINS.map((p) => (
          <div key={p.title} style={{ position: "absolute", left: p.x, top: p.y, display: "flex" }}>
            <div
              style={{
                position: "absolute", left: -12, top: -12, width: 24, height: 24, borderRadius: 999,
                background: ORANGE, border: `5px solid ${PAPER}`,
              }}
            />
            <div style={{ position: "absolute", left: -1, top: -92, width: 2, height: 80, background: INK }} />
            <div
              style={{
                position: "absolute", top: -146, left: -90, display: "flex", alignItems: "baseline", gap: 10,
                padding: "12px 22px", borderRadius: 999, background: INK, color: PAPER, whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontFamily: "Archivo Display", fontSize: 28 }}>{p.title}</span>
              <span style={{ fontSize: 21, opacity: 0.7 }}>{p.year}</span>
            </div>
          </div>
        ))}

        <div
          style={{
            position: "absolute", left: 64, top: 64, bottom: 64, width: 660, display: "flex", flexDirection: "column",
            justifyContent: "space-between", padding: "44px 48px", background: SURFACE, border: `2px solid ${INK}`, borderRadius: 6,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Archivo Display", fontSize: 58, color: INK, letterSpacing: -0.5 }}>
              {PROFILE.name}
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontSize: 30, lineHeight: 1.35, color: MUTED }}>
              <span>Full-stack engineer.</span>
              <span>I build products end to end.</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", borderTop: `2px solid ${INK}` }}>
            {[
              ["Projects", WORK.slice(0, 4).map((w) => w.title).join(" · ")],
              ["Location", PROFILE.location],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", padding: "16px 0", borderBottom: "1px solid #d9d6cf", fontSize: 24 }}>
                <div style={{ display: "flex", width: 150, color: INK }}>{k}</div>
                <div style={{ display: "flex", color: MUTED }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", right: 64, bottom: 56, display: "flex", alignItems: "center", gap: 16 }}>
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(mark)}`} width={64} height={64} alt="" />
          <div style={{ display: "flex", fontFamily: "Archivo Display", fontSize: 30, color: INK }}>{host}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: text, weight: 500, style: "normal" },
        { name: "Archivo Display", data: display, weight: 800, style: "normal" },
      ],
    },
  );
}
