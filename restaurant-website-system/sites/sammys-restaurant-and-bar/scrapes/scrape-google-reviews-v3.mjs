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

// Use search URL — this lands on Sammy's panel directly (verified in v1)
await p.goto('https://www.google.com/maps/search/Sammy%27s+Restaurant+%26+Bar+11012+IL-47+Huntley+IL+60142/', { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(5000);
fs.writeFileSync('place-url.txt', p.url());
await p.screenshot({ path: 'screenshots/g-v3-step1-place.png', fullPage: false });

// The side panel shows "Overview / Reviews / About" tablist in modern Maps UX.
// Strategy: directly click any element with text "Reviews" in the tablist OR the rating button that opens reviews.

const click = async (sel, label) => {
  try {
    const el = p.locator(sel).first();
    if (await el.count()) {
      await el.click({ timeout: 5000 });
      await p.waitForTimeout(2500);
      console.log('clicked:', label, sel);
      return true;
    }
  } catch (e) { console.log('click fail', label, e.message); }
  return false;
};

// Try the dedicated "Reviews" tab in the place panel tablist
let opened = false;
opened = opened || await click('button[role="tab"]:has-text("Reviews")', 'tab-reviews');
opened = opened || await click('button:has-text("213 reviews")', 'count-button');
opened = opened || await click('button[jsaction*="reviewChart"]', 'review-chart-btn');
opened = opened || await click('button[aria-label*="Reviews"]', 'aria-reviews');
// Last resort: click the rating row
opened = opened || await click('div.fontDisplayLarge', 'rating-large');

await p.waitForTimeout(3500);
await p.screenshot({ path: 'screenshots/g-v3-step2-reviews.png', fullPage: false });

// Sort menu — text reads "Most relevant"
let sortClicked = false;
sortClicked = sortClicked || await click('button:has-text("Most relevant")', 'most-relevant');
sortClicked = sortClicked || await click('button[aria-label*="Sort"]', 'aria-sort');
sortClicked = sortClicked || await click('button[data-value="Sort"]', 'data-sort');

await p.waitForTimeout(1500);
await p.screenshot({ path: 'screenshots/g-v3-step3-sortmenu.png', fullPage: false });

if (sortClicked) {
  let highestClicked = false;
  highestClicked = highestClicked || await click('div[role="menuitemradio"]:has-text("Highest rating")', 'highest-radio');
  highestClicked = highestClicked || await click('div[role="menuitem"]:has-text("Highest")', 'highest-item');
  highestClicked = highestClicked || await click('li:has-text("Highest rating")', 'highest-li');
  console.log('highestClicked', highestClicked);
}

await p.waitForTimeout(4500);
await p.screenshot({ path: 'screenshots/g-v3-step4-after-highest.png', fullPage: false });

// Scroll loop
for (let i = 0; i < 22; i++) {
  await p.evaluate(() => {
    const feeds = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb, div.m6QErb.WNBkOb');
    feeds.forEach(c => c.scrollBy(0, 6000));
    if (!feeds.length) window.scrollBy(0, 6000);
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1300);
}
await p.screenshot({ path: 'screenshots/g-v3-step5-scrolled.png', fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  const cards = document.querySelectorAll('div[data-review-id]');
  cards.forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const rating = c.querySelector('span[aria-label*="star"]')?.getAttribute('aria-label') || null;
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
