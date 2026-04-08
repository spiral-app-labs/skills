---
name: agency-overnight
description: Overnight restaurant website build workflow for the website redesign agency. Load during 3-5am CT heartbeats only. Checks agency_leads for assigned builds, fetches context from Notion, builds the site, deploys to Vercel, generates pitch, drafts email, and stores pitch + email in MC agency_leads.
---

# Agency Overnight Build Skill

## When to Load
This skill is loaded during heartbeats between 3:00 AM and 5:00 AM Central Time ONLY.
During non-agency hours, do NOT load this skill to save context tokens.

## Priority Logic — HARD RULE
**Deprioritize no-website restaurants. Focus on restaurants that HAVE a website but it's BAD.**
The pitch is "here's what your site looks like vs what it could look like" — a visual before/after.
Sort by `website_score ASC` (worst sites first) among leads that have a `website_url`.

## Step 1: Check Tonight's Build Queue

Query agency_leads for restaurants assigned to build tonight:

```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/agency_leads?status=eq.in_progress&assigned_build_date=eq.$(date +%Y-%m-%d)&select=*" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```

If no restaurants are assigned for tonight, pick the top 2 unbuilt leads that **have a website_url** sorted by worst website_score:

```bash
curl -s "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/agency_leads?status=eq.lead&website_url=neq.&website_url=not.is.null&order=scores->>website_score.asc&limit=2&select=*" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}"
```

If no leads with websites remain, THEN fall back to no-website leads sorted by overall_score DESC.

Then update their status to `in_progress` and `assigned_build_date` to today.

## Step 2: Research the Restaurant (Roasted-Style)

For each restaurant in the queue, do thorough research before building:

### 2A: Scrape Their Current Website
- `web_fetch` their `website_url` to understand current design, content, and issues
- Take a `browser screenshot` of their homepage if web_fetch fails (many have Wix/Squarespace sites that block scrapers)
- Note specific problems: broken pages, missing menu, no mobile responsiveness, bad design, missing info

### 2B: Scrape Reviews & Social Proof
- Search Yelp for the restaurant: `web_search "[name] [city] IL yelp"` and fetch the Yelp page
- Pull 3-5 standout review quotes that are specific and glowing
- Search Google for additional reviews
- Check their Facebook/Instagram for follower count and vibe

### 2C: Scrape Menu & Details
- Get their menu from Yelp, DoorDash, UberEats, or their current site
- Get hours, phone, address, cuisine type
- Find any photos from Google/Yelp

### 2D: Competitive Context
- Note 1-2 nearby competitors with better websites for the pitch ("your competitor down the street has a modern site with online ordering")

## Step 3: Build the Website

For each restaurant, spawn a coding sub-agent (Claude Code / sonnet) with a brief that includes ALL the research from Step 2:

**Sub-agent brief must include:**
- Restaurant name, city, address, phone, hours
- Current website URL and specific issues found (be detailed — what's broken, what's ugly, what's missing)
- Menu items (ALL real ones from research, not placeholders — complete menu port)
- 5+ real review quotes from Yelp/Google/TripAdvisor with attribution
- Cuisine type, vibe description, brand personality notes
- Social media links (Instagram, Facebook, TikTok — embed if available)
- Google rating + review count
- Online ordering links (DoorDash, UberEats, Toast, etc.)

**Build spec — QUALITY BAR (Ethan-approved 2026-04-01):**

**⭐ GOLD STANDARD REFERENCE: Lounge 51 (https://lounge-51.vercel.app)**
Ethan called this "INSANELY GOOD" — every single website must match or exceed this quality level. Key traits of the gold standard:
- 11 distinct sections (hero → quick CTA → vibe gallery → stats → featured dishes → story → reviews → social feed → location/hours → order online → footer)
- Parallax scrolling on hero AND interior sections
- 3D tilt hover effects on dish cards
- Glassmorphism overlays
- Scroll-triggered stagger animations on every multi-item section
- Real DoorDash/UberEats deeplinks (not generic landing pages)
- Location/hours section with map
- Social feed grid linking to real Instagram/Facebook
- Each section feels hand-crafted for the specific restaurant's personality
- The test: "would a restaurant owner look at this and say 'holy shit, I need this'?"

- Create a new Next.js 14 project with Tailwind in a GitHub repo (`spiral-app-labs/{restaurant-slug}`)
- Build a FULL multi-page website (minimum: Home, Menu, About, Contact):
  - **Multi-page navigation** — sticky header with smooth nav, mobile hamburger menu
  - **Hero section** — parallax or video background, strong tagline, CTA button. Text must be readable over imagery (contrast check required).
  - **Menu section with FOOD IMAGES** — this is the #1 conversion driver. Use high-quality stock food photos matching each cuisine type. Categorize properly. Port ALL menu items, no omissions.
  - **Reviews section — visually elevated** — not just text quotes. Use cards with star ratings, reviewer photos/avatars, Google/Yelp badges. Make it feel like social proof, not a text wall.
  - **Google reviews rating badge** — embed or recreate their actual rating + count
  - **Social media integration** — link to and embed content from their Instagram/Facebook/TikTok when available
  - **Hours and location** with embedded Google Maps iframe
  - **Online ordering CTA** (link to DoorDash/UberEats if they're on it)
  - **Footer** with social links, hours, address, phone
  - **NO contact forms** — these require a backend. Use a "Call us" or "Email us" CTA instead.
- **Animations — WOW FACTOR required:**
  - Parallax scrolling on hero and section backgrounds
  - Staggered reveal animations on menu items, reviews, team sections
  - Micro-interactions on hover (buttons, cards, menu items)
  - Smooth page transitions
  - Counter animations for stats (reviews, years in business)
  - The standard is "how did they do that?" — not generic fade-in
- **Design system** — intentional visual language per restaurant:
  - Color palette that matches their brand/cuisine (not generic dark+gold for everyone)
  - Typography hierarchy — readable, elegant, consistent
  - Text/image contrast audit on every section (ensure readability)
- **Mobile-first** — test and ensure mobile looks great, not just "responsive"
- **SEO** — structured data (JSON-LD restaurant schema), meta descriptions, OG tags, sitemap.xml, robots.txt, semantic HTML
- **OG Images — MANDATORY STANDARD (Ethan-enforced 2026-04-01):**
  - Every site MUST have a dynamically generated OG image (1200x630) — NOT just a static food photo
  - OG image MUST include ALL of these elements as text overlays on a themed background:
    1. Restaurant name (large, prominent)
    2. Full address (street + city + state)
    3. Star rating with stars visual (e.g., ★★★★☆ 4.2)
    4. Number of reviews (e.g., "175+ Google Reviews")
  - Background: food hero shot or atmospheric image with dark gradient overlay for text readability
  - Design must match the restaurant's color scheme/vibe — not generic
  - Implementation: use Next.js OG image generation (`next/og` ImageResponse) OR a pre-built static image with the info baked in
  - Set in layout.tsx metadata: openGraph.images + twitter.images
  - **Enforcement:** sub-agent briefs must explicitly list the 4 required OG elements. If any OG image is just a plain photo without text overlays, it fails QA.
- **AnimatedCounter initial state — STANDARD FIX:**
  - All counter/stat components must initialize with `useState(end)` not `useState(0)`
  - Reset to 0 and animate up only when scrolled into view
  - This prevents stats showing "0" on initial page load and in OG/screenshot captures
- **Conversion tactics** — reservation/ordering CTAs visible above fold and repeated, sticky CTA on scroll, menu highlights with prices
- Deploy to Vercel: `vercel --yes --prod` with project name like `{restaurant-slug}-redesign`
- Git identity: Ethan Talreja / 64980375+EthanTalreja@users.noreply.github.com
- Push to GitHub: `spiral-app-labs/{restaurant-slug}`

## Step 4: Generate Pitch Email & Store in MC

After the site is deployed:

### 4A: Draft the Pitch Email
Write a personalized cold email following this structure:
- **Subject:** Quick question about [Restaurant Name]'s website
- **Opening:** Specific compliment about their food/reviews (use real review quote)
- **Problem:** "I noticed your website [specific issue — broken page, dated design, no menu, etc.]"
- **Solution:** "I actually mocked up what a modern version could look like: [Vercel URL]"
- **Social proof:** "I build websites for local restaurants in the [city] area"
- **CTA:** "Worth a 5-minute look? I can have the real version live this week for $400"
- **Sign-off:** Ethan Talreja

### 4B: Store Pitch Email + Pitch Doc in agency_leads
Update the lead with the pitch email and pitch summary so MC can render them:

```bash
curl -s -X PATCH "https://eayiazyiotnkggnsvhto.supabase.co/rest/v1/agency_leads?id=eq.<LEAD_ID>" \
  -H "apikey: ${SUPABASE_SERVICE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "delivered",
    "vercel_preview_url": "<DEPLOYED_URL>",
    "expected_delivery_date": "<TODAY>",
    "metadata": {
      "pitch_email_subject": "<SUBJECT>",
      "pitch_email_body": "<FULL EMAIL BODY>",
      "pitch_summary": "<2-3 sentence pitch summary: what is wrong with current site, what we built, key selling points>",
      "current_site_issues": ["issue1", "issue2", "issue3"],
      "review_quotes": ["quote1", "quote2", "quote3"],
      "competitor_sites": ["competitor1.com"],
      "menu_items_count": <NUMBER>,
      "research_completed_at": "<ISO_TIMESTAMP>"
    }
  }'
```

### 4C: Create Notion Documentation (REQUIRED per Ethan 2026-04-01)
Create Notion subpages for each restaurant under the agency workspace:
- **What was wrong** — specific issues with their original website (screenshots, broken pages, missing features, bad UX)
- **What we changed** — detailed list of improvements made
- **Why it's better** — conversion improvements, UX improvements, brand alignment, SEO gains
- **Before/after evidence** — screenshots or descriptions comparing old vs new

## Step 5: Notify

Post a summary to Slack DM (D0AFLEXFL0P):
- Which restaurants were built
- Vercel preview URLs
- Before/after comparison (current site issues vs what we built)
- Draft email preview (first 2 lines)
- What's ready for Ethan to send in the morning

## Budget & Targets
- **2-3 restaurants per overnight session** (expandable when Ethan requests more)
- Each build: ~45-60 minutes including research (quality > speed)
- Quality bar: the site must make the owner think "I need to pay for this." It's a $400 deliverable.
- If a build fails or deploys broken, skip it and move to the next restaurant
- Research quality bar: real menu items (ALL of them), real reviews with attribution, real hours, social media links. No placeholder content.
- Every site gets a GitHub repo under `spiral-app-labs/`

## Current Top Targets (sorted by worst website, has website_url)
1. The Grumpy Goat (Elgin) — site returns 403. ⭐4.5, 300 reviews. ws=15
2. Lounge 51 (Elgin) — site fails to load. ⭐4.2, 175 reviews. ws=15
3. Garden on Main (Algonquin) — site returns no content. ⭐4.5, 180 reviews. ws=20
4. Dukes Alehouse (Crystal Lake) — only gift card subdomain. ⭐4.3, 230 reviews. ws=25
5. River Street Tavern (Elgin) — site only shows hours. ⭐4.3, 240 reviews. ws=30
6. Elgin Public House (Elgin) — basic template site. ⭐4.3, 260 reviews. ws=35

## Key IDs
- Notion Clients DB: `335b5bb4-cb12-815b-8cd4-f434cc0377f9`
- Notion Pitch Template: `335b5bb4-cb12-81a4-aee7-fae784bd23a0`
- Notion Email Templates: `335b5bb4-cb12-81fb-8b52-d12cd7c0231a`
- Notion Process Playbook: `335b5bb4-cb12-817c-b164-d19a55f3444c`
- Supabase API key: `${SUPABASE_SERVICE_KEY}`
- Supabase URL: `https://eayiazyiotnkggnsvhto.supabase.co`
