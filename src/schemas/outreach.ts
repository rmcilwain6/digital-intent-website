// Schema for the Indigenous outreach page (content/outreach.ts, SPEC 7.9).
// The page title and description are in content/pages/indigenous-outreach.md.
import type { ImageMetadata } from 'astro';
import { z } from 'astro/zod';

/**
 * A landscape photo of a region, imported from src/assets/photos/ so the
 * build can resize it. Original photography only (SPEC rule 8), of the
 * natural environment rather than the built one. Shown at its own shape;
 * portrait photos are drawn narrower on wide screens.
 */
const photoSchema = z.strictObject({
  src: z.custom<ImageMetadata>(
    (value) =>
      typeof value === 'object' &&
      value !== null &&
      'src' in value &&
      'width' in value &&
      'height' in value,
    { message: 'photo.src must be an imported image from src/assets/' },
  ),
  alt: z.string().min(1),
  /** Where it was taken, shown under the photo. */
  caption: z.string().min(1),
  /** When it was taken, shown under the photo, e.g. "May 2025". */
  taken: z.string().min(1),
  /** Who took it, shown under the photo. */
  credit: z.string().min(1),
});

/**
 * An Indigenous school, Nation or band we have worked with, shown as a point
 * on the map. Added only with their agreement, never from a dataset (SPEC
 * 7.9, R6). Points mark a place, never Nation boundaries.
 */
const visitSchema = z.strictObject({
  /** The school, Nation or band, named the way they name themselves. */
  name: z.string().min(1),
  /** The community, named the way the community names it. */
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
  acknowledgement: z.strictObject({
    heading: z.string().min(1),
    /** The acknowledgement for all of British Columbia. */
    paragraphs: z.array(z.string().min(1)).min(1),
    /** Heading over the territorial acknowledgements. */
    regionsHeading: z.string().min(1),
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
          photo: photoSchema,
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
    /** The strategic pillar this work falls under (content/organization.ts). */
    pillar: z.strictObject({
      number: z.number().int().min(1),
      label: z.string().min(1),
    }),
    /** What the work rests on, shown under the pillar. */
    foundation: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
    draft: z.boolean(),
  }),
});

export type Outreach = z.infer<typeof outreachSchema>;
export type Visit = z.infer<typeof visitSchema>;
