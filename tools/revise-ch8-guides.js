/**
 * Revise Chapter 8 and the remaining guide sections (EN + HY).
 * Run: node tools/revise-ch8-guides.js
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const load = (lang) => JSON.parse(fs.readFileSync(path.join(root, `landing/content/explorers/${lang}.json`), 'utf8'));
const save = (lang, data) => fs.writeFileSync(path.join(root, `landing/content/explorers/${lang}.json`), JSON.stringify(data, null, 2) + '\n');
const section = (data, id) => {
  const found = data.sections.find((item) => item.id === id);
  if (!found) throw new Error(`Missing section ${id}`);
  return found;
};
const setLesson = (data, sectionId, lessonId, html, minutes = 3) => {
  const found = section(data, sectionId).lessons.find((item) => item.id === lessonId);
  if (!found) throw new Error(`Missing lesson ${sectionId}/${lessonId}`);
  found.html = html;
  found.minutes = minutes;
};
const join = (...parts) => parts.flat().join('');
const callout = (label, text) => `<aside class="lesson-callout"><p><strong>${label}</strong></p><p>${text}</p></aside>`;
const editable = (label, placeholder, rows = 2) => `<label class="prompt-field">${label}<textarea rows="${rows}" placeholder="${placeholder}"></textarea></label>`;

const ch8 = {
  en: {
    intro: join(
      '<p>This chapter is a <strong>reference library</strong>, not 100 required assignments. Browse it when you have a real task, then choose one idea that fits your time, tools, skills, and permitted information.</p>',
      '<p>A feasible choice has a known input, a concrete output, a way to check it, and a person able to review it. Skip an attractive idea when you lack reliable data, permission, or enough time to verify the result.</p>'
    ),
    '1': join(
      '<p>Use this map to jump to a category. Each destination teaches the kind of output that category should produce; it is not another copy of the 100-item catalogue.</p>',
      '<nav class="usecase-map" aria-label="Use-case categories">',
      [
        ['2', 'Research & learning', 'cited digest + claim ledger'],
        ['3', 'Writing & communication', 'checked before/after draft'],
        ['4', 'Presentations & visual design', 'annotated slide'],
        ['5', 'Video, audio & music', 'rights-aware production plan'],
        ['6', 'Personal productivity', 'realistic revised schedule'],
        ['7', 'Data & analysis', 'reproducible table + chart'],
        ['8', 'Business, marketing & sales', 'evidence-backed claim sheet'],
        ['9', 'Education, people & management', 'support material, not a people decision'],
        ['10', 'Coding, automation & agents', 'tested beginner or technical prototype'],
        ['11', 'Creative, cultural & public value', 'context-aware public artifact']
      ].map(([id, title, output]) => `<a href="?chapter=8&amp;lesson=${id}"><strong>${title}</strong><span>${output}</span></a>`),
      '</nav><div data-lab="usecase-map"></div>'
    ),
    '2': join(
      '<p><strong>Featured task: a research digest with a claim ledger.</strong> Start with a narrow question, date range, and allowed source types. Search broadly, but open the original source behind every important claim.</p>',
      '<h3>Mini-workflow</h3><ol><li>Collect three sources with author, publisher, date, and link.</li><li>Draft a 120-word digest that distinguishes agreement, disagreement, and unknowns.</li><li>Create a ledger: claim, supporting passage, source date, status, and reviewer note.</li><li>Remove claims that the cited passage does not actually support.</li></ol>',
      '<div data-lab="claim-spot"></div>',
      callout('OUTPUT', 'A dated digest plus a source ledger. A long answer with decorative citations does not pass.')
    ),
    '3': join(
      '<p><strong>Featured task: improve a real piece of writing without losing meaning.</strong> Preserve the original beside the revision so a reviewer can see every material change.</p>',
      '<div class="compare-pair"><article><strong>Before</strong><p>Workshop registration is basically open and everyone should come soon because places will probably disappear.</p></article><article><strong>After</strong><p>Registration is open for up to 20 participants. A seat is confirmed only after staff approval. Notice v2 gives no deadline.</p></article></div>',
      '<p>The revision is shorter, but its main improvement is factual: it removes pressure language and unsupported certainty. Check names, dates, numbers, tone, audience, and authority before sending.</p>',
      '<div data-lab="writing-ba"></div>'
    ),
    '4': join(
      '<p><strong>Featured task: one annotated slide.</strong> Build the message from approved facts before asking for layout. Keep Armenian words as editable text outside generated images so spelling, accessibility, and search remain under human control.</p>',
      '<article class="annotated-slide"><h3>Workshop registrations</h3><p class="slide-number">5 confirmed / 20 capacity</p><p><strong>Annotation:</strong> denominator is total capacity; source is Notice v2 + registration table.</p><p lang="hy"><strong>Հայերեն խմբագրելի տեքստ․</strong> 5 հաստատված մասնակցություն՝ 20 հնարավոր տեղից։</p></article>',
      '<h3>Repair the misleading chart</h3><p>A cropped axis makes 5 confirmed registrations look almost equal to capacity. Redraw from zero, label both values, and state that two pending requests are not confirmed.</p>',
      '<div data-lab="lab-c"></div>'
    ),
    '5': join(
      '<p>Media work is a chain, not a one-click generation. Choose the route that matches the output.</p>',
      '<div class="workflow-cards"><article><strong>Video</strong><span>brief → factual script → shot list → generated or filmed clips → edit → captions → disclosure</span></article><article><strong>Audio</strong><span>approved text → consented voice → pronunciation pass → edit → transcript → accessibility check</span></article><article><strong>Music</strong><span>original concept → lyric check → generations → human selection → rights/plan review → credit</span></article></div>',
      '<p>Do not clone a person’s voice or imitate a living artist without authorization. Keep a production log identifying synthetic elements, licensed inputs, and the person who approved publication.</p>'
    ),
    '6': join(
      '<p><strong>Featured task: repair a fictional workday.</strong> An assistant schedules nine hours of tasks into 08:30–16:30, overlaps lunch with a call, and leaves no travel or review time. The goal is not a prettier calendar; it is a feasible one.</p>',
      '<div data-lab="schedule-fix"></div>',
      '<p>Pass criteria: no overlap, fixed commitments preserved, one demanding task deferred, two short buffers, and the human owner chooses the trade-off.</p>'
    ),
    '7': join(
      '<p><strong>Featured task: check a small dataset before interpreting it.</strong></p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Workshop registrations dataset"><table><thead><tr><th>Week</th><th>Confirmed (people)</th><th>Capacity (people)</th><th>Paid (AMD)</th></tr></thead><tbody><tr><td>1</td><td>4</td><td>20</td><td>20,000</td></tr><tr><td>2</td><td>5</td><td>20</td><td>25,000</td></tr><tr><td>3</td><td>5</td><td>20</td><td>25,000</td></tr></tbody></table></div>',
      '<p>State the unit and denominator: week 3 occupancy is 5/20 = 25%, not “5%.” Paid AMD is not participant count. Three rows cannot establish a trend or cause.</p>',
      '<div data-lab="data-checks"></div>'
    ),
    '8': join(
      '<p><strong>Featured task: a business claim sheet.</strong> Separate evidence from copy before writing a campaign.</p>',
      '<div class="table-scroll" tabindex="0"><table><thead><tr><th>Proposed claim</th><th>Required evidence</th><th>Status</th><th>Allowed wording</th></tr></thead><tbody><tr><td>“Most popular workshop”</td><td>Comparable enrollment data</td><td>Missing</td><td>Reject</td></tr><tr><td>“Up to 20 places”</td><td>Notice v2 A</td><td>Supported</td><td>Use with source</td></tr><tr><td>“Guaranteed career results”</td><td>Longitudinal outcome study</td><td>Missing</td><td>Reject</td></tr></tbody></table></div>',
      '<div data-lab="claim-spot"></div><p>Sales or marketing review asks “what proves this exact sentence?” Brand fit never substitutes for substantiation.</p>'
    ),
    '9': join(
      '<p>AI can support education and management, but support material is different from a decision about a person.</p>',
      '<div class="compare-pair"><article><h3>Appropriate support</h3><ul><li>Draft practice questions from an approved lesson.</li><li>Suggest rubric wording for teacher review.</li><li>Summarize anonymous team themes.</li></ul></article><article><h3>Human decision required</h3><ul><li>Assign a final grade.</li><li>Rank job candidates.</li><li>Decide promotion, discipline, or dismissal.</li></ul></article></div>',
      '<p>For people decisions, use authorized evidence, due process, a named accountable decision-maker, and a way to challenge errors. Do not infer sensitive traits.</p>'
    ),
    '10': join(
      '<p>Choose one of two routes; both require tests.</p>',
      '<div class="compare-pair"><article><h3>Beginner route</h3><p>Ask for a formula or small webpage. Use sample data, request comments, test three normal cases and two edge cases, then explain the result in your own words.</p></article><article><h3>Technical route</h3><p>Define repository context, interfaces, permissions, test suite, logs, rollback, and code review. Give an agent the minimum tools and require approval before external changes.</p></article></div>',
      '<p>Never run unfamiliar code with secrets or production access merely because it looks plausible. A working demo is not production readiness.</p>'
    ),
    '11': join(
      '<p><strong>Featured task: Armenian cultural or public value.</strong> Start with community context, approved terminology, accessible Armenian, and the rights of people represented—not with a generic visual style.</p>',
      '<h3>Fictional emergency exercise</h3><blockquote class="lesson-source"><p>Training scenario only: water service in the fictional village of Arevik is interrupted from 10:00 to 16:00. The municipality has not announced a cause. Emergency number: 123.</p></blockquote>',
      '<p>Draft a calm Armenian notice, an English accessibility version, and 160-character SMS. Preserve uncertainty about the cause, label the village fictional, and require municipal approval. Generated imagery must not depict real victims or recognizable residents.</p>',
      callout('PUBLIC-VALUE CHECK', 'Correct language, source fidelity, accessibility, cultural context, and accountable approval matter more than novelty.')
    ),
    '12': join(
      '<p>These are <strong>optional walkthroughs</strong>, not additional required projects. Each shows the same correction loop.</p>',
      [
        ['Research digest', 'three dated articles', 'source-only digest prompt', 'draft repeats one press release twice', 'deduplicate and add an independent source', '120-word digest + ledger'],
        ['Announcement', 'Notice v2', 'plain-language prompt', 'draft invents a deadline', 'classify claims and remove unsupported text', 'approved bilingual announcement'],
        ['Registration slide', '8-row table', 'five-slide outline prompt', 'pending counted as confirmed', 'restore status filter and denominator', 'annotated five-slide deck'],
        ['Public SMS', 'fictional emergency facts', 'short Armenian message prompt', 'model invents the cause', 'state cause unknown and add reviewer', 'approved SMS + disclosure']
      ].map(([name, input, prompt, intermediate, correction, finished]) => `<details class="lesson-optional"><summary>${name}</summary><ol><li><strong>Input:</strong> ${input}</li><li><strong>Prompt:</strong> ${prompt}</li><li><strong>Intermediate:</strong> ${intermediate}</li><li><strong>Correction:</strong> ${correction}</li><li><strong>Finished:</strong> ${finished}</li></ol></details>`)
    ),
    '13': join(
      '<p>There is no second tool-link table here. Tool availability, pricing, privacy terms, and Armenian support change too quickly to maintain duplicate lists.</p>',
      '<p>Use the maintained <a href="?chapter=5&amp;lesson=8">curated product directory in Chapter 5, Lesson 8</a>. Start with approved tools, check the review date and official source, then test your exact task with permitted data.</p>'
    ),
    '14': join(
      '<p>The catalogue below is the guide website for all 100 ideas. Search by task or tool, filter by category, open an entry for its inputs and expected output, and follow its related practice lab.</p>',
      '<div data-lab="catalogue-exercise"></div>',
      '<p>No download pack is required: the maintained catalogue and all practice inputs are on this site.</p>'
    ),
    '15': join(
      '<p>Choose <strong>one</strong> feasible task. Define the input you are permitted to use, the exact output, one observable acceptance test, and the named reviewer.</p>',
      '<div data-lab="catalogue-exercise"></div>',
      '<p>“I lack the data, permission, time, or qualified reviewer” is a valid rejection—not a failure. Choose a lower-risk task instead.</p>'
    )
  },
  hy: {
    intro: '<p>Այս գլուխը <strong>տեղեկատու գրադարան</strong> է, ոչ թե 100 պարտադիր առաջադրանք։ Իրական կարիք ունենալիս ընտրեք մեկ գաղափար, որը համապատասխանում է ձեր ժամանակին, գործիքներին, հմտություններին և թույլատրված տեղեկությանը։</p><p>Իրագործելի ընտրությունն ունի հայտնի մուտք, հստակ ելք, ստուգման եղանակ և վերանայող մարդ։ Եթե չունեք վստահելի տվյալ, թույլտվություն կամ ստուգման ժամանակ, հրաժարվեք առաջադրանքից։</p>',
    '1': join('<p>Սեղմեք խմբի վրա՝ անցնելու համապատասխան դասին։ Յուրաքանչյուր ուղղություն նշում է ստացվող ելքը և չի կրկնում 100 կետանոց ցանկը։</p><nav class="usecase-map" aria-label="Կիրառման խմբեր">',
      [['2','Հետազոտություն և ուսուցում','հղումներով ամփոփագիր + պնդումների մատյան'],['3','Գրել և հաղորդակցություն','ստուգված մինչ/հետո նախագիծ'],['4','Ներկայացումներ և դիզայն','ծանոթագրված սլայդ'],['5','Տեսանյութ, ձայն և երաժշտություն','իրավունքները հաշվի առնող արտադրական պլան'],['6','Անձնական արդյունավետություն','իրատեսական վերանայված օրակարգ'],['7','Տվյալներ և վերլուծություն','վերարտադրելի աղյուսակ + գծապատկեր'],['8','Բիզնես, մարքեթինգ և վաճառք','ապացույցով պնդումների թերթ'],['9','Կրթություն, մարդիկ և կառավարում','օժանդակ նյութ, ոչ մարդու մասին որոշում'],['10','Կոդ, ավտոմատացում և գործակալներ','ստուգված սկսնակ կամ տեխնիկական նախատիպ'],['11','Մշակույթ և հանրային արժեք','համատեքստը հարգող հանրային նյութ']].map(([id,title,output])=>`<a href="?chapter=8&amp;lesson=${id}"><strong>${title}</strong><span>${output}</span></a>`),
      '</nav><div data-lab="usecase-map"></div>'),
    '2': '<p><strong>Կենտրոնական առաջադրանք․ հետազոտական ամփոփագիր և պնդումների մատյան։</strong> Սահմանեք նեղ հարց, ժամանակահատված և թույլատրելի աղբյուրներ։ Յուրաքանչյուր կարևոր պնդման համար բացեք սկզբնաղբյուրը։</p><ol><li>Գրանցեք երեք աղբյուրի հեղինակին, հրապարակողին, ամսաթվին և հղմանը։</li><li>120 բառով տարբերակեք համաձայնությունը, հակասությունը և անհայտը։</li><li>Մատյանում պահեք պնդումը, հաստատող հատվածը, ամսաթիվը, կարգավիճակը և վերանայողի նշումը։</li><li>Հեռացրեք չհաստատվող պնդումները։</li></ol><div data-lab="claim-spot"></div>' + callout('ԵԼՔ','Ամսաթվով ամփոփագիր և աղբյուրների մատյան։ Դեկորատիվ հղումները բավարար չեն։'),
    '3': '<p><strong>Կենտրոնական առաջադրանք․ բարելավել տեքստը՝ առանց իմաստը կորցնելու։</strong> Բնագիրը պահեք խմբագրման կողքին։</p><div class="compare-pair"><article><strong>Մինչև</strong><p>Գրանցումը բաց է, և բոլորը շուտ գան, որովհետև տեղերը հավանաբար կվերջանան։</p></article><article><strong>Հետո</strong><p>Գրանցումը բաց է մինչև 20 մասնակցի համար։ Տեղը հաստատվում է միայն աշխատակազմի հաստատումից հետո։ Notice v2-ում վերջնաժամկետ չկա։</p></article></div><p>Ստուգեք անունները, ամսաթվերը, թվերը, տոնը, լսարանը և հրապարակման իրավասությունը։</p><div data-lab="writing-ba"></div>',
    '4': '<p><strong>Կենտրոնական առաջադրանք․ մեկ ծանոթագրված սլայդ։</strong> Հայերեն բառերը պահեք գեներացված պատկերից դուրս՝ որպես խմբագրելի տեքստ։</p><article class="annotated-slide"><h3>Աշխատարանի գրանցումներ</h3><p class="slide-number">5 հաստատված / 20 տեղ</p><p><strong>Նշում․</strong> հայտարարը ամբողջ տարողությունն է․ աղբյուր՝ Notice v2 + գրանցումների աղյուսակ։</p><p><strong>Խմբագրելի հայերեն․</strong> 5 հաստատված մասնակցություն՝ 20 հնարավոր տեղից։</p></article><h3>Ուղղեք մոլորեցնող գծապատկերը</h3><p>Կտրված առանցքը 5 գրանցումը գրեթե հավասար է ցույց տալիս 20 տեղին։ Սկսեք զրոյից, նշեք երկու թիվը և գրեք, որ երկու սպասող դիմում դեռ հաստատված չէ։</p><div data-lab="lab-c"></div>',
    '5': '<p>Մեդիա աշխատանքը շղթա է, ոչ մեկ սեղմումով ստեղծում։</p><div class="workflow-cards"><article><strong>Տեսանյութ</strong><span>ամփոփագիր → ստուգված սցենար → կադրերի պլան → տեսահոլովակներ → մոնտաժ → ենթագրեր → բացահայտում</span></article><article><strong>Ձայն</strong><span>հաստատված տեքստ → համաձայնեցված ձայն → արտասանության ստուգում → մոնտաժ → տառադարձում</span></article><article><strong>Երաժշտություն</strong><span>բնօրինակ գաղափար → բառերի ստուգում → տարբերակներ → մարդկային ընտրություն → իրավունքների ստուգում</span></article></div><p>Առանց թույլտվության մի կրկնօրինակեք մարդու ձայնը կամ կենդանի արվեստագետի ոճը։ Պահեք արտադրության մատյան։</p>',
    '6': '<p><strong>Կենտրոնական առաջադրանք․ ուղղել հորինված աշխատանքային օրը։</strong> Օգնականը ինը ժամ գործ է տեղադրել 08:30–16:30-ում, ճաշը համընկնում է զանգի հետ, իսկ ճանապարհի և ստուգման ժամանակ չկա։</p><div data-lab="schedule-fix"></div><p>Չափանիշներ․ համընկնում չկա, ֆիքսված հանդիպումները պահպանված են, մեկ ծանր գործ հետաձգված է, կա երկու կարճ պահուստ, իսկ փոխզիջումը ընտրում է մարդը։</p>',
    '7': '<p><strong>Կենտրոնական առաջադրանք․ մեկնաբանելուց առաջ ստուգել փոքր տվյալաշարը։</strong></p><div class="table-scroll" tabindex="0"><table><thead><tr><th>Շաբաթ</th><th>Հաստատված (մարդ)</th><th>Տարողություն (մարդ)</th><th>Վճարված (դրամ)</th></tr></thead><tbody><tr><td>1</td><td>4</td><td>20</td><td>20,000</td></tr><tr><td>2</td><td>5</td><td>20</td><td>25,000</td></tr><tr><td>3</td><td>5</td><td>20</td><td>25,000</td></tr></tbody></table></div><p>Նշեք միավորը և հայտարարը․ 3-րդ շաբաթվա զբաղվածությունը 5/20 = 25% է, ոչ «5%»։ Դրամը մարդկանց քանակ չէ, իսկ երեք տողը պատճառ չի ապացուցում։</p><div data-lab="data-checks"></div>',
    '8': '<p><strong>Կենտրոնական առաջադրանք․ բիզնես պնդումների թերթ։</strong> Գովազդային տեքստից առաջ առանձնացրեք ապացույցը։</p><div class="table-scroll" tabindex="0"><table><thead><tr><th>Պնդում</th><th>Պահանջվող ապացույց</th><th>Կարգավիճակ</th><th>Թույլատրելի ձև</th></tr></thead><tbody><tr><td>«Ամենատարածված աշխատարան»</td><td>Համադրելի գրանցումներ</td><td>Բացակայում է</td><td>Մերժել</td></tr><tr><td>«Մինչև 20 տեղ»</td><td>Notice v2 A</td><td>Հաստատված</td><td>Օգտագործել աղբյուրով</td></tr><tr><td>«Երաշխավորված կարիերա»</td><td>Երկարաժամկետ ուսումնասիրություն</td><td>Բացակայում է</td><td>Մերժել</td></tr></tbody></table></div><div data-lab="claim-spot"></div><p>Բրենդին համապատասխանելը չի փոխարինում ապացույցին։</p>',
    '9': '<p>ԱԲ-ը կարող է աջակցել կրթությանը և կառավարմանը, բայց նյութ ստեղծելը մարդու մասին որոշում չէ։</p><div class="compare-pair"><article><h3>Պատշաճ աջակցություն</h3><ul><li>Հաստատված դասից փորձնական հարցեր։</li><li>Ռուբրիկի ձևակերպման առաջարկ ուսուցչին։</li><li>Անանուն թիմային թեմաների ամփոփում։</li></ul></article><article><h3>Մարդու որոշում</h3><ul><li>Վերջնական գնահատական։</li><li>Թեկնածուների դասակարգում։</li><li>Առաջխաղացում, կարգապահություն կամ ազատում։</li></ul></article></div><p>Մարդկանց մասին որոշումների համար պետք են թույլատրված ապացույց, բողոքարկման ուղի և անունով պատասխանատու որոշող։</p>',
    '10': '<p>Ընտրեք երկու ուղիներից մեկը․ երկուսն էլ թեստեր են պահանջում։</p><div class="compare-pair"><article><h3>Սկսնակ ուղի</h3><p>Խնդրեք բանաձև կամ փոքր կայք, կիրառեք փորձնական տվյալ, ստուգեք երեք սովորական և երկու եզրային դեպք, ապա ձեր բառերով բացատրեք արդյունքը։</p></article><article><h3>Տեխնիկական ուղի</h3><p>Սահմանեք շտեմարանի համատեքստը, միջերեսները, թույլտվությունները, թեստերը, մատյանները, վերադարձը և կոդի վերանայումը։</p></article></div><p>Անծանոթ կոդը մի գործարկեք գաղտնիքներով կամ արտադրական հասանելիությամբ։ Աշխատող ցուցադրությունը դեռ արտադրական պատրաստություն չէ։</p>',
    '11': '<p><strong>Կենտրոնական առաջադրանք․ հայկական մշակութային կամ հանրային արժեք։</strong> Սկսեք համայնքի համատեքստից, հաստատված եզրաբանությունից, մատչելի հայերենից և ներկայացված մարդկանց իրավունքներից։</p><h3>Հորինված արտակարգ վարժություն</h3><blockquote class="lesson-source"><p>Միայն ուսումնական սցենար․ հորինված Արևիկ գյուղում ջրամատակարարումը դադարեցված է 10:00–16:00։ Համայնքը պատճառ չի հայտնել։ Շտապ համար՝ 123։</p></blockquote><p>Գրեք հանգիստ հայերեն ծանուցում, անգլերեն մատչելի տարբերակ և 160 նիշանոց SMS։ Պատճառը պահեք անհայտ, գյուղը նշեք հորինված և պահանջեք համայնքի հաստատում։</p>' + callout('ՀԱՆՐԱՅԻՆ ԱՐԺԵՔ','Ճիշտ լեզուն, աղբյուրին հավատարմությունը, մատչելիությունը և պատասխանատու հաստատումը նորույթից կարևոր են։'),
    '12': join('<p>Սրանք <strong>ընտրովի քայլային օրինակներ</strong> են։ Յուրաքանչյուրը ցույց է տալիս ուղղման նույն օղակը։</p>',
      [['Հետազոտական ամփոփագիր','երեք ամսաթվով հոդված','միայն աղբյուրով ամփոփելու հրահանգ','նախագիծը կրկնում է նույն հաղորդագրությունը','հեռացնել կրկնությունը և ավելացնել անկախ աղբյուր','120 բառ + մատյան'],['Հայտարարություն','Notice v2','պարզ լեզվի հրահանգ','հորինված վերջնաժամկետ','դասակարգել և հեռացնել','հաստատված երկլեզու հայտարարություն'],['Գրանցումների սլայդ','8 տող','հինգ սլայդի հրահանգ','սպասողները հաշվված են որպես հաստատված','վերականգնել զտիչն ու հայտարարը','ծանոթագրված 5 սլայդ'],['Հանրային SMS','հորինված արտակարգ փաստեր','կարճ հայերեն հաղորդագրություն','հորինված պատճառ','նշել անհայտ պատճառը և վերանայողին','հաստատված SMS + բացահայտում']].map(([name,input,prompt,intermediate,correction,finished])=>`<details class="lesson-optional"><summary>${name}</summary><ol><li><strong>Մուտք․</strong> ${input}</li><li><strong>Հրահանգ․</strong> ${prompt}</li><li><strong>Միջանկյալ․</strong> ${intermediate}</li><li><strong>Ուղղում․</strong> ${correction}</li><li><strong>Վերջնական․</strong> ${finished}</li></ol></details>`)),
    '13': '<p>Այստեղ առանձին գործիքների հղումների աղյուսակ չկա։ Հասանելիությունը, գները, գաղտնիության պայմանները և հայերենի աջակցությունը արագ փոխվում են։</p><p>Օգտագործեք <a href="?chapter=5&amp;lesson=8">Գլուխ 5, դաս 8-ի պահպանվող արտադրանքային ցանկը</a>։ Սկսեք հաստատված գործիքներից, ստուգեք վերանայման ամսաթիվն ու պաշտոնական աղբյուրը, ապա փորձարկեք թույլատրված տվյալներով։</p>',
    '14': '<p>Ստորև ուղեցույց-կայքը ներառում է բոլոր 100 գաղափարները։ Որոնեք առաջադրանքով կամ գործիքով, զտեք խմբով, բացեք մուտքերն ու սպասվող ելքը և անցեք համապատասխան լաբին։</p><div data-lab="catalogue-exercise"></div><p>Ներբեռնման փաթեթ պետք չէ․ ցանկն ու բոլոր վարժությունների մուտքերն այս կայքում են։</p>',
    '15': '<p>Ընտրեք <strong>մեկ</strong> իրագործելի առաջադրանք։ Նշեք թույլատրված մուտքը, հստակ ելքը, մեկ դիտարկելի ընդունման չափանիշ և անունով վերանայողին։</p><div data-lab="catalogue-exercise"></div><p>«Չունեմ տվյալ, թույլտվություն, ժամանակ կամ որակավորված վերանայող»՝ վավեր մերժում է։ Ընտրեք ավելի ցածր ռիսկով գործ։</p>'
  }
};

const guide3 = {
  en: {
    intro: '<p>Four labs follow one fictional workshop: Lab A corrects the notice, Lab B checks registrations, Lab C presents those approved facts, and Lab D turns the process into a supervised workflow. A must precede C; B must precede C. A, B, and D can otherwise be practiced independently. Every source, flawed example, and sample row is on the page—no download is required.</p>',
    '1': '<p>Classify claims before rewriting. Compare the governing source with the flawed draft side by side, then edit the announcement and run the checklist.</p><div data-lab="lab-a"></div>',
    '2': '<p>Use the eight visible rows. Confirm the <code>status = confirmed</code> filter, calculate fees/paid/outstanding, then add a variation with duplicate R04 and explain why aggregation must stop until deduplicated.</p><div data-lab="lab-b"></div>',
    '3': '<p>Build a five-slide briefing from Notice v2 and Lab B: 1) purpose and source, 2) registrations, 3) fee status, 4) pending review, 5) decision. One supplied slide uses a cropped axis and counts pending requests as confirmed; repair both problems.</p><div data-lab="lab-c"></div>',
    '4': '<p>Simulate received → invalid/duplicate/awaiting_review → approved. Approval belongs to an exact draft version: editing an approved draft invalidates approval and returns it to awaiting_review. No message is sent in this lab.</p><div data-lab="lab-d"></div>'
  },
  hy: {
    intro: '<p>Չորս լաբերը հետևում են մեկ հորինված աշխատարանի․ A-ն ուղղում է ծանուցումը, B-ն ստուգում է գրանցումները, C-ն ներկայացնում է հաստատված փաստերը, D-ն ստեղծում է վերահսկվող հոսք։ A-ն և B-ն պետք է նախորդեն C-ին, իսկ մյուս դեպքում A, B և D-ն անկախ են։ Բոլոր աղբյուրներն ու տողերը էջում են․ ներբեռնում պետք չէ։</p>',
    '1': '<p>Նախ դասակարգեք պնդումները, ապա վերագրեք։ Կողք կողքի համեմատեք վավեր աղբյուրն ու սխալ նախագիծը, խմբագրեք հայտարարությունը և անցեք ստուգաթերթը։</p><div data-lab="lab-a"></div>',
    '2': '<p>Օգտագործեք էջի ութ տողը։ Հաստատեք <code>status = confirmed</code> զտիչը, հաշվեք վճարը, վճարվածն ու պարտքը, ապա ավելացրեք կրկնված R04 և բացատրեք՝ ինչու հաշվարկը պետք է կանգնի մինչև կրկնազտումը։</p><div data-lab="lab-b"></div>',
    '3': '<p>Կազմեք հինգ սլայդ․ 1) նպատակ և աղբյուր, 2) գրանցումներ, 3) վճարներ, 4) սպասող ստուգում, 5) որոշում։ Տրված սխալ սլայդը կտրում է առանցքը և սպասողներին հաստատված է հաշվում․ ուղղեք երկուսն էլ։</p><div data-lab="lab-c"></div>',
    '4': '<p>Մոդելավորեք received → invalid/duplicate/awaiting_review → approved։ Հաստատումը վերաբերում է նախագծի ճշգրիտ տարբերակին․ փոփոխությունը չեղարկում է հաստատումը։ Այս լաբը ոչինչ չի ուղարկում։</p><div data-lab="lab-d"></div>'
  }
};

const cases = {
  en: [
    ['News intelligence brief','Public-source search and claim checking','Approved topics, source policy, date range','One-page dated digest + source ledger','Open every decisive source; zero unsupported claims','Compare two weeks of editor time and missed items'],
    ['Academic literature scan','Evidence mapping, not a systematic review','Research question, inclusion criteria, database access','Evidence table + explicit gap statement','Verify DOI/metadata and read the three decisive papers','Add a documented exclusion review'],
    ['Executive presentation','Turn approved analysis into a decision','Audience, decision, source pack, brand template','Five-slide deck + source notes','Every number has source and denominator','Rehearse a two-minute version with a skeptical reviewer'],
    ['Short educational film','Explain one concept in 90 seconds','Learning objective, checked script, consented/rights-cleared assets','Captioned video + production log','Facts, continuity, consent, captions all pass','Create audio description and a low-bandwidth version'],
    ['AI-assisted song','Create an original mnemonic','Original concept, lyric brief, prohibited references','Audio draft + lyrics + AI-use note','Pronunciation, originality, current license checked','Test recall with learners; do not imitate an artist'],
    ['Data-analysis copilot','Find reproducible patterns','Data dictionary, de-identified file, analysis questions','Notebook/report with units and assumptions','Recalculate key values and inspect missing data','Have a second analyst reproduce from raw input'],
    ['Course-design assistant','Align outcomes, practice, and assessment','Learner profile, prerequisites, hours, standards','Aligned lesson plan + assessment rubric','Faculty confirms validity, load, inclusion','Pilot one activity and revise from learner evidence'],
    ['Marketing campaign studio','Develop substantiated variants','Audience evidence, approved claims, offer, channels','Campaign kit + claim sheet + test plan','Every public claim has evidence and owner','Run an accessibility and stereotype review'],
    ['Document automation','Create reviewed drafts from forms','Approved template, schema, sample/invalid records','Draft-only workflow + exception log','Missing/duplicate inputs stop; no automatic send','Test retry, rollback, and changed-template approval'],
    ['Grounded knowledge assistant','Answer from an approved corpus','Current policies, owners, versions, access rules','Pilot + evaluation set + escalation route','Citation supports answer; unknowns route to owner','Red-team outdated and access-restricted questions'],
    ['Supervised AI agent','Coordinate bounded multi-step work','Goal, allowed tools, test data, budget, stop rules','Sandbox demo + state log + incident playbook','Approval before external/irreversible action','Test prompt injection, timeout, duplicate, rollback'],
    ['Armenian public-information service','Provide accessible Armenian without losing precision','Official bilingual sources, terminology, escalation contacts','Bilingual FAQ + disclosure + review record','Names, dates, legal meaning, register, links pass','Community language review and screen-reader test']
  ],
  hy: [
    ['Նորությունների տեղեկանք','Հանրային աղբյուրների որոնում և պնդումների ստուգում','Հաստատված թեմաներ, աղբյուրների կանոն, ժամանակահատված','Մեկ էջանոց ամփոփագիր + աղբյուրների մատյան','Բացել բոլոր որոշիչ աղբյուրները, զրո չհիմնավորված պնդում','Համեմատել խմբագրի երկու շաբաթվա ժամանակն ու բաց թողած նյութերը'],
    ['Ակադեմիական գրականության դիտարկում','Ապացույցների քարտեզ, ոչ համակարգված ակնարկ','Հարց, ներառման չափանիշ, շտեմարանների մուտք','Ապացույցների աղյուսակ + բացի պնդում','Ստուգել DOI-ն և կարդալ երեք որոշիչ հոդված','Ավելացնել բացառումների փաստաթղթավորված վերանայում'],
    ['Ղեկավար ներկայացում','Հաստատված վերլուծությունից որոշում','Լսարան, որոշում, աղբյուրներ, բրենդի ձևանմուշ','5 սլայդ + աղբյուրների նշումներ','Յուրաքանչյուր թիվ ունի աղբյուր և հայտարար','Փորձարկել 2 րոպեանոց տարբերակը քննադատ վերանայողի հետ'],
    ['Կարճ ուսումնական ֆիլմ','90 վայրկյանում բացատրել մեկ հասկացություն','Նպատակ, ստուգված սցենար, իրավունքներով նյութ','Ենթագրերով տեսանյութ + արտադրության մատյան','Փաստ, շարունակականություն, համաձայնություն, ենթագրեր','Ավելացնել ձայնային նկարագրություն և թեթև տարբերակ'],
    ['ԱԲ-ով երգ','Ստեղծել բնօրինակ հիշեցնող երգ','Բնօրինակ գաղափար, բառերի ամփոփագիր, արգելված հղումներ','Ձայն + բառեր + ԱԲ նշում','Արտասանություն, ինքնատիպություն, լիցենզիա','Փորձարկել հիշողությունը՝ առանց արվեստագետի նմանակման'],
    ['Տվյալների վերլուծության օգնական','Գտնել վերարտադրելի օրինաչափություններ','Տվյալների բառարան, անանուն ֆայլ, հարցեր','Հաշվետվություն՝ միավորներով և ենթադրություններով','Վերահաշվել առանցքային արժեքները','Երկրորդ վերլուծողը վերարտադրում է հում մուտքից'],
    ['Դասընթացի դիզայնի օգնական','Համադրել արդյունքը, վարժությունը և գնահատումը','Սովորողի նկարագիր, նախապայմաններ, ժամեր, չափորոշիչ','Դասի պլան + գնահատման ռուբրիկ','Դասախոսը ստուգում է վավերությունն ու ներառականությունը','Փորձարկել մեկ վարժություն և վերանայել'],
    ['Մարքեթինգային ստուդիա','Ստեղծել հիմնավորված տարբերակներ','Լսարանի ապացույց, հաստատված պնդումներ, առաջարկ, ալիքներ','Արշավ + պնդումների թերթ + թեստ','Յուրաքանչյուր պնդում ունի ապացույց և պատասխանատու','Մատչելիության և կարծրատիպերի ստուգում'],
    ['Փաստաթղթերի ավտոմատացում','Ձևերից ստեղծել վերանայվող նախագծեր','Հաստատված ձևանմուշ, սխեմա, փորձնական գրառումներ','Միայն նախագիծ + բացառությունների մատյան','Պակաս/կրկնվող մուտքը կանգ է, ավտոուղարկում չկա','Փորձարկել կրկնումը, վերադարձը և նոր ձևանմուշը'],
    ['Աղբյուրներով գիտելիքի օգնական','Պատասխանել հաստատված կորպուսից','Արդիական կանոններ, պատասխանատուներ, տարբերակներ, մուտք','Փորձարկում + գնահատման հավաքածու + ուղղորդում','Հղումը հաստատում է պատասխանը','Փորձարկել հնացած և սահմանափակ հարցեր'],
    ['Վերահսկվող ԱԲ գործակալ','Համակարգել սահմանափակ բազմաքայլ գործ','Նպատակ, գործիքներ, փորձնական տվյալ, բյուջե, կանգառ','Մեկուսացված ցուցադրում + վիճակի մատյան','Հաստատում արտաքին/անդառնալի գործողությունից առաջ','Փորձարկել ներմուծում, ընդհատում, կրկնում, վերադարձ'],
    ['Հայերեն հանրային ծառայություն','Մատչելի հայերեն՝ առանց ճշգրտությունը կորցնելու','Պաշտոնական երկլեզու աղբյուրներ, եզրաբանություն, կապեր','Երկլեզու FAQ + բացահայտում + ստուգում','Անուն, ամսաթիվ, իրավական իմաստ, ոճ, հղումներ','Համայնքային լեզվի և էկրանակարդիչի ստուգում']
  ]
};

function briefHtml(lang, item) {
  const [title, problem, prereq, deliverable, assessment, extension] = item;
  if (lang === 'en') return `<p><strong>Purpose.</strong> ${problem}.</p><p><strong>Prerequisites.</strong> ${prereq}.</p><p><strong>Core workflow.</strong> Frame → draft → verify → correct → named approval.</p><p><strong>Deliverable.</strong> ${deliverable}.</p><p><strong>Risk control.</strong> Use permitted/sample data; stop on unsupported claims, missing permission, or absent reviewer.</p>${callout('SPECIFIC ASSESSMENT', assessment + '.')}<details class="lesson-optional"><summary>Optional extension</summary><p>${extension}.</p></details>`;
  return `<p><strong>Նպատակ․</strong> ${problem}։</p><p><strong>Նախապայմաններ․</strong> ${prereq}։</p><p><strong>Հիմնական հոսք․</strong> սահմանել → նախագծել → ստուգել → ուղղել → անունով հաստատում։</p><p><strong>Ելք․</strong> ${deliverable}։</p><p><strong>Ռիսկի վերահսկում․</strong> միայն թույլատրված/փորձնական տվյալ․ կանգ չհիմնավորված պնդման, թույլտվության կամ վերանայողի բացակայության դեպքում։</p>${callout('ԿՈՆԿՐԵՏ ԳՆԱՀԱՏՈՒՄ', assessment + '։')}<details class="lesson-optional"><summary>Ընտրովի ընդլայնում</summary><p>${extension}։</p></details>`;
}

const worksheets = {
  en: {
    intro: '<p>These are on-page working sheets, not download packs. Complete only the worksheet your task needs, record evidence rather than impressions, and copy the finished text into your approved record system if required.</p>',
    '1': '<p>Score quality, sources, privacy, accessibility, integration, cost, and continuity from 1–5 with evidence. A weighted total never overrides a gate.</p><div class="worksheet-form"><h3>Pass/fail gates</h3><label><input type="checkbox"> Required facts pass the fixed test set</label><label><input type="checkbox"> Data use is permitted</label><label><input type="checkbox"> Required accessibility/language quality passes</label><label><input type="checkbox"> Export, ownership, and reviewer are known</label>' + editable('Evidence and weighted score','Record observed evidence, weights, score, and date',4) + '<p><strong>Decision:</strong> any failed gate = reject or remediate, even when the total score is high.</p></div>',
    '2': '<p>Change one thing at a time and keep the source, test cases, model/settings, and rubric fixed where possible.</p><div class="worksheet-form">' + editable('Version and hypothesis','V2: requiring a claim ledger will reduce unsupported facts') + editable('Fixed input and settings','Notice v2; same model; same test set') + editable('Observed output','Paste or summarize the observed result',4) + editable('Scores and failures','Accuracy, completeness, time; exact failures') + editable('Decision','Keep, revise, or reject—and why') + '</div>',
    '3': '<p>Use the interactive calculator in <a href="?chapter=7&amp;lesson=1">Chapter 7, Lesson 1</a>. Record input/output tokens, rates, attempts, accepted outputs, review minutes, labor rate, fixed costs, date, and source. Report both monthly total and cost per accepted output; do not copy a stale vendor price.</p>',
    '4': '<p>A useful risk register names a scenario, not only a category.</p><div class="worksheet-form">' + editable('Risk scenario','Unsupported deadline reaches applicants') + editable('Likelihood × impact and evidence','3 × 3 before controls; explain basis') + editable('Preventive/detective control','Source extraction + claim ledger + coordinator review') + editable('Owner and trigger','Coordinator; any unsupported field') + editable('Residual risk and response','1 × 3; reject and re-extract') + '</div>',
    '5': '<h3>Short disclosure</h3><p>“AI assisted with the initial draft. [Name/role] checked all claims against [sources] and approved the final text.”</p><h3>Full disclosure record</h3><div class="worksheet-form">' + editable('Task, date, tool/model','Include version when visible') + editable('Data supplied','Name source and sensitivity') + editable('AI contribution','Drafting, translation, analysis, code…') + editable('Human verification and changes','Who checked what and corrected which failures',3) + editable('Known limits and responsible person','Remaining uncertainty and final owner') + '</div>',
    '6': '<p>This canvas is optional. Begin with the gate question: <strong>Do we need AI?</strong> If a rule, spreadsheet, search, or human conversation is simpler and safer, choose it.</p><div class="worksheet-form">' + editable('Do we need AI? Why?','Compare with the non-AI baseline') + editable('User, problem, desired output','Name the actual beneficiary and artifact') + editable('Inputs, permission, human checkpoints','State prohibited data and approval') + editable('Evaluation, threshold, failure response','Test set, pass bar, rollback') + editable('Owner and review date','Named accountable person and date') + '</div>'
  },
  hy: {
    intro: '<p>Սրանք էջում լրացվող աշխատանքային թերթեր են, ոչ ներբեռնման փաթեթներ։ Լրացրեք միայն անհրաժեշտ թերթը, գրանցեք ապացույց, ոչ տպավորություն, և անհրաժեշտության դեպքում պատճենեք հաստատված համակարգ։</p>',
    '1': '<p>1–5 գնահատեք որակը, աղբյուրները, գաղտնիությունը, մատչելիությունը, ինտեգրումը, արժեքը և շարունակականությունը։ Կշռված միավորը չի շրջանցում դարպասը։</p><div class="worksheet-form"><h3>Անցնել/չանցնել</h3><label><input type="checkbox"> Պահանջվող փաստերն անցնում են թեստը</label><label><input type="checkbox"> Տվյալների օգտագործումը թույլատրված է</label><label><input type="checkbox"> Մատչելիությունն ու լեզուն անցնում են</label><label><input type="checkbox"> Արտահանումը, սեփականությունն ու վերանայողը հայտնի են</label>' + editable('Ապացույց և կշռված միավոր','Գրանցեք դիտարկումը, կշիռը, միավորը և ամսաթիվը',4) + '<p><strong>Որոշում․</strong> ցանկացած ձախողված դարպաս = մերժել կամ ուղղել՝ անկախ ընդհանուր միավորից։</p></div>',
    '2': '<p>Միաժամանակ փոխեք մեկ բան և հնարավորինս անփոփոխ պահեք աղբյուրը, թեստերը, մոդելը և ռուբրիկը։</p><div class="worksheet-form">' + editable('Տարբերակ և վարկած','V2․ պնդումների մատյանը կնվազեցնի չհիմնավորված փաստերը') + editable('Ֆիքսված մուտք և կարգավորումներ','Notice v2, նույն մոդելն ու թեստերը') + editable('Դիտարկված ելք','Տեղադրեք կամ ամփոփեք արդյունքը',4) + editable('Միավորներ և ձախողումներ','Ճշտություն, ամբողջականություն, ժամանակ, կոնկրետ սխալ') + editable('Որոշում','Պահել, վերանայել կամ մերժել՝ ինչու') + '</div>',
    '3': '<p>Օգտագործեք <a href="?chapter=7&amp;lesson=1">Գլուխ 7, դաս 1-ի</a> հաշվիչը։ Գրանցեք մուտքային/ելքային տոկենները, սակագները, փորձերը, ընդունված ելքերը, վերանայման րոպեները, աշխատանքի արժեքը, ֆիքսված ծախսը, ամսաթիվը և աղբյուրը։</p>',
    '4': '<p>Օգտակար ռիսկերի մատյանը նկարագրում է սցենար, ոչ միայն խումբ։</p><div class="worksheet-form">' + editable('Ռիսկի սցենար','Չհիմնավորված վերջնաժամկետը հասնում է դիմորդին') + editable('Հավանականություն × ազդեցություն և հիմք','3 × 3 մինչև վերահսկումը') + editable('Կանխարգելիչ/հայտնաբերող վերահսկում','Աղբյուրի հանում + մատյան + համակարգողի ստուգում') + editable('Պատասխանատու և ազդակ','Համակարգող․ ցանկացած չհիմնավորված դաշտ') + editable('Մնացորդային ռիսկ և արձագանք','1 × 3․ մերժել և կրկին հանել') + '</div>',
    '5': '<h3>Կարճ բացահայտում</h3><p>«ԱԲ-ն օգնել է սկզբնական նախագծին։ [Անուն/դեր]-ը բոլոր պնդումները ստուգել է [աղբյուրներով] և հաստատել վերջնական տեքստը»։</p><h3>Լրիվ գրառում</h3><div class="worksheet-form">' + editable('Առաջադրանք, ամսաթիվ, գործիք/մոդել','Տեսանելի լինելու դեպքում՝ տարբերակը') + editable('Տրված տվյալ','Աղբյուրն ու զգայունությունը') + editable('ԱԲ ներդրում','Նախագիծ, թարգմանություն, վերլուծություն, կոդ…') + editable('Մարդու ստուգում և ուղղումներ','Ով ինչ ստուգեց և ինչ ուղղեց',3) + editable('Սահմաններ և պատասխանատու','Մնացած անորոշությունն ու վերջնական պատասխանատուն') + '</div>',
    '6': '<p>Այս կտավը ընտրովի է։ Սկսեք հարցով՝ <strong>Արդյո՞ք մեզ ԱԲ է պետք</strong>։ Եթե կանոնը, աղյուսակը, որոնումը կամ մարդկային զրույցն ավելի պարզ ու անվտանգ է, ընտրեք դա։</p><div class="worksheet-form">' + editable('Արդյո՞ք ԱԲ է պետք և ինչու','Համեմատեք ոչ ԱԲ բազային տարբերակի հետ') + editable('Օգտատեր, խնդիր, ելք','Նշեք շահառուին և նյութը') + editable('Մուտքեր, թույլտվություն, մարդու կանգառներ','Արգելված տվյալ և հաստատում') + editable('Գնահատում, շեմ, ձախողման արձագանք','Թեստ, անցողիկ շեմ, վերադարձ') + editable('Պատասխանատու և վերանայման ամսաթիվ','Անուն և ամսաթիվ') + '</div>'
  }
};

const answers = {
  en: [
    '<h3>Misconceptions</h3><p><strong>“Uploading a file trains the model.”</strong> Usually it supplies current context; training changes model parameters separately. <strong>“Fluent means factual.”</strong> Fluency is style, not evidence.</p><h3>Diagram note</h3><p>Read the Chapter 1 diagram as data → training → model, then prompt + context → inference → output. Retrieval adds passages to context; it does not silently prove them true.</p>',
    '<h3>Prompt process</h3><p>A strong prompt names task, audience, source, constraints, output form, and acceptance test. In an A/B test keep the input, model/settings, and scoring fixed; change one instruction. The “winner” is provisional and dated, not universally best.</p>',
    '<h3>TRACE passage</h3><blockquote class="lesson-source"><p>Notice v2: up to 20 participants; no registration deadline is specified.</p></blockquote><p><strong>Trace:</strong> “20 seats minimum” contradicts “up to.” “Deadline 10 October” contradicts the explicit no-deadline statement. Open the source, compare the exact passage, then correct or remove.</p>',
    '<h3>Process, not product winners</h3><p>Use the same approved fact sheet for email, slide, and FAQ. Extract facts once, create each draft, compare all outputs back to the sheet, then record separate approvals. A tool that makes the prettiest first draft does not win if its checked workflow performs worse.</p>',
    '<h3>Repeatable tool choice</h3><p>Record task, fixed test set, account/plan, enabled features, model, date, failures, review time, privacy/accessibility gates, and total cost. Select only among tools that pass required gates; do not publish a permanent winner.</p>',
    '<h3>State log</h3><ol class="state-log"><li>T01 received → awaiting_review, draft v1.</li><li>T02 received → invalid: email missing.</li><li>T01 retry → duplicate: no second draft.</li><li>T01 v1 approved by coordinator.</li><li>T01 content edited → approval invalidated; v2 awaiting_review.</li></ol><p>External text never changes permission or approval state.</p>',
    '<h3>Step-by-step cost</h3><p>2,000 input × $2/1M = $0.004. 500 output × $8/1M = $0.004. One attempt = $0.008. At 1,200 attempts API = $9.60. Add $400 review + $20 fixed = $429.60. Divide by 950 accepted outputs = about $0.4522 each. State rates and date; include retries and rejected work.</p>',
    '<div class="compare-triple"><article><h3>Weak</h3><p>“40 seats; apply by 10 October.”</p><p><strong>Annotation:</strong> contradicted capacity and invented deadline; reject.</p></article><article><h3>Adequate</h3><p>“Up to 20 places; no deadline stated.”</p><p><strong>Annotation:</strong> core claims pass, but source/version and approval are missing.</p></article><article><h3>Strong</h3><p>Notice v2 A–C: 15 October, 14:00–16:00, Room 204, up to 20, AMD 10,000, staff confirmation; no deadline stated.</p><p><strong>Annotation:</strong> complete, traceable, with named human approval still required.</p></article></div>'
  ],
  hy: [
    '<h3>Սխալ պատկերացումներ</h3><p><strong>«Ֆայլ տեղադրելը մոդելն ուսուցանում է»։</strong> Սովորաբար այն ընթացիկ համատեքստ է տալիս․ ուսուցումը առանձին փոխում է պարամետրերը։ <strong>«Սահունը փաստացի է»։</strong> Սահունությունը ոճ է, ոչ ապացույց։</p><h3>Գծապատկերի նշում</h3><p>Գլուխ 1-ի սխեման կարդացեք՝ տվյալ → ուսուցում → մոդել, ապա հրահանգ + համատեքստ → եզրակացություն → ելք։ Վերականգնումը հատված է ավելացնում համատեքստին, ոչ ճշմարտության երաշխիք։</p>',
    '<h3>Հրահանգի գործընթաց</h3><p>Ուժեղ հրահանգը նշում է առաջադրանքը, լսարանը, աղբյուրը, սահմանները, ելքի ձևը և ընդունման թեստը։ A/B փորձի մեջ անփոփոխ պահեք մուտքը, մոդելը և գնահատումը, փոխեք մեկ ցուցում։ «Հաղթողը» ժամանակավոր ու ամսաթվով է։</p>',
    '<h3>TRACE հատված</h3><blockquote class="lesson-source"><p>Notice v2․ մինչև 20 մասնակից․ գրանցման վերջնաժամկետ նշված չէ։</p></blockquote><p><strong>Հետք․</strong> «առնվազն 20»-ը հակասում է «մինչև»-ին։ «Հոկտեմբերի 10 վերջնաժամկետը» հակասում է վերջնաժամկետի բացակայությանը։ Բացեք աղբյուրը, համեմատեք և ուղղեք կամ հեռացրեք։</p>',
    '<h3>Գործընթաց, ոչ հաղթող ապրանք</h3><p>Նամակի, սլայդի և FAQ-ի համար օգտագործեք նույն հաստատված փաստաթերթը։ Մեկ անգամ հանեք փաստերը, բոլոր ելքերը համեմատեք փաստաթերթի հետ և առանձին հաստատեք։ Գեղեցիկ նախագիծը չի հաղթում, եթե ստուգված հոսքն ավելի վատ է։</p>',
    '<h3>Կրկնելի գործիքի ընտրություն</h3><p>Գրանցեք առաջադրանքը, թեստերը, հաշիվ/պլանը, գործառույթները, մոդելը, ամսաթիվը, սխալները, վերանայման ժամանակը, դարպասները և ընդհանուր արժեքը։ Ընտրեք միայն անցած թեկնածուներից, ոչ մշտական հաղթող։</p>',
    '<h3>Վիճակի մատյան</h3><ol class="state-log"><li>T01 received → awaiting_review, նախագիծ v1։</li><li>T02 received → invalid՝ email չկա։</li><li>T01 կրկնում → duplicate՝ երկրորդ նախագիծ չկա։</li><li>T01 v1 հաստատված է համակարգողի կողմից։</li><li>T01 փոփոխված է → հաստատումը անվավեր, v2 awaiting_review։</li></ol><p>Արտաքին տեքստը չի փոխում թույլտվությունը կամ հաստատումը։</p>',
    '<h3>Արժեքը քայլ առ քայլ</h3><p>2,000 մուտք × $2/1մլն = $0.004։ 500 ելք × $8/1մլն = $0.004։ Մեկ փորձը՝ $0.008։ 1,200 փորձի API-ն՝ $9.60։ Ավելացրեք $400 վերանայում + $20 ֆիքսված = $429.60։ Բաժանեք 950 ընդունված ելքի՝ մոտ $0.4522։ Նշեք սակագներն ու ամսաթիվը։</p>',
    '<div class="compare-triple"><article><h3>Թույլ</h3><p>«40 տեղ․ դիմել մինչև հոկտեմբերի 10»։</p><p><strong>Նշում․</strong> սխալ տարողություն և հորինված վերջնաժամկետ․ մերժել։</p></article><article><h3>Բավարար</h3><p>«Մինչև 20 տեղ․ վերջնաժամկետ նշված չէ»։</p><p><strong>Նշում․</strong> հիմնական փաստերը ճիշտ են, բայց աղբյուրն ու հաստատումը բացակայում են։</p></article><article><h3>Ուժեղ</h3><p>Notice v2 A–C․ հոկտեմբերի 15, 14:00–16:00, 204 սենյակ, մինչև 20, 10,000 դրամ, աշխատակազմի հաստատում, վերջնաժամկետ չկա։</p><p><strong>Նշում․</strong> ամբողջական և հետագծելի, դեռ պետք է անունով հաստատող։</p></article></div>'
  ]
};

const glossary = {
  en: [
    ['AI agent','A system that can plan and take multiple tool-enabled steps within defined permissions.'],
    ['Algorithm','A defined procedure for performing a task.'],
    ['Artificial intelligence (AI)','The broad field of systems performing tasks associated with perception, language, prediction, or decision support.'],
    ['Automation','Software performing a repeatable process with reduced manual effort.'],
    ['Bias','A systematic distortion. Model bias is measured behavior in a model; societal bias is a wider pattern in institutions or culture. They can interact, but are not synonyms.'],
    ['Context','Instructions, messages, files, retrieved passages, and tool results available for a response.'],
    ['Embedding','A numerical representation used to compare meaning or similarity.'],
    ['Fine-tuning','Additional training that adapts model behavior for particular tasks.'],
    ['Generative AI','AI that creates text, images, audio, video, code, or other content.'],
    ['Grounding','Connecting an answer to specified evidence or tool results.'],
    ['Hallucination','Plausible-looking but unsupported, inaccurate, or fabricated output.'],
    ['Inference','Using a trained model to produce a prediction or response.'],
    ['Large language model (LLM)','A model trained on large data collections to process and generate language.'],
    ['Prompt','Information supplied to guide an AI response or action.'],
    ['Prompt injection','Untrusted content attempting to redirect an AI system.'],
    ['Retrieval-augmented generation (RAG)','Retrieving relevant information into context before generation.'],
    ['Token','A unit processed by a model, often a word fragment or punctuation.'],
    ['Training data','Data used to adjust model parameters during training.'],
    ['Workflow','Ordered inputs, tasks, checks, decisions, and outputs.']
  ],
  hy: [
    ['ԱԲ գործակալ (AI agent)','Համակարգ, որը սահմանված թույլտվություններով կարող է պլանավորել և գործիքներով կատարել մի քանի քայլ։'],
    ['Ալգորիթմ (algorithm)','Առաջադրանք կատարելու սահմանված ընթացակարգ։'],
    ['Արհեստական բանականություն՝ ԱԲ (artificial intelligence, AI)','Համակարգերի լայն ոլորտ՝ ընկալման, լեզվի, կանխատեսման կամ որոշման աջակցության խնդիրների համար։'],
    ['Ավտոմատացում (automation)','Կրկնվող գործընթացի իրականացում ծրագրով՝ նվազեցված ձեռքի աշխատանքով։'],
    ['Կողմնակալություն (bias)','Համակարգված շեղում։ Մոդելի կողմնակալությունը չափվող մոդելային վարք է, իսկ հասարակական կողմնակալությունը՝ հաստատությունների կամ մշակույթի լայն օրինաչափություն։ Դրանք կապված են, բայց նույնը չեն։'],
    ['Համատեքստ (context)','Պատասխանի համար հասանելի հրահանգներ, հաղորդագրություններ, ֆայլեր, հատվածներ և գործիքների արդյունքներ։'],
    ['Ներդրում (embedding)','Թվային ներկայացում՝ իմաստի կամ նմանության համեմատության համար։'],
    ['Լրացուցիչ ուսուցում (fine-tuning)','Լրացուցիչ ուսուցում՝ որոշակի առաջադրանքների վարքը հարմարեցնելու համար։'],
    ['Գեներատիվ ԱԲ (generative AI)','Տեքստ, պատկեր, ձայն, տեսանյութ, կոդ կամ այլ նյութ ստեղծող ԱԲ։'],
    ['Աղբյուրավորում (grounding)','Պատասխանը սահմանված ապացույցին կամ գործիքի արդյունքին կապելը։'],
    ['Հալյուցինացիա (hallucination)','Հավանական տեսք ունեցող, բայց չհիմնավորված, սխալ կամ հորինված ելք։'],
    ['Եզրակացություն (inference)','Ուսուցված մոդելով կանխատեսում կամ պատասխան ստանալը։'],
    ['Մեծ լեզվական մոդել (large language model, LLM)','Լեզու մշակելու և ստեղծելու համար մեծ տվյալներով ուսուցված մոդել։'],
    ['Հրահանգ (prompt)','ԱԲ պատասխանը կամ գործողությունն ուղղորդող տեղեկություն։'],
    ['Հրահանգի ներմուծում (prompt injection)','Անվստահելի նյութում եղած փորձ՝ ԱԲ համակարգը շեղելու համար։'],
    ['Վերականգնմամբ հարստացված գեներացում (retrieval-augmented generation, RAG)','Ստեղծումից առաջ համապատասխան տեղեկությունը համատեքստ բերելու մեթոդ։'],
    ['Տոկեն (token)','Մոդելի մշակած միավոր՝ հաճախ բառի մաս կամ կետադրական նշան։'],
    ['Ուսուցման տվյալ (training data)','Մոդելի պարամետրերը ուսուցման ընթացքում կարգավորող տվյալ։'],
    ['Աշխատանքային հոսք (workflow)','Մուտքերի, առաջադրանքների, ստուգումների, որոշումների և ելքերի հերթականություն։']
  ]
};

const resources = {
  en: {
    intro: '<p>Choose resources by need. Product interfaces change, so prefer dated official material and test what you read.</p><h3>Beginner foundations</h3><ul><li><a href="https://www.unesco.org/en/articles/what-you-need-know-about-unescos-new-ai-competency-frameworks-students-and-teachers" target="_blank" rel="noopener noreferrer">UNESCO AI competency frameworks</a></li><li><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer">OECD AI Principles</a></li></ul><h3>Practical tool learning</h3><ul><li><a href="https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices" target="_blank" rel="noopener noreferrer">OpenAI prompt practices</a></li><li><a href="https://ai.google.dev/gemini-api/docs/prompting-strategies" target="_blank" rel="noopener noreferrer">Google prompt strategies</a></li><li><a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic prompt overview</a></li></ul><h3>Professional standards</h3><ul><li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">NIST AI RMF</a></li><li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">EU AI Act official text</a></li></ul>',
    '1': '<p><strong>Optional routine:</strong> weekly, verify one important AI-assisted claim; monthly, retest one saved prompt and read one official update; each term, review approved tools, data rules, accessibility, and approval owners. Keep one failure example and its correction.</p>'
  },
  hy: {
    intro: '<p>Ռեսուրսն ընտրեք ըստ կարիքի։ Ապրանքների միջերեսները փոխվում են, ուստի նախընտրեք ամսաթվով պաշտոնական նյութ և փորձարկեք կարդացածը։</p><h3>Սկսնակ հիմքեր</h3><ul><li><a href="https://www.unesco.org/en/articles/what-you-need-know-about-unescos-new-ai-competency-frameworks-students-and-teachers" target="_blank" rel="noopener noreferrer">UNESCO ԱԲ կարողությունների շրջանակներ</a></li><li><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer">OECD ԱԲ սկզբունքներ</a></li></ul><h3>Գործնական գործիքներ</h3><ul><li><a href="https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices" target="_blank" rel="noopener noreferrer">OpenAI հրահանգների մոտեցումներ</a></li><li><a href="https://ai.google.dev/gemini-api/docs/prompting-strategies" target="_blank" rel="noopener noreferrer">Google հրահանգների ռազմավարություններ</a></li><li><a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic հրահանգների ակնարկ</a></li></ul><h3>Մասնագիտական չափորոշիչներ</h3><ul><li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">NIST AI RMF</a></li><li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">ԵՄ ԱԲ ակտի պաշտոնական տեքստ</a></li></ul>',
    '1': '<p><strong>Ընտրովի ռեժիմ․</strong> շաբաթական ստուգեք մեկ կարևոր պնդում, ամսական կրկին փորձարկեք մեկ պահպանված հրահանգ և կարդացեք մեկ պաշտոնական թարմացում, յուրաքանչյուր կիսամյակ վերանայեք գործիքները, տվյալների կանոնները, մատչելիությունն ու հաստատողներին։</p>'
  }
};

const refs = {
  en: {
    intro: '<p>Use references as part of the lessons, not as a detached bibliography.</p><h3>Papers — Chapters 1–3</h3><ul><li>Vaswani et al. (2017), <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">Attention Is All You Need</a>: transformer background.</li><li>Ji et al. (2023), <a href="https://arxiv.org/abs/2202.03629" target="_blank" rel="noopener noreferrer">hallucination survey</a>: supports checking claims.</li><li>Gao et al. (2023), <a href="https://arxiv.org/abs/2312.10997" target="_blank" rel="noopener noreferrer">RAG survey</a>: retrieval and grounding.</li></ul><h3>Technical documentation — Chapters 4–7</h3><ul><li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI prompt engineering</a>: prompts and evaluation.</li><li><a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic prompt documentation</a>: structured experiments.</li></ul><h3>Guidance — Chapters 3, 5, 8</h3><ul><li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noopener noreferrer">NIST AI RMF 1.0</a>: risk controls.</li><li><a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener noreferrer">UNESCO guidance</a>: education and research.</li></ul><h3>Legislation and policy context — Chapters 5–8</h3><ul><li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">EU AI Act, Regulation 2024/1689</a>. Check applicable Armenian law and institutional policy for your actual work.</li></ul>',
    '1': '<p>Follow institutional rules and disclose material assistance. Cite the underlying evidence, not an AI chat as the source of a fact. The human author remains responsible for claims, citations, originality, permissions, and final judgment.</p><h3>Two disclosure examples</h3><p><strong>Short:</strong> “AI assisted with language editing. The author verified all claims and citations and approved the final text.”</p><p><strong>Detailed:</strong> “On 10 September 2026, [tool/model] produced an initial structure from the author’s notes. The author rewrote the analysis, opened and verified every cited source, removed two unsupported claims, and accepts responsibility for the final work.”</p>'
  },
  hy: {
    intro: '<p>Հղումները կապեք դասերի հետ, ոչ թե պահեք որպես առանձնացված ցանկ։</p><h3>Հոդվածներ — Գլուխներ 1–3</h3><ul><li>Vaswani et al. (2017), <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">Attention Is All You Need</a>՝ transformer հիմք։</li><li>Ji et al. (2023), <a href="https://arxiv.org/abs/2202.03629" target="_blank" rel="noopener noreferrer">հալյուցինացիաների ակնարկ</a>՝ պնդումների ստուգում։</li><li>Gao et al. (2023), <a href="https://arxiv.org/abs/2312.10997" target="_blank" rel="noopener noreferrer">RAG ակնարկ</a>՝ վերականգնում և աղբյուրավորում։</li></ul><h3>Տեխնիկական փաստաթղթեր — Գլուխներ 4–7</h3><ul><li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI հրահանգների փաստաթուղթ</a>։</li><li><a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" target="_blank" rel="noopener noreferrer">Anthropic հրահանգների փաստաթուղթ</a>։</li></ul><h3>Ուղեցույց — Գլուխներ 3, 5, 8</h3><ul><li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noopener noreferrer">NIST AI RMF 1.0</a>՝ ռիսկերի կառավարում։</li><li><a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener noreferrer">UNESCO ուղեցույց</a>՝ կրթություն և հետազոտություն։</li></ul><h3>Օրենսդրություն — Գլուխներ 5–8</h3><ul><li><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">ԵՄ ԱԲ ակտ՝ 2024/1689</a>։ Իրական աշխատանքի համար ստուգեք կիրառելի ՀՀ իրավունքն ու հաստատության կանոնը։</li></ul>',
    '1': '<p>Հետևեք հաստատության կանոններին և բացահայտեք էական ԱԲ աջակցությունը։ Փաստի համար հղեք հիմքում ընկած ապացույցը, ոչ ԱԲ զրույցը։ Մարդ հեղինակը պատասխանատու է պնդումների, հղումների, ինքնատիպության, թույլտվությունների և վերջնական դատողության համար։</p><h3>Բացահայտման երկու օրինակ</h3><p><strong>Կարճ․</strong> «ԱԲ-ն օգնել է լեզվական խմբագրմանը։ Հեղինակը ստուգել է բոլոր պնդումներն ու հղումները և հաստատել վերջնական տեքստը»։</p><p><strong>Մանրամասն․</strong> «2026 թ. սեպտեմբերի 10-ին [գործիք/մոդել]-ը հեղինակի նշումներից ստեղծել է սկզբնական կառուցվածք։ Հեղինակը վերագրել է վերլուծությունը, բացել ու ստուգել բոլոր աղբյուրները, հեռացրել երկու չհիմնավորված պնդում և պատասխանատվություն է կրում վերջնական աշխատանքի համար»։</p>'
  }
};

const researchSpecific = {
  en: [
    ['Topics, trusted publishers, languages, freshness window','Deduplicated daily digest with date, source, relevance, and open link'],
    ['Research question, audience, date range, allowed source types','Two-page cited brief with claim ledger and unresolved questions'],
    ['Question, databases, inclusion/exclusion rules, years','Evidence matrix with verified DOI, method, sample, finding, and limitation'],
    ['Two or more source sets and comparison criteria','Conflict map separating shared facts, disagreements, and provenance'],
    ['Approved documents, learning outcomes, learner level','Section-linked study guide with concepts, examples, and self-checks'],
    ['Approved material, target difficulty, answer rubric','Practice quiz with source key, explanations, and ambiguity review'],
    ['One concept, source passage, beginner and technical audiences','Layered explanation with analogy limits and technical definition'],
    ['Approved notes, terminology, review interval','Importable flashcards with source field and spaced-review schedule'],
    ['Expert role, interview purpose, known evidence gaps','Sequenced interview guide with probes and fact-check follow-ups'],
    ['Course outcome, learner level, date range, source criteria','Annotated reading list grouped by purpose, difficulty, and access']
  ],
  hy: [
    ['Թեմաներ, վստահելի հրապարակողներ, լեզուներ, թարմության միջակայք','Կրկնազտված օրական ամփոփագիր՝ ամսաթվով, աղբյուրով, տեղինությամբ և հղումով'],
    ['Հարց, լսարան, ժամանակահատված, թույլատրելի աղբյուրներ','Երկու էջանոց տեղեկանք՝ պնդումների մատյանով և բաց հարցերով'],
    ['Հարց, շտեմարաններ, ներառման/բացառման կանոններ, տարիներ','Ապացույցների մատրից՝ ստուգված DOI-ով, մեթոդով, ընտրանքով, արդյունքով և սահմանով'],
    ['Երկու կամ ավելի աղբյուրների հավաքածու և համեմատման չափանիշ','Հակասությունների քարտեզ՝ ընդհանուր փաստերով, տարաձայնություններով և ծագմամբ'],
    ['Հաստատված փաստաթղթեր, ուսման արդյունքներ, սովորողի մակարդակ','Բաժիններին հղված ուղեցույց՝ հասկացություններով, օրինակներով և ինքնաստուգմամբ'],
    ['Հաստատված նյութ, բարդություն, պատասխանների ռուբրիկ','Փորձնական թեստ՝ աղբյուրային բանալիով, բացատրությամբ և երկիմաստության ստուգմամբ'],
    ['Մեկ հասկացություն, աղբյուրի հատված, սկսնակ և տեխնիկական լսարան','Շերտավոր բացատրություն՝ համեմատության սահմանով և տեխնիկական սահմանմամբ'],
    ['Հաստատված նշումներ, եզրաբանություն, կրկնության միջակայք','Ներմուծվող քարտեր՝ աղբյուրի դաշտով և կրկնության ժամանակացույցով'],
    ['Փորձագետի դեր, հարցազրույցի նպատակ, ապացույցի բացեր','Հերթականացված հարցաշար՝ խորացնող և փաստաստուգող հարցերով'],
    ['Դասի արդյունք, մակարդակ, ժամանակահատված, աղբյուրի չափանիշ','Ծանոթագրված ընթերցացանկ՝ ըստ նպատակի, բարդության և հասանելիության']
  ]
};

function apply(lang) {
  const data = load(lang);
  Object.entries(ch8[lang]).forEach(([id, html]) => setLesson(data, '8', id, html, id === 'intro' ? 2 : 4));
  const chapter = section(data, '8');
  chapter.description = lang === 'en' ? 'A selective reference library of feasible, checkable AI-assisted tasks.' : 'Իրագործելի և ստուգելի ԱԲ-ով առաջադրանքների ընտրովի տեղեկատու գրադարան։';
  chapter.lessons.find((lesson) => lesson.id === '13').title = lang === 'en'
    ? 'Use the maintained product directory'
    : 'Օգտագործեք պահպանվող արտադրանքային ցանկը';

  Object.entries(guide3[lang]).forEach(([id, html]) => setLesson(data, 'guide-3', id, html, id === 'intro' ? 2 : 5));
  const guide4 = section(data, 'guide-4');
  setLesson(data, 'guide-4', 'intro', lang === 'en'
    ? '<p>Choose one brief, not all twelve. Each states prerequisites, a concrete assessment, and an optional extension. Use approved or fictional data, establish a non-AI baseline, and leave evidence of human review.</p>'
    : '<p>Ընտրեք մեկ ամփոփագիր, ոչ բոլոր տասներկուսը։ Յուրաքանչյուրն ունի նախապայման, կոնկրետ գնահատում և ընտրովի ընդլայնում։ Օգտագործեք թույլատրված կամ հորինված տվյալ, սահմանեք ոչ ԱԲ բազային տարբերակ և պահեք մարդու ստուգման ապացույց։</p>', 2);
  guide4.lessons.filter((lesson) => lesson.id !== 'intro').forEach((lesson, index) => {
    lesson.html = briefHtml(lang, cases[lang][index]);
    lesson.minutes = 3;
  });

  Object.entries(worksheets[lang]).forEach(([id, html]) => setLesson(data, 'guide-5', id, html, id === 'intro' ? 2 : 3));
  answers[lang].forEach((html, index) => setLesson(data, 'guide-6', String(index + 1), html, 3));

  setLesson(data, 'guide-7', '1', lang === 'en'
    ? '<p>Your road ahead is personal: notice one recurring task where AI may help, protect the parts that require care and accountable judgment, and improve through small documented trials. Products will change; the habits of framing, checking, correcting, and owning decisions remain useful.</p>'
    : '<p>Ձեր հետագա ճանապարհը անձնական է․ նկատեք մեկ կրկնվող գործ, որտեղ ԱԲ-ը կարող է օգնել, պահպանեք հոգատարություն և պատասխանատու դատողություն պահանջող մասերը և զարգացեք փոքր փաստաթղթավորված փորձերով։ Ապրանքները կփոխվեն, իսկ սահմանելու, ստուգելու, ուղղելու և պատասխանատվություն կրելու սովորությունները կմնան։</p>', 2);
  setLesson(data, 'guide-7', '2', lang === 'en'
    ? '<ol><li><strong>This week:</strong> choose one low-risk task and write its input, output, acceptance test, and reviewer.</li><li><strong>This month:</strong> run one controlled comparison, save a failure and correction, and estimate full workflow cost.</li><li><strong>This term:</strong> teach one colleague TRACE and review your approved tools, data rules, and escalation route.</li></ol>'
    : '<ol><li><strong>Այս շաբաթ․</strong> ընտրեք մեկ ցածր ռիսկով գործ և գրեք մուտքը, ելքը, ընդունման թեստն ու վերանայողին։</li><li><strong>Այս ամիս․</strong> կատարեք մեկ վերահսկվող համեմատություն, պահեք սխալն ու ուղղումը և հաշվեք ամբողջ հոսքի արժեքը։</li><li><strong>Այս կիսամյակ․</strong> մեկ գործընկերոջ սովորեցրեք TRACE-ը և վերանայեք հաստատված գործիքները, տվյալների կանոններն ու ուղղորդման ուղին։</li></ol>', 2);

  const entries = glossary[lang].map(([term, definition]) => `<article class="glossary-entry" data-glossary-entry><h3>${term}</h3><p>${definition}</p></article>`).join('');
  setLesson(data, 'guide-8', 'intro', (lang === 'en'
    ? '<p>Search English terms and definitions. Confused-term notes distinguish related ideas rather than treating them as synonyms.</p><div data-lab="glossary-search"></div>'
    : '<p>Որոնեք հայերեն և փակագծերում տրված անգլերեն համարժեքներով։ Շփոթվող հասկացությունների նշումները տարբերակում են հարակից գաղափարները։</p><div data-lab="glossary-search"></div>') + `<div class="glossary-list">${entries}</div>`, 5);

  Object.entries(resources[lang]).forEach(([id, html]) => setLesson(data, 'guide-9', id, html, 3));
  Object.entries(refs[lang]).forEach(([id, html]) => setLesson(data, 'guide-10', id, html, id === 'intro' ? 5 : 3));

  researchSpecific[lang].forEach(([inputs, output], index) => {
    const item = data.useCases.find((useCase) => String(useCase.id) === String(index + 1));
    if (!item) throw new Error(`Missing use case ${index + 1} (${lang})`);
    item.inputs = inputs;
    item.output = output;
  });

  // Chapter 8 intentionally has no quiz. Preserve exactly the seven Chapter 1–7 quizzes.
  data.quizzes = data.quizzes.slice(0, 7);
  section(data, '8').lessons.forEach((lesson) => { delete lesson.quiz; });
  save(lang, data);
  console.log(`Revised Chapter 8 and guide sections for ${lang}`);
}

apply('en');
apply('hy');
