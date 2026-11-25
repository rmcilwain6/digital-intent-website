// Home page sections (SPEC 7.1, record 0004). Copy marked `draft: true` is an
// agent draft built only from ideas in the spec. It shows a visible [TK]
// marker until a human approves it and sets `draft: false`.
import { brand } from '../src/brand/brand.config';
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
      // The teachers page for now (D26). A booking link may replace it.
      action: 'See what we offer',
      href: '/teachers/',
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
      lede: 'We see a set of challenges around technology in schools right now. None of them has a simple answer, and we think each one needs careful, intentional work.',
      challenges: [
        {
          title: 'More devices haven’t meant better learning',
          text: 'Schools had good reasons to bring devices in. But most software is built to make things easier and to hold our attention, and learning happens in the hard part: the wrong answer, the second try, working it out with the people in the room.',
        },
        {
          title: 'Using technology isn’t the same as understanding it',
          text: 'Students spend hours a day on screens, and many are fluent users. That isn’t the same as knowing how any of it works: the hardware, the networks, where data goes, or who pays for the free apps.',
        },
        {
          title: 'AI changes the ground under all of it',
          text: 'It arrived in classrooms almost overnight, and it touches how students learn, how we know what they’ve learned, how anyone finds information, and what work students are preparing for.',
        },
      ],
      questions: {
        heading: 'Could you answer these?',
        lede: 'We think every student should graduate able to answer questions like these. Have a guess before you look.',
        count: 5,
        windowTitle: '~/questions',
        prompt: 'have a guess first. then:',
        reveal: 'show the answer',
        hide: 'hide the answer',
        next: 'next question',
      },
      closing: {
        heading: 'Why this is hard',
        body: 'None of this has an easy fix, partly because the people who build technology and the people who teach often see it differently. They want different things from it, for different reasons. Finding what’s best for students means bringing those views together. That’s the bridge we’re trying to build.',
      },
      draft: false,
    },

    // The mission and the pillars are in content/organization.ts, shared with
    // About. `focus` follows the pillars' order. Its items are stand-ins
    // built from pages we have; Reed will choose the real ones (Nov 24).
    mission: {
      heading: 'What we do',
      focusHeading: 'What we focus on',
      labels: { now: 'Now', next: 'In the works' },
      focus: [
        {
          highlight: 'independent',
          now: {
            title: 'This website',
            text: 'Built the way we think technology should be: fast, accessible and private, with no tracking and no cookies.',
            cta: { label: 'How we handle privacy', href: '/privacy/' },
          },
          next: {
            title: 'Our positions, published in the open',
            text: '[TK: our first published position, once the board signs off]',
          },
        },
        {
          highlight: 'face-to-face',
          now: {
            title: 'Partnerships across BC',
            text: 'Whether you teach, lead a school or run a community group, we would like to hear from you.',
            cta: { label: 'Get in touch', href: '/contact/' },
          },
          next: {
            title: 'Book a call with us',
            text: '[TK: when teachers can book a call]',
          },
        },
        {
          highlight: 'shape',
          now: {
            title: 'Lessons for teachers',
            text: 'Free lessons to download, use and change to fit your class.',
            cta: { label: 'What we offer teachers', href: '/teachers/' },
          },
          next: {
            title: 'Technology camps, with the Big Little Science Centre',
            text: '[TK: what the camps are, who they are for, and when they run]',
          },
        },
        {
          highlight: 'now',
          now: {
            title: 'The Valleyview Social Innovation Grant',
            text: 'For Grade 12 students at Valleyview who have an idea and want to build it now.',
            cta: { label: 'Read about the grant', href: '/valleyview/' },
          },
          next: {
            title: '[TK: what comes next for this pillar]',
          },
        },
      ],
      controls: {
        label: 'Choose a focus',
        previous: 'Previous focus',
        next: 'Next focus',
      },
      cta: { label: 'More about our mission', href: '/about/' },
      approach:
        'There is no single fix for any of this. We expect to try many things at once: workshops for teachers, school visits, grants for students, and partnerships across the province. Then we keep what works.',
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
      draft: false,
    },

    // The Teacher Library band (#61): one library card is the call to
    // action. Booking a call stays with the hero's teachers card.
    library: {
      heading: `The ${brand.shortName} Teacher Library`,
      body: [
        'We want to be a place teachers come back to: for tips, lessons and training materials that build your own skills with digital technology, so you can bring them into your class.',
        'Everything in it is free to use, change and share. There are no due dates. Take what helps and make it fit your students.',
        'We add to the library as we go. It starts with a lesson or two, and grows.',
      ],
      card: {
        kind: 'library card',
        name: 'Teacher Library',
        note: 'open to everyone · cc by 4.0',
        holder: 'You',
        holderLabel: 'cardholder',
        // Made up: a library card number, drawn as a barcode.
        number: '2 9412 00026 0001',
        action: 'Browse the Teacher Library',
        href: '/teachers/#library',
      },
      draft: false,
    },

    valleyview: {
      heading: 'The Valleyview Social Innovation Grant',
      body: [
        'A grant for Grade 12 students at Valleyview who have an idea and want to build it now. Recipients get funding and mentorship, and they agree to follow-up that shows how the grant helped them learn.',
      ],
      questionsHeading: 'What we ask you',
      cta: { label: 'Read about the grant', href: '/valleyview/' },
      draft: false,
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
      cta: { label: 'Write to us', href: '/contact/' },
      draft: false,
    },
  },

  // The library (for teachers) above Valleyview is a lean, not settled (D30).
  order: [
    'problem',
    'mission',
    'map',
    'library',
    'valleyview',
    'outreach',
    'partnerships',
  ],
});
