// Team member entries (SPEC 7.3). A member's details are committed only after
// that member has agreed to them, because git history is public and
// permanent. Anything still pending is marked [TK: ...].
import { brand } from '../src/brand/brand.config';
import { regionDistrictsSchema, teamSchema } from '../src/schemas/team';

const portraitNote = 'Head-and-shoulders portrait, original photography.';

// The school districts outlined on the map around each starting region.
// Modest on purpose: the districts nearest each city.
export const regionDistricts = regionDistrictsSchema.parse({
  Kamloops: [73], // Kamloops-Thompson
  Victoria: [61, 62, 63], // Greater Victoria, Sooke, Saanich
  Vancouver: [39], // Vancouver
});

export const team = teamSchema.parse([
  {
    name: 'Reed McIlwain',
    photo: { placeholder: true, note: portraitNote },
    // [TK: confirm role and home city with Reed]
    role: 'Executive Director',
    place: 'Kamloops',
    focus: '[TK: one-sentence focus for Reed]',
  },
  {
    name: 'Carter Recchi',
    photo: { placeholder: true, note: portraitNote },
    // [TK: confirm role and home city with Carter]
    role: 'Board Member',
    place: 'Vancouver',
    focus: '[TK: one-sentence focus for Carter]',
  },
  {
    name: 'Keaton Allan',
    photo: { placeholder: true, note: portraitNote },
    // [TK: confirm role and home city with Keaton]
    role: 'Board Member',
    place: 'Victoria',
    focus: '[TK: one-sentence focus for Keaton]',
  },
  {
    name: 'Carolyn Dahl',
    photo: { placeholder: true, note: portraitNote },
    // [TK: confirm role and home city with Carolyn]
    role: 'Board Member',
    place: 'Victoria',
    focus: '[TK: one-sentence focus for Carolyn]',
  },
  {
    name: 'Nicole Peverley',
    photo: { placeholder: true, note: portraitNote },
    // [TK: confirm role and home city with Nicole]
    role: 'Board Member',
    place: 'Kamloops',
    focus: '[TK: one-sentence focus for Nicole]',
  },
]);

// Every member is based in a starting region that has districts to outline.
for (const member of team) {
  if (
    !(brand.regions as readonly string[]).includes(member.place) ||
    !regionDistricts[member.place]
  ) {
    throw new Error(
      `${member.name}: place "${member.place}" must be one of ${brand.regions.join(', ')}, with districts in regionDistricts.`,
    );
  }
}
