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

const PHONE = 'tel:+18478655151';
const WEBSITE = 'https://strawberrymoonmartinisandmore.weebly.com/';
const EVENTS = 'https://strawberrymoonmartinisandmore.weebly.com/events.html';
const DIRECTIONS =
  'https://www.google.com/maps/search/?api=1&query=204+S+Main+St+Wauconda+IL+60084';

const defaultSafetyNote =
  'This concierge only uses the verified Strawberry Moon facts captured in the site audit, source notes, event scrape, and review packet. Call or use the official site for anything current, sensitive, or uncertain.';

const answers = {
  start: {
    topic: 'start',
    answer:
      'Ask about hours, location, live music, seating, drinks, desserts, or what the room feels like. I will stay inside verified Strawberry Moon facts and hand off anything uncertain to a call or the official site.',
    actions: [
      { label: 'Call Strawberry Moon', href: PHONE },
      { label: 'Open official site', href: WEBSITE },
    ],
    safetyNote: defaultSafetyNote,
  },
  hours: {
    topic: 'hours',
    answer:
      'The official site says Strawberry Moon is open Tuesday through Saturday from 4 pm. The event evidence also confirms live music on Thursdays from 6:30 to 9:30 pm and Fridays and Saturdays from 7 to 10 pm. I do not have verified closing times or holiday-hour updates, so call before promising tonight’s timing.',
    actions: [
      { label: 'Call about tonight', href: PHONE },
      { label: 'See the events page', href: EVENTS },
    ],
    safetyNote: defaultSafetyNote,
  },
  location: {
    topic: 'location',
    answer:
      'Strawberry Moon is at 204 S Main St, Wauconda, IL 60084. The simplest next step is directions plus a quick call if you want to confirm anything before heading over.',
    actions: [
      { label: 'Get directions', href: DIRECTIONS },
      { label: 'Call Strawberry Moon', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  vibe: {
    topic: 'vibe',
    answer:
      'Verified reviews describe Strawberry Moon as cozy, intimate, and conversation-friendly, with two levels and a quieter upstairs perch. The official site frames it as martinis, wine, nibbles, decadent desserts, and live music behind the red door.',
    actions: [
      { label: 'Open official site', href: WEBSITE },
      { label: 'See live music details', href: EVENTS },
    ],
    safetyNote: defaultSafetyNote,
  },
  music: {
    topic: 'live music',
    answer:
      'Live music is a real part of the draw here. The official site says Strawberry Moon features performers ranging from R&B to classic rock, and the captured events schedule confirms Thursday sets from 6:30 to 9:30 pm plus Friday and Saturday sets from 7 to 10 pm.',
    actions: [
      { label: 'Open events page', href: EVENTS },
      { label: 'Call Strawberry Moon', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  seating: {
    topic: 'seating',
    answer:
      'The verified seating policy is first-come, first-served. I cannot promise reservations, table holds, or same-night availability from the captured facts, so call the bar directly if timing matters.',
    actions: [
      { label: 'Call about seating', href: PHONE },
      { label: 'Open official site', href: WEBSITE },
    ],
    safetyNote: defaultSafetyNote,
  },
  menu: {
    topic: 'menu and drinks',
    answer:
      'Verified public facts point to martinis, wine, nibbles, and decadent desserts, with reviews repeatedly naming Tuesday martini flights, the Strawberry Moon martini, dirty martinis, the Stormy Night martini, wine and cheese fondue, pretzel nuggets, and custom bartender-made drinks. I do not have a verified full menu or current prices.',
    actions: [
      { label: 'Call about tonight’s menu', href: PHONE },
      { label: 'Open official site', href: WEBSITE },
    ],
    safetyNote: defaultSafetyNote,
  },
  contact: {
    topic: 'contact',
    answer:
      'The cleanest verified contact path is phone-first at 847-865-5151. If you want the current public pages, use the official Strawberry Moon site and the live-music events page.',
    actions: [
      { label: 'Call Strawberry Moon', href: PHONE },
      { label: 'Open official site', href: WEBSITE },
    ],
    safetyNote: defaultSafetyNote,
  },
  unsupported: {
    topic: 'unsupported request',
    answer:
      'I cannot verify that safely from the Strawberry Moon evidence packet. I do not make reservation promises, take orders, answer allergy or medical questions, quote private-event details beyond public facts, or invent specials, prices, or same-day availability. Please call the bar or use the official site for a human-confirmed answer.',
    actions: [
      { label: 'Call Strawberry Moon', href: PHONE },
      { label: 'Open official site', href: WEBSITE },
    ],
    safetyNote: defaultSafetyNote,
  },
} satisfies Record<string, ConciergeAnswer>;

const unsupportedPatterns = [
  /(reservation|reserve|book|booking|table for|hold a table|save us a table)/i,
  /(order|delivery|pickup|takeout|to go|doordash|ubereats|grubhub|online order)/i,
  /(allergy|allergies|gluten|celiac|vegan|vegetarian|dairy|nut|peanut|medical)/i,
  /(private event|private party|bridal shower|baby shower|wedding|catering|rent out|buyout)/i,
  /(price|prices|cost|how much|specials|happy hour|deal|discount)/i,
];

const keywordMap: Array<[RegExp, ConciergeAnswer]> = [
  [/(hour|open|opening|when.*open|today|tonight|close|closing|holiday|sunday|monday)/i, answers.hours],
  [/(where|address|direction|map|located|location|parking|wauconda|main st)/i, answers.location],
  [/(live music|music|band|bands|event|events|performer|schedule)/i, answers.music],
  [/(vibe|atmosphere|date night|cozy|romantic|what.*like|upstairs)/i, answers.vibe],
  [/(seat|seating|first come|walk in|walk-in|reservation)/i, answers.seating],
  [/(martini|drink|drinks|wine|fondue|dessert|desserts|pretzel|menu|food|nibbles|cocktail)/i, answers.menu],
  [/(phone|call|contact|website|site|email)/i, answers.contact],
];

export const conciergeQuestions = [
  'When are you open?',
  'Do they take reservations?',
  'What drinks are they known for?',
  'When is live music?',
] as const;

export function answerConciergeQuestion(question: string): ConciergeAnswer {
  const normalized = question.trim();

  if (!normalized) {
    return answers.start;
  }

  if (unsupportedPatterns.some((pattern) => pattern.test(normalized))) {
    return answers.unsupported;
  }

  const matched = keywordMap.find(([pattern]) => pattern.test(normalized));
  return matched?.[1] ?? answers.unsupported;
}
