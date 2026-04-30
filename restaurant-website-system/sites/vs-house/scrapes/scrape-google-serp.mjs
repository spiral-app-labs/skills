// Strategy: regular Google search page reliably renders the Knowledge Panel
// for a known restaurant, including 4-6 verbatim "featured" Google reviews
// in the right rail. Scrape those directly.
import { chromium } from 'playwright';
import fs from 'node:fs';

const SERP = 'https://www.google.com/search?q=V%27s+House+North+Richland+Hills+reviews&hl=en&gl=us';
const REVIEWS_SERP = 'https://www.google.com/search?q=V%27s+House+North+Richland+Hills&lrd=0x864e792bfff2c3b7:0x92caf3c9496efd9a&hl=en';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google-serp.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google-serp.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/google-serp.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1100 },
  locale: 'en-US',
});
const page = await ctx.newPage();

// Try the dedicated `lrd` reviews-listing page that mirrors Google reviews verbatim
let url = REVIEWS_SERP;
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);
try { await page.click('button:has-text("Accept all"), button:has-text("Reject all")', { timeout: 3000 }); } catch {}
await page.waitForTimeout(1500);

// Click "View all reviews" if present
try {
  const seeAll = page.locator('a:has-text("View all"), a:has-text("All reviews"), a:has-text("More reviews")').first();
  await seeAll.click({ timeout: 3000 });
  await page.waitForTimeout(2500);
} catch {}

for (let i = 0; i < 8; i++) {
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(500);
}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: true });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);

  // Knowledge panel rating + count
  const rating = txt(document.querySelector('span.Aq14fc, span.uo4vr, span[aria-label*="star"]')) ||
                 txt(document.querySelector('g-review-stars + span'));
  const count = txt(document.querySelector('a[href*="reviews"]')) ||
                txt(document.querySelector('span.hqzQac'));

  // Featured Google reviews block — multiple selector candidates
  const reviewSelectors = [
    'div.gws-localreviews__general-reviews-block div[jscontroller]',
    'div[jscontroller="kEhVXc"]',
    'div.WMbnJf',           // listing item
    'div.Jtu6Td',           // featured review wrapper
    'div[data-review-id]',
    'div.zMxYI',            // card
    'div[class*="review"][jsname]',
  ];
  let nodes = [];
  for (const sel of reviewSelectors) {
    const els = Array.from(document.querySelectorAll(sel));
    if (els.length > nodes.length) nodes = els;
  }

  const reviews = nodes.map((el) => {
    const author = txt(el.querySelector('div.TSUbDb, span.YGBYGc, .Vpc5Fe')) ||
                   txt(el.querySelector('a[href*="contrib"]'));
    const stars = el.querySelector('[aria-label*="star"], g-review-stars')?.getAttribute('aria-label') || null;
    const date = txt(el.querySelector('span.dehysf, span.UpcGyb')) ||
                 txt(el.querySelector('span[class*="date"]'));
    const body = txt(el.querySelector('span.Jtu6Td, span[jsname="bN97Pc"], span[class*="review-text"]')) ||
                 txt(el.querySelector('div[class*="text"]')) ||
                 txt(el);
    return { author, stars, date, body };
  }).filter((r) => r.body && r.body.length > 25 && r.body.length < 4000);

  // Also dump every <span> that's between 80 and 1500 chars and looks review-like
  const candidateSpans = Array.from(document.querySelectorAll('span'))
    .map((s) => s.textContent.trim().replace(/\s+/g, ' '))
    .filter((t) => t.length > 80 && t.length < 1500 &&
                   /pho|food|service|drinks|delicious|amazing|atmosphere|sushi|cocktail|broth/i.test(t));

  return { rating, count, reviews, candidateSpans };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('rating:', data.rating, '| count:', data.count);
console.log('reviews:', data.reviews.length, '| candidateSpans:', data.candidateSpans.length);
await browser.close();
