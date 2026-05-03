import { chromium } from 'playwright';
import fs from 'node:fs/promises';

// Search URL approach: open Maps for the place and try to navigate to reviews tab.
const SEARCH = 'https://www.google.com/maps/search/Winestock+Market+%26+Lounge+Woodstock+IL';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
});
const page = await ctx.newPage();

try {
  await page.goto(SEARCH, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '../screenshots/google-search-landing.png', fullPage: false });

  // Try clicking on the place result if it didn't auto-open
  // Look for the listing link
  const placeLinks = await page.$$('a[href*="/maps/place/"]');
  if (placeLinks.length) {
    await placeLinks[0].click();
    await page.waitForTimeout(4000);
  }
  await page.screenshot({ path: '../screenshots/google-place-panel.png', fullPage: false });

  // Try to click "Reviews" tab
  const reviewsTab = await page.$('button[aria-label*="Reviews"], a[aria-label*="Reviews"], button:has-text("Reviews")');
  if (reviewsTab) {
    await reviewsTab.click();
    await page.waitForTimeout(3000);
  }
  await page.screenshot({ path: '../screenshots/google-reviews-tab.png', fullPage: false });

  // Try sort -> Highest
  const sortBtn = await page.$('button[aria-label*="Sort"], button:has-text("Sort"), button:has-text("Most relevant")');
  if (sortBtn) {
    await sortBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: '../screenshots/google-sort-menu.png', fullPage: false });
    const highest = await page.$('div[role="menuitemradio"]:has-text("Highest"), div:has-text("Highest rating")');
    if (highest) {
      await highest.click();
      await page.waitForTimeout(3000);
    }
  }
  await page.screenshot({ path: '../screenshots/google-reviews-highest.png', fullPage: false });

  // Save HTML
  const html = await page.content();
  await fs.writeFile('./google-reviews-page.html', html);

  // Try to extract review text from common selectors
  const reviews = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('[data-review-id], .jftiEf, div[jsaction*="reviewerLink"]').forEach(el => {
      const text = (el.innerText || '').trim();
      if (text.length > 30) items.push(text);
    });
    return items;
  });
  await fs.writeFile('./google-reviews-extracted.json', JSON.stringify(reviews, null, 2));
  console.log('extracted', reviews.length, 'review-like blocks');
} catch (e) {
  console.error('failed:', e.message);
}

await browser.close();
