// Schema for site-wide navigation and footer copy (content/site.ts).
import { z } from 'astro/zod';

const internalLink = z.strictObject({
  label: z.string().min(1),
  /** Site-relative path with a trailing slash, e.g. `/about/`. */
  href: z.string().regex(/^\/([a-z0-9-]+\/)*$/, 'Use a site path like /about/'),
});

export const siteSchema = z.strictObject({
  /** Primary navigation. Separate pages only; no anchor-scroll menus (SPEC 7). */
  primaryNav: z.array(internalLink).min(1),
  footerNav: z.array(internalLink).min(1),
  /** Footer sentence before the list of starting regions. */
  regionsIntro: z.string().min(1),
});

export type InternalLink = z.infer<typeof internalLink>;
