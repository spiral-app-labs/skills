# Chicago Prime Steakhouse — media rights and shot list

- Date: 2026-05-07
- Status: **internal media-readiness plan / not owner-facing yet**
- Canonical archetype: **Heaven Palate**
- Buildable source template: `1776-redesign-01`
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- Purpose: reduce the photo-rights/media blocker before a future preview build

## Why this matters

A Heaven Palate-style Chicago Prime preview will only sell if the imagery feels real, premium, and restaurant-specific. The current local workflow has enough evidence to plan the site, but it does **not** have confirmed rights for final public imagery.

This artifact gives the future builder/founder a clear media request and replacement matrix so a preview does not accidentally ship stock photos, scraped images, Google photos, or unapproved legacy/team images as if they belong to Chicago Prime.

No raw Supabase writes were performed.

## Hard media rule

Do not publish any image as final unless one of these is true:

1. The owner provides it directly and grants permission for website/preview use.
2. The owner confirms an existing official-site/social image may be reused.
3. Ethan/founder explicitly approves an internal speculative placeholder and the preview clearly remains internal/not owner-facing.

If none of those are true, use a clearly labeled placeholder only in internal work.

## Priority shot list

### Tier 1 — required for a sellable preview

| Priority | Shot | Why it matters | Suggested use |
| --- | --- | --- | --- |
| 1 | Dining room hero or steak/wine hero | Establishes premium steakhouse atmosphere immediately | Homepage hero / `FullBleedHero` |
| 2 | Signature steak or chops plate | Makes steakhouse craft feel specific and appetizing | Featured card: Steaks & Chops |
| 3 | Seafood/classic entree plate | Supports menu breadth beyond steak | Featured card: Seafood & Classics |
| 4 | Private dining room or event setup | Private Dining is a major conversion path | Private dining section/card |
| 5 | Bar/lounge or wine/cocktail shot | Supports wine/cocktails/live lounge without over-indexing nightlife | Story split / footer / lounge card |
| 6 | Exterior/signage/entrance | Confirms place identity and reduces trust friction | Contact/visit section |

### Tier 2 — strong sellability lift

| Shot | Why it helps | Suggested use |
| --- | --- | --- |
| Covered patio | Supports patio/cigar-friendly/outdoor claim if current | Secondary atmosphere card |
| Live music/lounge performance | Supports live entertainment after schedule confirmation | Lounge support section |
| Team/service moment | Makes hospitality story believable | More-than-a-meal/story section |
| Wine cellar/bottle/service detail | Makes wine/cocktails feel premium | Quote overlay / dining atmosphere |
| Dessert or celebratory table | Supports birthdays, anniversaries, milestone dinners | Celebration/private-event proof |

### Tier 3 — only if owner-approved

| Shot | Caution | Suggested use |
| --- | --- | --- |
| George A. Kalkounos legacy/family photo | Must be approved and treated respectfully | About/legacy section, not hero |
| Scholarship/legacy event image | Avoid exploitative grief or fundraising pressure | About page only |
| Guest/event photos | Need privacy/permission clearance | Private dining examples only |
| Social-media food photos | Need reuse approval and quality check | Menu/category cards only |

## Component replacement matrix

| `1776-redesign-01` component/content slot | Chicago Prime media need | Placeholder allowed? | Public use allowed before owner permission? |
| --- | --- | --- | --- |
| `content.hero.image` / `<FullBleedHero />` | Best dining room, steak/wine, or exterior hero | Internal only | No |
| `signatureSelections.items[0].image` | Steak/chop image | Internal only | No |
| `signatureSelections.items[1].image` | Seafood/classic entree image | Internal only | No |
| `signatureSelections.items[2].image` | Private room/event setup | Internal only | No |
| `moreThanAMeal.images[0]` | Dining room/bar/lounge atmosphere | Internal only | No |
| `moreThanAMeal.images[1]` | Private room, patio, or team/service moment | Internal only | No |
| `quoteOverlay.image` | Legacy/service/wine/private-dining mood image | Internal only | No |
| `/menu` page hero | Food/menu spread | Internal only | No |
| `/about` page hero | Exterior, dining room, or legacy-approved image | Internal only | No |
| Chef/team portrait slots | Owner/team-approved photo only | No if person identifiable | No |
| `/contact` page image/map context | Exterior/signage/interior | Internal only | No |

## Owner media request draft

Use only after Ethan/founder approves outreach.

> Could you share any approved photos or videos we may use in a website preview? The most helpful set would be: dining room or hero atmosphere, steak/chops, seafood or classic entree, private dining room/event setup, bar/lounge or wine/cocktail shot, exterior/signage, patio, and any legacy/team images you want represented. Please also let us know if current website photos, social-media photos, Google photos, event photos, or family/legacy photos are approved for reuse, and whether any guest/team images should be avoided.

## Image quality checklist

Before using any image, check:

- Rights/permission are documented.
- Image is high enough resolution for desktop hero/card use.
- Color and crop support dark classic steakhouse luxury.
- No visible private guest faces unless permission-safe.
- No outdated menu item, room setup, signage, hours, or branding.
- No fake implication that stock/scraped images belong to Chicago Prime.
- No mismatched cuisine/restaurant interior.
- Mobile crop still preserves the important subject.

## If approved images are unavailable

A future internal preview may use temporary placeholders only if:

- Ethan/founder explicitly authorizes speculative internal preview work.
- The preview is not sent to the owner.
- Placeholder files/metadata are clearly labeled replaceable.
- Pitch/battle cards state that final media requires owner-approved assets.
- No stock image is described as Chicago Prime’s food, room, team, or event.

## Builder implementation notes

- Prefer self-hosted approved images under the future preview project’s `public/` directory.
- Use descriptive filenames such as `chicago-prime-dining-room-hero.jpg`, `chicago-prime-steak-wine.jpg`, `chicago-prime-private-dining-room.jpg`.
- Add alt text that is factual and modest, e.g. “Chicago Prime Steakhouse dining room” only if the image truly shows it.
- Do not copy Google user-uploaded photos into the repo.
- Do not hotlink social-media images without permission.
- Keep image decisions traceable in the future QA/link/claim evidence.

## Open confirmation questions

1. Which image sources are approved for website-preview use?
2. Are current official-site photos reusable?
3. Are Facebook/Instagram photos reusable?
4. Are Google/business-profile photos reusable?
5. Are event/private-dining guest photos reusable?
6. Are legacy/family images approved, and if so, how should they be framed?
7. Are there any food, room, staff, guest, or branding photos that should not be used?
8. Should final preview imagery emphasize dinner reservations, private dining, lounge/music, legacy, or all of the above?

## Verdict

The media blocker is now operationalized: the future builder has a component-by-component image request and rights checklist. The blocker is not cleared until owner/founder-approved assets or explicit internal-placeholder authorization exists.
