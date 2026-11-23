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

/** File formats we share, by file extension. */
export const fileFormats = {
  pdf: 'PDF',
  pptx: 'PowerPoint',
  docx: 'Word',
} as const;

/**
 * One file in a lesson version. Files are self-hosted under
 * public/resources/<lesson>/<version>/ (rule 3) and linked directly, with no
 * form or sign-up in front of them (rule 1).
 */
const fileSchema = z.strictObject({
  /** What the file is, e.g. "Lesson plan" or "Student handout". */
  label: z.string().min(1),
  /** File name, shown as typed text, e.g. "lesson-plan.pdf". */
  name: z.string().regex(/^[a-z0-9-]+\.(pdf|pptx|docx)$/),
  /** Path under public/, or [TK] until the file exists. */
  href: orPlaceholder(
    z.string().regex(/^\/resources\/[a-z0-9-]+\/v\d+\.\d+\/[a-z0-9.-]+$/),
  ),
  /** Pages, or slides for a slide deck. */
  pages: z.number().int().positive(),
  /** File size shown beside the link, e.g. "240 kb". */
  size: z.string().regex(/^\d+ kb$/),
});

/** A published version of a lesson, with the files that make it up. */
const versionSchema = z.strictObject({
  /** Major.minor, e.g. "1.1". Minor for fixes and additions, major for a rewrite. */
  version: z.string().regex(/^\d+\.\d+$/),
  /** Release date, ISO. */
  date: z.iso.date(),
  /** What changed in this version, in a sentence. */
  notes: z.string().min(1),
  files: z.array(fileSchema).min(1),
});

/** Compares "1.10" and "1.9" as numbers, not text. */
const versionNumber = (v: string) => {
  const [major = 0, minor = 0] = v.split('.').map(Number);
  return major * 1000 + minor;
};

/** A lesson teachers can download, one tab in the file folder. */
const lessonSchema = z
  .strictObject({
    /** URL fragment and file folder name. */
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    /** Short name for the folder tab, when the title is long. */
    tab: z.string().min(1).max(24).optional(),
    /** Two or three sentences: what students do and learn. */
    summary: z.string().min(1),
    /** Grade band, e.g. "Grades 6 to 8". */
    grades: z.string().min(1),
    /** Existing subjects the lesson fits into: no new subject. */
    subjects: z.array(z.string().min(1)).min(1),
    /** Class time, e.g. "One 60-minute class". */
    length: z.string().min(1),
    /** Devices the lesson needs in the room, e.g. "None". */
    devices: z.string().min(1),
    /** Newest first. The first is the current version. */
    versions: z.array(versionSchema).min(1),
    /**
     * True for a made-up entry that shows the layout. It carries a visible
     * [TK] label so the pre-launch check catches it (rule 6).
     */
    example: z.boolean().default(false),
  })
  .refine(
    (l) =>
      l.versions.every(
        (v, i, all) =>
          i === 0 ||
          (versionNumber(all[i - 1]!.version) > versionNumber(v.version) &&
            all[i - 1]!.date >= v.date),
      ),
    { message: 'versions must be newest first, with no repeats' },
  );

export const teachersSchema = z.strictObject({
  approach: z.strictObject({
    heading: z.string().min(1),
    items: z.array(approachSchema).min(1),
  }),
  lessons: z
    .strictObject({
      heading: z.string().min(1),
      intro: z.string().min(1),
      items: z.array(lessonSchema).min(1),
    })
    .refine(
      (s) => new Set(s.items.map((l) => l.slug)).size === s.items.length,
      { message: 'lesson slugs must be unique' },
    ),
});

export type Teachers = z.infer<typeof teachersSchema>;
export type Lesson = Teachers['lessons']['items'][number];
export type LessonFile = Lesson['versions'][number]['files'][number];
