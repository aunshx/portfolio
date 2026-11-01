/**
 * CPU copies of what the terrain shader does, so HTML pins can sit on the
 * ground and the readout can report an elevation. The noise is a direct
 * port of the shader's 2D simplex noise (Ashima Arts / Stefan Gustavson, MIT).
 */

const mod289 = (x: number) => x - Math.floor(x / 289) * 289;
const permute = (x: number) => mod289((x * 34 + 1) * x);
const fract = (x: number) => x - Math.floor(x);

export function snoise(vx: number, vy: number) {
  const Cx = 0.211324865405187, Cy = 0.366025403784439, Cz = -0.577350269189626, Cw = 0.024390243902439;
  const s = (vx + vy) * Cy;
  let ix = Math.floor(vx + s), iy = Math.floor(vy + s);
  const t = (ix + iy) * Cx;
  const x0x = vx - ix + t, x0y = vy - iy + t;
  const i1x = x0x > x0y ? 1 : 0, i1y = x0x > x0y ? 0 : 1;
  const x12x = x0x + Cx - i1x, x12y = x0y + Cx - i1y;
  const x12z = x0x + Cz, x12w = x0y + Cz;
  ix = mod289(ix);
  iy = mod289(iy);
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

/** Same formula as terrain() in the vertex shader. */
export function terrainHeight(px: number, pz: number, time: number, hx: number, hz: number, lift: number) {
  const qx = px * 0.42, qz = pz * 0.42 - time * 0.05;
  let h =
    snoise(qx, qz) * 0.62 +
    snoise(qx * 2.3 + 7.1, qz * 2.3 + 7.1) * 0.2 +
    snoise(qx * 5.3 - 3.0, qz * 5.3 - 3.0) * 0.05;
  const d2 = (px - hx) ** 2 + (pz - hz) ** 2;
  h += lift * 1.35 * Math.exp(-d2 * 0.9);
  return h * 0.75;
}
