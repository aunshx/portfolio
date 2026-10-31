"use client";

import { useEffect, useRef } from "react";

/**
 * The hero graphic: a 3D landscape with contour lines draped over it,
 * drifting toward the viewer like a slow survey flight. The pointer raises
 * a mountain where it lands (its contours turn orange). As the page scrolls,
 * the camera climbs and tilts down until the land reads as a flat map.
 *
 * Raw WebGL2, no library: a grid mesh displaced by simplex noise in the
 * vertex shader, isolines from height in the fragment shader, light shading
 * from the surface normal and haze with distance. It pauses offscreen and in
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
uniform float uTime;
uniform vec2 uHill;
uniform float uLift;
out float vH;
out float vDepth;
out float vNear;
out float vShade;
${NOISE}
float terrain(vec2 p) {
  vec2 q = p * 0.42 - vec2(0.0, uTime * 0.05);
  float h = snoise(q) * 0.62 + snoise(q * 2.3 + 7.1) * 0.2 + snoise(q * 5.3 - 3.0) * 0.05;
  float d = distance(p, uHill);
  h += uLift * 1.35 * exp(-d * d * 0.9);
  return h * 0.75;
}
void main() {
  vec2 p = vec2(aGrid.x * 8.0, 1.5 - aGrid.y * 14.0);
  float h = terrain(p);
  float e = 0.06;
  vec3 n = normalize(vec3(
    terrain(p - vec2(e, 0.0)) - terrain(p + vec2(e, 0.0)),
    2.0 * e,
    terrain(p - vec2(0.0, e)) - terrain(p + vec2(0.0, e))));
  vShade = dot(n, normalize(vec3(-0.5, 0.75, 0.45)));
  vH = h;
  float d = distance(p, uHill);
  vNear = uLift * exp(-d * d * 0.7);
  vec4 pos = uVP * vec4(p.x, h, p.y, 1.0);
  vDepth = pos.w;
  gl_Position = pos;
}`;

const FRAG = `#version 300 es
precision highp float;
in float vH;
in float vDepth;
in float vNear;
in float vShade;
uniform vec3 uBg;
uniform vec3 uInk;
uniform vec3 uAccent;
out vec4 color;
void main() {
  float v = vH * 9.0;
  float f = fract(v);
  float w = fwidth(v);
  float band = floor(v + 0.5);
  bool index = mod(band, 5.0) == 0.0;
  float line = 1.0 - smoothstep(0.0, w * (index ? 1.7 : 1.0), min(f, 1.0 - f));

  float haze = clamp(1.0 - (vDepth - 3.0) / 12.0, 0.0, 1.0);
  vec3 ground = uBg * (0.9 + 0.1 * clamp(vShade, 0.0, 1.0));
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

export default function TerrainField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", { antialias: true, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    // The ground: a grid, denser across than deep, as one indexed mesh.
    const NX = 200, NZ = 150;
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
    const uVP = u("uVP"), uTime = u("uTime"), uHill = u("uHill"), uLift = u("uLift");
    const css = getComputedStyle(document.documentElement);
    const bg = hex(css.getPropertyValue("--bg").trim() || "#f3f1ec");
    gl.uniform3fv(u("uBg"), bg);
    gl.uniform3fv(u("uInk"), hex(css.getPropertyValue("--text").trim() || "#111111"));
    gl.uniform3fv(u("uAccent"), hex(css.getPropertyValue("--accent").trim() || "#ff4f00"));
    gl.clearColor(bg[0], bg[1], bg[2], 1);

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let w = 1, h = 1, vp: M4 = new Float32Array(16), inv: M4 | null = null;

    // The camera climbs and tilts down as the hero scrolls away.
    const camera = () => {
      const r = canvas.getBoundingClientRect();
      const s = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      const eye = [0, 2.1 + s * 5.5, 4.2 - s * 3.2];
      const at = [0, -0.2, -2.6 - s * 0.4];
      vp = mul(perspective((34 * Math.PI) / 180, w / h, 0.1, 60), lookAt(eye, at, [0, 1, 0]));
      inv = invert(vp);
      gl.uniformMatrix4fv(uVP, false, vp);
    };
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      camera();
    };
    resize();

    // Where the pointer meets the ground (the y = 0 plane).
    const hill = { x: 1.6, z: -1.2 }, target = { ...hill };
    let lift = 0, liftTarget = 0, idle = 0;
    const onMove = (e: PointerEvent) => {
      if (!inv) return;
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
      liftTarget = 1;
      idle = 0;
    };

    const start = performance.now();
    let raf = 0, visible = true, last = start;
    const frame = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      idle += dt;
      if (idle > 2) liftTarget = 0;
      hill.x += (target.x - hill.x) * Math.min(1, dt * 5);
      hill.z += (target.z - hill.z) * Math.min(1, dt * 5);
      lift += (liftTarget - lift) * Math.min(1, dt * 2.5);
      camera();
      gl.uniform1f(uTime, still ? 0 : (now - start) / 1000);
      gl.uniform2f(uHill, hill.x, hill.z);
      gl.uniform1f(uLift, lift);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
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

    frame(performance.now());
    canvas.dataset.live = "true";

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", kick);
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="terrain-field" />;
}
