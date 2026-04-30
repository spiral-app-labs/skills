// Strategy: Google Maps direct place URL + click Reviews button by jsaction
// (the Reviews tab in the place panel uses jsaction="pane.rating.moreReviews"
// or aria-label="Reviews"). After click, scroll the .m6QErb panel.
import { chromium } from 'playwright';
import fs from 'node:fs';

const PLACE_URL = 'https://www.google.com/maps/place/V\'s+House/@32.835334,-97.1951692,17z/data=!4m7!3m6!1s0x864e792bfff2c3b7:0x92caf3c9496efd9a!8m2!3d32.835334!4d-97.1951692!10e2!16s%2Fg%2F11mhysx976?hl=en';

const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/google-reviews.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1100 },
  locale: 'en-US',
});
const page = await ctx.newPage();

await page.goto(PLACE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(5000);

try { await page.click('button:has-text("Accept all"), button:has-text("Reject all")', { timeout: 3000 }); } catch {}
await page.waitForTimeout(1500);

// Click the rating to open reviews — that's the most reliable trigger
const clicked = await page.evaluate(() => {
  // Variants:
  // 1) The "X reviews" button under place header
  // 2) The "Reviews" tab in the segmented control
  // 3) The rating chip
  const candidates = Array.from(document.querySelectorAll('button, a, div[role="button"]'));
  // Pattern: aria-label contains "review" or text matches "X reviews"
  for (const el of candidates) {
    const al = (el.getAttribute('aria-label') || '').toLowerCase();
    const tt = (el.textContent || '').trim();
    if (/^reviews$/i.test(tt) ||
        /\b\d{2,5}\s+reviews?\b/i.test(tt) ||
        /^see all reviews$/i.test(tt) ||
        /reviews for/i.test(al)) {
      el.click();
      return tt || al;
    }
  }
  return null;
});
console.log('clicked:', clicked);
await page.waitForTimeout(4000);

// Wait for review elements
try {
  await page.waitForSelector('div.jftiEf, div[data-review-id], div.GHT2ce, .gws-localreviews__general-reviews-block', { timeout: 10000 });
  console.log('review nodes appeared');
} catch {
  console.log('no review nodes after click');
}

// Find scrollable review pane
const scrollPane = async () => {
  await page.evaluate(() => {
    const panes = Array.from(document.querySelectorAll('div.m6QErb.DxyBCb, div.m6QErb[tabindex="-1"]'));
    panes.forEach((p) => { p.scrollTop = p.scrollHeight; });
  });
};
for (let i = 0; i < 35; i++) {
  await scrollPane();
  await page.waitForTimeout(700);
}

// expand "More" buttons in reviews
await page.evaluate(() => {
  document.querySelectorAll('button.w8nwRe, button[aria-label="See more"], button[jsaction*="expandReview"]').forEach((b) => b.click());
});
await page.waitForTimeout(1500);

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);
  const placeName = txt(document.querySelector('h1.DUwDvf, h1[class*="fontHeadlineLarge"]'));
  const rating = txt(document.querySelector('div.F7nice span[aria-hidden="true"]')) ||
                 txt(document.querySelector('div.fontDisplayLarge'));
  const count = (() => {
    const el = document.querySelector('div.F7nice span[aria-label*="reviews"]') ||
               document.querySelector('button[aria-label*="reviews"]') ||
               document.querySelector('div.F7nice span:nth-of-type(2)');
    return txt(el);
  })();

  // Reviews
  const items = Array.from(document.querySelectorAll('div.jftiEf, div[data-review-id]'));
  const reviews = items.map((el) => ({
    reviewId: el.getAttribute('data-review-id'),
    author: txt(el.querySelector('div.d4r55, .WNxzHc')),
    stars: el.querySelector('span.kvMYJc, span[role="img"][aria-label*="star"]')?.getAttribute('aria-label') || null,
    date: txt(el.querySelector('span.rsqaWe, span.xRkPPb')),
    body: txt(el.querySelector('span.wiI7pd')) || txt(el.querySelector('div.MyEned')),
  })).filter((r) => r.body && r.body.length > 15);

  const ownerReplies = Array.from(document.querySelectorAll('div.CDe7pd')).map((el) => txt(el)).filter(Boolean);

  return { placeName, rating, count, reviews, ownerReplies, url: location.href };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('place:', data.placeName, '| rating:', data.rating, '| count:', data.count);
console.log('reviews:', data.reviews.length, '| owner replies:', data.ownerReplies.length);
console.log('final url:', data.url);
await browser.close();
