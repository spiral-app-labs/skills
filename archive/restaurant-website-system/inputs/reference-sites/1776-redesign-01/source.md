# 1776 Restaurant Redesign

- **URL:** https://1776-restaurant-redesign.vercel.app
- **Type:** Live restaurant website (redesign — not yet at production domain)
- **Author / studio:** OpenClaude agent build (per user)
- **Notes:** User flagged this as "one of the best websites my OpenClaude agent has EVER made (kinda based on qitchen but not necessarily)." Inheriting some DNA from qitchen-01 (floating dark header pill, editorial display serif, dark mode + cream text, cinematic food photography) but evolving meaningfully — italic-on-serif emphasis, brand accent color, multi-section homepage, marquee strip, featured-card grids, rich footer.
- **Why we picked this:** Real-world fine-dining site that demonstrates a *warmer, more welcoming* fine-dining register than qitchen's ceremonial restraint. Fills a different lane in the catalog ("editorial-warm fine dining") and contributes several reusable patterns (italic-on-serif, marquee, featured-card-grid, multi-column footer).
- **First impression vibe:** Editorial fine dining, warm-confident, navy + amber, italic-emphasis serif, multi-section narrative.
- **Likely archetype match:** Primary: **modern upscale destination** (warmer cousin of qitchen's fine-dining). Also fits **modern American**, **farm-to-table**, **wine-forward bistro**.

## Restaurant context (from site)
- **Name:** 1776 Restaurant
- **Location:** 397 W Virginia St, Crystal Lake, IL 60014
- **Cuisine:** Modern American, farm-to-table, **100% gluten-free kitchen**
- **Chef:** Jill Vedaa (Resident Chef)
- **Recognition:** Wine Spectator Award of Excellence; 4.9★ / 1,902 reviews
- **Reservation system:** OpenTable
- **Phone:** (815) 356-1776

## Sub-pages confirmed
- `/` (home — long-scroll multi-section)
- `/menu` (THE MENU — categorized list with sub-tabs Nosh / Salads / Entrees / Dessert / Wine & Drinks)
- `/about` (WHERE FREEDOM MEETS FLAVOR — chef bio + story timeline + local partners)
- `/contact` (CONTACT & RESERVATIONS — address + phone + hours + reservation widget + good-to-know list)
- External: OpenTable reservations link

## Capture artifacts
- `screenshots/` — 8 full-page captures (desktop + mobile × 4 routes)
- `scroll-frames/` — desktop scroll positions at 0/25/50/75/100% per page + hover states
- `videos/` — 4 page-load `.webm` recordings
- `motion-frames/` — 20 frames extracted via ffmpeg
- `meta/*.json` — computed styles + animations + font URLs (ground-truth fonts: Cormorant Garamond + DM Sans; ground-truth bg `#0D1B2A`, text `#F5F0E8`, accent `#C9A96E`)
