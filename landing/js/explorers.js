/* AI Explorers reading experience. Content is generated from the bilingual handbooks. */
(function () {
  'use strict';
  function calculateCost(v) {
    const values = Object.values(v);
    if (values.some(x => !Number.isFinite(x) || x < 0)) return null;
    if (v.accepted > v.tasks || v.tasks === 0 || v.attempts < 1) return null;
    const perAttempt = (v.input * v.inputRate + v.output * v.outputRate) / 1000000;
    const api = perAttempt * v.tasks * v.attempts;
    const review = v.tasks * v.reviewMinutes / 60 * v.hourlyRate;
    const total = api + review + v.fixed;
    return { perAttempt, api, review, total, perAccepted: v.accepted > 0 ? total / v.accepted : null };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { calculateCost };
  if (typeof document === 'undefined') return;

  const UI = {
    en: {
      skip:'Skip to lesson',brand:'EUA AI Academy',allCourses:'All courses',account:'My learning ↗',selfPaced:'SELF-PACED COURSE',title:'AI Explorers',motto:'Human judgment first.',contents:'Course contents',edition:'Based on handbook edition 1.1',print:'Print lesson',authorLabel:'Author',about:'About the academy',footerNote:'Human judgment first. © 2026 EUA AI Academy',start:'Start here',chapters:'The course',library:'Practice & reference',chapter:'Chapter',section:'Section',reading:'min reading · estimate',previous:'← Previous section',next:'Next section →',overview:'Overview',breadcrumb:'Breadcrumb',navigation:'Lesson navigation',retry:'Try again',loadError:'The lesson could not be loaded. Check your connection and try again.',
      conceptTitle:'From a question to a checked result',conceptNote:'Explore each step. This is a simplified model of a text-generation workflow.',conceptLabels:['01 · Your input','02 · The model','03 · A draft','04 · Your judgment'],conceptText:['You provide instructions and relevant context. For example: an approved workshop notice and a request to write a short announcement.','The model processes tokens and generates a response from learned patterns and the available context. Providing a document is not the same as retraining the model.','The generated text may be useful, but it can omit a condition or invent a date. Fluent wording does not prove that a claim is correct.','Compare the draft with the approved source. Correct unsupported claims and decide whether the result is appropriate to use. Responsibility stays with a person.'],
      check:'Check your understanding',checkNote:'Write your reasoning, then compare it with the explanation. This is a self-check, not a graded assessment. Responses stay in this tab only and are cleared when you reload or leave.',answer:'Compare with the explanation',response:'Your reasoning',pack:'Download practice pack ↓',workbook:'Download cost workbook ↓',toolsTitle:'Find a tool for your task',toolNote:'A directory from handbook edition 1.1, not a ranking. Check the official page for current features, prices, access, and data terms.',casesTitle:'100 practical ways to use AI',casesNote:'Explore by task or tool. Difficulty and time are planning estimates, not measured results.',search:'Search',category:'Category',all:'All categories',results:'results',noResults:'No matches. Try a broader term or choose all categories.',use:'Use it for',website:'Official website ↗',inputs:'Inputs',outputLabel:'Expected output',suggestedTools:'Suggested tools',details:'Plan this task',lab:'Related practice lab',costTitle:'What does a useful result actually cost?',costNote:'Change the assumptions to see the effect. These are hypothetical teaching rates in USD, not live vendor prices. This simplified example excludes caching, taxes, and separate tool charges.',input:'Input tokens per attempt',output:'Output tokens per attempt',inputRate:'Input price per 1M tokens (USD)',outputRate:'Output price per 1M tokens (USD)',tasks:'Tasks per month',attempts:'Average attempts per task',accepted:'Accepted results per month',reviewMinutes:'Review minutes per task',hourlyRate:'Review hourly cost (USD)',fixed:'Fixed monthly costs (USD)',monthly:'Total monthly workflow cost',api:'API cost',review:'Human review cost',perAccepted:'Cost per accepted result',invalid:'Enter valid nonnegative values. Tasks must be above zero, attempts at least one, and accepted results no higher than tasks.',noneAccepted:'No accepted results: cost per accepted result is undefined.',costReset:'Reset example',working:'Loading lesson…',practice:'Practice',tools:'Tool directory',catalogue:'Use-case catalogue'
    },
    hy: {
      skip:'Անցնել դասին',brand:'ՀԵՀ ԱԲ ակադեմիա',allCourses:'Բոլոր դասընթացները',account:'Իմ ուսուցումը ↗',selfPaced:'ԻՆՔՆՈՒՐՈՒՅՆ ՏԵՄՊՈՎ ԴԱՍԸՆԹԱՑ',title:'ԱԲ բացահայտողներ',motto:'Մարդկային դատողությունն առաջնային է։',contents:'Դասընթացի բովանդակությունը',edition:'Ձեռնարկի 1.1 տարբերակի հիման վրա',print:'Տպել դասը',authorLabel:'Հեղինակ',about:'Ակադեմիայի մասին',footerNote:'Մարդկային դատողությունն առաջնային է։ © 2026 ՀԵՀ ԱԲ ակադեմիա',start:'Սկսեք այստեղից',chapters:'Դասընթացը',library:'Գործնական աշխատանք և ռեսուրսներ',chapter:'Գլուխ',section:'Բաժին',reading:'ր ընթերցում · մոտավոր',previous:'← Նախորդ բաժինը',next:'Հաջորդ բաժինը →',overview:'Ակնարկ',breadcrumb:'Նավարկման ուղի',navigation:'Դասերի նավարկում',retry:'Կրկին փորձել',loadError:'Դասը չհաջողվեց բեռնել։ Ստուգեք կապը և կրկին փորձեք։',
      conceptTitle:'Հարցից մինչև ստուգված արդյունք',conceptNote:'Ուսումնասիրեք յուրաքանչյուր քայլը։ Սա տեքստի ստեղծման աշխատանքային հոսքի պարզեցված պատկերն է։',conceptLabels:['01 · Ձեր մուտքը','02 · Մոդելը','03 · Նախագիծը','04 · Ձեր դատողությունը'],conceptText:['Տվեք հրահանգը և անհրաժեշտ համատեքստը։ Օրինակ՝ հաստատված տեղեկություն աշխատարանի մասին և կարճ հայտարարություն գրելու խնդրանք։','Մոդելը մշակում է թոքենները և պատասխան ստեղծում սովորած օրինաչափությունների ու հասանելի համատեքստի հիման վրա։ Փաստաթուղթ տրամադրելը մոդելի վերաուսուցում չէ։','Ստեղծված տեքստը կարող է օգտակար լինել, բայց նաև բաց թողնել պայման կամ հորինել ամսաթիվ։ Սահուն ձևակերպումը պնդման ճշմարտացիության ապացույց չէ։','Համեմատեք նախագիծը հաստատված աղբյուրի հետ։ Ուղղեք չհիմնավորված պնդումները և որոշեք՝ կարելի՞ է կիրառել արդյունքը։ Պատասխանատվությունը մնում է մարդուն։'],
      check:'Ստուգեք ձեր ըմբռնումը',checkNote:'Գրեք հիմնավորումը, ապա համեմատեք բացատրության հետ։ Սա ինքնաստուգում է, ոչ գնահատվող քննություն։ Պատասխանները մնում են միայն այս ներդիրում և ջնջվում են էջը վերաբեռնելիս կամ փակելիս։',answer:'Համեմատել բացատրության հետ',response:'Ձեր հիմնավորումը',pack:'Ներբեռնել գործնական փաթեթը ↓',workbook:'Ներբեռնել ծախսի հաշվիչը ↓',toolsTitle:'Գտեք գործիք ձեր առաջադրանքի համար',toolNote:'Ձեռնարկի 1.1 տարբերակի ցանկն է, ոչ վարկանիշ։ Արդիական գործառույթները, գները, հասանելիությունն ու տվյալների պայմանները ստուգեք պաշտոնական էջում։',casesTitle:'ԱԲ կիրառման 100 գործնական գաղափար',casesNote:'Փնտրեք ըստ առաջադրանքի կամ գործիքի։ Բարդությունն ու ժամանակը պլանավորման մոտավոր գնահատումներ են, ոչ չափված արդյունքներ։',search:'Որոնել',category:'Խումբ',all:'Բոլոր խմբերը',results:'արդյունք',noResults:'Համընկնում չկա։ Փորձեք ավելի ընդհանուր բառ կամ ընտրեք բոլոր խմբերը։',use:'Ինչի համար կիրառել',website:'Պաշտոնական կայք ↗',inputs:'Մուտքային տվյալներ',outputLabel:'Սպասվող արդյունք',suggestedTools:'Առաջարկվող գործիքներ',details:'Պլանավորել առաջադրանքը',lab:'Առնչվող գործնական աշխատանք',costTitle:'Որքա՞ն արժե օգտակար արդյունքը',costNote:'Փոխեք ենթադրությունները և դիտեք ազդեցությունը։ Սրանք ուսումնական, հորինված գներ են ԱՄՆ դոլարով, ոչ մատակարարների ընթացիկ գները։ Պարզեցված օրինակը չի ներառում քեշավորումը, հարկերն ու գործիքների առանձին վճարները։',input:'Մուտքային թոքեններ՝ մեկ փորձի համար',output:'Ելքային թոքեններ՝ մեկ փորձի համար',inputRate:'Մուտքի գին՝ 1 մլն թոքենի համար (USD)',outputRate:'Ելքի գին՝ 1 մլն թոքենի համար (USD)',tasks:'Ամսական առաջադրանքներ',attempts:'Միջին փորձեր՝ մեկ առաջադրանքի համար',accepted:'Ամսական ընդունված արդյունքներ',reviewMinutes:'Ստուգման րոպեներ՝ մեկ առաջադրանքի համար',hourlyRate:'Ստուգման ժամի արժեքը (USD)',fixed:'Ամսական հաստատուն ծախսեր (USD)',monthly:'Աշխատանքային հոսքի ամսական ընդհանուր ծախսը',api:'API ծախս',review:'Մարդու ստուգման ծախս',perAccepted:'Մեկ ընդունված արդյունքի արժեքը',invalid:'Մուտքագրեք վավեր ոչ բացասական արժեքներ։ Առաջադրանքները պետք է լինեն զրոյից մեծ, փորձերը՝ առնվազն մեկ, ընդունված արդյունքները՝ առաջադրանքներից ոչ ավելի։',noneAccepted:'Ընդունված արդյունք չկա․ մեկ ընդունված արդյունքի արժեքն անորոշ է։',costReset:'Վերականգնել օրինակը',working:'Դասը բեռնվում է…',practice:'Գործնական աշխատանք',tools:'Գործիքների ցանկ',catalogue:'Կիրառումների ցանկ'
    }
  };
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const cache = {};
  const responses = new Map(); // Never uploaded or persisted to browser storage.
  let language = 'en', data, section, lesson, requestVersion = 0;
  const t = key => UI[language][key];
  function savedLanguage() { try { return localStorage.getItem('eua-ai-language'); } catch (_) { return 'en'; } }
  function route(chapter, unit, lang = language) {
    const p = new URLSearchParams({ chapter, lesson: unit, lang });
    return 'ai-explorers.html?' + p.toString();
  }
  function updateChrome() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-ui]').forEach(el => { el.textContent = t(el.dataset.ui); });
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === language)));
    $('#course-navigation').setAttribute('aria-label', t('contents'));
    $('#breadcrumbs').setAttribute('aria-label', t('breadcrumb'));
    $('#lesson-pagination').setAttribute('aria-label', t('navigation'));
  }
  function navigation() {
    let html = '', previousGroup;
    for (const s of data.sections) {
      const group = s.chapter ? 'chapters' : ['guide-1','guide-2'].includes(s.id) ? 'start' : 'library';
      if (group !== previousGroup) { html += `<p class="nav-label">${t(group)}</p>`; previousGroup = group; }
      const active = s.id === section.id;
      if (s.lessons.length === 1) html += `<a class="sidebar-link" href="${route(s.id,s.lessons[0].id)}" ${active?'aria-current="page"':''}>${esc(s.title)}</a>`;
      else html += `<details class="chapter-nav ${active?'active':''}" ${active?'open':''}><summary>${s.chapter?`<span class="chapter-number">${s.id.padStart(2,'0')}</span>`:''}<span>${esc(s.title)}</span></summary><ul>${s.lessons.map((l,i) => `<li><a href="${route(s.id,l.id)}" ${active&&l.id===lesson.id?'aria-current="page"':''}>${s.chapter?`${i+1}. `:''}${esc(l.title)}</a></li>`).join('')}</ul></details>`;
    }
    $('#course-navigation').innerHTML = html;
  }
  function concept() {
    return `<section class="concept-lab" aria-labelledby="concept-title"><h2 id="concept-title">${t('conceptTitle')}</h2><p>${t('conceptNote')}</p><div class="concept-steps" role="group" aria-label="${t('conceptTitle')}">${UI[language].conceptLabels.map((label,i)=>`<button type="button" data-step="${i}" aria-controls="concept-explanation" aria-pressed="${i===0}">${label}</button>`).join('')}</div><div class="concept-explanation" id="concept-explanation" aria-live="polite">${UI[language].conceptText[0]}</div></section>`;
  }
  function downloads() {
    return `<div class="download-strip"><a href="content/explorers/downloads/EUA_AI_Explorers_Practice_Pack_v1_1.zip" download>${t('pack')}</a><a href="content/explorers/downloads/AI_Cost_Workbook.xlsx" download>${t('workbook')}</a></div>`;
  }
  function selfCheck(index) {
    return `<section class="self-check" aria-labelledby="self-check-title"><h2 id="self-check-title">${t('check')}</h2><p class="check-note">${t('checkNote')}</p>${data.quizzes[index].map(([q,a],i) => {
      const key = `${language}-${index}-${i}`;
      return `<div class="question"><label for="answer-${i}">${index+1}.${i+1} ${esc(q)}</label><textarea id="answer-${i}" data-response="${key}" placeholder="${t('response')}">${esc(responses.get(key)||'')}</textarea><details><summary>${t('answer')}</summary><p>${esc(a)}</p></details></div>`;
    }).join('')}</section>`;
  }
  function catalogue(kind) {
    const records = kind === 'tools' ? data.tools : data.useCases;
    const field = kind === 'tools' ? 'group' : 'category';
    return `<section class="catalogue" data-catalogue="${kind}"><h2>${t(kind==='tools'?'toolsTitle':'casesTitle')}</h2><p class="lesson-deck">${t(kind==='tools'?'toolNote':'casesNote')}</p><div class="catalogue-controls"><label for="catalogue-search">${t('search')}<input type="search" id="catalogue-search" autocomplete="off"></label><label for="catalogue-category">${t('category')}<select id="catalogue-category"><option value="">${t('all')}</option>${[...new Set(records.map(x=>x[field]))].map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('')}</select></label></div><p id="result-count" class="result-count" role="status" aria-live="polite"></p><div id="catalogue-results" class="catalogue-results"></div></section>`;
  }
  function filterCatalogue() {
    const el = $('[data-catalogue]');
    if (!el) return;
    const kind = el.dataset.catalogue;
    const all = kind === 'tools' ? data.tools : data.useCases;
    const field = kind === 'tools' ? 'group' : 'category';
    const query = $('#catalogue-search').value.trim().toLocaleLowerCase();
    const category = $('#catalogue-category').value;
    const found = all.filter(x => (!category || x[field] === category) && Object.values(x).join(' ').toLocaleLowerCase().includes(query));
    $('#result-count').textContent = `${found.length} / ${all.length} ${t('results')}`;
    $('#catalogue-results').innerHTML = found.length ? found.map(x => kind === 'tools'
      ? `<div class="catalogue-card"><span class="card-category">${esc(x.group)}</span><h3>${x.logo?`<img class="tool-logo" src="${esc(x.logo)}" alt="" loading="lazy">`:''}${esc(x.name)}</h3><p>${esc(x.use)}</p><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${t('website')}</a></div>`
      : `<div class="catalogue-card"><span class="card-category">${String(x.id).padStart(2,'0')} · ${esc(x.category)}</span><h3>${esc(x.task)}</h3><p><strong>${t('suggestedTools')}:</strong> ${esc(x.tools)}</p><p>${esc(x.difficulty)} · ${esc(x.minutes)} ${language==='hy'?'րոպե':'min'}</p><details><summary>${t('details')}</summary><p><strong>${t('inputs')}:</strong> ${esc(x.inputs)}</p><p><strong>${t('outputLabel')}:</strong> ${esc(x.output)}</p><a href="${route('guide-3',String('ABCD'.indexOf(x.lab)+1))}">${t('lab')} ${esc(x.lab)} →</a></details></div>`).join('') : `<p>${t('noResults')}</p>`;
  }
  const defaults = { input:2000,output:500,inputRate:2,outputRate:8,tasks:1000,attempts:1.2,accepted:950,reviewMinutes:2,hourlyRate:12,fixed:20 };
  function costCalculator() {
    return `<section class="cost-calculator"><h2>${t('costTitle')}</h2><p>${t('costNote')}</p><div class="cost-fields">${Object.entries(defaults).map(([key,value])=>`<label for="cost-${key}">${t(key)}<input type="number" inputmode="decimal" id="cost-${key}" data-cost="${key}" min="${key==='attempts'?1:0}" step="any" value="${value}"></label>`).join('')}</div><div class="cost-output" aria-live="polite" id="cost-result"></div><button type="button" class="small-button" id="cost-reset">${t('costReset')}</button></section>`;
  }
  function updateCost() {
    const fields = [...document.querySelectorAll('[data-cost]')];
    if (!fields.length) return;
    const values = Object.fromEntries(fields.map(el=>[el.dataset.cost,el.value.trim()===''?NaN:Number(el.value)]));
    const result = calculateCost(values);
    const output = $('#cost-result');
    if (!result) { output.textContent = t('invalid'); return; }
    const money = value => new Intl.NumberFormat(language==='hy'?'hy-AM':'en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:4}).format(value);
    output.innerHTML = `<p>${t('monthly')}</p><div class="cost-total">${money(result.total)}</div><p>${t('api')}: ${money(result.api)} · ${t('review')}: ${money(result.review)}</p><p>${result.perAccepted===null?t('noneAccepted'):`${t('perAccepted')}: <strong>${money(result.perAccepted)}</strong>`}</p>`;
  }
  function render() {
    updateChrome(); navigation();
    const first = section.lessons[0].id === lesson.id;
    document.title = `${lesson.id==='intro'?section.title:lesson.title} | ${t('title')} | ${t('brand')}`;
    $('meta[name="description"]').content = `${t('title')}: ${section.title}. ${section.description||lesson.title} - Nairi Baghdasaryan, PhD.`;
    $('#breadcrumbs').innerHTML = `<a href="${route('guide-2','intro')}">${t('title')}</a><span aria-hidden="true">/</span><a href="${route(section.id,section.lessons[0].id)}">${esc(section.title)}</a>`;
    let extras = '';
    if (section.id==='1' && first) extras = concept();
    if (section.id==='7' && (first || lesson.id==='practice')) extras = costCalculator();
    if (section.id==='5' && first) extras = catalogue('tools');
    if (section.id==='8' && first) extras = catalogue('cases');
    const showDownloads = ['guide-2','guide-3','guide-5','guide-9','7'].includes(section.id);
    let body = lesson.html;
    // A compact concept explorer interrupts the first reading at a natural paragraph break.
    if (section.id==='1' && first) { const cut=body.indexOf('</p>')+4; body=body.slice(0,cut)+extras+body.slice(cut); extras=''; }
    $('#lesson').innerHTML = `<div class="lesson-kicker"><span>${section.chapter?`${t('chapter')} ${section.id.padStart(2,'0')}`:t('library')}</span><span>${lesson.minutes} ${t('reading')}</span></div><h1 class="lesson-title">${esc(lesson.id==='intro'?section.title:lesson.title)}</h1>${first&&section.description?`<p class="lesson-deck">${esc(section.description)}</p>`:''}${showDownloads?downloads():''}<div class="lesson-body">${body}</div>${extras}${Number.isInteger(lesson.quiz)?selfCheck(lesson.quiz):''}`;
    $('#lesson').setAttribute('aria-busy','false');
    const sequence = data.sections.flatMap(s=>s.lessons.map(l=>({s,l})));
    const index = sequence.findIndex(x=>x.s.id===section.id&&x.l.id===lesson.id);
    $('#lesson-pagination').innerHTML = [sequence[index-1],sequence[index+1]].map((item,i)=>item?`<a class="${i?'next':'previous'}" href="${route(item.s.id,item.l.id)}"><small>${t(i?'next':'previous')}</small><span>${esc(item.l.id==='intro'?item.s.title:item.l.title)}</span></a>`:'<span></span>').join('');
    filterCatalogue(); updateCost();
    $('#reader-status').textContent = `${section.title}: ${lesson.title}`;
  }
  async function load(focus = false) {
    const version = ++requestVersion;
    const params = new URLSearchParams(location.search);
    const lang = params.get('lang') || savedLanguage();
    language = lang === 'hy' ? 'hy' : 'en';
    const selectedLanguage = language;
    updateChrome();
    $('#lesson').setAttribute('aria-busy','true');
    try {
      if (!cache[selectedLanguage]) {
        const response = await fetch(`content/explorers/${selectedLanguage}.json`);
        if (!response.ok) throw new Error('Course content unavailable');
        const content = await response.json();
        if (!Array.isArray(content.sections) || !content.sections.length) throw new Error('Invalid course content');
        cache[selectedLanguage] = content;
      }
      if (version !== requestVersion) return;
      data = cache[selectedLanguage];
      section = data.sections.find(s=>s.id===params.get('chapter')) || data.sections.find(s=>s.id==='1');
      lesson = section.lessons.find(l=>l.id===params.get('lesson')) || section.lessons[0];
      history.replaceState(null,'',route(section.id,lesson.id));
      render();
      if (focus) { $('#lesson').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
    } catch (_) {
      if (version !== requestVersion) return;
      $('#lesson').setAttribute('aria-busy','false');
      $('#lesson').innerHTML = `<div class="error-message" role="alert">${t('loadError')}<button class="small-button" id="retry-load">${t('retry')}</button></div>`;
    }
  }
  document.addEventListener('click', event => {
    const languageButton = event.target.closest('[data-language]');
    if (languageButton) {
      const next = languageButton.dataset.language;
      try { localStorage.setItem('eua-ai-language',next); } catch (_) { /* storage is optional */ }
      const p = new URLSearchParams(location.search); p.set('lang',next);
      history.pushState(null,'','ai-explorers.html?'+p.toString()); load(); return;
    }
    const link = event.target.closest('a');
    if (link && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button===0) {
      const url = new URL(link.href,location.href);
      if (url.origin===location.origin && url.pathname===location.pathname && url.searchParams.has('chapter')) {
        event.preventDefault(); history.pushState(null,'',url); document.body.classList.remove('contents-open'); $('.contents-toggle').setAttribute('aria-expanded','false'); load(true); return;
      }
    }
    const step = event.target.closest('[data-step]');
    if (step) {
      document.querySelectorAll('[data-step]').forEach(el=>el.setAttribute('aria-pressed',String(el===step)));
      $('#concept-explanation').textContent=UI[language].conceptText[Number(step.dataset.step)];
    }
    if (event.target.closest('.contents-toggle')) {
      const open = document.body.classList.toggle('contents-open'); $('.contents-toggle').setAttribute('aria-expanded',String(open));
    }
    if (event.target.closest('#print-lesson')) window.print();
    if (event.target.closest('#retry-load')) load();
    if (event.target.closest('#cost-reset')) { document.querySelectorAll('[data-cost]').forEach(el=>el.value=defaults[el.dataset.cost]); updateCost(); }
  });
  document.addEventListener('input',event=>{
    if (event.target.matches('#catalogue-search')) filterCatalogue();
    if (event.target.matches('[data-cost]')) updateCost();
    if (event.target.matches('[data-response]')) responses.set(event.target.dataset.response,event.target.value);
  });
  document.addEventListener('change',event=>{ if(event.target.matches('#catalogue-category')) filterCatalogue(); });
  window.addEventListener('popstate',()=>load(true));
  load();
}());
