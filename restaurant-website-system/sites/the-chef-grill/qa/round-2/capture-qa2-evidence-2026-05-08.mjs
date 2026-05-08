import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
const baseUrl=process.env.BASE_URL ?? 'http://127.0.0.1:3052';
const outDir='qa/round-2/screenshots';
await mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const shots=[];
async function screenshot(page,name){await page.screenshot({path:`${outDir}/${name}`, fullPage:false}); shots.push(`restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/${name}`);}
function rel(name){return `restaurant-website-system/sites/the-chef-grill/qa/round-2/screenshots/${name}`;}
const checks={};
try {
  const mobile=await browser.newPage({viewport:{width:390,height:844}, isMobile:true, deviceScaleFactor:2});
  await mobile.goto(baseUrl+'/',{waitUntil:'networkidle'});
  await screenshot(mobile,'qa2-mobile-hero-sticky-2026-05-08.png');
  checks.mobileHero=await mobile.evaluate(() => {
    const txt=document.body.innerText;
    const viewportBottom=visualViewport?.height ?? innerHeight;
    const quick=[...document.querySelectorAll('nav[aria-label="Mobile quick actions"] a')].map(a=>{const r=a.getBoundingClientRect(); return {text:a.textContent.trim(),href:a.href,width:Math.round(r.width),height:Math.round(r.height),bottom:Math.round(viewportBottom-r.bottom),top:Math.round(r.top),visibleWithinViewport:r.top>=0&&r.bottom<=viewportBottom}});
    const concierge=document.querySelector('button[aria-label^="Ask"]'); const cr=concierge?.getBoundingClientRect();
    return {
      hasHeroCuisine:txt.includes('Halal Turkish')&&txt.includes('Mediterranean'),
      hasProof:txt.includes('807')&&txt.includes('4.7'),
      quickActions:quick,
      quickActionsPass:quick.length===4&&quick.every(x=>x.height>=44&&x.visibleWithinViewport)&&quick.some(x=>x.href.startsWith('tel:'))&&quick.some(x=>x.href.includes('order.online'))&&quick.some(x=>x.href.includes('google.com/maps')),
      conciergeVisible:!!concierge&&cr.width>0&&cr.height>0,
      conciergeAboveSticky:!!cr&&quick.length>0 ? cr.bottom < Math.min(...quick.map(x=>x.top)) : true,
      horizontalOverflow:document.documentElement.scrollWidth>innerWidth
    };
  });
  await mobile.locator('#menu').scrollIntoViewIfNeeded(); await mobile.waitForTimeout(400);
  await screenshot(mobile,'qa2-mobile-menu-shortcuts-2026-05-08.png');
  checks.mobileMenu=await mobile.evaluate(() => {
    const chips=[...document.querySelectorAll('#menu a[href^="#"]')].map(a=>{const r=a.getBoundingClientRect(); return {text:a.textContent.trim(),href:a.getAttribute('href'),width:Math.round(r.width),height:Math.round(r.height)}});
    return {chips, chipTapTargetsPass:chips.length>=4&&chips.every(c=>c.height>=32&&c.width>=44), menuReadable:document.body.innerText.includes('King Chef')&&document.body.innerText.includes('Lahmacun'), horizontalOverflow:document.documentElement.scrollWidth>innerWidth};
  });
  await mobile.evaluate(() => {[...document.querySelectorAll('section')].find(s=>{const t=s.innerText.toLowerCase(); return t.includes('review') || t.includes('guests say') || t.includes('google');})?.scrollIntoView({block:'center'});}); await mobile.waitForTimeout(500);
  await screenshot(mobile,'qa2-mobile-review-proof-2026-05-08.png');
  checks.mobileReview=await mobile.evaluate(() => {const txt=document.body.innerText; const cards=[...document.querySelectorAll('section')].filter(s=>{const t=s.innerText.toLowerCase(); return t.includes('google')||t.includes('review')||t.includes('guests say')}).map(s=>s.innerText.slice(0,500)); return {hasAnonymousProof:txt.includes('807')||txt.includes('4.7')||txt.toLowerCase().includes('review'), hasNoFakeNames:!(txt.includes('Jane Doe')||txt.includes('John Smith')||txt.includes('Sarah')||txt.includes('Mike')), candidateText:cards[0]||'', horizontalOverflow:document.documentElement.scrollWidth>innerWidth};});
  await mobile.locator('#book').scrollIntoViewIfNeeded(); await mobile.waitForTimeout(400);
  await screenshot(mobile,'qa2-mobile-visit-ctas-2026-05-08.png');
  checks.mobileVisit=await mobile.evaluate(() => {const links=[...document.querySelectorAll('a')].map(a=>({text:a.textContent.trim().replace(/\s+/g,' '),href:a.href})); return {hasOrder:links.some(a=>a.text.toLowerCase().includes('order')&&a.href.includes('order.online')), hasMenu:links.some(a=>a.text.toLowerCase().includes('menu')&&(a.href.includes('#menu')||a.href.endsWith('/menu'))), hasDirections:links.some(a=>a.text.toLowerCase().includes('direction')&&a.href.includes('google.com/maps')), hasCall:links.some(a=>a.href.startsWith('tel:')), horizontalOverflow:document.documentElement.scrollWidth>innerWidth};});
  await mobile.close();

  const contact=await browser.newPage({viewport:{width:390,height:844}, isMobile:true, deviceScaleFactor:2});
  await contact.goto(baseUrl+'/contact',{waitUntil:'networkidle'});
  await screenshot(contact,'qa2-mobile-contact-flow-2026-05-08.png');
  checks.mobileContact=await contact.evaluate(() => {const labels=[...document.querySelectorAll('form label')].map(l=>l.textContent.trim()); const mobileNav=document.querySelector('nav[aria-label="Mobile quick actions"]'); const links=[...document.querySelectorAll('a')].map(a=>({text:a.textContent.trim().replace(/\s+/g,' '),href:a.href})); return {labels, fieldOrderPass:labels.join('|')==='Your name|Email|Subject|Message', fixedMobileQuickActionsAbsent:!mobileNav, hasClickablePhone:links.some(a=>a.href.startsWith('tel:')), hasClickableEmail:links.some(a=>a.href.startsWith('mailto:')), hasDirections:links.some(a=>a.href.includes('google.com/maps')), horizontalOverflow:document.documentElement.scrollWidth>innerWidth};});
  await contact.close();

  const desktop=await browser.newPage({viewport:{width:1440,height:900}, deviceScaleFactor:1});
  await desktop.goto(baseUrl+'/',{waitUntil:'networkidle'});
  await screenshot(desktop,'qa2-desktop-home-polish-2026-05-08.png');
  checks.desktop=await desktop.evaluate(() => {const txt=document.body.innerText; const headerLinks=[...document.querySelectorAll('header a')].map(a=>({text:a.textContent.trim(),href:a.href})); return {hasBrand:txt.includes('The Chef Grill')||txt.includes('the chef grill'), headerLinks, hasOrderHeader:headerLinks.some(a=>a.text.includes('Order')&&a.href.includes('order.online')), noHorizontalOverflow:document.documentElement.scrollWidth<=innerWidth};});
  await desktop.close();

  const summary={allPass:Object.values(checks).every(c=>!c.horizontalOverflow) && checks.mobileHero.quickActionsPass && checks.mobileHero.conciergeAboveSticky && checks.mobileMenu.chipTapTargetsPass && checks.mobileContact.fieldOrderPass && checks.mobileContact.fixedMobileQuickActionsAbsent && checks.mobileContact.hasClickablePhone && checks.mobileContact.hasClickableEmail && checks.desktop.noHorizontalOverflow};
  const out={baseUrl,screenshots:shots,checks,summary};
  await writeFile('qa/round-2/qa-round-2-checks-2026-05-08.json', JSON.stringify(out,null,2)+'\n');
  console.log(JSON.stringify(out,null,2));
} finally {
  await browser.close();
}
