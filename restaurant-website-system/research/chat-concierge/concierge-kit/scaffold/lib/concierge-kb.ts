// concierge-kb.ts — deterministic prompt builder. Introspects content.ts and
// composes the system prompt from whatever sections exist (menu, diningTiers,
// privateEvents). Copy this file verbatim — do NOT edit per-template. All
// per-template text lives in concierge-voice.ts.

// @ts-expect-error — each template supplies its own content shape; we only
// narrow at runtime via optional chaining. If TypeScript complains here in a
// particular template, add a local `.d.ts` declaring the union shape.
import { content } from '../content';
import { VOICE } from './concierge-voice';

// ---- Card types -------------------------------------------------------------

export type MenuItemCard = {
  kind: 'menu';
  slug: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
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
    [string, { items: Array<{ name: string; description: string; price: string }> }]
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
        image: sigByName[item.name] ?? null,
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
  const lines: string[] = ['## Menu, valid slugs in brackets; use EXACTLY these in markers'];
  for (const [category, section] of Object.entries(sections) as Array<
    [string, { intro?: string; items: Array<{ name: string; description: string; price: string }> }]
  >) {
    lines.push(`### ${category}`);
    if (section.intro) lines.push(section.intro);
    for (const item of section.items) {
      lines.push(`- [${slugify(item.name)}] ${item.name} · ${item.price}, ${item.description}`);
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
