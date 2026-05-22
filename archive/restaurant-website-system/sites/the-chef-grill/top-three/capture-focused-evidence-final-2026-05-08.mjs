import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const baseUrl='http://127.0.0.1:3045';
const chromePath='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port=18957;
const userDataDir=join(tmpdir(),`chef-grill-top3-final-${Date.now()}`);
const outDir=new URL('./screenshots/', import.meta.url); await mkdir(outDir,{recursive:true});
const chrome=spawn(chromePath,['--headless=new',`--remote-debugging-port=${port}`,`--user-data-dir=${userDataDir}`,'--no-first-run','--disable-gpu','about:blank'],{stdio:['ignore','ignore','ignore']});
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
async function wait(){for(let i=0;i<80;i++){try{let r=await fetch(`http://127.0.0.1:${port}/json/version`); if(r.ok)return;}catch{} await sleep(100)} throw new Error('chrome no start')}
function connect(wsUrl){const ws=new WebSocket(wsUrl);let id=0;const pending=new Map();ws.addEventListener('message',e=>{const msg=JSON.parse(e.data); if(msg.id&&pending.has(msg.id)){const {resolve,reject}=pending.get(msg.id); pending.delete(msg.id); msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result??{})}}); return new Promise((resolve,reject)=>{ws.addEventListener('open',()=>resolve({send(method,params={}){const callId=++id;ws.send(JSON.stringify({id:callId,method,params}));return new Promise((resolveCall,rejectCall)=>pending.set(callId,{resolve:resolveCall,reject:rejectCall}))}, close(){ws.close()}})); ws.addEventListener('error',reject)})}
async function page(width,height,mobile=false){let res=await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(baseUrl)}`,{method:'PUT'}); let target=await res.json(); let cdp=await connect(target.webSocketDebuggerUrl); await cdp.send('Page.enable'); await cdp.send('Runtime.enable'); await cdp.send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:mobile?2:1,mobile}); await cdp.send('Emulation.setVisibleSize',{width,height}); await cdp.send('Page.navigate',{url:baseUrl}); await sleep(1200); return cdp;}
async function shot(cdp,name){const s=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true}); await writeFile(new URL(name,outDir), Buffer.from(s.data,'base64'))}
async function evalJson(cdp,expression){const r=await cdp.send('Runtime.evaluate',{returnByValue:true,expression:`JSON.stringify(${expression})`}); return JSON.parse(r.result.value)}
try{await wait(); const out={baseUrl,screenshots:[],checks:[]};
 for (const mode of ['desktop','mobile']) {
  const c=await page(mode==='desktop'?1440:390, mode==='desktop'?1050:844, mode==='mobile');
  await c.send('Runtime.evaluate',{expression:`document.querySelector('#menu')?.scrollIntoView({block:'start'});`}); await sleep(500);
  let name=`top-three-${mode}-menu-shortcut-2026-05-08.png`; await shot(c,name); out.screenshots.push(`restaurant-website-system/sites/the-chef-grill/top-three/screenshots/${name}`);
  await c.send('Runtime.evaluate',{expression:`[...document.querySelectorAll('section')].find(el=>el.innerText.includes('Google review proof'))?.scrollIntoView({block:'center'});`}); await sleep(500);
  name=`top-three-${mode}-review-proof-2026-05-08.png`; await shot(c,name); out.screenshots.push(`restaurant-website-system/sites/the-chef-grill/top-three/screenshots/${name}`);
  const data=await evalJson(c,`(()=>{const txt=document.body.innerText; const reviewCards=[...document.querySelectorAll('article')].filter(el=>el.innerText.includes('Google Review')); return {hasMenuShortcut:txt.includes('Menu shortcut')&&txt.includes('Jump straight to what guests ask for'), hasReviewProof:txt.includes('Google review proof')&&reviewCards.length>=10, hasNamesInReviewCards:reviewCards.some(el=>/Rimsha|Mubeen|Ibrahim|Yusuf|Anton|Karinna|Donna|Michelle/.test(el.innerText)), hasSaferVisitCopy:txt.includes('Order, call, or plan your visit'), horizontalOverflow:document.documentElement.scrollWidth>innerWidth};})()`);
  out.checks.push({viewport:mode,...data}); c.close();
 }
 await writeFile(new URL('../top-three-focused-check-2026-05-08.json',outDir), JSON.stringify(out,null,2)+'\n');}
finally{chrome.kill('SIGTERM'); await sleep(300); await rm(userDataDir,{recursive:true,force:true});}
