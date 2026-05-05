# Mary's Mexican Grill QA Round 3

- Date: 2026-05-04, refreshed 2026-05-05T03:18:39Z
- Site: `marys-mexican-grill`
- Template/archetype: `bamzi-01`
- MC root task ID: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`
- MC QA3 child task ID: `bbb46016-3e2e-43e7-b3d7-e0995e34252e`
- Lead ID: `4416524d-0894-4e47-a4e7-880ba6579aa3`
- Preview URL found from GitHub PR #19: `https://skills-git-chore-marys-qa-round-3-ethan-ethantalrejas-projects.vercel.app`
- Preview access status: `auth_protected_pending_ethan_verification`
- `ready_to_pitch`: `false`

## Final verdict

Needs work before final client handoff.

The site itself passes the local sell-readiness review: it feels specific to Mary's Mexican Grill on Woodstock Square, keeps the real DoorDash/call/directions paths, and avoids fake claims. Fresh QA3 screenshots were captured for desktop and mobile across home, menu, about, and contact.

The handoff still cannot be marked final because the PR #19 Vercel preview URL is behind Vercel login/401 for unauthenticated checks, QA2 screenshot files referenced by earlier evidence are still missing from this worktree, Mission Control API sync is unavailable in this runtime, and Ethan-only gates remain open: site-specific Anthropic key plus Ethan human review.

## What is world-class already

- Identity: the site reads as Mary's Mexican Grill in Woodstock, IL rather than a generic Mexican restaurant template.
- Conversion: menu, DoorDash ordering, call, directions, hours, and sticky mobile actions are present and truthful.
- Accuracy: phone stays `(815) 337-2303`, address stays `108 Cass St, Woodstock, IL 60098`, and social links remain absent because verified production-safe URLs were not captured.
- Design quality: the bamzi-01 visual system remains cohesive, warm, and premium enough for founder review.
- Mobile polish: local mobile screenshots render without document-level horizontal overflow; contact page CDP audit reported `innerWidth=390` and `docScrollWidth=390`.

## What still blocks sellability

1. The Vercel preview URL exists but could not be verified past Vercel protection from this runtime.
2. Ethan has not yet configured the site-specific Anthropic key.
3. Ethan has not yet completed human review.
4. QA2 screenshot files referenced in existing QA2 docs/writebacks are still missing from the current worktree.
5. Mission Control QA3 writeback is now synced via the patched local agency API from PR #328; final handoff still waits on the packaging blockers above.

## Critical fixes before Ethan sees it

1. Verify the PR #19 preview URL in an authenticated Vercel/GitHub browser session, or disable preview protection for the client-safe handoff URL.
2. Mirror or recapture the missing QA2 screenshot evidence, or explicitly supersede it with the QA3 screenshot packet in Mission Control.
3. Keep the MC packaging blocker current until preview access, QA2 screenshot evidence, Anthropic key, and human review are resolved.
4. Ethan must create/configure the site-specific Anthropic key.
5. Ethan must complete human review before `ready_to_pitch` can become `true`.

## Evidence checked

- Source truth and audit:
  - `restaurant-website-system/sites/marys-mexican-grill/source.md`
  - `restaurant-website-system/sites/marys-mexican-grill/audit.md`
  - `restaurant-website-system/sites/marys-mexican-grill/google-reviews-themes.md`
- Sell/readiness collateral:
  - `restaurant-website-system/sites/marys-mexican-grill/pitch-doc.md`
  - `restaurant-website-system/sites/marys-mexican-grill/battle-cards.md`
  - `restaurant-website-system/sites/marys-mexican-grill/top-3-improvements-2026-05-04.md`
  - `restaurant-website-system/sites/marys-mexican-grill/concierge-evidence-2026-05-04.md`
- Prior QA:
  - `restaurant-website-system/sites/marys-mexican-grill/qa-round-1.md`
  - `restaurant-website-system/sites/marys-mexican-grill/qa-round-2.md`
- Current route/build/browser evidence:
  - `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
  - `restaurant-website-system/sites/marys-mexican-grill/components/ContactStripFooter.tsx`
  - `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-3-browser-checks-2026-05-04.json`

## Link and flow checks

1. Home, menu, about, and contact all preserve internal navigation links.
2. Primary conversion paths remain truthful and present:
   - Menu: internal `/menu`
   - Order: public DoorDash listing
   - Call: `tel:+18153372303`
   - Directions/map: Google Maps directions to `108 Cass St, Woodstock, IL 60098`
3. Contact/footer CTA cleanup from this round remains present:
   - Footer address links directly to directions.
   - Footer phone links to the verified call path.
   - Contact info cards expose tappable address and phone actions.
4. Social links intentionally remain absent because no verified URLs were available in the local source pack.
5. PR #19 Vercel preview URL was found, but unauthenticated checks hit Vercel login/401.

## Screenshots captured

- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-home-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-menu-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-about-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-contact-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-home-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-menu-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-about-2026-05-04.png`
- `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-contact-2026-05-04.png`

Capture method: `next start -H 127.0.0.1 -p 3120` plus Google Chrome headless screenshots at `1440x900` and `390x844`.

## Build and verification

```bash
npm ci
npm run build
npm run typecheck
```

- `npm ci` succeeded.
- `npm run build` succeeded with Next.js `14.2.35`.
- `npm run typecheck` succeeded.
- Local preview rendering succeeded on `http://127.0.0.1:3120`.
- Managed OpenClaw browser could open the Vercel preview URL only to the Vercel login wall.

## Confidence to sell

Ethan can use this as a founder review package, but not yet as a clean client handoff. The site quality is strong; the remaining issues are delivery infrastructure and founder-only approval gates, not core restaurant identity or build quality.
