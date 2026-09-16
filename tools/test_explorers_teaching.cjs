/* Bilingual editorial coverage, simulations, and actual chained reader startup. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const visual=require('../landing/js/explorers-visuals.js');
const sets=Object.fromEntries(['en','hy'].map(l=>[l,require(`../landing/content/explorers/${l}.json`)]));
const notes=['foundations','practice','professional','applications','guides'].flatMap(n=>require(`../landing/content/explorers/teaching-${n}.json`));
const studios=['core','professional'].flatMap(n=>require(`../landing/content/explorers/studios-${n}.json`));
const lectureInformed=require('../landing/content/explorers/lecture-informed.json');
assert.equal(studios.length,8);
assert.equal(new Set(studios.map(n=>n.key.split('/')[0])).size,8);
for(const studio of studios){
  for(const field of ['title','introduction','source','prompt','result','challenge','answer']){
    assert.equal(studio[field].length,2,`${studio.key} ${field}`);
    assert.match(studio[field][1],/[Ա-ֆ]/);
  }
  assert.equal(studio.steps.length,4);
  assert.equal(studio.comparisons.length,3);
  for(const pair of [...studio.steps,...studio.comparisons])for(const field of pair){assert.equal(field.length,2);assert.match(field[1],/[Ա-ֆ]/);}
}
assert.equal(lectureInformed.length,18);
assert.equal(new Set(lectureInformed.map(n=>n.key)).size,18);
for(const note of lectureInformed)for(const field of ['title','text','try','check']) {
  assert.equal(note[field].length,2,`${note.key} ${field}`);
  assert.ok(note[field].every(x=>typeof x==='string'&&x.trim()));
  assert.match(note[field][1],/[Ա-ֆ]/,`${note.key}: Armenian ${field}`);
}
assert.equal(notes.length,65);
assert.equal(new Set(notes.map(n=>n.key)).size,65);
for(const note of notes)for(const field of ['title','story','explain','example','question','answer']) {
  assert.equal(note[field].length,2,`${note.key}: ${field}`);
  assert.ok(note[field].every(x=>typeof x==='string'&&x.trim()));
  assert.match(note[field][1],/[Ա-ֆ]/,`${note.key}: Armenian ${field}`);
}
for(const lang of ['en','hy']) {
  let enriched=0,walkthroughs=0,practice=0,studioCount=0,lectureCount=0;
  for(const section of sets[lang].sections)for(const lesson of section.lessons) {
    const key=`${section.id}/${lesson.id}`;
    const n=notes.find(x=>x.key===key);
    if(lectureInformed.some(x=>x.key===key)){
      lectureCount++;
      assert.equal((lesson.html.match(/data-lecture-informed=/g)||[]).length,1,key);
      assert.match(lesson.html,/lecture-try/);
      assert.match(lesson.html,/lecture-check/);
    }
    if(studios.some(s=>s.key===key)){
      studioCount++;
      assert.equal((lesson.html.match(/data-chapter-studio=/g)||[]).length,1,key);
      assert.match(lesson.html,/studio-source/);
      assert.match(lesson.html,/studio-transfer/);
      assert.match(lesson.html,/studio-result/);
    }
    if(n) {
      enriched++;
      assert.equal((lesson.html.match(/teaching-depth:start/g)||[]).length,1,key);
      assert.match(lesson.html,/teaching-example/);
      assert.match(lesson.html,/teaching-reflection/);
    } else {assert.equal(lesson.id,'practice',key);practice++;}
    for(const match of lesson.html.matchAll(/data-teaching-slot="(\d+)"/g)) {
      walkthroughs++;
      const html=visual.render(match[1],lang);
      assert.match(html,/data-visual-diagram/);
      assert.match(html,/visual-transcript/);
      assert.equal((html.match(/data-visual-step=/g)||[]).length,4);
      assert.equal((html.match(/aria-pressed="true"/g)||[]).length,1);
      assert.doesNotMatch(html,/undefined|onclick=|<script/);
    }
  }
  assert.equal(enriched,65);assert.equal(practice,7);assert.equal(walkthroughs,14);assert.equal(studioCount,8);assert.equal(lectureCount,18);
  assert.doesNotMatch(JSON.stringify(sets[lang]),/Emergency number: 123|Շտապ համար՝ 123|name and one background cue/);
}
assert.equal(visual.render('missing','en'),'');
let generated='';
vm.runInNewContext(fs.readFileSync('tools/enrich_explorers.cjs','utf8'),{require,process:{argv:[],stdout:{write(s){generated+=s;}}}});
assert.ok(!generated.includes('@@'),'Regeneration must be idempotent');

// Exercise real click and timer handlers with a small element adapter.
for(const lang of ['en','hy']) {
  let tick=null,reduced=false;
  const listeners={};
  const nodes=new Map();
  const get=k=>{if(!nodes.has(k))nodes.set(k,{textContent:'',innerHTML:'',style:{}});return nodes.get(k);};
  const steps=Array.from({length:4},(_,n)=>({dataset:{visualStep:String(n)},setAttribute(k,v){this[k]=v;}}));
  const el={dataset:{teachingVisual:'7',lang,step:'0'},isConnected:true,querySelector:get,querySelectorAll:()=>steps};
  const window={setInterval(fn){tick=fn;return 1;},clearInterval(){tick=null;},matchMedia(){return {matches:reduced};}};
  const document={hidden:false,addEventListener(type,fn){listeners[type]=fn;}};
  vm.runInNewContext(fs.readFileSync('landing/js/explorers-visuals.js','utf8'),{window,document});
  window.EuaTeachingVisuals.bind();
  const click=(attr,step)=>{const b={dataset:{visualStep:String(step)},hasAttribute:k=>k===attr};listeners.click({target:{closest:s=>s==='button'?b:el}});};
  click('data-visual-next');assert.equal(el.dataset.step,'1');
  assert.match(get('[data-visual-diagram]').innerHTML,/width:25%/);
  click('data-visual-step',2);assert.equal(get('[data-visual-status]').textContent,'3 / 4');
  assert.equal(steps[2]['aria-pressed'],'true');
  click('data-visual-reset');assert.equal(el.dataset.step,'0');
  click('data-visual-play');assert.ok(tick);tick();assert.equal(el.dataset.step,'1');
  click('data-visual-play');assert.equal(tick,null,'Pause stops playback');
  click('data-visual-play');document.hidden=true;listeners.visibilitychange();assert.equal(tick,null);
  reduced=true;click('data-visual-play');assert.equal(tick,null,'Reduced motion never starts a timer');
  reduced=false;click('data-visual-play');window.EuaTeachingVisuals.stop();assert.equal(tick,null);
}

async function startup(lang,chapter,lesson) {
  const nodes=new Map(),handlers={};
  const node=k=>{if(!nodes.has(k))nodes.set(k,{innerHTML:'',textContent:'',dataset:{},setAttribute(){},focus(){}});return nodes.get(k);};
  const selectors=new Set(['#lesson','#reader-status','#lesson-pagination','#breadcrumbs','#course-navigation','meta[name="description"]','#access-notice']);
  const document={body:{dataset:{requiresCourseAccess:'true'},classList:{remove(){}}},documentElement:{},querySelector:s=>selectors.has(s)?node(s):null,querySelectorAll:()=>[],addEventListener(type,fn){(handlers[type]??=[]).push(fn);}};
  const window={EuaCourseAccess:Promise.resolve({allowed:true,demo:true}),addEventListener(){},scrollTo(){},clearInterval(){}};
  const location={search:`?chapter=${chapter}&lesson=${lesson}&lang=${lang}`,href:'http://localhost/course.html',origin:'http://localhost',pathname:'/course.html'};
  const context=vm.createContext({window,document,location,history:{replaceState(){},pushState(){}},URL,URLSearchParams,Intl,console,localStorage:{getItem(){return lang;},setItem(){}},sessionStorage:{getItem(){return null;},setItem(){}},fetch:async()=>({ok:true,json:async()=>sets[lang]})});
  const scripts=['explorers-learning','explorers-labs','explorers-labs-ch2','explorers-labs-ch4','explorers-labs-ch5','explorers-labs-ch6','explorers-labs-ch7','explorers-labs-ch8','explorers-visuals','explorers'];
  for(const script of scripts)vm.runInContext(fs.readFileSync(`landing/js/${script}.js`,'utf8'),context,{filename:script});
  await new Promise(resolve=>setImmediate(resolve));
  const html=node('#lesson').innerHTML;
  assert.match(html,/lesson-title/,`${lang} ${chapter}/${lesson}: reader must load with all lab modules`);
  assert.doesNotMatch(html,/data-teaching-slot=/);
  const source=sets[lang].sections.find(s=>s.id===chapter).lessons.find(l=>l.id===lesson).html;
  if(source.includes('data-teaching-slot'))assert.match(html,/data-teaching-visual=/);
  if(chapter==='5'&&lesson==='8')assert.match(html,/data-catalogue="tools"/);
}
(async()=>{
  for(const lang of ['en','hy'])for(const s of sets[lang].sections)for(const l of s.lessons)await startup(lang,s.id,l.id);
  console.log('PASS: 65 paired teaching pages, 18 bilingual lecture-informed blocks, 8 chapter studios, 7 retained practice pages, 14 walkthrough placements per language; idempotency; playback/reset/reduced motion; all 144 routes start with the real lab chain.');
})().catch(e=>{console.error(e);process.exitCode=1;});
