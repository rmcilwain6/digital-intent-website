// Schema for the organization's mission, pillars and goals
// (content/organization.ts). Shared by Home and About (SPEC 2, 7.1, 7.2).
import { z } from 'astro/zod';

export const organizationSchema = z.strictObject({
  /**
   * One sentence. Home and About both show it. The site's working wording
   * until the board ratifies one (SPEC 7.2).
   */
  mission: z.string().min(1),
  /**
   * The four strategic pillars, in the board-voted wording and order. The
   * wording is each pillar's one-line definition (SPEC 7.2).
   */
  pillars: z.array(z.string().min(1)).length(4),
  goals: z.array(z.string().min(1)).min(1),
});

export type Organization = z.infer<typeof organizationSchema>;
