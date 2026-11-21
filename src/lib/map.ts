// Build-time helpers for maps drawn from data/map/bc-map.json. Nothing here
// runs in the browser.
import map from '../../data/map/bc-map.json';

export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** A camera position: scale, then translate, in map units. */
export interface View {
  scale: number;
  x: number;
  y: number;
}

export const [mapWidth, mapHeight] = map.viewBox as [number, number];

/** Map position of a named town or city, failing the build if it is unknown. */
export function placePoint(name: string): [number, number] {
  const place = map.places.find((p) => p.name === name);
  if (!place) {
    const known = map.places.map((p) => p.name).join(', ');
    throw new Error(`No map position for "${name}". Known places: ${known}`);
  }
  return place.at as [number, number];
}

/** A school district by number, failing the build if it is unknown. */
export function district(number: number) {
  const found = map.districts.find((d) => d.number === number);
  if (!found) {
    throw new Error(`No school district number ${number} in the map data`);
  }
  return found;
}

/** Bounding box of absolute M/L/Z path data, as the map build writes it. */
export function pathBounds(d: string): Box {
  const numbers = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const xs = numbers.filter((_, i) => i % 2 === 0);
  const ys = numbers.filter((_, i) => i % 2 === 1);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, width: Math.max(...xs) - x, height: Math.max(...ys) - y };
}

/** The smallest box holding every box and point given. */
export function union(boxes: Box[], points: [number, number][] = []): Box {
  const xs = [
    ...boxes.flatMap((b) => [b.x, b.x + b.width]),
    ...points.map((p) => p[0]),
  ];
  const ys = [
    ...boxes.flatMap((b) => [b.y, b.y + b.height]),
    ...points.map((p) => p[1]),
  ];
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, width: Math.max(...xs) - x, height: Math.max(...ys) - y };
}

/**
 * The camera view that fits a box in the whole map with some padding. The
 * box never shrinks below `minSize`, so a single town does not zoom too far.
 */
export function viewFor(box: Box, minSize = 240, maxScale = 5): View {
  const pad = 1.3;
  const width = Math.max(box.width * pad, minSize);
  const height = Math.max(box.height * pad, minSize * (mapHeight / mapWidth));
  const scale = Math.min(mapWidth / width, mapHeight / height, maxScale);
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  return {
    scale,
    x: mapWidth / 2 - scale * cx,
    y: mapHeight / 2 - scale * cy,
  };
}

export { map };
