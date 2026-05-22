import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1200 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  locale: 'en-US',
});
const page = await ctx.newPage();

await page.goto('https://www.google.com/maps/search/Winestock+Market+%26+Lounge+Woodstock+IL', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(5000);
const placeLinks = await page.$$('a[href*="/maps/place/"]');
if (placeLinks.length) await placeLinks[0].click().catch(() => {});
await page.waitForTimeout(5000);

const placeUrl = page.url();
console.log('place url:', placeUrl);

// Scroll the side pane (left scrollable pane) heavily to load review section
for (let i = 0; i < 25; i++) {
  await page.evaluate(() => {
    const panes = Array.from(document.querySelectorAll('div.m6QErb, div[role="main"]'));
    for (const p of panes) {
      if (p.scrollHeight > p.clientHeight + 80) {
        p.scrollBy(0, p.clientHeight * 0.9);
      }
    }
  });
  await page.waitForTimeout(800);
}
await page.screenshot({ path: '../screenshots/g3-after-deep-scroll.png', fullPage: true });

// Click "More reviews" / "All reviews" / "view all"
const more = await page.evaluate(() => {
  const els = Array.from(document.querySelectorAll('button, a'));
  for (const e of els) {
    const t = (e.textContent || '').trim();
    if (/^More reviews$/i.test(t) || /All reviews/i.test(t) || /^See all reviews/i.test(t) || /Sort reviews/i.test(t)) {
      e.click();
      return t;
    }
  }
  return null;
});
console.log('clicked more-reviews:', more);
await page.waitForTimeout(3500);
await page.screenshot({ path: '../screenshots/g3-after-more.png', fullPage: false });

// Now try Sort -> Highest
await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button'));
  const sort = btns.find(b => /Sort/i.test(b.getAttribute('aria-label') || '') || /Sort$/i.test((b.textContent || '').trim()));
  if (sort) sort.click();
});
await page.waitForTimeout(1500);
const ranked = await page.evaluate(() => {
  const items = Array.from(document.querySelectorAll('div[role="menuitemradio"], li[role="menuitemradio"], div[role="menuitem"]'));
  const h = items.find(i => /Highest/i.test(i.textContent || ''));
  if (h) { h.click(); return 'clicked highest'; }
  return 'no highest';
});
console.log('rank choice:', ranked);
await page.waitForTimeout(3500);

// Scroll review pane to load all
for (let i = 0; i < 30; i++) {
  await page.evaluate(() => {
    const panes = Array.from(document.querySelectorAll('div.m6QErb, div[role="main"]'));
    for (const p of panes) {
      if (p.scrollHeight > p.clientHeight + 80) p.scrollBy(0, p.clientHeight);
    }
  });
  await page.waitForTimeout(700);
}
await page.screenshot({ path: '../screenshots/g3-final-scroll.png', fullPage: true });

// Click all "More" buttons inside review cards to expand truncated text
await page.evaluate(() => {
  document.querySelectorAll('button').forEach(b => {
    if ((b.textContent || '').trim() === 'More' || (b.getAttribute('aria-label') || '').includes('See more')) b.click();
  });
});
await page.waitForTimeout(1500);

// Extract reviews — broader selectors
const reviews = await page.evaluate(() => {
  const blocks = Array.from(document.querySelectorAll('div[data-review-id]'));
  return blocks.map(b => {
    const reviewer = (b.querySelector('div.d4r55')?.textContent || '').trim();
    const ratingEl = b.querySelector('span[role="img"]');
    const rating = ratingEl?.getAttribute('aria-label') || '';
    const date = (b.querySelector('span.rsqaWe')?.textContent || '').trim();
    const text = (b.querySelector('span.wiI7pd')?.textContent || '').trim();
    const owner = (b.querySelector('div.CDe7pd')?.textContent || '').trim();
    return { reviewer, rating, date, text, ownerReply: owner, id: b.getAttribute('data-review-id') };
  });
});
console.log('extracted', reviews.length, 'reviews');
await fs.writeFile('./google-reviews-extracted-v3.json', JSON.stringify(reviews, null, 2));

// Full page HTML
await fs.writeFile('./google-reviews-final.html', await page.content());

await browser.close();
