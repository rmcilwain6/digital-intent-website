// The question bank (SPEC 7.1, Home: "Do you know the answer?"). Home shows
// the first `count` (content/home.ts) in order: ten questions, about four
// on how to use technology well for every one on how it works. Questions
// after those stay in the bank for later. `concept` is kept to match the
// question bank sheet; Home shows `category` instead. The bank can grow, with longer
// answers, over time. Statements of the organization's position: a human
// approves each one and sets `draft: false` (SPEC 12.5).
import { questionBankSchema } from '../src/schemas/questions';

export const questions = questionBankSchema.parse([
  {
    slug: 'restart',
    category: 'Memory and state',
    concept: 'memory and state',
    question: 'Why does turning it off and on again fix so many problems?',
    answer:
      'A running computer keeps a lot in its short-term memory: open programs, half-finished tasks, and small mistakes that pile up. Turning it off clears all of that. When it starts again, everything begins from a clean, known state, the one its makers tested.',
    draft: false,
  },
  {
    slug: 'the-padlock',
    category: 'Cybersecurity',
    concept: 'web security',
    question:
      'What does the little padlock next to a web address actually promise you?',
    answer:
      'It means your connection to the site is encrypted, so people on the same Wi-Fi can’t read what you send. It also means the site really controls that web address. It doesn’t mean the site is honest. A scam site can get a padlock for free in minutes.',
    draft: false,
  },
  {
    slug: 'phishing',
    category: 'Cybersecurity',
    concept: 'social engineering',
    question: 'How do scammers trick people into handing over their passwords?',
    answer:
      'Mostly with a message that pretends to be from someone you trust, like your bank or school, and pushes you to log in through a link. The link goes to a fake page that sends what you type to the scammer. Urgency is the giveaway. Two-factor authentication limits the damage.',
    draft: false,
  },
  {
    slug: 'deleting-posts',
    category: 'Digital footprint and rights',
    concept: 'digital footprint',
    question: 'If you delete something you posted, is it gone?',
    answer:
      'Only from your profile. Anyone could have saved a copy or taken a screenshot first. Archive sites save copies of public pages, and the platform may keep it on its servers for a while. Public posts may also have been copied to train AI. Assume anything public can outlast your delete button.',
    draft: false,
  },
  {
    slug: 'location-data',
    category: 'Privacy and data',
    concept: 'location privacy',
    question: 'Your phone knows where you’ve been. Who else might?',
    answer:
      'Any app with location access can collect it, sometimes even when you’re not using it. Some sell it to data brokers, companies that resell personal information. “Anonymous” location data often isn’t: where you sleep and where you spend your days point to one person. Your phone’s settings show which apps have access.',
    draft: false,
  },
  {
    slug: 'is-it-real',
    category: 'Misinformation',
    concept: 'synthetic media',
    question:
      'Can you tell whether a photo or video is real just by looking at it carefully?',
    answer:
      'Less and less. AI tools can now make realistic photos, videos and voices, and the old giveaways, like warped hands, keep disappearing. Checking where it came from works better: who posted it first, whether trusted news outlets are reporting it, and whether a reverse image search shows it appeared earlier somewhere else.',
    draft: false,
  },
  {
    slug: 'different-feeds',
    category: 'Algorithms',
    concept: 'recommendation systems',
    question:
      'Why does your feed show you different things than your friend’s?',
    answer:
      'The app ranks posts by predicting what you’ll watch, like or share, based on what you’ve done before and what similar people liked. Your history is different from your friend’s, so your feed is too. It learns what holds your attention, not what’s true or good for you, and over time it can show you more of the same.',
    draft: false,
  },
  {
    slug: 'chatbots',
    category: 'Artificial intelligence',
    concept: 'artificial intelligence',
    question:
      'When you ask a chatbot something, how does it decide what to say?',
    answer:
      'It usually isn’t looking anything up. It predicts, one piece at a time, the words most likely to come next, based on patterns in a huge amount of text it learned from. That’s why it can sound sure and still be wrong.',
    draft: false,
  },
  {
    slug: 'free-apps',
    category: 'Business models and attention',
    concept: 'business models',
    question: 'If a social media app is free, how does it make money?',
    answer:
      'Mostly by selling ads, shown to you based on what the app has learned about you. The more time you spend, the more ads it can show, so the app is designed to keep you scrolling.',
    draft: false,
  },
  {
    slug: 'exactly-what-you-said',
    category: 'Programming',
    concept: 'programming',
    question:
      'Why does a computer do exactly what you told it, even when that’s not what you meant?',
    answer:
      'A computer doesn’t know what you meant. It follows its code exactly as written, one step at a time. People fill gaps with common sense, so programmers have to spell out every case, including ones nobody thought of. When the code doesn’t do what they meant, that’s a bug.',
    draft: false,
  },

  // In the bank, not on Home for now.
  {
    slug: 'lateral-reading',
    category: 'Misinformation',
    concept: 'evaluating sources',
    question:
      'How do professional fact-checkers decide whether a website is trustworthy?',
    answer:
      'They leave the site. Instead of judging it by how it looks, they open new tabs and search for what others say about the site and who runs it. A polished site can still be run by a group with a stake in the topic, and outside sources show that quickly.',
    draft: false,
  },
  {
    slug: 'visiting-a-website',
    category: 'Networks and the web',
    concept: 'how the web works',
    question:
      'What actually happens when you type youtube.com and press Enter?',
    answer:
      'Your browser first looks up the name, like a phone book, to find the address of a computer that can answer. It sends a request, and the company’s computers send back code, text and video, which your browser puts together into a page. Most big sites also load code that records how you use them.',
    draft: false,
  },
  {
    slug: 'the-cloud',
    category: 'Infrastructure and energy',
    concept: 'physical infrastructure',
    question: 'Where, physically, is “the cloud”?',
    answer:
      'In buildings full of computers called data centres, mostly owned by a few large companies and joined by cables, many of them under the ocean. The cloud is someone else’s computer, and it runs on a lot of electricity, and often water for cooling.',
    draft: false,
  },
]);
