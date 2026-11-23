// Teachers page (D26). Draft copy from Reed's direction in a live session on
// November 23, 2026; it states the organization's position, so it needs
// approval by a person (SPEC 12.5). The lessons below are examples that show
// the layout: every one is made up, including its versions and files, and
// carries a visible [TK] label. Topics follow the ideas in the Home question
// bank.
import { teachersSchema } from '../src/schemas/teachers';

const pending = '[TK: file, once the lesson exists]';

export const teachers = teachersSchema.parse({
  approach: {
    heading: 'How we work with you',
    items: [
      {
        title: 'We help you build your own skills.',
        text: 'Our first job is helping teachers get stronger with digital technology: how it works, who builds it and why. What you understand well, your students will too.',
      },
      {
        title: 'It fits what you already teach.',
        text: 'We are not asking you to teach a new subject. We show where digital literacy already fits in the courses you teach, and share lessons that slot into them.',
      },
      {
        title: 'We help protect your classroom.',
        text: 'A classroom works best when every device in it has a reason to be there. Often that means fewer screens, used on purpose. We want to back you up on that.',
        highlight: 'fewer screens, used on purpose.',
      },
    ],
  },

  lessons: {
    heading: 'Lessons to use',
    intro:
      'Lessons we have written for teachers. Download them, use them, change them to fit your class. They are free, and shared under CC BY 4.0. When we improve a lesson we publish a new version, and earlier versions stay here.',
    items: [
      {
        slug: 'how-a-web-page-reaches-you',
        title: 'How a web page reaches your screen',
        tab: 'How the web works',
        summary:
          'Students trace one web page from a server to their screen, and find out who handles their request on the way. They act out the journey as a class, passing paper “packets” from desk to desk.',
        grades: 'Grades 6 to 8',
        subjects: ['Science', 'ADST'],
        length: 'One 60-minute class',
        devices: 'One screen for the teacher',
        versions: [
          {
            version: '1.1',
            date: '2026-11-20',
            notes: 'Adds a student handout and fixes the diagram on page 4.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.pdf',
                href: pending,
                pages: 8,
                size: '420 kb',
              },
              {
                label: 'Slides',
                name: 'slides.pptx',
                href: pending,
                pages: 14,
                size: '2310 kb',
              },
              {
                label: 'Student handout',
                name: 'student-handout.pdf',
                href: pending,
                pages: 2,
                size: '180 kb',
              },
            ],
          },
          {
            version: '1.0',
            date: '2026-10-28',
            notes: 'First version.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.pdf',
                href: pending,
                pages: 8,
                size: '410 kb',
              },
              {
                label: 'Slides',
                name: 'slides.pptx',
                href: pending,
                pages: 14,
                size: '2290 kb',
              },
            ],
          },
        ],
        example: true,
      },
      {
        slug: 'where-the-internet-lives',
        title: 'Where the internet lives',
        summary:
          'Cables, data centres and the power they use. Students map the physical internet that runs through BC, and work out what it takes to keep it running.',
        grades: 'Grades 8 to 10',
        subjects: ['Social Studies', 'Science'],
        length: 'Two 60-minute classes',
        devices: 'None',
        versions: [
          {
            version: '1.0',
            date: '2026-11-20',
            notes: 'First version.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.pdf',
                href: pending,
                pages: 12,
                size: '1840 kb',
              },
              {
                label: 'Printable map',
                name: 'printable-map.pdf',
                href: pending,
                pages: 1,
                size: '650 kb',
              },
            ],
          },
        ],
        example: true,
      },
      {
        slug: 'who-pays-for-free-apps',
        title: 'Who pays for free apps?',
        tab: 'Free apps',
        summary:
          'Students follow the money behind an app they use every day, and decide what they are trading for it.',
        grades: 'Grades 9 to 12',
        subjects: ['Social Studies', 'Career Education'],
        length: 'One 60-minute class',
        devices: 'None',
        versions: [
          {
            version: '2.0',
            date: '2026-11-18',
            notes:
              'Rewritten around a card-sorting activity instead of a worksheet.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.docx',
                href: pending,
                pages: 6,
                size: '95 kb',
              },
              {
                label: 'Card set',
                name: 'card-set.pdf',
                href: pending,
                pages: 4,
                size: '520 kb',
              },
            ],
          },
          {
            version: '1.1',
            date: '2026-10-30',
            notes: 'Updates the app examples.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.docx',
                href: pending,
                pages: 5,
                size: '88 kb',
              },
            ],
          },
          {
            version: '1.0',
            date: '2026-10-14',
            notes: 'First version.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.docx',
                href: pending,
                pages: 5,
                size: '86 kb',
              },
            ],
          },
        ],
        example: true,
      },
      {
        slug: 'what-a-chatbot-is-doing',
        title: 'What a chatbot is doing when it answers',
        tab: 'Chatbots',
        summary:
          'A no-device lesson. Students play the part of a language model with paper and dice, then talk about what that means for trust.',
        grades: 'Grades 10 to 12',
        subjects: ['English Language Arts', 'Math'],
        length: 'One 75-minute class',
        devices: 'None',
        versions: [
          {
            version: '1.0',
            date: '2026-11-20',
            notes: 'First version.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.pdf',
                href: pending,
                pages: 6,
                size: '310 kb',
              },
              {
                label: 'Word cards',
                name: 'word-cards.pdf',
                href: pending,
                pages: 3,
                size: '240 kb',
              },
            ],
          },
        ],
        example: true,
      },
    ],
  },
});
