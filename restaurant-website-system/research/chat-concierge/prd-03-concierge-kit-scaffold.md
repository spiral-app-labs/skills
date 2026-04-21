# PRD 03 — Concierge Kit (reusable scaffold for per-client forks)

**Status:** draft, queued after PRD 01 (smart reservation handoff)
**Dependencies:** none; standalone refactor
**Estimated build:** 1 to 1.5 hours

## Problem

Adding the AI concierge to a brand-new restaurant template today takes 30 to 60 minutes of copy-paste-tweak across three files, most of which is boilerplate that's 70 to 99% identical across existing templates (1776, alinea, bamzi). Every new client lead becomes a manual re-implementation of something we've already built three times.

We want a kit that drops adding-concierge-to-a-new-template down to 10 to 15 minutes, while keeping the "template as atomic unit" design philosophy intact (no shared npm package, no runtime dependency across templates).

## Goal

A `concierge-kit/` directory at the research level containing:

1. **A scaffold** of the three files (`lib/concierge-kb.ts`, `components/AskConcierge.tsx`, `app/api/chat/route.ts`) with clearly marked per-template placeholders.
2. **A deterministic knowledge-builder pattern** that auto-composes the prompt from whatever is present in `content.ts` (menu items with slugs if present, dining tiers if present, private spaces if present, etc.) so the KB file is mostly "configure the voice, the rest writes itself."
3. **A theme-token abstraction** so card components read from a small `concierge-theme.ts` per template (bg color, accent, radius, typography variables) instead of hardcoded Tailwind classes.
4. **A checklist** in `concierge-kit/RECIPE.md` walking through the 10 steps to add concierge to a new template, including the OpenTable `restref` capture from PRD 01.

## Non-goals

- No shared npm package, no monorepo hoist, no runtime dependency between templates. Each template still owns its own copy after forking from the kit.
- No code generation / CLI tool. This is a copy-paste recipe, not a `create-concierge` scaffolder.
- No retroactive refactor of the three existing templates. They work. Only new forks use the kit.

## Deliverables

### 1. `concierge-kit/scaffold/` (reference implementation to copy-paste)

Three files mirroring the template layout:

- `lib/concierge-kb.ts` — deterministic prompt builder, handles optional sections (no menu? skip the menu prompt. no dining tiers? skip those markers).
- `components/AskConcierge.tsx` — card components read theme tokens from an imported `concierge-theme.ts`. Marker parser, streaming, suggested chips all identical to current templates.
- `app/api/chat/route.ts` — near-identical to existing. Reads system prompt from `lib/concierge-kb.ts`.

Per-restaurant customization surface (the only things that change per fork):

- `lib/concierge-voice.ts` — 40-60 lines of voice customization: restaurant name, register (formal vs warm vs casual), closing-intelligence nuances, suggested chips, any hard rules specific to that restaurant (e.g., "kitchen is 100% gluten-free").
- `components/concierge-theme.ts` — ~20 lines of theme tokens: trigger pill style, card bg/border, primary CTA color + shadow, user-bubble style.
- `content.ts` additions: `reservationPlatform`, `reservationRestref`, optional `winePairings` map (for future PRD on pairing intelligence).

### 2. `concierge-kit/RECIPE.md`

Numbered checklist walking through the 10-step integration:

1. Copy the three scaffold files into the new template.
2. Create `lib/concierge-voice.ts`, fill in restaurant name + register + voice examples.
3. Create `components/concierge-theme.ts`, map the 6-8 theme tokens to the template's Tailwind classes.
4. Add `reservationPlatform` + `reservationRestref` to `content.ts` `brand` section.
5. Import and mount `<AskConcierge />` in `app/layout.tsx`.
6. Add `@anthropic-ai/sdk` to `package.json`.
7. Add `ANTHROPIC_API_KEY` to `.env.example` and `.env.local`.
8. Run `npm run typecheck`.
9. Start dev server, test 8 prompts (menu Q, hours Q, map Q, allergen Q, off-topic Q, large-party Q, private-event Q, "what's cheapest").
10. Verify Reserve tap pre-fills the target platform correctly (desktop + mobile).

### 3. Knowledge-builder pattern

The scaffold's `concierge-kb.ts` introspects `content.ts` and includes only the sections that exist:

```ts
// Pseudocode
if (content.menu?.sections) { include menu knowledge + {{menu:slug}} markers }
if (content.diningTiers?.tiers) { include dining-tier knowledge + {{tier:id}} markers }
if (content.privateEvents?.spaces) { include private-space knowledge + {{private_space:id}} markers }
```

This means a wine bar template with no private events section just doesn't get those markers. A fine-dining template with tasting menus only gets the tier markers. No dead branches in the prompt.

## Success metrics

- A new template integration takes ≤ 15 minutes from "copy scaffold" to "chat widget answering menu questions correctly."
- Zero duplicated logic between templates for parser, streaming, hours card, map card (only theme tokens differ).
- When we ship PRD 01 (smart reservation handoff), PRD 02 (private events), or future features, we update the kit once and the recipe handles per-template adoption.

## Out of scope

- Bamzi/alinea/1776 backport. They stay as-is.
- Shared build pipeline, shared package publishing, shared CI.
- Multi-language support (separate PRD if needed).
- Voice customization UI for non-engineers (owner editing their concierge prompt from a dashboard) — that's SaaS-track, not agency-track.

## Open questions

1. Should `concierge-theme.ts` use CSS variables (so dark-mode / seasonal tweaks work without code changes) or stay as static Tailwind class strings? Lean: static strings for now, CSS variables if a client asks for theming.
2. Should the scaffold include example content.ts snippets for different register archetypes (editorial, casual, coffee shop) so new templates see what the kit expects? Probably yes — add to RECIPE.md.
3. Do we version the kit (e.g., tagged snapshots per time we ship a new feature)? Lean: no, latest-in-repo is fine given small team.
