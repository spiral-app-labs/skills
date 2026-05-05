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

const PHONE = 'tel:+18473813555';
const DIRECTIONS = 'https://www.google.com/maps/search/?api=1&query=232+E+Main+St+Barrington+IL+60010';
const LEGACY_SITE = 'https://www.ciaobabyonline.com/';
const MODERN_DOMAIN_CANDIDATE = 'https://ciaobaby.net/';

const defaultSafetyNote =
  'This helper sticks to Ciao Baby details checked for this preview and sends anything current, sensitive, or uncertain to a direct phone call.';

const answers = {
  start: {
    topic: 'start',
    answer:
      'Ask about hours, location, menu highlights, private parties, or what guests praise. I will stay inside verified Ciao Baby facts and send anything uncertain to a call.',
    actions: [
      { label: 'Call Ciao Baby', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
  hours: {
    topic: 'hours',
    answer:
      'Publicly listed hours from the legacy source are Tuesday through Thursday 11am–9pm, Friday 11am–10pm, Saturday 12pm–10pm, and closed Sunday/Monday. Public sources do not fully agree, so call Ciao Baby before promising today’s hours.',
    actions: [
      { label: 'Call to confirm hours', href: PHONE },
      { label: 'Open public menu source', href: LEGACY_SITE },
    ],
    safetyNote: defaultSafetyNote,
  },
  location: {
    topic: 'location',
    answer:
      'Ciao Baby is listed at 232 E Main Street, Barrington, IL 60010. The safest handoff is directions plus a quick call if timing matters.',
    actions: [
      { label: 'Get directions', href: DIRECTIONS },
      { label: 'Call Ciao Baby', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  menu: {
    topic: 'menu highlights',
    answer:
      'Verified public menu/source notes include Ciao Baby! Sticks, stuffed artichoke, Aunt Dodie’s rolled stuffed eggplant, lamb chops Vesuvio, CiaoBaby! Burnt Pasta, chopped salads, and stuffed Melrose peppers. Customer review themes also mention homemade gnocchi, chicken parmesan, salted caramel gelato, and carrot cake. Availability and prices should be confirmed by phone.',
    actions: [
      { label: 'View menu highlights', href: '/menu' },
      { label: 'Call about availability', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  privateParties: {
    topic: 'private parties',
    answer:
      'The legacy current site mentions a private party room, and public review themes include a birthday/private-room story praising the staff for accommodating the event. I cannot quote packages, capacity, deposits, or availability, so call the restaurant directly.',
    actions: [
      { label: 'Call about parties', href: PHONE },
      { label: 'Open directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
  vibe: {
    topic: 'guest praise',
    answer:
      'The captured review themes support warm service, generous portions, old-school Italian comfort, family meals, birthdays, warm bread, lamb chops Vesuvio, burnt pasta, carrot cake, and staff who make guests feel at home.',
    actions: [
      { label: 'Plan a visit', href: '/contact' },
      { label: 'Call Ciao Baby', href: PHONE },
    ],
    safetyNote: defaultSafetyNote,
  },
  contact: {
    topic: 'contact',
    answer:
      'The clean verified contact path is phone-first at (847) 381-3555. There are two official-looking public domains in the evidence, so this preview does not choose a final owner domain without confirmation.',
    actions: [
      { label: 'Call Ciao Baby', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
      { label: 'Open menu source', href: LEGACY_SITE },
      { label: 'Other domain to verify', href: MODERN_DOMAIN_CANDIDATE },
    ],
    safetyNote: defaultSafetyNote,
  },
  unsupported: {
    topic: 'unsupported request',
    answer:
      'I cannot verify that safely from the Ciao Baby evidence packet. I do not make reservations, hold tables, take orders, quote current prices or specials, answer allergy/medical questions, or promise private-party availability. Please call the restaurant for a human-confirmed answer.',
    actions: [
      { label: 'Call Ciao Baby', href: PHONE },
      { label: 'Get directions', href: DIRECTIONS },
    ],
    safetyNote: defaultSafetyNote,
  },
} satisfies Record<string, ConciergeAnswer>;

const unsupportedPatterns = [
  /(reservation|reserve|table for|hold a table|save us a table|available tonight)/i,
  /(order|delivery|pickup|takeout|to go|doordash|ubereats|grubhub|online order)/i,
  /(allergy|allergies|gluten|celiac|vegan|vegetarian|dairy|nut|peanut|medical)/i,
  /(price|prices|cost|how much|specials|happy hour|deal|discount|coupon)/i,
  /(capacity|deposit|contract|buyout|catering package|party package)/i,
];

const keywordMap: Array<[RegExp, ConciergeAnswer]> = [
  [/(hour|open|opening|when.*open|today|tonight|close|closing|holiday|sunday|monday)/i, answers.hours],
  [/(where|address|direction|map|located|location|parking|barrington|main st)/i, answers.location],
  [/(menu|food|dish|dishes|pasta|gnocchi|artichoke|eggplant|vesuvio|lamb|salad|gelato|cake|dessert)/i, answers.menu],
  [/(private|party|parties|birthday|shower|event|events|room|celebration)/i, answers.privateParties],
  [/(vibe|atmosphere|family|service|review|reviews|what.*known|favorite|warm|regular)/i, answers.vibe],
  [/(phone|call|contact|website|site|domain|email)/i, answers.contact],
];

export const conciergeQuestions = [
  'What are the hours?',
  'Do they take reservations?',
  'What dishes are mentioned?',
  'Can I book a private party?',
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
