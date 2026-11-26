// Valleyview grant home page (SPEC 7.4, decision record 0006). Copy comes
// from the "Year 2 master copy" doc (Nov 21, 2026) and the pillar 4 draft
// goals (Oct 18, 2026). The pillar section states the organization's position,
// so a person must approve it before merge (AGENTS.md).
import { valleyviewSchema } from '../src/schemas/valleyview';

export const valleyview = valleyviewSchema.parse({
  hero: {
    headline: "Pick a hard problem. We'll put $2,000 behind it.",
    // Short form for Home's Valleyview window; not shown on this page.
    award: '$2,000 plus mentorship',
  },

  pillar: {
    label: 'Pillar 4 of our mission',
    title: 'Empower young people to build their ideas now.',
    paragraphs: [
      'Nobody can say for sure what work will look like in ten years. AI, the job market and the paths after high school are all shifting, and a lot of the usual advice is getting harder to trust.',
      'We think the best preparation is pretty old-fashioned. Pick a hard problem and work on it. Building something teaches you to learn fast, get stuck and get unstuck, talk to people you have never met, and keep going when nobody hands you the next step.',
      "So we don't ask young people to wait until they graduate. We back them now, with money, mentors and people who want their idea to work. The Valleyview grant is how we do that today.",
    ],
    goalsHeading: "What we're working toward",
    goals: [
      'Every year, more young people bring us ideas they want to build.',
      'Students we back put the support to work and take their ideas as far as they can.',
      'Young people we mentor stay connected to us after high school, and our network opens doors for them as their ideas grow.',
      'Some of the ideas we back grow into lasting ventures.',
    ],
  },

  current: {
    label: 'Year 2 · 2027',
    heading: 'Apply for the 2027 grant',
    intro:
      "You don't need top grades, a long list of accomplishments or a finished plan.",
    award: [
      {
        title: '$2,000',
        text: 'Put it toward whatever moves your project forward: materials, equipment, software, a course, travel, research.',
      },
      {
        title: 'Mentorship, if you want it',
        text: "Two mentors help with next steps, introduce you to people who can help, or just act as a sounding board. You decide what's useful and when.",
      },
      {
        title: 'Check-ins',
        text: "In return, the recipient checks in with us a few times over the following year: how the money was used and how the project is going, including what didn't work.",
      },
    ],
    eligibility:
      "Any Grade 12 student at Valleyview Secondary who is on track to graduate in June 2027. You don't need to be going to post-secondary, and there's no grade requirement.",
    socialInnovation: [
      'An idea that makes things better for other people, or takes on a problem worth solving. It could be a business, a nonprofit, an app, an event, a program, a campaign or a creative project.',
      'A business is welcome. Just show us who it helps and why that problem matters.',
    ],
    steps: [
      {
        title: 'Apply online',
        text: 'Answer the three questions below and attach anything that helps us see your idea: sketches, screenshots, writing, a prototype, a letter from someone who knows you. No transcript needed.',
      },
      {
        title: 'Hear back',
        text: 'We read every application and invite a shortlist to the next step.',
      },
      {
        title: 'Have a conversation with us',
        text: "Shortlisted students meet with us at Valleyview. Take about 15 minutes to walk us through your answers, then we'll ask questions. We send a template beforehand. Slides are optional.",
      },
      {
        title: 'The award',
        text: 'We tell the recipient in May and present the grant at the Valleyview Awards Banquet in June.',
      },
    ],
    timeline: [
      { when: 'December 1, 2026', what: 'Applications open' },
      { when: 'Early March', what: 'Applications close' },
      { when: 'Late March', what: 'Shortlist notified' },
      { when: 'Last week of April', what: 'Conversations at Valleyview' },
      { when: 'May', what: 'Recipient notified' },
      { when: 'June', what: 'Valleyview Awards Banquet' },
    ],
    questions: [
      'What problem do you want to take on, and why does it matter?',
      'Why are you the right person to work on it?',
      'How would the grant help you make progress?',
    ],
    tipsIntro:
      "These aren't requirements. They're what we look for when we read.",
    tips: [
      {
        title: 'Start with why it matters to you.',
        text: 'Passion is usually what carries a project through the hard parts.',
      },
      {
        title: 'Explain the problem before the solution.',
        text: "We might not know this area well. Tell us who it affects and what's at stake.",
      },
      {
        title: 'Think big, then show the first steps.',
        text: 'Share the bigger vision and what the first six months could look like (roughly May to November 2027).',
      },
      {
        title: 'Tell us why you.',
        text: 'The grant goes to a person as much as an idea. What do you bring, and what have you already tried?',
      },
      {
        title: 'Be specific about the money.',
        text: 'Show us how the $2,000 and any mentorship would help you get moving.',
      },
    ],
    apply: {
      heading: 'Apply December 1 to early March',
      text: 'Applications open online on December 1, 2026 and close in early March. A rough idea is enough to start.',
      pending: 'The link to the application will be here when it opens.',
    },
    faq: [
      {
        question: "What if my idea isn't fully formed yet?",
        answer:
          "Apply anyway. A rough idea and a clear sense of why it matters is enough to start. Ideas usually get sharper between the application and the conversation, and that's a good sign.",
      },
      {
        question: 'Do I have to give a pitch?',
        answer:
          "Not a formal one. If you're shortlisted, you'll walk us through your answers to the three questions and then we'll talk. We'll send a template ahead of time so you know what to prepare.",
      },
      {
        question: 'Do I need my transcript?',
        answer: "No. This year we're only looking at you and your idea.",
      },
      {
        question: 'Does it have to be a business?',
        answer:
          "No. It can be, but there's no requirement to make money. It should help other people or take on a problem that matters.",
      },
      {
        question: 'Can I apply with a friend or a group?',
        answer:
          'Yes, but the money goes to one person, the one who applies. Tell us how you work together: who does what, how you make decisions and how you handle disagreements.',
      },
      {
        question: "Can I apply with something I've already started?",
        answer:
          "Yes. Something already in progress shows initiative. Include whatever helps us see what you've done so far.",
      },
      {
        question: 'Do I need reference letters?',
        answer:
          'No, but they can help. They can come from anyone who knows you well: a teacher, coach, employer, friend or family member.',
      },
      {
        question: 'Does the project have to be finished in a year?',
        answer: 'No. It can be the first steps of something much bigger.',
      },
    ],
    // Founders confirmed by Reed, November 26, 2026.
    founders: {
      text: 'The Valleyview Social Innovation Grant was founded in 2025 by Reed McIlwain and Keaton Allan. It is now a program of the {organization}.',
      link: { label: 'Read more about them on our team page', href: '/team/' },
    },
    privacy:
      'We only ask for what we need to understand you and your idea. Applications are read only by the grant team.',
  },
});
