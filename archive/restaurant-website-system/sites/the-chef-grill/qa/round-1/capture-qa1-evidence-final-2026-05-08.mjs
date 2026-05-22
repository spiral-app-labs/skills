import { spawn } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const baseUrl='http://127.0.0.1:3051';
const chromePath='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port=18962;
const userDataDir=join(tmpdir(),`chef-grill-qa1-final-${Date.now()}`);
const outDir=new URL('./screenshots/', import.meta.url); await mkdir(outDir,{recursive:true});
const chrome=spawn(chromePath,['--headless=new',`--remote-debugging-port=${port}`,`--user-data-dir=${userDataDir}`,'--no-first-run','--disable-gpu','about:blank'],{stdio:['ignore','ignore','ignore']});
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
async function wait(){for(let i=0;i<80;i++){try{let r=await fetch(`http://127.0.0.1:${port}/json/version`); if(r.ok)return;}catch{} await sleep(100)} throw new Error('chrome no start')}
function connect(wsUrl){const ws=new WebSocket(wsUrl);let id=0;const pending=new Map();ws.addEventListener('message',e=>{const msg=JSON.parse(e.data); if(msg.id&&pending.has(msg.id)){const {resolve,reject}=pending.get(msg.id); pending.delete(msg.id); msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result??{})}}); return new Promise((resolve,reject)=>{ws.addEventListener('open',()=>resolve({send(method,params={}){const callId=++id;ws.send(JSON.stringify({id:callId,method,params}));return new Promise((resolveCall,rejectCall)=>pending.set(callId,{resolve:resolveCall,reject:rejectCall}))}, close(){ws.close()}})); ws.addEventListener('error',reject)})}
async function page(route,width,height,mobile=false){let res=await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(baseUrl+route)}`,{method:'PUT'}); let target=await res.json(); let cdp=await connect(target.webSocketDebuggerUrl); await cdp.send('Page.enable'); await cdp.send('Runtime.enable'); await cdp.send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:mobile?2:1,mobile}); await cdp.send('Emulation.setVisibleSize',{width,height}); await cdp.send('Page.navigate',{url:baseUrl+route}); await sleep(1400); return cdp;}
async function shot(cdp,name){const s=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true}); await writeFile(new URL(name,outDir), Buffer.from(s.data,'base64'))}
async function evalJson(cdp,expression){const r=await cdp.send('Runtime.evaluate',{returnByValue:true,expression:`JSON.stringify(${expression})`}); return JSON.parse(r.result.value)}
try{await wait(); const out={baseUrl,routes:[],screenshots:[],checks:[]};
 const routeList=['/','/menu','/about','/contact'];
 for (const route of routeList) { const res=await fetch(baseUrl+route); out.routes.push({route,status:res.status,ok:res.ok}); }
 for (const [label,route] of [['home','/'],['menu','/menu'],['about','/about'],['contact','/contact']]) {
  for (const mode of ['desktop','mobile']) {
   const c=await page(route, mode==='desktop'?1440:390, mode==='desktop'?900:844, mode==='mobile');
   const name=`qa1-${mode}-${label}-2026-05-08.png`; await shot(c,name); out.screenshots.push(`restaurant-website-system/sites/the-chef-grill/qa/round-1/screenshots/${name}`);
   const data=await evalJson(c,`(()=>{const txt=document.body.innerText; const anchors=[...document.querySelectorAll('a')].map(a=>({text:(a.textContent||'').trim().replace(/\\s+/g,' '), href:a.href})); return {route:location.pathname||'/', title:document.title, hasBrand:txt.includes('The Chef Grill'), hasHalal:txt.toLowerCase().includes('halal'), hasAddress:txt.includes('812 E Higgins Rd'), hasPhone:txt.includes('3123138900')||txt.includes('(312) 313-8900'), hasGoogleProof:txt.includes('807')||txt.includes('4.7'), hasNoInternalVisible:!/public source artifacts|Preview redesign|Preview only|source artifacts|plate-template|Framer|TODO|lorem/i.test(txt), hasOrder:anchors.some(a=>/order/i.test(a.text)||a.href.includes('order.online')), hasCall:anchors.some(a=>a.href.startsWith('tel:')), hasDirections:anchors.some(a=>a.href.includes('google.com/maps')||/directions/i.test(a.text)), horizontalOverflow:document.documentElement.scrollWidth>innerWidth};})()`);
   out.checks.push({viewport:mode,...data}); c.close();
  }
 }
 const chatPayload={messages:[{role:'user',content:'Can I reserve a table for 20 and is it gluten free?'}]};
 const chatRes=await fetch(baseUrl+'/api/chat',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(chatPayload)});
 out.chat={status:chatRes.status, body:await chatRes.json()};
 await writeFile(new URL('../qa-round-1-render-check-2026-05-08.json',outDir), JSON.stringify(out,null,2)+'\n');}
finally{chrome.kill('SIGTERM'); await sleep(300); await rm(userDataDir,{recursive:true,force:true});}
