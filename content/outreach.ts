// Indigenous outreach page (SPEC 7.9, decision record 0007). Draft copy from
// notes of a conversation with the team member leading this work. Anything
// marked `draft: true` needs that person's approval before launch (SPEC
// 12.5). The Nations to name for each region are [TK] until the lead
// confirms them: do not fill them in from a dataset or a guess.
// Image slots stay placeholders until original photography exists (SPEC
// rule 8). Art direction: the natural environment, not the built one.
import { outreachSchema } from '../src/schemas/outreach';

const nationsTK = (region: string) =>
  `[TK: acknowledgement for ${region}, naming the Nations, confirmed by the outreach lead]`;

export const outreach = outreachSchema.parse({
  heroImage: {
    ratio: '21 / 9',
    label: 'British Columbia landscape',
    note: 'Wide view of mountains, forest and water in natural light. No buildings, roads or people.',
  },

  acknowledgement: {
    heading: 'Acknowledging the land',
    paragraphs: [
      'We are grateful to live, work and play in British Columbia, on the lands of the many First Nations who have cared for them since time immemorial, much of it unceded. Our work reaches across the province, and we recognize every Nation whose home this has always been.',
      'We are based in three places:',
    ],
    regions: [
      {
        region: 'Kamloops',
        text: nationsTK('Kamloops'),
        image: {
          ratio: '4 / 3',
          label: 'Kamloops',
          note: 'Dry grassland hills and sage above the Thompson River. No buildings or roads.',
        },
      },
      {
        region: 'Victoria',
        text: nationsTK('Victoria'),
        image: {
          ratio: '4 / 3',
          label: 'Victoria',
          note: 'Rocky shoreline and open ocean, with Garry oaks or arbutus if possible. No buildings.',
        },
      },
      {
        region: 'Vancouver',
        text: nationsTK('Vancouver'),
        image: {
          ratio: '4 / 3',
          label: 'Vancouver',
          note: 'Coast mountains meeting the water, or a forest creek. No city skyline.',
        },
      },
    ],
    draft: true,
  },

  map: {
    caption:
      'As we work with schools, with their agreement, we will add them here.',
    visits: [],
  },

  commitments: {
    heading: 'Our commitments',
    items: [
      'Build relationships with schools in First Nations communities, starting near where we live, before we start projects.',
      'Set quarterly objectives for this work and report on them on this page.',
      "Use a community's name, language or logo only with that community's agreement.",
      'Seek Indigenous representation on our board.',
    ],
    draft: true,
  },
});
