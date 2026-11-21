// Schema for board member cards (content/board.ts, SPEC 7.3).
import { z } from 'astro/zod';

const photo = z.union([
  z.strictObject({
    /** Path under `public/`. */
    src: z.string().startsWith('/'),
    alt: z.string().min(1),
  }),
  z.strictObject({
    /** Placeholder until original portraits are shot (SPEC rule 8). */
    placeholder: z.literal(true),
    note: z.string().min(1),
  }),
]);

// Strict: unknown fields fail the build, so a personal email or phone number
// cannot be added by accident (D14).
export const boardMemberSchema = z.strictObject({
  name: z.string().min(1),
  photo,
  role: z.string().min(1),
  /** Home region as shown on the card. */
  region: z.string().min(1),
  /**
   * The town or city the map marks for this member: a name from the map's
   * places layer. Town level only, never anything more precise.
   */
  place: z.string().min(1),
  /** Parts of the organization this member looks after. */
  portfolio: z.array(z.string().min(1)).min(1).optional(),
  /**
   * School district numbers this member leads for. Regional lead designations
   * are not public until the board decides D14; they show only while
   * `boardSettings.showRegionalLeads` is on, which adds a visible [TK] marker.
   */
  leads: z.array(z.int().positive()).min(1).optional(),
  industry: z.string().min(1).optional(),
  expertise: z.array(z.string().min(1)).min(1).optional(),
  bio: z.string().min(1).optional(),
  // HTTPS only: blocks mailto: (personal email, D14) and javascript: links.
  link: z
    .strictObject({
      label: z.string().min(1),
      href: z.url({ protocol: /^https$/ }),
    })
    .optional(),
});

export const boardSchema = z.array(boardMemberSchema).min(1);

export const boardSettingsSchema = z.strictObject({
  /** Prototype only until the board decides D14. */
  showRegionalLeads: z.boolean(),
});

export type BoardMember = z.infer<typeof boardMemberSchema>;
