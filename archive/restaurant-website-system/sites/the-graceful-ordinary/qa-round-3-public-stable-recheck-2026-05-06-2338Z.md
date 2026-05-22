# The Graceful Ordinary — QA Round 3 Public Stable Recheck

- Date: 2026-05-06
- Gate: `qa_round_3`
- Public stable preview tested: `https://graceful-ordinary-redesign.vercel.app/`
- PR preview: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/` still returns 401 / Vercel Authentication Required
- Result: **blocked / needs implementation fix before founder-facing delivery**

## Evidence captured

- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-desktop-2026-05-06-qa3-recheck.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-mobile-2026-05-06-qa3-recheck.png`
- DOM text: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-stable-preview-dom-text-2026-05-06-recheck.txt`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scripts/capture-public-preview-cdp-2026-05-06.mjs`

## Final verdict

**Needs work.** The public stable preview is reachable and contains the right restaurant facts, but it is not founder-shareable because the page still visually reads as unfinished.

## What is world-class already

- The positioning is specific to The Graceful Ordinary: downtown St. Charles, Chris Curren, wood-burning hearth, refined rustic New American cooking, wine/cocktail program, and private-event conversion paths are present in the DOM.
- The basic public route is reachable without auth at the stable preview URL.
- The hero photography/direction has potential and is much closer to a premium restaurant identity than the old public preview state.

## What still blocks sellability

1. **Massive blank vertical sections.** The captured page has large empty bands after the hero/marquee, through the seasonal menu area, after the restaurant interior image, and before the footer. This looks like failed/missing content rather than intentional luxury spacing.
2. **Mobile layout still feels broken.** The mobile screenshot has cramped/overlapping hero copy, extremely small nav/CTA treatment, and long empty space that makes the first impression feel unfinished.
3. **Key conversion/proof sections appear incomplete.** “Seasonal signatures” and “Loved by the community” appear as headings/containers without enough visible card/review density in the screenshot. The page does not currently prove menu depth or guest demand visually.
4. **Footer mobile hierarchy is too small/dense.** Important contact/hours/navigation information is hard to read on phone.
5. **PR preview remains blocked by Vercel auth.** The merged PR preview URL still returns 401, so QA must rely on the public stable deployment until a clean public preview exists.

## Critical fixes before Ethan sees it

1. Tighten the vertical rhythm across all public sections; remove blank viewport-height bands and make content density intentional.
2. Ensure the seasonal/menu and testimonial sections visibly render real cards/quotes on both desktop and mobile.
3. Repair mobile hero readability and CTA/nav sizing so reserve/menu/contact are obvious within the first screen.
4. Rework the mobile footer/contact block for readable hierarchy.
5. Re-run QA round 3 with fresh desktop/mobile screenshots after the public deployment reflects the fix.

## Confidence to sell

Low right now. The factual direction is promising, but Ethan would have to explain away obvious unfinished spacing and mobile polish issues. This remains blocked until the implementation fixes land and a fresh public preview passes visual/mobile QA.
