// Indigenous outreach page (SPEC 7.9, decision record 0007). Copy drafted
// from conversations with the team. It states the organization's position,
// so a person approves it in review, and the outreach lead approves it
// before launch (SPEC 12.5).
// Region acknowledgements are drafted from the standard public wording for
// each place (Kamloops: City of Kamloops, Thompson Rivers University and
// Tk'emlúps te Secwépemc's own template; Victoria: City of Victoria and the
// University of Victoria; Vancouver: City of Vancouver, 2014 council motion).
// The outreach lead confirms the Nations, the spellings and the wording
// before launch. Victoria is under the Douglas Treaties, so its wording does
// not say "unceded".
// Photos are original (SPEC rule 8), of the natural environment rather than
// the built one. The footer credits the photographer once, for the whole
// site. Each caption says where and when the photo was really taken, since
// none is of the city itself; each place is within the territories its
// acknowledgement names.
import lynnValleyFalls from '../src/assets/photos/lynn-valley-falls.jpg';
import mountPaulMountPeter from '../src/assets/photos/mount-paul-mount-peter.jpg';
import swartzBayFerry from '../src/assets/photos/swartz-bay-ferry.jpg';
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
        photo: {
          src: mountPaulMountPeter,
          alt: 'Low sun lights the rocky face of a grassland hill dotted with pines, under pink and grey cloud.',
          caption: 'Mount Paul and Mount Peter, Kamloops',
          taken: 'May 2025',
        },
      },
      {
        region: 'Victoria',
        text: 'Victoria is on the traditional territory of the lək̓ʷəŋən (Lekwungen) peoples, the Songhees and Xʷsepsəm (Esquimalt) Nations. We also recognize the W̱SÁNEĆ peoples, whose relationships with this land continue today.',
        photo: {
          src: swartzBayFerry,
          alt: 'A pink and orange sky over calm water, between forested islands in silhouette.',
          caption: 'Leaving Swartz Bay by ferry',
          taken: 'January 2025',
        },
      },
      {
        region: 'Vancouver',
        text: 'Vancouver is on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish) and səlilwətaɬ (Tsleil-Waututh) Nations.',
        photo: {
          src: lynnValleyFalls,
          alt: 'A waterfall pours through a narrow, rocky canyon between dense cedar and fir.',
          caption: 'Lynn Valley, North Vancouver',
          taken: 'January 2025',
        },
      },
    ],
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
      'Our outreach with Indigenous communities falls under this pillar. Our commitments are only credible if they rest on face-to-face relationships with Indigenous schools and communities, built and kept in good faith. We are starting where we live, in the communities we already call home, and will grow from there.',
    items: [
      'We will offer guidance on digital technology to Indigenous communities that ask for it, to support their own teaching and learning.',
      "We will work on each community's terms. We will use a community's name, language or logo only with their agreement, and we will follow their wishes on privacy, data and the use of AI.",
      'We will seek out and amplify Indigenous perspectives on digital technology, including on the resources we make and the work we do. We will work with communities to find solutions and arrangements that work for them. We will also seek Indigenous representation on our board.',
      'We will set quarterly objectives for our outreach with Indigenous communities, and update this page to report on them and on what we have done.',
    ],
  },
});
