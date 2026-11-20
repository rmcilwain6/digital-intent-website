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

// Strict: unknown fields fail the build, so a personal email, phone number or
// regional lead designation cannot be added by accident (D14).
export const boardMemberSchema = z.strictObject({
  name: z.string().min(1),
  photo,
  role: z.string().min(1),
  region: z.string().min(1),
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

export type BoardMember = z.infer<typeof boardMemberSchema>;
