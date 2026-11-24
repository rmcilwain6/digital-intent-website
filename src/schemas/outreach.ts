// Schema for the Indigenous outreach page (content/outreach.ts, SPEC 7.9).
// The page heading and description are in content/pages/indigenous-outreach.md.
import { z } from 'astro/zod';

/** A text section. `draft` is true while the copy awaits human approval. */
const sectionSchema = z.strictObject({
  heading: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  /**
   * True while the copy is a draft awaiting approval by the outreach lead
   * (SPEC 12.5). The page then shows a visible [TK] marker.
   */
  draft: z.boolean(),
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
  acknowledgement: sectionSchema.extend({
    /** Lead-in to the list of starting regions and the Nations to name. */
    regionsIntro: z.string().min(1),
    /** One entry per starting region (src/brand/brand.config.ts). */
    regions: z
      .array(
        z.strictObject({
          region: z.string().min(1),
          /** Nations whose lands the region is on, in their own spelling. */
          nations: z.string().min(1),
        }),
      )
      .min(1),
  }),
  approach: sectionSchema,
  commitments: sectionSchema.extend({
    items: z.array(z.string().min(1)).min(1),
    /** Closing line with a link, e.g. the invitation to join the board. */
    invitation: z
      .strictObject({
        text: z.string().min(1),
        link: z.strictObject({
          text: z.string().min(1),
          href: z.string().startsWith('/'),
        }),
      })
      .refine((i) => i.text.includes(i.link.text), {
        message: 'link.text must be a phrase that appears in text',
      }),
  }),
  record: sectionSchema.extend({
    /** Shown in place of the list while there are no visits yet. */
    empty: z.string().min(1),
    visits: z.array(visitSchema),
  }),
});

export type Outreach = z.infer<typeof outreachSchema>;
export type Visit = z.infer<typeof visitSchema>;
