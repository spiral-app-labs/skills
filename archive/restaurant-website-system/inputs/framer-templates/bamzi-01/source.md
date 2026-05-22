# Bamzi Template

- **URL:** https://bamzi.framer.website
- **Type:** Framer template
- **License notes:** Framer marketplace template ($29 based on visible CTAs — the "Get this $29" badge in captures is Framer's marketplace UI, not part of the template itself)
- **Why we picked this:** Fourth template. Fills a **different register from all three existing templates**: warm-casual asian-sushi with a bold orange accent — the first accented template that's NOT editorial-luxury. Strong multi-page template (home / menu / about / news / contact), unlike bramble (single-page) or qitchen (minimal sub-pages). Good stress-test for the "can the system do accessible-casual restaurants, not just aspirational-fine-dining" question.
- **First impression vibe:** Warm hospitality / approachable fine-casual / asian-sushi-focused / orange-accented on dark-green canvas / leaf-motif decorative / multi-page narrative.
- **Likely archetype match:** Primary **sushi / asian / pan-asian restaurant (accessible register)**. Also fits **neighborhood restaurant with strong identity + accent color**, **family-friendly upscale-casual**. Does NOT fit fine dining (too warm/accessible), minimalist editorial (too decorative), brunch/daytime-only (too evening).

## Restaurant context (from site)
- **Name:** Bamzi (placeholder — site is a template)
- **Established:** "Since 1998" tagline
- **Cuisine:** Japanese / asian — sushi-forward with ramen, kebab, sandwich sides
- **Address:** 256 North Neuveill, AvenueNeuveill, PA 19302 (placeholder)
- **Phone:** +123 (456) 789 00 (placeholder)
- **Email:** info@bamzi.com (placeholder)
- **Type:** Sit-down restaurant with menu PDF + reservation form flow
- **Identity:** "Delicious food & wonderful eating experience" / "We serve food, harmony, & laughter since 1998"

## Sub-pages confirmed
- `/` (home — 7983px scroll, multi-section)
- `/about` (chef + story + timeline — 11172px tall in desktop capture, looks layered)
- `/menu` (full menu grid with 4 categories — sushi / fish / fries / kebab)
- `/news` (blog grid with 6 cards)
- `/contact` (form + map/photo + location/phone cards)

Framer nav also shows a "PAGES ▾" dropdown — likely contains `/menu-detail/*`, `/blog-post/*`, or similar CMS item pages not captured here.

## Ground-truth values (from `meta/*.json`)
- **Display font:** `Prata` (Google Fonts) — weight 400, classical narrow serif
- **Body font:** `Inter` (Framer-hosted)
- **Dark canvas:** `rgb(15, 26, 26)` = **`#0F1A1A`** (deep cool green-black — warmth comes from the orange accent, NOT from the base)
- **Orange accent:** `rgb(221, 89, 3)` = **`#DD5903`** (burnt/warm orange — high saturation)
- **White:** `#FFFFFF` for sections / cream off-white for cards
- **H2 hero-scale:** 96px / 96px LH / weight 400 / color `#0F1A1A` on cream
- **H1 hero-in-dark:** 64px / 80px LH / weight 400 / color white on dark
- **H3 section:** 48px / 57.6px LH / weight 400
- **Body h3 nav "About":** Inter 16px / weight 600 / uppercase white

## Unique structural patterns observed
- **Dark hero with leaf / bamboo decorative accents** — the dark-green canvas has tropical leaf illustrations flanking the centered hero text. Soft, hand-drawn-looking. Different from bramble's photo-hero.
- **Orange-dotted eyebrow labels** — "POPULAR CATEGORY", "SUGGESTED MENU", "TESTIMONIALS" — small caps with an orange dot bullet prefix. Unifying device across sections.
- **Two-column menu lists with dotted price rails** — classic dot-leader menu pattern ("Philadelphia roll ............. $51.75") in 2-col grid. Strong fit for the restaurant archetype.
- **Chef-profile card grid** — 3-column on about page showing "Meet with our chefs" with name + title + photo. Chef-credibility pattern.
- **Timeline with milestones** — vertical timeline "2013 Journey was started / 2018 First restaurant ..." on about page.
- **Testimonial row with star ratings + avatar + quote** — 3-up grid with 5-star row, quote, and avatar/name/role.
- **Full-width contact strip footer** — "Timeless recipes to savor & enjoy" + address + phone + email on a dark footer with orange pin icons.
- **Inline reservation form** — name / phone / message block with orange submit button, embedded on `/menu` page.
- **News/blog grid with date stamps** — 3×2 card grid with title + excerpt + date. Visual blog pattern (not pure text).
- **Sticky "MENU" button in header corner (orange)** — persistent primary CTA across all pages.

## Why this fills a gap
The catalog needed a template that's:
1. **Accent-color-driven** (not accent-absent like qitchen, not accent-subtle like 1776's amber). Orange at `#DD5903` saturated is the identity.
2. **Accessible-casual** — neither ceremonial (qitchen) nor hospitality-warm (bramble) nor heritage-formal (1776). Approachable mid-range.
3. **Multi-page with rich sub-page content** — about, menu, news, contact all have distinct layouts. Tests the template system's ability to ship a broader site architecture.
4. **Pan-asian** archetype coverage — sushi + ramen + kebab is the "asian fusion / modern asian" register many restaurants need.
