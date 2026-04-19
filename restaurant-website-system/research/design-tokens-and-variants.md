# Design Tokens and Variants

The token system that templates use. **Every template's `theme.ts` must conform to the type contract defined in `shared/tokens/`** so that brand-swap during fork is mechanical, not interpretive.

> **Status:** scaffolded with category headers. Concrete values populate as templates are recreated. The *type contract* (what a `Theme` looks like in TypeScript) is the source of truth — defined in `shared/tokens/theme.ts` once a real template needs it.

---

## 1. Typography families and scales

### Display family categories
- **Editorial serif** — high-contrast, large-display optimized (e.g., Canela, GT Sectra, Romain). For: editorial-luxury, fine dining, modern destination.
- **Classical narrow serif (uppercase-led)** — Bodoni-influenced, narrow proportions, free or low-cost (e.g., **Forum** [Google Fonts, used by `qitchen-01`]). For: editorial fine dining with single-font display discipline + uppercase-everywhere treatment.
- **Garamond / italic-pairing serif** — humanist garamond with strong italics (e.g., **Cormorant Garamond** [Google Fonts, used by `1776-redesign-01`], EB Garamond, Playfair Display). For: warm fine dining, italic-on-serif emphasis pattern, mixed-case display.
- **Delicate transitional serif at weight 300** — e.g., **Crimson Pro at weight 300** (Google Fonts, used by `bramble-01`). The light weight gives a retro-but-refined character — neither heavy-classical nor modern-geometric. Use for retro hospitality, music-forward venues, cocktail-bar-with-food.
- **Classical narrow serif (single-weight 400, Prata-class)** — e.g., **Prata** (Google Fonts, used by `bamzi-01`). Single-weight-only serif with classical proportions; elegance from default shapes, not weight contrast. Use for accessible-casual restaurants with strong accent color (no italic emphasis, no multi-weight display system needed).
- **Refined sans serif** — geometric or grotesque, clean (e.g., Söhne, GT America, Untitled Sans). For: modern minimal, contemporary upscale.
- **Classic serif** — traditional, warm (e.g., Lyon, Caslon, Tiempos). For: warm-rustic, steakhouse, hotel restaurant.
- **Hand-lettered display** — distinctive personality (e.g., custom logotypes). For: brunch/cafe/bakery, vibrant social.
- **Art deco / noir display** — stylized for atmosphere (e.g., Domaine, Recoleta). For: moody cocktail, speakeasy.

### Body family categories
- **Neutral sans** — readable at small sizes (e.g., Inter, GT America, Söhne, **Satoshi** [Fontshare, used by `qitchen-01`], **DM Sans** [Google Fonts, used by `1776-redesign-01`]).
- **Warm humanist** — slightly more character (e.g., Tiempos Text, Lyon Text).
- **Geometric mono** — for menus and prices (e.g., JetBrains Mono, GT America Mono).

### Type scale categories
- **Editorial scale** — large jumps, generous display (e.g., 12, 14, 18, 24, 36, 56, 88, 128).
- **Conversion scale** — tighter, more readable mid-range (e.g., 14, 16, 18, 22, 28, 36, 48, 64).
- **Minimal scale** — restrained, fewer steps (e.g., 14, 16, 20, 32, 56).

---

## 2. Color families

### Base palettes
- **Editorial warm-dark monochrome** — confirmed in `qitchen-01`. Three colors do almost everything. Canvas `#0A0B0A` (warm near-black, G channel one notch above R/B), surface `~#16-18`, primary text `#EFE7D2` (warm cream). **No accent** — warmth comes from photography only.
- **Editorial deep-navy + amber** — confirmed in `1776-redesign-01`. Canvas `#0D1B2A` (deep navy with cool blue cast), surface elevated `#050C16` (near-black with navy undertone, deeper than canvas — inverse of qitchen's surface > canvas), primary text `#F5F0E8` (warm cream), brand accent `#C9A96E` (muted amber/champagne). The accent does heavy work: eyebrows, primary CTA fill, italic display emphasis, footer badges. Use for warm fine-dining and Wine-Spectator-class restaurants.
- **Retro-warm light-mode (section-switching)** — confirmed in `bramble-01`. **First light-mode palette in catalog.** Multiple backgrounds per page: cream `~#F5F2E8` (warm pale), near-black `~#171717` (dark sections), pure white `#FFFFFF` (body/browser). Cream-on-dark text is `#FCFFE2` (pale butter-yellow, NOT pure white). No brand accent. Warmth comes from photography + section-bg-switching + Crimson Pro's delicate weight-300 character. Use for retro cocktail bars, music-forward neighborhood venues, hospitality-driven single-page sites.
- **Dark-green + saturated orange (accent-led)** — confirmed in `bamzi-01`. **First saturated-accent palette in catalog.** Canvas `#0F1A1A` (deep cool green-black — G and B one notch above R), accent `#DD5903` (burnt/warm orange — high saturation), cream section `~#F5F2EA`, white content `#FFFFFF`. The accent does ALL emphasis work: CTA fills, eyebrow dots, timeline nodes, star ratings, pin icons, form submits. Single-accent discipline IS the brand. Use for accessible-casual pan-asian / sushi, and by hue-swap for any accessible restaurant wanting a strong single-color identity (rust/terracotta for Italian/Mediterranean, saffron for Indian, deep red for Mexican, etc.).
- **Editorial monochrome (light variant)** — off-white canvas, warm-gray neutrals, one muted accent.
- **Earth/warm rustic** — terracotta, cream, deep red, olive, warm brown.
- **Dark moody** — black, deep burgundy, forest green, gold/copper accent.
- **Airy coastal** — white, soft blue, sand, pale gray.
- **Bright lively** — warm white, vibrant accent (red/orange/yellow), neutrals.
- **Vibrant social** — saturated primaries (cobalt, marigold, terracotta, hot pink).
- **Steakhouse classic** — black, deep red, cream, brass.

### Semantic roles (every theme defines)
- `bg.canvas` (page background)
- `bg.surface` (card/section background)
- `bg.elevated` (modal/overlay)
- `text.primary`
- `text.muted`
- `text.inverse`
- `accent.primary`
- `accent.secondary`
- `border.subtle`
- `border.strong`

---

## 3. Spacing density

- **Editorial-loose** — section padding 160–240px desktop, 80–120px mobile. Generous component spacing.
- **Standard** — section padding 96–128px desktop, 64–80px mobile.
- **Dense conversion** — section padding 64–80px desktop, 40–56px mobile. Tighter for above-the-fold conversion.

---

## 4. Border radius levels

- **None (0)** — editorial, modern minimal, fine dining.
- **Subtle (4–6px)** — modern upscale, refined sans contexts.
- **Soft (8–12px)** — warm rustic, brunch/cafe, lively casual.
- **Pill (full)** — for tags, chips only — never for cards in upscale contexts.

---

## 5. Card styles

- **Borderless flat** — no border, no shadow, separation by spacing only. Editorial.
- **Subtle border** — 1px hairline border, no shadow. Modern upscale.
- **Soft shadow** — minimal elevation. Lively casual, brunch.
- **Bold framed** — heavier border or background block. Vibrant social.
- **Image-led card** — image dominates, text overlay or below. Most templates.

---

## 6. Overlay / texture levels

- **None** — clean, no overlays, no texture.
- **Subtle gradient** — image bottom-fade for text legibility.
- **Heavy gradient/scrim** — moody, dark hero overlays.
- **Grain/noise texture** — warm rustic, brunch, vintage feel.
- **Paper/print texture** — editorial, magazine-feel.

---

## 7. Motion intensity

- **0 — None** — no motion. Stillness celebrated. Fine dining.
- **1 — Subtle** — fade-in on scroll, gentle reveals (≤300ms).
- **2 — Moderate** — parallax hero, image hover scale, slow lifts.
- **3 — Cinematic** — video loop hero, scroll-driven scenes, cursor effects.

Motion intensity must be a single number per template — mixing levels reads as inconsistent.

---

## 8. Button styles

- **Outlined ghost** — border + transparent fill. Editorial.
- **Solid filled** — solid bg, contrast text. Conversion-optimized.
- **Underlined link** — text-only, underline. Restrained, fine dining.
- **Icon + text** — for "Reservations" with calendar icon.
- **Pill rounded** — playful, lively casual.

Every theme defines a primary button style and a secondary. No template uses more than two button styles.

---

## 9. Nav styles

- **Sticky transparent** — stays at top, transparent over hero, solidifies on scroll.
- **Sticky solid** — always solid background.
- **Hidden on scroll down, reveal on scroll up** — for editorial templates.
- **Hamburger only (always)** — minimal templates.
- **Logo-centered with side actions** — symmetric layout, common in upscale.
- **Bottom sticky mobile bar** — with reserve CTA.

---

## 10. Section themes

A "section theme" is a coherent combination of bg + text + spacing + accent for a single section. Each template defines a small set (typically 2–4):

- **Canvas section** — main bg, primary text.
- **Surface section** — alt bg, primary text.
- **Inverse section** — dark bg, light text (for moody breaks).
- **Image-bg section** — full-bleed image with text overlay.

---

## 11. Gallery styles

- **Masonry** — Pinterest-style varied heights.
- **Equal grid** — uniform tile size.
- **Horizontal scroll strip** — mobile-friendly side-scroll.
- **Editorial pair grid** — large + small image alternation.
- **Slideshow** — single image, navigation arrows.
- **Instagram embed grid** — pulls live from IG.

---

## 12. Variant axes per template

Every template's audit (Section 11: Component mapping) declares which variant axes it uses for each component. Common axes:

- **Layout axis:** centered / asymmetric / split / stacked
- **Media axis:** image / video / none
- **Density axis:** loose / standard / dense
- **Tone axis:** light / dark
- **Motion axis:** static / subtle / moderate / cinematic

Templates pick a value on each axis and stick to it. Mixing axis values within a single template is a cohesion failure.

---

## 13. Theme contract (TypeScript)

Once the first template lands, this section becomes the canonical TypeScript type for `theme.ts`. Until then, here's the intended shape:

```ts
// shape sketch — actual contract written when first template is built
type Theme = {
  name: string;
  archetype: string;                    // matches an entry in restaurant-archetypes.md
  typography: {
    display: { family: string; weights: number[]; scaleCategory: 'editorial' | 'conversion' | 'minimal' };
    body:    { family: string; weights: number[]; scaleCategory: 'editorial' | 'conversion' | 'minimal' };
    mono?:   { family: string };
  };
  color: {
    palette: 'editorial-mono' | 'earth-warm' | 'dark-moody' | 'airy-coastal' | 'bright-lively' | 'vibrant-social' | 'steakhouse-classic';
    semantic: { /* the roles in §2 */ };
  };
  spacing: { density: 'editorial-loose' | 'standard' | 'dense-conversion' };
  radius: 'none' | 'subtle' | 'soft' | 'pill';
  cardStyle: 'borderless' | 'subtle-border' | 'soft-shadow' | 'bold-framed' | 'image-led';
  overlay: 'none' | 'subtle-gradient' | 'heavy-scrim' | 'grain' | 'paper';
  motion: 0 | 1 | 2 | 3;
  buttons: { primary: string; secondary: string };
  nav: { style: string; mobilePattern: string };
};
```
