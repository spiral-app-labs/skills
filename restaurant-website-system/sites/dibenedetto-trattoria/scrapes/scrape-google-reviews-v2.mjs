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

// Direct place URL discovered in v1
const PLACE_URL = 'https://www.google.com/maps/place/DiBenedetto+Trattoria/@42.0925892,-88.1239045,17z/data=!3m1!4b1!4m6!3m5!1s0x880fa6426d18fe8f:0xeb1671af9b64a93!8m2!3d42.0925892!4d-88.1239045!16s%2Fg%2F1thk9bfq';
await p.goto(PLACE_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
await p.waitForTimeout(4500);
await p.screenshot({ path: `${out}/g2-step1-place.png`, fullPage: false });

// Strategy: click the rating row "4.6 (143)" — that's the most reliable Reviews entry
let clicked = false;
const ratingRowSelectors = [
  'div.F7nice',
  'div[role="img"][aria-label*="stars"]',
  'span[aria-label*="stars"]',
];

// First try: just click the visible "Reviews" tab button in the tablist
try {
  const tabs = await p.locator('button[role="tab"]').all();
  for (const t of tabs) {
    const label = (await t.getAttribute('aria-label') || await t.textContent() || '').toLowerCase();
    if (label.includes('review')) {
      await t.click({ timeout: 5000 });
      clicked = true;
      console.log('clicked reviews tab via tablist');
      break;
    }
  }
} catch (e) { console.log('tablist fail', e.message); }

if (!clicked) {
  for (const sel of ratingRowSelectors) {
    const el = p.locator(sel).first();
    if (await el.count()) {
      try { await el.click({ timeout: 5000 }); clicked = true; console.log('clicked', sel); break; } catch {}
    }
  }
}
await p.waitForTimeout(3500);
await p.screenshot({ path: `${out}/g2-step2-reviews-clicked.png`, fullPage: false });

// Find Sort
let sortClicked = false;
const sortSelectors = [
  'button[aria-label*="Sort" i]',
  'button:has-text("Most relevant")',
  'button:has-text("Sort")',
];
for (const sel of sortSelectors) {
  const el = p.locator(sel).first();
  if (await el.count()) {
    try { await el.click({ timeout: 5000 }); sortClicked = true; console.log('sort via', sel); break; } catch {}
  }
}
await p.waitForTimeout(1500);
await p.screenshot({ path: `${out}/g2-step3-sort-menu.png`, fullPage: false });

if (sortClicked) {
  // Click "Highest rating"
  const highestSelectors = [
    'div[role="menuitemradio"]:has-text("Highest")',
    '[role="menuitemradio"]:has-text("Highest")',
    'div:has-text("Highest rating")',
  ];
  for (const sel of highestSelectors) {
    const el = p.locator(sel).first();
    if (await el.count()) {
      try { await el.click({ timeout: 5000 }); console.log('highest via', sel); break; } catch {}
    }
  }
  await p.waitForTimeout(4000);
}
await p.screenshot({ path: `${out}/google-reviews-highest.png`, fullPage: false });

// Aggressive scroll + expand More
for (let i = 0; i < 30; i++) {
  await p.evaluate(() => {
    const feed = document.querySelector('div[role="feed"]') || document.querySelector('div.m6QErb.DxyBCb');
    if (feed) { feed.scrollBy(0, 8000); }
    else { window.scrollBy(0, 8000); }
    document.querySelectorAll('button').forEach(b => {
      const t = (b.textContent || '').trim();
      if (t === 'More' || /^More$/.test(t)) try { b.click(); } catch {}
    });
  });
  await p.waitForTimeout(1300);
}
await p.screenshot({ path: `${out}/g2-step5-after-scroll.png`, fullPage: false });

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
