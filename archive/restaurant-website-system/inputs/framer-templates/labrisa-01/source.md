# La Brisa Template

- **URL:** https://labrisa.framer.website
- **Type:** Framer template
- **Author / studio:** TBD
- **License notes:** Framer marketplace template
- **Why we picked this:** Twelfth template. Fills the **French Riviera / Mediterranean coastal / European destination** register — distinct from all existing templates. Not Italian (gusto/varro), not American-warm (1776), not Michelin (alinea). Labrisa is **coastal romantic upscale** with French bistro vernacular, illustrated ("Bienvenue!") brand touches, and a multi-tier service selector (main reservation / dine-at-home / private dining) that signals **venue with multiple revenue streams** (sit-down, catering, private events).
- **First impression vibe:** Warm, romantic, French-coastal, journal-like, curated, service-forward. Cream canvas + deep-brown ink + handwritten/script accents + illustrated nautical motifs (boat + "La Brisa" logo). Reads like a bistro-bourgeois brochure from Saint-Tropez or Cannes.
- **Likely archetype match:** Primary **French Riviera restaurant / Mediterranean coastal upscale / European bistro / destination resort restaurant / venue with catering + private dining**. Also fits **wine-country restaurants**, **seaside spots**, **restaurants with multi-service business models (dine-in + catering + events)**. Does NOT fit casual takeout, modernist-minimalist venues, or American-casual registers.

## Restaurant context (from site)
- **Name:** La Brisa
- **Positioning:** "A Taste of the Riviera" — French coastal destination
- **Identity:** Riviera-inspired, multi-service (restaurant + at-home + private dining), journal-driven
- **Menu delivery:** Dedicated /menu page (captured); home previews dishes through 4-photo food grid
- **Reservation flow:** "Main Reservation | Dine at Home | Private Dining" 3-up service selector — routes to different booking flows per service
- **Events / private dining:** Explicit "Private Dining" as one of three main service options
- **Hours:** "Rendez-Vous Émails" subscription / hours block visible
- **Location:** TBD — visual cues (French copy, "Riviera") suggest Côte d'Azur/Saint-Tropez

## Sub-pages confirmed
- `/` (home — long-scroll with multi-service selector + journal)
- `/menu` (captured)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **"A Taste of the Riviera" script-on-serif hero** — headline uses Imbue variable serif with possibly italic/display weight variation. Restrained, editorial. Chef photo adjacent (hands plating steak in hero).
- **Illustrated "Bienvenue!" lockup** — small nautical illustration (sailboat + La Brisa script wordmark in brown ink tones). Brand-storybook moment between hero and content sections. **Signature move: hand-illustrated brand iconography, not photo-driven.**
- **Small-photo gallery strip** — 4-up horizontal photos with captioned labels ("La vie de la rivieré" / "Une nuit d'été a été délicieuse..." / "L'ameublement de la cave" / "La maison") — French-captioned vignette photos. Editorial/journal aesthetic.
- **Multi-service 3-up selector** — "Main Reservation | Dine at Home | Private Dining" as three large cards side-by-side. **Signature pattern.** Not in any existing template — unlocks venues with multiple revenue streams (catering + dine-in + events).
- **"The Journal" blog-style block** — 2-3 article cards with photo + headline + pull-snippet. Content-marketing for destination restaurants.
- **"Rendez-Vous Émails" subscribe block on dark canvas** — email-subscribe form with date/hour-ish picker on deep-brown section. Mode-switching like bramble/gusto: cream → dark → cream.
- **Closing "A Riviera of Flavors" footer band** on dark brown — brand-color flood.
- **Imbue display + Imbue Variable body** — single serif family, variable-axis. Whole-template serif discipline; warm editorial tone throughout.

## Palette (from `meta/home.json`)
- `rgb(250, 247, 237)` — **warm cream canvas** (primary, paper/linen-toned)
- `rgb(69, 45, 38)` — **deep cocoa brown** (text + dark sections + "Rendez-Vous" band)
- Two-token system: cream + cocoa. No bright accent — restraint similar to velvet-shaker but warmer.
- Inferred secondary: subtle gold/tan from illustrations (need verify).

## Fonts (from `meta/home.json`)
- **Imbue** + **Imbue Variable** — single serif family with variable-axis (weight + optical size). Distinctive modern serif with flared terminals, italic with pronounced contrast.
- **First catalog template with serif-only typography** (no sans paired). Like velvet-shaker/plate are sans-only, labrisa inverts to serif-only. Discipline statement.

## What this unlocks for the catalog
1. **First multi-service selector** — `ServiceTypeSelector` 3-up card pattern (Dine-In / At-Home / Private Dining). Huge promotion candidate for any venue with catering or events arm.
2. **First serif-only typography** — Imbue variable. Counterpart to velvet-shaker/plate sans-only. Demonstrates range.
3. **First illustrated/hand-drawn brand element** — the "Bienvenue!" illustration + nautical motifs. `BrandIllustration` pattern for venues needing character beyond photography.
4. **First French/European-coastal register** — covers a specific destination vertical the other 5 don't touch.
5. **First "Journal" content-marketing pattern** with French-captioned vignettes — `JournalVignetteStrip`.
6. **First dark-cocoa accent palette** — `rgb(69,45,38)` cocoa brown. Extends accent-color vocabulary.

## Risks / things to verify in audit
- Confirm Imbue is available on Google Fonts (it is, recently) — no license substitution.
- Verify whether the "Bienvenue!" illustration + sailboat icon are embedded SVGs (reusable, stylable) or raster (fixed, brand-locked).
- Check whether the 3-up service selector routes to separate pages or opens modals/accordions.
- Verify the French captions — are they hardcoded content or a placeholder demonstrating editorial tone?
- Confirm /menu structure — is it a French-style prose menu or a traditional dish-row list?
- Check whether "Rendez-Vous Émails" block is a real subscription form (newsletter) or a placeholder.
- Verify dark-mode section is truly `#452D26` cocoa or actually a darker near-black (the `69,45,38` rgb is cocoa).
- Confirm motion behavior — Imbue's italic should be used intentionally in headlines; is it animated in?
