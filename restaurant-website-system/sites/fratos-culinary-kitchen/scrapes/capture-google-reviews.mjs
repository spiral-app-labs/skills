import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const siteDir = '/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen';
const screenshotsDir = path.join(siteDir, 'screenshots');
const scrapesDir = path.join(siteDir, 'scrapes');
await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(scrapesDir, { recursive: true });

const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
const ctx = browser.contexts()[0];
let page = ctx.pages().find(p => p.url().includes("Frato's+Kitchen") && p.url().includes('google.com/maps'))
  || ctx.pages().find(p => p.url().includes('Frato') && p.url().includes('google.com/maps'));
if (!page) throw new Error('Could not find an open Frato Google Maps page.');
await page.bringToFront();
await page.waitForLoadState('domcontentloaded').catch(() => {});

try {
  const reviewsTab = page.getByRole('tab', { name: /Reviews for Frato/i });
  if (await reviewsTab.count()) await reviewsTab.first().click({ timeout: 5000 });
} catch {}
await page.waitForTimeout(1500);

await page.screenshot({ path: path.join(screenshotsDir, 'google-profile-reviews-visible.png'), fullPage: false });

let highestSelected = false;
let sortMenuVisible = false;
let sortError = null;
try {
  const sortButton = page.getByRole('button', { name: /Sort reviews|Sort/i }).first();
  await sortButton.click({ timeout: 10000 });
  await page.waitForTimeout(500);
  sortMenuVisible = true;
  await page.screenshot({ path: path.join(screenshotsDir, 'google-reviews-sort-menu-before-highest.png'), fullPage: false });
  const highest = page.getByRole('menuitemradio', { name: /Highest rating/i }).first();
  await highest.click({ timeout: 10000 });
  highestSelected = true;
  await page.waitForTimeout(2500);
} catch (e) {
  sortError = e.message;
  console.error('sort-error', e.message);
}

await page.screenshot({ path: path.join(screenshotsDir, 'google-reviews-highest-visible.png'), fullPage: false });

try {
  const sortButton = page.getByRole('button', { name: /Sort reviews|Sort/i }).first();
  await sortButton.click({ timeout: 10000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotsDir, 'google-reviews-highest-sort-menu.png'), fullPage: false });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
} catch (e) {
  console.error('sort-menu-screenshot-error', e.message);
}

async function getScrollInfo() {
  return await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')];
    const candidates = els
      .map((el, i) => ({ i, el, sh: el.scrollHeight, ch: el.clientHeight, st: getComputedStyle(el).overflowY, cls: String(el.className || ''), text: el.innerText?.slice(0, 120) || '' }))
      .filter(x => x.sh > x.ch + 300 && (x.st === 'auto' || x.st === 'scroll') && x.text.includes('Write a review'));
    const c = candidates.sort((a,b) => (b.sh-b.ch)-(a.sh-a.ch))[0];
    if (!c) return null;
    window.__fratosReviewScrollIndex = c.i;
    return { index: c.i, scrollHeight: c.sh, clientHeight: c.ch, scrollTop: c.el.scrollTop, className: c.cls, text: c.text };
  });
}

let scrollInfo = await getScrollInfo();
if (!scrollInfo) {
  scrollInfo = await page.evaluate(() => {
    const c = [...document.querySelectorAll('div')].map((el,i)=>({i,el,sh:el.scrollHeight,ch:el.clientHeight,st:getComputedStyle(el).overflowY,cls:String(el.className||''),text:el.innerText?.slice(0,120)||''}))
      .filter(x=>x.sh>x.ch+300 && (x.st==='auto'||x.st==='scroll')).sort((a,b)=>(b.sh-b.ch)-(a.sh-a.ch))[0];
    if (!c) return null;
    window.__fratosReviewScrollIndex = c.i;
    return { index:c.i, scrollHeight:c.sh, clientHeight:c.ch, scrollTop:c.el.scrollTop, className:c.cls, text:c.text };
  });
}
if (!scrollInfo) throw new Error('Could not locate Google reviews scroll container.');

await page.evaluate(() => {
  const el = [...document.querySelectorAll('div')][window.__fratosReviewScrollIndex];
  if (el) el.scrollTop = 0;
});
await page.waitForTimeout(1000);

const reviews = new Map();
const allEncountered = [];

async function expandVisibleMore() {
  return await page.evaluate(() => {
    let clicked = 0;
    const buttons = [...document.querySelectorAll('button')].filter(b => {
      const t = (b.innerText || b.textContent || '').trim();
      const aria = b.getAttribute('aria-label') || '';
      return /^More$/i.test(t) || /See more/i.test(aria) || /^See more$/i.test(t);
    });
    for (const b of buttons.slice(0, 30)) {
      try { b.click(); clicked++; } catch {}
    }
    return clicked;
  });
}

async function parseVisible() {
  return await page.evaluate(() => {
    function clean(s) { return (s || '').replace(/\u00a0/g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim(); }
    function firstText(el, sel) { return clean(el.querySelector(sel)?.innerText || el.querySelector(sel)?.textContent || ''); }
    function parseDetails(el, reviewText, ownerReplyText) {
      const raw = clean(el.innerText || '');
      const lines = raw.split('\n').map(x=>x.trim()).filter(Boolean);
      const remove = new Set(['','','','','Like','Share']);
      const out = [];
      for (const line of lines) {
        if (!line || remove.has(line)) continue;
        if (reviewText && reviewText.includes(line.slice(0, Math.min(60, line.length)))) continue;
        if (ownerReplyText && ownerReplyText.includes(line.slice(0, Math.min(60, line.length)))) continue;
        if (/^Response from the owner/i.test(line)) continue;
        if (/^Photo of /i.test(line)) continue;
        if (line === 'More') continue;
        out.push(line);
      }
      return out;
    }
    return [...document.querySelectorAll('.jftiEf[data-review-id]')].map((el, index) => {
      const id = el.getAttribute('data-review-id') || '';
      const reviewer = firstText(el, '.d4r55') || el.getAttribute('aria-label') || null;
      const reviewerMeta = firstText(el, '.RfnDt') || null;
      const ratingLabel = el.querySelector('.kvMYJc[aria-label], [role="img"][aria-label*="stars"]')?.getAttribute('aria-label') || '';
      const rating = Number((ratingLabel.match(/([0-9.]+)\s*stars?/i) || [])[1] || '') || null;
      const date = firstText(el, '.rsqaWe') || null;
      const wi = [...el.querySelectorAll('.wiI7pd')];
      let reviewNode = wi.find(n => !n.closest('.CDe7pd')) || wi[0];
      const reviewText = clean(reviewNode?.innerText || reviewNode?.textContent || '');
      const ownerNode = el.querySelector('.CDe7pd');
      let ownerReplyText = '';
      let ownerReplyDate = null;
      if (ownerNode) {
        ownerReplyText = clean(ownerNode.querySelector('.wiI7pd')?.innerText || ownerNode.querySelector('.wiI7pd')?.textContent || '');
        const m = clean(ownerNode.innerText || '').match(/Response from the owner\s+([^\n]+)/i);
        ownerReplyDate = m ? m[1].trim() : null;
      }
      const rawText = clean(el.innerText || '');
      const details = parseDetails(el, reviewText, ownerReplyText);
      return { id, reviewer, reviewerMeta, rating, ratingLabel, date, text: reviewText, ownerReply: ownerReplyText || null, ownerReplyDate, details, rawText, domIndex: index };
    });
  });
}

let lastWrittenCount = 0;
let stagnant = 0;
for (let step = 0; step < 24; step++) {
  await expandVisibleMore();
  await page.waitForTimeout(250);
  const batch = await parseVisible();
  for (const r of batch) {
    if (!r.id) continue;
    allEncountered.push({ id: r.id, reviewer: r.reviewer, date: r.date, rating: r.rating, textLength: (r.text || '').length, step });
    const written = (r.text || '').trim().length >= 8;
    if (written && !reviews.has(r.id)) reviews.set(r.id, { ...r, sourceOrder: reviews.size + 1 });
  }
  const writtenCount = reviews.size;
  if (writtenCount >= 34) break;
  if (writtenCount === lastWrittenCount) stagnant++; else stagnant = 0;
  lastWrittenCount = writtenCount;
  await page.evaluate(() => {
    const el = [...document.querySelectorAll('div')][window.__fratosReviewScrollIndex];
    if (el) el.scrollTop += Math.max(900, Math.floor(el.clientHeight * 1.35));
  });
  await page.waitForTimeout(900);
  if (stagnant >= 5 && step > 8) break;
}

await expandVisibleMore();
await page.waitForTimeout(300);
for (const r of await parseVisible()) {
  if ((r.text || '').trim().length >= 8 && r.id && !reviews.has(r.id)) reviews.set(r.id, { ...r, sourceOrder: reviews.size + 1 });
}

const uniqueWritten = [...reviews.values()];
const top30 = uniqueWritten.slice(0, 30).map((r, idx) => ({ ...r, packetIndex: idx + 1 }));
const ratingReviewCount = await page.evaluate(() => {
  const body = document.body.innerText;
  const ratingMatch = body.match(/\n(\d\.\d)\n\d[\d,]* reviews/) || body.match(/(\d\.\d)\s*\n\s*\d[\d,]* reviews/);
  const countMatch = body.match(/(\d[\d,]*) reviews/);
  const starBreakdown = [...document.querySelectorAll('[aria-label*="stars,"]')].map(el => el.getAttribute('aria-label'));
  return { rating: ratingMatch ? Number(ratingMatch[1]) : null, reviewCount: countMatch ? Number(countMatch[1].replace(/,/g,'')) : null, starBreakdown };
});

const packet = {
  restaurant: "Frato's Culinary Kitchen / Frato's Kitchen & Gaming",
  googleListingName: "Frato's Kitchen & Gaming",
  leadId: 'cec3f7af-ab8d-4785-af76-e57e743cdf25',
  siteSlug: 'fratos-culinary-kitchen',
  capturedAt: new Date().toISOString(),
  source: 'Google Maps business listing opened in browser via OpenClaw Chrome CDP',
  googleMapsUrl: page.url(),
  sortFilterRequested: 'Highest rating',
  highestFilterSelected: highestSelected,
  sortMenuWasVisible: sortMenuVisible,
  sortError,
  writtenReviewsCaptured: top30.length,
  writtenReviewsAvailableEncountered: uniqueWritten.length,
  shortageNote: top30.length >= 30 ? null : `Only ${top30.length} written reviews were encountered after selecting Highest rating and scrolling the Google Reviews panel.`,
  verifiedGoogleRating: ratingReviewCount.rating,
  verifiedGoogleReviewCount: ratingReviewCount.reviewCount,
  starBreakdownVisible: ratingReviewCount.starBreakdown,
  screenshotPaths: {
    profileReviewsVisible: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/google-profile-reviews-visible.png',
    sortMenuBeforeHighest: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/google-reviews-sort-menu-before-highest.png',
    highestVisible: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/google-reviews-highest-visible.png',
    highestSortMenu: 'restaurant-website-system/sites/fratos-culinary-kitchen/screenshots/google-reviews-highest-sort-menu.png'
  },
  collectionNotes: [
    'Google Maps listing opened in browser; Reviews tab was active.',
    'Sort control was opened and Highest rating was selected before collection.',
    'Review prose was captured from visible Google review cards; star-only cards were excluded.',
    'Owner replies were included when visible in the loaded cards.'
  ],
  reviews: top30,
  encounteredReviewDebug: allEncountered.slice(0, 100)
};

await fs.writeFile(path.join(scrapesDir, 'google-reviews-highest-30.json'), JSON.stringify(packet, null, 2));
console.log(JSON.stringify({ highestSelected, sortMenuVisible, captured: top30.length, available: uniqueWritten.length, ratingReviewCount, first: top30.slice(0,3).map(r=>({reviewer:r.reviewer,date:r.date,rating:r.rating,text:r.text.slice(0,120)})) }, null, 2));
await browser.close();
