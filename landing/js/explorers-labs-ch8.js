/* Chapter 8 and guide try-labs — loaded after explorers-labs-ch7.js */
(function (global) {
  'use strict';

  const COPY = {
    en: {
      check: 'Check', reset: 'Reset', correct: 'Ready to continue.', review: 'Review the highlighted criteria.',
      map: 'Choose only one category that can produce a checkable output with your available time, tools, and permitted information.',
      source: 'Governing source — Notice v2: 15 October 2026, 14:00–16:00, Room 204; up to 20 participants; AMD 10,000; registration open; no deadline specified; staff approval confirms a seat.',
      flawed: 'Flawed draft — Join 40 students on 14 October. Apply by 10 October for a guaranteed free place.',
      labA: 'Lab A · classify, correct, check', announcement: 'Editable corrected announcement',
      draftPlaceholder: 'Write a source-faithful announcement…',
      labB: 'Lab B · registrations and fees', confirmed: 'Filter confirmed only', duplicate: 'Add duplicate R04 test row',
      calculate: 'Calculate totals', dupStop: 'Duplicate R04 detected. Stop and deduplicate before aggregation.',
      totals: '5 confirmed · AMD 50,000 fees · AMD 25,000 paid · AMD 25,000 outstanding.',
      labC: 'Lab C · repair the five-slide briefing', misleading: 'Misleading slide: “7 registrations means only 13 seats remain.” The chart axis starts at 4.',
      repair: 'Repair: “5 confirmed, 2 pending, capacity 20.” Start the axis at zero and label the denominator.',
      slides: ['1 Purpose + Notice v2 source', '2 Status: 5 confirmed, 2 pending, 1 cancelled', '3 Confirmed fees: AMD 50,000; paid/outstanding AMD 25,000 each', '4 Pending requests require staff approval', '5 Decision: review pending requests and follow up outstanding fees'],
      labD: 'Lab D · versioned approval', approve: 'Approve current version', edit: 'Edit draft', retry: 'Retry same record', stateStart: 'T01 · v1 · awaiting_review', stateApproved: 'T01 · v1 · approved by coordinator', stateEdited: 'T01 · v2 · awaiting_review (v1 approval invalidated)', stateRetry: 'T01 already exists · duplicate prevented',
      writing: 'Which revision is safer?', writingOptions: ['Add urgency and a guessed deadline', 'Preserve supported facts and mark the deadline unknown', 'Promise every applicant a seat'],
      schedule: 'Which repair is feasible?', scheduleOptions: ['Keep all nine hours and overlap lunch', 'Preserve fixed meetings, defer one task, and add two buffers', 'Delete every commitment'],
      data: 'What can the table support?', dataOptions: ['Week 3 occupancy is 25% (5/20); three rows do not establish a cause', 'Occupancy is 5% because five people attended', 'AMD 25,000 means 25,000 participants'],
      claim: 'Which business claim may be used?', claimOptions: ['Most popular workshop', 'Guaranteed career results', 'Up to 20 places, supported by Notice v2'],
      choose: 'Feasibility card', input: 'Permitted input', output: 'Exact output', acceptance: 'Acceptance test', reviewer: 'Named reviewer',
      decision: 'Evaluate choice', accepted: 'Feasible: all four fields are present. The reviewer still decides whether the task proceeds.', rejected: 'Reject or narrow the task: complete all four fields, or explicitly record missing data/permission/reviewer.',
      glossary: 'Search glossary', noTerms: 'No glossary terms match.'
    },
    hy: {
      check: 'Ստուգել', reset: 'Վերակայել', correct: 'Պատրաստ է շարունակելու։', review: 'Վերանայեք նշված չափանիշները։',
      map: 'Ընտրեք միայն մեկ խումբ, որը ձեր ժամանակով, գործիքներով և թույլատրված տեղեկությամբ կարող է տալ ստուգելի ելք։',
      source: 'Վավեր աղբյուր — Notice v2․ 2026 թ. հոկտեմբերի 15, 14:00–16:00, 204 սենյակ, մինչև 20 մասնակից, 10,000 դրամ, գրանցումը բաց է, վերջնաժամկետ չկա, տեղը հաստատում է աշխատակազմը։',
      flawed: 'Սխալ նախագիծ — Միացեք 40 ուսանողի հոկտեմբերի 14-ին։ Մինչև հոկտեմբերի 10-ը դիմեք անվճար երաշխավորված տեղի համար։',
      labA: 'Լաբ A · դասակարգել, ուղղել, ստուգել', announcement: 'Խմբագրելի ուղղված հայտարարություն',
      draftPlaceholder: 'Գրեք աղբյուրին հավատարիմ հայտարարություն…',
      labB: 'Լաբ B · գրանցումներ և վճարներ', confirmed: 'Զտել միայն հաստատվածները', duplicate: 'Ավելացնել կրկնված R04 փորձնական տող',
      calculate: 'Հաշվել արդյունքները', dupStop: 'Հայտնաբերվեց կրկնված R04։ Կանգ և կրկնազտում՝ հաշվարկից առաջ։',
      totals: '5 հաստատված · 50,000 դրամ վճար · 25,000 վճարված · 25,000 պարտք։',
      labC: 'Լաբ C · ուղղել հինգ սլայդը', misleading: 'Մոլորեցնող սլայդ․ «7 գրանցում՝ մնացել է միայն 13 տեղ»։ Առանցքը սկսվում է 4-ից։',
      repair: 'Ուղղում․ «5 հաստատված, 2 սպասող, տարողություն՝ 20»։ Առանցքը սկսեք զրոյից և նշեք հայտարարը։',
      slides: ['1 Նպատակ + Notice v2 աղբյուր', '2 Կարգավիճակ՝ 5 հաստատված, 2 սպասող, 1 չեղարկված', '3 Հաստատված վճար՝ 50,000 դրամ, վճարված/պարտք՝ 25,000', '4 Սպասողները պահանջում են աշխատակազմի հաստատում', '5 Որոշում՝ ստուգել սպասողներին և հետևել պարտքերին'],
      labD: 'Լաբ D · տարբերակավորված հաստատում', approve: 'Հաստատել ընթացիկ տարբերակը', edit: 'Փոփոխել նախագիծը', retry: 'Կրկնել նույն գրառումը', stateStart: 'T01 · v1 · awaiting_review', stateApproved: 'T01 · v1 · հաստատված համակարգողի կողմից', stateEdited: 'T01 · v2 · awaiting_review (v1 հաստատումն անվավեր է)', stateRetry: 'T01 արդեն կա · կրկնությունը կանխված է',
      writing: 'Ո՞ր խմբագրումն է ավելի անվտանգ', writingOptions: ['Ավելացնել շտապողականություն և հորինված վերջնաժամկետ', 'Պահել հաստատված փաստերը և վերջնաժամկետը նշել անհայտ', 'Բոլորին երաշխավորել տեղ'],
      schedule: 'Ո՞ր ուղղումն է իրագործելի', scheduleOptions: ['Պահել ինը ժամը և համընկնել ճաշին', 'Պահել ֆիքսված հանդիպումները, հետաձգել մեկ գործ և ավելացնել երկու պահուստ', 'Ջնջել բոլոր պարտավորությունները'],
      data: 'Ի՞նչ է հաստատում աղյուսակը', dataOptions: ['3-րդ շաբաթվա զբաղվածությունը 25% է (5/20), իսկ երեք տողը պատճառ չի հաստատում', 'Զբաղվածությունը 5% է, քանի որ հինգ մարդ կա', '25,000 դրամը նշանակում է 25,000 մասնակից'],
      claim: 'Ո՞ր բիզնես պնդումը կարելի է օգտագործել', claimOptions: ['Ամենատարածված աշխատարանը', 'Երաշխավորված կարիերա', 'Մինչև 20 տեղ՝ Notice v2-ով հաստատված'],
      choose: 'Իրագործելիության քարտ', input: 'Թույլատրված մուտք', output: 'Հստակ ելք', acceptance: 'Ընդունման չափանիշ', reviewer: 'Անունով վերանայող',
      decision: 'Գնահատել ընտրությունը', accepted: 'Իրագործելի է․ բոլոր չորս դաշտերը լրացված են։ Վերջնական որոշումը վերանայողինն է։', rejected: 'Մերժեք կամ նեղացրեք․ լրացրեք չորս դաշտը կամ գրանցեք տվյալների/թույլտվության/վերանայողի պակասը։',
      glossary: 'Որոնել բառարանում', noTerms: 'Համընկնող եզր չկա։'
    }
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const pack = (lang) => COPY[lang === 'hy' ? 'hy' : 'en'];

  function simpleChoice(lang, kind, title, options, answer) {
    const c = pack(lang);
    return `<section class="try-lab" data-ch8-choice="${kind}"><h3>${esc(title)}</h3><div class="try-options">${options.map((option, index) => `<label class="try-option"><input type="radio" name="ch8-${kind}" value="${index}"> <span>${esc(option)}</span></label>`).join('')}</div><div class="try-actions"><button type="button" class="small-button" data-ch8-grade="${kind}" data-answer="${answer}">${c.check}</button><button type="button" class="small-button" data-ch8-reset="${kind}">${c.reset}</button></div><p class="try-summary" data-ch8-summary="${kind}" role="status"></p></section>`;
  }

  function labA(lang) {
    const c = pack(lang);
    const claims = lang === 'hy'
      ? [['40 մասնակից','Հակասող'],['Հոկտեմբերի 14','Հակասող'],['Հոկտեմբերի 10 վերջնաժամկետ','Հակասող'],['Անվճար','Հակասող'],['Երաշխավորված տեղ','Հակասող']]
      : [['40 participants','Contradicted'],['14 October','Contradicted'],['10 October deadline','Contradicted'],['Free','Contradicted'],['Guaranteed seat','Contradicted']];
    const labels = lang === 'hy' ? ['Հաստատված','Հակասող','Չնշված'] : ['Supported','Contradicted','Not stated'];
    return `<section class="try-lab lab-workbench" data-lab-a><h3>${c.labA}</h3><div class="compare-pair"><article><strong>${esc(c.source)}</strong></article><article><strong>${esc(c.flawed)}</strong></article></div><div class="claim-grid">${claims.map(([claim, status], row) => `<fieldset><legend>${esc(claim)}</legend>${labels.map((label, index) => `<label><input type="radio" name="lab-a-${row}" value="${label === status ? 1 : 0}"> ${esc(label)}</label>`).join('')}</fieldset>`).join('')}</div><label class="prompt-field">${c.announcement}<textarea rows="4" data-lab-a-draft placeholder="${esc(c.draftPlaceholder)}"></textarea></label><div class="try-actions"><button type="button" class="small-button" data-lab-a-check>${c.check}</button><button type="button" class="small-button" data-lab-a-reset>${c.reset}</button></div><p class="try-summary" data-lab-a-summary role="status"></p></section>`;
  }

  function labB(lang) {
    const c = pack(lang);
    const rows = [['R01','confirmed','10000','10000'],['R02','confirmed','10000','0'],['R03','pending','10000','0'],['R04','confirmed','10000','5000'],['R05','cancelled','10000','0'],['R06','confirmed','10000','10000'],['R07','confirmed','10000','0'],['R08','pending','10000','0']];
    return `<section class="try-lab" data-lab-b><h3>${c.labB}</h3><div class="table-scroll"><table><thead><tr><th>ID</th><th>status</th><th>fee_amd</th><th>paid_amd</th></tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div><label class="try-option"><input type="checkbox" data-lab-b-filter> ${c.confirmed}</label><label class="try-option"><input type="checkbox" data-lab-b-duplicate> ${c.duplicate}</label><button type="button" class="small-button" data-lab-b-calc>${c.calculate}</button><p class="try-summary" data-lab-b-summary role="status"></p></section>`;
  }

  function labC(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-lab-c><h3>${c.labC}</h3><ol class="slide-outline">${c.slides.map((slide) => `<li>${esc(slide)}</li>`).join('')}</ol><div class="compare-pair"><article class="is-misleading"><strong>${esc(c.misleading)}</strong></article><article><strong>${esc(c.repair)}</strong></article></div>${simpleChoice(lang, 'slide-repair', c.check, lang === 'hy' ? ['Պահել մոլորեցնողը','Կիրառել ուղղումը'] : ['Keep the misleading slide','Use the repair'], 1)}</section>`;
  }

  function labD(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-lab-d data-version="1"><h3>${c.labD}</h3><p class="state-chip" data-lab-d-state>${c.stateStart}</p><div class="try-actions"><button type="button" class="small-button" data-lab-d-action="approve">${c.approve}</button><button type="button" class="small-button" data-lab-d-action="edit">${c.edit}</button><button type="button" class="small-button" data-lab-d-action="retry">${c.retry}</button></div></section>`;
  }

  function catalogueExercise(lang) {
    const c = pack(lang);
    return `<section class="try-lab feasibility-card"><h3>${c.choose}</h3>${[['input',c.input],['output',c.output],['acceptance',c.acceptance],['reviewer',c.reviewer]].map(([key,label]) => `<label class="prompt-field">${label}<input type="text" data-feasible="${key}"></label>`).join('')}<button type="button" class="small-button" data-feasible-check>${c.decision}</button><p class="try-summary" data-feasible-summary role="status"></p></section>`;
  }

  function glossarySearch(lang) {
    const c = pack(lang);
    return `<div class="glossary-search"><label for="glossary-filter">${c.glossary}</label><input id="glossary-filter" type="search" data-glossary-filter autocomplete="off"><p class="result-count" data-glossary-count role="status"></p></div>`;
  }

  function render(lang, type) {
    const c = pack(lang);
    if (type === 'usecase-map') return `<p class="map-guidance">${c.map}</p>`;
    if (type === 'lab-a') return labA(lang);
    if (type === 'lab-b') return labB(lang);
    if (type === 'lab-c') return labC(lang);
    if (type === 'lab-d' || type === 'lab-d-sim') return labD(lang);
    if (type === 'writing-ba') return simpleChoice(lang, 'writing', c.writing, c.writingOptions, 1);
    if (type === 'schedule-fix') return simpleChoice(lang, 'schedule', c.schedule, c.scheduleOptions, 1);
    if (type === 'data-checks') return simpleChoice(lang, 'data', c.data, c.dataOptions, 0);
    if (type === 'claim-spot') return simpleChoice(lang, 'claim', c.claim, c.claimOptions, 2);
    if (type === 'catalogue-exercise') return catalogueExercise(lang);
    if (type === 'glossary-search') return glossarySearch(lang);
    return null;
  }

  function mount(lang) {
    const safe = lang === 'hy' ? 'hy' : 'en';
    document.querySelectorAll('[data-lab]').forEach((slot) => {
      const html = render(safe, slot.dataset.lab);
      if (html) slot.outerHTML = html;
    });
  }

  function bind(getLang) {
    if (global.__euaCh8LabsBound) return;
    global.__euaCh8LabsBound = true;

    document.addEventListener('click', (event) => {
      const lang = getLang() === 'hy' ? 'hy' : 'en';
      const c = pack(lang);
      const grade = event.target.closest('[data-ch8-grade]');
      if (grade) {
        const kind = grade.dataset.ch8Grade;
        const selected = document.querySelector(`input[name="ch8-${kind}"]:checked`);
        const summary = document.querySelector(`[data-ch8-summary="${kind}"]`);
        const ok = selected && Number(selected.value) === Number(grade.dataset.answer);
        if (summary) summary.textContent = ok ? c.correct : c.review;
      }
      const reset = event.target.closest('[data-ch8-reset]');
      if (reset) {
        const kind = reset.dataset.ch8Reset;
        document.querySelectorAll(`input[name="ch8-${kind}"]`).forEach((input) => { input.checked = false; });
        const summary = document.querySelector(`[data-ch8-summary="${kind}"]`);
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-lab-a-check]')) {
        const choices = [...document.querySelectorAll('[data-lab-a] fieldset')];
        const classificationsPass = choices.every((field) => field.querySelector('input:checked')?.value === '1');
        const text = document.querySelector('[data-lab-a-draft]')?.value.trim() || '';
        const factsPass = /20/.test(text) && /(15|հոկտեմբերի 15)/i.test(text) && !/(40|14 October|10 October|free|guaranteed|անվճար|երաշխավորված)/i.test(text);
        const summary = document.querySelector('[data-lab-a-summary]');
        if (summary) summary.textContent = classificationsPass && factsPass ? c.correct : c.review;
      }
      if (event.target.closest('[data-lab-a-reset]')) {
        document.querySelectorAll('[data-lab-a] input').forEach((input) => { input.checked = false; });
        const draft = document.querySelector('[data-lab-a-draft]');
        if (draft) draft.value = '';
        const summary = document.querySelector('[data-lab-a-summary]');
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-lab-b-calc]')) {
        const filtered = document.querySelector('[data-lab-b-filter]')?.checked;
        const duplicate = document.querySelector('[data-lab-b-duplicate]')?.checked;
        const summary = document.querySelector('[data-lab-b-summary]');
        if (summary) summary.textContent = duplicate ? c.dupStop : filtered ? c.totals : c.review;
      }
      const stateAction = event.target.closest('[data-lab-d-action]');
      if (stateAction) {
        const lab = stateAction.closest('[data-lab-d]');
        const state = lab?.querySelector('[data-lab-d-state]');
        if (!lab || !state) return;
        if (stateAction.dataset.labDAction === 'approve') state.textContent = Number(lab.dataset.version) === 1 ? c.stateApproved : c.stateEdited.replace('awaiting_review', 'approved');
        if (stateAction.dataset.labDAction === 'edit') {
          lab.dataset.version = '2';
          state.textContent = c.stateEdited;
        }
        if (stateAction.dataset.labDAction === 'retry') state.textContent = c.stateRetry;
      }
      if (event.target.closest('[data-feasible-check]')) {
        const fields = [...document.querySelectorAll('[data-feasible]')];
        const complete = fields.length === 4 && fields.every((field) => field.value.trim());
        const summary = document.querySelector('[data-feasible-summary]');
        if (summary) summary.textContent = complete ? c.accepted : c.rejected;
      }
    });

    document.addEventListener('input', (event) => {
      if (!event.target.matches('[data-glossary-filter]')) return;
      const c = pack(getLang());
      const query = event.target.value.trim().toLocaleLowerCase();
      const entries = [...document.querySelectorAll('[data-glossary-entry]')];
      let visible = 0;
      entries.forEach((entry) => {
        const show = !query || entry.textContent.toLocaleLowerCase().includes(query);
        entry.hidden = !show;
        if (show) visible += 1;
      });
      const count = document.querySelector('[data-glossary-count]');
      if (count) count.textContent = visible ? `${visible} / ${entries.length}` : c.noTerms;
    });
  }

  const base = global.EuaExplorersLabs || { mount() {}, bind() {} };
  const baseMount = base.mount.bind(base);
  const baseBind = base.bind(base);
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
