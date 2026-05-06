# The Graceful Ordinary Pitch Doc

## 60-Second Read

The Graceful Ordinary already has the hard part: a real refined-rustic identity, strong press, a seasonal open-hearth menu, Resy demand, and guests who describe it as worth leaving downtown Chicago for. The web opportunity is not to replace the restaurant’s personality, it is to make the pre-dining path faster and more trustworthy: immediate Reserve/Menu/Call routes, press and Google proof above the fold, real menu/review language, and mobile clarity. The prototype preserves Resy and the current brand thesis, then packages the strongest proof into a sellable Roma-style editorial experience.

## Call Opener

“Your current site has the ingredients of a premium restaurant brand already, but the redesign makes the first 30 seconds feel as polished and confidence-building as the dinner itself.”

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Mobile booking path is too subtle in the first fold. | Hungry/mobile guests should not have to scroll through a long editorial page before they can reserve, call, or view the menu. | Premium restaurant sites keep the primary conversion path visible without cheapening the brand. | Hero and reservation sections use exact `Reserve on Resy`, menu, contact, and `tel:` paths; local routes `/`, `/menu`, `/about`, `/contact` return 200. |
| Strong proof is buried on the press page. | The restaurant has Kane County, Chicago Tribune, FSR, Eater, Forbes, and Daily Herald proof, but the old flow makes guests work to see it. | High-intent dining pages surface trust early in concise strips, then let deeper pages carry detail. | The redesign brings press signals into marquee/proof sections and pairs them with Google review themes. |
| Current/preview proof had unsupported or mismatched claims. | Fake/composite reviews, generic Resy URLs, and mismatched review counts create trust risk in a founder-facing demo. | Every public claim should trace to official site, Google packet, or source files. | Local v2 uses `4.6` / `593 reviews`, exact Resy URL, and short captured Google review fragments only. |
| Menu/story richness is present but under-packaged. | Guests remember Sea Bass, Venison, Maytag Bleu Cheese, cocktails, riverfront ambience, and special occasions; those should be easy to understand quickly. | Lead with the restaurant’s lovable specifics, not generic fine-dining language. | Roma editorial structure reframes the site around refined rustic, open hearth, Chris + Megan Curren, St. Charles/Fox River, cocktails, and seasonal menu specificity. |
| Saturday hours differ across official blocks. | Over-simplifying hours could create operational headaches or guest disappointment. | When source hours conflict, disclose carefully or hand off to the provider/restaurant. | The prototype uses cautious Saturday wording and routes guests to Resy/call for the current answer. |

## What We Fixed

- **Conversion repair:** Replaced generic reservation links with `https://resy.com/cities/stc/the-graceful-ordinary`, added phone handoffs, and verified core local routes.
- **Proof cleanup:** Removed unsupported AAA/TripAdvisor/composite language and replaced it with official press proof plus captured Google review themes.
- **Restaurant-specific identity:** Built around The Graceful Ordinary’s refined-rustic ordinary story, open-hearth cooking, Fox River/St. Charles setting, Chris and Megan Curren, and real menu/cocktail items.
- **AI concierge:** Added a brand-fit concierge that recommends real menu items, shows cards, captures reservation intent, surfaces Resy, and routes allergy/unknown/large-party questions to call.

## Demo Path

1. **Homepage hero:** Show the Roma-style first impression: “There is grace in the ordinary,” immediate Reserve/Menu CTAs, and the refined-rustic visual system.
2. **Proof and menu flow:** Scroll through press/review proof, then “From the Hearth” menu cards to show how real guest-loved dishes and cocktails become faster to understand.
3. **Concierge:** Open “Ask Graceful,” ask: “My wife and I are coming Saturday for her birthday. Can you suggest something and help us reserve?” Show the Maytag Bleu Cheese / Sea Bass / Venison cards, `2 guests · Sat May 9 · birthday dinner`, and `Reserve on Resy`.
4. **Provider handoff:** Click the Resy CTA or contact CTA to prove the redesign preserves the restaurant’s existing reservation workflow instead of replacing operations.

## Evidence To Cite

- Audit: `restaurant-website-system/sites/the-graceful-ordinary/audit.md`
- Current site screenshots/scrape: `screenshots/current-site-desktop-full.png`, `screenshots/current-site-mobile-full.png`, `scrapes/current-site-dom-snapshot.txt`
- Google packet: `reviews/google-reviews-highest.md` and `reviews/google-reviews-highest.json`
- Before/current preview: `screenshots/current-preview-desktop-full.png`, `screenshots/current-preview-mobile-fold.png`
- After/local v2: `screenshots/improvement-pass/local-improved-home-desktop-v2.png`, `screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`
- Concierge: `concierge-test-transcript.md`, `screenshots/concierge/concierge-test-transcript-desktop.png`

## Do Not Overclaim

- Do not say the public Vercel preview already includes the local v2 or concierge changes until it is redeployed and re-screenshotted.
- Do not claim AAA Three-Diamond, TripAdvisor quotes, or named reviewer endorsements unless separately verified.
- Do not resolve the Saturday brunch/lunch inconsistency without owner confirmation.
- Do not call the MC lead city “Elgin” in public copy; official source says St. Charles.
- Do not claim the concierge books reservations; it surfaces Resy and captures intent only.

## Close

“If this feels like your restaurant online, the next step is simple: we push the updated preview live, confirm hours/menu details with you, and can move it onto your domain in under 24 hours.”
