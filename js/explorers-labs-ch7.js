/* Chapter 7 try-labs — loaded after explorers-labs.js */
(function (global) {
  'use strict';

  const COPY = {
    en: {
      labCheck: 'Check', labReset: 'Reset', labCorrect: 'That matches the teaching note.', labReview: 'Not quite — read the note and try again.',
      costTitle: 'Simple input/output calculation',
      costNote: 'Teaching rates: $2 / 1M input, $8 / 1M output. Compute one attempt, then say what still missing for a full workflow.',
      costInput: 'Input tokens',
      costOutput: 'Output tokens',
      costCalc: 'Calculate',
      costAsk: 'What does this simple calc leave out?',
      costOptions: ['Nothing — token price is the whole story', 'Review time, retries, fixed fees, and acceptance rate', 'Only the logo color'],
      costAnswer: 1,
      costWhy: '2,000 × $2/1M = $0.004 input; 500 × $8/1M = $0.004 output; $0.008 per attempt. Workflow cost still needs review, retries, fees, and accepted outputs.',
      ctxTitle: 'Messy folder vs cleaned package',
      ctxNote: 'Choose the authoritative file, drop noise, record conflicts, and spot a dangerous cut.',
      ctxMessy: 'Messy folder: notice_v1_old.txt (14 Oct, 40 places) · notice_v2_FINAL.txt (15 Oct, up to 20, fee AMD 10,000, no deadline) · cafe_menu.pdf · draft_tweet_ideas.docx · scanned_room_list_blurry.jpg',
      ctxClean: 'Cleaned package: NOTICE_V2_authoritative.txt · source_map.md (v1 superseded; menu excluded; scan unverified)',
      ctxItems: [
        { id: 'auth', label: 'Which document is authoritative for the announcement?', options: ['notice_v1_old.txt', 'notice_v2_FINAL.txt', 'cafe_menu.pdf'], answer: 1, why: 'v2 supersedes v1. Menus are irrelevant.' },
        { id: 'drop', label: 'What should you remove from the AI context?', options: ['Only the authoritative notice', 'Irrelevant menu, unverified blurry scan, and superseded v1 unless needed to explain a conflict', 'Everything except tweet ideas'], answer: 1, why: 'Keep governing sources; drop noise; note conflicts separately.' },
        { id: 'conflict', label: 'How do you record the date conflict?', options: ['Silently average 14 and 15 October', 'Note v1 superseded by v2; use 15 October only', 'Keep both dates in the final announcement'], answer: 1, why: 'Record the conflict and follow the authoritative version.' },
        { id: 'cut', label: 'Someone shortens context by deleting “no deadline is specified.” What happens?', options: ['Nothing important is lost', 'A necessary condition is removed — the model may invent a deadline', 'The fee automatically becomes free'], answer: 1, why: 'Aggressive shortening can delete a condition you still need.' }
      ],
      promptTitle: 'Prompt card lifecycle',
      promptNote: 'Extend the Chapter 4 card. Then decide what to do when a useful prompt goes stale.',
      promptLoad: 'Load Chapter 4 Armenian starter + lifecycle fields',
      promptOwner: 'Owner',
      promptVersion: 'Version',
      promptTest: 'Test case',
      promptReview: 'Review date',
      promptPurpose: 'Purpose',
      promptTemplate: 'Template',
      promptAsk: 'The card still drafts well, but a new rule requires every fee claim to cite Notice section B. The old test case never checks fees. What now?',
      promptOptions: ['Keep using it forever without changes', 'Fail the review: update test case, bump version, set a new review date — or retire the card', 'Delete ownership so nobody is responsible'],
      promptAnswer: 1,
      promptWhy: 'When criteria change, a previously useful prompt no longer meets its bar until tests and versioning catch up.',
      rulesTitle: 'Which rule applies, and who decides?',
      rulesNote: 'Match each scenario to the essential team rule and decision owner.',
      rulesItems: [
        { id: 'grades', label: 'A colleague wants to paste student grades into a free public chatbot', options: ['Allowed if the UI looks private — anyone may decide', 'Prohibited data rule — unit lead / data steward decides exception policy', 'Procurement team must buy a new logo first'], answer: 1, why: 'Personal/student data needs the data rule and an accountable owner.' },
        { id: 'announce', label: 'Publishing a staff announcement drafted from Notice v2', options: ['Anyone who likes the tone may publish', 'Disclosure + human review rule — communications / unit lead approves the exact text', 'Only an API key can approve'], answer: 1, why: 'External or staff-facing text needs named review.' },
        { id: 'pilot', label: 'Trying a new writing assistant on public workshop blurbs', options: ['Silent production use on confidential files', 'Approved-tools / low-risk pilot rule — local owner may trial inside listed tools and data class', 'Immediate institution-wide mandate'], answer: 1, why: 'Low-risk pilots stay inside approved tools and data boundaries.' }
      ],
      approachTitle: 'Baseline vs compact vs lower-cost',
      approachNote: 'Same acceptance criteria. Pick which run is actually cheaper for a useful result.',
      approachTable: '<div class="table-scroll" tabindex="0" role="region" aria-label="Approach comparison"><table><thead><tr><th>Approach</th><th>Tokens</th><th>Errors found</th><th>Correction time</th><th>API $ (teaching)</th></tr></thead><tbody><tr><td>Baseline</td><td>2,500</td><td>1 minor</td><td>2 min</td><td>$0.010</td></tr><tr><td>Compact context</td><td>1,200</td><td>0</td><td>2 min</td><td>$0.005</td></tr><tr><td>Lower-cost model</td><td>2,500</td><td>4 (invented deadline)</td><td>8 min</td><td>$0.003</td></tr></tbody></table></div>',
      approachAsk: 'Which statement is correct?',
      approachOptions: ['Lower-cost model is cheapest overall because API $ is lowest', 'Compact context is best here: lower tokens without extra errors; lower-cost model raises correction time so useful result is not cheaper', 'Baseline is required forever; never shorten context'],
      approachAnswer: 1,
      approachWhy: 'Lower API spend with more errors and correction time is not a cheaper useful result. Compact context wins when quality holds.'
    },
    hy: {
      labCheck: 'Ստուգել', labReset: 'Վերակայել', labCorrect: 'Սա համապատասխանում է ուսումնական նշմանը։', labReview: 'Ոչ այնքան․ կարդացեք նշումը և կրկին փորձեք։',
      costTitle: 'Պարզ մուտք/ելք հաշվարկ',
      costNote: 'Ուսումնական սակագներ․ $2 / 1մլն մուտք, $8 / 1մլն ելք։ Հաշվեք մեկ փորձը, ապա ասեք՝ ինչ է դեռ պակաս ամբողջ հոսքի համար։',
      costInput: 'Մուտքային տոկեններ',
      costOutput: 'Ելքային տոկեններ',
      costCalc: 'Հաշվել',
      costAsk: 'Ի՞նչ է բաց թողնում այս պարզ հաշվարկը',
      costOptions: ['Ոչինչ — տոկենի գինն ամբողջ պատմությունն է', 'Վերանայման ժամանակ, կրկնափորձեր, ֆիքսված վճարներ և ընդունման տոկոս', 'Միայն լոգոյի գույնը'],
      costAnswer: 1,
      costWhy: '2,000 × $2/1մլն = $0.004 մուտք․ 500 × $8/1մլն = $0.004 ելք․ $0.008 մեկ փորձի համար։ Հոսքի արժեքը դեռ պահանջում է վերանայում, կրկնափորձեր, վճարներ և ընդունված ելքեր։',
      ctxTitle: 'Խառն պանակ՝ մաքրված փաթեթ',
      ctxNote: 'Ընտրեք վավեր ֆայլը, հանեք աղմուկը, գրանցեք հակասությունները և գտեք վտանգավոր կրճատումը։',
      ctxMessy: 'Խառն պանակ․ notice_v1_old.txt (14 հոկտ, 40 տեղ) · notice_v2_FINAL.txt (15 հոկտ, մինչև 20, վճար 10,000 դրամ, վերջնաժամկետ չկա) · cafe_menu.pdf · draft_tweet_ideas.docx · scanned_room_list_blurry.jpg',
      ctxClean: 'Մաքրված փաթեթ․ NOTICE_V2_authoritative.txt · source_map.md (v1 փոխարինված է․ մենյուն բացառված է․ սկանը չստուգված)',
      ctxItems: [
        { id: 'auth', label: 'Ո՞ր փաստաթուղթն է վավեր հայտարարության համար', options: ['notice_v1_old.txt', 'notice_v2_FINAL.txt', 'cafe_menu.pdf'], answer: 1, why: 'v2-ը փոխարինում է v1-ին։ Մենյուն անտեղի է։' },
        { id: 'drop', label: 'Ի՞նչ հանել ԱԲ համատեքստից', options: ['Միայն վավեր ծանուցումը', 'Անտեղի մենյու, չստուգված սկան և փոխարինված v1՝ եթե հակասությունը բացատրելու կարիք չկա', 'Ամեն ինչ՝ բացի թվիթերի գաղափարներից'], answer: 1, why: 'Պահեք վավեր աղբյուրները․ հանեք աղմուկը․ հակասությունները նշեք առանձին։' },
        { id: 'conflict', label: 'Ինչպե՞ս գրանցել ամսաթվի հակասությունը', options: ['Լուռ միջինացնել 14 և 15 հոկտեմբերը', 'Նշել, որ v1-ը փոխարինված է v2-ով․ օգտագործել միայն 15 հոկտեմբեր', 'Վերջնական հայտարարության մեջ պահել երկու ամսաթիվ'], answer: 1, why: 'Գրանցեք հակասությունը և հետևեք վավեր տարբերակին։' },
        { id: 'cut', label: 'Ինչ-որ մեկը կրճատում է համատեքստը՝ ջնջելով «վերջնաժամկետ նշված չէ»։ Ի՞նչ է լինում', options: ['Կարևոր ոչինչ չի կորչում', 'Անհրաժեշտ պայման է հեռացվում — մոդելը կարող է հորինել վերջնաժամկետ', 'Վճարն ավտոմատ անվճար է դառնում'], answer: 1, why: 'Ագրեսիվ կրճատումը կարող է ջնջել դեռևս անհրաժեշտ պայման։' }
      ],
      promptTitle: 'Հրահանգի քարտի կյանքի ցիկլ',
      promptNote: 'Ընդլայնեք Գլուխ 4-ի քարտը։ Ապա որոշեք՝ ինչ անել, երբ օգտակար հրահանգը հնանում է։',
      promptLoad: 'Բեռնել Գլուխ 4 հայերեն մեկնարկը + կյանքի ցիկլի դաշտեր',
      promptOwner: 'Պատասխանատու',
      promptVersion: 'Տարբերակ',
      promptTest: 'Թեստային դեպք',
      promptReview: 'Վերանայման ամսաթիվ',
      promptPurpose: 'Նպատակ',
      promptTemplate: 'Ձևանմուշ',
      promptAsk: 'Քարտը դեռ լավ է նախագծում, բայց նոր կանոնը պահանջում է, որ վճարի յուրաքանչյուր պնդում հղվի Notice B բաժնին։ Հին թեստը վճար չի ստուգում։ Ի՞նչ անել։',
      promptOptions: ['Օգտագործել ընդմիշտ առանց փոփոխության', 'Ձախողել վերանայումը․ թարմացնել թեստը, բարձրացնել տարբերակը, նոր ամսաթիվ դնել — կամ դուրս գրել քարտը', 'Ջնջել պատասխանատվությունը, որ ոչ ոք պատասխանատու չլինի'],
      promptAnswer: 1,
      promptWhy: 'Երբ չափանիշները փոխվում են, նախկինում օգտակար հրահանգն այլևս չի բավարարում չափանիշը՝ մինչև թեստերն ու տարբերակավորումը թարմանան։',
      rulesTitle: 'Ո՞ր կանոնն է գործում, և ով է որոշում',
      rulesNote: 'Յուրաքանչյուր սցենարը համապատասխանեցրեք էական թիմային կանոնին և որոշողին։',
      rulesItems: [
        { id: 'grades', label: 'Գործընկերը ուզում է ուսանողների գնահատականները տեղադրել անվճար հանրային զրուցարանում', options: ['Թույլատրված է, եթե ինտերֆեյսը գաղտնի է թվում — ցանկացածը կարող է որոշել', 'Արգելված տվյալների կանոն — ստորաբաժանման ղեկավար / տվյալների պատասխանատուն է որոշում բացառությունը', 'Գնումների թիմը նախ պետք է նոր լոգո գնի'], answer: 1, why: 'Անձնական/ուսանողական տվյալները տվյալների կանոն և պատասխանատու են պահանջում։' },
        { id: 'announce', label: 'Հրապարակել Notice v2-ից նախագծված աշխատակազմի հայտարարություն', options: ['Ով հավանում է տոնը, կարող է հրապարակել', 'Բացահայտման + մարդու վերանայման կանոն — հաղորդակցության / ստորաբաժանման պատասխանատուն հաստատում է հենց այդ տեքստը', 'Միայն API բանալին կարող է հաստատել'], answer: 1, why: 'Արտաքին կամ աշխատակազմին ուղղված տեքստը անվանված վերանայում է պահանջում։' },
        { id: 'pilot', label: 'Փորձարկել նոր գրավոր օգնական հրապարակային աշխատարանի տեքստերի վրա', options: ['Լուռ արտադրական օգտագործում գաղտնի ֆայլերի վրա', 'Հաստատված գործիքների / ցածր ռիսկի փորձարկման կանոն — տեղական պատասխանատուն կարող է փորձել թույլատրված գործիքներում և տվյալների դասում', 'Անմիջական ինստիտուցիոնալ պարտադրանք'], answer: 1, why: 'Ցածր ռիսկի փորձարկումները մնում են հաստատված գործիքների և տվյալների սահմաններում։' }
      ],
      approachTitle: 'Բազային՝ սեղմ՝ ցածր արժեք',
      approachNote: 'Նույն ընդունման չափանիշները։ Ընտրեք՝ ո՞ր գործարկումն է իրականում ավելի էժան օգտակար արդյունքի համար։',
      approachTable: '<div class="table-scroll" tabindex="0" role="region" aria-label="Մոտեցումների համեմատություն"><table><thead><tr><th>Մոտեցում</th><th>Տոկեններ</th><th>Սխալներ</th><th>Ուղղման ժամանակ</th><th>API $ (ուսումնական)</th></tr></thead><tbody><tr><td>Բազային</td><td>2,500</td><td>1 փոքր</td><td>2 ր</td><td>$0.010</td></tr><tr><td>Սեղմ համատեքստ</td><td>1,200</td><td>0</td><td>2 ր</td><td>$0.005</td></tr><tr><td>Ավելի էժան մոդել</td><td>2,500</td><td>4 (հորինված վերջնաժամկետ)</td><td>8 ր</td><td>$0.003</td></tr></tbody></table></div>',
      approachAsk: 'Ո՞ր պնդումն է ճիշտ',
      approachOptions: ['Ավելի էժան մոդելն ընդհանուր առմամբ ամենաէժանն է, քանի որ API $-ն ամենացածրն է', 'Սեղմ համատեքստն այստեղ լավագույնն է․ ավելի քիչ տոկեններ առանց լրացուցիչ սխալների․ էժան մոդելը բարձրացնում է ուղղման ժամանակը, ուստի օգտակար արդյունքն ավելի էժան չէ', 'Բազայինը միշտ պարտադիր է․ երբեք մի կրճատեք համատեքստը'],
      approachAnswer: 1,
      approachWhy: 'Ավելի ցածր API ծախս՝ ավելի շատ սխալներով և ուղղման ժամանակով, ավելի էժան օգտակար արդյունք չէ։ Սեղմ համատեքստը հաղթում է, երբ որակը պահպանվում է։'
    }
  };

  const FILL = {
    purpose: 'Ստուգել հայտարարության պնդումները հաստատված ծանուցմամբ',
    template: 'Օգտագործելով միայն ծանուցումը՝ դասակարգիր պնդումները։ Մի հորինիր վերջնաժամկետ։',
    owner: 'Communications coordinator',
    version: '1.0',
    test: 'Draft from Notice v2; inventing a deadline must fail the test.',
    review: '10 September 2026'
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const pack = (lang) => COPY[lang === 'hy' ? 'hy' : 'en'];

  function choiceLab(lang, kind, title, note, items, body) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${title}</h3><p>${note}</p>${body || ''}${items.map((item, index) => `<div class="try-item" data-item="${esc(item.id)}"><p class="try-prompt"><strong>${index + 1}.</strong> ${esc(item.label)}</p><div class="try-options">${item.options.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-${item.id}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div>`).join('')}<div class="try-actions"><button type="button" class="small-button" data-ch7-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-ch7-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function singleLab(lang, kind, options) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${options.title}</h3><p>${options.note}</p>${options.body || ''}<div class="try-item" data-item="${kind}"><div class="try-options">${options.choices.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-main" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div><div class="try-actions"><button type="button" class="small-button" data-ch7-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-ch7-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function costLab(lang) {
    const c = pack(lang);
    const body = `<div class="simple-cost-fields">
      <label class="prompt-field">${esc(c.costInput)}<input type="number" data-simple-input value="2000" min="0" step="1"></label>
      <label class="prompt-field">${esc(c.costOutput)}<input type="number" data-simple-output value="500" min="0" step="1"></label>
      <button type="button" class="small-button" data-simple-calc>${c.costCalc}</button>
      <p class="try-summary" data-simple-result role="status" aria-live="polite"></p>
    </div><p class="try-prompt">${esc(c.costAsk)}</p>`;
    return singleLab(lang, 'simplecost', { title: c.costTitle, note: c.costNote, body, choices: c.costOptions });
  }

  function ctxLab(lang) {
    const c = pack(lang);
    const body = `<div class="compare-pair"><article><p>${esc(c.ctxMessy)}</p></article><article><p>${esc(c.ctxClean)}</p></article></div>`;
    return choiceLab(lang, 'ctx', c.ctxTitle, c.ctxNote, c.ctxItems, body);
  }

  function promptLab(lang) {
    const c = pack(lang);
    const body = `<div class="prompt-card-lab" data-prompt-life>
      <div class="try-actions"><button type="button" class="small-button" data-prompt-life-load>${c.promptLoad}</button></div>
      <label class="prompt-field">${esc(c.promptPurpose)}<input type="text" data-pl="purpose"></label>
      <label class="prompt-field">${esc(c.promptTemplate)}<textarea rows="2" data-pl="template"></textarea></label>
      <label class="prompt-field">${esc(c.promptOwner)}<input type="text" data-pl="owner"></label>
      <label class="prompt-field">${esc(c.promptVersion)}<input type="text" data-pl="version"></label>
      <label class="prompt-field">${esc(c.promptTest)}<textarea rows="2" data-pl="test"></textarea></label>
      <label class="prompt-field">${esc(c.promptReview)}<input type="text" data-pl="review"></label>
    </div><p class="try-prompt">${esc(c.promptAsk)}</p>`;
    return singleLab(lang, 'promptlife', { title: c.promptTitle, note: c.promptNote, body, choices: c.promptOptions });
  }

  function rulesLab(lang) {
    const c = pack(lang);
    return choiceLab(lang, 'rules', c.rulesTitle, c.rulesNote, c.rulesItems);
  }

  function approachLab(lang) {
    const c = pack(lang);
    return singleLab(lang, 'approach', { title: c.approachTitle, note: c.approachNote, body: c.approachTable + `<p class="try-prompt">${esc(c.approachAsk)}</p>`, choices: c.approachOptions });
  }

  function render(lang, type) {
    if (type === 'simple-cost') return costLab(lang);
    if (type === 'context-pack') return ctxLab(lang);
    if (type === 'prompt-lifecycle') return promptLab(lang);
    if (type === 'team-rules') return rulesLab(lang);
    if (type === 'approach-compare') return approachLab(lang);
    return null;
  }

  function grade(lang, kind) {
    const c = pack(lang);
    const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
    const singles = {
      simplecost: [c.costAnswer, c.costWhy],
      promptlife: [c.promptAnswer, c.promptWhy],
      approach: [c.approachAnswer, c.approachWhy]
    };
    if (singles[kind]) {
      const [answer, note] = singles[kind];
      const selected = document.querySelector(`input[name="${kind}-main"]:checked`);
      const why = document.querySelector(`[data-item="${kind}"] .try-why`);
      const ok = selected && Number(selected.value) === answer;
      if (why) {
        why.hidden = false;
        why.textContent = note;
        why.classList.toggle('is-correct', ok);
        why.classList.toggle('is-review', !ok);
      }
      if (summary) summary.textContent = ok ? c.labCorrect : c.labReview;
      return;
    }
    const items = kind === 'ctx' ? c.ctxItems : kind === 'rules' ? c.rulesItems : [];
    let correct = 0;
    items.forEach((item) => {
      const selected = document.querySelector(`input[name="${kind}-${item.id}"]:checked`);
      const why = document.querySelector(`[data-item="${item.id}"] .try-why`);
      if (!why) return;
      why.hidden = false;
      why.textContent = item.why;
      if (selected && Number(selected.value) === item.answer) {
        correct += 1;
        why.classList.add('is-correct');
        why.classList.remove('is-review');
      } else {
        why.classList.add('is-review');
        why.classList.remove('is-correct');
      }
    });
    if (summary) summary.textContent = correct === items.length ? c.labCorrect : `${c.labReview} (${correct}/${items.length})`;
  }

  function mount(lang) {
    const safe = lang === 'hy' ? 'hy' : 'en';
    document.querySelectorAll('[data-lab]').forEach((slot) => {
      const html = render(safe, slot.dataset.lab);
      if (html) slot.outerHTML = html;
    });
  }

  let bound = false;
  function bind(getLang) {
    if (bound) return;
    bound = true;
    document.addEventListener('click', (event) => {
      const lang = getLang() === 'hy' ? 'hy' : 'en';
      const c = pack(lang);
      const check = event.target.closest('[data-ch7-check]');
      if (check) grade(lang, check.dataset.ch7Check);
      const reset = event.target.closest('[data-ch7-reset]');
      if (reset) {
        const kind = reset.dataset.ch7Reset;
        document.querySelectorAll(`[data-choice-lab="${kind}"] input[type="radio"]`).forEach((el) => { el.checked = false; });
        document.querySelectorAll(`[data-choice-lab="${kind}"] .try-why`).forEach((el) => {
          el.hidden = true;
          el.textContent = '';
          el.classList.remove('is-correct', 'is-review');
        });
        const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-simple-calc]')) {
        const input = Number(document.querySelector('[data-simple-input]').value);
        const output = Number(document.querySelector('[data-simple-output]').value);
        const result = document.querySelector('[data-simple-result]');
        if (!Number.isFinite(input) || !Number.isFinite(output) || input < 0 || output < 0) {
          if (result) result.textContent = c.labReview;
          return;
        }
        const inCost = (input * 2) / 1000000;
        const outCost = (output * 8) / 1000000;
        const total = inCost + outCost;
        if (result) {
          result.textContent = lang === 'hy'
            ? `Մուտք $${inCost.toFixed(4)} + ելք $${outCost.toFixed(4)} = $${total.toFixed(4)} մեկ փորձի համար (ուսումնական սակագներ)։`
            : `Input $${inCost.toFixed(4)} + output $${outCost.toFixed(4)} = $${total.toFixed(4)} per attempt (teaching rates).`;
        }
      }
      if (event.target.closest('[data-prompt-life-load]')) {
        Object.keys(FILL).forEach((key) => {
          const el = document.querySelector(`[data-pl="${key}"]`);
          if (el) el.value = FILL[key];
        });
      }
    });
  }

  const base = global.EuaExplorersLabs || { mount() {}, bind() {} };
  const baseMount = base.mount.bind(base);
  const baseBind = base.bind.bind(base);
  global.EuaExplorersLabs = {
    mount(lang) {
      baseMount(lang);
      mount(lang);
    },
    bind(getLang) {
      baseBind(getLang);
      bind(getLang);
    }
  };
})(window);
