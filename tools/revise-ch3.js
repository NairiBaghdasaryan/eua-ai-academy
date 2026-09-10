/**
 * Revise Chapter 3 Checking AI (EN + HY).
 * Run: node tools/revise-ch3.js
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
    minutes: 3,
    html: [
      '<p>Generative systems are good at sounding finished. Fluency is presentation quality, not proof. Two answers can look equally polished while only one is supported by evidence.</p>',
      '<h3>Try this: two polished answers</h3>',
      '<p>Both answers below are fluent. One includes an unsupported claim. Identify which evidence would distinguish them <em>before</em> you see a checklist.</p>',
      '<div data-lab="fluency-spot"></div>',
      '<h3>Then use TRACE</h3>',
      '<p>After you feel the problem fluency creates, use TRACE as a practical routine:</p>',
      '<ol><li><strong>T</strong>arget the claims that matter.</li><li><strong>R</strong>equest the evidence for each claim.</li><li><strong>A</strong>ccess the original source.</li><li><strong>C</strong>ompare the source with the claim.</li><li><strong>E</strong>xplain remaining uncertainty.</li></ol>',
      '<p>TRACE turns “be careful” into observable steps. Style never replaces those steps.</p>'
    ].join('')
  },
  '2': {
    minutes: 3,
    html: [
      '<p>Evidence quality is not one yes/no check. Separate <strong>existence</strong> (is there a source?), <strong>relevance</strong> (does it address this claim?), <strong>date</strong> (is it current enough?), and <strong>independence</strong> (is it the same story copied twice?).</p>',
      '<h3>Three evidence situations</h3>',
      '<p>Classify each case, then open the teaching note.</p>',
      '<div data-lab="evidence-cases"></div>',
      '<h3>How to work</h3>',
      '<ul><li>Prefer primary sources for rules, product behavior, statistics, and research findings.</li>',
      '<li>Open important citations; a link that exists but does not support the claim is not evidence.</li>',
      '<li>Ask for publication dates and distinguish the date of an event from the date of an article.</li>',
      '<li>Two sites repeating one press release are not independent confirmation.</li></ul>',
      '<aside class="lesson-callout"><p><strong>Habit</strong></p><p>Write the claim in your own words, then ask: What exact sentence in which source supports it?</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 3,
    html: [
      '<p>Bias can appear when outcomes change with a characteristic that should be irrelevant to the task. One small classroom test cannot prove a system fair or unfair overall. It can show a difference worth documenting and escalating.</p>',
      '<h3>Controlled comparison</h3>',
      '<p>Keep the job description and required skills constant. Change only the name and one background cue. Record what differs in the AI draft.</p>',
      '<div data-lab="bias-compare"></div>',
      '<h3>Armenian-language check</h3>',
      '<p>For Armenian text, inspect terminology, names, institutions, and cultural references. An English result does not automatically transfer. Ask whether polite forms, institutional titles, and local place names stay accurate.</p>',
      '<aside class="lesson-callout"><p><strong>Limit of the exercise</strong></p><p>Document differences. Do not claim that a few prompts measure fairness for every user, language, or use case.</p></aside>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Treat institutional rules, ethical precautions, and legal questions as related but not interchangeable. Your university policy may be stricter than a vendor’s marketing page. Ethics may advise caution even when a law is unclear. Legal questions may need a qualified adviser.</p>',
      '<h3>1. Privacy and data classification</h3>',
      '<p>Before entering information into an AI service, classify it: public, internal, personal, contractual, financial, health, student, customer, or security-related. Follow institution policy and the tool’s current data controls.</p>',
      '<div data-lab="submit-gate"></div>',
      '<h3>2. Security and prompt injection</h3>',
      '<p>Prompt injection is an instruction hidden in a document, webpage, email, or tool output that tries to redirect the AI. Treat external content as data, not authority.</p>',
      '<div data-lab="injection-demo"></div>',
      '<h3>3. Intellectual property and academic integrity</h3>',
      '<p>Keep source records, disclose assistance when required, and do not ask a system to imitate a living artist’s or author’s protected style for publication. Separate “allowed by the tool terms” from “allowed by your course or employer rules.”</p>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>Replace vague “human oversight” with a concrete decision: <strong>Who approves this exact output before it is used?</strong> Name the reviewer, the evidence required, and the stop condition.</p>',
      '<h3>Three situations with rising consequences</h3>',
      '<div data-lab="human-gate"></div>',
      '<aside class="lesson-callout"><p><strong>Design rule</strong></p><p>If nobody can explain why a result is acceptable, the workflow is not ready for consequential use.</p></aside>'
    ].join('')
  },
  practice: {
    minutes: 4,
    html: [
      '<h3>Interactive claim ledger</h3>',
      '<p>Use only the fictional Notice v2 below. Classify each statement as <strong>supported</strong>, <strong>contradicted</strong>, or <strong>not stated</strong>, then inspect the relevant source passage.</p>',
      '<blockquote class="lesson-source" id="notice-v2"><p><strong>Notice v2 (fictional training source)</strong><br>',
      'Section A. An AI literacy workshop takes place on <mark>15 October 2026</mark>, 14:00–16:00, in Room 204. Capacity is <mark>up to 20</mark> participants.<br>',
      'Section B. The fee is AMD 10,000 per participant. Registration is open. <mark>No registration deadline is specified</mark>.<br>',
      'Section C. A seat is confirmed only after staff approval. This version supersedes Notice v1, which stated 14 October and 40 places.</p></blockquote>',
      '<div data-lab="claim-ledger"></div>',
      '<p><strong>Language note.</strong> “Up to 20” is not the same as “at least 20.” In Armenian, compare <em>մինչև 20</em> with <em>առնվազն 20</em>. A fluent swap can reverse the meaning.</p>',
      '<h3>Deliverable</h3>',
      '<p>A corrected announcement that keeps only supported claims, marks uncertainty where the notice is silent, and records who would approve publication.</p>',
      '<h3>Reflection</h3>',
      '<ul><li>Which TRACE step caught the most important error in this exercise?</li>',
      '<li>Where would an unsupported but fluent claim create the greatest harm in your context?</li>',
      '<li>Who should approve the next AI-assisted output you plan to use?</li></ul>'
    ].join('')
  }
};

const hy = {
  '1': {
    minutes: 3,
    html: [
      '<p>Գեներատիվ համակարգերը լավ են «պատրաստ» հնչելու մեջ։ Սահունությունը ներկայացման որակ է, ոչ ապացույց։ Երկու պատասխան կարող են նույնքան հղկված լինել, բայց միայն մեկը լինի ապացույցով հիմնավորված։</p>',
      '<h3>Փորձեք․ երկու հղկված պատասխան</h3>',
      '<p>Ստորև երկու պատասխաններն էլ սահուն են։ Մեկը պարունակում է չհիմնավորված պնդում։ Նախ որոշեք՝ ինչ ապացույց կտարբերեր դրանք, ապա տեսեք ուսումնական նշումը։</p>',
      '<div data-lab="fluency-spot"></div>',
      '<h3>Այնուհետև կիրառեք TRACE</h3>',
      '<p>Երբ զգաք սահունության խնդիրը, օգտագործեք TRACE գործնական ընթացակարգը․</p>',
      '<ol><li><strong>T</strong> — թիրախավորեք կարևոր պնդումները։</li><li><strong>R</strong> — պահանջեք ապացույց յուրաքանչյուր պնդման համար։</li><li><strong>A</strong> — բացեք սկզբնաղբյուրը։</li><li><strong>C</strong> — համեմատեք աղբյուրը պնդման հետ։</li><li><strong>E</strong> — բացատրեք մնացած անորոշությունը։</li></ol>',
      '<p>TRACE-ը «զգույշ եղիր»-ը դարձնում է դիտարկելի քայլեր։ Ոճը չի փոխարինում այդ քայլերին։</p>'
    ].join('')
  },
  '2': {
    minutes: 3,
    html: [
      '<p>Ապացույցի որակը մեկ այո/ոչ ստուգում չէ։ Առանձնացրեք <strong>գոյությունը</strong> (կա՞ աղբյուր), <strong>համապատասխանությունը</strong> (արդյոք վերաբերում է այս պնդմանը), <strong>ամսաթիվը</strong> (արդյոք բավական արդիական է) և <strong>անկախությունը</strong> (նույն պատմության կրկնությո՞ւն է)։</p>',
      '<h3>Ապացույցի երեք իրավիճակ</h3>',
      '<p>Դասակարգեք յուրաքանչյուր դեպքը, ապա բացեք ուսումնական նշումը։</p>',
      '<div data-lab="evidence-cases"></div>',
      '<h3>Ինչպես աշխատել</h3>',
      '<ul><li>Կանոնների, վիճակագրության և հետազոտության համար նախընտրեք առաջնային աղբյուրներ։</li>',
      '<li>Բացեք կարևոր հղումները․ գոյություն ունեցող, բայց պնդումը չաջակցող հղումը ապացույց չէ։</li>',
      '<li>Հարցրեք հրապարակման ամսաթիվը և տարբերակեք իրադարձության ու հոդվածի ամսաթվերը։</li>',
      '<li>Մեկ մամուլի հաղորդագրություն կրկնող երկու կայք անկախ հաստատում չեն։</li></ul>',
      '<aside class="lesson-callout"><p><strong>Սովորություն</strong></p><p>Պնդումը գրեք ձեր բառերով, ապա հարցրեք․ Որ աղբյուրի որ նախադասությունն է սա հաստատում։</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 3,
    html: [
      '<p>Կողմնակալությունը կարող է երևալ, երբ արդյունքը փոխվում է այնպիսի հատկանիշով, որը առաջադրանքի համար պետք է անտեղի լինի։ Մեկ փոքր դասարանային փորձը չի ապացուցում, որ համակարգը ընդհանուր առմամբ արդար է կամ անարդար։ Այն կարող է ցույց տալ տարբերություն, որը պետք է փաստաթղթավորել և բարձրացնել։</p>',
      '<h3>Վերահսկվող համեմատություն</h3>',
      '<p>Աշխատանքի նկարագրությունն ու պահանջվող հմտությունները պահեք նույնը։ Փոխեք միայն անունը և մեկ ֆոնային ազդանշան։ Գրանցեք՝ ինչ է տարբերվում ԱԲ նախագծում։</p>',
      '<div data-lab="bias-compare"></div>',
      '<h3>Հայերենի ստուգում</h3>',
      '<p>Հայերեն տեքստում ստուգեք եզրույթները, անունները, հաստատությունները և մշակութային հղումները։ Անգլերեն արդյունքը ավտոմատ չի տեղափոխվում։ Ստուգեք՝ արդյոք քաղաքավարության ձևերը, պաշտոնական անվանումներն ու տեղանունները ճշգրիտ են։</p>',
      '<aside class="lesson-callout"><p><strong>Վարժության սահմանը</strong></p><p>Փաստաթղթավորեք տարբերությունները։ Մի պնդեք, թե մի քանի հրահանգ չափում է արդարությունը բոլոր օգտատերերի, լեզուների կամ կիրառումների համար։</p></aside>'
    ].join('')
  },
  '4': {
    minutes: 4,
    html: [
      '<p>Հաստատության կանոնները, էթիկական նախազգուշացումները և իրավական հարցերը կապված են, բայց փոխարինելի չեն։ Ձեր համալսարանի քաղաքականությունը կարող է ավելի խիստ լինել, քան մատակարարի մարքեթինգային էջը։ Էթիկան կարող է խորհուրդ տալ զգուշություն նույնիսկ այնտեղ, որտեղ օրենքը պարզ չէ։ Իրավական հարցերը կարող են պահանջել որակավորված խորհրդատու։</p>',
      '<h3>1. Գաղտնիություն և տվյալների դասակարգում</h3>',
      '<p>ԱԲ ծառայության մեջ տեղեկություն մտցնելուց առաջ դասակարգեք այն․ հրապարակային, ներքին, անձնական, պայմանագրային, ֆինանսական, առողջական, ուսանողական, հաճախորդի կամ անվտանգության։ Հետևեք հաստատության քաղաքականությանը և գործիքի ընթացիկ վերահսկմանը։</p>',
      '<div data-lab="submit-gate"></div>',
      '<h3>2. Անվտանգություն և հրահանգի ներմուծում</h3>',
      '<p>Հրահանգի ներմուծումը փաստաթղթում, վեբ էջում, նամակում կամ գործիքի ելքում թաքնված հրահանգ է, որը փորձում է շեղել ԱԲ-ը։ Արտաքին բովանդակությունը դիտարկեք որպես տվյալ, ոչ իշխանություն։</p>',
      '<div data-lab="injection-demo"></div>',
      '<h3>3. Մտավոր սեփականություն և ակադեմիական ազնվություն</h3>',
      '<p>Պահեք աղբյուրների գրառումներ, բացահայտեք օգնությունը՝ երբ պահանջվում է, և մի խնդրեք համակարգին կրկնօրինակել կենդանի հեղինակի պաշտպանված ոճը հրապարակման համար։ Տարանջատեք «գործիքի պայմաններով թույլատրելի» և «ձեր դասընթացի կամ գործատուի կանոններով թույլատրելի»։</p>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>«Մարդկային վերահսկում» ընդհանուր արտահայտությունը փոխարինեք կոնկրետ որոշմամբ․ <strong>Ո՞վ է հաստատում հենց այս ելքը՝ կիրառելուց առաջ։</strong> Նշեք վերանայողին, պահանջվող ապացույցը և կանգառի պայմանը։</p>',
      '<h3>Երեք իրավիճակ՝ աճող հետևանքներով</h3>',
      '<div data-lab="human-gate"></div>',
      '<aside class="lesson-callout"><p><strong>Նախագծման կանոն</strong></p><p>Եթե ոչ ոք չի կարող բացատրել՝ ինչու է արդյունքն ընդունելի, աշխատանքային հոսքը պատրաստ չէ հետևանք ունեցող կիրառման։</p></aside>'
    ].join('')
  },
  practice: {
    minutes: 4,
    html: [
      '<h3>Ինտերակտիվ պնդումների մատյան</h3>',
      '<p>Օգտագործեք միայն ստորև հորինված Notice v2-ը։ Յուրաքանչյուր պնդում դասակարգեք որպես <strong>հաստատված</strong>, <strong>հակասող</strong> կամ <strong>չնշված</strong>, ապա դիտեք համապատասխան հատվածը։</p>',
      '<blockquote class="lesson-source" id="notice-v2"><p><strong>Notice v2 (հորինված ուսումնական աղբյուր)</strong><br>',
      'Բաժին A. ԱԲ գրագիտության աշխատարանը տեղի է ունենում <mark>2026 թ. հոկտեմբերի 15-ին</mark>, 14:00–16:00, 204 սենյակում։ Տարողությունը <mark>մինչև 20</mark> մասնակից է։<br>',
      'Բաժին B. Վճարը 10,000 ՀՀ դրամ է մեկ մասնակցի համար։ Գրանցումը բաց է։ <mark>Գրանցման վերջնաժամկետ նշված չէ</mark>։<br>',
      'Բաժին C. Տեղը հաստատվում է միայն աշխատակազմի հաստատումից հետո։ Այս տարբերակը փոխարինում է Notice v1-ին, որտեղ նշված էին հոկտեմբերի 14-ը և 40 տեղ։</p></blockquote>',
      '<div data-lab="claim-ledger"></div>',
      '<p><strong>Լեզվական նշում։</strong> «Մինչև 20»-ը նույնը չէ, ինչ «առնվազն 20»-ը։ Սահուն փոխարինումը կարող է շրջել իմաստը։</p>',
      '<h3>Արդյունք</h3>',
      '<p>Ուղղված հայտարարություն, որը պահում է միայն հաստատված պնդումները, նշում է անորոշությունը՝ որտեղ ծանուցումը լուռ է, և գրանցում է՝ ով կհաստատեր հրապարակումը։</p>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>TRACE-ի ո՞ր քայլն է բռնել այս վարժության ամենակարևոր սխալը։</li>',
      '<li>Որտե՞ղ կստեղծեր չհիմնավորված, բայց սահուն պնդումը ամենամեծ վնասը ձեր համատեքստում։</li>',
      '<li>Ո՞վ պետք է հաստատի ձեր հաջորդ ԱԲ-ով աջակցված ելքը։</li></ul>'
    ].join('')
  }
};

for (const lang of ['en', 'hy']) {
  const data = load(lang);
  const pack = lang === 'en' ? en : hy;
  for (const [id, value] of Object.entries(pack)) {
    setLesson(data, '3', id, value.html, value.minutes);
  }
  const section = data.sections.find((s) => s.id === '3');
  section.description = lang === 'en'
    ? 'Verification, evidence, bias checks, privacy judgment, and concrete human approval points.'
    : 'Ստուգում, ապացույց, կողմնակալության ստուգումներ, գաղտնիության դատողություն և մարդու կոնկրետ հաստատման կետեր։';

  if (lang === 'en') {
    data.quizzes[2] = [
      [
        'Two fluent answers name the same workshop date, but only one invents a registration deadline. What evidence distinguishes them?',
        'Open the governing notice. If no deadline is stated, the invented deadline is unsupported even if the wording is polished.'
      ],
      [
        'A draft says “at least 20 participants” while the notice says “up to 20.” How do you classify the claim?',
        'Contradicted. “Up to 20” sets a maximum; “at least 20” sets a minimum. Correct the wording or remove the claim.'
      ]
    ];
  } else {
    data.quizzes[2] = [
      [
        'Երկու սահուն պատասխան նշում են նույն աշխատարանի ամսաթիվը, բայց միայն մեկը հորինում է գրանցման վերջնաժամկետ։ Ի՞նչ ապացույց է տարբերում դրանք։',
        'Բացեք վավեր ծանուցումը։ Եթե վերջնաժամկետ նշված չէ, հորինված վերջնաժամկետը չհիմնավորված է՝ նույնիսկ եթե ձևակերպումը հղկված է։'
      ],
      [
        'Նախագիծը գրում է «առնվազն 20 մասնակից», մինչ ծանուցումը ասում է «մինչև 20»։ Ինչպե՞ս դասակարգել պնդումը։',
        'Հակասող։ «Մինչև 20»-ը առավելագույն է, «առնվազն 20»-ը՝ նվազագույն։ Ուղղեք ձևակերպումը կամ հանեք պնդումը։'
      ]
    ];
  }

  save(lang, data);
  console.log('Revised Chapter 3 for', lang);
}
