#!/usr/bin/env bash
# Builds the close-up layers for the two dense metro areas, the Lower Mainland
# and the Capital Region, where a map sheet zooms in far enough that the
# province-wide layers look coarse. Development only: nothing here ships to
# visitors. Called by build-map.sh; needs network access, Node and about
# 60 MB of free space for the downloads.
# Usage: bash tools/map/build-detail.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/data/map"
RAW="$(mktemp -d)"
trap 'rm -rf "$RAW"' EXIT
M="npx --yes mapshaper@0.6.102"

P="+proj=aea +lat_0=45 +lon_0=-126 +lat_1=50 +lat_2=58.5 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs"
WFS="https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=2.0.0&request=GetFeature&outputFormat=application/json&srsName=EPSG:4326&typeName="
# The detail area as west,south,east,north (longitude and latitude).
BBOX="-125.0,47.9,-121.3,49.9"
IFS=, read -r W S E N <<<"$BBOX"

cd "$RAW"
# Land: the Freshwater Atlas assessment watersheds cover all land at 1:20,000,
# so together they give a detailed coastline.
curl -fsSL -o watersheds.geojson \
  "${WFS}pub:WHSE_BASEMAPPING.FWA_ASSESSMENT_WATERSHEDS_POLY&propertyName=GEOMETRY&bbox=$S,$W,$N,$E,urn:ogc:def:crs:EPSG::4326"
curl -fsSL -o districts.geojson "${WFS}pub:WHSE_TANTALIS.TA_SCHOOL_DISTRICTS_SVW&bbox=$S,$W,$N,$E,urn:ogc:def:crs:EPSG::4326"

$M watersheds.geojson -dissolve -clip bbox="$BBOX" -o land.geojson
$M land.geojson -proj "$P" -simplify interval=60 -filter-islands min-area=150000 remove-empty \
  -o "$OUT/detail_land.json" format=geojson precision=1

# School districts trimmed to the land, with label points, and their shared
# boundaries drawn once.
$M districts.geojson -clip bbox="$BBOX" -clip land.geojson -proj "$P" \
  -filter-fields SCHOOL_DISTRICT_NAME,SCHOOL_DISTRICT_NUMBER -simplify interval=60 keep-shapes \
  -filter-islands min-area=150000 remove-empty -each 'cx=this.innerX, cy=this.innerY' \
  -o "$OUT/detail_districts.json" format=geojson precision=1
$M districts.geojson -clip bbox="$BBOX" -clip land.geojson -proj "$P" -simplify interval=60 -innerlines \
  -o "$OUT/detail_district_lines.json" format=geojson precision=1

# The detail area's corners in BC Albers, for build-svg.mjs.
printf '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[%s,%s],[%s,%s],[%s,%s],[%s,%s]]}}]}' \
  "$W" "$S" "$E" "$S" "$E" "$N" "$W" "$N" >corners.geojson
$M corners.geojson -proj "$P" -o "$OUT/detail_frame.json" format=geojson precision=1
