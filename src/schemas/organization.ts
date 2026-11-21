// Schema for the organization's mission, pillars and goals
// (content/organization.ts). Shared by Home and About (SPEC 2, 7.1, 7.2).
import { z } from 'astro/zod';

export const organizationSchema = z.strictObject({
  /** `[TK]` until the board ratifies it. */
  mission: z.string().min(1),
  /** The four strategic pillars, in the order the board voted them. */
  pillars: z
    .array(
      z.strictObject({
        title: z.string().min(1),
        /** Approved one-line definition, or `[TK]`. */
        definition: z.string().min(1),
      }),
    )
    .length(4),
  goals: z.array(z.string().min(1)).min(1),
});

export type Organization = z.infer<typeof organizationSchema>;
