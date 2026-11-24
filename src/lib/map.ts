// Build-time helpers for maps drawn from data/map/bc-map.json. Nothing here
// runs in the browser.
import map from '../../data/map/bc-map.json';

export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const [mapWidth, mapHeight] = map.viewBox as [number, number];

/**
 * The province alone with a small margin: the house map is a BC cut-out with
 * no neighbours or ocean (design system: Map), so it is framed on BC.
 */
export const bcFrame: Box = (() => {
  const margin = 12;
  const b = pathBounds(map.bc);
  return {
    x: b.x - margin,
    y: b.y - margin,
    width: b.width + 2 * margin,
    height: b.height + 2 * margin,
  };
})();

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
 * A sheet of the map: a view with the same shape as the whole-province frame
 * that holds the box with a margin. It is never narrower than `minWidth` map
 * units (about 86 km at 50), so a sheet always shows some surroundings.
 */
export function sheetFor(box: Box, minWidth = 50, pad = 1.35): Box {
  const aspect = bcFrame.width / bcFrame.height;
  const width = Math.max(box.width * pad, box.height * pad * aspect, minWidth);
  const height = width / aspect;
  return {
    x: box.x + box.width / 2 - width / 2,
    y: box.y + box.height / 2 - height / 2,
    width,
    height,
  };
}

/** Kilometres per map unit, from the map build. */
export const kmPerUnit: number = map.kmPerUnit;

/** A round length for a scale bar about a fifth of the given width, in km. */
export function scaleBarKm(widthKm: number): number {
  const target = widthKm / 5;
  const power = 10 ** Math.floor(Math.log10(target));
  const step = [5, 2, 1].find((n) => n * power <= target) ?? 1;
  return step * power;
}

export { map };
