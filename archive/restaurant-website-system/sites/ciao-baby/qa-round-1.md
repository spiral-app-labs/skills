# Ciao Baby! QA round 1

Date: 2026-05-04  
Stage: `qa_round_1`  
Local preview: `http://127.0.0.1:3084`  
Template: `gusto-01`

## Scope

QA Round 1 checked build correctness, route rendering, mobile overflow, link/CTA safety, factual guardrails, and concierge refusal behavior after the fork/build, improvement, top-three, pitch, battle-card, and concierge gates.

## Verification commands

- `npm run typecheck` — passed
- `npm run build` — passed, including dynamic `/api/concierge`
- `CAPTURE_LABEL=qa-round-1 PREVIEW_URL=http://127.0.0.1:3084 CHROME_CDP_URL=http://127.0.0.1:18800 node scrapes/capture-preview-evidence.mjs` — passed
- `POST /api/concierge` with reservation intent — returned `unsupported request` with phone/directions handoff

## Browser capture results

Evidence file: `scrapes/qa-round-1-browser-checks-2026-05-04.json`

- `/` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/menu` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/about` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/contact` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders

Screenshot manifest: `screenshot-inventory-qa-round-1-2026-05-04.json`

## Findings and fixes

### Finding 1 — About page had leftover reservation-language CTA

- Severity: high factual-safety issue
- Before: `/about` had a hard-coded `Book a Table` CTA pointing to `#book`
- Fix: changed CTA to `Call Ciao Baby` and linked it to `tel:+18473813555`
- Verification: post-fix QA capture confirms `/about` mobile link list contains `Call Ciao Baby` with `tel:+18473813555`; no `Book a Table` or `#book` link remains in rendered metrics

### Finding 2 — Concierge safety

- Severity: pass
- Result: concierge refuses reservation/table-hold intent and hands off to phone/directions
- Evidence: `ai-concierge-transcript.md`, direct `/api/concierge` smoke response

### Finding 3 — Mobile overflow/layout

- Severity: pass
- Result: all four core routes have `docClientWidth == docScrollWidth` and no overflow offenders at 390px mobile viewport
- Evidence: `scrapes/qa-round-1-browser-checks-2026-05-04.json`

### Finding 4 — Factual safety and source caveats

- Severity: pass with remaining owner-verification caveat
- Result: no fake reservations/forms, no fake ordering path, review-derived menu favorites use confirmation language, hours are labeled publicly listed, and domain/hours verification remains documented
- Remaining caveat: owner must verify preferred domain, exact current hours, and any changed menu pricing before final delivery

## Evidence

- `restaurant-website-system/sites/ciao-baby/qa-round-1.md`
- `restaurant-website-system/sites/ciao-baby/scrapes/qa-round-1-browser-checks-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-1-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-home-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-menu-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-about-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-1-contact-mobile-2026-05-04.png`

## QA1 result

Pass. QA Round 1 is complete with one high-signal factual-safety fix applied and verified. Advance to `qa_round_2`.
