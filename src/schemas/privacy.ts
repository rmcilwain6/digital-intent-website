// Schema for the Privacy page (content/privacy.ts, SPEC 7.7). The heading and
// lede are Markdown in content/pages/privacy.md. Privacy text is a human-only
// area (SPEC 12.5): an agent drafts, a person approves.
import { z } from 'astro/zod';

const section = z.strictObject({
  heading: z.string().min(1),
  intro: z.string().min(1),
});

/**
 * A service that runs the site. SPEC 7.7 asks for where it is based, so
 * `based` is required: a [TK] note until it is confirmed, never left off.
 */
const hostService = z.strictObject({
  name: z.string().min(1),
  role: z.string().min(1),
  based: z.string().min(1),
  /** The service's own privacy notice, linked after `role`. */
  notice: z
    .strictObject({
      label: z.string().min(1),
      href: z.url(),
    })
    .optional(),
});

/**
 * A service the site links to. Once a visitor follows the link, that
 * service's own notice applies. SPEC 7.7 asks for where its data is stored
 * and a link to its notice, so both are required: [TK] notes until known.
 */
const linkedService = z.strictObject({
  /** When this applies, e.g. "If you email us". */
  when: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  stored: z.string().min(1),
  notice: z.strictObject({
    label: z.string().min(1),
    /** A URL, or a [TK] note while the service is undecided. */
    href: z.union([z.url(), z.string().startsWith('[TK')]),
  }),
});

const labelled = z.strictObject({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const privacySchema = z.strictObject({
  /** Date a person approved the current text, or a [TK] note until then. */
  lastUpdated: z.string().min(1),
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
    /** Paragraphs after the table, for details that do not fit a row. */
    notes: z.array(z.string().min(1)).optional(),
  }),
  /**
   * Email is the one place the organization holds personal information, so
   * our side of it is set out here, not under linked services.
   */
  email: section.extend({
    items: z.array(labelled).min(1),
  }),
  linked: section.extend({
    items: z.array(linkedService).min(1),
  }),
  glance: z.strictObject({
    heading: z.string().min(1),
    items: z.array(labelled).min(1),
  }),
  questions: z.strictObject({
    heading: z.string().min(1),
    /** Text before the organization email, which comes from brand config. */
    lead: z.string().min(1),
    /**
     * Names the person responsible for privacy by role (BC PIPA), before the
     * privacy email from brand config.
     */
    officer: z.string().min(1),
  }),
});

export type Privacy = z.infer<typeof privacySchema>;
