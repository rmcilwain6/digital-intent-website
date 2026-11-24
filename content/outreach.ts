// Indigenous outreach page sections (SPEC 7.9, decision record 0006).
// Draft copy from notes of a conversation with the team member leading this
// work. Everything marked `draft: true` needs that person's
// approval before launch (SPEC 12.5). The Nations to name for each region
// are left as [TK] until the lead confirms them: do not fill them in from
// a dataset or a guess.
import { outreachSchema } from '../src/schemas/outreach';

export const outreach = outreachSchema.parse({
  acknowledgement: {
    heading: 'Whose land we are on',
    paragraphs: [
      'We are grateful to live, work and play in British Columbia, on the lands of the many First Nations who have cared for them since time immemorial. Much of this land was never ceded.',
      'Our work reaches across the whole province, and so does this acknowledgement.',
    ],
    regionsIntro: 'Our board lives and works in three places:',
    regions: [
      {
        region: 'Kamloops',
        nations: '[TK: Nations to name, confirmed by the outreach lead]',
      },
      {
        region: 'Victoria',
        nations: '[TK: Nations to name, confirmed by the outreach lead]',
      },
      {
        region: 'Vancouver',
        nations: '[TK: Nations to name, confirmed by the outreach lead]',
      },
    ],
    draft: true,
  },

  approach: {
    heading: 'Where we are starting',
    paragraphs: [
      'A land acknowledgement is a starting place in good faith. It is not the work. This page is where we will show the work as it happens.',
      'We are honest that we do not have much to show yet. Learning what Indigenous schools and learners need to understand the digital world, and how we can support them, is an intentional focus for us. We will learn it by meeting and listening to communities, not by assuming.',
      'We are not trying to reinvent the wheel. We will learn from the people and organizations already doing this work.',
    ],
    draft: true,
  },

  commitments: {
    heading: 'What we commit to',
    paragraphs: ['These are our first commitments. We will add to them.'],
    items: [
      'Meet with schools in First Nations communities, starting near where we live, and build relationships before projects.',
      'Turn our plans into quarterly objectives, and report on them on this page.',
      "Use a community's name, language or logo in our work only with that community's agreement.",
      'Seek Indigenous representation on our board.',
    ],
    invitation: {
      text: 'If you work in education or technology and would like to be involved, including on our board, we would like to hear from you.',
      link: { text: 'we would like to hear from you', href: '/contact/' },
    },
    draft: true,
  },

  record: {
    heading: 'Where we have been',
    paragraphs: [
      "Each point on this map is a school we have visited or worked with, added with the school's agreement. We show schools, not Nation boundaries.",
    ],
    empty: 'There are no points yet. We will add the first as our work begins.',
    visits: [],
    draft: true,
  },
});
