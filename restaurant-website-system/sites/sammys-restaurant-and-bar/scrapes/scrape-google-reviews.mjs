import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  locale: 'en-US'
});
const p = await ctx.newPage();

// Step 1: open Maps search for Sammy's
const searchUrl = 'https://www.google.com/maps/search/Sammy%27s+Restaurant+%26+Bar+11012+IL-47+Huntley+IL/';
await p.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(4000);

// Click "Reject all" / "Accept" cookie banner if present (EU; usually skipped in US but doesn't hurt)
try { await p.getByRole('button', { name: /reject all|accept all/i }).click({ timeout: 2000 }); } catch {}

await p.waitForTimeout(2000);
await p.screenshot({ path: 'screenshots/google-maps-search.png', fullPage: false });

// Step 2: try to land on the place page. If multiple results, click the first one.
try {
  const firstResult = p.locator('a.hfpxzc').first();
  if (await firstResult.count()) {
    await firstResult.click({ timeout: 5000 });
    await p.waitForTimeout(3500);
  }
} catch (e) { console.log('first-result click skipped', e.message); }

await p.screenshot({ path: 'screenshots/google-maps-place.png', fullPage: false });
fs.writeFileSync('google-maps-place-url.txt', p.url());

// Step 3: click the "Reviews" tab
try {
  const reviewsTab = p.getByRole('tab', { name: /reviews/i }).first();
  if (await reviewsTab.count()) {
    await reviewsTab.click({ timeout: 5000 });
  } else {
    const linkBtn = p.locator('button:has-text("Reviews")').first();
    if (await linkBtn.count()) await linkBtn.click({ timeout: 5000 });
  }
  await p.waitForTimeout(3500);
} catch (e) { console.log('reviews tab click failed', e.message); }
await p.screenshot({ path: 'screenshots/google-maps-reviews-tab.png', fullPage: false });

// Step 4: open the Sort menu and choose "Highest rating"
try {
  const sortBtn = p.locator('button[aria-label*="Sort"], button[data-value="Sort"], button:has-text("Most relevant")').first();
  await sortBtn.click({ timeout: 5000 });
  await p.waitForTimeout(1500);
  // The menu items are usually role=menuitemradio
  const highest = p.getByRole('menuitemradio', { name: /highest/i }).first();
  await highest.click({ timeout: 5000 });
  await p.waitForTimeout(3000);
} catch (e) { console.log('sort highest click failed', e.message); }
await p.screenshot({ path: 'screenshots/google-reviews-highest.png', fullPage: false });

// Step 5: scroll the reviews pane to load 30+ reviews; click any "More" buttons to expand long ones
const reviewsPane = p.locator('div[aria-label*="review" i][role="region"], div[aria-label*="Sammy" i] >> div[role="feed"]').first();
// fallback: the scrollable feed container has class jftiEf or div[role="feed"]
let pane = p.locator('div[role="feed"]').first();
if (!(await pane.count())) pane = p.locator('div.m6QErb.DxyBCb').first();

let lastHeight = 0;
for (let i = 0; i < 14; i++) {
  await p.evaluate(() => {
    const feed = document.querySelector('div[role="feed"]') || document.querySelector('div.m6QErb.DxyBCb');
    if (feed) feed.scrollBy(0, 4000);
    else window.scrollBy(0, 4000);
  });
  await p.waitForTimeout(1400);
  // expand "More" buttons
  try {
    await p.evaluate(() => {
      document.querySelectorAll('button').forEach(b => {
        if (/^More$/i.test(b.textContent || '')) b.click();
      });
    });
  } catch {}
  await p.waitForTimeout(400);
}
await p.screenshot({ path: 'screenshots/google-reviews-after-scroll.png', fullPage: false });

// Step 6: extract review nodes
const reviews = await p.evaluate(() => {
  const out = [];
  // Each review is typically inside a div[data-review-id] with the review prose at div[class*="MyEned"] or jJc9Ad
  const cards = document.querySelectorAll('div[data-review-id]');
  cards.forEach(c => {
    const name = c.querySelector('div.d4r55, .TSUbDb a, .d4r55')?.textContent?.trim() || null;
    const rating = c.querySelector('span[role="img"][aria-label*="star"]')?.getAttribute('aria-label') || null;
    const date = c.querySelector('span.rsqaWe, .DU9Pgb .rsqaWe')?.textContent?.trim() || null;
    const text = c.querySelector('span.wiI7pd, div.MyEned span')?.textContent?.trim() || null;
    const ownerReply = c.querySelector('div.CDe7pd, .nM6d2c')?.textContent?.trim() || null;
    out.push({ id: c.getAttribute('data-review-id'), name, rating, date, text, ownerReply });
  });
  return out;
});

fs.writeFileSync('google-reviews-raw.json', JSON.stringify(reviews, null, 2));
console.log('captured', reviews.length, 'review cards');

// Save DOM
fs.writeFileSync('google-maps-reviews.html', await p.content());

await browser.close();
