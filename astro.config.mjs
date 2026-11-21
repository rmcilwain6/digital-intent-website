// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { brand } from './src/brand/brand.config.ts';

// https://astro.build/config
export default defineConfig({
  // Production origin, used for absolute URLs (canonical, Open Graph, sitemap).
  // Comes from the brand config so the domain lives in one place (rule 7).
  site: `https://${brand.domain}`,
  // Static output only. Server-rendered routes need a decision record (SPEC T2).
  output: 'static',
  // Routes build as folders (/about/index.html), so URLs end in a slash.
  // Stating it keeps canonical links, og:url and the sitemap in one form.
  trailingSlash: 'always',
  integrations: [
    // Build-time only; ships no JavaScript. Fixtures and the 404 page stay out.
    sitemap({
      filter: (page) => !/\/(fixtures|404)\//.test(new URL(page).pathname),
    }),
  ],
  // Only English ships, but routing stays ready for more languages (SPEC T8).
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
