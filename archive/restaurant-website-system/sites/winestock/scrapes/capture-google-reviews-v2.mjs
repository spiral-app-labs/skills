import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1200 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  locale: 'en-US',
});
const page = await ctx.newPage();

// Step 1: search and click into the place
await page.goto('https://www.google.com/maps/search/Winestock+Market+%26+Lounge+Woodstock+IL', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(5000);
const placeLinks = await page.$$('a[href*="/maps/place/"]');
if (placeLinks.length) {
  await placeLinks[0].click().catch(() => {});
  await page.waitForTimeout(5000);
}

// Step 2: find reviews button by text
const allButtons = await page.$$eval('button', btns => btns.map((b, i) => ({ i, label: (b.getAttribute('aria-label') || '').trim(), text: (b.textContent || '').trim().slice(0,80) })));
await fs.writeFile('./debug-buttons.json', JSON.stringify(allButtons, null, 2));

// Try clicking reviews tab
const clicked = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button'));
  const reviews = btns.find(b => /^Reviews(\s|$)/i.test((b.getAttribute('aria-label') || '')) || /^Reviews(\s|$)/i.test((b.textContent || '').trim()));
  if (reviews) { reviews.click(); return 'clicked reviews'; }
  return 'no reviews button found';
});
console.log('reviews click:', clicked);
await page.waitForTimeout(4000);
await page.screenshot({ path: '../screenshots/g2-after-reviews-click.png', fullPage: false });

// Step 3: click Sort
const sortClicked = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button'));
  const sort = btns.find(b => /Sort/i.test((b.getAttribute('aria-label') || '')) || /^Sort$/i.test((b.textContent || '').trim()));
  if (sort) { sort.click(); return 'clicked sort'; }
  return 'no sort button';
});
console.log('sort click:', sortClicked);
await page.waitForTimeout(2000);
await page.screenshot({ path: '../screenshots/g2-after-sort-click.png', fullPage: false });

// Step 4: pick "Highest rating"
const highestClicked = await page.evaluate(() => {
  const items = Array.from(document.querySelectorAll('div[role="menuitemradio"], li[role="menuitemradio"]'));
  const highest = items.find(i => /Highest/i.test(i.textContent || ''));
  if (highest) { highest.click(); return 'clicked highest'; }
  // fallback
  const any = Array.from(document.querySelectorAll('div, span')).find(e => (e.textContent || '').trim() === 'Highest rating');
  if (any) { any.click(); return 'clicked highest (fallback)'; }
  return 'no highest item';
});
console.log('highest click:', highestClicked);
await page.waitForTimeout(4000);
await page.screenshot({ path: '../screenshots/g2-after-highest.png', fullPage: false });

// Step 5: scroll the reviews pane to load more
const scrollPane = await page.evaluate(() => {
  const panes = Array.from(document.querySelectorAll('div[role="main"], div.m6QErb'));
  // Find a scrollable element with several review-like children
  for (const p of panes) {
    if (p.scrollHeight > p.clientHeight + 50) {
      return panes.indexOf(p);
    }
  }
  return -1;
});
console.log('scrollable pane index:', scrollPane);

// Scroll loop
for (let i = 0; i < 12; i++) {
  await page.evaluate(() => {
    const panes = Array.from(document.querySelectorAll('div.m6QErb[tabindex="-1"], div[role="main"]'));
    let target = panes.find(p => p.scrollHeight > p.clientHeight + 100);
    if (!target) target = panes[panes.length - 1];
    if (target) target.scrollBy(0, target.clientHeight);
  });
  await page.waitForTimeout(1200);
}
await page.screenshot({ path: '../screenshots/g2-after-scroll.png', fullPage: true });

// Step 6: extract reviews
const reviews = await page.evaluate(() => {
  // Each review block typically has data-review-id
  const blocks = Array.from(document.querySelectorAll('div[data-review-id], div.jftiEf, div.GHT2ce'));
  const out = [];
  for (const b of blocks) {
    if (b.closest('[data-review-id]') !== b && b.dataset.reviewId === undefined) continue;
    const reviewer = (b.querySelector('div.d4r55, .TSUbDb a')?.textContent || '').trim();
    const ratingEl = b.querySelector('span[role="img"][aria-label*="star"], [aria-label*="stars"]');
    const rating = ratingEl?.getAttribute('aria-label') || '';
    const date = (b.querySelector('span.rsqaWe, .dehysf')?.textContent || '').trim();
    // Click "More" if present? Skip — capture text as-is.
    const text = (b.querySelector('span.wiI7pd, div.MyEned')?.textContent || '').trim();
    const ownerReply = (b.querySelector('div.CDe7pd, .wiI7pd[jsname]')?.textContent || '').trim();
    out.push({ reviewer, rating, date, text, ownerReply, reviewId: b.dataset.reviewId || null });
  }
  return out;
});
console.log('extracted', reviews.length, 'reviews');
await fs.writeFile('./google-reviews-extracted-v2.json', JSON.stringify(reviews, null, 2));

const html = await page.content();
await fs.writeFile('./google-reviews-page-v2.html', html);

await browser.close();
