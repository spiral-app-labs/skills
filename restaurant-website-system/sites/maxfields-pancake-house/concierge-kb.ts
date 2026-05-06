export type ConciergePromptId =
  | 'hours'
  | 'takeout'
  | 'reservations'
  | 'recommendations'
  | 'families'
  | 'location'
  | 'unknown';

export type ConciergePrompt = {
  id: ConciergePromptId;
  label: string;
  question: string;
};

export type ConciergeResponse = {
  title: string;
  summary: string;
  details: string[];
  handoffLabel: string;
  handoffHref: string;
  safetyNote: string;
  sources: string[];
};

const phoneHref = 'tel:+18477810300';
const directionsHref =
  'https://www.google.com/maps/search/?api=1&query=Maxfield%27s%20Pancake%20House%20700%20E%20Schaumburg%20Rd%20Schaumburg%20IL%2060194';

export const conciergePrompts: ConciergePrompt[] = [
  {
    id: 'hours',
    label: 'Hours today',
    question: 'Are you open right now or what are today’s hours?',
  },
  {
    id: 'takeout',
    label: 'Takeout',
    question: 'Can I order online or get takeout?',
  },
  {
    id: 'reservations',
    label: 'Reservations',
    question: 'Do you take reservations?',
  },
  {
    id: 'recommendations',
    label: 'What to try',
    question: 'What should I try?',
  },
  {
    id: 'families',
    label: 'Kids and groups',
    question: 'Is this good for kids, families, or groups?',
  },
  {
    id: 'location',
    label: 'Location',
    question: 'Where are you located?',
  },
  {
    id: 'unknown',
    label: 'Something else',
    question: 'Do you cater or have private events?',
  },
];

export const conciergeResponses: Record<ConciergePromptId, ConciergeResponse> = {
  hours: {
    title: 'Today’s hours are not confirmed here',
    summary:
      "I can’t confirm whether Maxfield's is open right now because public sources show conflicting hours.",
    details: [
      'Restaurantji shows Mon/Tue/Sun 7AM-2PM and Wed-Sat split between 7AM-2PM and 3:30-8PM.',
      'Chicago Northwest shows Sun-Wed 7AM-3PM and Thu-Sat 7AM-9PM.',
      'The safe next step is a quick call before you head over.',
    ],
    handoffLabel: 'Call (847) 781-0300',
    handoffHref: phoneHref,
    safetyNote: 'No live hours claim is made in this preview.',
    sources: ['Restaurantji', 'Chicago Northwest', 'audit.md', 'source.md'],
  },
  takeout: {
    title: 'Takeout signals exist, but the provider is not verified',
    summary:
      'Public listings suggest order or takeout availability, but this preview does not confirm a direct online ordering provider.',
    details: [
      'Chicago Northwest lists takeout among amenities.',
      'Google and directory pages expose order-style actions, but the direct owner-controlled provider was not verified.',
      'Call the restaurant to confirm current takeout options and the correct ordering path.',
    ],
    handoffLabel: 'Ask about takeout',
    handoffHref: phoneHref,
    safetyNote: 'No fake online-order link is shown here.',
    sources: ['Chicago Northwest', 'audit.md', 'source.md'],
  },
  reservations: {
    title: 'Reservations are not confirmed as available',
    summary:
      'Restaurantji notes that reservations are not accepted, so this preview does not present a booking flow.',
    details: [
      'That public listing is the strongest captured source on reservations.',
      'Policies can change, especially for larger groups.',
      'Call for current guidance if you are planning a bigger visit.',
    ],
    handoffLabel: 'Call about large groups',
    handoffHref: phoneHref,
    safetyNote: 'No reservation widget or reservation promise is made.',
    sources: ['Restaurantji', 'content.ts'],
  },
  recommendations: {
    title: 'Start with the items public sources mention most',
    summary:
      "The safest recommendations are the dishes repeatedly surfaced in reviews and public menu snippets around Maxfield's breakfast-house identity.",
    details: [
      'Breakfast picks: pancakes, French toast, waffles, skillets, eggs, benedicts, and omelettes.',
      'Comfort picks: chicken noodle soup, burgers, sandwiches, wraps, and coffee.',
      'Review-backed mentions include the Greek skillet, biscuits and gravy, crepes, and breakfast combos with pancakes.',
    ],
    handoffLabel: 'See menu highlights',
    handoffHref: '/#menu',
    safetyNote: 'Recommendations are summaries of source-backed menu and review themes, not invented favorites.',
    sources: ['google-reviews-highest-30.md', 'Restaurantji snippets', 'Yelp snippets', 'content.ts'],
  },
  families: {
    title: 'Public review themes point to a family-friendly diner feel',
    summary:
      'Captured review themes support Maxfield’s as a comfortable option for kids, families, and mixed-size groups.',
    details: [
      'Reviews describe family brunches, kids enjoying breakfast, and a comfortable diner atmosphere.',
      'One captured review mentions serving a hockey team and parents, about 30 people.',
      'That does not confirm private rooms or guaranteed large-group accommodations, so call ahead for current logistics.',
    ],
    handoffLabel: 'Call before a group visit',
    handoffHref: phoneHref,
    safetyNote: 'Group-friendliness is review-backed, but capacity and accommodations are not promised.',
    sources: ['google-reviews-highest-30.md'],
  },
  location: {
    title: 'The location details are consistent across public sources',
    summary:
      "Maxfield's Pancake House is listed at 700 E Schaumburg Rd, Schaumburg, IL 60194, with phone number (847) 781-0300.",
    details: [
      'Google Maps, Restaurantji, and Chicago Northwest align on the address and phone.',
      'The business is presented as a Schaumburg breakfast restaurant with pancakes, skillets, and classic diner-style breakfast and lunch items.',
      'Use directions for the address above or call the verified phone number if you need help finding it.',
    ],
    handoffLabel: 'Open directions',
    handoffHref: directionsHref,
    safetyNote: 'Address and phone are treated as verified because multiple public sources agree.',
    sources: ['Google Maps', 'Restaurantji', 'Chicago Northwest', 'audit.md'],
  },
  unknown: {
    title: 'That detail is not confirmed in this preview',
    summary:
      'I do not have that confirmed yet, including catering, private events, owner contact, or other unsupported service details.',
    details: [
      'This concierge only answers from the fixed Maxfield-specific knowledge base used in the preview.',
      'If the answer is not documented in the captured sources, it stays unknown here.',
      'Call (847) 781-0300 for the current answer.',
    ],
    handoffLabel: 'Call (847) 781-0300',
    handoffHref: phoneHref,
    safetyNote: 'Unknowns are handed off instead of guessed.',
    sources: ['source.md', 'audit.md', 'concierge safety rules'],
  },
};
