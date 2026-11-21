// Home page sections (SPEC 7.1, record 0004). Copy marked `draft: true` is an
// agent draft built only from ideas in the spec. It shows a visible [TK]
// marker until a human approves it and sets `draft: false`.
import { homeSchema } from '../src/schemas/home';

export const home = homeSchema.parse({
  hero: {
    // The team's own line, not an agent draft.
    heading:
      'Every student learns how the natural world works. What about the digital one?',
    lede: 'We are a BC nonprofit that brings people who work in technology together with teachers and schools. We help classrooms stay grounded in the analog world while teaching the digital one on purpose.',
    ctas: [
      {
        label: 'For teachers',
        href: '[TK: teacher destination, pending D26]',
      },
      {
        label: 'Students and parents: the Valleyview Grant',
        href: '/valleyview/',
      },
    ],
    // Original photography (SPEC 8.2): one bridge per starting region.
    images: [
      {
        ratio: '2 / 3',
        label: 'Kamloops bridge',
        note: 'Original photo of a bridge in Kamloops.',
      },
      {
        ratio: '2 / 3',
        label: 'Vancouver bridge',
        note: 'Original photo of a bridge in Vancouver.',
      },
      {
        ratio: '2 / 3',
        label: 'Victoria bridge',
        note: 'Original photo of a bridge in Victoria.',
      },
    ],
    draft: true,
  },

  sections: {
    problem: {
      heading: 'Why we exist',
      body: [
        'Technology shapes how students learn and how teachers teach. The companies that build classroom tools have their own business interests, and those do not always match what students need.',
        'Schools deserve an independent voice on technology, one that is not selling anything.',
      ],
      cta: { label: 'About us', href: '/about/' },
      draft: true,
    },

    mission: {
      heading: 'What we do',
      body: ['Our work rests on four pillars, set by our board.'],
      cta: { label: 'Our mission and how we work', href: '/about/' },
      draft: true,
    },

    map: {
      heading: 'BC is our mandate',
      body: [
        'We are a BC organization working on a BC problem. Our work is for teachers, students and communities across the province: in the North, the Rockies, rural towns and Indigenous schools.',
        'We are starting where we already have people, and growing from there.',
      ],
      regionsHeading: 'Where we are starting',
      cta: { label: 'Get in touch from anywhere in BC', href: '/contact/' },
      draft: true,
    },

    teachers: {
      heading: 'For teachers',
      body: [
        'We work with teachers, school leaders and district staff. We offer Pro-D sessions, workshops and school visits.',
        'Whether you teach in BC or somewhere else, we would like to hear from you.',
      ],
      cta: {
        label: 'Start a conversation',
        href: '[TK: teacher destination, pending D26]',
      },
      draft: true,
    },

    valleyview: {
      heading: 'The Valleyview Social Innovation Grant',
      body: [
        'A grant for Grade 12 students at Valleyview who have an idea and want to build it now. Recipients get funding and mentorship, and they agree to follow-up that shows how the grant helped them learn.',
      ],
      questionsHeading: 'What we ask you',
      cta: { label: 'Read about the grant', href: '/valleyview/' },
      draft: true,
    },

    outreach: {
      heading: 'Indigenous outreach',
      body: [
        '[TK: commitment to Indigenous outreach, copy from the team member leading this work]',
      ],
      // No link until the outreach page exists (#36).
      draft: false,
    },

    partnerships: {
      heading: 'Partnerships',
      body: [
        'We work alongside organizations, businesses and groups that want better outcomes for students, teachers and parents. We see ourselves as one part of a network, not a competitor.',
        'If that sounds like you, write to us.',
      ],
      draft: true,
    },
  },

  // Teachers above Valleyview is a lean, not settled (D30).
  order: [
    'problem',
    'mission',
    'map',
    'teachers',
    'valleyview',
    'outreach',
    'partnerships',
  ],
});
