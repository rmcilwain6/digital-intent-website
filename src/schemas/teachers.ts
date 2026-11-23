// Schema for the teachers page (content/teachers.ts). The page heading and
// lede are Markdown in content/pages/teachers.md.
import { z } from 'astro/zod';

/** A `[TK: ...]` placeholder, or a value of the given shape. */
const orPlaceholder = <T extends z.ZodType>(schema: T) =>
  z.union([z.string().startsWith('[TK'), schema]);

/** One way we work with teachers: a short claim and a sentence or two. */
const approachSchema = z
  .strictObject({
    title: z.string().min(1),
    text: z.string().min(1),
    /** Phrase in `text` shown with the highlighter. One per section at most. */
    highlight: z.string().min(1).optional(),
  })
  .refine((a) => !a.highlight || a.text.includes(a.highlight), {
    message: 'highlight must be a phrase that appears in text',
  });

/**
 * A lesson or resource teachers can download. Files are self-hosted under
 * public/resources/ (rule 3); the link is a direct download, with no form or
 * sign-up in front of it (rule 1).
 */
const resourceSchema = z.strictObject({
  /** URL slug; also the file name without its extension. */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  /** One or two sentences: what students do and learn. */
  summary: z.string().min(1),
  /** Grade band, e.g. "Grades 6 to 8". */
  grades: z.string().min(1),
  /** Existing subjects the lesson fits into: no new subject (SPEC 7.10). */
  subjects: z.array(z.string().min(1)).min(1),
  /** Class time, e.g. "One 60-minute class". */
  length: z.string().min(1),
  format: z.enum(['PDF', 'Slides', 'Doc']),
  /** Path under public/, or [TK] until the file exists. */
  file: orPlaceholder(z.string().regex(/^\/resources\/[a-z0-9-]+\.[a-z]+$/)),
  pages: z.number().int().positive(),
  /** File size shown beside the link, e.g. "240 kb". */
  size: z.string().regex(/^\d+ kb$/),
  /** Last update, ISO date. */
  updated: z.iso.date(),
  /**
   * True for a made-up entry that shows the layout. It carries a visible
   * [TK] label so the pre-launch check catches it (rule 6).
   */
  example: z.boolean().default(false),
});

export const teachersSchema = z.strictObject({
  approach: z.strictObject({
    heading: z.string().min(1),
    items: z.array(approachSchema).min(1),
  }),
  call: z.strictObject({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    text: z.string().min(1),
    action: z.string().min(1),
    /** Outbound link to the scheduler, never a form on our site (SPEC 7.1). */
    href: orPlaceholder(z.url()),
    /** Names the scheduler as a separate service (SPEC 7.7). */
    privacyNote: z.string().min(1),
    emailIntro: z.string().min(1),
  }),
  resources: z.strictObject({
    heading: z.string().min(1),
    intro: z.string().min(1),
    items: z.array(resourceSchema),
  }),
});

export type Teachers = z.infer<typeof teachersSchema>;
export type Resource = Teachers['resources']['items'][number];
