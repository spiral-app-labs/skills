# Latte Template

- **URL:** https://lattetemplate.framer.website
- **Type:** Framer template
- **Author / studio:** TBD (verify in audit — no obvious credit in home capture)
- **License notes:** Framer marketplace template
- **Why we picked this:** Eighth template. Fills the **coffee shop / café** vertical — an entire register absent from the catalog. Coffee shops are a separate cold-outbound segment from restaurants (specialty coffee, third-wave roasters, cafés with light food, brunch spots). Latte is light, dish-card-driven, menu-forward, with clean wood-and-cream palette and zero ceremonial pretense.
- **First impression vibe:** Warm, inviting, café-counter energy, photo-driven, menu-forward. Wood texture + cream + black + minimal type. "Brewed to perfection" tagline carries casual-craft register without going artisanal-pretentious.
- **Likely archetype match:** Primary **specialty coffee / café / brunch / pastry shop**. Also fits **bakery + coffee combo**, **roastery storefronts**, **tea shops**, **light-food daytime spots**. Does NOT fit full-service restaurants with reservations (use plate or gusto), nor evening cocktail venues.

## Restaurant context (from site)
- **Name:** (placeholder — appears as "Brewed to perfection" wordmark; verify in audit)
- **Location:** TBD
- **Type:** Coffee shop / café
- **Identity:** "Brewed to perfection" — craft-coffee positioning without going twee
- **Menu delivery:** Dedicated home-page menu section with full product cards (Coffee, Hot & Cold Beverages, Specialty Coffee, Tea & Salted Goods, Pastries) + likely a /menu sub-page (captured)
- **Order flow:** Single CTA visible in hero (need verification — likely "View Menu" or "Order Online")
- **Reservation:** None visible — coffee-shop register, no booking
- **Hours / phone:** TBD (in /contact capture)

## Sub-pages confirmed
- `/` (home — multi-section with full menu, latest coffee news blog, "We love coffee" prose)
- `/menu` (captured)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **Wood-texture hero** — hero uses warm wood-grain background as canvas (not pure white/cream). Anchors the casual-café feel without going rustic-twee. **Distinct canvas treatment** from all 5 existing templates (which use solid colors).
- **2-up latte-art photo strip in hero** — two close-up coffee photos (latte art top-down) flanking the wordmark. Dish-forward immediately.
- **Multi-category in-page menu** — home page has full menu sections (Coffee / Hot Beverages / Specialty / Tea & Salted Goods / Pastries) with each item as a card row (photo + name + description + price). True product cards.
- **Cream menu cards on wood canvas** — each menu category gets a cream-colored card block on the wood background. Layered material aesthetic.
- **Latest coffee news 3-up blog grid** — 3 article previews with photos + titles + read-more affordance. Editorial / content-marketing block. Pattern for cafés that publish brewing guides / origin stories.
- **"We love coffee" prose-and-photo split** — dedicated 2-column block with hero photo + copy block. Brand-story moment.
- **Closing "Brewed to perfection" lockup repeat** — wordmark/tagline repeats at footer, bookending the page.
- **Poppins everywhere** — single typeface family for both display and body. Minimal type system. Counterpart to all other catalog templates which run a serif+sans pairing.

## Palette (from `meta/home.json`)
- `rgb(255, 251, 240)` — **cream canvas** (primary)
- `rgb(0, 0, 0)` — black text + buttons
- Wood-texture image (browns / warm tans) — hero background, not a CSS color
- Inferred secondary: white card surfaces, soft warm grays for borders

## Fonts (from `meta/home.json`)
- **Poppins** — sole typeface, multi-weight (likely 400/500/600/700). Geometric humanist sans, friendly without being childish.
- No serif — first catalog template without a serif/sans pairing. Risk: less "editorial" feel; appropriate for casual-café register.

## What this unlocks for the catalog
1. **First wood-texture hero canvas** — `WoodTextureHero` pattern. Counterpart to all-color canvases in catalog. Material-driven aesthetic without going skeuomorphic.
2. **First multi-category in-page product menu** — `MenuCategoryStack` (Coffee / Tea / Pastries / etc., each its own cream card with item rows). Promotion candidate immediately for any café/bar/bakery template needing multi-category pricing.
3. **First sole-typeface system** — Poppins-only. Demonstrates that the serif+sans pairing isn't mandatory for warm-casual registers.
4. **First content-marketing blog grid** — `BlogPreviewGrid` for cafés/restaurants that publish guides, origin stories, news. Promotion candidate.
5. **First 2-up product-photo flanking hero** — `FlankedHeroPhotos` pattern. Different from full-bleed hero (1776), sticky-left photo (qitchen), slideshow (bramble), asymmetric multi-card (gusto).
6. **No reservation infrastructure** — first template that doesn't ship a reservation flow. Order/contact-driven only.

## Risks / things to verify in audit
- Confirm primary CTA — is it "View Menu", "Order Online", or "Visit Us"? Coffee shops vary widely.
- Verify whether the wood texture is a placeholder image (will need replacement guidance for forks) or treated as a brand element.
- Check actual dish photography style on /menu — is it consistent latte-art-style or mixed (pastries, sandwiches)?
- Verify whether the blog grid links to real articles or is a placeholder slot.
- Check brand wordmark — is "Brewed to perfection" the brand name or a tagline (and what's the actual brand)?
- Verify Poppins-only claim — sometimes templates sneak in a second display font for one element.
- Capture /menu page separately to compare home-page menu sections vs dedicated menu page (often different).
