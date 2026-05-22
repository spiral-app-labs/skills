# The Chef Grill — top 3 highest-sellability improvements

Date: 2026-05-08
Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
Root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
Top-three task ID: `8cdd9dd3-e155-457e-966f-851ea8efd217`
Selected archetype: `Cuisine`
Concrete template slug: `plate-01`
Local preview: `http://127.0.0.1:3046`

## Ranked top 3

### 1. Anonymous Google review proof carousel

**Why it sells:** The current-site audit found strong Google proof and specific dish/hospitality cues buried in text. The new carousel makes proof interactive and scannable without exposing reviewer names, initials, dates, avatars, or fabricated attribution.

**Implemented:** `components/AnonReviewCarousel.tsx` renders 5-star rows, short quote fragments, and `Google Review` platform tags only. It uses a JS `scrollLeft` marquee with pause-on-interaction, a reduced-motion guard, snap alignment, and a startup pause so the first mobile card is readable.

**Evidence:** `top-three/top-three-focused-check-2026-05-08.json`, `top-three/screenshots/top-three-mobile-review-proof-2026-05-08.png`, `top-three/screenshots/top-three-desktop-review-proof-2026-05-08.png`.

### 2. Menu shortcut chips for faster browsing

**Why it sells:** The audit called out menu scanability as a major gap. The Chef Grill has a large, real menu; guests need fast jumps to kebabs, brick oven, breakfast/soups, meze, seafood/family options, and desserts/drinks.

**Implemented:** `components/InlineMenuHomepage.tsx` now adds a menu shortcut band inside the existing `plate-01` inline-menu structure, preserving the archetype while making category navigation visible and mobile-scrollable.

**Evidence:** `top-three/screenshots/top-three-mobile-menu-shortcut-2026-05-08.png`, `top-three/screenshots/top-three-desktop-menu-shortcut-2026-05-08.png`.

### 3. Mobile conversion / first-impression reliability

**Why it sells:** The audit flagged weak above-fold conversion and mobile readability. The build already had Order / Call / Directions; the top-three pass tightened reliability by reducing mobile hero headline pressure, keeping the sticky conversion bar, removing the menu reveal wrapper that caused blank capture risk, and preserving safer “plan your visit” copy instead of implying a live reservation flow.

**Implemented:** `components/PlateHero.tsx` uses a smaller mobile clamp; `app/page.tsx` renders the menu directly instead of hiding it behind scroll reveal; `components/SiteHeader.tsx` keeps Order / Call / Directions sticky on mobile; `content.example.ts` uses source-safe visit language.

**Evidence:** production preview at `http://127.0.0.1:3046`, `top-three/top-three-focused-check-2026-05-08.json`, and mobile screenshots above.

## Verification

- `npm run build` passed after the top-three changes.
- `npm run typecheck` passed after the top-three changes.
- Headless focused check passed: menu shortcut present, anonymous review proof present, no names in review cards, no horizontal overflow.
- Vision QA initially caught menu reveal / carousel clipping concerns; fixes were applied, recaptured, and final QA found no major blocker.

## No production deploy

No production deploy was triggered. The current evidence preview is local only at `http://127.0.0.1:3046`.
