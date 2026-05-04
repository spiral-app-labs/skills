# Strawberry Moon — QA Round 2

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC parent task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Current gate: `qa_round_2`
- Locked route: `velvet-shaker-01`, warmed toward Bramble for a cozy Wauconda martini lounge.

## Verification run

```bash
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3078
```

Result: typecheck and production build passed. Local production preview served successfully on `127.0.0.1:3078`. Mission Control heartbeat writeback succeeded as `d7541376-2c9e-4f2f-a202-0184d73fae6c`.

## Evidence captured

- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-2-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-2-mobile-2026-05-04.png`

## Findings

1. Mobile below-fold image/gallery capture showed accidental tiny cropped strips and blank gaps.
2. Body copy and lower sections were too dim against the dark canvas for a buyer-facing demo.
3. The hero image proof card was muddy over photography.
4. Mobile nav was improved from Round 1 but still felt too tiny/cramped.

## Fixes applied in Round 2

1. Simplified `CurtainImage` into a reliable immediate image primitive so automated screenshots and actual scrolling do not expose blank reveal overlays or cropped strips.
2. Tightened section spacing across the below-fold home components so mobile transitions feel intentional rather than gappy.
3. Raised text contrast across home/about/menu/contact/footer components by removing low-opacity body-copy treatments.
4. Changed the hero proof overlay to a solid high-contrast card and strengthened the mobile nav with chip-style links.

## Final QA result

Final image QA cleared the Round 2 blockers. Remaining notes are non-blocking: mobile nav wraps the final link, some image cards are naturally dark, and desktop keeps a generous editorial rhythm.

## Round 2 result

Passed. Advance to `qa_round_3` for final sell-readiness QA before packaging.
