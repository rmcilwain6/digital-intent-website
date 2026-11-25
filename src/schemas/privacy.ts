// Schema for the Privacy page (content/privacy.ts, SPEC 7.7). The heading and
// lede are Markdown in content/pages/privacy.md. Privacy text is a human-only
// area (SPEC 12.5): an agent drafts, a person approves.
import { z } from 'astro/zod';

const section = z.strictObject({
  heading: z.string().min(1),
  intro: z.string().min(1),
});

/**
 * A service that runs the site. SPEC 7.7 asks for where it is based: add
 * `based` once it is confirmed. The column shows when any service has it.
 */
const hostService = z.strictObject({
  name: z.string().min(1),
  role: z.string().min(1),
  based: z.string().min(1).optional(),
});

/**
 * A service the site links to. Once a visitor follows the link, that
 * service's own notice applies. SPEC 7.7 asks for where its data is stored
 * and a link to its notice: add them once they are known.
 */
const linkedService = z.strictObject({
  /** When this applies, e.g. "If you email us". */
  when: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  stored: z.string().min(1).optional(),
  notice: z
    .strictObject({
      label: z.string().min(1),
      /** A URL, or a [TK] note while the service is undecided. */
      href: z.union([z.url(), z.string().startsWith('[TK')]),
    })
    .optional(),
});

export const privacySchema = z.strictObject({
  /** Date a person approved the current text. Shown when set. */
  lastUpdated: z.string().min(1).optional(),
  collects: z.strictObject({
    heading: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).min(1),
  }),
  doesNot: z.strictObject({
    heading: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
  }),
  services: section.extend({
    /** Service, what it does, where it is based. */
    columns: z.tuple([z.string(), z.string(), z.string()]),
    items: z.array(hostService).min(1),
  }),
  linked: section.extend({
    items: z.array(linkedService).min(1),
  }),
  glance: z.strictObject({
    heading: z.string().min(1),
    items: z
      .array(
        z.strictObject({ label: z.string().min(1), value: z.string().min(1) }),
      )
      .min(1),
  }),
  questions: z.strictObject({
    heading: z.string().min(1),
    /** Text before the organization email, which comes from brand config. */
    lead: z.string().min(1),
  }),
});

export type Privacy = z.infer<typeof privacySchema>;
