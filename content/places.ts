/** Where each project stands on the hero's land (terrain units: x right, z away). */
export const PLACES: Record<string, { x: number; z: number }> = {
  FRED: { x: 0.35, z: -1.4 },
  reaktr: { x: 2.4, z: -3.0 },
  FRREDSS: { x: -1.7, z: -4.3 },
  ResView: { x: 1.05, z: -6.3 },
};

/**
 * The loading screen's survey map (public/images/home/survey.svg) is the same
 * land seen from above: x -6 to 6 across 1600 units, z -7.225 (top) to
 * -0.475 (bottom) down 900. This places a point of the land on that map.
 */
export const SURVEY = { w: 1600, h: 900 };
export const toSurvey = (x: number, z: number) => ({
  x: Math.round(((x + 6) / 12) * SURVEY.w),
  y: Math.round(((z + 7.225) / 6.75) * SURVEY.h),
});
