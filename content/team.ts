// Team member entries (SPEC 7.3). A member's details are committed only after
// that member has agreed to them, because git history is public and
// permanent. Anything still pending is marked [TK: ...].
import { brand } from '../src/brand/brand.config';
import { regionDistrictsSchema, teamSchema } from '../src/schemas/team';

// The school districts outlined on the map around each starting region.
// Modest on purpose: the districts nearest each city.
export const regionDistricts = regionDistrictsSchema.parse({
  Kamloops: [73], // Kamloops-Thompson
  Victoria: [61, 62, 63], // Greater Victoria, Sooke, Saanich
  Vancouver: [39], // Vancouver
});

export const team = teamSchema.parse([
  {
    name: 'Reed McIlwain',
    photo: {
      src: '/team/reed-mcilwain.webp',
      alt: 'Reed McIlwain smiling on a snowy riverside path, with mountains in the background.',
    },
    role: 'Executive Director',
    place: 'Vancouver',
    alsoIn: ['Kamloops', 'Victoria'],
    // Bio approved by Reed as a first version, Nov 26, 2026.
    focus:
      'Leads our day-to-day work and is building our community in Vancouver, Victoria and Kamloops.',
    work: [
      {
        title: 'Photographer and owner',
        organization: {
          name: 'Evryday Archive Co',
          logo: { src: '/team/logos/everyday-archive.webp' },
        },
      },
    ],
    education: [
      {
        program: 'Bachelor of Software Engineering',
        school: {
          name: 'University of Victoria',
          logo: { src: '/team/logos/uvic.webp' },
        },
      },
    ],
    bio: `Reed grew up in Kamloops and studied software engineering at the University of Victoria. After graduating, he worked as a software developer at Shift, a tech company in Victoria. Through school and his career, he has mixed roles across technology and education: technology coordinator for the EUReKA! Science Program, helping deliver material for UVic courses, and mentoring students and building a co-op program at Shift. He later left software to start Evryday Archive Co, his photography business.

Before founding Digital Intent, Reed volunteered and did contract work at the Big Little Science Centre in Kamloops. Working with kids there, he saw firsthand the power of hands-on, interactive learning, and where technology does and does not belong in teaching. He also saw a gap. Kids today are growing up inundated with technology, yet their digital literacy and skills are not rising with that exposure. From his own experience teaching technology, Reed knows how hard it is to teach well, especially in stretched classrooms where students have very different needs.

As executive director, Reed wants to bridge the worlds of technology and education. That means helping teachers decide when technology makes sense in their classroom, when it doesn’t, and when their own instincts about how kids learn are right. Sometimes the best choice is to keep technology out. Most of all, it means helping teachers become stronger, more confident technology users themselves, so they can bring digital skills into the lessons they already teach.

Outside of work, Reed loves photography and travel. He splits his time between Vancouver, Victoria and Kamloops, the three places he calls home and where we are building our community first. He tries never to take for granted how lucky he is to live somewhere so beautiful.`,
  },
  {
    name: 'Carter Recchi',
    photo: {
      src: '/team/carter-recchi.webp',
      alt: 'Carter Recchi smiling on a rocky shoreline, with the ocean in the background.',
    },
    role: 'Board Member',
    place: 'Kamloops',
    // Focus drafted from Carter's bio, Nov 26, 2026: needs Carter's approval.
    focus:
      'Brings a classroom teacher’s view, connecting our technology experts with the realities of teaching and learning.',
    work: [
      {
        title: 'Science and chemistry teacher',
        organization: {
          name: 'School District No. 73 (Kamloops/Thompson)',
          logo: { src: '/team/logos/sd73.webp' },
        },
      },
    ],
    education: [
      {
        program: [
          'Bachelor of Science in Chemical Biology',
          'Bachelor of Education in STEM Education',
        ],
        school: {
          name: 'Thompson Rivers University',
          logo: { src: '/team/logos/tru.webp' },
        },
      },
    ],
    // Carter's own bio, supplied by Reed, Nov 26, 2026.
    bio: `With a background in chemical biology, Carter is a science and chemistry teacher in Kamloops, where he teaches junior science, chemistry, and IB Chemistry. He brings five years of teaching experience to our board in both rural and urban schools. Before becoming a teacher, Carter was the Director of the EUReKA! Science Program at TRU where he oversaw a team of university students to create, organize, and run the science-based summer camp, reaching students from communities in and around Kamloops.

Through his experience in education, he has seen firsthand the growing gap between students’ access to technology and their ability to understand, use, and troubleshoot it effectively. He believes technology should be more than a means of consumption; it should be a tool for problem-solving, creativity, and discovery.

As a board member of Digital Intent, Carter brings the perspective of a classroom educator, helping bridge the gap between our technology experts and the realities of teaching and learning. He believes teachers shouldn’t have to become technology experts to provide meaningful technology education. Instead, they need accessible resources, practical guidance, and opportunities to learn that empower them to bring these skills into their classrooms. He hopes to help Digital Intent make that possible, supporting educators so they can better prepare students for an increasingly digital world.

Outside the classroom, he enjoys spending time outdoors, playing tabletop games, listening to music, and cooking.`,
  },
  {
    name: 'Keaton Allan',
    photo: {
      src: '/team/keaton-allan.webp',
      alt: 'Keaton Allan smiling in a suit and tie, in front of a grey backdrop.',
    },
    role: 'Board Member',
    place: 'Kamloops',
    // Draft from Reed's notes, Nov 26, 2026: needs Keaton's approval.
    focus:
      'Looks after the Valleyview Grant, which backs Grade 12 students at Valleyview Secondary with money and mentorship.',
    work: [
      {
        title: 'Natural Resources Manager',
        organization: {
          name: 'K’en T’em Limited Partnership',
          logo: { src: '/team/logos/ken-tem.webp' },
        },
      },
    ],
    education: [
      {
        program: 'Natural Resource Sciences',
        school: {
          name: 'Thompson Rivers University',
          logo: { src: '/team/logos/tru.webp' },
        },
      },
    ],
    // Bio as supplied by Reed, Nov 26, 2026, lightly edited: needs Keaton's
    // approval.
    bio: `Keaton graduated from Valleyview Secondary in 2016. He studied natural resource sciences at Thompson Rivers University from 2016 to 2020.

In his career, Keaton has blended environmental services, operational excellence and meaningful Indigenous consultation within resource extraction industries. He now works as Natural Resources Manager at K’en T’em Limited Partnership.`,
  },
  {
    name: 'Carolyn Dahl',
    photo: {
      src: '/team/carolyn-dahl.webp',
      alt: 'Carolyn Dahl smiling in a graduation gown, with the water in the background.',
    },
    role: 'Board Member',
    place: 'Vancouver',
    // Draft copy from Reed's notes, Nov 26, 2026: needs Carolyn's approval.
    focus:
      'Brings the view of a primary teacher, from kindergarten to Grade 3.',
    work: [
      {
        title: 'Teacher on call',
        organization: {
          name: 'Vancouver School Board',
          logo: { src: '/team/logos/vsb.webp' },
        },
      },
    ],
    education: [
      {
        program: 'Bachelor of Education',
        school: {
          name: 'Vancouver Island University',
          logo: { src: '/team/logos/viu.webp' },
        },
      },
    ],
    bio: `Carolyn is a primary teacher who focuses on kindergarten to Grade 3. She earned her Bachelor of Education at Vancouver Island University and lived in Nanaimo for several years. She now lives in Vancouver, where she is a teacher on call with the Vancouver School Board (School District 39).`,
  },
  {
    name: 'Nicole Peverley',
    photo: {
      src: '/team/nicole-peverley.webp',
      alt: 'Nicole Peverley smiling in front of a red brick wall.',
    },
    role: 'Board Member',
    place: 'Victoria',
    // Bio worked through with Reed, Nov 26, 2026: needs Nicole's approval.
    focus:
      'Builds and maintains the tools we use, and helps shape our technology curriculum.',
    work: [
      {
        title: 'Senior Software Developer',
        organization: {
          name: 'Shift',
          logo: { src: '/team/logos/shift.webp' },
        },
      },
    ],
    education: [
      {
        program: 'Bachelor of Software Engineering',
        school: {
          name: 'University of Victoria',
          logo: { src: '/team/logos/uvic.webp' },
        },
      },
    ],
    bio: `A love of problem solving drew Nicole to technology as a kid, and it has kept her there. She studied software engineering at the University of Victoria and is now a senior software developer at Shift in Victoria. She started there part time as a student and has worked there full time for five years, where she mentors co-op students.

Since starting her career, Nicole has worked to bring more women into STEM, and into software development in particular. She has judged and mentored at hackathons such as cmd-f at UBC and Toast Dash, and has helped out with iWEST, which supports women in STEM. She has also mentored and judged for UVic’s Inspire program, where students build software for social good.

Nicole has also been a developer through the years when AI became a defining part of the job. She has watched it change how software is built in real time, and she wants to help other developers and young people get ready for what it brings.

As a board member, Nicole builds and maintains the tools we use, and helps shape our technology curriculum and how we approach technology as an organization. She brings technical depth so teachers don’t need to, and sees it as a way to put her skills to work for young people and the next generation.

Outside of work, Nicole fills her calendar with all sorts of sports, played with friends.`,
  },
]);

// Every place a member calls home is a starting region with districts to
// outline.
for (const member of team) {
  for (const place of [member.place, ...(member.alsoIn ?? [])]) {
    if (
      !(brand.regions as readonly string[]).includes(place) ||
      !regionDistricts[place]
    ) {
      throw new Error(
        `${member.name}: place "${place}" must be one of ${brand.regions.join(', ')}, with districts in regionDistricts.`,
      );
    }
  }
}
