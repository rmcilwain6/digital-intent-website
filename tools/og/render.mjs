// Renders the social sharing images in tools/og/ to PNG at 1200 × 630.
// Usage: node tools/og/render.mjs
// Needs Playwright with Chromium (development only; not a site dependency).
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

// Source page → output file, both relative to the repo root.
const images = [
  ['tools/og/default.html', 'public/brand/og-default.png'],
  ['tools/og/valleyview.html', 'public/brand/og-valleyview.png'],
];

const root = new URL('../../', import.meta.url);
const browser = await chromium.launch();
for (const [source, output] of images) {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
  });
  await page.goto(new URL(source, root).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: fileURLToPath(new URL(output, root)) });
  await page.close();
  console.log(`${source} → ${output}`);
}
await browser.close();
