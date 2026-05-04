export type ConciergeAction = {
  label: string;
  href: string;
};

export type ConciergeAnswer = {
  topic: string;
  answer: string;
  actions: ConciergeAction[];
  safetyNote: string;
};

const PHONE = 'tel:+18155263633';
const DIRECTIONS = 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014';
const GOOGLE_PROFILE = 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly';

const defaultSafetyNote =
  'I only use the verified public facts captured for this preview. Please call La Fonda for current prices, allergies, seating, holiday hours, and same-day specials.';

const answers: ConciergeAnswer[] = [
  {
    topic: 'hours',
    answer:
      'Public sources captured for this preview list La Fonda as open Monday through Saturday from 10 AM to 7 PM, and Sunday from 10 AM to 4 PM. For holiday hours or same-day changes, call before you go.',
    actions: [
      { label: 'Call La Fonda', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
  {
    topic: 'location',
    answer:
      'La Fonda is listed at 35 Berkshire Dr Unit 10 in Crystal Lake, Illinois. The cleanest guest path is directions plus a quick call, since Google currently shows an Add website gap.',
    actions: [
      { label: 'Open directions', href: DIRECTIONS },
      { label: 'Call La Fonda', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  {
    topic: 'menu highlights',
    answer:
      'Verified public sources and reviews repeatedly point to tacos, empanadas, sope Veracruzano, garnachas, huaraches, burritos, mole, atole, churros, and Veracruz-style specials. This preview does not publish fake prices or a full official menu, so call to verify today’s menu.',
    actions: [
      { label: 'Call about today’s menu', href: PHONE },
      { label: 'Open Google profile', href: GOOGLE_PROFILE },
    ],
    safetyNote: defaultSafetyNote,
  },
  {
    topic: 'takeout',
    answer:
      'The safest ordering path is phone-first. No official online ordering provider was verified in the audit, and reviews praise fast pickup, friendly service, and careful carryout packaging.',
    actions: [
      { label: 'Call for takeout', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
  {
    topic: 'seating',
    answer:
      'Seating should stay carefully worded. Some reviews mention takeout-only or limited seating, while other evidence suggests the space may have been updated. Please call La Fonda directly before promising dine-in seating to a guest.',
    actions: [
      { label: 'Call to confirm seating', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
  {
    topic: 'reviews',
    answer:
      'The captured Google profile showed 4.5 stars from 148 reviews, and the review packet emphasized authentic comida Veracruzana, tacos, friendly service, clean carryout, fair value, and specials like mole or atole.',
    actions: [
      { label: 'Open Google profile', href: GOOGLE_PROFILE },
      { label: 'Call La Fonda', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
];

const keywordMap: Array<[RegExp, ConciergeAnswer]> = [
  [/(hour|open|close|time|sunday|monday|today|holiday)/i, answers[0]],
  [/(where|address|direction|map|located|location|parking)/i, answers[1]],
  [/(menu|taco|empanada|sope|garnacha|huarache|burrito|mole|atole|churro|special|price|cost)/i, answers[2]],
  [/(takeout|pickup|order|ordering|delivery|doordash|ubereats|toast|online)/i, answers[3]],
  [/(seat|dine|table|inside|eat in|dining|reservation)/i, answers[4]],
  [/(review|rating|google|proof|popular|best|recommend)/i, answers[5]],
];

export const conciergeQuestions = [
  'What should I try first?',
  'Are you open today?',
  'Can I order online?',
  'Do they have dine-in seating?',
] as const;

export function answerConciergeQuestion(question: string): ConciergeAnswer {
  const normalized = question.trim();

  if (!normalized) {
    return {
      topic: 'start',
      answer:
        'Ask about hours, directions, menu highlights, takeout, seating, or review proof. I’ll stay inside verified La Fonda facts and hand off to a phone call when something current needs confirmation.',
      actions: [
        { label: 'Call La Fonda', href: PHONE },
        { label: 'Get directions', href: DIRECTIONS },
      ],
      safetyNote: defaultSafetyNote,
    };
  }

  const matched = keywordMap.find(([pattern]) => pattern.test(normalized));
  return matched?.[1] ?? {
    topic: 'fallback',
    answer:
      'I do not have a verified answer for that from the captured La Fonda sources. The truth-safe next step is to call the restaurant directly, especially for allergies, prices, catering, private events, seating, and current specials.',
    actions: [
      { label: 'Call La Fonda', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  };
}
