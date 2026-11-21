// Schema for the Home page sections (content/home.ts, SPEC 7.1).
import { z } from 'astro/zod';

/**
 * A call to action. `href` is a site path (`/valleyview/`), an outbound https
 * URL, or a `[TK: ...]` note while the destination is undecided. Never a form
 * (SPEC rule 1).
 */
const callToAction = z.strictObject({
  label: z.string().min(1),
  href: z
    .string()
    .regex(
      /^(\/([a-z0-9-]+\/)*|https:\/\/\S+|\[TK: .+\])$/,
      'Use a site path like /about/, an https URL, or a [TK: ...] note',
    ),
});

const section = z.strictObject({
  heading: z.string().min(1),
  /** Paragraphs, in order. */
  body: z.array(z.string().min(1)).min(1),
  cta: callToAction.optional(),
  /**
   * True while the copy is an agent draft awaiting human approval. The page
   * then shows a visible `[TK]` marker, so it cannot ship unnoticed (rule 6).
   */
  draft: z.boolean(),
});

export const sectionKeys = [
  'problem',
  'mission',
  'map',
  'teachers',
  'valleyview',
  'outreach',
  'partnerships',
] as const;

export type SectionKey = (typeof sectionKeys)[number];

export const homeSchema = z.strictObject({
  hero: z.strictObject({
    heading: z.string().min(1),
    lede: z.string().min(1),
    /** Teachers first, then students and parents (D4). */
    ctas: z.tuple([callToAction, callToAction]),
    /** One to three photo slots, shown side by side. */
    images: z
      .array(
        z.strictObject({
          ratio: z.string().min(1),
          label: z.string().min(1),
          note: z.string().min(1),
        }),
      )
      .min(1)
      .max(3),
    /** True while the lede is an agent draft (the headline is the team's own). */
    draft: z.boolean(),
  }),
  sections: z.strictObject({
    problem: section,
    mission: section,
    map: section.extend({ regionsHeading: z.string().min(1) }),
    teachers: section,
    valleyview: section.extend({ questionsHeading: z.string().min(1) }),
    outreach: section,
    partnerships: section,
  }),
  /** Section order after the hero. Every section appears exactly once (D30). */
  order: z
    .array(z.enum(sectionKeys))
    .length(sectionKeys.length)
    .refine((keys) => new Set(keys).size === keys.length, {
      message: 'Each section must appear exactly once',
    }),
});

export type Home = z.infer<typeof homeSchema>;
export type CallToAction = z.infer<typeof callToAction>;
