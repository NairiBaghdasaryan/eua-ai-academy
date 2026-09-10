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

const banned = [
  /START_EN\.html/i,
  /START_HY\.html/i,
  /AI_Cost_Workbook\.xlsx/i,
  /EUA_AI_Explorers_Practice_Pack/i,
  /expected_results_(EN|HY)\.txt/i,
  /LESSON\s*1:/i,
  /<p>ԳԼՈՒԽ\s*1<\/p>/,
  /Each core lesson ends with two questions/i,
  /Յուրաքանչյուր հիմնական դասի վերջում կա երկու հարց/
];

function assetPath(src) {
  return src.split(/[?#]/)[0];
}

let enRoutes;
for (const lang of ['en', 'hy']) {
  const file = path.join(root, `landing/content/explorers/${lang}.json`);
  const raw = fs.readFileSync(file, 'utf8');
  let content;
  try {
    content = JSON.parse(raw);
  } catch (error) {
    assert.fail(`${lang}.json is not valid JSON: ${error.message}`);
  }
  assert.equal(content.language, lang);
  assert.equal(content.sections.filter((s) => s.chapter).length, 8);
  assert.equal(content.useCases.length, 100);
  assert.equal(new Set(content.useCases.map((x) => x.id)).size, 100);
  assert.equal(content.tools.length, 40);
  assert.equal(content.quizzes.length, 7);
  assert.ok(content.quizzes.every((q) => q.length === 2 && q.every((pair) => pair[0] && pair[1])));

  const chapterQuizzes = content.sections
    .filter((s) => s.chapter)
    .map((s) => ({ id: s.id, quiz: s.lessons.find((l) => Number.isInteger(l.quiz))?.quiz ?? null }));
  assert.deepEqual(
    chapterQuizzes,
    [
      { id: '1', quiz: 0 },
      { id: '2', quiz: 1 },
      { id: '3', quiz: 2 },
      { id: '4', quiz: 3 },
      { id: '5', quiz: 4 },
      { id: '6', quiz: 5 },
      { id: '7', quiz: 6 },
      { id: '8', quiz: null }
    ],
    'Lessons 1-7 must expose two-question self-checks; lesson 8 must not'
  );

  const ids = content.sections.map((s) => [s.id, s.lessons.map((l) => l.id)]);
  if (enRoutes) assert.deepEqual(ids, enRoutes, 'Languages must have exactly matching routes');
  else enRoutes = ids;

  const feedback = content.sections.find((s) => s.id === 'guide-2').lessons.find((l) => l.id === '2').html;
  assert.match(feedback, /Lessons 1–7|1–7 դասեր/);
  assert.doesNotMatch(feedback, /LESSON\s*1:|<p>ԳԼՈՒԽ\s*1<\/p>/);

  const modelFamilies = content.sections.find((s) => s.id === '5').lessons.find((l) => l.id === '7').html;
  assert.doesNotMatch(modelFamilies, /microsoft-365-copilot/i);
  assert.match(modelFamilies, /product directory|գործիքների ցանկում/i);

  const productDirectory = content.sections.find((s) => s.id === '5').lessons.find((l) => l.id === '8').html;
  assert.match(productDirectory, /Microsoft Copilot/);
  assert.match(productDirectory, /Product system|Արտադրանքային համակարգ/);

  for (const section of content.sections) {
    assert.ok(section.lessons.length > 0);
    assert.equal(new Set(section.lessons.map((x) => x.id)).size, section.lessons.length);
    assert.doesNotMatch(section.title, /Creating AI Characters|Your AI Project/i);
    for (const lesson of section.lessons) {
      assert.ok(lesson.html.trim(), `${section.id}/${lesson.id} is empty`);
      assert.doesNotMatch(lesson.html, /<script|onerror=|onclick=|javascript:|file:\/\/|C:\\/i);
      assert.ok(lesson.minutes > 0);
      for (const pattern of banned) {
        assert.doesNotMatch(lesson.html, pattern, `${lang} ${section.id}/${lesson.id} matches ${pattern}`);
      }
      for (const match of lesson.html.matchAll(/src="([^"]+)"/g)) {
        const local = assetPath(match[1]);
        assert.ok(fs.existsSync(path.join(root, 'landing', local)), `${lang} missing asset ${local}`);
      }
    }
  }
  assert.ok(content.tools.every((x) => /^https:\/\//.test(x.url)));
  assert.ok(content.useCases.every((x) => ['A', 'B', 'C', 'D'].includes(x.lab)));
  if (lang === 'hy') assert.match(content.sections.find((s) => s.id === 'guide-8').lessons[0].html, /\(AI agent\)/);
}

for (const file of ['ai-explorers.html', 'styles/explorers.css', 'js/explorers.js', 'content/explorers/en.json', 'content/explorers/hy.json']) {
  assert.ok(fs.existsSync(path.join(root, 'landing', file)), file);
}

console.log('PASS: pricing edge cases, valid bilingual JSON, 8 lessons with quiz policy, no obsolete downloads, Copilot product placement, safe markup and local assets.');
