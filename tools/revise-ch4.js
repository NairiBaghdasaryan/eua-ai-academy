/**
 * Revise Chapter 4 Using AI (EN + HY).
 * Run: node tools/revise-ch4.js
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
    minutes: 4,
    html: [
      '<p>Separate three editing levels on the same draft. <strong>Proofreading</strong> fixes surface errors. <strong>Line editing</strong> improves clarity and flow while preserving meaning. <strong>Substantive editing</strong> changes structure or claims — and that is where unsupported additions often hide.</p>',
      '<h3>Try this: three edits, one paragraph</h3>',
      '<p>Compare the highlighted changes. Accept edits that preserve meaning. Reject the attractive edit that invents a claim.</p>',
      '<div data-lab="edit-levels"></div>',
      '<aside class="lesson-callout"><p><strong>Habit</strong></p><p>Ask the model to list changes and mark any new fact. If a fact is not in your source, delete it even when the sentence sounds better.</p></aside>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>Widen the option space before you evaluate. For a constrained problem, generate alternatives first, then score them against criteria you control — not against the model’s preferred narrative.</p>',
      '<h3>Constrained problem: a small university event</h3>',
      '<p>Budget up to AMD 80,000. About 25 people. Indoor accessible space preferred. Two hours of setup time available.</p>',
      '<div data-lab="event-plan"></div>',
      '<p>After you adjust cost, accessibility, and preparation time, explain your choice in one sentence that names the trade-off you accepted.</p>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Learning help should be graduated. A <strong>hint</strong> nudges the next step. A <strong>partial explanation</strong> shows structure without the full answer. A <strong>complete solution</strong> is a last resort after you attempt the work.</p>',
      '<h3>Try this: three levels of help</h3>',
      '<p>Attempt the short problem first. Reveal help only as needed. Then check the tutor’s explanation against reliable material — here, the fictional notice rules.</p>',
      '<div data-lab="tutor-levels"></div>',
      '<aside class="lesson-callout"><p><strong>Check the tutor</strong></p><p>An AI explanation can be fluent and wrong. Compare each step with a trusted source before you memorize it.</p></aside>'
    ].join('')
  },
  '4': {
    minutes: 5,
    html: [
      '<p>Do not treat all media alike. Charts, scans, transcripts, and tables fail in different ways. Open one example at a time and find the realistic extraction error.</p>',
      '<div data-lab="media-errors"></div>',
      '<ul><li><strong>Chart:</strong> watch totals, axes, and what is actually labeled.</li>',
      '<li><strong>Scanned notice:</strong> watch OCR swaps in Armenian digits and names.</li>',
      '<li><strong>Transcript:</strong> watch speaker attribution and omitted negations.</li>',
      '<li><strong>Table:</strong> watch filters, status fields, and invented row counts.</li></ul>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>Everyday AI use is broader than institutional writing: study planning, household task lists, or comparing non-sensitive options. The skill is the same — separate <strong>preferences you must decide</strong> from <strong>facts you must verify</strong>.</p>',
      '<div data-lab="pref-vs-fact"></div>',
      '<aside class="lesson-callout"><p><strong>Rule</strong></p><p>AI can organize options. Opening hours, prices, deadlines, and capacity still need a checkable source.</p></aside>'
    ].join('')
  },
  '6': {
    minutes: 4,
    html: [
      '<p>Start with one useful prompt card, not a large unfinished library. Record purpose, required input, template, example output, and checking instructions so another person could reuse it safely.</p>',
      '<div data-lab="prompt-card"></div>',
      '<p>Use <strong>Load Armenian example</strong> to see a completed card, then adapt the fields for your own recurring task.</p>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Choose a track</h3>',
      '<p>Complete either a writing task (connects to <strong>Lab A</strong>) or a data task (connects to <strong>Lab B</strong>). Both use the same quality checklist. Submit the resulting work and a short note on what you corrected.</p>',
      '<div data-lab="practice-choice"></div>',
      '<h3>Shared quality checklist</h3>',
      '<ul><li>Every claim is supported, contradicted and fixed, or marked not stated.</li>',
      '<li>No invented deadlines, fees, capacities, or row counts.</li>',
      '<li>You can name who would approve this exact output before use.</li>',
      '<li>You can explain one correction you made after checking the source.</li></ul>',
      '<h3>Reflection</h3>',
      '<ul><li>Which edit level most often hides unsupported claims in your work?</li>',
      '<li>When did preference tempt you to skip verifying a fact?</li>',
      '<li>Which Lab A or Lab B step will you reuse next?</li></ul>'
    ].join('')
  }
};

const hy = {
  '1': {
    minutes: 4,
    html: [
      '<p>Նույն նախագծի վրա տարբերեք խմբագրման երեք մակարդակ։ <strong>Սրբագրումը</strong> ուղղում է մակերեսային սխալները։ <strong>Տողային խմբագրումը</strong> բարելավում է պարզությունն ու հոսքը՝ պահպանելով իմաստը։ <strong>Բովանդակային խմբագրումը</strong> փոխում է կառուցվածքը կամ պնդումները — և հենց այստեղ հաճախ թաքնվում են չհիմնավորված հավելումները։</p>',
      '<h3>Փորձեք․ երեք խմբագրում, մեկ պարբերություն</h3>',
      '<p>Համեմատեք ընդգծված փոփոխությունները։ Ընդունեք իմաստը պահպանողները։ Մերժեք գրավիչ խմբագրումը, որը հորինում է պնդում։</p>',
      '<div data-lab="edit-levels"></div>',
      '<aside class="lesson-callout"><p><strong>Սովորույթ</strong></p><p>Խնդրեք մոդելին ցանկացնել փոփոխությունները և նշել ցանկացած նոր փաստ։ Եթե փաստը ձեր աղբյուրում չկա, ջնջեք այն՝ նույնիսկ եթե նախադասությունը ավելի լավ է հնչում։</p></aside>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>Նախ լայնացրեք տարբերակների տարածությունը, ապա գնահատեք։ Սահմանափակ խնդրի համար նախ ստեղծեք այլընտրանքներ, ապա գնահատեք ձեր չափանիշներով — ոչ մոդելի նախընտրած պատմությամբ։</p>',
      '<h3>Սահմանափակ խնդիր․ փոքր համալսարանական միջոցառում</h3>',
      '<p>Բյուջե՝ մինչև 80,000 դրամ։ Մոտ 25 մարդ։ Նախընտրելի է մատչելի փակ տարածք։ Պատրաստման համար կա երկու ժամ։</p>',
      '<div data-lab="event-plan"></div>',
      '<p>Կարգավորելով արժեքը, մատչելիությունը և պատրաստման ժամանակը՝ մեկ նախադասությամբ բացատրեք ընտրությունը և այն փոխզիջումը, որն ընդունել եք։</p>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Ուսուցման օգնությունը պետք է լինի աստիճանական։ <strong>Հուշումը</strong> մղում է հաջորդ քայլին։ <strong>Մասնակի բացատրությունը</strong> ցույց է տալիս կառուցվածքը՝ առանց ամբողջ պատասխանի։ <strong>Ամբողջ լուծումը</strong> վերջին միջոց է՝ աշխատանքը փորձելուց հետո։</p>',
      '<h3>Փորձեք․ օգնության երեք մակարդակ</h3>',
      '<p>Նախ փորձեք կարճ խնդիրը։ Բացեք օգնությունը միայն անհրաժեշտության դեպքում։ Ապա ստուգեք դասատուի բացատրությունը վստահելի նյութով — այստեղ՝ հորինված ծանուցման կանոններով։</p>',
      '<div data-lab="tutor-levels"></div>',
      '<aside class="lesson-callout"><p><strong>Ստուգեք դասատուին</strong></p><p>ԱԲ բացատրությունը կարող է սահուն և սխալ լինել։ Յուրաքանչյուր քայլը համեմատեք վստահելի աղբյուրի հետ՝ մինչև անգիր անելը։</p></aside>'
    ].join('')
  },
  '4': {
    minutes: 5,
    html: [
      '<p>Մի վերաբերվեք բոլոր մեդիաներին նույն կերպ։ Գծապատկերները, սկաները, տեքստագրությունները և աղյուսակները տարբեր կերպ են սխալվում։ Բացեք մեկ օրինակ և գտեք իրատեսական արդյունահանման սխալը։</p>',
      '<div data-lab="media-errors"></div>',
      '<ul><li><strong>Գծապատկեր․</strong> հետևեք գումարներին, առանցքներին և այն, ինչ իրականում պիտակված է։</li>',
      '<li><strong>Սկանավորված ծանուցում․</strong> հետևեք հայերեն թվերի և անունների OCR փոխարինումներին։</li>',
      '<li><strong>Տեքստագրություն․</strong> հետևեք խոսողի վերագրումներին և բաց թողնված ժխտումներին։</li>',
      '<li><strong>Աղյուսակ․</strong> հետևեք զտիչներին, կարգավիճակի դաշտերին և հորինված տողերի քանակին։</li></ul>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>Ամենօրյա ԱԲ օգտագործումը ավելի լայն է, քան ինստիտուցիոնալ գրելը․ ուսումնական պլան, տնային գործերի ցանկ կամ ոչ զգայուն տարբերակների համեմատություն։ Հմտությունը նույնն է — տարբերեք <strong>նախընտրությունները, որոնք դուք եք որոշում</strong>, և <strong>փաստերը, որոնք պետք է ստուգել</strong>։</p>',
      '<div data-lab="pref-vs-fact"></div>',
      '<aside class="lesson-callout"><p><strong>Կանոն</strong></p><p>ԱԲ-ը կարող է կազմակերպել տարբերակները։ Բացման ժամերը, գները, վերջնաժամկետները և տարողությունը դեռևս ստուգելի աղբյուր են պահանջում։</p></aside>'
    ].join('')
  },
  '6': {
    minutes: 4,
    html: [
      '<p>Սկսեք մեկ օգտակար հրահանգի քարտից, ոչ մեծ անավարտ գրադարանից։ Գրանցեք նպատակը, պահանջվող մուտքը, ձևանմուշը, օրինակ ելքը և ստուգման հրահանգները, որպեսզի ուրիշը կարողանա անվտանգ վերօգտագործել։</p>',
      '<div data-lab="prompt-card"></div>',
      '<p>Օգտագործեք <strong>Բեռնել հայերեն օրինակը</strong>՝ լրացված քարտը տեսնելու համար, ապա հարմարեցրեք դաշտերը ձեր կրկնվող աշխատանքին։</p>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Ընտրեք ուղի</h3>',
      '<p>Կատարեք կամ գրավոր առաջադրանքը (կապվում է <strong>Լաբորատոր A</strong>-ի հետ), կամ տվյալների առաջադրանքը (կապվում է <strong>Լաբորատոր B</strong>-ի հետ)։ Երկուսն էլ օգտագործում են նույն որակի ցանկը։ Ներկայացրեք արդյունքը և կարճ նշում՝ ինչ եք ուղղել։</p>',
      '<div data-lab="practice-choice"></div>',
      '<h3>Ընդհանուր որակի ցանկ</h3>',
      '<ul><li>Յուրաքանչյուր պնդում հաստատված է, հակասող է և ուղղված, կամ նշված է որպես չնշված։</li>',
      '<li>Հորինված վերջնաժամկետներ, վճարներ, տարողություններ կամ տողերի քանակներ չկան։</li>',
      '<li>Կարող եք անվանել, թե ով կհաստատեր հենց այս ելքը օգտագործումից առաջ։</li>',
      '<li>Կարող եք բացատրել մեկ ուղղում, որն արել եք աղբյուրը ստուգելուց հետո։</li></ul>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>Ո՞ր խմբագրման մակարդակն է ձեր աշխատանքում ամենից հաճախ թաքցնում չհիմնավորված պնդումներ։</li>',
      '<li>Ե՞րբ է նախընտրությունը ձեզ գայթակղել բաց թողնել փաստի ստուգումը։</li>',
      '<li>Լաբորատոր A-ի կամ B-ի ո՞ր քայլը կվերօգտագործեք հաջորդիվ։</li></ul>'
    ].join('')
  }
};

function apply(lang) {
  const data = load(lang);
  const pack = lang === 'hy' ? hy : en;
  Object.keys(pack).forEach((id) => {
    setLesson(data, '4', id, pack[id].html, pack[id].minutes);
  });

  const section = data.sections.find((s) => s.id === '4');
  if (section) {
    section.summary = lang === 'en'
      ? 'Writing edits, constrained planning, graduated tutoring, media checks, everyday preferences versus facts, and a reusable prompt card.'
      : 'Գրավոր խմբագրումներ, սահմանափակ պլանավորում, աստիճանական դասավանդում, մեդիայի ստուգումներ, ամենօրյա նախընտրություններ ընդդեմ փաստերի և վերօգտագործելի հրահանգի քարտ։';
  }

  if (lang === 'en') {
    data.quizzes[3] = [
      [
        'An edit makes a paragraph smoother and adds “registration closes 10 October,” which is not in the notice. What should you do?',
        'Reject the attractive addition. Keep clarity improvements that preserve meaning; delete unsupported claims.'
      ],
      [
        'A chart bars sum to 100, but an AI extract says “120 participants total.” What is the error type?',
        'Extraction invented a total that does not match the labeled bars. Verify totals against the visual, not the fluent summary.'
      ]
    ];
  } else {
    data.quizzes[3] = [
      [
        'Խմբագրումը պարբերությունը դարձնում է ավելի սահուն և ավելացնում է «գրանցումը փակվում է հոկտեմբերի 10-ին», որը ծանուցումում չկա։ Ի՞նչ անել։',
        'Մերժեք գրավիչ հավելումը։ Պահպանեք իմաստը պահող պարզության բարելավումները․ ջնջեք չհիմնավորված պնդումները։'
      ],
      [
        'Գծապատկերի սյուների գումարը 100 է, բայց ԱԲ արդյունահանումը ասում է «ընդամենը 120 մասնակից»։ Ի՞նչ տեսակի սխալ է սա։',
        'Արդյունահանումը հորինել է գումար, որը չի համընկնում պիտակված սյուներին։ Ստուգեք գումարները պատկերի դեմ, ոչ սահուն ամփոփման։'
      ]
    ];
  }

  save(lang, data);
  console.log('Revised Chapter 4 for', lang);
}

apply('en');
apply('hy');
