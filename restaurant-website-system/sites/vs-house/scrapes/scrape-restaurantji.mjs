// Restaurantji is publicly scrapable, no JS gate, and exposes the full
// 316-review corpus for V's House. Each review card has a stable structure.
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'https://www.restaurantji.com/tx/north-richland-hills/vs-house-/';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/restaurantji.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/restaurantji.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/restaurantji.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1100 },
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(2000);

// Click "Read All Reviews" to expand
try {
  await page.click('a:has-text("Read All Reviews"), a:has-text("All Reviews")', { timeout: 4000 });
  await page.waitForTimeout(2500);
} catch {}

// scroll
for (let i = 0; i < 15; i++) {
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(400);
}

// load more pages
for (let pg = 2; pg <= 6; pg++) {
  try {
    const next = page.locator('a:has-text("Next"), a[rel="next"]').first();
    if (await next.count()) {
      await next.click({ timeout: 3000 });
      await page.waitForTimeout(2500);
      for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 1500); await page.waitForTimeout(300); }
    } else break;
  } catch { break; }
}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: true });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);

  // Restaurantji review card pattern
  const cards = Array.from(document.querySelectorAll('div.review, li.review, article.review, div[class*="review-card"], div.media'));

  const reviews = cards.map((el) => {
    const author = txt(el.querySelector('h4, h5, strong, .author, [class*="user"], [class*="name"]'));
    const stars = (() => {
      const s = el.querySelector('[class*="star"], [class*="rating"], [aria-label*="star"]');
      if (!s) return null;
      return s.getAttribute('aria-label') || s.getAttribute('title') || txt(s);
    })();
    const date = txt(el.querySelector('time, [class*="date"], small'));
    const body = txt(el.querySelector('p, .review-body, [class*="text"], blockquote'));
    return { author, stars, date, body };
  }).filter((r) => r.body && r.body.length > 30);

  // Fallback: every <p> longer than 60 chars in a "review"-classed parent
  const allReviewProse = Array.from(document.querySelectorAll('p'))
    .filter((p) => /pho|food|service|delicious|broth|sushi|drinks|atmosphere|amazing|great|love/i.test(p.textContent))
    .map((p) => p.textContent.trim().replace(/\s+/g, ' '))
    .filter((t) => t.length > 60 && t.length < 1500);

  const overallRating = txt(document.querySelector('[class*="rating-value"], .rating-large, h2 + div'));

  return { overallRating, reviews, allReviewProse };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('rating:', data.overallRating, '| reviews (cards):', data.reviews.length, '| reviewProse (p):', data.allReviewProse.length);
await browser.close();
