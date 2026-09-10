/**
 * Enrich thin spots in Ch8 / briefs after revise-ch8-guides.js.
 * Run: node tools/enrich-ch8-gaps.js
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function load(lang) {
  return JSON.parse(fs.readFileSync(path.join(root, `landing/content/explorers/${lang}.json`), 'utf8'));
}
function save(lang, data) {
  fs.writeFileSync(path.join(root, `landing/content/explorers/${lang}.json`), JSON.stringify(data, null, 2) + '\n');
}
function set(data, sectionId, lessonId, html) {
  data.sections.find((s) => s.id === sectionId).lessons.find((l) => l.id === lessonId).html = html;
}

const patches = {
  en: {
    '8/2': [
      '<p><strong>Featured task: a research digest with a claim ledger.</strong> Start with a narrow question, date range, and allowed source types. Search broadly, but open the original source behind every important claim.</p>',
      '<p>Distinguish an <strong>initial literature scan</strong> (map themes, identify candidate sources, note gaps) from a <strong>systematic review</strong> (pre-defined inclusion criteria, documented search, dual screening when required). Do not label a quick scan as a systematic review.</p>',
      '<h3>Mini-workflow</h3>',
      '<ol><li>Collect three sources with author, publisher, date, and link.</li>',
      '<li>Draft a 120-word digest that distinguishes agreement, disagreement, and unknowns.</li>',
      '<li>Create a ledger: claim, supporting passage, source date, status, and reviewer note.</li>',
      '<li>Remove claims that the cited passage does not actually support.</li></ol>',
      '<div data-lab="claim-spot"></div>',
      '<aside class="lesson-callout"><p><strong>OUTPUT</strong></p><p>A dated digest plus a source ledger. Specify actual inputs (question, sources, dates) and output (digest + ledger)—not a generic “cited brief.”</p></aside>'
    ].join(''),
    '8/3': [
      '<p><strong>Featured task: improve writing without inventing facts.</strong> You approve any message before it is sent.</p>',
      '<div class="compare-pair"><article><strong>Email before</strong><p>Hi—workshop soon, join ASAP or miss out!!!</p></article><article><strong>Email after</strong><p>Hello colleagues—Registration is open for the 15 October workshop (Room 204, up to 20 places). A seat is confirmed after staff approval.</p></article></div>',
      '<div class="compare-pair"><article><strong>Minutes before</strong><p>People talked about AI and maybe fees.</p></article><article><strong>Minutes after</strong><p>Decision: fee remains AMD 10,000 per Notice v2. Action: Ana posts the approved announcement by Friday.</p></article></div>',
      '<div class="compare-pair"><article><strong>Plain-language before</strong><p>Capacity optimization protocols necessitate provisional enrollment contingencies.</p></article><article><strong>Plain-language after</strong><p>There are up to 20 places. Your place is confirmed only after staff approval.</p></article></div>',
      '<p><strong>Audience choice:</strong> staff intranet vs public web changes tone and disclosure, not the facts.</p>',
      '<ul><li>Factual-preservation checklist: date, time, room, capacity wording, fee, what is not stated.</li>',
      '<li>No send without a named approver of the exact text.</li></ul>',
      '<div data-lab="writing-ba"></div>'
    ].join(''),
    'guide-3/intro': [
      '<p>Four labs follow one fictional workshop so outputs can become checked inputs for later work.</p>',
      '<ul><li><strong>Lab A</strong> — verify and rewrite the announcement from Notice v2.</li>',
      '<li><strong>Lab B</strong> — analyze the eight registration rows and fees.</li>',
      '<li><strong>Lab C</strong> — present approved facts in five slides.</li>',
      '<li><strong>Lab D</strong> — prototype a draft-only supervised workflow.</li></ul>',
      '<p><strong>Dependencies.</strong> A must precede C; B must precede C. A, B, and D can otherwise be practiced independently. Every source, flawed draft, table row, and state example is on these pages—no download pack is required.</p>'
    ].join(''),
    'guide-3/1': [
      '<p>Classify each claim <em>before</em> you see a model correction. Use the governing source beside the flawed draft, then edit the announcement and run the checklist.</p>',
      '<div class="compare-pair"><article><h3>Notice v2 (source)</h3><p>15 October 2026, 14:00–16:00, Room 204. Capacity up to 20. Fee AMD 10,000. Registration open; no deadline stated. Seat confirmed after staff approval.</p></article>',
      '<article><h3>Flawed draft</h3><p>Join 40 students on 14 October. Apply by 10 October for a guaranteed free place in Room 204.</p></article></div>',
      '<div data-lab="lab-a"></div>'
    ].join(''),
    'guide-4/1': [
      '<p><strong>Purpose.</strong> Public-source search and claim checking for a news digest.</p>',
      '<p><strong>Prerequisites.</strong> Chapter 3 TRACE habits; permitted topics and date range.</p>',
      '<p><strong>Core workflow.</strong> Frame → collect items → filter → verify → named approval.</p>',
      '<p><strong>Sample set (fictional).</strong> (1) Copied press release mirrored on two sites. (2) Outdated fee from Notice v1. (3) Unsupported “guaranteed free place.” (4) Supported date from Notice v2.</p>',
      '<p><strong>Assessment.</strong> Which item would you exclude, and why? Filtering quality must be observable.</p>',
      '<p><strong>Deliverable.</strong> One-page dated digest + source ledger.</p>',
      '<details class="lesson-optional"><summary>Optional extension</summary><p>Compare two weeks of editor time and missed items.</p></details>'
    ].join('')
  },
  hy: {
    '8/2': [
      '<p><strong>Ընտրված առաջադրանք․ հետազոտական ամփոփում՝ պնդումների մատյանով։</strong> Սկսեք նեղ հարցից, ժամանակաշրջանից և թույլատրելի աղբյուրներից։ Բացեք սկզբնաղբյուրը յուրաքանչյուր կարևոր պնդման համար։</p>',
      '<p>Տարբերեք <strong>սկզբնական գրականության սկանը</strong> (թեմաներ, թեկնածու աղբյուրներ, բացեր) և <strong>համակարգված վերանայումը</strong> (նախապես սահմանված ներառման չափանիշներ, փաստաթղթավորված որոնում)։ Արագ սկանը մի անվանեք համակարգված վերանայում։</p>',
      '<h3>Մինի-հոսք</h3>',
      '<ol><li>Հավաքեք երեք աղբյուր՝ հեղինակ, հրատարակիչ, ամսաթիվ, հղում։</li>',
      '<li>Գրեք 120 բառանոց ամփոփում՝ համաձայնություն, տարաձայնություն, անհայտներ։</li>',
      '<li>Ստեղծեք մատյան․ պնդում, հատված, ամսաթիվ, կարգավիճակ, վերանայողի նշում։</li>',
      '<li>Հանեք պնդումները, որոնք հղված հատվածը չի հաստատում։</li></ol>',
      '<div data-lab="claim-spot"></div>',
      '<aside class="lesson-callout"><p><strong>ԵԼՔ</strong></p><p>Ամսաթվով ամփոփում + աղբյուրների մատյան։ Նշեք իրական մուտքերն ու ելքը՝ ոչ ընդհանուր «մեջբերված բրիֆ»։</p></aside>'
    ].join(''),
    '8/3': [
      '<p><strong>Ընտրված առաջադրանք․ բարելավել գրելը՝ առանց փաստեր հորինելու։</strong> Ուղարկումից առաջ դուք եք հաստատում հաղորդագրությունը։</p>',
      '<div class="compare-pair"><article><strong>Էլ․ նախքան</strong><p>Բարև—աշխատարան շուտով, միացեք շտապ կամ կկորցնեք!!!</p></article><article><strong>Էլ․ հետո</strong><p>Բարև գործընկերներ—Գրանցումը բաց է հոկտեմբերի 15-ի աշխատարանի համար (204 սենյակ, մինչև 20 տեղ)։ Տեղը հաստատվում է աշխատակազմի հաստատումից հետո։</p></article></div>',
      '<div class="compare-pair"><article><strong>Արձանագրություն նախքան</strong><p>Մարդիկ խոսեցին ԱԲ-ի և գուցե վճարների մասին։</p></article><article><strong>Արձանագրություն հետո</strong><p>Որոշում․ վճարը մնում է 10,000 դրամ՝ Notice v2-ով։ Գործողություն․ Անան ուրբաթից առաջ հրապարակում է հաստատված հայտարարությունը։</p></article></div>',
      '<div class="compare-pair"><article><strong>Պարզ լեզու նախքան</strong><p>Տարողության օպտիմալացման արձանագրությունները պահանջում են ժամանակավոր գրանցման պայմանականություններ։</p></article><article><strong>Պարզ լեզու հետո</strong><p>Կա մինչև 20 տեղ։ Ձեր տեղը հաստատվում է միայն աշխատակազմի հաստատումից հետո։</p></article></div>',
      '<p><strong>Լսարանի ընտրություն․</strong> ինտրանետն ու հանրային կայքը փոխում են տոնը և բացահայտումը, ոչ փաստերը։</p>',
      '<ul><li>Փաստերի պահպանման ցանկ․ ամսաթիվ, ժամ, սենյակ, տարողություն, վճար, ինչ չի նշված։</li>',
      '<li>Ուղարկում չկա առանց հենց այդ տեքստի անվանված հաստատողի։</li></ul>',
      '<div data-lab="writing-ba"></div>'
    ].join(''),
    'guide-3/intro': [
      '<p>Չորս լաբորատորիաները հետևում են մեկ հորինված աշխատարանի՝ որպեսզի ելքերը դառնան ստուգված մուտքեր հաջորդ աշխատանքի համար։</p>',
      '<ul><li><strong>Լաբորատոր A</strong> — ստուգել և վերագրել հայտարարությունը Notice v2-ից։</li>',
      '<li><strong>Լաբորատոր B</strong> — վերլուծել ութ գրանցման տողերն ու վճարները։</li>',
      '<li><strong>Լաբորատոր C</strong> — ներկայացնել հաստատված փաստերը հինգ սլայդով։</li>',
      '<li><strong>Լաբորատոր D</strong> — նախատիպել նախագիծ-միայն վերահսկվող հոսք։</li></ul>',
      '<p><strong>Կախվածություններ։</strong> A-ն պետք է նախորդի C-ին․ B-ն՝ C-ին։ A-ն, B-ն և D-ն այլապես կարող են անկախ կատարվել։ Բոլոր աղբյուրները, սխալ նախագծերը և տողերը էջում են—ներբեռնման փաթեթ պետք չէ։</p>'
    ].join(''),
    'guide-3/1': [
      '<p>Դասակարգեք յուրաքանչյուր պնդումը <em>նախքան</em> ուղղումը տեսնելը։ Համեմատեք վավեր աղբյուրը սխալ նախագծի հետ, ապա խմբագրեք հայտարարությունը և անցեք ցանկը։</p>',
      '<div class="compare-pair"><article><h3>Notice v2 (աղբյուր)</h3><p>2026 թ. հոկտեմբերի 15, 14:00–16:00, սենյակ 204։ Տարողություն մինչև 20։ Վճար 10,000 դրամ։ Գրանցումը բաց է․ վերջնաժամկետ նշված չէ։ Տեղը հաստատվում է աշխատակազմի հաստատումից հետո։</p></article>',
      '<article><h3>Սխալ նախագիծ</h3><p>Միացեք 40 ուսանողի հոկտեմբերի 14-ին։ Դիմեք մինչև հոկտեմբերի 10՝ երաշխավորված անվճար տեղի համար 204 սենյակում։</p></article></div>',
      '<div data-lab="lab-a"></div>'
    ].join(''),
    'guide-4/1': [
      '<p><strong>Նպատակ։</strong> Հանրային աղբյուրների որոնում և պնդումների ստուգում նորությունների ամփոփման համար։</p>',
      '<p><strong>Նախապայմաններ։</strong> Գլուխ 3-ի TRACE սովորույթներ․ թույլատրելի թեմաներ և ժամանակաշրջան։</p>',
      '<p><strong>Հիմնական հոսք։</strong> Շրջանակ → հավաքել → զտել → ստուգել → անվանված հաստատում։</p>',
      '<p><strong>Նմուշ հավաքածու (հորինված)։</strong> (1) Երկու կայքերում պատճենված մամուլի հաղորդագրություն։ (2) Հնացած վճար Notice v1-ից։ (3) Չհիմնավորված «երաշխավորված անվճար տեղ»։ (4) Հաստատված ամսաթիվ Notice v2-ից։</p>',
      '<p><strong>Գնահատում։</strong> Ո՞ր տարրն եք բացառում և ինչու՞։ Զտման որակը պետք է դիտարկելի լինի։</p>',
      '<p><strong>Ելք։</strong> Մեկ էջանոց ամսաթվով ամփոփում + աղբյուրների մատյան։</p>',
      '<details class="lesson-optional"><summary>Ընտրովի ընդլայնում</summary><p>Համեմատեք երկու շաբաթվա խմբագրի ժամանակն ու բաց թողնված տարրերը։</p></details>'
    ].join('')
  }
};

for (const lang of ['en', 'hy']) {
  const data = load(lang);
  for (const [key, html] of Object.entries(patches[lang])) {
    const [sectionId, lessonId] = key.split('/');
    set(data, sectionId, lessonId, html);
  }
  save(lang, data);
  console.log('Enriched gaps for', lang);
}
