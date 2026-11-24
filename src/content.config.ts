// Content collections. Page copy lives in content/pages/ as Markdown, one file
// per route, validated at build: a missing required field fails the build.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { imageSlotSchema } from './schemas/valleyview';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.strictObject({
    /** Used in the <title> and as the default page heading. */
    title: z.string().min(1),
    /** Meta description. */
    description: z.string().min(1),
    /** Visible <h1> when it differs from the title. */
    heading: z.string().min(1).optional(),
  }),
});

/**
 * One feature per past Valleyview recipient, at /valleyview/<year>/ (decision
 * record 0006). Commit a recipient's details only with their consent: git
 * history is public and permanent.
 */
const recipients = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/valleyview-recipients' }),
  schema: z.strictObject({
    title: z.string().min(1),
    description: z.string().min(1),
    /** First name only, unless the recipient agrees to more. */
    name: z.string().min(1),
    year: z.number().int(),
    /** Label such as "Year 1 · 2026". */
    cohort: z.string().min(1),
    headline: z.string().min(1),
    /** One or two sentences under the headline; also the teaser on /valleyview/. */
    dek: z.string().min(1),
    quote: z.string().min(1),
    hero: imageSlotSchema,
    gallery: z.array(imageSlotSchema).min(1),
  }),
});

export const collections = { pages, recipients };
