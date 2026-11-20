// @ts-check
import { defineConfig } from 'astro/config';
import { brand } from './src/brand/brand.config.ts';

// https://astro.build/config
export default defineConfig({
  // Production origin, used for absolute URLs (canonical, Open Graph, sitemap).
  // Comes from the brand config so the domain lives in one place (rule 7).
  site: `https://${brand.domain}`,
  // Static output only. Server-rendered routes need a decision record (SPEC T2).
  output: 'static',
  // Only English ships, but routing stays ready for more languages (SPEC T8).
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
