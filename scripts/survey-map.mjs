// Generates public/images/home/survey.svg: the hero's terrain seen from above,
// as contour lines that draw themselves in from the valleys up. Same noise as
// components/motion/terrain-math.ts at time 0. Placement matches content/places.ts.
//
//   npm i --no-save d3-contour@4.0.2
//   REGION="-6,6,-6.6,0.15" SVG=public/images/home/survey.svg node scripts/survey-map.mjs 10 26 /dev/null 3 160
//
// Arguments: grid cell (map units), contour levels, a TypeScript output path for
// the raw paths (or /dev/null), simplification tolerance, shortest line kept.
import { contours } from "d3-contour";
import fs from "node:fs";

const mod289 = (x) => x - Math.floor(x / 289) * 289;
const permute = (x) => mod289((x * 34 + 1) * x);
const fract = (x) => x - Math.floor(x);
function snoise(vx, vy) {
  const Cx = 0.211324865405187, Cy = 0.366025403784439, Cz = -0.577350269189626, Cw = 0.024390243902439;
  const s = (vx + vy) * Cy;
  let ix = Math.floor(vx + s), iy = Math.floor(vy + s);
  const t = (ix + iy) * Cx;
  const x0x = vx - ix + t, x0y = vy - iy + t;
  const i1x = x0x > x0y ? 1 : 0, i1y = x0x > x0y ? 0 : 1;
  const x12x = x0x + Cx - i1x, x12y = x0y + Cx - i1y;
  const x12z = x0x + Cz, x12w = x0y + Cz;
  ix = mod289(ix); iy = mod289(iy);
  const p0 = permute(permute(iy) + ix);
  const p1 = permute(permute(iy + i1y) + ix + i1x);
  const p2 = permute(permute(iy + 1) + ix + 1);
  let m0 = Math.max(0.5 - (x0x * x0x + x0y * x0y), 0);
  let m1 = Math.max(0.5 - (x12x * x12x + x12y * x12y), 0);
  let m2 = Math.max(0.5 - (x12z * x12z + x12w * x12w), 0);
  m0 *= m0; m0 *= m0; m1 *= m1; m1 *= m1; m2 *= m2; m2 *= m2;
  const xa = 2 * fract(p0 * Cw) - 1, xb = 2 * fract(p1 * Cw) - 1, xc = 2 * fract(p2 * Cw) - 1;
  const ha = Math.abs(xa) - 0.5, hb = Math.abs(xb) - 0.5, hc = Math.abs(xc) - 0.5;
  const a0a = xa - Math.floor(xa + 0.5), a0b = xb - Math.floor(xb + 0.5), a0c = xc - Math.floor(xc + 0.5);
  m0 *= 1.79284291400159 - 0.85373472095314 * (a0a * a0a + ha * ha);
  m1 *= 1.79284291400159 - 0.85373472095314 * (a0b * a0b + hb * hb);
  m2 *= 1.79284291400159 - 0.85373472095314 * (a0c * a0c + hc * hc);
  return 130 * (m0 * (a0a * x0x + ha * x0y) + m1 * (a0b * x12x + hb * x12y) + m2 * (a0c * x12z + hc * x12w));
}
const height = (px, pz) => {
  const qx = px * 0.42, qz = pz * 0.42;
  return (snoise(qx, qz) * 0.62 + snoise(qx * 2.3 + 7.1, qz * 2.3 + 7.1) * 0.2 + snoise(qx * 5.3 - 3, qz * 5.3 - 3) * 0.05) * 0.75;
};

// The map: x from -8 to 8 (left to right), z from -8.5 (top, far) to 0.5 (bottom, near).
const W = 1600, H = 900;
const [X0, X1, Z0, Z1] = (process.env.REGION ?? '-8,8,-8.5,0.5').split(',').map(Number);
const CELL = Number(process.argv[2] ?? 8), PAD = 3;
const nx = Math.ceil(W / CELL) + 1 + PAD * 2, ny = Math.ceil(H / CELL) + 1 + PAD * 2;
const toX = (gx) => (gx - 0.5 - PAD) * CELL, toY = (gy) => (gy - 0.5 - PAD) * CELL;
const vals = new Float64Array(nx * ny);
let lo = Infinity, hi = -Infinity;
for (let j = 0; j < ny; j++)
  for (let i = 0; i < nx; i++) {
    const X = (i - PAD) * CELL, Y = (j - PAD) * CELL;
    const h = height(X0 + (X / W) * (X1 - X0), Z0 + (Y / H) * (Z1 - Z0));
    vals[j * nx + i] = h;
    if (X >= 0 && X <= W && Y >= 0 && Y <= H) { lo = Math.min(lo, h); hi = Math.max(hi, h); }
  }

const LEVELS = Number(process.argv[3] ?? 16);
const EPS = Number(process.argv[5] ?? 1.4), MINLEN = Number(process.argv[6] ?? 90);
const step = (hi - lo) / (LEVELS + 1);
const thresholds = Array.from({ length: LEVELS }, (_, k) => lo + step * (k + 1));

const inside = ([x, y]) => x >= -4 && x <= W + 4 && y >= -4 && y <= H + 4;
function rdp(pts, eps) {
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]];
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
  let max = 0, at = 0;
  for (let k = 1; k < pts.length - 1; k++) {
    const d = Math.abs(dy * pts[k][0] - dx * pts[k][1] + b[0] * a[1] - b[1] * a[0]) / L;
    if (d > max) { max = d; at = k; }
  }
  if (max <= eps) return [a, b];
  return rdp(pts.slice(0, at + 1), eps).slice(0, -1).concat(rdp(pts.slice(at), eps));
}
const len = (pts) => pts.slice(1).reduce((s, p, k) => s + Math.hypot(p[0] - pts[k][0], p[1] - pts[k][1]), 0);
const r = (n) => Math.round(n);
function smooth(pts, closed) {
  // Midpoint quadratic smoothing: each vertex becomes a control point.
  const m = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  if (closed) {
    const n = pts.length;
    let s = m(pts[n - 1], pts[0]);
    let d = `M${r(s[0])} ${r(s[1])}`;
    for (let k = 0; k < n; k++) {
      const e = m(pts[k], pts[(k + 1) % n]);
      d += `Q${r(pts[k][0])} ${r(pts[k][1])} ${r(e[0])} ${r(e[1])}`;
    }
    return d + "Z";
  }
  let d = `M${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let k = 1; k < pts.length - 1; k++) {
    const e = m(pts[k], pts[k + 1]);
    d += `Q${r(pts[k][0])} ${r(pts[k][1])} ${r(e[0])} ${r(e[1])}`;
  }
  const z = pts[pts.length - 1];
  return d + `L${r(z[0])} ${r(z[1])}`;
}

const out = [];
contours().size([nx, ny]).thresholds(thresholds)(vals).forEach((c, level) => {
  for (const poly of c.coordinates)
    for (const ring of poly) {
      const pts = ring.map(([gx, gy]) => [toX(gx), toY(gy)]);
      if (pts.every(inside)) {
        const p = rdp(pts, EPS);
        if (len(p) > MINLEN && p.length > 3) out.push({ level, d: smooth(p.slice(0, -1), true) });
        continue;
      }
      // Rotate so the ring starts outside, then keep each run that's on the map.
      const start = pts.findIndex((p) => !inside(p));
      const rot = pts.slice(start, -1).concat(pts.slice(0, start + 1));
      let run = [];
      const flush = () => {
        if (run.length > 2) {
          const p = rdp(run, EPS);
          if (len(p) > MINLEN) out.push({ level, d: smooth(p, false) });
        }
        run = [];
      };
      rot.forEach((p, k) => {
        if (inside(p)) {
          if (!run.length && k > 0) run.push(rot[k - 1]);
          run.push(p);
        } else if (run.length) {
          run.push(p);
          flush();
        }
      });
      flush();
    }
});

const json = JSON.stringify(out.map(({ level, d }) => [level, d]));
console.log({ nx, ny, lo: lo.toFixed(3), hi: hi.toFixed(3), paths: out.length, bytes: json.length });
const file = `/**
 * Contour lines of the hero terrain seen from above, generated from the same
 * noise as the 3D landscape (terrain-math.ts, at time 0). The map spans
 * x ${X0} to ${X1} left to right and z ${Z0} (far, top) to ${Z1} (near, bottom).
 * Each entry is [level, path]; levels run from the lowest ground up.
 */
export const CONTOURS = {
  w: ${W},
  h: ${H},
  levels: ${LEVELS},
  paths: ${json} as [number, string][],
};

/** Where a point on the land (x, z) sits on this map. */
export const toMap = (x: number, z: number) => ({
  x: ((x - ${X0}) / ${X1 - X0}) * ${W},
  y: ((z - ${Z0}) / ${Z1 - Z0}) * ${H},
});
`;
fs.writeFileSync(process.argv[4] ?? "contours.ts", file);

// Animated SVG for the loading screen: lines draw from the lowest ground up.
if (process.env.SVG) {
  const D = 0.75; // spread of start times across levels
  const css = [
    "path{fill:none;stroke:#111;stroke-width:.6px;stroke-opacity:.28;vector-effect:non-scaling-stroke;stroke-dasharray:1;stroke-dashoffset:1;animation:d .95s cubic-bezier(.65,0,.35,1) forwards}",
    ".i{stroke-width:1.1px;stroke-opacity:.5}",
    ...Array.from({ length: LEVELS }, (_, k) => `.l${k}{animation-delay:${((k / LEVELS) * D).toFixed(3)}s}`),
    "@keyframes d{to{stroke-dashoffset:0}}",
  ].join("");
  const body = out
    .map(({ level, d }) => `<path class="l${level}${level % 5 === 4 ? " i" : ""}" pathLength="1" d="${d}"/>`)
    .join("\n");
  fs.writeFileSync(
    process.env.SVG,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><style>${css}</style>\n${body}\n</svg>\n`,
  );
}
