// Schema for the Contact page (content/contact.ts, SPEC 7.6). The heading and
// lede are Markdown in content/pages/contact.md. There is no form: every way
// to reach us is a mailto: link to the address in src/brand/brand.config.ts,
// so nothing a visitor writes passes through this site (rule 1).
import { z } from 'astro/zod';

/** One reason to write to us, with a subject line filled in for the visitor. */
const topicSchema = z.strictObject({
  label: z.string().min(1),
  /** One sentence on what we can help with. */
  description: z.string().min(1),
  /** Subject line the email opens with. Plain text; it is URL-encoded. */
  subject: z.string().min(1).max(80),
});

export const contactSchema = z.strictObject({
  /** Label above the address, e.g. "Email". */
  emailLabel: z.string().min(1),
  topics: z.strictObject({
    heading: z.string().min(1),
    intro: z.string().min(1),
    items: z.array(topicSchema).min(1),
  }),
  /** What happens when you write: your email app, our inbox, nothing kept here. */
  privacyNote: z.string().min(1),
});

export type Contact = z.infer<typeof contactSchema>;
