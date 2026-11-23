// Board member entries (SPEC 7.3). FICTIONAL PLACEHOLDERS ONLY, for the map
// prototype: the names, places, portfolios and bios below are invented. A
// member's real details are committed only after that member has agreed to
// them, because git history is public and permanent.
import { boardSchema, boardSettingsSchema } from '../src/schemas/board';

const portraitNote = 'Head-and-shoulders portrait, original photography.';

export const boardSettings = boardSettingsSchema.parse({
  // D14 is open: regional leads are not public until the board decides.
  // While this is on, the page shows a visible [TK] marker.
  showRegionalLeads: true,
});

export const board = boardSchema.parse([
  {
    name: 'Avery Example',
    photo: { placeholder: true, note: portraitNote },
    role: 'Chair',
    region: 'Kamloops',
    place: 'Kamloops',
    focus:
      "Sets the board's agenda and supports our work with teachers, from Pro-D sessions to classroom visits.",
    affiliations: [
      {
        label: 'Works at',
        name: 'Example Secondary School (fictional)',
        logo: { placeholder: true },
      },
      {
        label: 'School district',
        name: 'SD 73 Kamloops-Thompson',
        logo: { placeholder: true },
      },
    ],
    leads: [73, 83, 58],
    industry: 'Secondary teacher (fictional)',
    expertise: ['Classroom technology', 'Pro-D facilitation'],
    bio: 'Avery is a made-up person who stands in for a real board member. In this placeholder story, Avery taught high school science for fifteen years and now helps teachers plan units that mix hands-on work with computing.',
  },
  {
    name: 'Jordan Sample',
    photo: { placeholder: true, note: portraitNote },
    role: 'Vice-chair',
    region: 'Vancouver',
    place: 'Vancouver',
    focus:
      'Builds partnerships with people and companies in tech who want to help their local schools.',
    affiliations: [
      {
        label: 'Works at',
        name: 'Sample Software Co. (fictional)',
        logo: { placeholder: true },
      },
    ],
    leads: [39, 41, 44],
    industry: 'Software engineer (fictional)',
    expertise: ['Privacy', 'Volunteer programs'],
    bio: 'Jordan is fictional. The placeholder version of Jordan builds software for a living and organizes people in tech to volunteer with their local schools.',
    link: { label: 'Example profile', href: 'https://example.org/' },
  },
  {
    name: 'Riley Placeholder',
    photo: { placeholder: true, note: portraitNote },
    role: 'Treasurer',
    region: 'Victoria',
    place: 'Victoria',
    focus:
      'Looks after our finances and runs the Valleyview Grant, from the call for applications to follow-up.',
    affiliations: [
      {
        label: 'Works at',
        name: 'Placeholder Accounting (fictional)',
        logo: { placeholder: true },
      },
    ],
    leads: [61, 63, 62],
    industry: 'Accountant (fictional)',
    expertise: ['Non-profit finance', 'Grant programs'],
    bio: 'Riley does not exist. In this sample text, Riley keeps the books and helps run the grant, from the call for applications to the follow-up with recipients.',
  },
  {
    name: 'Morgan Mockup',
    photo: { placeholder: true, note: portraitNote },
    role: 'Secretary',
    region: 'Prince George',
    place: 'Prince George',
    focus:
      'Keeps our writing plain and clear, and looks after how we share our work.',
    affiliations: [
      {
        label: 'Works at',
        name: 'Mockup Elementary Library (fictional)',
        logo: { placeholder: true },
      },
      {
        label: 'School district',
        name: 'SD 57 Prince George',
        logo: { placeholder: true },
      },
    ],
    leads: [57, 28, 91],
    industry: 'School librarian (fictional)',
    expertise: ['Information literacy', 'Writing'],
    bio: 'Morgan is an invented person. Placeholder Morgan runs a school library in the North and writes plain-language guides to everyday technology.',
  },
  {
    name: 'Casey Draft',
    photo: { placeholder: true, note: portraitNote },
    role: 'Director',
    region: 'Nelson',
    place: 'Nelson',
    focus:
      'Leads our Indigenous outreach, building relationships in person, one community at a time.',
    affiliations: [
      {
        label: 'School district',
        name: 'SD 8 Kootenay Lake',
        logo: { placeholder: true },
      },
    ],
    leads: [8, 10, 20],
    industry: 'District staff (fictional)',
    expertise: ['Community relationships', 'Rural schools'],
    bio: 'Casey is fictional. In this placeholder, Casey works with schools across the Kootenays and builds relationships in person, one community at a time.',
  },
  {
    name: 'Taylor Testcase',
    photo: { placeholder: true, note: portraitNote },
    role: 'Director',
    region: 'Terrace',
    place: 'Terrace',
    focus:
      'Speaks for rural and remote schools, and what it takes to make technology work far from a city.',
    affiliations: [
      {
        label: 'Works at',
        name: 'Testcase Networks (fictional)',
        logo: { placeholder: true },
      },
    ],
    leads: [82, 54],
    industry: 'Network technician (fictional)',
    expertise: ['School networks', 'Device programs'],
    bio: 'Taylor is a made-up board member. Sample Taylor keeps school networks running in the Northwest and knows what it takes to make technology work far from a city.',
  },
  {
    name: 'Sydney Sketch',
    photo: { placeholder: true, note: portraitNote },
    role: 'Director',
    region: 'Vancouver',
    place: 'Vancouver',
    focus:
      'Brings the student view to the board and helps shape how we talk with young people.',
    affiliations: [
      {
        label: 'Studies at',
        name: 'Sketch University (fictional)',
        logo: { placeholder: true },
      },
    ],
    industry: 'University student (fictional)',
    bio: 'Sydney is fictional. In this placeholder, Sydney was a high school student in BC not long ago and remembers which lessons about technology stuck.',
  },
]);
