// Schema for site-wide navigation and footer copy (content/site.ts).
import { z } from 'astro/zod';

/** Site-relative path with a trailing slash, e.g. `/about/`. */
const sitePath = z
  .string()
  .regex(/^\/([a-z0-9-]+\/)*$/, 'Use a site path like /about/');

const internalLink = z.strictObject({
  label: z.string().min(1),
  href: sitePath,
});

const navLink = internalLink.extend({
  /** Takes the full-width key in the phone menu. One item at most. */
  featured: z.boolean().optional(),
});

const nextStop = internalLink.extend({
  /** One line under the link, saying what the reader will find. */
  description: z.string().min(1),
});

export const siteSchema = z.strictObject({
  /** Link to Home, shown in the phone menu. The logo links home elsewhere. */
  home: internalLink,
  /** Primary navigation. Separate pages only; no anchor-scroll menus (SPEC 7). */
  primaryNav: z
    .array(navLink)
    .min(1)
    .refine((items) => items.filter((item) => item.featured).length <= 1, {
      message: 'Only one navigation item can be featured',
    }),
  footerNav: z.array(internalLink).min(1),
  /** Footer links that continue the reader's path. The current page is left out. */
  nextStops: z.array(nextStop).min(1),
  /**
   * Short land acknowledgement on every page, linking to the Indigenous
   * outreach page, which holds the full one (decision record 0007). Needs
   * human approval (SPEC 12.5).
   */
  acknowledgement: z.strictObject({
    text: z.string().min(1),
    link: internalLink,
  }),
  /** Footer sentence before the list of starting regions. */
  regionsIntro: z.string().min(1),
  /** Short licence line at the foot of every page. */
  licence: z.string().min(1),
  /** Credit for the map data drawn in the header and footer (data/map/README.md). */
  districtMapCredit: z.string().min(1),
  mapCredit: z.string().min(1),
});

export type InternalLink = z.infer<typeof internalLink>;
export type NavLink = z.infer<typeof navLink>;
