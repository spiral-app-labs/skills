import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  locale: 'en-US'
});
const p = await ctx.newPage();
p.setDefaultTimeout(20000);

// Direct place URL we discovered
const placeUrl = "https://www.google.com/maps/place/Sammy's+Restaurant+%26+Bar/@42.1691859,-88.4276485,17z/data=!3m1!4b1!4m6!3m5!1s0x880f14468cb3d129:0x13d3576d6ab287ef!8m2!3d42.1691859!4d-88.4276485!16s%2Fg%2F1tdfnvwp";

await p.goto(placeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(5500);
await p.screenshot({ path: 'screenshots/g-v4-step1-place.png', fullPage: false });

// Inspect ALL buttons with their text + aria-label
const buttons = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('button[role="tab"], button').forEach(b => {
    const t = (b.textContent || '').trim().slice(0, 60);
    const al = b.getAttribute('aria-label') || '';
    const role = b.getAttribute('role') || '';
    const ja = b.getAttribute('jsaction') || '';
    if (t || al) out.push({ t, al: al.slice(0, 60), role, ja: ja.slice(0, 80) });
  });
  return out.slice(0, 80);
});
fs.writeFileSync('buttons-dump.json', JSON.stringify(buttons, null, 2));
console.log('buttons sampled:', buttons.length);

// Try clicking any tab whose text contains "Reviews"
const clickedReviews = await p.evaluate(() => {
  const tabs = document.querySelectorAll('button[role="tab"]');
  for (const t of tabs) {
    if ((t.textContent || '').includes('Reviews')) { t.click(); return { clicked: true, text: t.textContent.trim() }; }
  }
  // Try any button with 'reviews' in aria-label
  const anyBtn = document.querySelector('button[aria-label*="reviews" i]');
  if (anyBtn) { anyBtn.click(); return { clicked: true, text: anyBtn.getAttribute('aria-label') }; }
  return { clicked: false };
});
console.log('clickedReviews:', JSON.stringify(clickedReviews));
await p.waitForTimeout(4000);
await p.screenshot({ path: 'screenshots/g-v4-step2-reviews.png', fullPage: false });

// Click sort by text "Most relevant"
const clickedSort = await p.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  for (const b of buttons) {
    const t = (b.textContent || '').trim();
    if (/Most relevant|Sort/i.test(t)) { b.click(); return { clicked: true, text: t }; }
  }
  return { clicked: false };
});
console.log('clickedSort:', JSON.stringify(clickedSort));
await p.waitForTimeout(2000);
await p.screenshot({ path: 'screenshots/g-v4-step3-sortmenu.png', fullPage: false });

const clickedHighest = await p.evaluate(() => {
  const items = Array.from(document.querySelectorAll('[role="menuitemradio"], [role="menuitem"], li, div'));
  for (const it of items) {
    const t = (it.textContent || '').trim();
    if (/^Highest rating$/i.test(t) || /^Highest$/i.test(t)) { it.click(); return { clicked: true, text: t.slice(0, 60) }; }
  }
  return { clicked: false };
});
console.log('clickedHighest:', JSON.stringify(clickedHighest));
await p.waitForTimeout(5000);
await p.screenshot({ path: 'screenshots/g-v4-step4-after-highest.png', fullPage: false });

// Scroll the feed
for (let i = 0; i < 25; i++) {
  await p.evaluate(() => {
    const feeds = document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb, div.m6QErb.WNBkOb');
    feeds.forEach(c => c.scrollBy(0, 6000));
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1200);
}
await p.screenshot({ path: 'screenshots/g-v4-step5-scrolled.png', fullPage: false });

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
