// Schema for team member entries (content/team.ts, SPEC 7.3).
import { z } from 'astro/zod';

const logo = z.union([
  z.strictObject({
    /**
     * Path under `public/`. Self-hosted, never hot-linked (rule 3). No alt
     * text: the organization's name is always shown beside it.
     */
    src: z.string().startsWith('/'),
  }),
  z.strictObject({
    /** Placeholder until the logo is provided, with permission to use it. */
    placeholder: z.literal(true),
  }),
]);

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

/** A company, school or other organization, shown with its logo. */
const organization = z.strictObject({
  name: z.string().min(1),
  logo,
});

// Strict: unknown fields fail the build, so a personal email or phone number
// cannot be added by accident (D14).
export const teamMemberSchema = z.strictObject({
  name: z.string().min(1),
  photo,
  role: z.enum(['Executive Director', 'Board Member']),
  /**
   * The city the member is based in: one of the starting regions
   * (brand.regions). The map marks it and outlines the school districts
   * around it (`regionDistricts` in content/team.ts).
   */
  place: z.string().min(1),
  /**
   * Other starting regions the member also calls home and spends real time
   * in. The map marks and outlines these along with `place`; the line under
   * the name shows `place` only, so the bio should say why.
   */
  alsoIn: z.array(z.string().min(1)).min(1).optional(),
  /** What this member handles for the team, in a sentence or two. */
  focus: z.string().min(1),
  /** Where they work and what they do there. Shown with the logo. */
  work: z
    .array(
      z.strictObject({
        /** What they do, e.g. "Software developer". */
        title: z.string().min(1),
        organization,
      }),
    )
    .min(1)
    .max(2)
    .optional(),
  /** Where they went to school. Shown with the logo. */
  education: z
    .array(
      z.strictObject({
        /**
         * What they studied, e.g. "Bachelor of Education". A list for more
         * than one program at the same school, each shown on its own line.
         */
        program: z
          .union([z.string().min(1), z.array(z.string().min(1)).min(2)])
          .optional(),
        school: organization,
      }),
    )
    .min(1)
    .max(2)
    .optional(),
  /** More about them, in a short paragraph or two (blank line between). */
  bio: z.string().min(1).optional(),
  // HTTPS only: blocks mailto: (personal email, D14) and javascript: links.
  link: z
    .strictObject({
      label: z.string().min(1),
      href: z.url({ protocol: /^https$/ }),
    })
    .optional(),
});

export const teamSchema = z.array(teamMemberSchema).min(1);

/**
 * The school districts outlined on the map around each starting region,
 * keyed by city. Kept modest: the districts we can reasonably reach, not a
 * claim to the whole area.
 */
export const regionDistrictsSchema = z.record(
  z.string().min(1),
  z.array(z.int().positive()).min(1),
);

export type TeamMember = z.infer<typeof teamMemberSchema>;
