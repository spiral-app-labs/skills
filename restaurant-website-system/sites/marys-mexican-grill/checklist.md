# marys-mexican-grill Build Checklist

- Workflow version: 2026-05-04
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead ID: 4416524d-0894-4e47-a4e7-880ba6579aa3
- Current child task ID: 81fa73c9-696d-4dd1-a33b-9f58c44e957f
- Completed QA3 child task ID: bbb46016-3e2e-43e7-b3d7-e0995e34252e
- Founder gate task ID: 03d5cec6-db38-46de-92d6-47d8c06c787e
- MC parent task ID: 0ee079ce-2e26-4d44-8fdf-96e0db2e4047
- Template slug: bamzi-01
- Current stage: packaging
- Ready to pitch: false
- Checklist MD: restaurant-website-system/sites/marys-mexican-grill/checklist.md
- Checklist JSON: restaurant-website-system/sites/marys-mexican-grill/checklist.json
- Delivery package: restaurant-website-system/sites/marys-mexican-grill/delivery-package.md
- Preview URL: https://skills-git-chore-marys-qa-round-3-ethan-ethantalrejas-projects.vercel.app
- Preview access: auth-protected pending Ethan/authenticated verification
- Updated: 2026-05-05T03:45:30Z

## Current Gate

- QA3 evidence is captured and synced to Mission Control; MC marks the QA3 child task done.
- Mission Control now shows the root at `packaging`; local `currentStage` is aligned to that source of truth.
- Delivery package artifacts are prepared and mirrored to MC, but final delivery is not complete.
- Founder-only gates still pending:
  - `anthropic_key_created`: pending_founder
  - `founder_human_review`: pending_founder
- `ready_to_pitch` must remain `false`.

## Mission Control Sync Contract

- Do not do raw Supabase writes from this worktree.
- Mission Control API writeback for QA3 + packaging succeeded via the patched local MC agency route from PR #328.
- Root metadata mirrors currentStage/build_stage, checklist paths, delivery package path, requirements, evidence, passed requirement IDs, and blockers.
- Child task metadata must mirror workflow step IDs, requirements, evidence required, required skills, and operator contracts.

## Canonical Gates

| Gate | Stage | Status | Notes |
| --- | --- | --- | --- |
| checklist_created | checklist | done | Local checklist files exist and local MC payload mirroring is prepared. |
| current_site_audit | auditing | done | Audit, screenshots, and DOM/text scrape are present. |
| google_reviews_capture | reviews | passed | Highest-rating review capture and theme packet are present. |
| template_route_fork_build | building | passed | Mary's remains on `bamzi-01`; fresh `npm run build` and `npm run typecheck` passed in this worktree. |
| website_improvement_pass | improving | passed | Improvement evidence is present. |
| top_three_improvements | top_3_improvements | passed | Ranked top-three doc is present. |
| ai_concierge_added | concierge | passed | Truthful concierge evidence and transcripts are present. |
| pitch_doc | pitch | passed | Pitch doc is present. |
| battle_cards_doc | battle_cards | passed | Battle cards are present. |
| qa_round_1 | qa_round_1 | passed | QA1 doc and screenshots are present. |
| qa_round_2 | qa_round_2 | passed with evidence gap | QA2 doc/writebacks exist, but the referenced QA2 screenshots are missing from the current worktree. |
| qa_round_3 | qa_round_3 | passed / MC synced | QA3 screenshots, build/typecheck, final QA doc, and MC QA writeback are present; preview access remains auth-protected. |
| delivery | packaging | in progress / blocked on founder + evidence | Delivery package is prepared and mirrored to MC; final handoff is blocked by preview access verification, QA2 screenshot evidence, Anthropic key, and Ethan human review. |

## Requirement Status

- [x] checklist-md: Local checklist.md exists for this restaurant.
- [x] checklist-json: Local checklist.json exists for this restaurant.
- [x] checklist-mc-sync: Mission Control root and child task metadata now mirror checklist paths, requirement status, QA3 evidence, delivery evidence, current stage, and blockers.
- [x] current-site-screenshots: Desktop and mobile current-site screenshots captured in `screenshots/current-site-desktop-full.png`, `screenshots/current-site-mobile-full.png`, and `screenshots/current-site-mobile-fold.png`.
- [x] current-site-scrape: Live site DOM/text scrape captured in `scrapes/current-site-browser-dom-snapshot-2026-05-04.html` and `scrapes/current-site-browser-text-2026-05-04.txt`.
- [x] current-site-opportunities: Audit documents concrete conversion, credibility, mobile, and factual gaps in `audit.md`.
- [x] reviews-highest-filter: Google Reviews Highest filter capture is present in `screenshots/google-reviews-highest-2026-05-04.png`.
- [x] reviews-thirty-written: 30 written reviews are captured in `scrapes/google-reviews-highest-30.json` and `scrapes/google-reviews-highest-30.md`.
- [x] reviews-themes: Review themes summary is present in `google-reviews-themes.md`.
- [x] template-route-locked: Mary's remains locked to archetype `bamzi-01` in `routing.md`.
- [x] fork-built: `npm run build` passed in this worktree on 2026-05-04.
- [x] specificity: The fork preserves Mary's restaurant-specific identity and avoids fake claims, fake menu items, fake reviews, and invented order paths.
- [x] identity-specific: Improvement pass preserves Mary's specific identity and the selected archetype.
- [x] conversion-paths: Menu, DoorDash, call, directions, and hours remain truthful and restaurant-specific.
- [x] mobile-check: Mobile behavior is documented in `improvement-evidence-2026-05-04.md` and refreshed in QA3 screenshots.
- [x] top-three-named: Top three improvements are documented in `top-3-improvements-2026-05-04.md`.
- [x] top-three-implemented: The ranked improvements are implemented in the fork.
- [x] top-three-evidence: Top-three evidence is mirrored in the top-three and build evidence docs.
- [x] concierge-kb-truthful: Concierge knowledge stays inside verified source material.
- [x] concierge-tested: Concierge transcript evidence is present in `concierge-evidence-2026-05-04.md`.
- [x] concierge-safe: Concierge refuses unsupported reservations and invented promises.
- [x] pitch-specific: Pitch doc is specific to Mary's, Woodstock Square, and the audited conversion gaps.
- [x] pitch-before-after: Pitch doc explains the before/after delta in owner language.
- [x] pitch-evidence: Pitch doc links the supporting evidence set.
- [x] battle-cards-objections: Battle cards answer likely owner objections.
- [x] battle-cards-demo-path: Battle cards provide an exact demo path.
- [x] battle-cards-risks: Battle cards call out risks and unknowns truthfully.
- [x] qa-round-1: QA1 evidence is present locally.
- [x] qa-round-2: QA2 doc and writebacks are present locally, but packaging notes the missing screenshot files as an unresolved evidence gap.
- [x] qa-round-3: QA3 doc, browser checks, fresh desktop/mobile screenshots, and MC QA writeback are complete.
- [x] delivery-package: Delivery package, checklist paths, pitch doc, battle cards, QA docs, screenshot inventory, and MC delivery payloads are mirrored in `delivery-package.md` and synced to MC.
- [ ] delivery-final-url-access: PR #19 preview URL exists, but unauthenticated checks hit Vercel login/401; Ethan/authenticated verification is required.
- [ ] delivery-no-missing-evidence: Still blocked by auth-protected preview verification, missing QA2 screenshot files in this worktree, and founder-only gates.

## Core Artifact Paths

- Delivery package: `restaurant-website-system/sites/marys-mexican-grill/delivery-package.md`
- Pitch doc: `restaurant-website-system/sites/marys-mexican-grill/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/marys-mexican-grill/battle-cards.md`
- Audit: `restaurant-website-system/sites/marys-mexican-grill/audit.md`
- Source truth: `restaurant-website-system/sites/marys-mexican-grill/source.md`
- Build evidence: `restaurant-website-system/sites/marys-mexican-grill/build-evidence-2026-05-04.md`
- Improvement evidence: `restaurant-website-system/sites/marys-mexican-grill/improvement-evidence-2026-05-04.md`
- Top three: `restaurant-website-system/sites/marys-mexican-grill/top-3-improvements-2026-05-04.md`
- Concierge evidence: `restaurant-website-system/sites/marys-mexican-grill/concierge-evidence-2026-05-04.md`
- QA1: `restaurant-website-system/sites/marys-mexican-grill/qa-round-1.md`
- QA2: `restaurant-website-system/sites/marys-mexican-grill/qa-round-2.md`
- QA3: `restaurant-website-system/sites/marys-mexican-grill/qa-round-3.md`
- QA3 browser checks: `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-3-browser-checks-2026-05-04.json`
- Packaging build payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-packaging-2026-05-04.json`
- Packaging delivery payload: `restaurant-website-system/sites/marys-mexican-grill/mc-delivery-package-writeback-2026-05-04.json`

## QA Rounds

- Round 1: passed with screenshots in `screenshots/qa-round-1-desktop-2026-05-04.png` and `screenshots/qa-round-1-mobile-2026-05-04.png`.
- Round 2: doc/writeback passed, but the screenshot files referenced in QA2 docs/writebacks are not present in this worktree and remain an evidence blocker for final delivery.
- Round 3: local screenshots captured for desktop/mobile home, menu, about, and contact; browser checks are in `scrapes/qa-round-3-browser-checks-2026-05-04.json`; MC QA writeback is synced and the QA3 child task is done.

## QA3 Screenshot Packet

- `screenshots/qa-round-3-desktop-home-2026-05-04.png`
- `screenshots/qa-round-3-desktop-menu-2026-05-04.png`
- `screenshots/qa-round-3-desktop-about-2026-05-04.png`
- `screenshots/qa-round-3-desktop-contact-2026-05-04.png`
- `screenshots/qa-round-3-mobile-home-2026-05-04.png`
- `screenshots/qa-round-3-mobile-menu-2026-05-04.png`
- `screenshots/qa-round-3-mobile-about-2026-05-04.png`
- `screenshots/qa-round-3-mobile-contact-2026-05-04.png`

## Blockers

- `ready_to_pitch` must remain `false` until Ethan personally completes human review.
- `ready_to_pitch` must remain `false` until the site-specific Anthropic key is created/configured.
- The PR #19 preview URL is recorded, but unauthenticated checks hit Vercel login/401 and require Ethan/authenticated verification.
- QA2 screenshot files referenced by the existing QA2 docs/writebacks are not present in this worktree.
- Mission Control QA3 + packaging sync succeeded via the patched local MC agency API from PR #328; remaining blockers are preview access, QA2 screenshot evidence, Anthropic key, and Ethan human review.
