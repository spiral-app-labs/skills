import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  locale: 'en-US'
});
const p = await ctx.newPage();
p.setDefaultTimeout(15000);

// Direct deep link: search and let Maps redirect to a /place/ URL
await p.goto('https://www.google.com/maps/place/Sammy%27s+Restaurant+%26+Bar/@42.1655,-88.4276,17z/', { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(3500);

// If not on a place page, fall back to search
if (!/\/place\//.test(p.url())) {
  await p.goto('https://www.google.com/maps/search/Sammy%27s+Restaurant+%26+Bar+11012+IL-47+Huntley+IL/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await p.waitForTimeout(4000);
  // Click first card if multi-result
  const card = p.locator('a.hfpxzc').first();
  if (await card.count()) { await card.click().catch(() => {}); await p.waitForTimeout(3500); }
}

fs.writeFileSync('place-url.txt', p.url());
await p.screenshot({ path: 'screenshots/g-step1-place.png', fullPage: false });

// Click the rating number / "Reviews" text. Most reliable: click on the rating that links to the reviews tab.
// The "X reviews" text inside the place panel is a button; use multiple fallbacks.
const candidates = [
  'button[aria-label*="reviews" i]',
  'button[jsaction*="pane.rating.moreReviews"]',
  'button:has-text("reviews")',
  'a[href*="/reviews"]',
];
let clicked = false;
for (const sel of candidates) {
  const el = p.locator(sel).first();
  if (await el.count()) {
    try { await el.click({ timeout: 4000 }); clicked = true; break; } catch {}
  }
}
if (!clicked) {
  // Click the "Reviews" tab in the tablist (might be hidden behind a chevron — try arrow scroll in tablist)
  const reviewsTab = p.getByRole('tab', { name: /reviews/i }).first();
  if (await reviewsTab.count()) {
    try { await reviewsTab.click({ timeout: 4000 }); clicked = true; } catch {}
  }
}
await p.waitForTimeout(3000);
await p.screenshot({ path: 'screenshots/g-step2-reviews-clicked.png', fullPage: false });

// Now look for Sort. The button text reads "Most relevant" by default.
const sortBtnCandidates = [
  'button[aria-label*="Sort"]',
  'button[data-value="Sort"]',
  'button:has-text("Most relevant")',
  'button:has-text("Sort")',
];
let sortClicked = false;
for (const sel of sortBtnCandidates) {
  const el = p.locator(sel).first();
  if (await el.count()) {
    try { await el.click({ timeout: 4000 }); sortClicked = true; break; } catch {}
  }
}
await p.waitForTimeout(1500);
await p.screenshot({ path: 'screenshots/g-step3-sort-menu.png', fullPage: false });

if (sortClicked) {
  // Click "Highest rating" menu item
  const highest = p.getByRole('menuitemradio', { name: /highest/i }).first();
  if (await highest.count()) {
    try { await highest.click({ timeout: 4000 }); } catch {}
  } else {
    const fallback = p.locator('div[role="menuitemradio"]:has-text("Highest")').first();
    if (await fallback.count()) await fallback.click().catch(() => {});
  }
  await p.waitForTimeout(3500);
}
await p.screenshot({ path: 'screenshots/g-step4-after-highest.png', fullPage: false });

// Scroll the feed and expand "More"
for (let i = 0; i < 18; i++) {
  await p.evaluate(() => {
    const candidates = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb');
    let scrolled = false;
    candidates.forEach(c => { c.scrollBy(0, 6000); scrolled = true; });
    if (!scrolled) window.scrollBy(0, 6000);
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More' || /^More$/.test(t)) try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1300);
}
await p.screenshot({ path: 'screenshots/g-step5-after-scroll.png', fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  const cards = document.querySelectorAll('div[data-review-id]');
  cards.forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const ratingEl = c.querySelector('span[aria-label*="star"]');
    const rating = ratingEl?.getAttribute('aria-label') || null;
    const date = c.querySelector('.rsqaWe')?.textContent?.trim() || null;
    const text = c.querySelector('.wiI7pd')?.textContent?.trim() || c.querySelector('.MyEned')?.textContent?.trim() || null;
    const reply = c.querySelector('.CDe7pd')?.textContent?.trim() || null;
    out.push({ id: c.getAttribute('data-review-id'), name, rating, date, text, reply });
  });
  return out;
});

fs.writeFileSync('google-reviews-raw.json', JSON.stringify(reviews, null, 2));
fs.writeFileSync('google-maps-reviews-final.html', await p.content());
console.log('cards', reviews.length, 'with-text', reviews.filter(r => r.text).length);
await browser.close();
