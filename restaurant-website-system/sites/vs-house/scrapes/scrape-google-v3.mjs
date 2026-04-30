import { chromium } from 'playwright';
import fs from 'node:fs';

// Direct CID-based place URL (discovered from v2's redirect)
const PLACE_URL = 'https://www.google.com/maps/place/V\'s+House/@32.835334,-97.1951692,17z/data=!4m7!3m6!1s0x864e792bfff2c3b7:0x92caf3c9496efd9a!8m2!3d32.835334!4d-97.1951692!10e2!16s%2Fg%2F11mhysx976';
const OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.json';
const HTML_OUT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/scrapes/google.html';
const SHOT = '/Users/ethantalreja/skills/restaurant-website-system/sites/vs-house/screenshots/google-reviews.png';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  viewport: { width: 1440, height: 1100 },
  locale: 'en-US',
});
const page = await ctx.newPage();

await page.goto(PLACE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);
try { await page.click('button:has-text("Accept all"), button:has-text("Reject all")', { timeout: 3000 }); } catch {}
await page.waitForTimeout(1500);

// Click Reviews tab — try several variants
const tabClicked = await page.evaluate(() => {
  const candidates = Array.from(document.querySelectorAll('button, a'));
  const target = candidates.find((el) => /^Reviews$/i.test(el.textContent?.trim() || '') ||
                                         /\b\d+ reviews?$/i.test(el.textContent?.trim() || ''));
  if (target) { target.click(); return target.textContent.trim(); }
  return null;
});
console.log('tabClicked:', tabClicked);
await page.waitForTimeout(3500);

// Wait for at least one review element to appear
try {
  await page.waitForSelector('div.jftiEf, div[data-review-id], div.GHT2ce', { timeout: 8000 });
} catch (e) {
  console.log('no review selector matched yet');
}

// Find the scrollable reviews pane and scroll many times
for (let i = 0; i < 30; i++) {
  await page.evaluate(() => {
    const panes = Array.from(document.querySelectorAll('div.m6QErb.DxyBCb, div.m6QErb[tabindex="-1"]'));
    panes.forEach((p) => { p.scrollTop = p.scrollHeight; });
  });
  await page.waitForTimeout(700);
}

// Expand "More" buttons to get full review text
await page.evaluate(() => {
  document.querySelectorAll('button.w8nwRe.kyuRq, button[jsaction*="review.expandReview"]').forEach((b) => b.click());
});
await page.waitForTimeout(1500);

const html = await page.content();
fs.writeFileSync(HTML_OUT, html);
await page.screenshot({ path: SHOT, fullPage: false });

const data = await page.evaluate(() => {
  const txt = (el) => (el ? el.textContent.trim().replace(/\s+/g, ' ') : null);

  const placeName = txt(document.querySelector('h1.DUwDvf, h1[class*="fontHeadlineLarge"]'));
  const ratingText = txt(document.querySelector('div.F7nice span[aria-hidden="true"]')) ||
                     txt(document.querySelector('div.fontDisplayLarge'));
  const countText = txt(document.querySelector('div.F7nice span[aria-label*="reviews"]')) ||
                    txt(document.querySelector('button[aria-label*="reviews"]'));

  // Maps review item class is .jftiEf — each contains author, stars, date, body
  const items = Array.from(document.querySelectorAll('div.jftiEf, div[data-review-id]'));
  const reviews = items.map((el) => {
    const author = txt(el.querySelector('div.d4r55, .WNxzHc'));
    const stars = el.querySelector('span.kvMYJc, span[role="img"][aria-label*="star"]')?.getAttribute('aria-label') || null;
    const date = txt(el.querySelector('span.rsqaWe, span.xRkPPb'));
    const body = txt(el.querySelector('span.wiI7pd, div.MyEned span.wiI7pd'));
    const reviewId = el.getAttribute('data-review-id');
    return { reviewId, author, stars, date, body };
  }).filter((r) => r.body && r.body.length > 15);

  // Owner replies live in .CDe7pd
  const replyEls = Array.from(document.querySelectorAll('div.CDe7pd'));
  const ownerReplies = replyEls.map((el) => txt(el)).filter(Boolean);

  return { placeName, ratingText, countText, reviews, ownerReplies, url: location.href };
});

fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log('place:', data.placeName);
console.log('rating:', data.ratingText, '| count:', data.countText);
console.log('reviews:', data.reviews.length, '| ownerReplies:', data.ownerReplies.length);
await browser.close();
