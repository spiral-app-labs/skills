# The Chef Grill — local build checklist

## Status

- Site slug: `the-chef-grill`
- MC lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
- MC root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- MC completed child tasks: through `qa_round_2` / `f2ffbb20-ce8a-4eff-a747-0bb248d2a6d3`
- Chosen archetype: **Cuisine**
- Concrete template slug: **`plate-01`**
- Current gate: **QA round 3 passed locally; packaging/public preview still pending**
- Current MC writeback state: **QA round 3 payload prepared, but protected `/qa-rounds` POST is blocked by DNS resolution failure for `hq.ethantalreja.com`**
- Ready to deliver: **No — public preview/deploy, packaging, and delivery remain**

## Completed gates

- [x] Lead qualification
- [x] Checklist created/synced
- [x] Current-site audit with desktop/mobile screenshots + scrapes
- [x] Google Reviews capture: Highest filter + 30 written reviews
- [x] Template routing locked: `plate-01`
- [x] Template fork/build: `plate-01` safely merged into existing `sites/the-chef-grill` without deleting evidence artifacts
- [x] Improvement pass: anonymous Google review proof tightened, four-path mobile CTA bar, audit-aligned copy polish
- [x] Top 3 improvements
- [x] AI concierge
- [x] Pitch doc
- [x] Battle cards
- [x] QA round 1: build correctness + content truth
- [x] QA round 2: mobile polish + conversion flow
- [x] QA round 3: final sell-readiness + founder delivery pack
- [ ] Delivery package

## Fork/build evidence

- Template metadata: `.agency-template.json`
  - Source: `restaurant-website-system/templates/plate-01`
- Package name: `the-chef-grill` in `package.json`
- Personalized app/content:
  - `app/`, `components/`, `lib/`, `theme.ts`, `tailwind.config.ts`, `content.example.ts`
- Dependency/build gates:
  - `evidence/typecheck-2026-05-08.txt` — `npm run typecheck` passed
  - `evidence/lint-2026-05-08.txt` — `npm run lint` passed
  - `evidence/build-2026-05-08.txt` — `npm run build` passed
- Local preview screenshots:
  - `screenshots/local-preview-home-2026-05-08.png`
  - `screenshots/local-preview-mobile-2026-05-08.png`
- Additional fork preview QA packet:
  - `build/fork-preview-check-2026-05-08.json`
  - `build/screenshots/fork-desktop-home-2026-05-08.png`
  - `build/screenshots/fork-mobile-home-2026-05-08.png`
  - `build/screenshots/fork-desktop-menu-2026-05-08.png`
  - `build/screenshots/fork-mobile-menu-2026-05-08.png`
  - `build/screenshots/fork-desktop-contact-2026-05-08.png`
  - `build/screenshots/fork-mobile-contact-2026-05-08.png`

## Source evidence preserved

- Qualification: `qualification.md`
- Current-site audit: `audit.md`, `audit.json`
- Current-site capture summary: `scrapes/current-site-capture-summary.json`
- Current-site screenshots:
  - `screenshots/current-site-home-desktop-full.png`
  - `screenshots/current-site-home-mobile-full.png`
  - `screenshots/current-site-menu-desktop-long.png`
  - `screenshots/current-site-menu-mobile-long.png`
- Google reviews:
  - `scrapes/google-reviews-highest-30.md`
  - `scrapes/google-reviews-highest-30.json`
  - `screenshots/google-reviews-highest-visible.png`
- Routing:
  - `routing.md`
  - `routing.json`

## Build personalization summary

- Uses the `plate-01` Cuisine structure: compact hero, full inline menu, trust/proof band, review-proof cards, FAQ, closing visit/order block, large footer wordmark.
- Makes the site unmistakably The Chef Grill: halal Turkish/Mediterranean grill in Elk Grove Village; 4.7-star / 807-review Google proof; charcoal kebabs, mixed grill, Iskender, Beyti, Adana, pide, lahmacun, manti, soups, breakfast, desserts, ayran, and Turkish tea.
- Preserves truthful source facts only:
  - Phone: `3123138900`
  - Address: `812 E Higgins Rd, Elk Grove Village, IL 60007`
  - Email: `info@thechefgrill.com`
  - Official site/menu/order links plus Grubhub/Uber Eats links from artifacts
  - Official contact-form time window: `9:00 AM – 11:30 PM` with call-to-confirm copy, not day-by-day invented hours
- Mobile conversion: sticky bottom **Order Online / View Menu / Call / Directions** bar plus top **Order Online** CTA.
- Palette applied: warm cream, charcoal, toasted sesame, restrained copper/amber, and olive support tone.

## Improvement pass evidence

- `build/improvement-pass-2026-05-08.md`
- `build/improvement-preview-check-2026-05-08.json`
- Screenshot note: live screenshot capture was blocked in this sandbox; the preview JSON records the bind/screenshot blocker and the static-build verification method.

## Concierge evidence

- `concierge/concierge-evidence-2026-05-08.md`
- `concierge/concierge-api-test-2026-05-08.json`
- `concierge/concierge-ui-check-2026-05-08.json`
- `concierge/screenshots/concierge-desktop-trigger-2026-05-08.png`
- `concierge/screenshots/concierge-desktop-dialog-answer-2026-05-08.png`
- `concierge/screenshots/concierge-mobile-trigger-2026-05-08.png`
- `concierge/screenshots/concierge-mobile-dialog-answer-2026-05-08.png`

## Mission Control writeback

- Prepared /build payload: `mc-template-fork-build-sync-payload-2026-05-08.json`
  - `build_stage`: `building`
  - `template_slug`: `plate-01`
  - `passed_requirement_ids`: `fork-built`, `fork-preview`, `specificity`
- Protected /build PATCH response artifact: `mc-template-fork-build-sync-2026-05-08.json`
  - Result: `200 OK`; MC root remains `building`, child `template_fork_build` is marked done, and `fork-built`, `fork-preview`, `specificity` remain passed.
- Prepared /build improvement payload: `mc-improvement-pass-sync-payload-2026-05-08.json`
  - `build_stage`: `improving`
  - `passed_requirement_ids`: `improvement-pass-complete`, `conversion-paths`, `mobile-check`
- Protected /build improvement response artifact: `mc-improvement-pass-sync-2026-05-08.json`
  - Result: blocked in this pass because `hq.ethantalreja.com` could not be resolved from the sandbox.
- Local blocker artifact:
  - `build/improvement-pass-sync-blocker-2026-05-08.md`
- Prepared /build concierge payload: `mc-concierge-sync-payload-2026-05-08.json`
  - `build_stage`: `concierge`
  - `passed_requirement_ids`: `concierge-visible`, `concierge-tested`, `concierge-safe`
- Protected /build concierge response artifact: `mc-concierge-sync-2026-05-08.json`
  - Result: `200 OK`; child task `74f777e8-0ad5-4189-9610-3a40fa31d958` marked `done`.
- Historical heartbeat/activity blocker artifacts from the initial missing-env attempt are preserved:
  - `mc-template-fork-build-heartbeat-blocker-payload-2026-05-08.json`
  - `mc-template-fork-build-heartbeat-blocker-sync-2026-05-08.json`

## QA round 1 evidence — 2026-05-08

- QA report: `qa/round-1/qa-round-1-2026-05-08.md`
- Structured checks: `qa/round-1/qa-round-1-checks-2026-05-08.json`
- Final command evidence:
  - `qa/round-1/evidence/build-final-2026-05-08.txt` — `npm run build` passed
  - `qa/round-1/evidence/typecheck-final-2026-05-08.txt` — `npm run typecheck` passed
  - `qa/round-1/evidence/lint-final-2026-05-08.txt` — `npm run lint` passed
- Route/browser evidence:
  - `qa/round-1/qa-round-1-render-check-2026-05-08.json`
  - `qa/round-1/qa-round-1-source-scan-2026-05-08.txt`
  - `qa/round-1/screenshots/qa1-desktop-home-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-mobile-home-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-desktop-menu-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-mobile-menu-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-desktop-about-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-mobile-about-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-desktop-contact-2026-05-08.png`
  - `qa/round-1/screenshots/qa1-mobile-contact-2026-05-08.png`
- Fixes applied:
  - Hid the fixed mobile quick-action bar on `/contact`, where equivalent links already exist in the page flow.
  - Made contact page phone and email clickable via `tel:` / `mailto:` links.
  - Removed customer-visible preview/source-artifact phrasing from content and concierge responses.
  - Preserved earlier QA fixes: `content.example.ts` missing comma and `/menu` client shortcut/fallback to `/#menu`.
- Mission Control sync:
  - `mc-qa-round-1-sync-payload-2026-05-08.json`
  - `mc-qa-round-1-sync-2026-05-08.json` — `200 OK`; QA round 1 child marked done
- QA round 1 passed build/content-truth gate after fixes and MC sync.

## Remaining blockers / unknowns

- No public Vercel/deployed preview URL yet; QA round 3 passed on local/build evidence only, so packaging/delivery remain blocked.
- Day-by-day/holiday hours are not verified beyond the official contact-form 9:00 AM–11:30 PM time window.
- Catering/private-event capacity and service details are not verified; current copy only tells guests to call/confirm group or celebration details.
- Preferred ordering provider should be confirmed before public launch.
- Owner/founder story and spelling should be verified before making it a sales claim.
- Mission Control QA round 3 sync is blocked in this sandbox because `hq.ethantalreja.com` could not be resolved.

## Next step

Next canonical step is still `delivery` / packaging, but do not mark delivery/package work complete until a public preview URL exists and the QA round 3 MC sync succeeds.

## Pitch doc update — 2026-05-08

- Created `pitch-doc.md` as a 60-second owner-facing sales brief.
- Covers current-site revenue leaks, prototype fixes, demo path, and do-not-overclaim caveats.
- Evidence references audit, Google review packet, fork/build, improvement pass, top-three improvements, and concierge evidence.

## Battle cards update — 2026-05-08

- Created `battle-cards.md` with owner talking points, objections/responses, proof points, risks, demo path, and close.
- Kept caveats around unverified hours, catering/private events, preferred provider, and owner/founder details.


## QA Round 1 update — 2026-05-08

- QA round 1 passed after fixing a mobile contact-page issue where the fixed quick-action bar could visually interrupt the form.
- Fixed by hiding the fixed mobile quick-action bar on `/contact` and making phone/email contact links clickable.
- Removed customer-visible preview/source-artifact phrasing from content and concierge responses.
- Evidence:
  - `qa/round-1/qa-round-1-2026-05-08.md`
  - `qa/round-1/qa-round-1-checks-2026-05-08.json`
  - `qa/round-1/qa-round-1-render-check-2026-05-08.json`
  - `qa/round-1/qa-round-1-source-scan-2026-05-08.txt`
  - `mc-qa-round-1-sync-payload-2026-05-08.json`
  - `mc-qa-round-1-sync-2026-05-08.json`
- Build/typecheck/lint passed after the QA1 fixes; MC `/qa-rounds` returned `200 OK` and marked `qa_round_1` done.


## QA Round 2 update — 2026-05-08

- QA round 2 passed after mobile conversion, viewport/safe-area, menu-chip, and concierge-trigger polish.
- Fixed/hardened the mobile sticky CTA bar so Order Online / View Menu / Call / Directions are a fully visible single-row mobile bar with 44px tap targets.
- Wrapped mobile menu shortcut chips and raised the concierge trigger so neither is clipped/covered on 390px mobile.
- Verified mobile hero, menu shortcut chips, anonymous review proof, visit CTAs, contact flow, customer-visible source scan, and concierge trigger spacing with no horizontal overflow.
- Evidence:
  - `qa/round-2/qa-round-2-2026-05-08.md`
  - `qa/round-2/qa-round-2-checks-2026-05-08.json`
  - `qa/round-2/qa-round-2-source-scan-2026-05-08.txt`
  - `qa/round-2/screenshots/qa2-mobile-hero-sticky-2026-05-08.png`
  - `qa/round-2/screenshots/qa2-mobile-menu-shortcuts-2026-05-08.png`
  - `qa/round-2/screenshots/qa2-mobile-review-proof-2026-05-08.png`
  - `qa/round-2/screenshots/qa2-mobile-visit-ctas-2026-05-08.png`
  - `qa/round-2/screenshots/qa2-mobile-contact-flow-2026-05-08.png`
  - `qa/round-2/screenshots/qa2-desktop-home-polish-2026-05-08.png`
  - `mc-qa-round-2-sync-payload-2026-05-08.json`
  - `mc-qa-round-2-sync-2026-05-08.json`
- Final verification reran `npm run build`, `npm run typecheck`, and `npm run lint` after the concierge/sticky-bar fixes; all passed.
- MC `/qa-rounds` returned `200 OK` and marked `qa_round_2` done.


## QA Round 3 update — 2026-05-08

- QA round 3 passed for local sell-readiness/assets on current build evidence; no site fixes were required.
- Final route/link/truth checks passed for home, menu shortcut flow, about, contact, pitch doc, battle cards, top-three evidence, and concierge evidence.
- `npm run lint` and `npm run build` passed; `npm run typecheck` still fails before build on a clean `.next` tree but passes after `npm run build`, matching the known Next type-generation dependency.
- Fresh localhost/browser capture was blocked in this sandbox:
  - `next start` failed with `listen EPERM: operation not permitted 127.0.0.1:3055`
  - fresh headless Chrome screenshot execution was also blocked
  - QA round 3 therefore used built-output inspection and the preserved `qa/round-3/screenshots/` set already in the repo
- Evidence:
  - `qa/round-3/qa-round-3-2026-05-08.md`
  - `qa/round-3/qa-round-3-checks-2026-05-08.json`
  - `qa/round-3/evidence/typecheck-2026-05-08.txt`
  - `qa/round-3/evidence/typecheck-post-build-2026-05-08.txt`
  - `qa/round-3/evidence/lint-2026-05-08.txt`
  - `qa/round-3/evidence/build-2026-05-08.txt`
  - `qa/round-3/evidence/server-start-attempt-2026-05-08.txt`
  - `mc-qa-round-3-sync-payload-2026-05-08.json`
  - `mc-qa-round-3-sync-2026-05-08.json`
- Public preview is still missing, so packaging/delivery remain blocked.
- MC `/qa-rounds` POST could not sync from this sandbox because `hq.ethantalreja.com` DNS resolution failed.
