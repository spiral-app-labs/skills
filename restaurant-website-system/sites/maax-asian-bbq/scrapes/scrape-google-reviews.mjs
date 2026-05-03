import { chromium } from 'playwright';
import fs from 'node:fs';

const out = '../screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  locale: 'en-US',
});
const p = await ctx.newPage();
p.setDefaultTimeout(20000);

await p.goto('https://www.google.com/maps/search/MAAX+Asian+BBQ+%26+Hot+Pots+222+E+Algonquin+Rd+Arlington+Heights+IL/', { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(5000);

const card = p.locator('a.hfpxzc').first();
if (await card.count()) { await card.click().catch(() => {}); await p.waitForTimeout(3500); }

fs.writeFileSync('place-url.txt', p.url());
await p.screenshot({ path: `${out}/g-step1-place.png`, fullPage: false });

let clicked = await p.evaluate(() => {
  const all = Array.from(document.querySelectorAll('button, [role="tab"], div[role="tab"]'));
  for (const el of all) {
    const lbl = (el.getAttribute('aria-label') || '').toLowerCase();
    const txt = (el.textContent || '').trim();
    if (lbl.startsWith('reviews of') || txt === 'Reviews') {
      el.click();
      return true;
    }
  }
  return false;
});
await p.waitForTimeout(4000);
await p.screenshot({ path: `${out}/g-step2-reviews-clicked.png`, fullPage: false });

let sortClicked = await p.evaluate(() => {
  const all = Array.from(document.querySelectorAll('button'));
  for (const el of all) {
    const lbl = (el.getAttribute('aria-label') || '').toLowerCase();
    const txt = (el.textContent || '').trim().toLowerCase();
    if (lbl.includes('sort') || txt === 'most relevant' || txt.startsWith('sort')) {
      el.click();
      return true;
    }
  }
  return false;
});
await p.waitForTimeout(1500);

if (sortClicked) {
  await p.evaluate(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitemradio"], [role="menuitem"]'));
    for (const i of items) {
      if ((i.textContent || '').trim().toLowerCase().includes('highest')) { i.click(); return true; }
    }
    return false;
  });
  await p.waitForTimeout(4000);
}
await p.screenshot({ path: `${out}/google-reviews-highest.png`, fullPage: false });

for (let i = 0; i < 30; i++) {
  await p.evaluate(() => {
    const feeds = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb');
    feeds.forEach(f => f.scrollBy(0, 8000));
    document.querySelectorAll('button').forEach(b => {
      if ((b.textContent || '').trim() === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1300);
}
await p.screenshot({ path: `${out}/g-step5-after-scroll.png`, fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('div[data-review-id]').forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const rating = c.querySelector('span[aria-label*="star" i]')?.getAttribute('aria-label') || null;
    const date = c.querySelector('.rsqaWe')?.textContent?.trim() || null;
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
