// Indigenous outreach page (SPEC 7.9, decision record 0007). Draft copy from
// notes of conversations with the team. Anything marked `draft: true` needs
// the outreach lead's approval before launch (SPEC 12.5).
// Region acknowledgements are drafted from the standard public wording for
// each place (Kamloops: City of Kamloops, Thompson Rivers University and
// Tk'emlúps te Secwépemc's own template; Victoria: City of Victoria and the
// University of Victoria; Vancouver: City of Vancouver, 2014 council motion).
// The outreach lead confirms the Nations, the spellings and the wording
// before launch. Victoria is under the Douglas Treaties, so its wording does
// not say "unceded".
// Image slots stay placeholders until original photography exists (SPEC
// rule 8). Art direction: the natural environment, not the built one.
import { outreachSchema } from '../src/schemas/outreach';

export const outreach = outreachSchema.parse({
  acknowledgement: {
    heading: 'Acknowledging the land',
    paragraphs: [
      'We are grateful to live, work and play in British Columbia. This is the land of many First Nations, who have cared for it since time immemorial. Much of it was never ceded.',
      'Our work reaches across the province. We recognize every Nation whose home this has always been, and we want our work to honour that.',
    ],
    regionsHeading: 'Where we are based',
    regions: [
      {
        region: 'Kamloops',
        text: 'Kamloops is on the traditional and unceded territory of Tk’emlúps te Secwépemc, within Secwepemcúl’ecw, the ancestral lands of the Secwépemc Nation.',
        image: {
          ratio: '4 / 3',
          label: 'Kamloops',
          note: 'Dry grassland hills and sage above the Thompson River. No buildings or roads.',
        },
      },
      {
        region: 'Victoria',
        text: 'Victoria is on the traditional territory of the lək̓ʷəŋən (Lekwungen) peoples, the Songhees and Xʷsepsəm (Esquimalt) Nations. We also recognize the W̱SÁNEĆ peoples, whose relationships with this land continue today.',
        image: {
          ratio: '4 / 3',
          label: 'Victoria',
          note: 'Rocky shoreline and open ocean, with Garry oaks or arbutus if possible. No buildings.',
        },
      },
      {
        region: 'Vancouver',
        text: 'Vancouver is on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish) and səlilwətaɬ (Tsleil-Waututh) Nations.',
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
      'As we work with Indigenous schools, Nations and bands, with their agreement, we will add them here.',
    visits: [],
  },

  commitments: {
    heading: 'Our commitments',
    // The pillar's wording comes from content/organization.ts.
    pillar: { number: 2, label: 'Pillar 2 of our mission' },
    foundation:
      'Our outreach with Indigenous communities falls under this pillar. Its foundation is lasting, face-to-face relationships with Indigenous schools and communities. We start near where we live, and we listen before we start any project.',
    items: [
      'Offer guidance on digital technology to Indigenous communities that ask for it, to support their own teaching and learning.',
      "Work on each community's terms. We use a community's name, language or logo only with its agreement, and we follow its wishes on privacy, data and the use of AI.",
      'Seek out Indigenous perspectives on how technology comes into classrooms and communities, so that it comes in a sustainable way. Where communities want their perspectives amplified, help those voices reach teachers across BC. Seek Indigenous representation on our board.',
      'Set quarterly objectives for our outreach with Indigenous communities. Report on them, and on what we have done, by updating this page.',
    ],
    draft: true,
  },
});
