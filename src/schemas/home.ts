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
  /** Optional opening line, set larger than the body. */
  lead: z.string().min(1).optional(),
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
    /**
     * Route for teachers, on paper: an index card (design system: RouteCards).
     * `href` may be a [TK] note while the destination is open (D26); the card
     * is then not a link.
     */
    teachers: z.strictObject({
      eyebrow: z.string().min(1),
      title: z.string().min(1),
      action: z.string().min(1),
      href: callToAction.shape.href,
    }),
    /** Route for Valleyview students, on navy: a window (design system: RouteCards). */
    valleyview: z.strictObject({
      /** Lowercase mono label in the title bar. */
      windowTitle: z.string().min(1),
      title: z.string().min(1),
      /** Typed line under the title, lowercase. */
      command: z.string().min(1),
      href: callToAction.shape.href,
      /** Shown when the window is closed, before the reopen button. */
      closedNote: z.string().min(1),
      /** Labels for the details the maximized window shows. */
      detailLabels: z.strictObject({
        who: z.string().min(1),
        what: z.string().min(1),
        asks: z.string().min(1),
        when: z.string().min(1),
      }),
    }),
    /**
     * Photo slots stacked from the top down, each wider than the one above.
     * The last is the widest, at the base, and the only one shown on phones.
     */
    images: z
      .array(
        z.strictObject({
          label: z.string().min(1),
          note: z.string().min(1),
        }),
      )
      .min(1)
      .max(3),
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
