# The Secret Kitchen USA — media rights and shot list

- Date: 2026-05-07
- Status: **internal media-readiness plan / not owner-facing yet**
- Canonical archetype: **Bamzi**
- Buildable source template: `bamzi-01`
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- Purpose: reduce the photo-rights/media blocker before a future cinematic Bamzi preview build

## Why this matters

A Bamzi-style Secret Kitchen preview will only work if the visuals feel dramatic, modern Indian, and restaurant-specific. Generic curry/spice stock imagery would flatten the U.S.-debut story and make Chef Aanal Kotak’s concept feel less premium.

This artifact gives the future builder/founder a clear media request and replacement matrix so a preview does not accidentally ship stock photos, scraped images, Google photos, press photos, social images, Chef Aanal images, or guest photos as if they are owner-approved.

No raw Supabase writes were performed.

## Hard media rule

Do not publish any image as final unless one of these is true:

1. The owner provides it directly and grants permission for website/preview use.
2. The owner confirms an existing official-site/social/press image may be reused.
3. Ethan/founder explicitly approves an internal speculative placeholder and the preview clearly remains internal/not owner-facing.

If none of those are true, use a clearly labeled placeholder only in internal work.

## Priority shot list

### Tier 1 — required for a sellable preview

| Priority | Shot | Why it matters | Suggested use |
| --- | --- | --- | --- |
| 1 | Dramatic dining room / interior hero | Establishes jewel-tone, modern Indian destination energy immediately | Homepage hero / `DarkLeafHero` |
| 2 | Chef Aanal Kotak portrait or kitchen/story image | Chef/founder credibility is central to the pitch | `MissionSplit`, `/about` hero, chef story |
| 3 | Signature appetizer / street-food plate | Makes menu discovery visual and specific | `CategoryStrip`, first `MenuListDotLeader` |
| 4 | Tandoor / first plate / royal main dish | Supports premium dinner and menu depth | Featured menu journey |
| 5 | Dessert theatre or flambé dessert | Reinforces drama, celebration, and memorable experience | `TimelessFooterSection`, menu card |
| 6 | Exterior/signage/entrance | Confirms place identity and reduces visit friction | Contact/visit section |

### Tier 2 — strong sellability lift

| Shot | Why it helps | Suggested use |
| --- | --- | --- |
| Mocktail/bar/drink presentation | Reviews and concept cues mention elevated drinks | Experience card / footer / menu section |
| Tableside moment or plating detail | Supports theatrical “dinner as occasion” story | Story/proof section |
| Vegetarian/vegan-friendly dish | Helps show menu breadth if owner approves positioning | Menu category card |
| Group table / celebration setup | Supports celebrations/private dining without inventing capacities | Occasion section |
| Detail shot of interior textures/photo moments | Strengthens Bamzi cinematic pacing | Section transition imagery |
| Spice/prep/detail image | Supports handmade-spice story if owner-approved | Chef/story section |

### Tier 3 — only if owner-approved

| Shot | Caution | Suggested use |
| --- | --- | --- |
| Chef Aanal press/award image | Requires permission and exact claim approval | About page only, not proof of unsupported awards |
| Award/publication/logo images | Requires exact permission and wording | Awards section only if approved |
| Guest/event photos | Need privacy/permission clearance | Occasion/private dining examples only |
| Social-media dining-room/photo-moment images | Need reuse approval and quality check | Visual identity / experience section |
| Team photos | Need staff consent and currentness | About/team support only |

## Component replacement matrix

| `bamzi-01` component/content slot | Secret Kitchen media need | Placeholder allowed? | Public use allowed before owner permission? |
| --- | --- | --- | --- |
| `content.hero.plateImage` / `<DarkLeafHero />` | Dramatic dish, dining-room, or dessert hero | Internal only | No |
| `content.mission.image` / `<MissionSplit />` | Chef Aanal portrait, kitchen/prep, or dining-room story image | Internal only; no identifiable person placeholder as real chef | No |
| `content.categoryStrip.categories[*].image` | Street food, tandoor, royal mains, dessert theatre | Internal only | No |
| `content.featured[0].image` | Appetizer/tandoor/menu journey image | Internal only | No |
| `content.featured[1].image` | Royal main/dessert/menu journey image | Internal only | No |
| `content.testimonial.chefImage` | Chef Aanal or owner-approved proof/story image | No if identifiable person unapproved | No |
| `content.blog.posts[*].image` if repurposed | Experience highlights: U.S. debut, spices, desserts, dining room | Internal only | No |
| `content.timelessFooter.image` | Dining-room/photo-moment/dessert closing image | Internal only | No |
| `/menu` page images | Food/menu chapter images | Internal only | No |
| `/about` chef/team slots | Chef Aanal/team-approved images | No if person identifiable | No |
| `/contact` page image/map context | Exterior/signage/interior | Internal only | No |

## Owner media request draft

Use only after Ethan/founder approves outreach.

> Could you share any approved photos or videos we may use in a website preview? The most helpful set would be: dining room/interior hero, Chef Aanal portrait or kitchen/story image, signature appetizers or street-food plates, tandoor/first plates, royal mains, desserts or flambé/tableside moments, mocktails/drinks, exterior/signage, and any team or press images you want represented. Please also let us know whether current website photos, Instagram/Facebook photos, press/award images, Google photos, guest/event photos, or Chef Aanal images are approved for reuse, and whether any images or claims should be avoided.

## Image quality checklist

Before using any image, check:

- Rights/permission are documented.
- Image is high enough resolution for desktop hero/card use.
- Color/crop support Bamzi cinematic jewel-tone pacing.
- No visible private guest faces unless permission-safe.
- No outdated menu item, room setup, signage, hours, or branding.
- No fake implication that stock/scraped images belong to The Secret Kitchen USA.
- No generic curry/spice/naan cliché that weakens the premium identity.
- No unapproved award/press/chef imagery.
- Mobile crop preserves the important subject.

## If approved images are unavailable

A future internal preview may use temporary placeholders only if:

- Ethan/founder explicitly authorizes speculative internal preview work.
- The preview is not sent to the owner.
- Placeholder files/metadata are clearly labeled replaceable.
- Pitch/battle cards state that final media requires owner-approved assets.
- No stock image is described as The Secret Kitchen’s food, room, team, chef, guest, or event.

## Builder implementation notes

- Prefer self-hosted approved images under the future preview project’s `public/` directory.
- Use descriptive filenames such as `secret-kitchen-dining-room-hero.jpg`, `secret-kitchen-chef-aanal.jpg`, `secret-kitchen-dessert-theatre.jpg`.
- Add alt text that is factual and modest, e.g. “The Secret Kitchen USA dining room” only if the image truly shows it.
- Do not copy Google user-uploaded photos into the repo.
- Do not hotlink social-media or press images without permission.
- Keep image decisions traceable in the future QA/link/claim evidence.

## Open confirmation questions

1. Which image sources are approved for website-preview use?
2. Are current official-site photos reusable?
3. Are Instagram/Facebook photos reusable?
4. Are press/award/Chef Aanal images reusable?
5. Are Google/business-profile photos reusable?
6. Are guest/event photos reusable?
7. Are there images that should not be used because they are outdated, unrepresentative, or rights-limited?
8. Should final preview imagery emphasize Chef Aanal, U.S. debut story, dining-room drama, menu theatre, desserts/mocktails, private dining, or all of the above?

## Verdict

The media blocker is now operationalized: the future builder has a component-by-component image request and rights checklist for a Bamzi preview. The blocker is not cleared until owner/founder-approved assets or explicit internal-placeholder authorization exists.
