import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.83 Safari/537.36',
  locale: 'en-US',
  geolocation: { latitude: 42.1691859, longitude: -88.4276485 },
  permissions: ['geolocation']
});
const p = await ctx.newPage();
p.setDefaultTimeout(20000);

// URL with !9m1!1b1 = open reviews tab automatically
const reviewsUrl = "https://www.google.com/maps/place/Sammy's+Restaurant+%26+Bar/@42.1691859,-88.4276485,17z/data=!4m8!3m7!1s0x880f14468cb3d129:0x13d3576d6ab287ef!8m2!3d42.1691859!4d-88.4276485!9m1!1b1";

await p.goto(reviewsUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(7000);
fs.writeFileSync('place-url.txt', p.url());
await p.screenshot({ path: 'screenshots/g-v5-step1-reviews-direct.png', fullPage: false });

// Count review cards before any sort
let cardCount = await p.evaluate(() => document.querySelectorAll('div[data-review-id]').length);
console.log('initial cards on direct-reviews URL:', cardCount);

// Click sort by text
const clickedSort = await p.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  for (const b of buttons) {
    const t = (b.textContent || '').trim();
    if (/^Sort$/i.test(t) || /Most relevant/i.test(t)) { b.click(); return { clicked: true, text: t }; }
  }
  return { clicked: false };
});
console.log('clickedSort:', JSON.stringify(clickedSort));
await p.waitForTimeout(2000);
await p.screenshot({ path: 'screenshots/g-v5-step2-sortmenu.png', fullPage: false });

const clickedHighest = await p.evaluate(() => {
  const items = Array.from(document.querySelectorAll('[role="menuitemradio"], [role="menuitem"], li, div, span'));
  for (const it of items) {
    const t = (it.textContent || '').trim();
    if (t === 'Highest rating' || t === 'Highest') { it.click(); return { clicked: true, text: t }; }
  }
  return { clicked: false };
});
console.log('clickedHighest:', JSON.stringify(clickedHighest));
await p.waitForTimeout(5000);
await p.screenshot({ path: 'screenshots/g-v5-step3-after-highest.png', fullPage: false });

// Scroll
for (let i = 0; i < 30; i++) {
  await p.evaluate(() => {
    const feeds = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb, div.m6QErb.WNBkOb, div.m6QErb');
    feeds.forEach(c => c.scrollBy(0, 6000));
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1200);
}
await p.screenshot({ path: 'screenshots/g-v5-step4-scrolled.png', fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  const cards = document.querySelectorAll('div[data-review-id]');
  cards.forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const rating = c.querySelector('span[aria-label*="star"]')?.getAttribute('aria-label') || c.querySelector('span.kvMYJc')?.getAttribute('aria-label') || null;
    const date = c.querySelector('.rsqaWe')?.textContent?.trim() || c.querySelector('.xRkPPb')?.textContent?.trim() || null;
    const text = c.querySelector('.wiI7pd')?.textContent?.trim() || c.querySelector('.MyEned')?.textContent?.trim() || null;
    const reply = c.querySelector('.CDe7pd')?.textContent?.trim() || null;
    out.push({ id: c.getAttribute('data-review-id'), name, rating, date, text, reply });
  });
  return out;
});

fs.writeFileSync('google-reviews-raw.json', JSON.stringify(reviews, null, 2));
fs.writeFileSync('google-maps-reviews-final.html', await p.content());
console.log('cards', reviews.length, 'with-text', reviews.filter(r => r.text).length);
await browser.close();
