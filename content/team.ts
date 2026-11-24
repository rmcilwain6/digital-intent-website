// Team member entries (SPEC 7.3). FICTIONAL PLACEHOLDERS ONLY: the names,
// work, schools and bios below are invented. A member's real details are
// committed only after that member has agreed to them, because git history
// is public and permanent.
import { brand } from '../src/brand/brand.config';
import { regionDistrictsSchema, teamSchema } from '../src/schemas/team';

const portraitNote = 'Head-and-shoulders portrait, original photography.';
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
    name: 'Avery Example',
    photo: { placeholder: true, note: portraitNote },
    role: 'Executive Director',
    place: 'Kamloops',
    focus:
      'Runs our day-to-day work and supports teachers, from Pro-D sessions to classroom visits.',
    work: [
      {
        title: 'Secondary science teacher',
        organization: { name: 'Example Secondary School (fictional)', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Education',
        school: { name: 'Example University (fictional)', logo },
      },
    ],
    bio: 'Avery is a made-up person who stands in for a real team member. In this placeholder story, Avery taught high school science for fifteen years and now helps teachers plan units that mix hands-on work with computing.',
  },
  {
    name: 'Jordan Sample',
    photo: { placeholder: true, note: portraitNote },
    role: 'Board Member',
    place: 'Vancouver',
    focus:
      'Builds partnerships with people and companies in tech who want to help their local schools.',
    work: [
      {
        title: 'Software developer',
        organization: { name: 'Sample Software Co. (fictional)', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Computer Science',
        school: { name: 'Sample University (fictional)', logo },
      },
    ],
    bio: 'Jordan is a made-up team member. In this placeholder story, Jordan builds web apps for a living and volunteers with a coding club at a local elementary school.',
  },
  {
    name: 'Riley Placeholder',
    photo: { placeholder: true, note: portraitNote },
    role: 'Board Member',
    place: 'Victoria',
    focus:
      'Looks after our finances and runs the Valleyview Grant, from the call for applications to follow-up.',
    work: [
      {
        title: 'Accountant',
        organization: { name: 'Placeholder Accounting (fictional)', logo },
      },
    ],
    education: [
      {
        program: 'Bachelor of Commerce',
        school: { name: 'Placeholder University (fictional)', logo },
      },
    ],
    bio: 'Riley is a made-up team member. In this placeholder story, Riley grew up on Vancouver Island and keeps the books for small nonprofits.',
  },
  {
    name: 'Morgan Mockup',
    photo: { placeholder: true, note: portraitNote },
    role: 'Board Member',
    place: 'Victoria',
    focus:
      'Keeps our writing plain and clear, and looks after how we share our work.',
    work: [
      {
        title: 'School librarian',
        organization: { name: 'Mockup Elementary (fictional)', logo },
      },
    ],
    education: [
      {
        program: 'Master of Library Science',
        school: { name: 'Mockup College (fictional)', logo },
      },
    ],
    bio: 'Morgan is a made-up team member. In this placeholder story, Morgan teaches students how to judge what they read online.',
  },
  {
    name: 'Sydney Sketch',
    photo: { placeholder: true, note: portraitNote },
    role: 'Board Member',
    place: 'Kamloops',
    focus:
      'Brings the student view to the team and helps shape how we talk with young people.',
    education: [
      {
        program: 'Computer science student',
        school: { name: 'Sketch University (fictional)', logo },
      },
    ],
    bio: 'Sydney is a made-up team member. In this placeholder story, Sydney won a small grant in Grade 12 and now helps younger students start their own projects.',
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
