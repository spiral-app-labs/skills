# Velvet Shaker Template

- **URL:** https://velvet-shaker.framer.website
- **Type:** Framer template
- **Author / studio:** TBD
- **License notes:** Framer marketplace template
- **Why we picked this:** Tenth template. Fills the **dark modernist cocktail bar / speakeasy** gap — the dark-night counterpart to bramble's light-retro bar register. First catalog template with **no serif in its type system** (Inter Tight only) — a modernist/minimalist discipline that none of the existing 5 carry. Explicitly positioned as moody-night counterpart rather than fine-dining.
- **First impression vibe:** Dark, moody, architectural, nocturnal, restrained, cinematic. Massive "Velvet Shaker" wordmark anchor + signature cocktail grid with ingredient-named drinks + atmospheric bar-interior photos. Closer to a gallery/architecture-studio aesthetic than traditional bar template.
- **Likely archetype match:** Primary **dark cocktail bar / modernist speakeasy / hotel-bar / wine bar**. Also fits **chef's table / omakase** (no cuisine commitment), **tasting room**, **cocktail lounge at boutique hotel**. Does NOT fit playful/retro bars (use bramble), family-casual (use pepper), any brunch/coffee register.

## Restaurant context (from site)
- **Name:** Velvet Shaker
- **Location:** Hong Kong (per copy "Nestled in the heart of Hong Kong, Velvet Shaker is more than just a bar — it's a sensory journey. Inspired by the city's vibrant energy and global influences...")
- **Type:** Modern cocktail bar
- **Identity:** City-center cocktail destination, modern design, global influences
- **Founded:** 2022 (per "Velvet Shaker began its journey in 2022")
- **Menu delivery:** Dedicated /menu capture + featured cocktail grid on home with named drinks

## Sub-pages confirmed
- `/` (home — dark wordmark-dominant hero with grid of cocktail cards)
- `/menu` (captured)
- `/about` (captured — includes brand story)
- `/contact` (captured)

## Unique structural patterns observed
- **Wordmark-hero anchor** — massive "Velvet Shaker" text set as the hero focus, not a photo. Typography-IS-the-hero pattern. Contrasts with all existing templates which lead with a photo. **Signature move.**
- **Featured cocktails grid** — named drinks (Peach Blossom / Lavender Mist / Mint Cloud / Blue Lagoon / Lemon Breeze) each presented as a small photo card with the cocktail name. Product-card menu treatment but minimalist (no prices visible on home — menu may or may not surface them).
- **Asymmetric mini-gallery** — small offset cocktail photos + bar-interior shot in a loose grid. Gallery-wall aesthetic.
- **Long-form justified paragraph block** — full-width centered prose about the bar ("Nestled in the heart..."). Editorial-magazine reading rhythm, unusual for bar sites (which usually lean photo-heavy and copy-light).
- **"Check what's happening" events grid** — 3-up events/news photos (likely tasting nights, guest bartenders, pop-ups). Events-forward for a bar with ongoing programming.
- **Full-name footer echo** — "Velvet Shaker" repeats large at footer, bookending the wordmark-hero.
- **"Visit Us / Contact / Socials" 3-column footer block** with small text — restrained.
- **Warm cream-on-near-black palette** `rgb(230,224,198)` cream over `rgb(15,16,10)` near-black — warmer than qitchen's cold dark + pure-cream, closer to candlelit-room warmth.
- **Inter Tight only** — sole typeface. Modernist discipline. Weight range carries all hierarchy.

## Palette (from `meta/home.json`)
- `rgb(15, 16, 10)` — **near-black canvas**, warm-tinted (slight green undertone)
- `rgb(230, 224, 198)` — **warm cream text + accent**, candlelit-paper tone
- Two-token system: canvas + ink. Restrained even for dark templates.

## Fonts (from `meta/home.json`)
- **Inter Tight** — sole typeface, multi-weight (likely 300/400/500/700). Tighter letter-spacing variant of Inter.
- First catalog template with no serif/sans pairing. First catalog template without a serif at all.

## What this unlocks for the catalog
1. **First wordmark-hero pattern** — `WordmarkHero` where typography IS the hero. Counterpart to photo-led heroes (qitchen, 1776, alinea, bramble, bamzi).
2. **First serif-free typography system** — Inter-Tight-only. Modernist counterpart to all existing templates which use serif+sans pairing.
3. **First dark cocktail-bar register** — dark register exists (qitchen/1776/bamzi) but none are bar-specific nor modernist-minimalist.
4. **First events-grid pattern** — `EventsPreviewGrid` for bars/restaurants with ongoing programming.
5. **First two-token palette** — canvas + ink only, no accent color. Disciplined minimalism.
6. **First named-cocktail card grid** — `NamedItemGrid` (photo + name only, no price). Reusable for wine bars, tasting menus, any menu where the items are experiences not commodities.

## Risks / things to verify in audit
- Confirm whether `/menu` page shows prices or maintains the no-price discipline of the home-page grid.
- Verify whether the massive wordmark is a real SVG text element or a styled `<h1>` with custom tracking.
- Check whether the "Check what's happening" events are a real block or a placeholder grid.
- Confirm the Hong Kong location is hardcoded in content or swappable (personalization manifest impact).
- Motion behavior of hero — is it truly static, or does a subtle video loop play behind the wordmark?
- Whether the bar photography is atmospheric (interior + ambient) vs product-forward (cocktails).
- Verify the founding-year "2022" is recent enough to feel current (vs heritage-dated), and whether forks should swap.
