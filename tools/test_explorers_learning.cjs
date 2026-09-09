/* Renderer and reader-flow tests without browser automation or external APIs. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const learning=require('../landing/js/explorers-learning.js');
const datasets=Object.fromEntries(['en','hy'].map(lang=>[lang,require(`../landing/content/explorers/${lang}.json`)]));
for(const lang of ['en','hy']) {
  const data=datasets[lang], route=(chapter,lesson)=>`course.html?${new URLSearchParams({chapter,lesson,lang})}`;
  assert.equal(learning.examples[lang].length,8);
  assert.equal(learning.copy[lang].outcomes.length,8);
  assert.deepEqual(Object.keys(learning.copy[lang]),Object.keys(learning.copy.en));
  assert.match(learning.welcome(lang,route),/chapter-01.png/);
  for(const section of data.sections) {
    for(const lesson of section.lessons) {
      const last=section.chapter && lesson.id===section.lessons.at(-1).id;
      const initial=learning.ending(section,lesson,data,lang,route,false);
      const complete=learning.ending(section,lesson,data,lang,route,true);
      if (!last) {assert.equal(initial,'');assert.equal(complete,'');continue;}
      assert.match(initial,/data-finish-chapter=/);
      assert.ok(!initial.includes(learning.copy[lang].congrats));
      assert.ok(complete.includes(learning.copy[lang].congrats));
      assert.match(complete,/chapter-04.png/);
      assert.ok(complete.includes(learning.copy[lang].outcomes[Number(section.id)-1][1]));
      const next=data.sections.find(s=>s.chapter && Number(s.id)===Number(section.id)+1)||data.sections.find(s=>s.id==='guide-3');
      assert.ok(complete.includes(route(next.id,next.lessons[0].id)));
      const pos=learning.position(section,lesson,lang,route);
      assert.equal((pos.match(/aria-current="step"/g)||[]).length,1);
    }
    if(section.chapter) {
      const html=learning.example(section.id,lang);
      assert.ok(html.includes(learning.copy[lang].note));
      assert.match(html,/<details class="example-reveal">/);
      assert.doesNotMatch(html,/<script|onclick=|javascript:/);
    }
  }
  assert.match(learning.example('4',lang),/<table>/);
  assert.match(learning.example('6',lang),/example-workflow/);
  assert.match(learning.example('7',lang),/--bar:25%/);
}
const course=fs.readFileSync('landing/course.html','utf8');
assert.ok(course.indexOf('js/explorers-learning.js')<course.indexOf('js/explorers.js'));
for(const f of ['landing/styles/explorers-learning.css','landing/assets/explorers/chapter-01.png','landing/assets/explorers/chapter-04.png']) assert.ok(fs.existsSync(f));

// Run the actual reader event handler with a minimal document adapter.
async function readerFlow(lang) {
  const nodes=new Map(), handlers={};
  const node=key=>{if(!nodes.has(key)) nodes.set(key,{innerHTML:'',textContent:'',dataset:{},setAttribute(){},focus(){this.focused=true;}});return nodes.get(key);};
  const location={search:`?chapter=1&lesson=practice&lang=${lang}`,href:`http://localhost/course.html?chapter=1&lesson=practice&lang=${lang}`,origin:'http://localhost',pathname:'/course.html'};
  const history={replaceState(_a,_b,url){location.search=new URL(url,location.href).search;},pushState(_a,_b,url){location.search=new URL(url,location.href).search;}};
  const document={body:{dataset:{requiresCourseAccess:'true'},classList:{remove(){}}},documentElement:{},querySelector:selector=>selector==='[data-catalogue]'?null:node(selector),querySelectorAll:()=>[],addEventListener:(type,fn)=>handlers[type]=fn};
  const window={EuaLearning:learning,EuaCourseAccess:Promise.resolve({allowed:true,demo:true}),addEventListener(){},scrollTo(){}};
  const context={document,window,location,history,URL,URLSearchParams,Intl,localStorage:{getItem(){return lang;},setItem(){}},fetch:async url=>({ok:true,json:async()=>datasets[url.includes('/hy.')?'hy':'en']})};
  vm.runInNewContext(fs.readFileSync('landing/js/explorers.js','utf8'),context);
  await new Promise(resolve=>setImmediate(resolve));
  assert.match(node('#lesson').innerHTML,/data-finish-chapter="1"/);
  assert.doesNotMatch(node('#lesson').innerHTML,/chapter-celebration/);
  handlers.click({target:{closest:selector=>selector==='[data-finish-chapter]'?{dataset:{finishChapter:'1'}}:null}});
  assert.match(node('#chapter-milestone').innerHTML,/chapter-celebration/);
  assert.equal(node('#reader-status').textContent,learning.copy[lang].congrats);
  assert.ok(node('#finish-heading').focused);
  const nextLang=lang==='en'?'hy':'en';
  handlers.click({target:{closest:selector=>selector==='[data-language]'?{dataset:{language:nextLang}}:null}});
  await new Promise(resolve=>setImmediate(resolve));
  assert.ok(node('#lesson').innerHTML.includes(learning.copy[nextLang].congrats),'Milestone survives language switch within this page');
  assert.ok(node('#lesson').innerHTML.includes(`chapter=2&lesson=1&lang=${nextLang}`));
}
(async()=>{await readerFlow('en');await readerFlow('hy');console.log('PASS: bilingual examples, visual outputs, all 8 lesson endings, exact next routes, explicit completion event, focus, and language switching.');})().catch(e=>{console.error(e);process.exitCode=1;});
