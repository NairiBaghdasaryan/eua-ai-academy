/**
 * Revise Chapter 2 Talking to AI (EN + HY).
 * Run: node tools/revise-ch2.js
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
      '<p>Start from a flawed output, not a definition. A vague request produced the polished draft below. Identify what the request failed to specify, then compare the revised result.</p>',
      '<div data-lab="flawed-prompt"></div>',
      '<p>Prompting is writing a <strong>clear, testable brief</strong>: who it is for, which source governs, what must appear, what must not be invented, and how success will be checked. It is not a secret phrase.</p>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>CLEAR is a guided checklist, not a ritual. Casual prompts do not need all five labels. Use it when something important is missing.</p>',
      '<ul><li><strong>C</strong>ontext — situation and governing source</li>',
      '<li><strong>L</strong>ead task — the action to perform</li>',
      '<li><strong>E</strong>vidence / examples — material that must guide the answer</li>',
      '<li><strong>A</strong>udience &amp; acceptance — who uses it and what counts as good</li>',
      '<li><strong>R</strong>esponse format &amp; review — shape of the answer and how to handle uncertainty</li></ul>',
      '<div data-lab="clear-builder"></div>',
      '<aside class="lesson-callout"><p><strong>Omit and predict</strong></p><p>If you drop Evidence, invented details become more likely. If you drop Format, you may get a fluent essay when you needed a table.</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>The same facts can appear as a paragraph, a table, or a checklist. Choose the format that fits the next use. When instructions conflict, set priorities — do not keep stacking constraints.</p>',
      '<div data-lab="format-fit"></div>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Improve prompts with a visible revision history. Change <strong>one major factor at a time</strong>. A single better reply does not prove a universally better prompt.</p>',
      '<div data-lab="revise-history"></div>'
    ].join('')
  },
  '5': {
    minutes: 4,
    html: [
      '<p>Use this troubleshooting guide when an answer disappoints. Each symptom points to a likely cause, a revision, and a verification step.</p>',
      '<div data-lab="prompt-troubleshoot"></div>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Same starting prompt and source</h3>',
      '<p>Everyone begins with the same weak request and Notice v2. Improve the prompt against three fixed criteria — not by making it longer.</p>',
      '<blockquote class="lesson-source"><p><strong>Starting prompt:</strong> “Write an announcement about the AI workshop.”<br>',
      '<strong>Source (Notice v2):</strong> 15 October 2026, 14:00–16:00, Room 204, up to 20 participants, fee AMD 10,000, registration open, no deadline stated, seat confirmed after staff approval.</p></blockquote>',
      '<p><strong>Fixed criteria:</strong> (1) every claim is supported by Notice v2 or marked not stated; (2) audience and format are explicit; (3) no unnecessary wording that does not change the answer.</p>',
      '<div data-lab="prompt-practice"></div>',
      '<h3>Reflection</h3>',
      '<ul><li>Which missing element caused the invented deadline?</li>',
      '<li>Where did extra adjectives add no testable value?</li>',
      '<li>Which single change most improved the draft?</li></ul>'
    ].join('')
  }
};

const hy = {
  '1': {
    minutes: 4,
    html: [
      '<p>Սկսեք սխալ ելքից, ոչ սահմանումից։ Անորոշ հարցումը տվել է ստորև հղկված նախագիծը։ Որոշեք՝ ինչ չի նշվել հարցումում, ապա համեմատեք վերանայված արդյունքը։</p>',
      '<div data-lab="flawed-prompt"></div>',
      '<p>Հրահանգավորումը <strong>պարզ, ստուգելի բրիֆ</strong> գրելն է․ ում համար է, որ աղբյուրն է վավեր, ինչ պետք է լինի, ինչ չի կարելի հորինել, և ինչպես կստուգվի հաջողությունը։ Այն գաղտնի արտահայտություն չէ։</p>'
    ].join('')
  },
  '2': {
    minutes: 4,
    html: [
      '<p>CLEAR-ը ուղղորդող ցանկ է, ոչ ծիսակարգ։ Ամենօրյա հրահանգներին բոլոր հինգ պիտակները պետք չեն։ Օգտագործեք, երբ կարևոր բան է պակասում։</p>',
      '<ul><li><strong>C</strong> — համատեքստ և վավեր աղբյուր</li>',
      '<li><strong>L</strong> — գլխավոր առաջադրանք</li>',
      '<li><strong>E</strong> — ապացույց / օրինակներ</li>',
      '<li><strong>A</strong> — լսարան և ընդունման չափանիշներ</li>',
      '<li><strong>R</strong> — պատասխանի ձևաչափ և վերանայում</li></ul>',
      '<div data-lab="clear-builder"></div>',
      '<aside class="lesson-callout"><p><strong>Բաց թողնել և կանխատեսել</strong></p><p>Եթե բաց թողնեք Evidence-ը, հորինված մանրամասներն ավելի հավանական են։ Եթե բաց թողնեք Format-ը, կարող եք ստանալ շարադրություն՝ աղյուսակի փոխարեն։</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Նույն փաստերը կարող են լինել պարբերություն, աղյուսակ կամ ցանկ։ Ընտրեք ձևաչափը հաջորդ օգտագործման համար։ Երբ հրահանգները հակասում են, սահմանեք առաջնություններ — մի կուտակեք նոր սահմանափակումներ։</p>',
      '<div data-lab="format-fit"></div>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Բարելավեք հրահանգները տեսանելի վերանայման պատմությամբ։ Միաժամանակ փոխեք <strong>մեկ հիմնական գործոն</strong>։ Մեկ ավելի լավ պատասխանը չի ապացուցում համընդհանուր ավելի լավ հրահանգ։</p>',
      '<div data-lab="revise-history"></div>'
    ].join('')
  },
  '5': {
    minutes: 4,
    html: [
      '<p>Օգտագործեք այս խնդիրների լուծման ուղեցույցը, երբ պատասխանը հիասթափեցնում է։ Յուրաքանչյուր ախտանիշ մատնանշում է հավանական պատճառ, վերանայում և ստուգման քայլ։</p>',
      '<div data-lab="prompt-troubleshoot"></div>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Նույն մեկնարկային հրահանգն ու աղբյուրը</h3>',
      '<p>Բոլորը սկսում են նույն թույլ հարցումից և Notice v2-ից։ Բարելավեք հրահանգը երեք ֆիքսված չափանիշով — ոչ երկարացնելով այն։</p>',
      '<blockquote class="lesson-source"><p><strong>Մեկնարկային հրահանգ․</strong> «Գրիր հայտարարություն ԱԲ աշխատարանի մասին։»<br>',
      '<strong>Աղբյուր (Notice v2)․</strong> 2026 թ. հոկտեմբերի 15, 14:00–16:00, սենյակ 204, մինչև 20 մասնակից, վճար 10,000 դրամ, գրանցումը բաց է, վերջնաժամկետ նշված չէ, տեղը հաստատվում է աշխատակազմի հաստատումից հետո։</p></blockquote>',
      '<p><strong>Ֆիքսված չափանիշներ․</strong> (1) յուրաքանչյուր պնդում հաստատված է Notice v2-ով կամ նշված է որպես չնշված․ (2) լսարանն ու ձևաչափը հստակ են․ (3) ավելորդ ձևակերպումներ չկան, որոնք պատասխանը չեն փոխում։</p>',
      '<div data-lab="prompt-practice"></div>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>Ո՞ր բացակա տարրն է հանգեցրել հորինված վերջնաժամկետին։</li>',
      '<li>Որտե՞ղ ավելորդ ածականները ստուգելի արժեք չեն ավելացրել։</li>',
      '<li>Ո՞ր մեկ փոփոխությունն է ամենաշատը բարելավել նախագիծը։</li></ul>'
    ].join('')
  }
};

function apply(lang) {
  const data = load(lang);
  const pack = lang === 'hy' ? hy : en;
  Object.keys(pack).forEach((id) => setLesson(data, '2', id, pack[id].html, pack[id].minutes));

  const section = data.sections.find((s) => s.id === '2');
  if (section) {
    section.summary = lang === 'en'
      ? 'Testable briefs, CLEAR as a checklist, formats and priorities, controlled iteration, and prompt troubleshooting.'
      : 'Ստուգելի բրիֆեր, CLEAR որպես ցանկ, ձևաչափեր և առաջնություններ, վերահսկվող կրկնություն և հրահանգների խնդիրների լուծում։';
  }

  if (lang === 'en') {
    data.quizzes[1] = [
      [
        'Which should stay fixed in an A/B prompt test?',
        'Source material, question, model/settings where possible, and scoring criteria. Otherwise the reason for a change is unclear.'
      ],
      [
        'A concise prompt omits the required source. Is it better?',
        'Not if omission lowers accuracy. Minimize unnecessary text while preserving required evidence.'
      ]
    ];
  } else {
    data.quizzes[1] = [
      [
        'A/B հրահանգի թեստում ի՞նչը պետք է մնա ֆիքսված։',
        'Աղբյուրը, հարցը, հնարավորության դեպքում մոդելը/կարգավորումները և գնահատման չափանիշները։ Այլապես փոփոխության պատճառը պարզ չէ։'
      ],
      [
        'Կարճ հրահանգը բաց է թողնում պարտադիր աղբյուրը։ Ավելի՞ լավ է։',
        'Ոչ, եթե բացթողումը նվազեցնում է ճշգրտությունը։ Կրճատեք ավելորդ տեքստը՝ պահպանելով պարտադիր ապացույցը։'
      ]
    ];
  }

  save(lang, data);
  console.log('Revised Chapter 2 for', lang);
}

apply('en');
apply('hy');
