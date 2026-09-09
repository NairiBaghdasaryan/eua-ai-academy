/* No browser or external service required. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { calculateCost } = require('../landing/js/explorers.js');
const root = path.resolve(__dirname, '..');
const defaults = { input:2000, output:500, inputRate:2, outputRate:8, tasks:1000, attempts:1.2, accepted:950, reviewMinutes:2, hourlyRate:12, fixed:20 };
const r = calculateCost(defaults);
assert.equal(r.perAttempt, .008);
assert.ok(Math.abs(r.api - 9.6) < 1e-10);
assert.equal(r.review, 400);
assert.equal(r.total, 429.6);
assert.ok(Math.abs(r.perAccepted - .4522105263157895) < 1e-12);
assert.equal(calculateCost({...defaults,accepted:0}).perAccepted,null);
assert.equal(calculateCost({...defaults,accepted:1001}),null);
assert.equal(calculateCost({...defaults,tasks:0}),null);
assert.equal(calculateCost({...defaults,input:-1}),null);
assert.equal(calculateCost({...defaults,attempts:.5}),null);
assert.equal(calculateCost({...defaults,input:NaN}),null);
assert.equal(calculateCost({...defaults,output:Infinity}),null);
assert.equal(calculateCost({...defaults,inputRate:0,outputRate:0,fixed:0,reviewMinutes:0}).total,0);
assert.ok(calculateCost({...defaults,reviewMinutes:4}).total > r.total);
let en;
for (const lang of ['en','hy']) {
  const content = JSON.parse(fs.readFileSync(path.join(root,`landing/content/explorers/${lang}.json`),'utf8'));
  assert.equal(content.language,lang);
  assert.equal(content.sections.filter(s=>s.chapter).length,8);
  assert.equal(content.useCases.length,100);
  assert.equal(new Set(content.useCases.map(x=>x.id)).size,100);
  assert.equal(content.tools.length,40);
  assert.equal(content.quizzes.length,7);
  assert.ok(content.quizzes.every(q=>q.length===2 && q.every(pair=>pair[0]&&pair[1])));
  const ids = content.sections.map(s=>[s.id,s.lessons.map(l=>l.id)]);
  if (en) assert.deepEqual(ids,en,'Languages must have exactly matching routes'); else en = ids;
  for (const section of content.sections) {
    assert.ok(section.lessons.length > 0);
    assert.equal(new Set(section.lessons.map(x=>x.id)).size,section.lessons.length);
    assert.doesNotMatch(section.title,/Creating AI Characters|Your AI Project/i);
    for (const lesson of section.lessons) {
      assert.ok(lesson.html.trim(),`${section.id}/${lesson.id} is empty`);
      assert.doesNotMatch(lesson.html,/<script|onerror=|onclick=|javascript:|file:\/\/|C:\\/i);
      assert.ok(lesson.minutes > 0);
      for (const match of lesson.html.matchAll(/src="([^"]+)"/g)) assert.ok(fs.existsSync(path.join(root,'landing',match[1])),match[1]);
    }
  }
  assert.ok(content.tools.every(x=>/^https:\/\//.test(x.url)));
  assert.ok(content.useCases.every(x=>['A','B','C','D'].includes(x.lab)));
  if(lang==='hy') assert.match(content.sections.find(s=>s.id==='guide-8').lessons[0].html,/\(AI agent\)/);
}
for(const file of ['ai-explorers.html','styles/explorers.css','js/explorers.js','content/explorers/downloads/EUA_AI_Explorers_Practice_Pack_v1_1.zip','content/explorers/downloads/AI_Cost_Workbook.xlsx']) assert.ok(fs.existsSync(path.join(root,'landing',file)));
console.log('PASS: pricing edge cases, 8 chapters, 105 paired routes, 28 bilingual Q&A pairs, 100 use cases per language, 40 tools, safe markup and local assets.');
