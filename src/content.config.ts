// Content collections. Page copy lives in content/pages/ as Markdown, one file
// per route, validated at build: a missing required field fails the build.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

export const collections = { pages };
