# Battle Cards — DiBenedetto Trattoria

Owner-objection responses + competitive positioning. Use during the call, the
DM thread, or the in-person meeting. Each card is one-objection / one-pitch
length so you can pull it cold.

---

## Card 1 — "We already have a website"

**The truth they hear:** *"You're going to charge me to redo something that works."*

**Counter (one breath):**
> *"Right — and we'd keep your SpotHopper reservation engine and email marketing exactly where they are. What we'd change is what happens in the first five seconds: today the mobile homepage opens with a Cinco de Mayo ad for El Taurino. We're proposing the homepage open on your name, your room, and a reserve button. The plumbing stays. The front door changes."*

**Backup screenshot:** `screenshots/current-site-mobile-fold.png` (the El Taurino modal).

---

## Card 2 — "We're loyal to SpotHopper"

**The truth they hear:** *"You want me to fire my current vendor."*

**Counter:**
> *"We're not asking you to. SpotHopper handles your reservations and your email — that part stays. What we're replacing is the front-end template, which is the part SpotHopper is least good at. They're a reservations company. We're a website company. Your stack stays mixed; the front-of-house gets a real upgrade."*

**Reinforcer:** mention the cross-promo network is a SpotHopper-template feature — they can keep paying SpotHopper for the engine and just opt out of the ad-network behavior on the front-end (which we control after the rebuild).

---

## Card 3 — "We don't have time for a project"

**The truth they hear:** *"This is going to drag."*

**Counter:**
> *"The site is already 90% built — what you'd see in the demo is the actual site running on a preview URL right now. If you approve, we point your domain at it and you're live in under a week. The only meaningful time on your end is a 30-minute photo session for the chef portrait, and that's optional for the v1."*

**Show:** the Vercel preview URL on the spot.

---

## Card 4 — "We don't measure that — how would I know if it works?"

**The truth they hear:** *"You can't prove the lift."*

**Counter:**
> *"Fair. Here's what we can promise: (1) your homepage will surface your reservation flow above the fold on every device — measurable in SpotHopper's own analytics. (2) The mobile heat-map will show guests interacting with your menu and reserve button instead of dismissing a popup. (3) You'll stop showing competitor promos on your own site. We can run the before/after on your own SpotHopper dashboard 30 days after launch and re-evaluate the contract then."*

---

## Card 5 — "How is this different from a Wix template?"

**The truth they hear:** *"Why aren't you cheaper?"*

**Counter:**
> *"Three things a template can't do: (1) we read 326 of your public reviews and built the homepage around the dishes guests already mention by name — Veal Napoleon, Orecchiette Turiddu, Chicken Francese. (2) We built an AI concierge grounded in your specific menu and hours, not a generic chatbot. (3) We added structured data so Google can render your menu in search results. A template gives you a layout. We give you Vittorio on the homepage."*

---

## Card 6 — "Who else have you done this for?"

**The truth they hear:** *"You don't have a portfolio."*

**Counter:**
> *"Same template family — heritage Italian — has been built for Cucina Bella in Algonquin and a handful of other independents in McHenry and Kane counties. Happy to share a live-running comparable. Your version uses the same proven base, with the live-music + chef-owner story tuned to DiBenedetto specifically."*

**Backup link:** `https://www.cucinabellaalgonquin.com` (or whichever fork the user wants to surface).

---

## Card 7 — "What about the cost of switching domains / DNS?"

**The truth they hear:** *"Migration is going to break my email or my booking link."*

**Counter:**
> *"We don't change your domain. dibenedettotrattoria.com keeps pointing where it points; we just change what it serves. Your reservation widget URL stays exactly the same. Your email host (whoever you use) is untouched. The only DNS change is the A record / CNAME for the website itself, which we can do during a slow afternoon and have rolled back in five minutes if anything looks wrong."*

---

## Card 8 — "What's your AI concierge going to say about my food?"

**The truth they hear:** *"This is going to make stuff up about my menu and embarrass me."*

**Counter:**
> *"It's grounded in your verified menu, your hours, your live-music schedule, and your phone number — that's it. It will not invent dishes, make up prices, or guarantee allergies. For anything time-sensitive it routes to (847) 496-5016. We can show you the system prompt — you can read every word it knows about your restaurant."*

**Backup file:** `app/api/concierge/route.ts` — show the SYSTEM_PROMPT constant.

---

## Card 9 — "Won't the chef-as-brand thing make Vittorio feel exposed?"

**The truth they hear:** *"I'm not the kind of owner who wants to be on the homepage."*

**Counter:**
> *"That's a fair concern and it's a one-line change — we can swap "Chef Vittorio" for "Chef-Owner" everywhere in two minutes. The Mille Grazie quote stays signed by the restaurant rather than the person. The point is the kitchen has a face, not which face. You decide how visible you are."*

---

## Card 10 — "What does this cost?"

**The truth they hear:** *"What's my next move."*

**Counter:**
> *"Build is a one-time fee in the [$X,XXX] range, hosting + concierge runs ~$XX/month, and the optional care plan is ~$XX/month. We bill once on approval and once per month after. If you want to walk after 90 days for any reason, you take the design files and you walk — no clawback, no contract lock-in."*

---

## Competitive positioning matrix

| Competitor | Their pitch | Our counter |
|---|---|---|
| **SpotHopper template upgrade** | "We'll redesign your existing site for $X." | They built the cross-promo modal in the first place. Their incentive is to sell more network ads, not to remove them. |
| **Wix / Squarespace template + DIY** | "$20/mo, you build it." | DIY templates can't read 326 reviews and build a homepage around them. Vittorio's time is worth more than that. |
| **Local agency rebuild** | "Custom design from scratch." | Same outcome, 4× the cost, 6× the timeline. We start from a proven heritage-Italian template that already has the components built. |
| **Toast Sites / OpenTable Sites** | "Bundled with your reservation system." | Bundled means generic. Their templates can't surface live music nights or chef-as-brand. |

---

## Last-resort opener if everything stalls

> *"Vittorio — even if you don't hire us, please know your mobile homepage is currently advertising El Taurino's Cinco de Mayo party. SpotHopper's template is doing it without telling you. It's a five-minute call to their support line to opt out of the ad network. That part is free. The rest of the rebuild is the conversation we wanted to have."*

If they say yes to that one favor, you've earned the meeting.
