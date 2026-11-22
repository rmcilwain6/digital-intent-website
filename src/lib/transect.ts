// The coast-to-Rockies elevation profile drawn under the site header
// (design system: Transect). Built at build time from data/map/bc-map.json,
// so the page gets one inline SVG and no map service.
import map from '../../data/map/bc-map.json';

/** The SVG is drawn in a 1000 × 40 box and stretched to the header width. */
export const VIEW_WIDTH = 1000;
export const VIEW_HEIGHT = 40;
const BASELINE = 38;
const PEAK = 6;

/** Towns labelled under the profile, west to east. */
const LABELLED = [
  'Victoria',
  'Vancouver',
  'Hope',
  'Kamloops',
  'Revelstoke',
  'Rogers Pass',
  'Golden',
];

/** Labels that sit close to a neighbour; dropped on narrower screens. */
const MINOR = ['Rogers Pass'];

const { totalKm, marks, km, elevation } = map.profile;
const maxElevation = Math.max(...elevation);

const round = (n: number) => Math.round(n * 10) / 10;
const x = (distance: number) => round((distance / totalKm) * VIEW_WIDTH);
const y = (metres: number) =>
  round(BASELINE - (metres / maxElevation) * (BASELINE - PEAK));

const line = km
  .map((distance, i) => `${x(distance)} ${y(elevation[i] ?? 0)}`)
  .join('L');

/** The ridge line alone. */
export const ridgePath = `M${line}`;
/** The ridge closed down to the bottom edge, for the filled area. */
export const areaPath = `M0 ${VIEW_HEIGHT}L${line}L${VIEW_WIDTH} ${VIEW_HEIGHT}Z`;

/** Town labels with their position along the profile, as a percentage. */
export const labels = marks
  .filter((mark) => LABELLED.includes(mark.name))
  .map((mark) => ({
    name: mark.name,
    percent: round((mark.km / totalKm) * 100),
    minor: MINOR.includes(mark.name),
  }));
