// Teachers page (D26). Draft copy from Reed's direction in a live session on
// November 23, 2026; it states the organization's position, so it needs
// approval by a person (SPEC 12.5). Launch has two or three lessons.
// "Password Cyber-Sleuths" is the first real one; its details are [TK]. The
// other two are made up to show the layout and version history, and carry a
// visible [TK] label. Their topics follow the Home question bank.
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
        // The first real lesson; only its name is known so far.
        slug: 'password-cyber-sleuths',
        title: 'Password Cyber-Sleuths',
        summary: '[TK: what students do and learn, from the lesson plan]',
        grades: '[TK: grade band]',
        subjects: ['[TK: subjects it fits]'],
        length: '[TK: class time]',
        devices: '[TK: devices needed]',
        versions: [
          {
            version: '1.0',
            // Stand-in until the file is published.
            date: '2026-11-24',
            notes: 'First version.',
            files: [
              {
                label: 'Lesson plan',
                name: 'lesson-plan.pdf',
                href: pending,
              },
            ],
          },
        ],
      },
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
    ],
  },
});
