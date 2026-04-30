import { chromium, devices } from 'playwright';
import fs from 'node:fs';

// Try mobile Yelp first (less aggressive bot detection)
const URL = 'https://m.yelp.com/biz/v-s-house-north-richland-hills';
const URL_DESKTOP = 'https://www.yelp.com/biz/v-s-house-north-richland-hills';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/yelp.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/yelp.png';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--no-sandbox',
    '--disable-dev-shm-usage',
  ],
});
const ctx = await browser.newContext({
  ...devices['iPhone 13'],
  // override locale + tz to look human
  locale: 'en-US',
  timezoneId: 'America/Chicago',
  permissions: ['geolocation'],
  geolocation: { latitude: 32.8367, longitude: -97.2289 }, // North Richland Hills
});
// hide webdriver
await ctx.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
});

const page = await ctx.newPage();

let usedUrl = URL;
let blocked = false;
try {
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3500);
  const html0 = await page.content();
  if (/captcha-delivery|datadome|cf-error|access denied/i.test(html0)) {
    blocked = true;
  }
} catch (e) {
  blocked = true;
}

if (blocked) {
  // try desktop with realistic context
  await ctx.close();
  const ctx2 = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    timezoneId: 'America/Chicago',
  });
  await ctx2.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });
  const page2 = await ctx2.newPage();
  usedUrl = URL_DESKTOP;
  await page2.goto(URL_DESKTOP, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page2.waitForTimeout(4000);
  for (let i = 0; i < 6; i++) { await page2.mouse.wheel(0, 1500); await page2.waitForTimeout(500); }

  const html2 = await page2.content();
  fs.writeFileSync(HTML_OUT, html2);
  await page2.screenshot({ path: SHOT, fullPage: false });

  const data = await page2.evaluate(() => {
    const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);
    const blocked = /captcha|verify you are human/i.test(document.body.innerText);
    const rating = txt(document.querySelector('[class*="five-stars"][aria-label*="star"]')) ||
                   document.querySelector('[aria-label*="star rating"]')?.getAttribute('aria-label') || null;
    const reviewEls = Array.from(document.querySelectorAll('[id^="review-"], li[class*="review"]'));
    const reviews = reviewEls.map((el) => ({
      author: txt(el.querySelector('a[href*="/user_details"]')),
      stars: el.querySelector('[aria-label*="star rating"]')?.getAttribute('aria-label') || null,
      date: txt(el.querySelector('span[class*="date"]')),
      body: txt(el.querySelector('p[class*="comment"], p[lang]')),
    })).filter((r) => r.body && r.body.length > 20);
    const paragraphs = Array.from(document.querySelectorAll('main p, p[lang]'))
      .map((p) => p.textContent.trim().replace(/\s+/g, ' '))
      .filter((t) => t.length > 60);
    return { blocked, rating, reviews, paragraphs };
  });

  fs.writeFileSync(OUT, JSON.stringify({ usedUrl, ...data }, null, 2));
  console.log('used:', usedUrl, '| blocked:', data.blocked, '| reviews:', data.reviews.length, '| paragraphs:', data.paragraphs.length);
  await browser.close();
} else {
  // mobile worked
  for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 1500); await page.waitForTimeout(500); }
  const html = await page.content();
  fs.writeFileSync(HTML_OUT, html);
  await page.screenshot({ path: SHOT, fullPage: false });

  const data = await page.evaluate(() => {
    const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);
    const rating = txt(document.querySelector('[class*="rating"]')) || null;
    const reviewEls = Array.from(document.querySelectorAll('article, [class*="review"]'));
    const reviews = reviewEls.map((el) => ({
      body: txt(el.querySelector('p, [class*="comment"]')),
      author: txt(el.querySelector('[class*="user"], [class*="author"]')),
    })).filter((r) => r.body && r.body.length > 30);
    const paragraphs = Array.from(document.querySelectorAll('p'))
      .map((p) => p.textContent.trim().replace(/\s+/g, ' '))
      .filter((t) => t.length > 60);
    return { rating, reviews, paragraphs };
  });

  fs.writeFileSync(OUT, JSON.stringify({ usedUrl, ...data }, null, 2));
  console.log('used:', usedUrl, '| reviews:', data.reviews.length, '| paragraphs:', data.paragraphs.length);
  await browser.close();
}
