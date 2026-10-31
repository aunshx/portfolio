"use client";

import { useEffect, useRef } from "react";

/**
 * A live topographic map. A fragment shader draws contour lines over slowly
 * drifting terrain; the pointer raises a hill, so the lines bend around it
 * and pick up the accent color. Every fifth line is an index contour, drawn
 * heavier, as on a survey map.
 *
 * WebGL2 only, with no library. It pauses offscreen and in background tabs,
 * and draws a single still frame under reduced motion. If WebGL2 isn't
 * available, the static SVG contours underneath stay as they are.
 */

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uLift;
uniform vec3 uBg;
uniform vec3 uInk;
uniform vec3 uAccent;
out vec4 color;

// 2D simplex noise (Ashima Arts / Stefan Gustavson, MIT).
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
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 q = frag / uRes.y;
  float t = uTime;

  // Terrain: two octaves of drifting noise.
  float h = snoise(q * 1.6 + vec2(t * 0.025, t * 0.018)) * 0.65
          + snoise(q * 3.4 - vec2(t * 0.02, -t * 0.012)) * 0.22;

  // The pointer raises a hill.
  float d = distance(frag, uMouse) / uRes.y;
  float hill = exp(-d * d * 22.0);
  h += uLift * hill * 0.95;

  // Isolines, antialiased with screen-space derivatives.
  float v = h * 7.0;
  float f = fract(v);
  float w = fwidth(v);
  float band = floor(v + 0.5);
  bool index = mod(band, 5.0) == 0.0;
  float width = index ? 1.7 : 0.9;
  float line = 1.0 - smoothstep(0.0, w * width, min(f, 1.0 - f));

  float near = uLift * exp(-d * d * 14.0);
  vec3 ink = mix(uInk, uAccent, clamp(near * 1.4, 0.0, 1.0));
  float alpha = line * mix(index ? 0.26 : 0.15, 0.9, near);
  color = vec4(mix(uBg, ink, alpha), 1.0);
}`;

function hex(c: string): [number, number, number] {
  const n = parseInt(c.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function ContourField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false, powerPreference: "low-power" });
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

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("uRes"), uTime = u("uTime"), uMouse = u("uMouse"), uLift = u("uLift");
    const css = getComputedStyle(document.documentElement);
    gl.uniform3fv(u("uBg"), hex(css.getPropertyValue("--bg").trim() || "#f3f1ec"));
    gl.uniform3fv(u("uInk"), hex(css.getPropertyValue("--text").trim() || "#111111"));
    gl.uniform3fv(u("uAccent"), hex(css.getPropertyValue("--accent").trim() || "#ff4f00"));

    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let w = 0, h = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();

    // The hill follows the pointer with a little lag, and sinks when it stops.
    const target = { x: w * 0.7, y: h * 0.45 };
    const mouse = { ...target };
    let lift = 0, liftTarget = 0, idle = 0;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = (e.clientX - r.left) * dpr;
      target.y = (r.bottom - e.clientY) * dpr;
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
      if (idle > 1.6) liftTarget = 0;
      mouse.x += (target.x - mouse.x) * Math.min(1, dt * 7);
      mouse.y += (target.y - mouse.y) * Math.min(1, dt * 7);
      lift += (liftTarget - lift) * Math.min(1, dt * 3);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uLift, lift);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
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

  return <canvas ref={ref} aria-hidden="true" className="contour-field" />;
}
