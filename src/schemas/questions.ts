// Schema for the question bank (content/questions.ts): questions about the
// technology we use every day, each with a short answer. Home shows a few in
// its "Do you know the answer?" window. The bank is meant to grow, with
// longer answers, and Home may later deal a different few on each visit.
import { z } from 'astro/zod';

export const questionSchema = z.strictObject({
  /** Stable id, lowercase with hyphens. Shown in the window as a file name. */
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  /**
   * The bank's category, as in the question bank sheet, for example
   * "Cybersecurity". Labels the question in Home's game.
   */
  category: z.string().min(1),
  /** The idea behind the question, in a few lowercase words. */
  concept: z.string().min(1),
  question: z.string().min(1),
  /** A short, plain-language answer: a few sentences. */
  answer: z.string().min(1),
  /**
   * True while the question and answer are an agent draft awaiting human
   * approval (SPEC 12.5).
   */
  draft: z.boolean(),
});

export const questionBankSchema = z
  .array(questionSchema)
  .min(1)
  .refine(
    (bank) => new Set(bank.map((q) => q.slug)).size === bank.length,
    'Each question needs its own slug',
  );

export type Question = z.infer<typeof questionSchema>;
