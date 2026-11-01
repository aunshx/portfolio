/**
 * Where things stand on the hero's land, in terrain units: x to the right,
 * z away from the camera (more negative is farther). Placed against the
 * hero's camera at rest so the projects sit off the career trail and
 * nothing hides behind a hill.
 */
export const PLACES: Record<string, { x: number; z: number }> = {
  FRED: { x: 0.98, z: -0.28 },
  reaktr: { x: 2.23, z: -1.5 },
  FRREDSS: { x: -2.02, z: -3.7 },
  ResView: { x: 1.29, z: -3.72 },
};

/**
 * The loading screen's survey map (public/images/home/survey.svg) is the same
 * land seen from above: x -6 to 6 across 1600 units, z -6.6 (top) to 0.15
 * (bottom) down 900, at the same scale both ways.
 */
const X0 = -6, Z0 = -6.6, SCALE = 1600 / 12;
export const SURVEY = { w: 1600, h: 900 };
export const toSurvey = (x: number, z: number) => ({
  x: Math.round((x - X0) * SCALE),
  y: Math.round((z - Z0) * SCALE),
});
