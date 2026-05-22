# Frato's Culinary Kitchen — Battle Cards — 2026-05-08

## One-sentence close

"We kept Frato's real ordering and catering systems, then rebuilt the first 30 seconds so mobile guests understand the signature food, trust the proof, and choose order/call/directions/catering faster."

## Owner talking points

- Frato's current site has real value: deep menu, OrderStart, catering engine, phone/address, hours, story, and active monthly/menu proof.
- The redesign does not erase that infrastructure. It makes the owned path cleaner before guests hand off to OrderStart or catering.
- The prototype leads with what guests already care about: giant mozzarella stick, one-pound slice, Burger of the Month, wings, gyros, catering, 4.2 / 554 Google proof, and `Since 1975`.
- Mobile was the main business fix: order stays visible, and menu/catering/directions/call are reachable immediately.
- The review carousel uses anonymous Google-review fragments, so the page feels specific without name-republication friction.

## Demo path

1. Homepage first fold: signature headline, proof pills, food image, `Order Online`, `View Menu`.
2. Mobile header: sticky Order Online plus Menu / Catering / Directions / Call rail.
3. Signature menu cards: giant mozzarella stick, one-pound slice, Burger of the Month.
4. Deal/catering lanes: Pizza + Wings, Gyro Go-To, Corporate Lunch Catering.
5. Safe site helper: verified-facts answers for order, catering, hours, directions, and dietary handoffs.
6. Google proof carousel: anonymous review fragments about cheese pull, fresh portions, wings, pizza, burgers.
7. Contact/catering handoffs: OrderStart, catering inquiry, phone, directions.

## Likely objections

### "Our current site already has ordering."

**Answer:** Yes — and we preserved it. The issue is not that OrderStart is missing; it is that the owned site should make guests confident before the handoff. The prototype makes the order path more obvious and makes the menu easier to choose from.

### "We have a huge menu; we don't want to hide it."

**Answer:** The prototype does not remove the menu. It curates the first decision by showing the items guests already remember — mozzarella stick, one-pound slice, burgers, wings, gyros, catering — then sends them to the full order flow.

### "Catering is separate."

**Answer:** That is respected. The prototype keeps FratosCatering.com and the catering inquiry form as official handoffs, but makes catering easier to find from the homepage, mobile nav, deal cards, CTA, and contact page.

### "Can this replace our menu/order system?"

**Answer:** Not in this pitch. The safer win is to keep the working provider stack and improve the pre-order experience around it. Replacement would be a separate operations decision.

### "Are the review quotes real?"

**Answer:** They are short anonymous fragments from the captured Google Reviews evidence packet. The page does not show reviewer names, dates, avatars, or fake attribution; the source label is simply `Google Review`.

### "Can you guarantee this increases orders?"

**Answer:** No honest vendor should guarantee that without traffic/order data. The claim is narrower: the prototype removes known friction in the pre-order path and makes the most valuable actions clearer on mobile.

## Proof/evidence to cite

- Current site audit: `audit.md`
- Google review packet: `scrapes/google-reviews-highest-30.json`
- Review summary: `scrapes/google-reviews-highest-30.md`
- Improvement pass: `improvements/improvement-pass-2026-05-08.md`
- Top-three improvements: `top-3-improvements-2026-05-08.md`
- Concierge KB/test: `concierge-kb-2026-05-08.md`, `concierge-test-transcript-2026-05-08.md`
- Concierge screenshots: `concierge/screenshots/fratos-concierge-desktop-2026-05-08.png`, `concierge/screenshots/fratos-concierge-mobile-2026-05-08.png`
- Desktop screenshot: `improvements/screenshots/fratos-improvement-home-desktop-2026-05-08.png`
- Mobile screenshot: `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png`
- Build/typecheck evidence: `evidence/build-improvement-2026-05-08-rerun.txt`, `evidence/typecheck-improvement-2026-05-08.txt`

## Known risks / caveats

- Recheck the Google rating/review count before a live owner demo if exact currentness matters.
- Lint is blocked by missing ESLint in the fork; build/typecheck pass.
- No public preview URL is packaged yet in this local evidence set.
- Do not overstate halal/allergen guarantees, delivery radius, live wait times, catering availability, or what the helper can do.
- The prototype is a conversion/pitch build, not an operations replacement for OrderStart or FratosCatering.com.

## Strongest owner framing

"Your site already has the ingredients. This version just makes the guest's path cleaner: see the signature item, trust the reviews, choose a lane, and click the official system you already use."
