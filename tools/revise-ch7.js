/**
 * Revise Chapter 7 Practical Matters (EN + HY).
 * Run: node tools/revise-ch7.js
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
function setLesson(data, sectionId, lessonId, html, minutes) {
  const lesson = data.sections.find((s) => s.id === sectionId).lessons.find((l) => l.id === lessonId);
  if (!lesson) throw new Error(`Missing ${sectionId}/${lessonId}`);
  lesson.html = html;
  if (minutes != null) lesson.minutes = minutes;
}

const en = {
  '1': {
    minutes: 5,
    html: [
      '<p>Start with a simple input/output calculation. Then look at the complete workflow. <strong>Subscription access</strong> is usually a flat plan fee for product use. <strong>API billing</strong> charges by usage (often tokens), sometimes plus tools, storage, or search.</p>',
      '<h3>Simple token math</h3>',
      '<p>Teaching rates (not live vendor quotes): $2 per million input tokens, $8 per million output tokens.</p>',
      '<div data-lab="simple-cost"></div>',
      '<h3>When review time dominates</h3>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Cost breakdown"><table><thead><tr><th scope="col">Component</th><th scope="col">Result</th></tr></thead><tbody>',
      '<tr><td>2,000 input tokens at $2 / 1,000,000</td><td>$0.004</td></tr>',
      '<tr><td>500 output tokens at $8 / 1,000,000</td><td>$0.004</td></tr>',
      '<tr><td>Monthly API (1,200 attempts)</td><td>$9.60</td></tr>',
      '<tr><td>Human review (1,000 tasks × 2 min × $12/h)</td><td>$400.00</td></tr>',
      '<tr><td>Workflow total (with $20 fixed)</td><td>$429.60</td></tr>',
      '</tbody></table></div>',
      '<p>Here, review time matters more than token price. Cutting API spend while doubling correction time may raise total cost per accepted result.</p>',
      '<p>Use the complete workflow calculator below (also on the practice page) to change assumptions. Prices in this course are invented teaching inputs — replace them with current official rates before purchasing.</p>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>Compare a messy source folder with a cleaned package. Choose the authoritative document, remove irrelevant material, and record conflicts. Watch for a case where shortening context removes a necessary condition.</p>',
      '<div data-lab="context-pack"></div>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Build on the Chapter 4 prompt card. Add <strong>owner</strong>, <strong>version</strong>, <strong>test case</strong>, and <strong>review date</strong>. A previously useful prompt can fail when criteria change.</p>',
      '<div data-lab="prompt-lifecycle"></div>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Keep team rules short and scenario-based. For each situation ask: <strong>Which rule applies here, and who can decide?</strong></p>',
      '<div data-lab="team-rules"></div>',
      '<details class="lesson-optional"><summary>Optional professional extension</summary>',
      '<p>Use this extension when your role includes procurement or institution-wide policy.</p>',
      '<ul><li><strong>Procurement:</strong> require current data-processing terms, retention settings, exit/export plan, and a dated security review before purchase.</li>',
      '<li><strong>Institution-wide policy drafting:</strong> name approved tools, prohibited data classes, disclosure rules, review levels, incident reporting, and a policy owner with a review calendar.</li>',
      '<li><strong>Advanced governance:</strong> separate proposers from approvers for high-impact actions; keep audit logs of sources, prompts, tool calls, and decisions.</li></ul>',
      '<p>Training should include practice scenarios, not only a PDF policy.</p>',
      '</details>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Compare three approaches</h3>',
      '<p>Same acceptance criteria: every claim supported by Notice v2; no invented deadlines; human approval before send. Compare <strong>baseline</strong>, <strong>compact-context</strong>, and <strong>lower-cost</strong> runs. Record tokens, errors, and correction time — not tokens alone.</p>',
      '<div data-lab="approach-compare"></div>',
      '<p>Use the workflow calculator below to explore how review minutes change total cost per accepted result.</p>',
      '<h3>Reflection</h3>',
      '<ul><li>When did lower API spending fail to produce a cheaper useful result?</li>',
      '<li>Which context cut removed a necessary condition?</li>',
      '<li>Who owns the next review of your prompt card?</li></ul>'
    ].join('')
  }
};

const hy = {
  '1': {
    minutes: 5,
    html: [
      '<p>Սկսեք պարզ մուտք/ելք հաշվարկից։ Ապա նայեք ամբողջ աշխատանքային հոսքին։ <strong>Բաժանորդագրության մուտքը</strong> սովորաբար հարթ պլանի վճար է։ <strong>API վճարումը</strong> գանձում է ըստ օգտագործման (հաճախ տոկեններով), երբեմն նաև գործիքների, պահեստի կամ որոնման համար։</p>',
      '<h3>Պարզ տոկենային հաշվարկ</h3>',
      '<p>Ուսումնական սակագներ (ոչ կենդանի գներ)․ $2 մեկ միլիոն մուտքային տոկենի համար, $8 մեկ միլիոն ելքային տոկենի համար։</p>',
      '<div data-lab="simple-cost"></div>',
      '<h3>Երբ վերանայման ժամանակն է գերակշռում</h3>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Արժեքի բաշխում"><table><thead><tr><th scope="col">Բաղադրիչ</th><th scope="col">Արդյունք</th></tr></thead><tbody>',
      '<tr><td>2,000 մուտքային տոկեն × $2 / 1,000,000</td><td>$0.004</td></tr>',
      '<tr><td>500 ելքային տոկեն × $8 / 1,000,000</td><td>$0.004</td></tr>',
      '<tr><td>Ամսական API (1,200 փորձ)</td><td>$9.60</td></tr>',
      '<tr><td>Մարդու վերանայում (1,000 × 2 ր × $12/ժ)</td><td>$400.00</td></tr>',
      '<tr><td>Հոսքի ընդհանուր ($20 ֆիքսվածով)</td><td>$429.60</td></tr>',
      '</tbody></table></div>',
      '<p>Այստեղ վերանայման ժամանակն ավելի կարևոր է, քան տոկենի գինը։ API ծախսը կրճատելը՝ ուղղման ժամանակը կրկնապատկելով, կարող է բարձրացնել ընդհանուր արժեքը մեկ ընդունված արդյունքի համար։</p>',
      '<p>Օգտագործեք ստորև ամբողջական հաշվիչը (նաև պրակտիկայի էջում)։ Այս դասընթացի գները հորինված ուսումնական մուտքեր են — գնումից առաջ փոխարինեք պաշտոնական սակագներով։</p>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>Համեմատեք խառն աղբյուրների պանակը մաքրված փաթեթի հետ։ Ընտրեք վավեր փաստաթուղթը, հանեք անտեղի նյութը և գրանցեք հակասությունները։ Ուշադրություն դարձրեք դեպքին, երբ համատեքստի կրճատումը հեռացնում է անհրաժեշտ պայման։</p>',
      '<div data-lab="context-pack"></div>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Կառուցեք Գլուխ 4-ի հրահանգի քարտի վրա։ Ավելացրեք <strong>պատասխանատու</strong>, <strong>տարբերակ</strong>, <strong>թեստային դեպք</strong> և <strong>վերանայման ամսաթիվ</strong>։ Նախկինում օգտակար հրահանգը կարող է ձախողվել, երբ չափանիշները փոխվում են։</p>',
      '<div data-lab="prompt-lifecycle"></div>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Թիմային կանոնները պահեք կարճ և սցենարային։ Յուրաքանչյուր իրավիճակի համար հարցրեք․ <strong>Ո՞ր կանոնն է գործում այստեղ, և ով կարող է որոշել։</strong></p>',
      '<div data-lab="team-rules"></div>',
      '<details class="lesson-optional"><summary>Ընտրովի մասնագիտական ընդլայնում</summary>',
      '<p>Օգտագործեք այս ընդլայնումը, երբ ձեր դերը ներառում է գնումներ կամ ինստիտուցիոնալ քաղաքականություն։</p>',
      '<ul><li><strong>Գնումներ․</strong> պահանջեք ընթացիկ տվյալների մշակման պայմաններ, պահպանման կարգավորումներ, ելքի/արտահանման պլան և ամսաթվով անվտանգության վերանայում։</li>',
      '<li><strong>Ինստիտուցիոնալ քաղաքականության նախագիծ․</strong> անվանեք հաստատված գործիքները, արգելված տվյալների դասերը, բացահայտման կանոնները, վերանայման մակարդակները, միջադեպերի հաղորդումը և քաղաքականության պատասխանատուին՝ վերանայման օրացույցով։</li>',
      '<li><strong>Ընդլայնված կառավարում․</strong> բարձր ազդեցության գործողությունների համար առանձնացրեք առաջարկողին և հաստատողին․ պահեք աղբյուրների, հրահանգների, գործիքների կանչերի և որոշումների մատյան։</li></ul>',
      '<p>Ուսուցումը պետք է ներառի պրակտիկ սցենարներ, ոչ միայն PDF քաղաքականություն։</p>',
      '</details>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Համեմատեք երեք մոտեցում</h3>',
      '<p>Նույն ընդունման չափանիշները․ յուրաքանչյուր պնդում հաստատված է Notice v2-ով․ հորինված վերջնաժամկետ չկա․ մարդու հաստատում ուղարկումից առաջ։ Համեմատեք <strong>բազային</strong>, <strong>սեղմ համատեքստ</strong> և <strong>ցածր արժեք</strong> գործարկումները։ Գրանցեք տոկենները, սխալները և ուղղման ժամանակը — ոչ միայն տոկենները։</p>',
      '<div data-lab="approach-compare"></div>',
      '<p>Օգտագործեք ստորև հոսքի հաշվիչը՝ տեսնելու, թե ինչպես է վերանայման րոպեն փոխում ընդհանուր արժեքը մեկ ընդունված արդյունքի համար։</p>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>Ե՞րբ ցածր API ծախսը չտվեց ավելի էժան օգտակար արդյունք։</li>',
      '<li>Ո՞ր համատեքստի կրճատումն է հեռացրել անհրաժեշտ պայմանը։</li>',
      '<li>Ո՞վ է տիրապետում ձեր հրահանգի քարտի հաջորդ վերանայմանը։</li></ul>'
    ].join('')
  }
};

function apply(lang) {
  const data = load(lang);
  const pack = lang === 'hy' ? hy : en;
  Object.keys(pack).forEach((id) => setLesson(data, '7', id, pack[id].html, pack[id].minutes));

  const section = data.sections.find((s) => s.id === '7');
  if (section) {
    section.summary = lang === 'en'
      ? 'Token and workflow costs, cleaned context packages, prompt lifecycle, scenario-based team rules, and approach comparisons.'
      : 'Տոկենային և հոսքի արժեքներ, մաքրված համատեքստի փաթեթներ, հրահանգի կյանքի ցիկլ, սցենարային թիմային կանոններ և մոտեցումների համեմատություն։';
  }

  if (lang === 'en') {
    data.quizzes[6] = [
      [
        'At $2 per million input tokens, what do 2,000 input tokens cost?',
        '$0.004. Divide by 1,000,000, not 1,000.'
      ],
      [
        'The API bill falls but review doubles. Is the workflow cheaper?',
        'Not necessarily. Compare total cost per accepted result, using observed quality and review time.'
      ]
    ];
  } else {
    data.quizzes[6] = [
      [
        '$2 մեկ միլիոն մուտքային տոկենի դեպքում ինչ՞ արժեն 2,000 մուտքային տոկենները։',
        '$0.004։ Բաժանեք 1,000,000-ի, ոչ 1,000-ի։'
      ],
      [
        'API հաշիվը նվազում է, բայց վերանայումը կրկնապատկվում է։ Արդյո՞ք հոսքն ավելի էժան է։',
        'Պարտադիր չէ։ Համեմատեք ընդհանուր արժեքը մեկ ընդունված արդյունքի համար՝ որակով և վերանայման ժամանակով։'
      ]
    ];
  }

  save(lang, data);
  console.log('Revised Chapter 7 for', lang);
}

apply('en');
apply('hy');
