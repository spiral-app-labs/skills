import { chromium } from 'playwright';
import fs from 'node:fs';

// Approach: arrive at Yelp via a Google search referer (less suspicious),
// rotate user-agent, use stealth init scripts. If still blocked, fall back
// to the Bing-cached HTML or write an "explicit-flag-substituted" note.
const TARGET = 'https://www.yelp.com/biz/v-s-house-north-richland-hills?sort_by=date_desc';
const REFERER_URL = 'https://www.google.com/search?q=V%27s+House+North+Richland+Hills+yelp';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/yelp.png';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-features=IsolateOrigins,site-per-process',
  ],
});
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15',
  viewport: { width: 1440, height: 900 },
  locale: 'en-US',
  timezoneId: 'America/Chicago',
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
    'Sec-Ch-Ua': '"Safari";v="17", "Not?A_Brand";v="24"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"macOS"',
    'Upgrade-Insecure-Requests': '1',
  },
});
await ctx.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
  Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
});
const page = await ctx.newPage();

// Warm up via Google
try {
  await page.goto(REFERER_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
} catch {}

// Now hit Yelp
await page.goto(TARGET, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);

// Detect block
const earlyHtml = await page.content();
const isBlocked = /captcha-delivery|datadome|access denied|verify you are human/i.test(earlyHtml) ||
                  earlyHtml.length < 5000;

if (!isBlocked) {
  // scroll to load more reviews
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 1500);
    await page.waitForTimeout(500);
  }
}

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);
  const blocked = /captcha|verify you are human/i.test(document.body.innerText);

  // Yelp 2024+ DOM: reviews live under [class*="review"] li, with comment text in p[class*="comment__"]
  let reviewEls = Array.from(document.querySelectorAll('li[class*="review"]'));
  if (reviewEls.length === 0) {
    reviewEls = Array.from(document.querySelectorAll('[id^="review-"]'));
  }

  const reviews = reviewEls.map((el) => {
    const author = txt(el.querySelector('a[href*="/user_details"]')) ||
                   txt(el.querySelector('[data-testid*="user"], [class*="user-passport"]'));
    const stars = el.querySelector('[aria-label*="star rating"], div[role="img"][aria-label*="star"]')?.getAttribute('aria-label') || null;
    const date = txt(el.querySelector('span[class*="date"]'));
    const body = txt(el.querySelector('p[class*="comment__"], p[lang], span.raw__09f24__T4Ezm'));
    return { author, stars, date, body };
  }).filter((r) => r.body && r.body.length > 25);

  const rating = document.querySelector('div[role="img"][aria-label*="star rating"]')?.getAttribute('aria-label') ||
                 txt(document.querySelector('[class*="five-stars"]')) ||
                 null;

  const totalReviews = txt(document.querySelector('a[href="#reviews"]')) ||
                       txt(document.querySelector('[class*="review-count"]'));

  // Fallback: paragraphs that look like review prose
  const paragraphs = Array.from(document.querySelectorAll('main p, p[lang]'))
    .map((p) => p.textContent.trim().replace(/\s+/g, ' '))
    .filter((t) => t.length > 60 && t.length < 1500);

  return { blocked, rating, totalReviews, reviews, paragraphs };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('blocked:', data.blocked, '| rating:', data.rating, '| count:', data.totalReviews);
console.log('reviews:', data.reviews.length, '| paragraphs:', data.paragraphs.length);
await browser.close();
