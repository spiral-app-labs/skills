import { chromium } from 'playwright';
import fs from 'node:fs';

const out = '../screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  locale: 'en-US'
});
const p = await ctx.newPage();
p.setDefaultTimeout(20000);

const PLACE_URL = 'https://www.google.com/maps/place/DiBenedetto+Trattoria/@42.0925892,-88.1239045,17z/data=!3m1!4b1!4m6!3m5!1s0x880fa6426d18fe8f:0xeb1671af9b64a93!8m2!3d42.0925892!4d-88.1239045!16s%2Fg%2F1thk9bfq';
await p.goto(PLACE_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(5000);

// Click Reviews via the text button explicitly
let clicked = false;
try {
  // Use page.locator to find element by visible text "Reviews"
  const reviewsBtn = p.locator('button:has-text("Reviews"), [role="tab"]:has-text("Reviews")').first();
  if (await reviewsBtn.count()) {
    await reviewsBtn.scrollIntoViewIfNeeded();
    await reviewsBtn.click({ timeout: 5000, force: true });
    clicked = true;
    console.log('clicked Reviews via :has-text');
  }
} catch (e) { console.log('text click failed', e.message); }

if (!clicked) {
  // try evaluate-based click on any element with text "Reviews" in the side panel
  clicked = await p.evaluate(() => {
    const all = Array.from(document.querySelectorAll('button, [role="tab"], div[role="tab"]'));
    for (const el of all) {
      const t = (el.textContent || '').trim();
      if (t === 'Reviews') { el.click(); return true; }
    }
    return false;
  });
  console.log('evaluate click result:', clicked);
}

await p.waitForTimeout(4000);
await p.screenshot({ path: `${out}/g3-step2-reviews-clicked.png`, fullPage: false });

// Sort menu
let sortClicked = false;
try {
  sortClicked = await p.evaluate(() => {
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
  console.log('sort click result:', sortClicked);
} catch (e) { console.log('sort fail', e.message); }
await p.waitForTimeout(1500);
await p.screenshot({ path: `${out}/g3-step3-sort-menu.png`, fullPage: false });

if (sortClicked) {
  await p.evaluate(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitemradio"], [role="menuitem"]'));
    for (const i of items) {
      const t = (i.textContent || '').trim().toLowerCase();
      if (t.includes('highest')) { i.click(); return true; }
    }
    return false;
  });
  await p.waitForTimeout(4000);
}
await p.screenshot({ path: `${out}/google-reviews-highest.png`, fullPage: false });

// Aggressive scroll
for (let i = 0; i < 35; i++) {
  await p.evaluate(() => {
    const feed = document.querySelector('div[role="feed"]') || document.querySelector('div.m6QErb.DxyBCb.kA9KIf') || document.querySelector('div.m6QErb.DxyBCb');
    if (feed) feed.scrollBy(0, 8000);
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More') try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1200);
}
await p.screenshot({ path: `${out}/g3-step5-after-scroll.png`, fullPage: false });

const reviews = await p.evaluate(() => {
  const out = [];
  const cards = document.querySelectorAll('div[data-review-id]');
  cards.forEach(c => {
    const name = c.querySelector('.d4r55')?.textContent?.trim() || null;
    const ratingEl = c.querySelector('span[aria-label*="star" i], span[role="img"][aria-label*="star" i]');
    const rating = ratingEl?.getAttribute('aria-label') || null;
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
