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

const EMAIL_VISIT = 'mailto:info@shopwinestock.com?subject=Winestock%20visit';
const EMAIL_BOTTLES = 'mailto:info@shopwinestock.com?subject=Winestock%20bottle%20picks';
const EMAIL_BOARDS = 'mailto:info@shopwinestock.com?subject=Winestock%20boards';
const PHONE = 'tel:+18153085610';
const FACEBOOK = 'https://www.facebook.com/Winestockmarket/';
const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=42.31538,-88.4484481';

const safetyNote =
  'This helper is based on confirmed public Winestock details. For current hours, live-music timing, allergy questions, prices, availability, or anything sensitive, contact Winestock directly.';

const answers = {
  start: {
    topic: 'start',
    answer:
      'Ask about Winestock’s hours, location, wine-market help, small plates, live-music vibe, boards, or the best way to contact the team. For details that change day to day, use email, phone, Facebook, or directions.',
    actions: [
      { label: 'Email Winestock', href: EMAIL_VISIT },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote,
  },
  hours: {
    topic: 'hours',
    answer:
      'The latest public hours snapshot listed Monday closed, Tuesday through Thursday 10am–9pm, Friday and Saturday 10am–10pm, and Sunday 12pm–6pm. Hours can change, so call or check Facebook for today’s timing.',
    actions: [
      { label: 'Call Winestock', href: PHONE },
      { label: 'Check Facebook', href: FACEBOOK },
    ],
    safetyNote,
  },
  location: {
    topic: 'location',
    answer:
      'Winestock Market & Lounge is at 136 Cass St, Woodstock, IL 60098 on Woodstock Square. The cleanest next step is directions, plus a quick call if timing matters.',
    actions: [
      { label: 'Get directions', href: DIRECTIONS },
      { label: 'Call Winestock', href: PHONE },
    ],
    safetyNote,
  },
  market: {
    topic: 'wine market',
    answer:
      'The official site says Winestock carries hand-selected artisanal wines and spirits from around the globe. Reviews also mention helpful pairing guidance, affordable bottle pricing, craft beer, and a broad wine selection.',
    actions: [
      { label: 'Ask for bottle picks', href: EMAIL_BOTTLES },
      { label: 'Call Winestock', href: PHONE },
    ],
    safetyNote,
  },
  food: {
    topic: 'small plates and boards',
    answer:
      'Verified public copy says Winestock serves small plates, flatbreads, sandwiches, charcuterie, and cheese boards. Review evidence also calls out charcuterie boards, cheese plates, Chicago-style beefs, hot dogs, and snacks. I do not have a verified full current menu or prices.',
    actions: [
      { label: 'Ask about boards', href: EMAIL_BOARDS },
      { label: 'Call about today’s menu', href: PHONE },
    ],
    safetyNote,
  },
  music: {
    topic: 'live music and vibe',
    answer:
      'Google reviews repeatedly describe Winestock as friendly, casual, warm, relaxed, and a local favorite — “Woodstock’s living room” came directly from the review packet. Live music is a repeated review theme, especially weekend energy, but current dates should be checked on Facebook or by calling.',
    actions: [
      { label: 'See Facebook updates', href: FACEBOOK },
      { label: 'Call Winestock', href: PHONE },
    ],
    safetyNote,
  },
  contact: {
    topic: 'contact',
    answer:
      'The verified public handoffs in this preview are email at info@shopwinestock.com, phone at (815) 308-5610, Facebook / Winestockmarket, and directions to 136 Cass St. Use a direct handoff for anything time-sensitive.',
    actions: [
      { label: 'Email Winestock', href: EMAIL_VISIT },
      { label: 'Call Winestock', href: PHONE },
      { label: 'Open Facebook', href: FACEBOOK },
    ],
    safetyNote,
  },
  unsupported: {
    topic: 'safe handoff',
    answer:
      'That needs a direct answer from Winestock. Please use email, phone, or Facebook for reservations, orders, current prices, specials, private events, availability, or allergy/medical questions.',
    actions: [
      { label: 'Email Winestock', href: EMAIL_VISIT },
      { label: 'Call Winestock', href: PHONE },
      { label: 'Open Facebook', href: FACEBOOK },
    ],
    safetyNote,
  },
} satisfies Record<string, ConciergeAnswer>;

const unsupportedPatterns = [
  /(reservation|reserve|book|booking|table for|hold a table|save us a table)/i,
  /(order|delivery|pickup|takeout|to go|doordash|ubereats|grubhub|online order)/i,
  /(allergy|allergies|gluten|celiac|vegan|vegetarian|dairy|nut|peanut|medical)/i,
  /(private event|private party|wedding|catering|rent out|buyout|large group)/i,
  /(price|prices|cost|how much|specials|happy hour|deal|discount|available tonight|availability)/i,
];

const keywordMap: Array<[RegExp, ConciergeAnswer]> = [
  [/(hour|open|opening|when.*open|today|tonight|close|closing|holiday|sunday|monday|friday|saturday)/i, answers.hours],
  [/(where|address|direction|map|located|location|parking|woodstock|cass)/i, answers.location],
  [/(wine|bottle|pairing|spirits|craft beer|beer|market|gift)/i, answers.market],
  [/(food|menu|small plate|flatbread|sandwich|charcuterie|cheese|board|snack|beef|hot dog)/i, answers.food],
  [/(live music|music|band|event|events|performer|schedule|vibe|atmosphere|date night|living room|lounge)/i, answers.music],
  [/(phone|call|contact|facebook|email|site|website)/i, answers.contact],
];

export const conciergeQuestions = [
  'When are you open?',
  'Can they help pick wine?',
  'What food do they serve?',
  'Is there live music?',
] as const;

export function answerConciergeQuestion(question: string): ConciergeAnswer {
  const normalized = question.trim();

  if (!normalized) return answers.start;

  if (unsupportedPatterns.some((pattern) => pattern.test(normalized))) {
    return answers.unsupported;
  }

  const matched = keywordMap.find(([pattern]) => pattern.test(normalized));
  return matched?.[1] ?? answers.unsupported;
}
