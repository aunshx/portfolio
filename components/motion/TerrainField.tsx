"use client";

import { useEffect, useId, useRef } from "react";
import { terrainHeight } from "./terrain-math";

/** A project standing on the land, as an HTML link the camera keeps in place. */
export type TerrainPin = {
  title: string;
  year: string;
  desc: string;
  href: string;
  external: boolean;
  thumb: string;
  /** Ground position; x is pulled toward the middle on narrow screens. */
  x: number;
  z: number;
};

/** A side project: a small dot on the land, named on hover. */
export type TerrainDot = {
  title: string;
  year: string;
  desc: string;
  href: string;
  x: number;
  z: number;
};

/** A job on the career trail: a marker that rides the land, not a link. */
export type TerrainStop = {
  name: string;
  role: string;
  when: string;
  x: number;
  z: number;
  side: "l" | "r";
};

/** The career trail: the jobs along it, newest first, and where it fades out past the oldest. */
export type TerrainTrail = {
  stops: TerrainStop[];
  tail: [number, number];
};

/**
 * The hero graphic: a 3D landscape with contour lines draped over it, seen
 * from a camera that sways slowly, like a survey flight. The land holds
 * still so the projects and the career trail stay put on it. The pointer raises
 * a mountain where it lands (its contours turn orange). As the page scrolls,
 * the camera climbs and tilts down until the land reads as a flat map.
 *
 * Raw WebGL2, no library: a grid mesh displaced by simplex noise in the
 * vertex shader, isolines from height in the fragment shader, light shading
 * from the surface normal and haze with distance. The career trail is an SVG
 * line over the land: a switchback laid out on screen, pinned to the ground
 * point by point so it rides the camera and the hills without ever breaking
 * behind a ridge; on visits without the loading screen it walks itself in. It pauses offscreen and in
 * background tabs, renders one still frame under reduced motion, and leaves
 * the static SVG contours in place if WebGL2 isn't available.
 */

const NOISE = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}`;

const VERT = `#version 300 es
in vec2 aGrid;
uniform mat4 uVP;
uniform vec2 uHill;
uniform float uLift;
uniform float uGlow;
out float vH;
out float vDepth;
out float vNear;
out vec2 vP;
${NOISE}
float terrain(vec2 p) {
  vec2 q = p * 0.42;
  float h = snoise(q) * 0.62 + snoise(q * 2.3 + 7.1) * 0.2 + snoise(q * 5.3 - 3.0) * 0.05;
  float d = distance(p, uHill);
  h += uLift * 1.35 * exp(-d * d * 0.9);
  return h * 0.75;
}
void main() {
  vec2 p = vec2(aGrid.x * 8.0, 1.5 - aGrid.y * 14.0);
  float h = terrain(p);
  vP = p;
  vH = h;
  float d = distance(p, uHill);
  vNear = uGlow * exp(-d * d * 0.7);
  vec4 pos = uVP * vec4(p.x, h, p.y, 1.0);
  vDepth = pos.w;
  gl_Position = pos;
}`;

const FRAG = `#version 300 es
precision highp float;
in float vH;
in float vDepth;
in float vNear;
in vec2 vP;
uniform vec2 uHill;
uniform float uLift;
uniform vec3 uBg;
uniform vec3 uInk;
uniform vec3 uAccent;
out vec4 color;
${NOISE}
// The broad shape of the land (the fine octave adds nothing to the light).
float relief(vec2 p) {
  vec2 q = p * 0.42;
  float d = distance(p, uHill);
  return (snoise(q) * 0.62 + snoise(q * 2.3 + 7.1) * 0.2 + uLift * 1.35 * exp(-d * d * 0.9)) * 0.75;
}
void main() {
  // Light per pixel, not per mesh corner: shading interpolated between
  // corners picks out the triangles where the land is close.
  float e = 0.06;
  vec3 n = normalize(vec3(relief(vP - vec2(e, 0.0)) - relief(vP + vec2(e, 0.0)), 2.0 * e, relief(vP - vec2(0.0, e)) - relief(vP + vec2(0.0, e))));
  float shade = dot(n, normalize(vec3(-0.5, 0.75, 0.45)));
  float v = vH * 9.0;
  float f = fract(v);
  float w = fwidth(v);
  float band = floor(v + 0.5);
  bool index = mod(band, 5.0) == 0.0;
  float line = 1.0 - smoothstep(0.0, w * (index ? 1.7 : 1.0), min(f, 1.0 - f));

  float haze = clamp(1.0 - (vDepth - 3.0) / 12.0, 0.0, 1.0);
  vec3 ground = uBg * (0.9 + 0.1 * clamp(shade, 0.0, 1.0));
  vec3 ink = mix(uInk, uAccent, clamp(vNear * 1.4, 0.0, 1.0));
  float a = line * mix(index ? 0.5 : 0.3, 0.95, clamp(vNear, 0.0, 1.0));
  vec3 col = mix(ground, ink, a);
  color = vec4(mix(uBg, col, haze), 1.0);
}`;

type M4 = Float32Array<ArrayBuffer>;

function perspective(fovy: number, aspect: number, near: number, far: number): M4 {
  const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}

function lookAt(e: number[], c: number[], up: number[]): M4 {
  let zx = e[0] - c[0], zy = e[1] - c[1], zz = e[2] - c[2];
  let l = Math.hypot(zx, zy, zz);
  zx /= l; zy /= l; zz /= l;
  let xx = up[1] * zz - up[2] * zy, xy = up[2] * zx - up[0] * zz, xz = up[0] * zy - up[1] * zx;
  l = Math.hypot(xx, xy, xz);
  xx /= l; xy /= l; xz /= l;
  const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
  return new Float32Array([
    xx, yx, zx, 0, xy, yy, zy, 0, xz, yz, zz, 0,
    -(xx * e[0] + xy * e[1] + xz * e[2]), -(yx * e[0] + yy * e[1] + yz * e[2]), -(zx * e[0] + zy * e[1] + zz * e[2]), 1,
  ]);
}

function mul(a: M4, b: M4): M4 {
  const o = new Float32Array(16);
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++)
      o[j * 4 + i] = a[i] * b[j * 4] + a[4 + i] * b[j * 4 + 1] + a[8 + i] * b[j * 4 + 2] + a[12 + i] * b[j * 4 + 3];
  return o;
}

function invert(m: M4): M4 | null {
  const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = m;
  const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10;
  const b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12;
  const b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30;
  const b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) return null;
  det = 1 / det;
  return new Float32Array([
    (a11 * b11 - a12 * b10 + a13 * b09) * det, (a02 * b10 - a01 * b11 - a03 * b09) * det,
    (a31 * b05 - a32 * b04 + a33 * b03) * det, (a22 * b04 - a21 * b05 - a23 * b03) * det,
    (a12 * b08 - a10 * b11 - a13 * b07) * det, (a00 * b11 - a02 * b08 + a03 * b07) * det,
    (a32 * b02 - a30 * b05 - a33 * b01) * det, (a20 * b05 - a22 * b02 + a23 * b01) * det,
    (a10 * b10 - a11 * b08 + a13 * b06) * det, (a01 * b08 - a00 * b10 - a03 * b06) * det,
    (a30 * b04 - a31 * b02 + a33 * b00) * det, (a21 * b02 - a20 * b04 - a23 * b00) * det,
    (a11 * b07 - a10 * b09 - a12 * b06) * det, (a00 * b09 - a01 * b07 + a02 * b06) * det,
    (a31 * b01 - a30 * b03 - a32 * b00) * det, (a20 * b03 - a21 * b01 + a22 * b00) * det,
  ]);
}

function project(m: M4, x: number, y: number, z: number) {
  const w = m[3] * x + m[7] * y + m[11] * z + m[15];
  return [
    (m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
    (m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
    (m[2] * x + m[6] * y + m[10] * z + m[14]) / w,
  ];
}

function hex(c: string): [number, number, number] {
  const n = parseInt(c.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** A smooth SVG path through screen points (Catmull-Rom, as cubic Béziers). */
function curve(p: number[][]) {
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(p[0][0])} ${f(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i++) {
    const [a, b, c, e] = [p[i - 1] ?? p[i], p[i], p[i + 1], p[i + 2] ?? p[i + 1]];
    d += `C${f(b[0] + (c[0] - a[0]) / 6)} ${f(b[1] + (c[1] - a[1]) / 6)} ${f(c[0] - (e[0] - b[0]) / 6)} ${f(c[1] - (e[1] - b[1]) / 6)} ${f(c[0])} ${f(c[1])}`;
  }
  return d;
}

export default function TerrainField({
  pins = [],
  dots = [],
  trail,
}: {
  pins?: TerrainPin[];
  dots?: TerrainDot[];
  trail?: TerrainTrail;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    const canvas = ref.current;
    const root = wrap.current;
    if (!canvas || !root) return;
    const gl = canvas.getContext("webgl2", { antialias: true, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const link = (vsrc: string, fsrc: string) => {
      const vs = compile(gl.VERTEX_SHADER, vsrc), fs = compile(gl.FRAGMENT_SHADER, fsrc);
      if (!vs || !fs) return null;
      const p = gl.createProgram()!;
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
    };
    const prog = link(VERT, FRAG);
    if (!prog) return;
    gl.useProgram(prog);
    const groundVao = gl.createVertexArray();
    gl.bindVertexArray(groundVao);

    // The ground: a grid, denser across than deep, as one indexed mesh.
    // Phones and small screens get a lighter mesh and fewer pixels.
    const small = matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    const NX = small ? 110 : 200, NZ = small ? 90 : 150;
    const verts = new Float32Array(NX * NZ * 2);
    for (let z = 0; z < NZ; z++)
      for (let x = 0; x < NX; x++) {
        const i = (z * NX + x) * 2;
        verts[i] = (x / (NX - 1)) * 2 - 1;
        verts[i + 1] = z / (NZ - 1);
      }
    const idx = new Uint16Array((NX - 1) * (NZ - 1) * 6);
    let k = 0;
    for (let z = 0; z < NZ - 1; z++)
      for (let x = 0; x < NX - 1; x++) {
        const a = z * NX + x, b = a + 1, c = a + NX, d = c + 1;
        idx.set([a, c, b, b, c, d], k);
        k += 6;
      }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aGrid");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
    gl.enable(gl.DEPTH_TEST);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uVP = u("uVP"), uHill = u("uHill"), uLift = u("uLift"), uGlow = u("uGlow");
    const css = getComputedStyle(document.documentElement);
    const bg = hex(css.getPropertyValue("--bg").trim() || "#f3f1ec");
    gl.uniform3fv(u("uBg"), bg);
    gl.uniform3fv(u("uInk"), hex(css.getPropertyValue("--text").trim() || "#111111"));
    gl.uniform3fv(u("uAccent"), hex(css.getPropertyValue("--accent").trim() || "#ff4f00"));
    gl.clearColor(bg[0], bg[1], bg[2], 1);

    // After the loading screen the trail is already drawn; otherwise it walks in.
    const walkIn = !document.documentElement.classList.contains("intro");

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.75);
    let w = 1, h = 1, vp: M4 = new Float32Array(16), inv: M4 | null = null;

    // The camera sways slowly, and climbs and tilts down as the hero scrolls away.
    let swayT = 0;
    const view = (sway: number, s: number) => {
      const sx = Math.sin(sway * 0.13), sy = Math.sin(sway * 0.083);
      const eye = [sx * 0.3, 3.0 + s * 4.6 + sy * 0.06, 3.9 - s * 2.9];
      const at = [sx * 0.1, -0.3, -2.4 - s * 0.6];
      return mul(perspective((34 * Math.PI) / 180, w / h, 0.1, 60), lookAt(eye, at, [0, 1, 0]));
    };
    const camera = () => {
      const r = canvas.getBoundingClientRect();
      vp = view(swayT, Math.min(1, Math.max(0, -r.top / Math.max(1, r.height))));
      inv = invert(vp);
    };

    // The trail, laid out against the camera at rest: on screen, a smooth
    // switchback that runs straight up through each stop and swings across
    // between them. Points along it are pinned to the ground under them, so
    // from then on the land carries the line. A point that falls behind a
    // ridge lands on the nearest ground in view, which keeps the line whole.
    let route: [number, number][] = [], stopIdx: number[] = [], stopAt: number[] = [], tailFrom = 0;
    const [caseEl, lineEl, tailEl] = ["case", "line", "tail"].map((n) => root.querySelector<SVGPathElement>(`[data-trail=${n}]`));
    const fadeEl = root.querySelector<SVGLinearGradientElement>("linearGradient");
    const layTrail = () => {
      if (!trail) return;
      const rest = view(0, 0), k = Math.min(1, Math.max(0.35, w / h / 1.6));
      const onScreen = (x: number, z: number) => {
        const [sx, sy] = project(rest, x, terrainHeight(x, z, 0, 0, 0, 0), z);
        return [((sx + 1) / 2) * w, ((1 - sy) / 2) * h];
      };
      // The ground under a screen point: cast a ray from the camera and keep
      // the first land it meets.
      const back = invert(rest);
      const under = (px: number, py: number, x: number, z: number): [number, number] => {
        if (!back) return [x, z];
        const nx = (px / w) * 2 - 1, ny = 1 - (py / h) * 2;
        const a = project(back, nx, ny, -1), b = project(back, nx, ny, 1);
        const at = (t: number) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
        const above = (t: number) => { const [rx, ry, rz] = at(t); return ry > terrainHeight(rx, rz, 0, 0, 0, 0); };
        let lo = 0;
        for (let t = 0.0005; t <= 0.3; t += 0.0005) {
          if (!above(t)) {
            let hi = t;
            for (let n = 0; n < 20; n++) {
              const mid = (lo + hi) / 2;
              if (above(mid)) lo = mid; else hi = mid;
            }
            const [rx, , rz] = at(hi);
            return [rx, rz];
          }
          lo = t;
        }
        return [x, z];
      };
      const knots: [number, number][] = [...trail.stops.map((st): [number, number] => [st.x * k, st.z]), [trail.tail[0] * k, trail.tail[1]]];
      const flat = knots.map(([x, z]) => onScreen(x, z));
      // A stop just behind a rise moves onto the rise, where the camera sees it.
      knots.forEach(([x, z], i) => (knots[i] = under(flat[i][0], flat[i][1], x, z)));
      route = [knots[0]];
      stopAt = [0];
      knots.slice(1).forEach((b, i) => {
        const a = knots[i], [ax, ay] = flat[i], [bx, by] = flat[i + 1], lean = (ay - by) * 0.55;
        for (let t = 0.125; t < 1; t += 0.125) {
          const u = 1 - t;
          const px = (u * u * u + 3 * u * u * t) * ax + (3 * u * t * t + t * t * t) * bx;
          const py = u * u * u * ay + 3 * u * u * t * (ay - lean) + 3 * u * t * t * (by + lean) + t * t * t * by;
          route.push(under(px, py, a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t));
        }
        route.push(b);
        stopAt.push(route.length - 1);
      });
      stopAt.pop();
      stopIdx = [...stopAt];
      tailFrom = stopAt[stopAt.length - 1];
      // Where each stop falls along the line's length, 0 to 1, for the walk-in.
      const lens = [0];
      route.slice(1, tailFrom + 1).forEach(([x, z], i) => {
        const [ax, ay] = onScreen(...route[i]), [bx, by] = onScreen(x, z);
        lens.push(lens[i] + Math.hypot(bx - ax, by - ay));
      });
      stopAt = stopAt.map((j) => lens[j] / lens[tailFrom]);
    };
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      camera();
      layTrail();
    };
    resize();

    // Where the pointer meets the ground (the y = 0 plane).
    const hill = { x: 1.6, z: -1.2 }, target = { ...hill };
    // lift raises the ground; glow tints its contours. A hovered pin gets
    // glow only, so the pin stays put under the cursor.
    let lift = 0, liftTarget = 0, glow = 0, glowTarget = 0, idle = 0, moved = false, hovered = -1;
    const onMove = (e: PointerEvent) => {
      if (!inv || hovered >= 0) return;
      const r = canvas.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = 1 - ((e.clientY - r.top) / r.height) * 2;
      if (nx < -1 || nx > 1 || ny < -1 || ny > 1) return;
      const a = project(inv, nx, ny, -1), b = project(inv, nx, ny, 1);
      const dy = b[1] - a[1];
      if (dy >= -1e-4) return;
      const t = -a[1] / dy;
      target.x = a[0] + (b[0] - a[0]) * t;
      target.z = Math.max(-11, a[2] + (b[2] - a[2]) * t);
      liftTarget = glowTarget = 1;
      idle = 0;
      moved = true;
    };

    // Pins, then side-project dots: hovering or focusing one lights the land
    // under it. Both stand on the ground the same way.
    const spots = [...pins, ...dots];
    const pinEls = Array.from(root.querySelectorAll<HTMLElement>("[data-pin]"));
    const spread = () => Math.min(1, Math.max(0.35, w / h / 1.6));
    const pinListeners = pinEls.map((el, i) => {
      const on = () => {
        hovered = i;
        target.x = spots[i].x * spread();
        target.z = spots[i].z;
        liftTarget = 0;
        glowTarget = 1;
        idle = -1e9;
        kick();
      };
      const off = () => {
        hovered = -1;
        idle = 0;
      };
      el.addEventListener("pointerenter", on);
      el.addEventListener("focus", on);
      el.addEventListener("pointerleave", off);
      el.addEventListener("blur", off);
      return () => {
        el.removeEventListener("pointerenter", on);
        el.removeEventListener("focus", on);
        el.removeEventListener("pointerleave", off);
        el.removeEventListener("blur", off);
      };
    });

    const stopEls = Array.from(root.querySelectorAll<HTMLElement>("[data-stop]"));

    const start = performance.now();
    let raf = 0, visible = true, last = start;
    const frame = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      idle += dt;
      if (idle > 2) liftTarget = glowTarget = 0;
      hill.x += (target.x - hill.x) * Math.min(1, dt * 5);
      hill.z += (target.z - hill.z) * Math.min(1, dt * 5);
      lift += (liftTarget - lift) * Math.min(1, dt * 2.5);
      glow += (glowTarget - glow) * Math.min(1, dt * 4);
      if (!still && hovered < 0) swayT += dt;
      camera();
      const k = spread();
      const walk = still || !walkIn ? 1 : Math.min(1, Math.max(0, (now - start - 350) / 1900));
      const reveal = walk < 1 ? 0.5 - Math.cos(Math.PI * walk) / 2 : 1;
      gl.useProgram(prog);
      gl.bindVertexArray(groundVao);
      gl.uniformMatrix4fv(uVP, false, vp);
      gl.uniform2f(uHill, hill.x, hill.z);
      gl.uniform1f(uLift, lift);
      gl.uniform1f(uGlow, glow);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);

      // Stand each pin on the ground where the camera sees it.
      const cw = canvas.clientWidth, ch = canvas.clientHeight;
      // Pins stand on the base terrain (not the pointer's hill), and hold
      // still while one is hovered so it can't drift out from under the cursor.
      if (hovered < 0) pinEls.forEach((el, i) => {
        const px = spots[i].x * k, pz = spots[i].z;
        const py = terrainHeight(px, pz, 0, hill.x, hill.z, 0) + 0.02;
        const [sx, sy, sz] = project(vp, px, py, pz);
        const off = sz > 1 || sx < -1.2 || sx > 1.2 || sy < -1.2 || sy > 1.2;
        el.style.transform = `translate3d(${((sx + 1) / 2) * cw}px, ${((1 - sy) / 2) * ch}px, 0)`;
        el.style.visibility = off ? "hidden" : "";
        // Cards open beside the pin, toward the middle of the screen.
        el.toggleAttribute("data-flip", sx > 0.2);
      });

      // The trail rides the land as drawn, hill and all, through the stops.
      if (lineEl && route.length) {
        const pts = route.map(([x, z]) => {
          const [sx, sy] = project(vp, x, terrainHeight(x, z, 0, hill.x, hill.z, lift) + 0.014, z);
          return [((sx + 1) / 2) * cw, ((1 - sy) / 2) * ch];
        });
        const main = curve(pts.slice(0, tailFrom + 1));
        caseEl!.setAttribute("d", main);
        lineEl.setAttribute("d", main);
        lineEl.style.strokeDasharray = caseEl!.style.strokeDasharray = `${reveal} 1`;
        tailEl!.setAttribute("d", curve(pts.slice(tailFrom)));
        tailEl!.style.opacity = reveal >= 1 ? "1" : "0";
        const [[x1, y1], [x2, y2]] = [pts[tailFrom], pts[pts.length - 1]];
        fadeEl?.setAttribute("x1", `${x1}`);
        fadeEl?.setAttribute("y1", `${y1}`);
        fadeEl?.setAttribute("x2", `${x2}`);
        fadeEl?.setAttribute("y2", `${y2}`);
      }

      // Jobs ride the land along the trail, each showing once the trail reaches it.
      stopEls.forEach((el, i) => {
        const [px, pz] = route[stopIdx[i]];
        // On the land as drawn, hill and all, so a stop stays on the trail.
        const py = terrainHeight(px, pz, 0, hill.x, hill.z, lift) + 0.014;
        const [sx, sy, sz] = project(vp, px, py, pz);
        const off = sz > 1 || sx < -1.2 || sx > 1.2 || sy < -1.2 || sy > 1.2;
        el.style.transform = `translate3d(${((sx + 1) / 2) * cw}px, ${((1 - sy) / 2) * ch}px, 0)`;
        el.style.visibility = off ? "hidden" : "";
        // Older jobs sit farther off: let them recede into the haze a little.
        const depth = vp[3] * px + vp[7] * py + vp[11] * pz + vp[15];
        el.style.opacity = String(Math.min(1, Math.max(0.55, 1.45 - depth / 11)));
        el.toggleAttribute("data-on", reveal >= stopAt[i] - 0.01);
      });

      // The survey readout: where the pointer is, in made-up Bay Area coordinates.
      if (moved) {
        moved = false;
        const elev = terrainHeight(target.x, target.z, 0, hill.x, hill.z, lift);
        window.dispatchEvent(
          new CustomEvent("terrain:cursor", {
            detail: {
              lat: 37.7749 - target.z * 0.012,
              lon: -122.4194 + target.x * 0.015,
              elev: Math.max(0, Math.round((elev + 0.6) * 420)),
            },
          }),
        );
      }
      if (!still && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && !still && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      kick();
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (still) frame(performance.now());
    });
    ro.observe(canvas);
    document.addEventListener("visibilitychange", kick);
    if (!still) window.addEventListener("pointermove", onMove, { passive: true });

    // If the GPU drops the context, stop drawing and let the static contour
    // lines underneath show through (the pins hide with it).
    const onLost = (e: Event) => {
      e.preventDefault();
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      visible = false;
      delete canvas.dataset.live;
      delete root.dataset.live;
    };
    canvas.addEventListener("webglcontextlost", onLost);

    frame(performance.now());
    canvas.dataset.live = "true";
    root.dataset.live = "true";

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", kick);
      window.removeEventListener("pointermove", onMove);
      pinListeners.forEach((off) => off());
      canvas.removeEventListener("webglcontextlost", onLost);
    };
  }, [pins, dots, trail]);

  return (
    <div ref={wrap} className="terrain">
      <canvas ref={ref} aria-hidden="true" className="terrain-field" />
      {trail && (
        <svg className="trail" aria-hidden="true">
          <defs>
            <linearGradient id={`${uid}-fade`} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="var(--text)" />
              <stop offset="1" stopColor="var(--text)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path data-trail="case" className="trail-case" pathLength={1} />
          <path data-trail="line" className="trail-line" pathLength={1} />
          <path data-trail="tail" className="trail-tail" stroke={`url(#${uid}-fade)`} />
        </svg>
      )}
      {trail && (
        <ul className="stops" aria-hidden="true">
          {trail.stops.map((st, i) => (
            <li key={st.name} data-stop={i} data-side={st.side} className="stop">
              <span className="stop-mark" />
              <span className="stop-label">
                <span className="stop-name">{st.name}</span>
                <span className="stop-role">{st.role}</span>
                <span className="stop-when">{st.when}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
      {pins.length > 0 && (
        <ul className="pins" aria-label="Projects on the map">
          {pins.map((p, i) => (
            <li key={p.title}>
              <a
                data-pin={i}
                href={p.href}
                className="pin"
                data-cursor="Go"
                data-cursor-tone="accent"
                {...(p.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              >
                <span className="pin-dot" aria-hidden="true" />
                <span className="pin-stem" aria-hidden="true" />
                <span className="pin-label">
                  {p.title}
                  <span className="pin-year">{p.year}</span>
                </span>
                <span className="pin-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.thumb} alt="" width={240} height={135} loading="lazy" decoding="async" />
                  <span className="pin-desc">{p.desc}</span>
                  <span className="pin-go">{p.external ? "Visit site" : "Read the case study"}</span>
                </span>
                {p.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
      {dots.length > 0 && (
        <ul className="dots" aria-label="Side projects on the map">
          {dots.map((d, i) => (
            <li key={d.title}>
              <a
                data-pin={pins.length + i}
                href={d.href}
                className="dot"
                data-cursor="Go"
                data-cursor-tone="accent"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="dot-mark" aria-hidden="true" />
                <span className="dot-tip">
                  <span className="dot-name">
                    {d.title}
                    <span className="dot-year">{d.year}</span>
                  </span>
                  <span className="dot-desc">{d.desc}</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
