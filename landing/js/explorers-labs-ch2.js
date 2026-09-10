/* Chapter 2 try-labs — loaded after explorers-labs.js */
(function (global) {
  'use strict';

  const COPY = {
    en: {
      labCheck: 'Check', labReset: 'Reset', labCorrect: 'That matches the teaching note.', labReview: 'Not quite — read the note and try again.',
      flawTitle: 'What did the request fail to specify?',
      flawNote: 'Vague prompt: “Write an announcement about the AI workshop.” Compare the flawed output with the revised one.',
      flawBad: 'Flawed output: “Join 40 colleagues on 14 October for a free AI workshop! Apply by 10 October for a guaranteed place.”',
      flawGood: 'Revised output: “Staff AI literacy workshop on 15 October 2026, 14:00–16:00, Room 204. Capacity up to 20. Fee AMD 10,000. Registration is open; no deadline is stated in Notice v2. A seat is confirmed after staff approval.”',
      flawAsk: 'What was missing from the original request?',
      flawOptions: ['Only a friendlier tone', 'Governing source, audience, capacity/fee rules, and a ban on inventing deadlines', 'A longer list of adjectives'],
      flawAnswer: 1,
      flawWhy: 'Without a source and acceptance rules, fluency invents dates, capacity, and guarantees. The revision is testable against Notice v2.',
      clearTitle: 'CLEAR prompt builder',
      clearNote: 'Fill or omit elements, then predict the consequence. A completed example is one click away.',
      clearC: 'Context', clearL: 'Lead task', clearE: 'Evidence', clearA: 'Audience / acceptance', clearR: 'Response format',
      clearLoad: 'Load completed example',
      clearAsk: 'You omit Evidence (no Notice v2). What is the likely consequence?',
      clearOptions: ['Nothing changes', 'The draft is more likely to invent unsupported details', 'The model automatically finds the correct notice'],
      clearAnswer: 1,
      clearWhy: 'Without Evidence, the model has no governing text. Invented deadlines and capacity claims become more likely.',
      clearExample: {
        c: 'EUA staff development; Notice v2 is the only source.',
        l: 'Draft a short staff announcement.',
        e: 'Use only Notice v2 fields; mark anything not stated.',
        a: 'Intranet readers; success = every claim supported or marked not stated.',
        r: '5–7 sentences; list uncertainties at the end.'
      },
      formatTitle: 'Same facts, three formats',
      formatNote: 'Paragraph, table, and checklist carry the same Notice v2 facts. Pick the fit, then resolve a conflict.',
      formatPara: 'Paragraph: The workshop is on 15 October 2026 from 14:00 to 16:00 in Room 204 for up to 20 participants. The fee is AMD 10,000.',
      formatTable: 'Table rows: Date 15 Oct · Time 14:00–16:00 · Room 204 · Capacity up to 20 · Fee AMD 10,000',
      formatCheck: 'Checklist: □ Date 15 Oct  □ Time confirmed  □ Room 204  □ Capacity ≤20  □ Fee AMD 10,000  □ No invented deadline',
      formatItems: [
        { id: 'fit', label: 'A coordinator must tick off fields before publishing. Best format?', options: ['Paragraph essay', 'Checklist', 'Long narrative poem'], answer: 1, why: 'Execution needs a checklist; comparison needs a table; reading prose needs a paragraph.' },
        { id: 'conflict', label: 'Prompt says “be witty” and “accuracy first; no jokes about fees.” What should you do?', options: ['Add more constraints until both win', 'Set priority: accuracy first, then tone — drop fee jokes', 'Ignore accuracy because witty is more fun'], answer: 1, why: 'Conflicting instructions need priorities, not more stacked rules.' }
      ],
      histTitle: 'Revision history (one factor at a time)',
      histNote: 'Follow prompt → output → problem → one change → new output. Do not treat one win as universal.',
      histSteps: [
        { label: '1. Prompt', text: '“Write an announcement about the AI workshop.”' },
        { label: '2. Output', text: 'Invented 14 October and a free guarantee.' },
        { label: '3. Problem', text: 'No governing source; facts unchecked.' },
        { label: '4. One change', text: 'Add: “Use only Notice v2; do not invent deadlines or fees.”' },
        { label: '5. New output', text: '15 October, Room 204, up to 20, fee AMD 10,000; no deadline stated.' }
      ],
      histAsk: 'Why is this not proof of a universally better prompt?',
      histOptions: ['Because one improved reply on one task does not generalize to every task and model setting', 'Because longer prompts are always worse', 'Because Notice v2 is fictional so nothing matters'],
      histAnswer: 0,
      histWhy: 'Controlled iteration shows what helped here. Retest when the task, model, or criteria change.',
      troubleTitle: 'Interactive troubleshooting',
      troubleNote: 'Choose the symptom. See likely cause, revision, and verification.',
      troubleItems: [
        {
          id: 'generic', label: 'The answer is generic',
          cause: 'Lead task and audience are vague; no decision the output should support.',
          fix: 'Name the user, purpose, and what “done” means in one sentence each.',
          verify: 'Ask whether a different reader would get a different useful draft.'
        },
        {
          id: 'invented', label: 'It invented facts',
          cause: 'Evidence/source missing or “sound confident” prioritized over uncertainty.',
          fix: 'Attach the governing source; ban invention; require “not stated” labels.',
          verify: 'TRACE each claim against the source passage.'
        },
        {
          id: 'format', label: 'It ignored the format',
          cause: 'Format buried or conflicting with “write freely.”',
          fix: 'Put the format first; give a tiny example of the structure.',
          verify: 'Check headings/columns match the requested schema exactly.'
        },
        {
          id: 'long', label: 'It is too long',
          cause: 'No length limit, or “be comprehensive” fights brevity.',
          fix: 'Set a hard limit and a priority: accuracy first, then brevity.',
          verify: 'Count sentences/words; confirm required facts still survive.'
        }
      ],
      practiceTitle: 'Improve the shared starting prompt',
      practiceNote: 'Score your revision against the three fixed criteria. Longer is not better.',
      practiceBox: 'Your improved prompt',
      practicePh: 'Rewrite the prompt here…',
      practiceAsk: 'Which self-check best matches strong work?',
      practiceOptions: [
        'I added many adjectives and roles so it sounds expert',
        'I named Notice v2, banned invention, set audience/format, and removed wording that does not change the answer',
        'I deleted the source to keep the prompt short'
      ],
      practiceAnswer: 1,
      practiceWhy: 'Feedback targets missing evidence, ambiguity, and unnecessary wording — not prompt length.'
    },
    hy: {
      labCheck: 'Ստուգել', labReset: 'Վերակայել', labCorrect: 'Սա համապատասխանում է ուսումնական նշմանը։', labReview: 'Ոչ այնքան․ կարդացեք նշումը և կրկին փորձեք։',
      flawTitle: 'Ի՞նչ չի նշվել հարցումում',
      flawNote: 'Անորոշ հրահանգ․ «Գրիր հայտարարություն ԱԲ աշխատարանի մասին։» Համեմատեք սխալ և վերանայված ելքերը։',
      flawBad: 'Սխալ ելք․ «Միացեք 40 գործընկերոջ հոկտեմբերի 14-ին՝ անվճար ԱԲ աշխատարանի համար։ Դիմեք մինչև հոկտեմբերի 10՝ երաշխավորված տեղի համար։»',
      flawGood: 'Վերանայված ելք․ «Աշխատակազմի ԱԲ գրագիտության աշխատարան՝ 2026 թ. հոկտեմբերի 15, 14:00–16:00, սենյակ 204։ Տարողություն մինչև 20։ Վճար 10,000 դրամ։ Գրանցումը բաց է․ Notice v2-ում վերջնաժամկետ նշված չէ։ Տեղը հաստատվում է աշխատակազմի հաստատումից հետո։»',
      flawAsk: 'Ի՞նչ էր պակասում սկզբնական հարցումից',
      flawOptions: ['Միայն ավելի բարեկամական տոն', 'Վավեր աղբյուր, լսարան, տարողություն/վճարի կանոններ և վերջնաժամկետ չհորինելու արգելք', 'Ածականների ավելի երկար ցանկ'],
      flawAnswer: 1,
      flawWhy: 'Առանց աղբյուրի և ընդունման կանոնների սահունությունը հորինում է ամսաթիվ, տարողություն և երաշխիքներ։',
      clearTitle: 'CLEAR հրահանգի կառուցիչ',
      clearNote: 'Լրացրեք կամ բաց թողեք տարրերը, ապա կանխատեսեք հետևանքը։ Լրացված օրինակը մեկ սեղմումով է։',
      clearC: 'Համատեքստ', clearL: 'Գլխավոր առաջադրանք', clearE: 'Ապացույց', clearA: 'Լսարան / ընդունում', clearR: 'Պատասխանի ձևաչափ',
      clearLoad: 'Բեռնել լրացված օրինակը',
      clearAsk: 'Բաց եք թողնում Evidence-ը (առանց Notice v2)։ Ի՞նչ հետևանք է հավանական',
      clearOptions: ['Ոչինչ չի փոխվում', 'Նախագիծն ավելի հավանական է հորինել չհիմնավորված մանրամասներ', 'Մոդելն ավտոմատ գտնում է ճիշտ ծանուցումը'],
      clearAnswer: 1,
      clearWhy: 'Առանց Evidence-ի վավեր տեքստ չկա։ Հորինված վերջնաժամկետներն ավելի հավանական են։',
      clearExample: {
        c: 'ՀԵՀ աշխատակազմի զարգացում․ միակ աղբյուրը Notice v2 է։',
        l: 'Նախագծել կարճ աշխատակազմի հայտարարություն։',
        e: 'Օգտագործել միայն Notice v2 դաշտերը․ նշել չնշվածը։',
        a: 'Ինտրանետի ընթերցողներ․ հաջողություն = յուրաքանչյուր պնդում հաստատված կամ նշված որպես չնշված։',
        r: '5–7 նախադասություն․ վերջում անորոշությունների ցանկ։'
      },
      formatTitle: 'Նույն փաստերը, երեք ձևաչափ',
      formatNote: 'Պարբերություն, աղյուսակ և ցանկ։ Ընտրեք համապատասխանը, ապա լուծեք հակասությունը։',
      formatPara: 'Պարբերություն․ Աշատարանը 2026 թ. հոկտեմբերի 15-ին է՝ 14:00–16:00, սենյակ 204, մինչև 20 մասնակից։ Վճարը 10,000 դրամ է։',
      formatTable: 'Աղյուսակ․ Ամսաթիվ 15 հոկտ · Ժամ 14:00–16:00 · Սենյակ 204 · Տարողություն մինչև 20 · Վճար 10,000 դրամ',
      formatCheck: 'Ցանկ․ □ Ամսաթիվ 15 հոկտ  □ Ժամը հաստատված  □ Սենյակ 204  □ Տարողություն ≤20  □ Վճար 10,000  □ Հորինված վերջնաժամկետ չկա',
      formatItems: [
        { id: 'fit', label: 'Համակարգողը պետք է նշի դաշտերը հրապարակումից առաջ։ Լավագույն ձևաչա՞փը', options: ['Պարբերության շարադրություն', 'Ստուգացանկ', 'Երկար պոեմ'], answer: 1, why: 'Կատարումը պահանջում է ցանկ․ համեմատությունը՝ աղյուսակ․ ընթերցումը՝ պարբերություն։' },
        { id: 'conflict', label: 'Հրահանգը ասում է «եղիր սրամիտ» և «ճշգրտությունն առաջինը․ վճարի մասին կատակներ չկան»։ Ի՞նչ անել', options: ['Ավելացնել սահմանափակումներ մինչև երկուսն էլ հաղթեն', 'Սահմանել առաջնություն․ ճշգրտություն, ապա տոն — հանել վճարի կատակները', 'Անտեսել ճշգրտությունը, որովհետև սրամտությունն ավելի զվարճալի է'], answer: 1, why: 'Հակասող հրահանգները առաջնություն են պահանջում, ոչ կուտակված կանոններ։' }
      ],
      histTitle: 'Վերանայման պատմություն (մեկ գործոն)',
      histNote: 'Հրահանգ → ելք → խնդիր → մեկ փոփոխություն → նոր ելք։ Մեկ հաղթանակը համընդհանուր չէ։',
      histSteps: [
        { label: '1. Հրահանգ', text: '«Գրիր հայտարարություն ԱԲ աշխատարանի մասին։»' },
        { label: '2. Ելք', text: 'Հորինված հոկտեմբերի 14 և անվճար երաշխիք։' },
        { label: '3. Խնդիր', text: 'Վավեր աղբյուր չկա․ փաստերը չեն ստուգված։' },
        { label: '4. Մեկ փոփոխություն', text: 'Ավելացնել․ «Օգտագործիր միայն Notice v2․ մի հորինիր վերջնաժամկետ կամ վճար։»' },
        { label: '5. Նոր ելք', text: 'Հոկտեմբերի 15, սենյակ 204, մինչև 20, վճար 10,000 դրամ․ վերջնաժամկետ նշված չէ։' }
      ],
      histAsk: 'Ինչու՞ սա համընդհանուր ավելի լավ հրահանգի ապացույց չէ',
      histOptions: ['Որովհետև մեկ առաջադրանքի մեկ բարելավված պատասխանը չի ընդհանրացվում բոլոր առաջադրանքներին և մոդելներին', 'Որովհետև երկար հրահանգները միշտ վատն են', 'Որովհետև Notice v2-ը հորինված է, ուստի ոչինչ կարևոր չէ'],
      histAnswer: 0,
      histWhy: 'Վերահսկվող կրկնությունը ցույց է տալիս, թե ինչն օգնեց այստեղ։ Կրկին թեստեք, երբ առաջադրանքը, մոդելը կամ չափանիշները փոխվում են։',
      troubleTitle: 'Ինտերակտիվ խնդիրների լուծում',
      troubleNote: 'Ընտրեք ախտանիշը։ Տեսեք հավանական պատճառը, վերանայումը և ստուգումը։',
      troubleItems: [
        {
          id: 'generic', label: 'Պատասխանը ընդհանուր է',
          cause: 'Գլխավոր առաջադրանքն ու լսարանն անորոշ են։',
          fix: 'Անվանեք օգտատիրոջը, նպատակը և «պատրաստ»-ի սահմանումը։',
          verify: 'Հարցրեք՝ այլ ընթերցողը կստանա՞ր այլ օգտակար նախագիծ։'
        },
        {
          id: 'invented', label: 'Հորինել է փաստեր',
          cause: 'Ապացույց/աղբյուր չկա, կամ վստահությունը գերակշռում է անորոշությանը։',
          fix: 'Կցեք վավեր աղբյուրը․ արգելեք հորինումը․ պահանջեք «չնշված» պիտակներ։',
          verify: 'TRACE արեք յուրաքանչյուր պնդումը աղբյուրի հատվածի դեմ։'
        },
        {
          id: 'format', label: 'Անտեսել է ձևաչափը',
          cause: 'Ձևաչափը թաղված է կամ հակասում է «ազատ գրիր»-ին։',
          fix: 'Ձևաչափը դրեք սկզբում․ տվեք կառուցվածքի փոքր օրինակ։',
          verify: 'Ստուգեք, որ վերնագրերն/սյունակները համընկնում են պահանջված սխեմային։'
        },
        {
          id: 'long', label: 'Չափազանց երկար է',
          cause: 'Երկարության սահման չկա, կամ «լինիր համապարփակ»-ը հակասում է համառոտությանը։',
          fix: 'Դրեք կոշտ սահման և առաջնություն․ ճշգրտություն, ապա համառոտություն։',
          verify: 'Հաշվեք նախադասությունները․ հաստատեք, որ պարտադիր փաստերը մնացել են։'
        }
      ],
      practiceTitle: 'Բարելավեք ընդհանուր մեկնարկային հրահանգը',
      practiceNote: 'Գնահատեք ձեր վերանայումը երեք ֆիքսված չափանիշով։ Ավելի երկարը ավելի լավ չէ։',
      practiceBox: 'Ձեր բարելավված հրահանգը',
      practicePh: 'Վերագրեք հրահանգը այստեղ…',
      practiceAsk: 'Ո՞ր ինքնաստուգումն է համապատասխանում ուժեղ աշխատանքին',
      practiceOptions: [
        'Ավելացրի շատ ածականներ և դերեր, որ փորձագետ հնչի',
        'Անվանեցի Notice v2, արգելեցի հորինումը, սահմանեցի լսարան/ձևաչափ և հանեցի այն ձևակերպումները, որոնք պատասխանը չեն փոխում',
        'Ջնջեցի աղբյուրը՝ հրահանգը կարճ պահելու համար'
      ],
      practiceAnswer: 1,
      practiceWhy: 'Հետադարձ կապը ուղղված է բացակա ապացույցին, անորոշությանը և ավելորդ ձևակերպմանը — ոչ երկարությանը։'
    }
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const pack = (lang) => COPY[lang === 'hy' ? 'hy' : 'en'];

  function single(lang, kind, options) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${options.title}</h3><p>${options.note}</p>${options.body || ''}<div class="try-item" data-item="${kind}"><div class="try-options">${options.choices.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-main" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div><div class="try-actions"><button type="button" class="small-button" data-ch2-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-ch2-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function multi(lang, kind, title, note, items, body) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${title}</h3><p>${note}</p>${body || ''}${items.map((item, index) => `<div class="try-item" data-item="${esc(item.id)}"><p class="try-prompt"><strong>${index + 1}.</strong> ${esc(item.label)}</p><div class="try-options">${item.options.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-${item.id}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div>`).join('')}<div class="try-actions"><button type="button" class="small-button" data-ch2-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-ch2-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function flawLab(lang) {
    const c = pack(lang);
    const body = `<div class="compare-pair"><article><p>${esc(c.flawBad)}</p></article><article><p>${esc(c.flawGood)}</p></article></div><p class="try-prompt">${esc(c.flawAsk)}</p>`;
    return single(lang, 'flaw', { title: c.flawTitle, note: c.flawNote, body, choices: c.flawOptions });
  }

  function clearLab(lang) {
    const c = pack(lang);
    const body = `<div class="clear-builder">
      <label class="prompt-field">${esc(c.clearC)}<textarea rows="2" data-clear="c"></textarea></label>
      <label class="prompt-field">${esc(c.clearL)}<textarea rows="2" data-clear="l"></textarea></label>
      <label class="prompt-field">${esc(c.clearE)}<textarea rows="2" data-clear="e"></textarea></label>
      <label class="prompt-field">${esc(c.clearA)}<textarea rows="2" data-clear="a"></textarea></label>
      <label class="prompt-field">${esc(c.clearR)}<textarea rows="2" data-clear="r"></textarea></label>
      <button type="button" class="small-button" data-clear-load>${c.clearLoad}</button>
    </div><p class="try-prompt">${esc(c.clearAsk)}</p>`;
    return single(lang, 'clear', { title: c.clearTitle, note: c.clearNote, body, choices: c.clearOptions });
  }

  function formatLab(lang) {
    const c = pack(lang);
    const body = `<div class="format-trio"><article><p>${esc(c.formatPara)}</p></article><article><p>${esc(c.formatTable)}</p></article><article><p>${esc(c.formatCheck)}</p></article></div>`;
    return multi(lang, 'format', c.formatTitle, c.formatNote, c.formatItems, body);
  }

  function histLab(lang) {
    const c = pack(lang);
    const body = `<ol class="revise-history">${c.histSteps.map((s) => `<li><strong>${esc(s.label)}</strong> ${esc(s.text)}</li>`).join('')}</ol><p class="try-prompt">${esc(c.histAsk)}</p>`;
    return single(lang, 'hist', { title: c.histTitle, note: c.histNote, body, choices: c.histOptions });
  }

  function troubleLab(lang) {
    const c = pack(lang);
    const tabs = c.troubleItems.map((item, i) => `<button type="button" class="media-tab${i === 0 ? ' is-active' : ''}" data-trouble-tab="${esc(item.id)}">${esc(item.label)}</button>`).join('');
    const panels = c.troubleItems.map((item, i) => `<div class="trouble-panel" data-trouble-panel="${esc(item.id)}" ${i === 0 ? '' : 'hidden'}><p><strong>${lang === 'hy' ? 'Պատճառ' : 'Likely cause'}.</strong> ${esc(item.cause)}</p><p><strong>${lang === 'hy' ? 'Վերանայում' : 'Possible revision'}.</strong> ${esc(item.fix)}</p><p><strong>${lang === 'hy' ? 'Ստուգում' : 'Verification'}.</strong> ${esc(item.verify)}</p></div>`).join('');
    return `<section class="try-lab" data-trouble-lab aria-labelledby="trouble-title"><h3 id="trouble-title">${c.troubleTitle}</h3><p>${c.troubleNote}</p><div class="media-tabs">${tabs}</div>${panels}</section>`;
  }

  function practiceLab(lang) {
    const c = pack(lang);
    const body = `<label class="prompt-field">${esc(c.practiceBox)}<textarea rows="5" data-practice-prompt placeholder="${esc(c.practicePh)}"></textarea></label><p class="try-prompt">${esc(c.practiceAsk)}</p>`;
    return single(lang, 'practice', { title: c.practiceTitle, note: c.practiceNote, body, choices: c.practiceOptions });
  }

  function render(lang, type) {
    if (type === 'flawed-prompt') return flawLab(lang);
    if (type === 'clear-builder') return clearLab(lang);
    if (type === 'format-fit') return formatLab(lang);
    if (type === 'revise-history') return histLab(lang);
    if (type === 'prompt-troubleshoot') return troubleLab(lang);
    if (type === 'prompt-practice') return practiceLab(lang);
    return null;
  }

  function grade(lang, kind) {
    const c = pack(lang);
    const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
    const singles = {
      flaw: [c.flawAnswer, c.flawWhy],
      clear: [c.clearAnswer, c.clearWhy],
      hist: [c.histAnswer, c.histWhy],
      practice: [c.practiceAnswer, c.practiceWhy]
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
    if (kind === 'format') {
      let correct = 0;
      c.formatItems.forEach((item) => {
        const selected = document.querySelector(`input[name="format-${item.id}"]:checked`);
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
      if (summary) summary.textContent = correct === c.formatItems.length ? c.labCorrect : `${c.labReview} (${correct}/${c.formatItems.length})`;
    }
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
      const check = event.target.closest('[data-ch2-check]');
      if (check) grade(lang, check.dataset.ch2Check);
      const reset = event.target.closest('[data-ch2-reset]');
      if (reset) {
        const kind = reset.dataset.ch2Reset;
        document.querySelectorAll(`[data-choice-lab="${kind}"] input[type="radio"]`).forEach((el) => { el.checked = false; });
        document.querySelectorAll(`[data-choice-lab="${kind}"] .try-why`).forEach((el) => {
          el.hidden = true;
          el.textContent = '';
          el.classList.remove('is-correct', 'is-review');
        });
        const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-clear-load]')) {
        const ex = c.clearExample;
        Object.keys(ex).forEach((key) => {
          const el = document.querySelector(`[data-clear="${key}"]`);
          if (el) el.value = ex[key];
        });
      }
      const tab = event.target.closest('[data-trouble-tab]');
      if (tab) {
        document.querySelectorAll('[data-trouble-tab]').forEach((btn) => btn.classList.toggle('is-active', btn === tab));
        document.querySelectorAll('[data-trouble-panel]').forEach((panel) => {
          panel.hidden = panel.dataset.troublePanel !== tab.dataset.troubleTab;
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
