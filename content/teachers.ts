// Teachers page (D26). Draft copy from Reed's direction in a live session on
// November 23, 2026; it states the organization's position, so it needs
// approval by a person (SPEC 12.5). The lessons below are examples that show
// the layout: every one is made up and carries a visible [TK] label. Topics
// follow the ideas in the Home question bank.
import { teachersSchema } from '../src/schemas/teachers';

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

  call: {
    eyebrow: 'Book a call',
    title: 'Talk with us about your classroom',
    text: 'Ask us questions, tell us what you are seeing with technology at school, or start planning a Pro-D session or school visit.',
    action: 'Choose a time',
    href: '[TK: scheduler link, once the tool is chosen (D26)]',
    privacyNote:
      'Booking opens [TK: scheduler name], a separate service with its own privacy notice. This website collects nothing.',
    emailIntro: 'Rather write?',
  },

  resources: {
    heading: 'Lessons to use',
    intro:
      'Lessons we have written for teachers. Download them, use them, change them to fit your class. They are free, and shared under CC BY 4.0.',
    items: [
      {
        slug: 'how-a-web-page-reaches-you',
        title: 'How a web page reaches your screen',
        summary:
          'Students trace one web page from a server to their screen, and find out who handles their request on the way.',
        grades: 'Grades 6 to 8',
        subjects: ['Science', 'ADST'],
        length: 'One 60-minute class',
        format: 'PDF',
        file: '[TK: file, once the lesson exists]',
        pages: 8,
        size: '420 kb',
        updated: '2026-11-20',
        example: true,
      },
      {
        slug: 'where-the-internet-lives',
        title: 'Where the internet lives',
        summary:
          'Cables, data centres and the power they use. Students map the physical internet that runs through BC.',
        grades: 'Grades 8 to 10',
        subjects: ['Social Studies', 'Science'],
        length: 'Two 60-minute classes',
        format: 'PDF',
        file: '[TK: file, once the lesson exists]',
        pages: 12,
        size: '1840 kb',
        updated: '2026-11-20',
        example: true,
      },
      {
        slug: 'who-pays-for-free-apps',
        title: 'Who pays for free apps?',
        summary:
          'Students follow the money behind an app they use every day, and decide what they are trading for it.',
        grades: 'Grades 9 to 12',
        subjects: ['Social Studies', 'Career Education'],
        length: 'One 60-minute class',
        format: 'Slides',
        file: '[TK: file, once the lesson exists]',
        pages: 22,
        size: '960 kb',
        updated: '2026-11-20',
        example: true,
      },
      {
        slug: 'what-a-chatbot-is-doing',
        title: 'What a chatbot is doing when it answers',
        summary:
          'A no-device lesson. Students play the part of a language model with paper and dice, then talk about what that means for trust.',
        grades: 'Grades 10 to 12',
        subjects: ['English Language Arts', 'Math'],
        length: 'One 75-minute class',
        format: 'PDF',
        file: '[TK: file, once the lesson exists]',
        pages: 6,
        size: '310 kb',
        updated: '2026-11-20',
        example: true,
      },
    ],
  },
});
