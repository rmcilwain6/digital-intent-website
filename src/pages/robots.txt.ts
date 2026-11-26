// robots.txt, prerendered at build. Points crawlers at the sitemap. The origin
// comes from `site` (brand.domain, via astro.config.mjs), so the domain lives
// in one place (rule 7). Nothing is disallowed: pages kept out of search use
// `noindex`, which a crawler can only see on a page it is allowed to fetch.
// Pre-launch, `X-Robots-Tag: noindex` in public/_headers covers the whole site.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Set `site` in astro.config.mjs to build robots.txt');
  }
  const sitemap = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
