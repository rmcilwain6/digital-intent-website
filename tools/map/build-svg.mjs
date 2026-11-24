// Turns the projected (BC Albers) layers in data/map/ into SVG path strings that
// share one viewBox, and writes data/map/bc-map.json for components to read.
// Usage: node tools/map/build-svg.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const dir = new URL('../../data/map/', import.meta.url);
function read(file) {
  const j = JSON.parse(readFileSync(new URL(file, dir), 'utf8'));
  // mapshaper writes attribute-free layers as a GeometryCollection.
  return j.type === 'GeometryCollection'
    ? { features: j.geometries.map((g) => ({ geometry: g, properties: {} })) }
    : j;
}

function walk(g, fn) {
  const c = g.coordinates;
  if (g.type === 'Point') fn([c]);
  else if (g.type === 'LineString') fn(c);
  else if (g.type === 'MultiLineString' || g.type === 'Polygon') c.forEach(fn);
  else if (g.type === 'MultiPolygon') c.forEach((poly) => poly.forEach(fn));
}

// The viewBox is BC's bounding box plus 4% padding, 1000 units wide.
let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;
for (const f of read('bc.json').features) {
  walk(f.geometry, (ring) => {
    for (const [x, y] of ring) {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  });
}
const pad = (maxX - minX) * 0.04;
minX -= pad;
maxX += pad;
minY -= pad;
maxY += pad;
const W = 1000;
const scale = W / (maxX - minX);
const H = Math.round((maxY - minY) * scale);
// Map units to one decimal (about 170 m), or two for the close-up layers.
let digits = 10;
const X = (x) => Math.round((x - minX) * scale * digits) / digits;
const Y = (y) => Math.round((maxY - y) * scale * digits) / digits;

function ringD(ring, close) {
  let out = '';
  let px;
  let py;
  ring.forEach(([x, y], i) => {
    const a = X(x);
    const b = Y(y);
    if (i && a === px && b === py) return;
    out += (i ? 'L' : 'M') + a + ' ' + b;
    px = a;
    py = b;
  });
  return out + (close ? 'Z' : '');
}
function geomD(g) {
  const close = g.type === 'Polygon' || g.type === 'MultiPolygon';
  let d = '';
  walk(g, (ring) => (d += ringD(ring, close)));
  return d;
}
const layerD = (file) =>
  read(file)
    .features.filter((f) => f.geometry)
    .map((f) => geomD(f.geometry))
    .join('');
const point = (f) => [
  X(f.geometry.coordinates[0]),
  Y(f.geometry.coordinates[1]),
];

const roads = read('roads.json').features.filter((f) => f.geometry);
const roadsOf = (test) =>
  roads
    .filter((f) => test(f.properties.type))
    .map((f) => geomD(f.geometry))
    .join('');

const schools = { public: [], independent: [] };
for (const f of read('schools.json').features) {
  if (!f.geometry) continue;
  const [x, y] = point(f);
  const kind =
    f.properties.SCHOOL_CATEGORY === 'Independent School'
      ? 'independent'
      : 'public';
  schools[kind].push([Math.round(x), Math.round(y)]);
}

// Close-up layers for the Lower Mainland and the Capital Region
// (build-detail.sh), with the rectangle they fully cover.
function readDistricts(file) {
  return read(file)
    .features.filter((f) => f.geometry)
    .map((f) => ({
      number: f.properties.SCHOOL_DISTRICT_NUMBER,
      name: f.properties.SCHOOL_DISTRICT_NAME,
      d: geomD(f.geometry),
      label: [X(f.properties.cx), Y(f.properties.cy)],
    }))
    .sort((a, b) => a.number - b.number);
}
const [sw, se, ne, nw] =
  read('detail_frame.json').features[0].geometry.coordinates;
digits = 100;
const detail = {
  frame: {
    x: Math.ceil(Math.max(X(sw[0]), X(nw[0]))),
    y: Math.ceil(Math.max(Y(nw[1]), Y(ne[1]))),
  },
  land: layerD('detail_land.json'),
  districtLines: layerD('detail_district_lines.json'),
  districts: readDistricts('detail_districts.json'),
};
detail.frame.width = Math.floor(Math.min(X(se[0]), X(ne[0]))) - detail.frame.x;
detail.frame.height = Math.floor(Math.min(Y(sw[1]), Y(se[1]))) - detail.frame.y;
digits = 10;

const profile = read('profile.json');
const map = {
  viewBox: [W, H],
  kmPerUnit: Math.round((1 / scale / 1000) * 1000) / 1000,
  bc: layerD('bc.json'),
  neighbours: layerD('neighbours.json'),
  highways: roadsOf((t) => t === 'Major Highway'),
  roads: roadsOf((t) => t === 'Secondary Highway'),
  ferries: roadsOf((t) => /Ferry/.test(t)),
  rivers: layerD('rivers.json'),
  lakes: layerD('lakes.json'),
  districtLines: layerD('district_lines.json'),
  districts: readDistricts('districts.json'),
  detail,
  places: read('places.json').features.map((f) => ({
    name: f.properties.name,
    rank: f.properties.scalerank,
    at: point(f),
  })),
  waypoints: read('waypoints.json').features.map((f) => ({
    name: f.properties.name,
    at: point(f),
  })),
  schools,
  profile: {
    totalKm: profile.totalKm,
    marks: profile.marks,
    km: profile.pts.map((p) => p[0]),
    elevation: profile.pts.map((p) => p[1]),
  },
};

const json = JSON.stringify(map);
writeFileSync(new URL('bc-map.json', dir), json);
console.log(`viewBox ${W}x${H}, ${Math.round(json.length / 1024)} KB`);
