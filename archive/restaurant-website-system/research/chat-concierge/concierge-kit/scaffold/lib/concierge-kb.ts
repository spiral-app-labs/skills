// concierge-kb.ts — deterministic prompt builder. Introspects content.ts and
// composes the system prompt from whatever sections exist (menu, diningTiers,
// privateEvents). Copy this file verbatim — do NOT edit per-template. All
// per-template text lives in concierge-voice.ts.

// @ts-expect-error — each template supplies its own content shape; we only
// narrow at runtime via optional chaining. If TypeScript complains here in a
// particular template, add a local `.d.ts` declaring the union shape.
import { content } from '../content';
import { VOICE } from './concierge-voice';

// Tool definition used by the Anthropic SDK in app/api/chat/route.ts.
// The client merges each tool-use call into a ReservationIntent state object
// (see components/AskConcierge.tsx) and uses it to pre-fill the Reserve URL.
export const RESERVATION_INTENT_TOOL = {
  name: 'update_reservation_intent',
  description:
    "Record structured reservation details extracted from the conversation so far. Call this whenever the guest's message reveals or changes a reservation detail (party size, date, time, occasion, dietary notes). Fields not yet known: omit. Safe to call multiple times per turn as details accumulate; partial calls are merged client-side.",
  input_schema: {
    type: 'object' as const,
    properties: {
      partySize: {
        type: 'integer',
        minimum: 1,
        maximum: 20,
        description: 'Number of guests. Integer 1-20.',
      },
      dateISO: {
        type: 'string',
        pattern: '^\\d{4}-\\d{2}-\\d{2}$',
        description: 'Target date in strict YYYY-MM-DD form. Resolve relative dates ("Saturday") using today as the anchor.',
      },
      timeISO: {
        type: 'string',
        pattern: '^\\d{2}:\\d{2}$',
        description: 'Target time in strict 24h HH:MM form. e.g., 7 PM becomes 19:00.',
      },
      occasion: {
        type: 'string',
        description: 'Short free text: "birthday dinner", "anniversary", "business dinner", etc. Omit if none mentioned.',
      },
      dietaryNotes: {
        type: 'string',
        description: 'Short free text: "one guest is gluten-free", "vegetarian", etc. Only what the guest has said.',
      },
      specialRequest: {
        type: 'string',
        description: 'Any other free-text ask (e.g., "quiet table," "window seat"). Used as-is.',
      },
    },
    additionalProperties: false,
  },
};

// ---- Card types -------------------------------------------------------------

export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'pescatarian';
export type Allergen =
  | 'gluten'
  | 'dairy'
  | 'egg'
  | 'soy'
  | 'peanut'
  | 'tree-nut'
  | 'shellfish'
  | 'fish'
  | 'sesame';

export type MenuItemCard = {
  kind: 'menu';
  slug: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
  ingredients: string[];
  allergens: Allergen[];
  dietary: DietaryTag[];
  calories: number | null;
  spiceLevel: 0 | 1 | 2 | 3 | null;
};

export type DiningTierCard = {
  kind: 'tier';
  id: string;
  label: string;
  description: string;
  image: string;
};

export type PrivateSpaceCard = {
  kind: 'private_space';
  id: string;
  label: string;
  description: string;
  image: string;
};

// ---- Helpers ----------------------------------------------------------------

function slugify(s: string): string {
  return s
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---- Menu introspection -----------------------------------------------------

type MenuIndex = Record<string, MenuItemCard>;

function buildMenuIndex(): MenuIndex {
  const idx: MenuIndex = {};
  const sections = (content as any).menu?.sections;
  if (!sections) return idx;

  // Optional: signature photos keyed by dish name, used to enrich menu items.
  const sigByName: Record<string, string> = {};
  const sigItems = (content as any).signatureSelections?.items ?? [];
  for (const s of sigItems) sigByName[s.name] = s.image;

  for (const [category, section] of Object.entries(sections) as Array<
    [
      string,
      {
        items: Array<{
          name: string;
          description: string;
          price: string;
          image?: string;
          ingredients?: string[];
          allergens?: Allergen[];
          dietary?: DietaryTag[];
          calories?: number;
          spiceLevel?: 0 | 1 | 2 | 3;
        }>;
      },
    ]
  >) {
    for (const item of section.items) {
      const slug = slugify(item.name);
      idx[slug] = {
        kind: 'menu',
        slug,
        category,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image ?? sigByName[item.name] ?? null,
        ingredients: item.ingredients ?? [],
        allergens: item.allergens ?? [],
        dietary: item.dietary ?? [],
        calories: item.calories ?? null,
        spiceLevel: item.spiceLevel ?? null,
      };
    }
  }
  return idx;
}

export const MENU_INDEX: MenuIndex = buildMenuIndex();
export const VALID_MENU_SLUGS = Object.keys(MENU_INDEX);

export function resolveMenuSlug(slug: string): MenuItemCard | null {
  return MENU_INDEX[slug] ?? null;
}

// ---- Tier introspection (alinea-style tasting experiences) -----------------

const TIER_INDEX: Record<string, DiningTierCard> = (() => {
  const tiers = (content as any).diningTiers?.tiers;
  if (!tiers) return {};
  return Object.fromEntries(
    tiers.map((t: DiningTierCard) => [
      t.id,
      { kind: 'tier', id: t.id, label: t.label, description: t.description, image: t.image },
    ]),
  );
})();

export const VALID_TIER_IDS = Object.keys(TIER_INDEX);

export function resolveTier(id: string): DiningTierCard | null {
  return TIER_INDEX[id] ?? null;
}

// ---- Private space introspection -------------------------------------------

const PRIVATE_SPACE_INDEX: Record<string, PrivateSpaceCard> = (() => {
  const items = (content as any).privateEvents?.spaces?.items;
  if (!items) return {};
  return Object.fromEntries(
    items.map((s: { label: string; description: string; image: string }) => {
      const id = slugify(s.label);
      return [id, { kind: 'private_space', id, label: s.label, description: s.description, image: s.image }];
    }),
  );
})();

export const VALID_PRIVATE_SPACE_IDS = Object.keys(PRIVATE_SPACE_INDEX);

export function resolvePrivateSpace(id: string): PrivateSpaceCard | null {
  return PRIVATE_SPACE_INDEX[id] ?? null;
}

// ---- Marker list (built dynamically) ---------------------------------------

function markersSection(): string {
  const lines: string[] = ['# MARKERS (the client strips these from prose and renders themed cards)', ''];
  if (VALID_MENU_SLUGS.length > 0) {
    lines.push('- {{menu:SLUG}}, menu item card. ALWAYS emit for a dish a guest asks about by name. Valid slugs only, see the list below.');
  }
  if (VALID_TIER_IDS.length > 0) {
    lines.push(`- {{tier:ID}}, dining tier card. Valid IDs: ${VALID_TIER_IDS.join(', ')}.`);
  }
  if (VALID_PRIVATE_SPACE_IDS.length > 0) {
    lines.push(`- {{private_space:ID}}, private event space card. Valid IDs: ${VALID_PRIVATE_SPACE_IDS.join(', ')}.`);
  }
  lines.push('- {{hours}}, live hours card with current open/closed status.');
  lines.push('- {{map}}, map + directions.');
  lines.push('- {{reserve}}, reservation CTA button.');
  lines.push('- {{call}}, Call button.');
  lines.push('- {{page:PATH|LABEL}}, internal page link.');
  lines.push('');
  lines.push('NEVER write phone numbers, email addresses, or URLs in prose, emit the marker instead. Consecutive CTA markers merge into a single button row.');
  return lines.join('\n');
}

// ---- Knowledge sections (each returns '' if the source data is absent) -----

function hoursForPrompt(): string {
  const hours = (content as any).brand?.hours;
  if (!hours) return '';
  return `## Hours\n${hours.map((h: { days: string; time: string }) => `  ${h.days}: ${h.time}`).join('\n')}`;
}

function menuForPrompt(): string {
  const sections = (content as any).menu?.sections;
  if (!sections) return '';
  const lines: string[] = [
    '## Menu, valid slugs in brackets; use EXACTLY these in markers',
    '',
    'When ingredient/allergen/dietary metadata is present on an item below, treat it as authoritative. When a field is absent (e.g., no allergens listed), do NOT assume it is allergen-free, say "let me confirm with the kitchen" and emit {{call}}.',
    '',
  ];
  for (const [category, section] of Object.entries(sections) as Array<
    [
      string,
      {
        intro?: string;
        items: Array<{
          name: string;
          description: string;
          price: string;
          ingredients?: string[];
          allergens?: Allergen[];
          dietary?: DietaryTag[];
          calories?: number;
          spiceLevel?: 0 | 1 | 2 | 3;
        }>;
      },
    ]
  >) {
    lines.push(`### ${category}`);
    if (section.intro) lines.push(section.intro);
    for (const item of section.items) {
      const meta: string[] = [];
      if (item.ingredients?.length) meta.push(`ingredients: ${item.ingredients.join(', ')}`);
      if (item.allergens?.length) meta.push(`allergens: ${item.allergens.join(', ')}`);
      if (item.dietary?.length) meta.push(`dietary: ${item.dietary.join(', ')}`);
      if (typeof item.calories === 'number') meta.push(`${item.calories} cal`);
      if (typeof item.spiceLevel === 'number' && item.spiceLevel > 0)
        meta.push(`spice ${item.spiceLevel}/3`);
      const metaStr = meta.length ? ` — ${meta.join(' · ')}` : '';
      lines.push(
        `- [${slugify(item.name)}] ${item.name} · ${item.price}, ${item.description}${metaStr}`,
      );
    }
    lines.push('');
  }
  return lines.join('\n');
}

function tiersForPrompt(): string {
  const tiers = (content as any).diningTiers?.tiers;
  if (!tiers) return '';
  return [
    '## Dining experiences',
    ...tiers.map((t: { id: string; label: string; description: string }) => `- [${t.id}] ${t.label}, ${t.description}`),
  ].join('\n');
}

function privateSpacesForPrompt(): string {
  const items = (content as any).privateEvents?.spaces?.items;
  if (!items) return '';
  return [
    '## Private event spaces',
    ...items.map((s: { label: string; description: string }) => `- [${slugify(s.label)}] ${s.label}, ${s.description}`),
  ].join('\n');
}

function restaurantKnowledge(): string {
  const brand = (content as any).brand ?? {};
  const lines = ['# RESTAURANT KNOWLEDGE', ''];
  if (brand.name) lines.push(`Name: ${brand.name}`);
  if (brand.tagline) lines.push(`Tagline: ${brand.tagline}`);
  if (brand.addressFull) lines.push(`Location: ${brand.addressFull}`);
  if (brand.rating) lines.push(`Rating: ${brand.rating.stars}★ (${brand.rating.count} reviews)`);
  lines.push('Reservations: surface with {{reserve}} only, never paste the URL');
  lines.push('Phone: surface with {{call}} only, never paste the number in prose');
  return lines.join('\n');
}

// ---- Final prompt assembly --------------------------------------------------

export const SYSTEM_PROMPT = [
  VOICE.header,
  VOICE.body,
  VOICE.hospitality,
  VOICE.closingIntelligence,
  `# RESERVATION INTENT (capture via the update_reservation_intent tool)

When a guest's message reveals a reservation detail, call the update_reservation_intent tool with every field you can extract from the ENTIRE conversation so far, not just the latest turn.

- partySize: integer.
- dateISO: strict YYYY-MM-DD. Resolve "Saturday" / "tomorrow" using today as the anchor.
- timeISO: strict 24h HH:MM.
- occasion: short free text, omit if none.
- dietaryNotes: short free text, omit if none.
- specialRequest: any other ask, omit if none.

Call the tool AT THE END of your turn, AFTER the text reply and any markers. The tool does not replace the conversational reply.

On a correction ("make it 6 not 4"), re-emit the full corrected state.`,
  markersSection(),
  VOICE.examples,
  VOICE.hardRules,
  restaurantKnowledge(),
  hoursForPrompt(),
  menuForPrompt(),
  tiersForPrompt(),
  privateSpacesForPrompt(),
  VOICE.manifestoFooter,
]
  .filter((s) => s && s.trim().length > 0)
  .join('\n\n');
