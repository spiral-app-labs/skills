# Strawberry Moon — QA Round 1

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC parent task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Current gate: `qa_round_1`
- Locked route: `velvet-shaker-01`, warmed toward Bramble for a cozy Wauconda martini lounge.

## Verification run

```bash
npm ci
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3078
```

Result: typecheck and production build passed. Local production preview served successfully on `127.0.0.1:3078`. Mission Control heartbeat writeback succeeded as `c036c904-df28-426e-8461-e7243a0b8a83`.

## Evidence captured

- `restaurant-website-system/sites/strawberry-moon/screenshots/preview-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/preview-home-mobile-2026-05-04.png`

## Findings

1. Initial hero composition had a massive empty first viewport and read as unfinished on desktop.
2. The mobile header and hero were cramped, with unclear CTA priority.
3. The first viewport needed stronger proof that this is a real Strawberry Moon martini/lounge redesign rather than a generic bar template.

## Fixes applied in Round 1

1. Reworked `MassiveWordmarkHero` into a tighter editorial hero with a real official-site image, Google proof, red-door/Wauconda positioning, and three clear CTAs: directions, live music, and phone.
2. Reduced oversized wordmark/viewport spacing so desktop no longer opens with a broken-looking blank field.
3. Tightened mobile nav/logo spacing while preserving all real navigation links.
4. Verified the updated first viewport with desktop and mobile screenshots after a fresh production build/restart.

## Remaining QA notes

- The first viewport is now plausibly demo-ready.
- Below-fold mobile sections still need Round 2 attention: one image/gallery area creates a tiny cropped strip with a large gap, and some lower dark-section copy is too low contrast.
- Mobile nav is acceptable for demo but still tight.

## Round 1 result

Passed with follow-up fixes required in Round 2 before packaging.
