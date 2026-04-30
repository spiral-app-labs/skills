import { chromium } from 'playwright';
import fs from 'node:fs';

const SEARCH = 'https://www.google.com/maps/search/?api=1&query=V%27s+House+North+Richland+Hills';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/google-desktop.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 900 },
  locale: 'en-US',
});
const page = await ctx.newPage();

// 1) Google Maps search → place detail
await page.goto(SEARCH, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);
// dismiss consent if present
try { await page.click('button:has-text("Accept all")', { timeout: 3000 }); } catch {}
try { await page.click('button:has-text("Reject all")', { timeout: 3000 }); } catch {}
await page.waitForTimeout(2000);

// 2) click into "Reviews" tab if available
try {
  const reviewsTab = page.locator('button[aria-label*="Reviews"], button:has-text("Reviews")').first();
  await reviewsTab.click({ timeout: 5000 });
  await page.waitForTimeout(2500);
} catch {}

// 3) scroll the reviews panel to load more
const scrollable = await page.$('div[role="main"] [tabindex="-1"]') || await page.$('div[aria-label*="Reviews"]');
for (let i = 0; i < 12; i++) {
  await page.evaluate(() => {
    const panes = document.querySelectorAll('div[role="main"], div[aria-label*="Reviews"]');
    panes.forEach((p) => { p.scrollTop = p.scrollHeight; });
    window.scrollBy(0, 1500);
  });
  await page.waitForTimeout(800);
}

// expand "More" buttons to capture full review text
try {
  const moreBtns = await page.$$('button:has-text("More")');
  for (const b of moreBtns.slice(0, 25)) { try { await b.click({ timeout: 1000 }); } catch {} }
} catch {}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);
  const rating = txt(document.querySelector('div[role="img"][aria-label*="stars"]')) ||
                 txt(document.querySelector('span[aria-hidden="true"]'));

  // Reviews carry data-review-id
  const reviewEls = Array.from(document.querySelectorAll('[data-review-id]'));
  const reviews = reviewEls.map((el) => {
    const author = txt(el.querySelector('button[aria-label] div, .d4r55, [class*="user"]'));
    const stars = el.querySelector('[role="img"][aria-label*="star"]')?.getAttribute('aria-label') || null;
    const date = txt(el.querySelector('span.rsqaWe, span[class*="date"]'));
    const body = txt(el.querySelector('span.wiI7pd, div[class*="review-text"]')) || txt(el);
    return { author, date, stars, body };
  }).filter((r) => r.body && r.body.length > 25);

  // owner replies
  const replyEls = Array.from(document.querySelectorAll('div.CDe7pd, div[class*="owner-reply"]'));
  const ownerReplies = replyEls.map((el) => txt(el)).filter(Boolean);

  return { rating, reviews, ownerReplies };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('rating:', data.rating);
console.log('reviews:', data.reviews.length);
console.log('ownerReplies:', data.ownerReplies.length);
await browser.close();
