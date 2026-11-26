// Team member entries (SPEC 7.3). A member's details are committed only after
// that member has agreed to them, because git history is public and
// permanent. Anything still pending is marked [TK: ...].
import { brand } from '../src/brand/brand.config';
import { regionDistrictsSchema, teamSchema } from '../src/schemas/team';

// Logos stay placeholders until each organization's logo is provided, with
// permission to use it.
const logo = { placeholder: true } as const;

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
    photo: {
      src: '/team/reed-mcilwain.webp',
      alt: 'Reed McIlwain smiling on a snowy riverside path, with mountains in the background.',
    },
    role: 'Executive Director',
    place: 'Vancouver',
    alsoIn: ['Kamloops', 'Victoria'],
    // Draft copy from Reed's notes, Nov 26, 2026: needs Reed's approval.
    focus:
      'Leads our day-to-day work and is building our community in Vancouver, Victoria and Kamloops.',
    work: [
      {
        title: 'Photographer and owner',
        organization: { name: 'Everyday Archive Co.', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Software Engineering',
        school: { name: 'University of Victoria', logo },
      },
    ],
    bio: `Reed grew up in Kamloops and graduated from Valleyview Secondary in 2016, where he was valedictorian. He then spent about ten years in Victoria, starting with a software engineering degree at the University of Victoria. Today he lives in Vancouver and is often in Kamloops and Victoria. He thinks of all three cities as home, which is why they are where we are building our community first.

Reed has always liked wearing many hats. He was the technology coordinator at Eureka in 2017 and 2019, and spent three and a half years as a software developer at Shift, a tech company in Victoria. He helped deliver material for a software engineering course at UVic, and spent three years volunteering with TEDxVictoria as volunteer lead and community engagement lead.

He left software to do more of that mix. He started a photography business and did contract work for the Big Little Science Centre in Kamloops, then founded Digital Intent. Each of those roles taught him something he now uses as executive director.`,
  },
  {
    name: 'Carter Recchi',
    photo: {
      src: '/team/carter-recchi.webp',
      alt: 'Carter Recchi smiling on a rocky shoreline, with the ocean in the background.',
    },
    role: 'Board Member',
    place: 'Kamloops',
    focus: '[TK: one-sentence focus for Carter]',
  },
  {
    name: 'Keaton Allan',
    photo: {
      src: '/team/keaton-allan.webp',
      alt: 'Keaton Allan smiling in a suit and tie, in front of a grey backdrop.',
    },
    role: 'Board Member',
    place: 'Kamloops',
    // Draft from Reed's notes, Nov 26, 2026: needs Keaton's approval.
    focus:
      'Looks after the Valleyview Grant, which backs Grade 12 students at Valleyview Secondary with money and mentorship.',
    work: [
      {
        title: 'Natural Resources Manager',
        organization: { name: 'K’en T’em Limited Partnership', logo },
      },
    ],
    education: [
      {
        program: 'Natural Resource Sciences',
        school: { name: 'Thompson Rivers University', logo },
      },
    ],
    // Bio as supplied by Reed, Nov 26, 2026, lightly edited: needs Keaton's
    // approval.
    bio: `Keaton graduated from Valleyview Secondary in 2016. He studied natural resource sciences at Thompson Rivers University from 2016 to 2020.

In his career, Keaton has blended environmental services, operational excellence and meaningful Indigenous consultation within resource extraction industries. He now works as Natural Resources Manager at K’en T’em Limited Partnership.`,
  },
  {
    name: 'Carolyn Dahl',
    photo: {
      src: '/team/carolyn-dahl.webp',
      alt: 'Carolyn Dahl smiling in a graduation gown, with the water in the background.',
    },
    role: 'Board Member',
    place: 'Vancouver',
    // Draft copy from Reed's notes, Nov 26, 2026: needs Carolyn's approval.
    focus:
      'Brings the view of a primary teacher, from kindergarten to Grade 3.',
    work: [
      {
        title: 'Teacher on call',
        organization: { name: 'Vancouver School Board', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Education',
        school: { name: 'Vancouver Island University', logo },
      },
    ],
    bio: `Carolyn is a primary teacher who focuses on kindergarten to Grade 3. She earned her Bachelor of Education at Vancouver Island University and lived in Nanaimo for several years. She now lives in Vancouver, where she is a teacher on call with the Vancouver School Board (School District 39).`,
  },
  {
    name: 'Nicole Peverley',
    photo: {
      src: '/team/nicole-peverley.webp',
      alt: 'Nicole Peverley smiling in front of a red brick wall.',
    },
    role: 'Board Member',
    place: 'Victoria',
    // Draft copy from Reed's notes, Nov 26, 2026: needs Nicole's approval.
    focus:
      'Builds the software and tools we use, and looks after the software side of our work.',
    work: [
      {
        title: 'Senior Software Developer',
        organization: { name: 'Shift', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Software Engineering',
        school: { name: 'University of Victoria', logo },
      },
    ],
    bio: `Nicole lives in Victoria, where she is a senior software developer at Shift, a software company. She studied software engineering at the University of Victoria.

She has always been drawn to teaching as well as software development. She is excited to build software, and to teach it, in ways that help kids.`,
  },
]);

// Every place a member calls home is a starting region with districts to
// outline.
for (const member of team) {
  for (const place of [member.place, ...(member.alsoIn ?? [])]) {
    if (
      !(brand.regions as readonly string[]).includes(place) ||
      !regionDistricts[place]
    ) {
      throw new Error(
        `${member.name}: place "${place}" must be one of ${brand.regions.join(', ')}, with districts in regionDistricts.`,
      );
    }
  }
}
