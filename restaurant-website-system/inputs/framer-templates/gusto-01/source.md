# Gusto Template

- **URL:** https://gusto-template.framer.website
- **Type:** Framer template
- **Author / studio:** Gota Templates (footer credit "© Gota Templates" + "Use for FREE" + "Made in Framer" badges)
- **License notes:** Framer marketplace template, free to remix
- **Why we picked this:** Seventh template. Fills the **heritage-Italian / date-night-trattoria** gap — Bella Cucina-class operators (moderately-upscale Italian, atmospheric, testimonial-driven, "since 19XX" heritage). Distinct from existing templates: not as fine-dining as alinea, not as American-warm-upscale as 1776, not as casual as pepper. Specifically targets the Italian-themed neighborhood restaurant register that Ethan called out (Bella Cucina in Algonquin archetype).
- **First impression vibe:** Atmospheric, intimate, candlelit-restaurant energy, heritage-validated, review-driven. Dark-dominant homepage with single hero food photograph, testimonial card overlay, Sorts Mill Goudy serif lending old-world authority.
- **Likely archetype match:** Primary **heritage Italian / trattoria / date-night Italian**. Also fits **family-owned ethnic restaurants with heritage story** (Greek, Spanish, French bistro), **multi-decade neighborhood institutions**, **moderately-upscale-but-not-fine-dining** spots where the conversion is a reservation (not online order). Does NOT fit takeout-pizza (use pepper), nor white-tablecloth Michelin (use alinea).

## Restaurant context (from site)
- **Name:** Gusto
- **Location:** Prague (per menu page title "Authentic slice of Italy in Prague!")
- **Type:** Italian restaurant — pasta-forward, wine-pairing, dine-in primary
- **Identity:** "The Best Pasta Outside of Italy" — heritage validation, expat-Italian-craft positioning
- **Menu delivery:** Dedicated `/menu` page with dark long-scroll dish list, photo+name+description+price per row, sticky-left testimonial card
- **Reservation:** "Book a Table" primary CTA in hero sidebar
- **Established:** 1997 (per "Since 1997" footer + testimonial)
- **Reviews:** 4.8 stars, 1,240 reviews displayed prominently in hero
- **Hours:** Mon–Sun, opens late afternoon, closes ~22:00 (visible in hero sidebar opening-hours block)

## Sub-pages confirmed
- `/` (home — dark asymmetric multi-card hero with sidebar)
- `/menu` (dark dish-list with sticky testimonial card)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **Asymmetric multi-card hero** — single big atmospheric food photo on left (~60% width) with testimonial pull-quote overlaid bottom-left, plus 2 stacked smaller cards on right ("Our Restaurant" interior shot + "Menu" pasta close-up). Three-card hero composition, not full-bleed single image. **Signature pattern.**
- **Testimonial-overlay card on hero photo** — semi-translucent dark card overlaid bottom-left of hero image with pull-quote, star rating (4.8), and review count (1,240 reviews). Conversion-bearing trust element baked into the hero, not relegated to a downscroll section.
- **Hero sidebar block** — right rail with "Book a Table" CTA + opening-hours table (full week with day | time pairs). Reservation-primary, hours-transparent.
- **"Since 1997" heritage stamp** — small but persistent footer marking establishment year. Editorial typesetting (Sorts Mill Goudy serif).
- **Dark long-scroll menu** — dedicated /menu page is dark canvas with cream text, dish rows of (photo thumbnail | name + Italian description | price). Sticky-left testimonial card persists during scroll. Editorial restaurant-menu treatment, not ecommerce-card.
- **Lavender accent dot** — `rgb(158, 158, 255)` — surprising soft-lavender accent (sampled in meta) used sparingly. Differentiates from amber/orange accent palettes in 1776/bamzi.
- **"Use for FREE" + "Made in Framer" badges** — Framer-marketplace overlay, not template content.

## Palette (from `meta/home.json`)
- `rgb(255, 252, 244)` — **cream canvas** (sub-pages + footer body)
- `rgb(15, 17, 12)` — **near-black canvas** (home hero + menu page background)
- `rgb(255, 255, 255)` — pure white (text on dark)
- `rgb(158, 158, 255)` — **soft lavender accent** (sparingly used)
- Two-mode palette: dark home/menu, cream sub-pages — similar mode-switching to bramble but with reversed dominance.

## Fonts (from `meta/home.json`)
- **Sorts Mill Goudy** — display serif (headlines, "The Best Pasta Outside of Italy" testimonial). Distinctive old-style serif with strong italic.
- **Figtree** — body sans (UI, opening hours, menu descriptions). Multi-weight humanist sans.
- Both Google Fonts → no license substitution needed.

## What this unlocks for the catalog
1. **First "testimonial-overlay hero" pattern** — `HeroTestimonialCard` overlaid on hero image with rating + review count. Conversion floor moves UP into the hero. Promotion candidate for any reservation-primary template.
2. **First "asymmetric multi-card hero"** — `MultiCardHero` with one large + 2 stacked secondary panels. Counterpart to bramble's hero-slideshow and qitchen's sticky-left-image. Different rhythm.
3. **First lavender accent** — extends the catalog accent vocabulary (currently amber #C9A96E in 1776, orange #DD5903 in bamzi). Lavender = cool / European / restrained.
4. **First Sorts Mill Goudy** — adds an italic-strong old-style serif to the catalog font roster (distinct from Cormorant Garamond, Forum, Crimson Pro, Prata).
5. **First two-mode dark/cream switching with dark dominance** — bramble alternates section-by-section with cream dominance; gusto inverts.
6. **First explicit reviews trust signal in hero** — 4.8 ★ × 1,240 reviews baked into hero card. Pattern for any high-volume neighborhood spot.

## Risks / things to verify in audit
- Confirm if home page is FULLY dark or if scrolling reveals cream lower sections (visual scan suggests mostly dark; need scroll-frames inspection).
- Confirm whether the right-rail "Book a Table" + hours sidebar persists (sticky) or is hero-only.
- Verify lavender accent usage — is it the booking CTA color, footer brand color, or just a subtle micro-accent?
- Check /menu page structure: dish rows have photos? Italian descriptions? Multi-section (Antipasti / Primi / Secondi)?
- Verify whether "Since 1997" appears in nav/header or only footer.
- Whether the testimonial-overlay card is one fixed quote or rotates.
- Confirm if Gota Templates branding is removable in fork (license check).
