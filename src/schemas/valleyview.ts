// Schema for the Valleyview Grant information page (content/valleyview.ts, SPEC 7.4).
// There is deliberately no application link field until the board decides D5.
import { z } from 'astro/zod';

export const valleyviewSchema = z.strictObject({
  eligibility: z.string().min(1),
  award: z.string().min(1),
  recipientsGet: z.array(z.string().min(1)).min(1),
  recipientsAgreeTo: z.array(z.string().min(1)).min(1),
  /** What's the idea, why are you the right person, how will this help. */
  questions: z.array(z.string().min(1)).length(3),
  /** Only dates that are known. An empty list shows a placeholder. */
  timeline: z.array(
    z.strictObject({
      label: z.string().min(1),
      date: z.iso.date().optional(),
    }),
  ),
  howToApply: z.string().min(1),
  faq: z
    .array(
      z.strictObject({
        question: z.string().min(1),
        answer: z.string().min(1),
      }),
    )
    .min(1),
});

export type Valleyview = z.infer<typeof valleyviewSchema>;
