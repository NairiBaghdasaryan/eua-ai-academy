/**
 * Revise Chapter 5 Choosing AI Tools (EN + HY).
 * Run: node tools/revise-ch5.js
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

const REVIEWED = '10 September 2026';
const REVIEWED_HY = '10 սեպտեմբերի 2026';

const AR = {
  ChatGPT: 'tested', Claude: 'tested', Gemini: 'tested', DeepL: 'tested',
  'Microsoft Copilot': 'vendor-stated', Perplexity: 'vendor-stated', DeepSeek: 'vendor-stated',
  'Le Chat': 'vendor-stated', NotebookLM: 'vendor-stated', Grammarly: 'vendor-stated',
  Canva: 'vendor-stated', 'Canva Magic Studio': 'vendor-stated', Gamma: 'vendor-stated',
  'GitHub Copilot': 'vendor-stated', Cursor: 'vendor-stated'
};

const LIMIT_EN = {
  'Microsoft Copilot': 'Capabilities depend on Microsoft 365 apps, tenant settings, and license — not only the model name.',
  ChatGPT: 'Plan features, memory, and data controls change by account type and date.',
  Claude: 'File limits, projects, and data settings vary by plan.',
  Gemini: 'Workspace vs consumer access and grounding options differ by account.',
  Perplexity: 'Citations help, but every link still needs a human open-and-check.',
  DeepL: 'Excellent for translation drafts; still verify names, titles, and sensitive phrasing.',
  Ollama: 'Local hosting adds setup and update responsibility; accuracy is not automatic.',
  Zapier: 'Automations can move data across systems — review permissions before connecting.'
};
const LIMIT_HY = {
  'Microsoft Copilot': 'Կարողությունները կախված են Microsoft 365 հավելվածներից, տենանտի կարգավորումներից և լիցենզիայից — ոչ միայն մոդելի անունից։',
  ChatGPT: 'Պլանի գործառույթները, հիշողությունը և տվյալների վերահսկումը փոխվում են հաշվի տեսակով և ամսաթվով։',
  Claude: 'Ֆայլերի սահմանները, նախագծերը և տվյալների կարգավորումները տարբերվում են ըստ պլանի։',
  Gemini: 'Workspace և սպառողական մուտքը, ինչպես նաև grounding տարբերակները, տարբեր են ըստ հաշվի։',
  Perplexity: 'Հղումներն օգնում են, բայց յուրաքանչյուր հղում դեռ պետք է բացել և ստուգել։',
  DeepL: 'Լավ է թարգմանության նախագծերի համար․ դեռ ստուգեք անունները, կոչումները և զգայուն ձևակերպումները։',
  Ollama: 'Տեղային տեղադրումը ավելացնում է կարգավորման և թարմացման պատասխանատվություն․ ճշգրտությունը ավտոմատ չէ։',
  Zapier: 'Ավտոմատացումները կարող են տվյալներ տեղափոխել համակարգերի միջև — նախ ստուգեք թույլտվությունները։'
};
const DEFAULT_LIMIT_EN = 'Check current plan limits, retention, training use, and language quality on your account.';
const DEFAULT_LIMIT_HY = 'Ստուգեք ընթացիկ պլանի սահմանները, պահպանումը, ուսուցման օգտագործումը և լեզվի որակը ձեր հաշվում։';

function arLabel(lang, code) {
  if (lang === 'hy') {
    return code === 'tested' ? 'ստուգված' : code === 'vendor-stated' ? 'մատակարարի հայտարարած' : 'չստուգված';
  }
  return code === 'tested' ? 'tested' : code === 'vendor-stated' ? 'vendor-stated' : 'not checked';
}

function buildDirectory(lang) {
  const sections = JSON.parse(fs.readFileSync(path.join(__dirname, `_ch5-dir-${lang}.json`), 'utf8'));
  const L = lang === 'hy'
    ? {
      intro: '<p>Սա գործնական լանդշաֆտ է, ոչ վարկանիշ։ Սկսեք ձեր հաստատության կողմից հաստատված գործիքներից, ապա փորձարկեք ոչ զգայուն առաջադրանքով։ Հասանելիությունն ու պլանի գործառույթները կարող են տարբերվել ըստ երկրի, հաշվի և ամսաթվի։</p><p>Յուրաքանչյուր գրառում ունի նույն կառուցվածքը․ հարմար առաջադրանքներ, մեկ մեկնարկային վարժություն, ստուգելի սահմանափակումներ, պաշտոնական հղում, վերջին վերանայման ամսաթիվ և հայերենի աջակցության կարգավիճակ (<strong>ստուգված</strong>, <strong>մատակարարի հայտարարած</strong> կամ <strong>չստուգված</strong>)։ Հավասար կատարողականություն մի ենթադրեք։</p>',
      tasks: 'Հարմար առաջադրանքներ', starter: 'Մեկնարկային վարժություն', limits: 'Ստուգելի սահմանափակումներ',
      official: 'Պաշտոնական հղում', reviewed: 'Վերջին վերանայում', armenian: 'Հայերենի աջակցություն', open: 'Բացել'
    }
    : {
      intro: '<p>This is a practical landscape, not a ranking. Start with tools already approved by your institution, then test with non-sensitive information. Availability and plan features can differ by country, account, and date.</p><p>Each entry uses the same structure: suitable tasks, one starter exercise, limitations to check, official link, last-reviewed date, and Armenian support marked as <strong>tested</strong>, <strong>vendor-stated</strong>, or <strong>not checked</strong> — not as equal performance.</p>',
      tasks: 'Suitable tasks', starter: 'Starter exercise', limits: 'Limitations to check',
      official: 'Official link', reviewed: 'Last reviewed', armenian: 'Armenian support', open: 'Open'
    };
  const reviewed = lang === 'hy' ? REVIEWED_HY : REVIEWED;
  const limits = lang === 'hy' ? LIMIT_HY : LIMIT_EN;
  const defaultLimit = lang === 'hy' ? DEFAULT_LIMIT_HY : DEFAULT_LIMIT_EN;

  const body = sections.map((section) => {
    const cards = section.rows.map((row) => {
      const code = AR[row.name] || 'not-checked';
      const limit = limits[row.name] || defaultLimit;
      return [
        '<article class="directory-entry">',
        `<h4><img class="tool-logo" src="${row.logo}" alt="${row.alt || ''}" loading="lazy"> ${row.name}</h4>`,
        `<p><strong>${L.tasks}.</strong> ${row.use}</p>`,
        `<p><strong>${L.starter}.</strong> ${row.task}</p>`,
        `<p><strong>${L.limits}.</strong> ${limit}</p>`,
        `<p><strong>${L.armenian}.</strong> ${arLabel(lang, code)}</p>`,
        `<p><strong>${L.reviewed}.</strong> ${reviewed}</p>`,
        `<p><a href="${row.link}" target="_blank" rel="noopener noreferrer">${L.official} · ${L.open}</a></p>`,
        '</article>'
      ].join('');
    }).join('');
    return `<h3>${section.title}</h3><p>${section.intro}</p><div class="directory-grid">${cards}</div>`;
  }).join('');

  return L.intro + body;
}

function syncTools(data, lang) {
  const sections = JSON.parse(fs.readFileSync(path.join(__dirname, `_ch5-dir-${lang}.json`), 'utf8'));
  const limits = lang === 'hy' ? LIMIT_HY : LIMIT_EN;
  const defaultLimit = lang === 'hy' ? DEFAULT_LIMIT_HY : DEFAULT_LIMIT_EN;
  const reviewed = lang === 'hy' ? REVIEWED_HY : REVIEWED;
  const byName = new Map();
  sections.forEach((section) => {
    section.rows.forEach((row) => {
      byName.set(row.name, {
        name: row.name,
        group: section.title,
        use: row.use,
        url: row.link,
        logo: row.logo,
        starter: row.task,
        limitations: limits[row.name] || defaultLimit,
        armenian: arLabel(lang, AR[row.name] || 'not-checked'),
        reviewed,
        checked: reviewed,
        reviewer: ''
      });
    });
  });
  // Preserve any tools not in directory tables (e.g. 40th tool)
  data.tools = data.tools.map((tool) => {
    const next = byName.get(tool.name);
    if (!next) {
      return {
        ...tool,
        starter: tool.starter || '',
        limitations: tool.limitations || defaultLimit,
        armenian: tool.armenian || arLabel(lang, 'not-checked'),
        reviewed: tool.reviewed || reviewed,
        checked: reviewed
      };
    }
    byName.delete(tool.name);
    return next;
  });
  // Append any new directory tools missing from tools array
  for (const extra of byName.values()) data.tools.push(extra);
}

const enLessons = {
  '1': {
    minutes: 4,
    html: [
      '<p>Compare four ways to run the <strong>same task</strong>: summarize an approved workshop notice for staff. The task stays fixed so you can see setup and responsibility differences.</p>',
      '<div data-lab="access-modes"></div>',
      '<ul><li><strong>Chat application:</strong> fastest start for individuals; you still check outputs and account terms.</li>',
      '<li><strong>API:</strong> embeds the model in another product. Useful for developers — <em>optional for beginners</em>, not a prerequisite.</li>',
      '<li><strong>Automation platform:</strong> connects apps with visual steps; you own permissions, triggers, and failure handling.</li>',
      '<li><strong>Local model:</strong> more deployment control; you own updates, hardware, and evaluation.</li></ul>',
      '<aside class="lesson-callout"><p><strong>Beginner note</strong></p><p>Most learners only need an approved chat product at first. Learn APIs when a workflow truly requires them.</p></aside>'
    ].join('')
  },
  '2': {
    minutes: 3,
    html: [
      '<p>Think in layers. This is the practical extension of the engine idea from earlier lessons — not a repeat of the full comparison.</p>',
      '<figure class="layer-diagram" aria-label="Model to application to features"><div><strong>Model</strong><span>engine and capabilities</span></div><div><strong>Application / product</strong><span>interface, files, search, memory</span></div><div><strong>Enabled features &amp; permissions</strong><span>what your account may actually use</span></div></figure>',
      '<p>Classify familiar names and capabilities into the correct layer.</p>',
      '<div data-lab="layer-classify"></div>',
      '<aside class="lesson-callout"><p><strong>Why it matters</strong></p><p>A strong model inside a product without the right file tools, or without the right permissions on your plan, will not meet the job.</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Start with <strong>pass/fail requirements</strong> before weighted scores. A tool that fails a required privacy or factual-accuracy condition must not win through attractive formatting.</p>',
      '<div data-lab="eval-scorecard"></div>',
      '<p>After required gates pass, weight criteria such as task quality, language support, review effort, and cost. Adjust weights and watch how the ranking changes — gates still block unsafe winners.</p>'
    ].join('')
  },
  '4': {
    minutes: 3,
    html: [
      '<p>Inspect an actual plan with a short checklist. Use dated notes and official links. Do not treat any account type as permanently safe.</p>',
      '<div data-lab="plan-checklist"></div>',
      '<ul><li><strong>Availability</strong> — who can access it in your country and institution?</li>',
      '<li><strong>Limits</strong> — messages, seats, file size, rate caps.</li>',
      '<li><strong>Retention</strong> — how long prompts and files are kept.</li>',
      '<li><strong>Data use</strong> — training, human review, subprocessors.</li>',
      '<li><strong>Administrator access</strong> — who can see logs or content?</li>',
      '<li><strong>Cancellation</strong> — how to stop payment and export or delete data.</li></ul>',
      '<p>Example note format: “Reviewed ChatGPT Help Center data-controls page on 10 September 2026 — confirm again before purchase.” Always open the vendor’s current documentation.</p>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>Use this page as a visual navigation map. Each category states the outcome it supports and a few starting options. The full curated directory is one click away so the first view stays calm.</p>',
      '<div class="map-grid">',
      '<div><p><strong>General assistants</strong></p><p>Writing, learning, file work, mixed analysis</p><p><img class="tool-logo" src="content/explorers/assets/ddff1207cf0f20bd.png" alt="" loading="lazy"> ChatGPT · <img class="tool-logo" src="content/explorers/assets/abf70d8800538400.png" alt="" loading="lazy"> Claude · <img class="tool-logo" src="content/explorers/assets/f84a73008cf59aa7.png" alt="" loading="lazy"> Gemini</p></div>',
      '<div><p><strong>Research &amp; learning</strong></p><p>Evidence, citations, study support</p><p><img class="tool-logo" src="content/explorers/assets/3a94acef0caef4ef.png" alt="" loading="lazy"> Perplexity · <img class="tool-logo" src="content/explorers/assets/f10920661cf077b6.png" alt="" loading="lazy"> NotebookLM</p></div>',
      '<div><p><strong>Writing &amp; presentations</strong></p><p>Editing, decks, bilingual polish</p><p>Grammarly · DeepL · Gamma · Canva</p></div>',
      '<div><p><strong>Images &amp; media</strong></p><p>Visuals, video drafts, audio</p><p>Canva · Midjourney · ElevenLabs</p></div>',
      '<div><p><strong>Coding</strong></p><p>Explain, draft, and test code with review</p><p>GitHub Copilot · Cursor · Claude Code</p></div>',
      '<div><p><strong>Automation &amp; local</strong></p><p>Connect apps or host models yourself</p><p>Zapier · n8n · Ollama</p></div>',
      '</div>',
      '<p><a class="small-button" href="?chapter=5&amp;lesson=8">Open the full curated directory →</a></p>'
    ].join('')
  },
  '6': {
    minutes: 3,
    html: [
      '<p>Turn the old route table into a short decision guide. Answer four prompts: desired output, evidence needs, sensitivity, and available tools. Receive a <strong>category and evaluation process</strong> — not an unquestionable “best tool.”</p>',
      '<div data-lab="decision-route"></div>'
    ].join('')
  },
  '9': {
    minutes: 4,
    html: [
      '<p>Use one small comparison throughout: choose a tool to draft a bilingual staff notice from Notice v2. First study a completed decision record, then edit your own.</p>',
      '<div data-lab="decision-record"></div>',
      '<p>The seven steps stay the same: define the job, classify risk, decide evidence, choose product type, run one test set, review privacy and total cost, then record the decision with date and owner.</p>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Compare two accessible tools</h3>',
      '<p>You do not need three paid products. Compare two accessible options — or use the sample outputs below if you have no account. Score the quality of your <strong>evidence and reasoning</strong>, not which brand you prefer.</p>',
      '<div data-lab="tool-compare"></div>',
      '<h3>Reflection</h3>',
      '<ul><li>Which pass/fail gate would have stopped a polished but unsafe winner?</li>',
      '<li>Where did a model name tempt you to assume features your plan may not include?</li>',
      '<li>What dated official page would you reopen before recommending a tool at work?</li></ul>'
    ].join('')
  }
};

const hyLessons = {
  '1': {
    minutes: 4,
    html: [
      '<p>Համեմատեք նույն առաջադրանքը կատարելու չորս եղանակ՝ հաստատված աշխատարանի ծանուցումը ամփոփել աշխատակազմի համար։ Առաջադրանքը ֆիքսված է, որպեսզի տեսնեք կարգավորման և պատասխանատվության տարբերությունները։</p>',
      '<div data-lab="access-modes"></div>',
      '<ul><li><strong>Զրույցի հավելված․</strong> ամենաարագ մեկնարկը անհատների համար․ դուք դեռ ստուգում եք ելքերն ու հաշվի պայմանները։</li>',
      '<li><strong>API․</strong> մոդելը տեղադրում է այլ արտադրանքում։ Օգտակար է մշակողների համար — <em>սկսնակների համար ընտրովի է</em>, ոչ պարտադիր նախապայման։</li>',
      '<li><strong>Ավտոմատացման հարթակ․</strong> կապում է հավելվածները տեսողական քայլերով․ դուք եք պատասխանատու թույլտվությունների, գործարկիչների և սխալների համար։</li>',
      '<li><strong>Տեղային մոդել․</strong> ավելի շատ վերահսկում տեղակայման վրա․ դուք եք պատասխանատու թարմացումների, սարքավորման և գնահատման համար։</li></ul>',
      '<aside class="lesson-callout"><p><strong>Սկսնակների նշում</strong></p><p>Սկզբում շատ սովորողների բավարար է հաստատված զրույցի արտադրանքը։ API սովորեք, երբ աշխատանքային հոսքն իսկապես պահանջում է։</p></aside>'
    ].join('')
  },
  '2': {
    minutes: 3,
    html: [
      '<p>Մտածեք շերտերով։ Սա նախորդ դասերի «շարժիչ» գաղափարի գործնական շարունակությունն է — ոչ ամբողջ համեմատության կրկնությունը։</p>',
      '<figure class="layer-diagram" aria-label="Մոդելից մինչև հավելված և գործառույթներ"><div><strong>Մոդել</strong><span>շարժիչ և կարողություններ</span></div><div><strong>Հավելված / արտադրանք</strong><span>ինտերֆեյս, ֆայլեր, որոնում, հիշողություն</span></div><div><strong>Միացված գործառույթներ և թույլտվություններ</strong><span>այն, ինչ ձեր հաշիվն իրականում կարող է օգտագործել</span></div></figure>',
      '<p>Ծանոթ անուններն ու կարողությունները դասակարգեք ճիշտ շերտում։</p>',
      '<div data-lab="layer-classify"></div>',
      '<aside class="lesson-callout"><p><strong>Ինչու է կարևոր</strong></p><p>Ուժեղ մոդելը՝ առանց ճիշտ ֆայլային գործիքների կամ պլանի թույլտվությունների, առաջադրանքը չի կատարի։</p></aside>'
    ].join('')
  },
  '3': {
    minutes: 4,
    html: [
      '<p>Սկսեք <strong>անցում/ձախողում պահանջներից</strong>՝ նախքան կշռված գնահատականները։ Գաղտնիության կամ փաստերի ճշգրտության պարտադիր պայմանը ձախողած գործիքը չպետք է հաղթի գրավիչ ձևաչափով։</p>',
      '<div data-lab="eval-scorecard"></div>',
      '<p>Պարտադիր դարպասները անցնելուց հետո կշռեք որակը, լեզվի աջակցությունը, վերանայման ջանքը և արժեքը։ Փոխեք կշիռները և տեսեք, թե ինչպես է փոխվում արդյունքը — դարպասները դեռ արգելում են անվտանգ չհամարվող հաղթողներին։</p>'
    ].join('')
  },
  '4': {
    minutes: 3,
    html: [
      '<p>Իրական պլանը ստուգեք կարճ ցանկով։ Օգտագործեք ամսաթվով նշումներ և պաշտոնական հղումներ։ Ոչ մի հաշվի տեսակ մի համարեք մշտապես անվտանգ։</p>',
      '<div data-lab="plan-checklist"></div>',
      '<ul><li><strong>Հասանելիություն</strong> — ով կարող է մուտք գործել ձեր երկրում և հաստատությունում։</li>',
      '<li><strong>Սահմաններ</strong> — հաղորդագրություններ, տեղեր, ֆայլի չափ, արագության սահմանափակումներ։</li>',
      '<li><strong>Պահպանում</strong> — որքան են պահվում հրահանգներն ու ֆայլերը։</li>',
      '<li><strong>Տվյալների օգտագործում</strong> — ուսուցում, մարդկային վերանայում, ենթամշակողներ։</li>',
      '<li><strong>Ադմինիստրատորի մուտք</strong> — ով կարող է տեսնել մատյանները կամ բովանդակությունը։</li>',
      '<li><strong>Չեղարկում</strong> — ինչպես դադարեցնել վճարումը և արտահանել կամ ջնջել տվյալները։</li></ul>',
      '<p>Օրինակ նշում․ «Վերանայել եմ ChatGPT Help Center տվյալների վերահսկման էջը 10 սեպտեմբերի 2026-ին — գնումից առաջ կրկին հաստատել։» Միշտ բացեք մատակարարի ընթացիկ փաստաթղթերը։</p>'
    ].join('')
  },
  '5': {
    minutes: 3,
    html: [
      '<p>Այս էջը տեսողական նավարկման քարտեզ է։ Յուրաքանչյուր խումբ նշում է աջակցվող արդյունքը և մի քանի մեկնարկային տարբերակ։ Ամբողջ կուրացված ցանկը մեկ սեղմումով է հասանելի, որպեսզի առաջին տեսքը չծանրաբեռնի։</p>',
      '<div class="map-grid">',
      '<div><p><strong>Ընդհանուր օգնականներ</strong></p><p>Գրել, սովորել, ֆայլեր, խառը վերլուծություն</p><p>ChatGPT · Claude · Gemini</p></div>',
      '<div><p><strong>Հետազոտություն և ուսուցում</strong></p><p>Ապացույց, հղումներ, ուսումնական աջակցություն</p><p>Perplexity · NotebookLM</p></div>',
      '<div><p><strong>Գրել և ներկայացումներ</strong></p><p>Խմբագրում, սլայդներ, երկլեզու մշակում</p><p>Grammarly · DeepL · Gamma · Canva</p></div>',
      '<div><p><strong>Պատկեր և մեդիա</strong></p><p>Վիզուալներ, տեսանյութ, աուդիո</p><p>Canva · Midjourney · ElevenLabs</p></div>',
      '<div><p><strong>Ծրագրավորում</strong></p><p>Բացատրել, նախագծել և ստուգել կոդը</p><p>GitHub Copilot · Cursor · Claude Code</p></div>',
      '<div><p><strong>Ավտոմատացում և տեղային</strong></p><p>Կապել հավելվածներ կամ տեղադրել մոդելներ</p><p>Zapier · n8n · Ollama</p></div>',
      '</div>',
      '<p><a class="small-button" href="?chapter=5&amp;lesson=8">Բացել ամբողջ կուրացված ցանկը →</a></p>'
    ].join('')
  },
  '6': {
    minutes: 3,
    html: [
      '<p>Հին աղյուսակը դարձրեք կարճ որոշման ուղեցույց։ Պատասխանեք չորս հուշման․ ցանկալի ելք, ապացույցի կարիք, զգայունություն և հասանելի գործիքներ։ Ստացեք <strong>խումբ և գնահատման ընթացակարգ</strong> — ոչ անվիճելի «լավագույն գործիք»։</p>',
      '<div data-lab="decision-route"></div>'
    ].join('')
  },
  '9': {
    minutes: 4,
    html: [
      '<p>Ամբողջ ընթացքում օգտագործեք մեկ փոքր համեմատություն․ ընտրել գործիք՝ Notice v2-ից երկլեզու աշխատակազմի ծանուցում նախագծելու համար։ Նախ ուսումնասիրեք լրացված որոշման գրառումը, ապա խմբագրեք ձերը։</p>',
      '<div data-lab="decision-record"></div>',
      '<p>Յոթ քայլերը նույնն են․ սահմանել աշխատանքը, դասակարգել ռիսկը, որոշել ապացույցը, ընտրել արտադրանքի տեսակը, գործարկել մեկ թեստային հավաքածու, վերանայել գաղտնիությունն ու ընդհանուր արժեքը, ապա գրանցել որոշումը ամսաթվով և պատասխանատուով։</p>'
    ].join('')
  },
  practice: {
    minutes: 5,
    html: [
      '<h3>Համեմատեք երկու հասանելի գործիք</h3>',
      '<p>Երեք վճարովի արտադրանք պետք չէ։ Համեմատեք երկու հասանելի տարբերակ — կամ օգտագործեք ստորև նմուշ ելքերը, եթե հաշիվ չունեք։ Գնահատեք ձեր <strong>ապացույցի և հիմնավորման</strong> որակը, ոչ ապրանքանիշի նախընտրությունը։</p>',
      '<div data-lab="tool-compare"></div>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>Ո՞ր անցում/ձախողում դարպասը կկանգնեցներ հղկված, բայց անվտանգ չհամարվող հաղթողին։</li>',
      '<li>Որտե՞ղ մոդելի անունը ձեզ գայթակղեց ենթադրել գործառույթներ, որոնք ձեր պլանը կարող է չներառել։</li>',
      '<li>Ո՞ր ամսաթվով պաշտոնական էջը կբացեիք կրկին՝ աշխատանքում գործիք առաջարկելուց առաջ։</li></ul>'
    ].join('')
  }
};

function lesson7(lang) {
  const table = fs.readFileSync(path.join(__dirname, `_ch5-families-${lang}.html`), 'utf8');
  if (lang === 'hy') {
    return {
      minutes: 3,
      html: [
        '<details class="lesson-optional"><summary>Ընտրովի սկսնակների համար․ մոդելների ընտանիքներ ≠ գործիքներ</summary>',
        '<p>Մոդելը շարժիչն է։ Գործիքը արտադրանքի ինտերֆեյսն է, թույլտվությունները, ֆայլերը, որոնումը, ինտեգրումները, հիշողությունը և վերահսկումը։ Նույն մոդելը տարբեր արտադրանքներում տարբեր է վարվում։</p>',
        '<p>Microsoft Copilot-ի նման արտադրանքները միավորում են մոդելները հավելվածների և կազմակերպական տվյալների հետ․ դրանք տեսեք <strong>գործիքների ցանկում</strong>, ոչ այս մոդելային ընտանիքների աղյուսակում։ Միայն մոդելի անունը չի սահմանում, թե ինչ կարողություններ կան ձեր հավելվածում կամ հաշվում։</p>',
        '<p>Ստորև ընտանիքները տեղեկատու կետեր են 4 սեպտեմբերի 2026-ի դրությամբ․ ստուգեք մոդելի ընտրիչը և պաշտոնական թողարկման նշումները։</p>',
        table,
        '</details>'
      ].join('')
    };
  }
  return {
    minutes: 3,
    html: [
      '<details class="lesson-optional"><summary>Optional for beginners: model families are not the same as tools</summary>',
      '<p>A model is the engine. A tool is the product interface, permissions, files, search, integrations, memory, and controls around that engine. The same model can behave differently in different products.</p>',
      '<p>Products such as Microsoft Copilot combine models with applications and organizational data; they appear in the curated <strong>product directory</strong>, not in this model-family table. Model names alone cannot establish the capabilities available in someone’s application or account.</p>',
      '<p>The families below are reference points as of 4 September 2026; always check the model selector and official release notes.</p>',
      table,
      '</details>'
    ].join('')
  };
}

function apply(lang) {
  const data = load(lang);
  const pack = lang === 'hy' ? hyLessons : enLessons;
  Object.keys(pack).forEach((id) => setLesson(data, '5', id, pack[id].html, pack[id].minutes));
  const seven = lesson7(lang);
  setLesson(data, '5', '7', seven.html, seven.minutes);
  setLesson(data, '5', '8', buildDirectory(lang), 6);
  syncTools(data, lang);

  const section = data.sections.find((s) => s.id === '5');
  if (section) {
    section.summary = lang === 'en'
      ? 'Access modes, product layers, pass/fail scorecards, plan checks, a calm tool map, decision routes, and a dated directory.'
      : 'Մուտքի եղանակներ, արտադրանքի շերտեր, անցում/ձախողում գնահատաթերթեր, պլանի ստուգումներ, հանգիստ գործիքների քարտեզ, որոշման ուղիներ և ամսաթվով ցանկ։';
  }

  if (lang === 'en') {
    data.quizzes[4] = [
      [
        'A tool scores highest on formatting but fails your required privacy gate. Should it win?',
        'No. Pass/fail requirements come first. Attractive formatting cannot override a failed privacy or factual-accuracy condition.'
      ],
      [
        'Why is an API optional for beginners choosing a tool?',
        'Most early work can use an approved chat application. An API adds setup and responsibility and is needed only when embedding the model in another workflow.'
      ]
    ];
  } else {
    data.quizzes[4] = [
      [
        'Գործիքը ձևաչափումով ամենաբարձրն է, բայց ձախողում է պարտադիր գաղտնիության դարպասը։ Պե՞տք է հաղթի։',
        'Ոչ։ Անցում/ձախողում պահանջները առաջնային են։ Գրավիչ ձևաչափը չի կարող շրջանցել ձախողված գաղտնիության կամ փաստերի ճշգրտության պայմանը։'
      ],
      [
        'Ինչու՞ է API-ն ընտրովի սկսնակների համար գործիք ընտրելիս։',
        'Վաղ աշխատանքի մեծ մասը կարող է կատարվել հաստատված զրույցի հավելվածով։ API-ն ավելացնում է կարգավորում և պատասխանատվություն և պետք է միայն մոդելը այլ հոսքում տեղադրելիս։'
      ]
    ];
  }

  save(lang, data);
  console.log('Revised Chapter 5 for', lang);
}

apply('en');
apply('hy');
