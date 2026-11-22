// Schema for the About page sections (content/about.ts, SPEC 7.2). The mission
// statement is Markdown in content/pages/about.md.
import { z } from 'astro/zod';

/**
 * A paragraph with an optional highlighted phrase (the lime highlighter) and
 * an optional linked phrase. Each phrase must appear once in the text, and the
 * two must not overlap. `{regions}` in the text is replaced with the starting
 * regions from src/brand/brand.config.ts.
 */
const paragraphSchema = z
  .strictObject({
    text: z.string().min(1),
    highlight: z.string().min(1).optional(),
    link: z
      .strictObject({
        text: z.string().min(1),
        href: z.string().startsWith('/'),
      })
      .optional(),
  })
  .refine((p) => !p.highlight || p.text.includes(p.highlight), {
    message: 'highlight must be a phrase that appears in text',
  })
  .refine((p) => !p.link || p.text.includes(p.link.text), {
    message: 'link.text must be a phrase that appears in text',
  })
  .refine(
    (p) =>
      !p.highlight ||
      !p.link ||
      (!p.highlight.includes(p.link.text) &&
        !p.link.text.includes(p.highlight)),
    { message: 'highlight and link.text must not overlap' },
  );

/** A text section: a heading and its paragraphs. */
const sectionSchema = z.strictObject({
  heading: z.string().min(1),
  paragraphs: z.array(paragraphSchema).min(1),
});

/** An image imported from src/assets/, so the build can resize it. */
const imageSchema = z.custom<ImageMetadata>(
  (value) =>
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    'width' in value &&
    'height' in value,
  { message: 'photo.src must be an imported image from src/assets/' },
);

export const aboutSchema = z.strictObject({
  /** Original photography only (SPEC rule 8), shown at 4:5 beside the text. */
  photo: z
    .strictObject({
      src: imageSchema,
      alt: z.string().min(1),
      /** File name under src/assets/photos/, shown in the caption. */
      file: z.string().regex(/^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/),
      /** When it was taken, shown in the caption, e.g. "fall 2026". */
      taken: z.string().min(1),
    })
    .refine((p) => p.src.src.includes(p.file.replace(/\.\w+$/, '')), {
      message: 'photo.file must name the imported photo',
    }),
  pillars: z.strictObject({
    heading: z.string().min(1),
    intro: z.string().min(1),
    /** Board-voted wording, in order (SPEC section 2). */
    items: z.array(z.string().min(1)).length(4),
  }),
  howWeWork: sectionSchema,
  /** How we started. Comes after "How we work". */
  story: sectionSchema,
});

export type About = z.infer<typeof aboutSchema>;
