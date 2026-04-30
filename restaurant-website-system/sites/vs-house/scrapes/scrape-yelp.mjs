import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = 'https://www.yelp.com/biz/v-s-house-north-richland-hills';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/yelp-desktop.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 900 },
  locale: 'en-US',
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3500);

// scroll to load reviews
for (let i = 0; i < 8; i++) {
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(600);
}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);

  // overall rating + count
  const rating = txt(document.querySelector('[class*="five-stars"][aria-label*="star rating"]')) ||
                 txt(document.querySelector('[aria-label*="star rating"]'));
  const reviewCount = txt(document.querySelector('a[href*="reviews"]')) || null;

  // reviews
  const reviewEls = Array.from(document.querySelectorAll('[id^="review-"], li[class*="review"], div[data-testid*="review"]'));
  const reviews = [];
  reviewEls.forEach((el) => {
    const author = txt(el.querySelector('a[href*="/user_details"]')) || txt(el.querySelector('[class*="user"]'));
    const dateEl = el.querySelector('span[class*="date"], time');
    const date = dateEl ? txt(dateEl) : null;
    const stars = el.querySelector('[aria-label*="star rating"]')?.getAttribute('aria-label') || null;
    const body = txt(el.querySelector('p[class*="comment"], span[class*="raw"], p[lang]'));
    if (body && body.length > 20) reviews.push({ author, date, stars, body });
  });

  // also pull all <p> blocks in main as a fallback
  const paragraphs = Array.from(document.querySelectorAll('main p, article p, p[lang]'))
    .map((p) => p.textContent.trim().replace(/\s+/g, ' '))
    .filter((t) => t.length > 60);

  return { rating, reviewCount, reviews, paragraphs };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('rating:', data.rating);
console.log('reviewCount:', data.reviewCount);
console.log('reviews.length:', data.reviews.length);
console.log('paragraphs.length:', data.paragraphs.length);
await browser.close();
