// Schemas for the Valleyview grant pages (SPEC 7.4, decision record 0006):
// the grant home page (content/valleyview.ts) and one feature page per past
// recipient (content/valleyview-recipients/, loaded in src/content.config.ts).
// There is deliberately no application link field until the board decides D5.
import { z } from 'astro/zod';

const text = z.string().min(1);

/** A short bold lead-in and the sentence that follows it. */
const point = z.strictObject({ title: text, text });

/** Labelled image slot until original photography exists (SPEC rule 8). */
export const imageSlotSchema = z.strictObject({
  /** CSS aspect ratio, e.g. "3 / 2". */
  ratio: text,
  label: text,
  /** One-line art-direction note. */
  note: text,
  caption: text.optional(),
});

export const valleyviewSchema = z.strictObject({
  hero: z.strictObject({
    headline: text,
    /** Three short facts shown under the headline. */
    facts: z.array(text).length(3),
  }),

  /** The bigger picture: why we fund students at all (pillar 4). */
  pillar: z.strictObject({
    label: text,
    title: text,
    paragraphs: z.array(text).min(1),
    goalsHeading: text,
    goals: z.array(text).min(1),
    goalsNote: text.optional(),
  }),

  /** This year's grant. */
  current: z.strictObject({
    label: text,
    heading: text,
    intro: text,
    award: z.array(point).min(1),
    eligibility: text,
    socialInnovation: z.array(text).min(1),
    steps: z.array(point).min(1),
    /** `when` is display text; `date` only where the date is confirmed. */
    timeline: z
      .array(
        z.strictObject({
          when: text,
          what: text,
          date: z.iso.date().optional(),
        }),
      )
      .min(1),
    timelineNote: text.optional(),
    /** What's the idea, why are you the right person, how will this help. */
    questions: z.array(text).length(3),
    tipsIntro: text,
    tips: z.array(point).min(1),
    /** How and when to apply, as text (D5). */
    apply: z.strictObject({ heading: text, text, pending: text }),
    faq: z.array(z.strictObject({ question: text, answer: text })).min(1),
    team: z.strictObject({
      intro: text,
      people: z.array(z.strictObject({ name: text, bio: text })).min(1),
    }),
    privacy: text,
  }),
});

export type Valleyview = z.infer<typeof valleyviewSchema>;
