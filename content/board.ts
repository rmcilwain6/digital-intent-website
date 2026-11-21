// Board member cards (SPEC 7.3). FICTIONAL PLACEHOLDERS ONLY, for the map
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
    portfolio: ['Strategy', 'Teacher programs'],
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
    portfolio: ['Partnerships'],
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
    portfolio: ['Finance', 'Valleyview Grant'],
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
    portfolio: ['Communications'],
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
    portfolio: ['Indigenous outreach'],
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
    portfolio: ['Rural and remote schools'],
    leads: [82, 54],
    industry: 'Network technician (fictional)',
    expertise: ['School networks', 'Device programs'],
    bio: 'Taylor is a made-up board member. Sample Taylor keeps school networks running in the Northwest and knows what it takes to make technology work far from a city.',
  },
]);
