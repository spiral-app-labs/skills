# Concierge Kit Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `concierge-kit/` reference implementation + RECIPE that drops per-client concierge integration from ~45 min to ~15 min, without backporting to existing templates.

**Architecture:** Three-part split of the current concierge into (1) a voice file (per-template, ~60 lines) + (2) a theme file (per-template, ~25 lines of Tailwind-class tokens) + (3) a deterministic knowledge-builder that introspects `content.ts` and composes `SYSTEM_PROMPT` from whichever sections (`menu`, `diningTiers`, `privateEvents`) are present. The parser, streaming, and card logic stay shared and read from the theme tokens.

**Tech Stack:** Next.js 14+ (App Router), React, TypeScript, Tailwind, `@anthropic-ai/sdk` (Haiku 4.5, ephemeral prompt caching).

**Source of truth:** The scaffold is derived from `templates/1776-redesign-01/` (full marker system, closing intelligence) and `templates/alinea-01/` (demonstrates the no-menu / tiers+spaces variant). The scaffold must support both shapes without code changes — only the voice + theme files differ.

**Location rationale:** Kit lives at `research/chat-concierge/concierge-kit/` alongside the PRDs, not inside `templates/`, because it's a reference-to-copy, not a shippable template.

---

## File Structure

**Created by this plan:**

```
research/chat-concierge/concierge-kit/
├── README.md                              # What the kit is, how to use it
├── RECIPE.md                              # 10-step integration checklist
├── scaffold/
│   ├── lib/
│   │   ├── concierge-voice.ts             # Per-template voice surface (REPLACE per fork)
│   │   └── concierge-kb.ts                # Deterministic prompt builder (COPY as-is)
│   ├── components/
│   │   ├── concierge-theme.ts             # Per-template Tailwind token map (REPLACE per fork)
│   │   └── AskConcierge.tsx               # Parser + cards + streaming (COPY as-is)
│   └── app/
│       └── api/
│           └── chat/
│               └── route.ts               # Anthropic stream proxy (COPY as-is)
└── examples/
    ├── voice-editorial.ts                 # alinea-style example
    └── voice-warm-finedining.ts           # 1776-style example
```

**Not modified:** existing templates (1776, alinea, bamzi). Explicitly out of scope per PRD.

---

## Task 0: Commit in-flight em-dash + 1776 voice work

The working tree has uncommitted changes (em-dash policy + 1776 voice rewrite) across the three existing concierges. These must land first so the scaffold derives from the finished voice, not a half-edit state.

**Files:** no new files; commits only.

- [ ] **Step 1: Review the diff**

```bash
git status
git diff --stat HEAD
```

Expected: changes to 1776/alinea/bamzi concierge files + PRD 01 + new PRD 03 draft.

- [ ] **Step 2: Stage concierge-only changes**

```bash
git add restaurant-website-system/templates/1776-redesign-01/lib/concierge-kb.ts \
        restaurant-website-system/templates/1776-redesign-01/components/AskConcierge.tsx \
        restaurant-website-system/templates/1776-redesign-01/content.example.ts \
        restaurant-website-system/templates/alinea-01/lib/concierge-kb.ts \
        restaurant-website-system/templates/alinea-01/components/AskConcierge.tsx \
        restaurant-website-system/templates/bamzi-01/lib/concierge-kb.ts \
        restaurant-website-system/templates/bamzi-01/components/AskConcierge.tsx \
        restaurant-website-system/templates/bamzi-01/app/api/chat/route.ts
```

- [ ] **Step 3: Commit**

```bash
git commit -m "$(cat <<'EOF'
Concierge voice pass: ban em-dashes, sharpen 1776 closing intelligence

Across 1776 / alinea / bamzi: add a hard-rule ban on em/en dashes in the
prompt and a client-side belt-and-suspenders strip (replace " — " → ", ").
1776 gets a full voice rewrite with explicit hospitality principles and
closing-intelligence tiers (high / medium / low intent).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: Stage PRD updates separately**

```bash
git add restaurant-website-system/research/chat-concierge/prd-01-smart-reservation-handoff.md \
        restaurant-website-system/research/chat-concierge/prd-03-concierge-kit-scaffold.md
git commit -m "$(cat <<'EOF'
PRD 01 update (verified OpenTable restref deeplink) + PRD 03 draft

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected after both commits: `git status` shows clean tree.

---

## Task 1: Create directory skeleton

**Files:**
- Create: `research/chat-concierge/concierge-kit/` (and subdirs)

- [ ] **Step 1: Make the directory tree**

```bash
mkdir -p restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib
mkdir -p restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components
mkdir -p restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/app/api/chat
mkdir -p restaurant-website-system/research/chat-concierge/concierge-kit/examples
```

- [ ] **Step 2: Verify**

```bash
find restaurant-website-system/research/chat-concierge/concierge-kit -type d
```

Expected: 6 directories printed.

---

## Task 2: Write `scaffold/lib/concierge-voice.ts`

This is the per-template customization surface. Defines a typed `VOICE` constant that `concierge-kb.ts` composes into the system prompt. The scaffold version uses `<<RESTAURANT_NAME>>`-style placeholders so it's obvious what to replace; the two example voice files (Task 8) show the filled-in version.

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/lib/concierge-voice.ts`

- [ ] **Step 1: Write the file**

```ts
// concierge-voice.ts — per-template customization surface.
//
// REPLACE every <<PLACEHOLDER>> with restaurant-specific text. The VOICE object
// is composed into SYSTEM_PROMPT by concierge-kb.ts — keep field names intact.
//
// Typical fork time: 15–25 minutes of careful prose editing. Examples in
// ../../examples/ show editorial (alinea) and warm-finedining (1776) registers.

export type SuggestedChip = string;

export type Voice = {
  /** One-paragraph establishing header. Name, cuisine, city, chef, identity. */
  header: string;
  /** The "how you speak" bullets. 4–7 bullets, no markdown beyond dashes. */
  body: string;
  /** Hospitality principles — bold-titled short paragraphs. */
  hospitality: string;
  /** Closing intelligence — when to surface {{reserve}} vs {{call}} vs nothing. */
  closingIntelligence: string;
  /** Example guest→reply pairs. 8–14 examples, covering every marker. */
  examples: string;
  /** Hard rules — non-negotiables. Includes the dash ban. */
  hardRules: string;
  /** Chips shown on empty chat — 4 short prompts. */
  suggestedChips: SuggestedChip[];
  /** Optional trailing manifesto text. Empty string if none. */
  manifestoFooter: string;
};

export const VOICE: Voice = {
  header: `You are the digital concierge for <<RESTAURANT_NAME>>, <<ONE-LINE_IDENTITY>>. Your job is to <<PRIMARY_JOB>>. You speak with <<REGISTER — e.g., warm, confident hospitality / editorial restraint / playful coffee-shop charm>>.`,

  body: `# VOICE

- <<TONE_DESCRIPTOR_1 — e.g., "Warm. Confident. Kind.">>
- Short. Two or three sentences of prose per reply. Markers (defined below) do not count toward that limit.
- First-person plural when speaking for the restaurant ("we," "our"). Second person for the guest.
- <<ACKNOWLEDGE_CHOICES_RULE — e.g., "When a guest makes a good choice, acknowledge it genuinely: 'Great call,' 'Excellent pick.' Used sparingly, only when earned.">>
- Match energy. Playful guest → a little playful. Formal guest → formal. Never at a guest's expense.
- Plain sentences. NEVER use em dashes (—) or en dashes (–). Use commas, periods, or separate sentences instead. No markdown. No emojis. No exclamation marks unless genuine delight is warranted.`,

  hospitality: `# HOSPITALITY PRINCIPLES

**Listen first, recommend second.** If a guest's question is vague, ask one clarifying detail before drowning them in options.

**Celebrate their choices.** Reinforce the pick, don't second-guess.

**Remember what they said.** If they mentioned an occasion, bring it back.

**Don't oversell.** Two suggestions beat five. One great recommendation beats three hedged ones.

**Read intent before offering a CTA.** A guest asking "do you have parking?" is not ready to book. A guest asking "is Saturday at 7 open?" is.

**Never push.** The concierge invites, it doesn't close hard.

**Protect them.** Any hint of an allergy → route to a human immediately.`,

  closingIntelligence: `# CLOSING INTELLIGENCE (when to surface {{reserve}})

- **High intent → offer {{reserve}} confidently in the same message as your substantive answer.** Signals: specific date/time, asking about availability, "when can I come in," "how do I book."
- **Medium intent → offer {{reserve}} as a soft close.** Signals: asking what to order, asking about hours. Phrase as an invitation: "Shall I get you a table?"
- **Low intent → do NOT emit {{reserve}}.** Signals: asking about the chef, the story, sourcing, wine program in the abstract.
- **Large parties (7+), private events, corporate dinners → always {{call}}.**
- **Allergen specifics beyond published rules → always {{call}}, with the dish card shown.**
- **Unknown (parking, dress code, accessibility) → acknowledge, then {{call}}.**
- **Off-topic → redirect with grace, no CTA.**

At most two CTAs per response. Often zero is right.`,

  examples: `# EXAMPLES

<<FILL_IN — 8 to 14 guest→reply pairs covering: vague ordering, specific pick, special occasion, hours, allergen deflection, chef story, big party, parking, off-topic, value pick. See ../../examples/voice-warm-finedining.ts for the 1776 template.>>`,

  hardRules: `# HARD RULES (non-negotiable)

- Never invent menu items, prices, producers, or restaurant facts. If you don't know, route to {{call}}.
- Never write phone numbers, emails, or URLs in prose. Use markers.
- <<DIETARY_RULE — e.g., "The kitchen IS 100% gluten-free, you may confirm this plainly. Any OTHER dietary claim, route to {{call}}.">>
- You cannot book a reservation. You surface the button, nothing more.
- No markdown. No emojis. No lists unless specifically asked.
- Always place markers at the end of a sentence or thought, never splitting a sentence in half.`,

  suggestedChips: [
    '<<CHIP_1 — e.g., "What should I order?">>',
    '<<CHIP_2 — e.g., "Are you open tonight?">>',
    '<<CHIP_3 — e.g., "Is it gluten-free?">>',
    '<<CHIP_4 — e.g., "Book a table">>',
  ],

  manifestoFooter: ``,
};
```

- [ ] **Step 2: Typecheck (in isolation — the file only uses TypeScript types, no external imports)**

```bash
npx -y typescript@5.4 tsc --noEmit --target es2022 --module esnext --moduleResolution bundler --strict restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-voice.ts
```

Expected: no errors. (If `npx` prompts to install, accept.)

---

## Task 3: Write `scaffold/lib/concierge-kb.ts` (the introspection-based prompt builder)

This is the heart of the kit. It imports `content` and `VOICE`, then:
1. Exposes resolvers (`resolveMenuSlug`, `resolveTier`, `resolvePrivateSpace`) that return `null` if the corresponding section isn't in `content.ts`.
2. Builds `SYSTEM_PROMPT` by concatenating only the sections whose source data exists. A wine bar with no private events gets no `{{private_space:...}}` markers in its prompt.

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/lib/concierge-kb.ts`

- [ ] **Step 1: Write the file**

```ts
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
```

- [ ] **Step 2: Spot-check the output shape manually**

(Full typecheck isn't meaningful until this file is inside a template with a real `content.ts`. That's the RECIPE step-9 validation.)

Run:

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-kb.ts
```

Expected: ~175 lines.

---

## Task 4: Write `scaffold/components/concierge-theme.ts`

The theme-token abstraction. A per-template file that maps named tokens (trigger pill, primary CTA, user bubble, etc.) to Tailwind class strings specific to that template's Tailwind config.

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/components/concierge-theme.ts`

- [ ] **Step 1: Write the file**

```ts
// concierge-theme.ts — Tailwind class tokens for the concierge UI.
//
// REPLACE each class string with ones that use your template's semantic
// Tailwind tokens (accent, canvas, border, etc.). AskConcierge.tsx reads
// every class from this object — do NOT hand-edit the component file.

export type ConciergeTheme = {
  trigger: {
    /** The floating "Ask X" pill, bottom-right. */
    pillClasses: string;
    /** Shown inside the pill. JSX-safe string or a React node. */
    labelHtml: string;
    /** Optional leading dot indicator. Empty string = no dot. */
    dotClasses: string;
  };
  panel: {
    backdropClasses: string;
    shellClasses: string;
    headerClasses: string;
    titleClasses: string;
    subtitleClasses: string;
  };
  transcript: {
    containerClasses: string;
    emptyHeadingClasses: string;
    emptySubClasses: string;
    userBubbleClasses: string;
    assistantProseClasses: string;
  };
  chips: {
    wrapperClasses: string;
    chipClasses: string;
  };
  composer: {
    wrapperClasses: string;
    inputClasses: string;
    sendClasses: string;
    footnoteClasses: string;
  };
  cards: {
    /** Frame for menu item card + tier card. Use for any photo-led card. */
    mediaCardFrameClasses: string;
    /** Frame for hours / map / private-space cards. */
    infoCardFrameClasses: string;
    categoryEyebrowClasses: string;
    itemTitleClasses: string;
    itemPriceClasses: string;
    itemDescClasses: string;
  };
  cta: {
    /** Primary filled button — used for {{reserve}}. */
    primaryClasses: string;
    /** Outline/ghost button — used for {{call}}. */
    outlineClasses: string;
    /** Tertiary link-style button — used for {{page}}. */
    pageClasses: string;
  };
};

export const THEME: ConciergeTheme = {
  trigger: {
    pillClasses:
      'fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-pill border border-accent bg-surface/95 px-5 py-3 font-display text-[16px] tracking-wide text-accent shadow-xl backdrop-blur transition-all duration-500 hover:bg-accent hover:text-canvas',
    labelHtml: '<em class="not-italic">Ask</em> <span class="italic"><<RESTAURANT_NAME>></span>',
    dotClasses: 'inline-block h-1.5 w-1.5 rounded-full bg-accent',
  },
  panel: {
    backdropClasses: 'absolute inset-0 bg-canvas/80 backdrop-blur-sm',
    shellClasses:
      'absolute bottom-0 left-0 right-0 mx-auto flex h-[min(82vh,680px)] w-full max-w-xl flex-col rounded-t-[24px] border border-border/60 bg-canvas shadow-2xl md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[440px] md:rounded-card',
    headerClasses: 'flex items-center justify-between border-b border-border/60 px-5 py-4',
    titleClasses: 'font-display text-[22px] tracking-wide text-text',
    subtitleClasses: 'text-text-muted',
  },
  transcript: {
    containerClasses: 'flex-1 overflow-y-auto px-5 py-5',
    emptyHeadingClasses: 'font-display text-section-h2 leading-[1.1] text-text',
    emptySubClasses: 'text-body-sm text-text-muted',
    userBubbleClasses:
      'max-w-[85%] rounded-card border border-border/60 bg-surface px-4 py-2.5 text-body-sm text-text',
    assistantProseClasses: 'whitespace-pre-wrap text-body-sm leading-relaxed text-text',
  },
  chips: {
    wrapperClasses: 'flex flex-wrap gap-2 px-5 pb-3',
    chipClasses:
      'rounded-pill border border-border/60 bg-surface px-3 py-1.5 text-body-sm text-text-muted hover:border-accent hover:text-accent',
  },
  composer: {
    wrapperClasses: 'border-t border-border/60 bg-surface px-4 py-3',
    inputClasses:
      'flex-1 rounded-field bg-canvas px-4 py-2.5 text-body-sm text-text placeholder:text-text-subtle focus:outline-none focus:ring-1 focus:ring-accent',
    sendClasses:
      'rounded-pill bg-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-canvas disabled:opacity-40 hover:bg-accent-hover',
    footnoteClasses: 'mt-2 text-[11px] leading-tight text-text-subtle',
  },
  cards: {
    mediaCardFrameClasses:
      'group block overflow-hidden rounded-card border border-border/60 bg-surface transition-colors hover:border-accent/60',
    infoCardFrameClasses: 'rounded-card border border-border/60 bg-surface p-4',
    categoryEyebrowClasses: 'mb-1 text-[10px] uppercase tracking-[3px] text-accent',
    itemTitleClasses: 'font-display text-card-title text-text',
    itemPriceClasses: 'font-display text-card-title text-accent',
    itemDescClasses: 'mt-2 text-body-sm text-text-muted',
  },
  cta: {
    primaryClasses:
      'group inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-3 text-button font-semibold uppercase tracking-[2px] text-canvas shadow-[0_6px_20px_-6px_rgba(201,169,110,0.6)] transition-all hover:-translate-y-[1px] hover:bg-accent-hover',
    outlineClasses:
      'inline-flex items-center gap-2 rounded-pill border border-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-accent hover:bg-accent/10',
    pageClasses:
      'inline-flex items-center gap-2 rounded-pill border border-border/80 bg-surface px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-text hover:border-accent hover:text-accent',
  },
};
```

- [ ] **Step 2: Verify**

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/concierge-theme.ts
```

Expected: ~100 lines.

---

## Task 5: Write `scaffold/components/AskConcierge.tsx`

The marker parser, streaming loop, themed cards, and main component. Derived from `templates/1776-redesign-01/components/AskConcierge.tsx` with two changes:

1. All Tailwind class strings replaced with `THEME.*` reads.
2. Card-rendering code uses optional-chain resolvers: if the template's content has no menu, `resolveMenuSlug` returns `null` and the card is skipped (no crash).

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx`

- [ ] **Step 1: Write the file**

```tsx
'use client';

// AskConcierge.tsx — reference implementation. Copy verbatim into the new
// template. All visual tokens come from ./concierge-theme.ts; all prose
// tokens come from ../lib/concierge-voice.ts. This file should never need
// hand-edits per fork.

import { useEffect, useMemo, useRef, useState } from 'react';
// @ts-expect-error — each template supplies its own content shape.
import { content } from '../content';
import { computeOpenStatus } from '../lib/hours';
import {
  resolveMenuSlug,
  resolveTier,
  resolvePrivateSpace,
  type MenuItemCard,
  type DiningTierCard,
  type PrivateSpaceCard,
} from '../lib/concierge-kb';
import { VOICE } from '../lib/concierge-voice';
import { THEME } from './concierge-theme';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Block =
  | { type: 'text'; text: string }
  | { type: 'marker'; kind: string; id?: string; label?: string };

// ---- Marker parser ----------------------------------------------------------

const MARKER_RE = /\{\{([a-z_]+)(?::([a-z0-9-]+))?(?:\|([^}]+))?\}\}/gi;

function stripDashes(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ', ');
}

function parseResponse(raw: string): Block[] {
  let text = stripDashes(raw);
  const lastOpen = text.lastIndexOf('{{');
  const lastClose = text.lastIndexOf('}}');
  if (lastOpen > lastClose) text = text.slice(0, lastOpen);
  text = text.replace(/^\s*["']+/, '').replace(/["']+\s*$/, '');

  const out: Block[] = [];
  let lastEnd = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(MARKER_RE.source, 'gi');
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastEnd) {
      const before = text.slice(lastEnd, m.index).replace(/\s+$/, ' ');
      if (before.trim()) out.push({ type: 'text', text: before });
    }
    out.push({ type: 'marker', kind: m[1].toLowerCase(), id: m[2], label: m[3]?.trim() });
    lastEnd = m.index + m[0].length;
  }
  if (lastEnd < text.length) {
    const tail = text.slice(lastEnd).replace(/["']+\s*$/, '');
    if (tail.trim()) out.push({ type: 'text', text: tail });
  }
  return out;
}

// ---- Cards (every className reads from THEME) -------------------------------

function MenuCard({ item }: { item: MenuItemCard }) {
  return (
    <a href="/menu" className={THEME.cards.mediaCardFrameClasses}>
      {item.image && (
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden
        />
      )}
      <div className="p-4">
        <div className={THEME.cards.categoryEyebrowClasses}>{item.category}</div>
        <div className="flex items-baseline justify-between gap-3">
          <div className={THEME.cards.itemTitleClasses}>{item.name}</div>
          <div className={THEME.cards.itemPriceClasses}>{item.price}</div>
        </div>
        <p className={THEME.cards.itemDescClasses}>{item.description}</p>
      </div>
    </a>
  );
}

function TierCard({ tier }: { tier: DiningTierCard }) {
  return (
    <a href="#reserve" className={THEME.cards.mediaCardFrameClasses}>
      <div
        className="relative aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${tier.image})` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-3">
          <div className={THEME.cards.itemTitleClasses}>{tier.label}</div>
        </div>
      </div>
      <p className={THEME.cards.itemDescClasses}>{tier.description}</p>
    </a>
  );
}

function PrivateSpaceCard({ space }: { space: PrivateSpaceCard }) {
  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <div
        className="aspect-[16/10] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${space.image})` }}
        aria-hidden
      />
      <div className="px-4 py-3">
        <div className={THEME.cards.itemTitleClasses}>{space.label}</div>
        <p className={THEME.cards.itemDescClasses}>{space.description}</p>
      </div>
    </div>
  );
}

function HoursCard() {
  const hoursConfig = (content as any).brand?.hoursConfig;
  const hours = (content as any).brand?.hours ?? [];
  const [status, setStatus] = useState(() =>
    hoursConfig ? computeOpenStatus(hoursConfig) : { state: 'open', label: 'Open' },
  );
  useEffect(() => {
    if (!hoursConfig) return;
    const t = setInterval(() => setStatus(computeOpenStatus(hoursConfig)), 60_000);
    return () => clearInterval(t);
  }, [hoursConfig]);

  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <div className={THEME.cards.itemTitleClasses}>{status.label}</div>
      <div className={`mt-3 space-y-1 ${THEME.cards.itemDescClasses}`}>
        {hours.map((h: { days: string; time: string }) => (
          <div key={h.days} className="flex justify-between gap-4">
            <span>{h.days}</span>
            <span>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapCard() {
  const brand = (content as any).brand ?? {};
  const addressFull =
    brand.addressFull ?? (brand.address ? `${brand.address.line1}, ${brand.address.line2}` : '');
  const geo = brand.geo ?? { lat: 0, lng: 0 };
  const q = encodeURIComponent(addressFull);
  const src = `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <iframe src={src} title="Location" className="block h-48 w-full border-0" loading="lazy" />
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className={THEME.cards.itemDescClasses}>{addressFull}</div>
        <a href={directions} target="_blank" rel="noreferrer" className={THEME.cta.outlineClasses}>
          Directions →
        </a>
      </div>
    </div>
  );
}

function ReserveButton() {
  const url = (content as any).brand?.reservationUrl ?? '#reserve';
  return (
    <a href={url} target="_blank" rel="noreferrer" className={THEME.cta.primaryClasses}>
      Reserve <span aria-hidden>→</span>
    </a>
  );
}

function CallButton() {
  const phone = (content as any).brand?.phone ?? '';
  return (
    <a href={`tel:+${phone.replace(/[^0-9]/g, '')}`} className={THEME.cta.outlineClasses}>
      Call {phone}
    </a>
  );
}

function PageLinkButton({ path, label }: { path: string; label: string }) {
  const validPaths: Record<string, string> = {
    menu: '/menu',
    about: '/about',
    contact: '/contact',
    gallery: '/gallery',
    'private-events': '/private-events',
    home: '/',
  };
  const href = validPaths[path] ?? null;
  if (!href) return null;
  return (
    <a href={href} className={THEME.cta.pageClasses}>
      {label} <span aria-hidden>→</span>
    </a>
  );
}

const CTA_KINDS = new Set(['reserve', 'call', 'page']);

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function renderCtaButton(block: Extract<Block, { type: 'marker' }>, i: number) {
  if (block.kind === 'reserve') return <ReserveButton key={i} />;
  if (block.kind === 'call') return <CallButton key={i} />;
  if (block.kind === 'page' && block.id)
    return <PageLinkButton key={i} path={block.id} label={block.label ?? block.id} />;
  return null;
}

function renderRichBlock(block: Extract<Block, { type: 'marker' }>, i: number) {
  if (block.kind === 'menu' && block.id) {
    const item = resolveMenuSlug(block.id);
    return item ? <MenuCard key={i} item={item} /> : null;
  }
  if (block.kind === 'tier' && block.id) {
    const tier = resolveTier(block.id);
    return tier ? <TierCard key={i} tier={tier} /> : null;
  }
  if (block.kind === 'private_space' && block.id) {
    const space = resolvePrivateSpace(block.id);
    return space ? <PrivateSpaceCard key={i} space={space} /> : null;
  }
  if (block.kind === 'hours') return <HoursCard key={i} />;
  if (block.kind === 'map') return <MapCard key={i} />;
  return null;
}

function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === 'text') {
      out.push(
        <p key={`t-${i}`} className={THEME.transcript.assistantProseClasses}>
          {b.text}
        </p>,
      );
      i++;
      continue;
    }
    if (CTA_KINDS.has(b.kind)) {
      const ctaButtons: React.ReactNode[] = [];
      while (
        i < blocks.length &&
        blocks[i].type === 'marker' &&
        CTA_KINDS.has((blocks[i] as Extract<Block, { type: 'marker' }>).kind)
      ) {
        const btn = renderCtaButton(blocks[i] as Extract<Block, { type: 'marker' }>, i);
        if (btn) ctaButtons.push(btn);
        i++;
      }
      if (ctaButtons.length > 0) out.push(<CtaRow key={`cta-${i}`}>{ctaButtons}</CtaRow>);
      continue;
    }
    const rich = renderRichBlock(b as Extract<Block, { type: 'marker' }>, i);
    if (rich) out.push(rich);
    i++;
  }
  return out;
}

function AssistantBubble({ text }: { text: string }) {
  const blocks = useMemo(() => parseResponse(text), [text]);
  if (blocks.length === 0) {
    return (
      <div className="inline-flex gap-1" aria-label="Thinking">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" style={{ animationDelay: '150ms' }} />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" style={{ animationDelay: '300ms' }} />
      </div>
    );
  }
  return <div className="space-y-3">{renderBlocks(blocks)}</div>;
}

// ---- Main component --------------------------------------------------------

export function AskConcierge() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.35) setVisible(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  async function send(userMessage: string) {
    if (!userMessage.trim() || streaming) return;
    setInput('');
    const next: ChatMessage[] = [...messages, { role: 'user', content: userMessage.trim() }];
    setMessages(next);
    setStreaming(true);
    setMessages([...next, { role: 'assistant', content: '' }]);

    let acc = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.body) throw new Error('No response body');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice(6).trim();
          if (!payload) continue;
          try {
            const parsed = JSON.parse(payload) as { text?: string; done?: boolean; error?: string };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              acc += parsed.text;
              setMessages([...next, { role: 'assistant', content: acc }]);
            }
          } catch { /* ignore malformed frame */ }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setMessages([
        ...next,
        { role: 'assistant', content: `Sorry, I hit a snag (${msg}). Please call us directly. {{call}}` },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  const emptyHeading = (content as any).brand?.tagline ?? 'How can we help?';
  const emptySub = 'Ask about the menu, hours, directions, or a table tonight.';

  return (
    <>
      <button
        type="button"
        aria-label="Ask the concierge"
        onClick={() => setOpen(true)}
        className={`${THEME.trigger.pillClasses} ${
          visible && !open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {THEME.trigger.dotClasses && <span className={THEME.trigger.dotClasses} aria-hidden />}
        <span dangerouslySetInnerHTML={{ __html: THEME.trigger.labelHtml }} />
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className={THEME.panel.backdropClasses} onClick={() => setOpen(false)} />
        <div
          role="dialog"
          aria-label="Concierge"
          className={`${THEME.panel.shellClasses} transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className={THEME.panel.headerClasses}>
            <div className={THEME.panel.titleClasses} dangerouslySetInnerHTML={{ __html: THEME.trigger.labelHtml }} />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className={THEME.transcript.containerClasses}>
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className={THEME.transcript.emptyHeadingClasses}>{emptyHeading}</p>
                <p className={THEME.transcript.emptySubClasses}>{emptySub}</p>
              </div>
            )}
            <div className="mt-4 space-y-5">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex justify-end">
                    <div className={THEME.transcript.userBubbleClasses}>{m.content}</div>
                  </div>
                ) : (
                  <div key={i} className="max-w-full">
                    <AssistantBubble text={m.content} />
                  </div>
                ),
              )}
            </div>
          </div>

          {messages.length === 0 && (
            <div className={THEME.chips.wrapperClasses}>
              {VOICE.suggestedChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className={THEME.chips.chipClasses}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className={THEME.composer.wrapperClasses}
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask…"
                disabled={streaming}
                className={THEME.composer.inputClasses}
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className={THEME.composer.sendClasses}
              >
                Send
              </button>
            </div>
            <p className={THEME.composer.footnoteClasses}>
              AI concierge, confirm with the restaurant for allergy or time-sensitive questions.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify size**

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx
```

Expected: ~400 lines.

---

## Task 6: Write `scaffold/app/api/chat/route.ts`

Near-identical to the existing 1776 route. No template-specific references.

**Files:**
- Create: `research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts`

- [ ] **Step 1: Write the file**

```ts
// app/api/chat/route.ts — Anthropic streaming proxy. Copy verbatim.
import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT } from '../../../lib/concierge-kb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const client = new Anthropic();

export async function POST(req: Request) {
  let body: { messages?: Array<{ role: 'user' | 'assistant'; content: string }> };

  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid json' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!body.messages || body.messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const claudeStream = client.messages.stream({
          model: 'claude-haiku-4-5',
          max_tokens: 512,
          system: [
            {
              type: 'text',
              text: SYSTEM_PROMPT,
              cache_control: { type: 'ephemeral' },
            },
          ],
          messages: body.messages!,
        });

        for await (const event of claudeStream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`),
            );
          }
        }

        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
        controller.close();
      } catch (err) {
        const message = err instanceof Error ? err.message : 'unknown error';
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
    },
  });
}
```

- [ ] **Step 2: Verify**

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts
```

Expected: ~65 lines.

---

## Task 7: Write `concierge-kit/RECIPE.md`

The 10-step checklist for adding the concierge to a new template.

**Files:**
- Create: `research/chat-concierge/concierge-kit/RECIPE.md`

- [ ] **Step 1: Write the file**

````markdown
# Concierge Kit — Integration Recipe

Time budget: 15 minutes for an experienced hand, 25 minutes the first time.
Assumes the target template already has `content.ts`, Tailwind set up, and
`app/layout.tsx`.

## 1. Copy the scaffold

```bash
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-kb.ts \
      <TARGET_TEMPLATE>/lib/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-voice.ts \
      <TARGET_TEMPLATE>/lib/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx \
      <TARGET_TEMPLATE>/components/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/concierge-theme.ts \
      <TARGET_TEMPLATE>/components/
mkdir -p <TARGET_TEMPLATE>/app/api/chat
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts \
      <TARGET_TEMPLATE>/app/api/chat/
```

## 2. Fill in `lib/concierge-voice.ts`

Replace every `<<PLACEHOLDER>>`. Budget: 10–15 minutes. If unsure, use one of
`../examples/voice-editorial.ts` or `voice-warm-finedining.ts` as a starting
point and edit from there.

Required edits: `header`, `body`, `hospitality`, `closingIntelligence`,
`examples`, `hardRules`, `suggestedChips`.

## 3. Fill in `components/concierge-theme.ts`

Map every class string to ones using this template's Tailwind tokens
(`accent`, `canvas`, `border`, `text-muted`, etc.). If a token doesn't exist
in the template's `tailwind.config.js`, either add it or substitute a plain
value. Budget: 5 minutes.

Also replace `<<RESTAURANT_NAME>>` in `trigger.labelHtml`.

## 4. Add reservation fields to `content.ts`

Under the `brand` object, add:

```ts
reservationPlatform: 'opentable', // 'opentable' | 'resy' | 'tock' | 'native'
reservationUrl: 'https://www.opentable.com/<slug>',
reservationRestref: '123456', // numeric ID; see PRD 01 for how to find it
```

The `reservationRestref` unlocks PRD 01's smart reservation handoff later. If
you don't have it yet, leave it empty and the Reserve button will fall back
to the slug URL.

## 5. Mount `<AskConcierge />` in `app/layout.tsx`

```tsx
import { AskConcierge } from '../components/AskConcierge';

// Inside <body>, after {children}:
<AskConcierge />
```

## 6. Add the Anthropic SDK dependency

```bash
cd <TARGET_TEMPLATE>
npm install @anthropic-ai/sdk
```

## 7. Add `ANTHROPIC_API_KEY` to env

```bash
echo 'ANTHROPIC_API_KEY=sk-ant-...' >> <TARGET_TEMPLATE>/.env.local
echo 'ANTHROPIC_API_KEY=sk-ant-placeholder' >> <TARGET_TEMPLATE>/.env.example
```

## 8. Typecheck

```bash
cd <TARGET_TEMPLATE>
npm run typecheck
```

If `content.ts` doesn't have a section the kit expects (e.g., no `diningTiers`),
the `(content as any).foo?.bar` optional chains handle it — no edits needed.
If you get a type error on `import { content } from '../content'` in
`concierge-kb.ts`, confirm your content file is named `content.ts` (not
`content.example.ts`). If it's the example file, update the two imports.

## 9. Smoke-test 8 prompts

Start the dev server (`npm run dev`) and run through these in the chat:

1. "What should I order?" — should recommend specific items with {{menu:...}} cards (or decline gracefully if no menu).
2. "Are you open tonight?" — should emit {{hours}}.
3. "Where are you?" — should emit {{map}}.
4. "Is the <dish> gluten-free?" — should deflect to {{call}} and show the dish card.
5. "What's the weather?" — should redirect without a CTA.
6. "I want a table for 8 on Saturday." — should route to {{call}} (large party).
7. "Do you do private events?" — emits {{private_space:...}} or {{call}} depending on content.
8. "What's the cheapest thing?" — should pick a real menu item by price, not invent.

## 10. Verify Reserve tap

Desktop + mobile Safari: Reserve button opens the correct platform URL. If
`reservationRestref` is populated, confirm party size / date / time pre-fill
on OpenTable (see PRD 01 acceptance criteria).

---

## Troubleshooting

- **"content is undefined"** → your template's content file is named
  `content.example.ts` not `content.ts`. Update imports in `concierge-kb.ts`
  and `AskConcierge.tsx`.
- **No cards render** → Haiku is emitting markers but slugs aren't in
  MENU_INDEX. Check that `slugify(name)` matches the slugs the model sees in
  the prompt (the `[slug]` prefix before each item).
- **Every response has an em-dash** → client-side `stripDashes()` should catch
  these; if you still see them, the CSS is rendering `, ` as a dash
  (unlikely). Check Tailwind doesn't have a font-feature-settings override.
- **Tailwind classes from the theme aren't applied** → the class strings in
  `concierge-theme.ts` reference tokens that don't exist in your
  `tailwind.config.js`. Add them or substitute literal values.
````

- [ ] **Step 2: Verify**

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/RECIPE.md
```

Expected: ~115 lines.

---

## Task 8: Write two example voice files

Concrete examples make the scaffold's placeholders actionable.

**Files:**
- Create: `research/chat-concierge/concierge-kit/examples/voice-warm-finedining.ts` (1776-style)
- Create: `research/chat-concierge/concierge-kit/examples/voice-editorial.ts` (alinea-style)

- [ ] **Step 1: Write `voice-warm-finedining.ts`**

Derive from `templates/1776-redesign-01/lib/concierge-kb.ts` — extract the voice-level text (everything before `# RESTAURANT KNOWLEDGE`) and wrap it in the `Voice` shape. Full `examples` string with the 14 1776 guest→reply pairs.

(The file is ~150 lines. Source material is in `1776-redesign-01/lib/concierge-kb.ts` lines 89–196. Copy that prose into the `Voice` fields, section by section: `header` = line 89's establishing paragraph; `body` = the VOICE section; `hospitality` = HOSPITALITY PRINCIPLES section; etc.)

- [ ] **Step 2: Write `voice-editorial.ts`**

Derive from `templates/alinea-01/lib/concierge-kb.ts` — same extraction, but the editorial register. Source: `alinea-01/lib/concierge-kb.ts` lines 87–126.

- [ ] **Step 3: Verify both parse as TypeScript**

```bash
wc -l restaurant-website-system/research/chat-concierge/concierge-kit/examples/*.ts
```

Expected: 2 files, roughly 130–170 lines each.

---

## Task 9: Write `concierge-kit/README.md`

Top-level entry point. What the kit is, who it's for, how to use it, what it deliberately doesn't do.

**Files:**
- Create: `research/chat-concierge/concierge-kit/README.md`

- [ ] **Step 1: Write the file**

````markdown
# Concierge Kit

Reference scaffold for adding the AI concierge to a new restaurant template.
Drops integration time from ~45 min to ~15 min by isolating the two things
that actually differ per client (voice + theme tokens) from everything that
doesn't (parser, streaming, cards, prompt structure).

## When to use this

- Forking a new template from scratch that needs the concierge.
- Spinning up a per-client customization (paid tier).

## When NOT to use this

- Patching one of the three existing concierges (1776, alinea, bamzi). They
  predate the kit and stay as-is per PRD 03.
- Building a one-off that needs architectural changes (new marker types,
  new card shapes). Fork the kit, don't shoehorn.

## What's in the box

```
scaffold/
├── lib/concierge-voice.ts      REPLACE per fork (the voice — ~60 lines)
├── lib/concierge-kb.ts          COPY verbatim (the prompt builder)
├── components/concierge-theme.ts  REPLACE per fork (~25 lines of classes)
├── components/AskConcierge.tsx    COPY verbatim (parser + cards + streaming)
└── app/api/chat/route.ts        COPY verbatim (Anthropic proxy)
examples/
├── voice-warm-finedining.ts    1776-style filled-in voice
└── voice-editorial.ts          alinea-style filled-in voice
RECIPE.md                        The 10-step integration checklist
```

## Philosophy

- **Templates are atomic.** No shared npm package, no runtime dependency.
  Each template owns its copy after forking.
- **Voice and theme are the only things that differ.** If you find yourself
  editing `concierge-kb.ts` or `AskConcierge.tsx` in a fork, stop — that's a
  signal the kit needs to evolve.
- **Introspection over configuration.** The kit reads whatever's in
  `content.ts` and auto-composes the prompt. A template with no menu gets no
  menu section. A template with tiers gets tiers.

## Ship log

- 2026-04-21: initial kit shipped (PRD 03).
````

---

## Task 10: Final validation + commit

- [ ] **Step 1: Tree check**

```bash
find restaurant-website-system/research/chat-concierge/concierge-kit -type f | sort
```

Expected output (10 files):

```
.../concierge-kit/README.md
.../concierge-kit/RECIPE.md
.../concierge-kit/examples/voice-editorial.ts
.../concierge-kit/examples/voice-warm-finedining.ts
.../concierge-kit/scaffold/app/api/chat/route.ts
.../concierge-kit/scaffold/components/AskConcierge.tsx
.../concierge-kit/scaffold/components/concierge-theme.ts
.../concierge-kit/scaffold/lib/concierge-kb.ts
.../concierge-kit/scaffold/lib/concierge-voice.ts
```

- [ ] **Step 2: Dry-run the RECIPE mentally against `bramble-01`**

Without actually copying files, walk through RECIPE.md steps 1–10 in your head for `templates/bramble-01/`. For each step, note: does bramble have what the step assumes (content.ts shape, Tailwind tokens, layout.tsx structure)? Any gap = a fix in the scaffold or a footnote in RECIPE.md.

- [ ] **Step 3: Commit**

```bash
git add restaurant-website-system/research/chat-concierge/concierge-kit
git commit -m "$(cat <<'EOF'
PRD 03: concierge kit scaffold + RECIPE

Three-part split (voice / theme / kb) with introspection-based prompt
builder. New-template concierge integration drops from ~45 min to ~15.
Existing templates (1776, alinea, bamzi) untouched per PRD.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Spec coverage check (self-review)

| PRD requirement | Task |
|---|---|
| `concierge-kit/scaffold/` with 3 files | Tasks 3, 5, 6 |
| Deterministic knowledge-builder (introspection) | Task 3 |
| Theme-token abstraction (`concierge-theme.ts`) | Tasks 4, 5 |
| `RECIPE.md` with 10 steps | Task 7 |
| `lib/concierge-voice.ts` as customization surface | Task 2 |
| `content.ts` additions (`reservationPlatform`, `reservationRestref`) | Task 7, step 4 |
| No retroactive refactor of 1776/alinea/bamzi | Entire plan — new dir only |
| No shared npm package | Entire plan — copy-paste only |
| No CLI / codegen | Entire plan |
| Example voice files (open Q #2 in PRD) | Task 8 |
| Success metric: ≤15 min integration | Task 10 step 2 (mental dry-run) |

Open PRD questions addressed:
- **CSS variables vs static strings** (PRD open Q #1): static strings. Documented in `concierge-theme.ts`.
- **Example content archetypes** (PRD open Q #2): two example voice files.
- **Versioning** (PRD open Q #3): not versioned. Ship log in README.md.
