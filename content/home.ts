// Home page sections (SPEC 7.1, record 0004). Copy marked `draft: true` is an
// agent draft built only from ideas in the spec. It shows a visible [TK]
// marker until a human approves it and sets `draft: false`.
import { homeSchema } from '../src/schemas/home';

export const home = homeSchema.parse({
  hero: {
    // Headline and lede from the website frame design (v1). Still draft copy,
    // but the hero shows no draft marker (Reed, Nov 21): approve before launch.
    heading: 'A bridge between BC classrooms and the digital world',
    lede: 'We’re a BC nonprofit helping students, teachers and families understand, question and shape the digital world.',
    teachers: {
      eyebrow: 'For teachers',
      title: 'Talk to us about tech in your classroom',
      action: 'Book a call',
      href: '[TK: teacher destination, pending D26]',
    },
    valleyview: {
      windowTitle: 'valleyview grant',
      title: 'Looking for the Valleyview Grant?',
      command: 'go to the grant',
      href: '/valleyview/',
      closedNote: 'window closed',
      detailLabels: { who: 'who', what: 'what', asks: 'asks', when: 'when' },
    },
    // Original photography (SPEC 8.2): a bridge from each starting region,
    // as prints on the whiteboard. Kamloops first, where we started.
    images: [
      {
        place: 'Kamloops',
        label: 'Overlanders Bridge',
        note: '3:2. Over the Thompson River, under a storm sky.',
        taken: '[TK: date taken]',
      },
      {
        place: 'Victoria',
        label: 'Johnson Street Bridge',
        note: '4:5. From the harbour.',
        taken: '[TK: date taken]',
      },
      {
        place: 'Vancouver',
        label: 'Burrard or Lions Gate Bridge',
        note: '3:2. Deck across the frame, at dusk.',
        taken: '[TK: date taken]',
      },
    ],
  },

  // The team's own line, split across the two worlds.
  question: {
    analog: 'Every student learns how the natural world works.',
    digital: 'What about the digital one?',
  },

  sections: {
    problem: {
      heading: 'Why we exist',
      friction: {
        heading:
          'Learning needs friction. Most technology is built to remove it.',
        body: [
          'Technology is built for convenience: fewer steps, faster answers, less effort. That’s great for work. It’s not as great for learning, which happens in the hard part: the wrong answer, the second try, working out why.',
          'Schools now have digital literacy programs, AI literacy programs and devices in most classrooms. We’re not convinced it all adds up to a generation that understands the technology it depends on.',
        ],
        image: {
          label: 'Friction',
          note: '[TK: photo for the friction idea, Reed to choose]. Original photography, landscape.',
        },
      },
      balance: {
        heading: 'What we’re working toward',
        lede: 'We’re not against technology in schools, and we don’t think it belongs everywhere. We’re looking for the balance between the two.',
        points: [
          {
            title: 'Keep what works',
            text: 'Classrooms stay places for the human, hard parts of learning: talking it through, making things, and sticking with a problem together.',
          },
          {
            title: 'Use devices on purpose',
            text: 'A device comes out when it’s the best tool for the job, not by default, and goes away when it isn’t.',
          },
          {
            title: 'Teach how it works',
            text: 'Help teachers teach the ideas behind technology, without handing control of their classroom to a device or an ed-tech platform.',
          },
        ],
      },
      questions: {
        heading: 'Do you know the answer?',
        lede: 'A few questions about the technology we use every day. Have a guess before you look: that’s the part where the learning happens.',
        count: 5,
        windowTitle: '~/questions',
        prompt: 'have a guess first. then:',
        reveal: 'show the answer',
        hide: 'hide the answer',
        next: 'next question',
      },
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
