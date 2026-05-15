# Bistro Wasabi — Art Bible

Reverse-engineered from `public/images/raw/inspo.png` (approved 2026-05-11).

Register: **dark-monolithic / cinematic-editorial**. The brand promise is "downtown-Chicago omakase ceremony hidden inside a strip-mall on Algonquin Road." Every component below must encode that promise.

---

## 1. Palette

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#0E0B08` | Page / hero background — near-black with a fractional warm bias (brown undertone). Not `#000`. |
| `ink` | `#EFE3CC` | Primary text + wordmark — warm cream / ivory. Not pure white. |
| `inkMuted` | `#C9B894` | Secondary text + eyebrow tracked-caps. Cream desaturated by ~25%. |
| `accent` | `#8C6A3A` | Brass / aged-gold detail. Used VERY sparingly — borders on the RESERVE pill, hairline rules, hover underlines. Never as fills. |
| `plateShadow` | `#1A1410` | Slightly lifted near-black for elevated surfaces (review cards, footer band). Sits 8–10% above canvas. |

**Single-accent discipline.** No second accent color exists. The contrast is built from the photography's warmth, not from competing hues.

Photo overlay (only when needed for legibility): `rgba(14, 11, 8, 0.55)` darken on top of hero loop video so the ink wordmark holds contrast.

## 2. Typography

| Element | Family | Weight / style | Size scale (mobile → desktop) | Tracking | Transform |
|---|---|---|---|---|---|
| Wordmark / h1 | **Cormorant Garamond** | 500, italic | `clamp(56px, 9vw, 132px)` | `-0.01em` | Default casing (capital letters in source, e.g. "BISTRO WASABI" appears as set caps in the inspo — preserve as-is) |
| Display h2 | Cormorant Garamond | 500, italic | `clamp(34px, 5vw, 72px)` | `-0.005em` | Title-case |
| Eyebrow / small caps | **Inter** | 500 | `11px → 12px` | `+0.32em` | UPPERCASE |
| Body | **Inter** | 400 | `15px → 16px`, line-height 1.7 | normal | Sentence case |
| Body italic accent | Cormorant Garamond | 400, italic | inherits body size | normal | Used for pull quotes and the hero sub line |
| UI label / button | Inter | 500 | `11px → 12px` | `+0.18em` | UPPERCASE |

**Pairing logic.** Cormorant italic carries the ceremonial / heritage register — it's the editorial-magazine voice. Inter handles all utility (nav, buttons, captions, body). Two families, strict roles, no third.

Google Fonts imports (paste into `app/layout.tsx`):
```ts
import { Cormorant_Garamond, Inter } from 'next/font/google'
const cormorant = Cormorant_Garamond({ weight: ['400', '500'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-body' })
```

## 3. Spacing rhythm

| Token | Mobile | Desktop |
|---|---|---|
| Section vertical padding | `py-20 (80px)` | `py-32 (128px)` |
| Hero text stack gap | `gap-4 (16px)` | `gap-6 (24px)` |
| Horizontal gutter | `px-6 (24px)` | `px-12 (48px)` |
| Container max-width | n/a | `1280px` |
| Grid columns | 1-col stack | 12-col with 8-col asymmetric content slots |

The composition leans on **negative space, not grid density.** Sections should breathe. Avoid more than 2 columns on desktop except in proof/menu blocks.

## 4. Motion philosophy

- **Reveal cadence**: stagger entrance — wordmark first (0.4s after load), eyebrow + sub at 0.6s, CTA stamp at 0.8s. Use framer-motion variants per pattern #1 in `restaurant-template-animations`.
- **Hero motion**: `BackgroundVideoAliveness` (pattern #11). The hero loop video plays autoplay-muted-loop behind everything at `100dvh`. CSS `object-fit: cover; object-position: center` handles mobile crop.
- **Hover treatment**: underline-rail on links (pattern #8) — slow 500ms scale-x 0→1, brass color sweep on hover. No bounce.
- **Scroll-driven**: parallax hero NOT needed (we already have the video for liveness). Use parallax only on signature dish tile if shipping one.
- **Reduced-motion fallback**: `useReducedMotion()` + globals.css `@media` guard. All hero animation drops to plain crossfade; video plays one cycle only (or shows poster).
- **Page transitions**: pattern #10, 220–300ms opacity + 6px y. Fits the slow ceremonial register.

## 5. Photography grading

- **Lighting**: warm tungsten, single window-source feel, deep shadows. Not bright daylight. Not food-blog flat lighting.
- **Color grading**: painterly, slight desaturation, warm shadows that lean brown/amber rather than blue/black.
- **Composition**: tight on subject for hero-class shots; 3/4 or overhead 90° for dish tiles. Always center-balanced — the focal point sits dead center so CSS center-crop on mobile keeps it anchored.
- **Depth-of-field**: shallow on signature dishes (caviar / garnish in focus, plate edges falling off); deeper for environmental shots.
- **Style applies to**: hero loop video, signature-dish tiles, gallery, About headshots if any. **Does NOT apply to**: menu page (text-only, no photos), location/contact (functional, can use cleaner light).

## 6. Component register notes

- **Nav**: minimal floating pill in top-right, NOT a full-width bar. 3 links max (Menu · Locations · Story) + a "RESERVE" CTA echo. Inter, 12px, tracked +0.18em, UPPERCASE. Ink color on transparent. Hover: brass accent underline-rail.
- **Hero**: `100dvh` full-viewport, the Bunny hero video as the only background (no second image layer). Wordmark anchored central-third, eyebrow above, sub below, RESERVE pill in bottom-right corner. Sticky CTA stays visible at any scroll.
- **Menu items**: two-column grid on desktop. Dish name in Cormorant italic, price right-aligned same family same size, weight 400 (lighter than the name). 1-line description in Inter body, inkMuted. NO item photos. Category headers in eyebrow tracked-caps.
- **Reviews / proof section**: `AnonReviewCarousel` (per `restaurant-fork-improvement` Section 1.1). Cards on `plateShadow` background, ink quote text, no reviewer names, "GOOGLE REVIEW" platform tag in eyebrow style. 8–18 words per card. Brass accent on the active-card glow pulse.
- **Footer**: single-line address + hours + phone in body Inter, ink color. Wordmark anchor centered above the line in Cormorant italic at h2 scale. NO social icons (the register doesn't beg for follows).
- **About / story page**: long-form body in Cormorant italic at 18px, line-height 1.8, single-column 60ch max-width. Drop-cap on first paragraph in Cormorant italic, ink color, 72px. No images on this page — the prose is the proof.
- **Locations panel**: split into LITH + Hoffman Estates cards on dark `plateShadow` background. Map embed below each. Address + phone in Inter, eyebrow labels in tracked-caps. Each card has its own "RESERVE" and "DIRECTIONS" link in brass accent on hover.

## 7. What this register IS / IS NOT

The cohesion test. Every non-hero section must answer "yes" to all of #1 and "no" to all of #2.

### Positive identity — this register IS:
- Ceremonial and unhurried — every section gives the eye room to land
- Heritage-leaning — Since 2000 is a quiet boast, not a banner
- Photo-led where photo earns it (hero, dish tiles) and prose-led where prose carries it (menu, About)
- Single-accent — brass appears only on hover and on hairline rules
- Italic-serif voiced — Cormorant carries the brand register everywhere except utility
- Restraint-as-confidence — the page assumes you already chose to come; it doesn't oversell

### Opposition — this register IS NOT:
- Bright or daylight-fresh (that's saladify / latte, not this)
- Multi-accent or color-expressive (no orange CTAs, no electric blues — the old site's electric blue is exactly what we're rejecting)
- Conversion-frantic — no "BOOK NOW" stamps everywhere, no pop-ups, no urgency banners
- Stock-photo flat — no flat food-blog overhead with white plate on white wood
- Social-feed bait — no Instagram embeds, no "follow us" footers
- Sans-serif-only modernist — the italic serif is non-negotiable for brand

## 8. Inheritance rules for the coding agent

**LOCKED across all sections** (never override):
- Palette: `canvas`, `ink`, `inkMuted`, `accent`, `plateShadow` — all 5 hex values
- Fonts: Cormorant Garamond italic + Inter
- Wordmark = restaurant name "BISTRO WASABI" as h1, never replaced by a tagline
- All UPPERCASE labels use Inter with `+0.18em` to `+0.32em` tracking
- All italic display copy uses Cormorant Garamond italic

**Can VARY per section:**
- Background color may shift between `canvas` and `plateShadow` for visual hierarchy
- Section vertical padding may scale up to `py-40 (160px)` for showcase sections
- Italic-vs-roman serif weight may vary (400 vs 500) within Cormorant family

**Anti-patterns to avoid (do NOT do these):**
- Do NOT introduce a third color family or a sans-serif display face
- Do NOT use sentence-case headings — register is italic-serif title-case OR tracked-caps eyebrow only
- Do NOT add solid-fill brass buttons. The brass accent is for hover/hairline/edge details only.
- Do NOT swap Cormorant italic for a roman serif on body italic accents. The italic IS the register.
- Do NOT use bright photography in any section. If a section needs a photo, it must match the warm tungsten / deep-shadow grading.
- Do NOT add social-media follow widgets or Instagram feeds.
- Do NOT replace the wordmark with a tagline anywhere. The wordmark is the anchor (per `feedback_hero_pattern_name_anchor.md`).

---

*Lineage: extracted 2026-05-11 from the approved inspo composition. Tokens were reverse-engineered from a single 16:9 reference image; refine against the live dev server during the rest-of-fork pass if any token feels off in practice.*
