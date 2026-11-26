// Teachers page (D26). Draft copy from Reed's direction in a live session on
// November 23, 2026; it states the organization's position, so it needs
// approval by a person (SPEC 12.5). Launch has two or three lessons; each
// lesson's files live under public/resources/<slug>/v<version>/.
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
        text: 'We show where digital literacy already fits in the courses you teach, and share lessons that slot into them.',
      },
      {
        title: 'We help protect your classroom.',
        text: 'A classroom works best when every device in it has a reason to be there. Often that means fewer screens, used on purpose. We want to back you up on that.',
        highlight: 'fewer screens, used on purpose.',
      },
    ],
  },

  lessons: {
    // Matches the library card on Home, which links here (#61).
    heading: 'Teacher Library',
    intro:
      'Lessons we have written for teachers. Download them, use them, change them to fit your class. They are free, and shared under CC BY 4.0. When we improve a lesson we publish a new version, and earlier versions stay here.',
    items: [
      {
        // From the v1.0 printer-friendly PDF (Nov 23, 2026).
        slug: 'password-cyber-sleuths',
        title: 'Password Cyber-Sleuths',
        intent: 'build a password that is strong and easy to remember',
        summary:
          'Students become detectives and work out for themselves what makes a password both strong and good. Pairs test made-up passwords in a password checker, record how long each would take to crack, and build a class checklist. Guideline lengths follow the Canadian Centre for Cyber Security.',
        grades: 'Grades 3 to 9',
        approach: 'Inquiry-based',
        devices: 'A device with a browser per pair',
        tool: '[TK: passwordmonster.com or bitwarden.com/password-strength? The PDF names both]',
        versions: [
          {
            version: '1.0',
            date: '2026-11-23',
            notes: 'First version.',
            files: [
              {
                label: 'Teacher guide and student sheet',
                name: 'password-cyber-sleuths-v1.0.pdf',
                href: '/resources/password-cyber-sleuths/v1.0/password-cyber-sleuths-v1.0.pdf',
                pages: 2,
                size: '216 kb',
              },
            ],
          },
        ],
      },
    ],
  },
});
