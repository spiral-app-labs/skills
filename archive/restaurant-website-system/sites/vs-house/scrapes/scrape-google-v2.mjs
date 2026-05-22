import { chromium } from 'playwright';
import fs from 'node:fs';

// Direct place CID from Google search snippet — V's House NRH
const PLACE_URL = 'https://www.google.com/maps/place/V\'s+House/@32.8216857,-97.2102604,17z/data=!4m6!3m5!1s0x864e7d4f1b6c8c8b:0x0!8m2!3d32.8216857!4d-97.2076855!16s%2Fg%2F11rygk6bvy';
const SEARCH_FALLBACK = 'https://www.google.com/maps/search/V%27s+House+North+Richland+Hills';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/google-reviews.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 900 },
  locale: 'en-US',
});
const page = await ctx.newPage();

await page.goto(SEARCH_FALLBACK, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3500);
try { await page.click('button:has-text("Accept all"), button:has-text("Reject all")', { timeout: 3000 }); } catch {}
await page.waitForTimeout(1500);

// click the first result if a list rendered
try {
  const firstResult = page.locator('a[href*="/maps/place/"]').first();
  await firstResult.click({ timeout: 5000 });
  await page.waitForTimeout(3500);
} catch {}

// click the Reviews tab inside the place card
try {
  await page.click('button[role="tab"]:has-text("Reviews"), button:has-text("Reviews")', { timeout: 5000 });
  await page.waitForTimeout(2500);
} catch {}

// scroll inside the reviews scroll container
const scrollSelector = 'div.m6QErb[aria-label][tabindex="-1"], div[aria-label*="Reviews"]';
for (let i = 0; i < 25; i++) {
  await page.evaluate((sel) => {
    const els = document.querySelectorAll(sel);
    els.forEach((el) => { el.scrollTop = el.scrollHeight; });
  }, scrollSelector);
  await page.waitForTimeout(700);
}

// expand "More" buttons
try {
  const more = await page.$$('button:has-text("More"), button:has-text("More ▼")');
  for (const b of more) { try { await b.click({ timeout: 800 }); } catch {} }
  await page.waitForTimeout(1000);
} catch {}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);

  // Place name + rating
  const placeName = txt(document.querySelector('h1.DUwDvf, h1[class*="fontHeadlineLarge"]'));
  const ratingEl = document.querySelector('div.F7nice span[aria-hidden="true"], div[class*="fontDisplayLarge"]');
  const rating = txt(ratingEl);
  const countEl = document.querySelector('div.F7nice button, button[aria-label*="reviews"]');
  const count = txt(countEl);

  // Reviews — newer Maps DOM uses data-review-id; older has jslog with metadata:7
  const reviewEls = Array.from(document.querySelectorAll('[data-review-id]'));
  const reviews = reviewEls.map((el) => {
    const author = txt(el.querySelector('div.d4r55, button div[class*="fontTitleMedium"]'));
    const stars = el.querySelector('span.kvMYJc, span[role="img"][aria-label*="stars"]')?.getAttribute('aria-label') || null;
    const date = txt(el.querySelector('span.rsqaWe, span.xRkPPb'));
    const body = txt(el.querySelector('span.wiI7pd, div.MyEned span, span[class*="review-text"]'));
    return { author, date, stars, body };
  }).filter((r) => r.body && r.body.length > 20);

  // Owner replies under reviews
  const replyEls = Array.from(document.querySelectorAll('div.CDe7pd'));
  const ownerReplies = replyEls.map((el) => txt(el)).filter(Boolean);

  return { placeName, rating, count, reviews, ownerReplies, url: location.href };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('place:', data.placeName, '| rating:', data.rating, '| count:', data.count);
console.log('reviews:', data.reviews.length, '| ownerReplies:', data.ownerReplies.length);
console.log('url:', data.url);
await browser.close();
