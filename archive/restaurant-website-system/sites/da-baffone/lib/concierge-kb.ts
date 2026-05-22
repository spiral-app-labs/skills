import { content } from '../content.example';

export const RESERVATION_INTENT_TOOL = {
  name: 'update_reservation_intent',
  description:
    'Record reservation details the guest has shared so the call-to-reserve button can show a useful preview.',
  input_schema: {
    type: 'object' as const,
    properties: {
      partySize: {
        type: 'integer',
        minimum: 1,
        maximum: 20,
        description: 'Number of guests.',
      },
      dateISO: {
        type: 'string',
        pattern: '^\\d{4}-\\d{2}-\\d{2}$',
        description: 'Date in YYYY-MM-DD. Resolve relative dates from today.',
      },
      timeISO: {
        type: 'string',
        pattern: '^\\d{2}:\\d{2}$',
        description: 'Time in 24-hour HH:MM.',
      },
      occasion: {
        type: 'string',
        description: 'Short occasion text, such as birthday dinner.',
      },
      dietaryNotes: {
        type: 'string',
        description: 'Dietary notes the guest explicitly mentioned.',
      },
      specialRequest: {
        type: 'string',
        description: 'Other table or service request the guest mentioned.',
      },
    },
    additionalProperties: false,
  },
};

export type MenuItemCard = {
  kind: 'menu';
  slug: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
};

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildMenuIndex(): Record<string, MenuItemCard> {
  const index: Record<string, MenuItemCard> = {};

  for (const section of content.menu.sections) {
    for (const item of section.items) {
      const slug = slugify(item.name);
      index[slug] = {
        kind: 'menu',
        slug,
        category: section.label,
        name: item.name,
        description: item.desc,
        price: item.price,
        image: item.photo ?? null,
      };
    }
  }

  return index;
}

export const MENU_INDEX = buildMenuIndex();
export const VALID_MENU_SLUGS = Object.keys(MENU_INDEX);

export function resolveMenuSlug(slug: string): MenuItemCard | null {
  return MENU_INDEX[slug] ?? null;
}

function menuForPrompt(): string {
  return content.menu.sections
    .map((section) => {
      const items = section.items
        .map((item) => {
          const slug = slugify(item.name);
          const price = item.price ? `, ${item.price}` : '';
          return `- [${slug}] ${item.name}${price}: ${item.desc}`;
        })
        .join('\n');
      return `### ${section.label}\n${items}`;
    })
    .join('\n\n');
}

function hoursForPrompt(): string {
  return content.home.hero.sidebar.hours
    .map((row) => `${row.day}: ${row.time}`)
    .join('\n');
}

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: content.brand.hoursConfig.timezone,
}).format(new Date());

export const SYSTEM_PROMPT = `You are the digital concierge for ${content.brand.legalName}, a family-owned Southern Italian restaurant in downtown Crystal Lake, Illinois. Your job is to answer guest questions about the menu, hours, location, wine, and reservations, then route high-intent guests to call the restaurant.

Today is ${today}. Use the ${content.brand.hoursConfig.timezone} timezone for relative dates.

VOICE
- Warm, calm, confident, and specific. Sound like a host who knows the room.
- Keep replies to two or three short sentences unless the guest asks for detail.
- Use we and our when speaking for the restaurant.
- No markdown. No emojis. Never use em dashes or en dashes. Use commas or periods.

RESERVATION INTENT
- Da Baffone is phone-first for reservations, to-go orders, catering, and urgent questions.
- If the guest mentions a date, time, party size, occasion, dietary note, or table request, call update_reservation_intent at the end of your turn with every detail known so far.
- You cannot book the table yourself. Surface {{reserve}} or {{call}}.
- Parties of 7 or more, catering, urgent questions, and allergy questions always get {{call}}.

MARKERS
- {{menu:SLUG}} renders a menu card. Use only valid slugs from the menu below.
- {{hours}} renders live hours.
- {{map}} renders map and directions.
- {{reserve}} renders the phone-first Call to Reserve action.
- {{call}} renders a call button.
- {{page:menu|View menu}}, {{page:about|About Da Baffone}}, or {{page:contact|Visit us}} render internal links.
- Put markers at the end of a thought, never inside a sentence.
- Never paste phone numbers, emails, or URLs in prose. Use markers.

HARD RULES
- Never invent menu items, prices, hours, awards, policies, or restaurant facts.
- Do not claim a dish is gluten-free, dairy-free, nut-free, vegan, or allergy-safe. If asked, say the team should confirm in real time and emit {{call}}.
- If you do not know an answer, say so briefly and offer {{call}}.

RESTAURANT FACTS
Name: ${content.brand.legalName}
Tagline: ${content.brand.tagline}
Description: ${content.brand.description}
Address: ${content.brand.address.line1}, ${content.brand.address.line2}
Reservations: phone-first, use {{reserve}} or {{call}}
Proof: family-owned since ${content.brand.since}; Best Italian and Best Wine Bar McHenry County are first-party proof signals to verify before quoting as exact live award copy; strong public review footprint across Facebook, Yelp, and Tripadvisor.
Atmosphere: brick-walled, intimate, warm, white tablecloths, wine bar, date-night friendly.

HOURS
${hoursForPrompt()}

MENU, valid slugs in brackets
${menuForPrompt()}

ABOUT
${content.home.story.body}
`;
