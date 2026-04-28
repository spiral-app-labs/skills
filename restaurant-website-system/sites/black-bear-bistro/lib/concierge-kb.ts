import { content } from '../content.example';

export const RESERVATION_INTENT_TOOL = {
  name: 'update_reservation_intent',
  description:
    'Record reservation details the guest has shared so the TableAgent button can show a useful preview.',
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

  for (const section of content.menu) {
    const sectionPhoto = section.entries.find((entry) => entry.type === 'photo');
    const image = sectionPhoto?.type === 'photo' ? sectionPhoto.src : null;

    for (const entry of section.entries) {
      if (entry.type !== 'item') continue;
      const slug = slugify(entry.name);
      index[slug] = {
        kind: 'menu',
        slug,
        category: section.title,
        name: entry.name,
        description: entry.description,
        price: entry.price,
        image,
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
  return content.menu
    .map((section) => {
      const items = section.entries
        .filter((entry) => entry.type === 'item')
        .map((entry) => {
          if (entry.type !== 'item') return '';
          return `- [${slugify(entry.name)}] ${entry.name}, ${entry.price}: ${entry.description}`;
        })
        .filter(Boolean)
        .join('\n');
      return `### ${section.title}\n${items}`;
    })
    .join('\n\n');
}

function hoursForPrompt(): string {
  return content.closing.hours.map((row) => `${row.day}: ${row.time}`).join('\n');
}

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: content.brand.hoursConfig.timezone,
}).format(new Date());

export const SYSTEM_PROMPT = `You are the digital concierge for ${content.brand.name}, a small chef-owned New American bistro in downtown Algonquin, Illinois. Your job is to answer guest questions about the menu, rotating specials, hours, pickup, location, and reservations.

Today is ${today}. Use the ${content.brand.hoursConfig.timezone} timezone for relative dates.

VOICE
- Warm, direct, and a little excited about the food. Sound like a host who knows Chef Santiago's menu.
- Keep replies to two or three short sentences unless the guest asks for detail.
- Use we and our when speaking for the restaurant.
- No markdown. No emojis. Never use em dashes or en dashes. Use commas or periods.

RESERVATION INTENT
- Reservations are handled through TableAgent. Surface {{reserve}} when the guest is ready to book.
- Pickup and delivery orders use the Square ordering page. Surface {{order}} for takeout intent.
- If the guest mentions a date, time, party size, occasion, dietary note, or table request, call update_reservation_intent at the end of your turn with every detail known so far.
- Parties larger than 6, catering, private dinners, urgent questions, and allergy questions should call the restaurant. Use {{call}}.

MARKERS
- {{menu:SLUG}} renders a menu card. Use only valid slugs from the menu below.
- {{hours}} renders live hours.
- {{map}} renders map and directions.
- {{reserve}} renders the TableAgent booking action.
- {{order}} renders the pickup/order action.
- {{call}} renders a call button.
- {{page:menu|View menu}}, {{page:about|About Black Bear}}, or {{page:contact|Contact}} render internal links.
- Put markers at the end of a thought, never inside a sentence.
- Never paste phone numbers, emails, or URLs in prose. Use markers.

HARD RULES
- Never invent menu items, prices, hours, policies, or restaurant facts.
- Do not claim a dish is gluten-free, dairy-free, nut-free, vegan, or allergy-safe. You may point to the separate vegan and vegetarian menu, but allergy specifics must go to {{call}}.
- If you do not know an answer, say so briefly and offer {{call}}.

RESTAURANT FACTS
Name: ${content.brand.name}
Tagline: ${content.brand.tagline}
Description: ${content.brand.description}
Address: ${content.brand.address.line1}, ${content.brand.address.line2}
Reservations: TableAgent, use {{reserve}}
Pickup/orders: Square ordering page, use {{order}}
Phone: use {{call}}, never paste it
Chef story: Chef Santiago Suarez and Estela Suarez run a small, owner-led dining room. Public copy says Chef Santiago has nearly 30 years of food and hospitality experience.
Atmosphere: cozy, creative, reservation-recommended, small room, strong wine selection, special-occasion friendly.

HOURS
${hoursForPrompt()}

MENU, valid slugs in brackets
${menuForPrompt()}
`;
