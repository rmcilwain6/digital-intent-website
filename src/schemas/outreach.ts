// Schema for the Indigenous outreach page (content/outreach.ts, SPEC 7.9).
// The page heading, description and lede are in
// content/pages/indigenous-outreach.md.
import { z } from 'astro/zod';

/**
 * Labelled image slot. Original photography only (SPEC rule 8); until it
 * exists the page shows a placeholder at this ratio with the note.
 */
const imageSlotSchema = z.strictObject({
  /** CSS aspect ratio, e.g. "4 / 3". */
  ratio: z.string().regex(/^\d+ \/ \d+$/, 'Use a ratio like "4 / 3"'),
  label: z.string().min(1),
  /** One-line art-direction note: the natural environment, not buildings. */
  note: z.string().min(1),
});

/**
 * A school we have visited or worked with, shown as a point on the map.
 * Added only with the school's agreement, never from a dataset (SPEC 7.9, R6).
 * Points are schools, not Nation boundaries.
 */
const visitSchema = z.strictObject({
  school: z.string().min(1),
  /** The community the school serves, named the way the community names it. */
  community: z.string().min(1),
  /** When it happened, as YYYY-MM. */
  date: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use YYYY-MM'),
  /** One or two sentences on what we did together. */
  summary: z.string().min(1),
  /**
   * Position in the map's 1000-unit viewBox (BC Albers, as in
   * data/map/bc-map.json). Project from longitude and latitude with the
   * tools in tools/map.
   */
  at: z.tuple([z.number().min(0).max(1000), z.number().min(0).max(866)]),
});

export const outreachSchema = z.strictObject({
  /** Wide landscape image at the top of the page. */
  heroImage: imageSlotSchema,
  acknowledgement: z.strictObject({
    heading: z.string().min(1),
    /** The acknowledgement for all of British Columbia. */
    paragraphs: z.array(z.string().min(1)).min(1),
    /**
     * One territorial acknowledgement per starting region, in the order of
     * the regions in src/brand/brand.config.ts.
     */
    regions: z
      .array(
        z.strictObject({
          region: z.string().min(1),
          /** The acknowledgement, naming the Nations in their own spelling. */
          text: z.string().min(1),
          image: imageSlotSchema,
        }),
      )
      .min(1),
    /** True while the copy awaits the outreach lead's approval (SPEC 12.5). */
    draft: z.boolean(),
  }),
  map: z.strictObject({
    /** Short line under the map saying what the points will be. */
    caption: z.string().min(1),
    visits: z.array(visitSchema),
  }),
  commitments: z.strictObject({
    heading: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
    draft: z.boolean(),
  }),
});

export type Outreach = z.infer<typeof outreachSchema>;
export type Visit = z.infer<typeof visitSchema>;
