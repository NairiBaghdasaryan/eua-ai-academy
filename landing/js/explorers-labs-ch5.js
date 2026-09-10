/* Chapter 5 try-labs — loaded after explorers-labs.js */
(function (global) {
  'use strict';

  const COPY = {
    en: {
      labCheck: 'Check', labReset: 'Reset', labCorrect: 'That matches the teaching note.', labReview: 'Not quite — read the note and try again.',
      accessTitle: 'Same task, four access modes',
      accessNote: 'Task: summarize an approved workshop notice for staff. Match each mode to its extra setup or responsibility.',
      accessItems: [
        { id: 'chat', label: 'Official chat website or app', options: ['Fastest individual start; still verify outputs and account terms', 'Requires writing production code before any use', 'Automatically private forever'], answer: 0, why: 'Chat apps are the beginner path. Convenience is not automatic proof or privacy.' },
        { id: 'api', label: 'API inside another product', options: ['Required for every beginner before chatting', 'Optional embedding path with auth, monitoring, and cost ownership', 'Deletes the need for human review'], answer: 1, why: 'APIs are powerful and optional. Beginners do not need them to start learning.' },
        { id: 'auto', label: 'No-code automation platform', options: ['No permissions to review because steps are visual', 'You own connectors, triggers, and failure handling across apps', 'Only works offline'], answer: 1, why: 'Visual steps still move data. Permissions and failures are your responsibility.' },
        { id: 'local', label: 'Local or private-hosted model', options: ['Guarantees accuracy without testing', 'Adds hardware, update, and evaluation responsibility', 'Removes all institutional policy'], answer: 1, why: 'Local control is not automatic safety or correctness.' }
      ],
      layerTitle: 'Classify the layer',
      layerNote: 'Model, application/product, or enabled feature/permission?',
      layerItems: [
        { id: 'gpt', label: 'GPT-class language model weights', options: ['Model', 'Application / product', 'Enabled feature or permission'], answer: 0, why: 'The model is the engine layer.' },
        { id: 'claudeapp', label: 'claude.ai chat workspace', options: ['Model', 'Application / product', 'Enabled feature or permission'], answer: 1, why: 'The product wraps the model with UI and workflow.' },
        { id: 'upload', label: 'File upload allowed on your current plan', options: ['Model', 'Application / product', 'Enabled feature or permission'], answer: 2, why: 'Plan permissions decide whether a product feature is actually available to you.' },
        { id: 'copilot', label: 'Microsoft Copilot in Word with tenant grounding', options: ['Model name alone', 'Application / product system with permissions', 'A pure offline calculator'], answer: 1, why: 'Copilot is a product system: models plus apps plus organizational controls.' }
      ],
      scoreTitle: 'Pass/fail before weights',
      scoreNote: 'Tool A is plain but passes privacy and accuracy gates. Tool B looks prettier but fails privacy. Adjust weights — B must not win.',
      scorePrivacy: 'Required: privacy gate',
      scoreFacts: 'Required: factual-accuracy gate',
      scoreQuality: 'Weight: task quality',
      scoreFormat: 'Weight: formatting polish',
      scoreCost: 'Weight: low cost',
      scoreA: 'Tool A — passes privacy & accuracy; adequate quality; plain layout',
      scoreB: 'Tool B — fails privacy retention rule; flashy layout; high quality score',
      scoreRun: 'Compute result',
      scoreWhy: 'Required gates come first. A failed privacy or accuracy condition blocks the tool even if weighted polish looks better.',
      planTitle: 'Plan inspection checklist',
      planNote: 'Mark each item reviewed with a dated official source habit.',
      planItems: [
        { id: 'avail', label: 'Availability for your country / institution', options: ['Skip — logos are enough', 'Check official access page and record the date', 'Assume every free plan is identical worldwide'], answer: 1, why: 'Availability is local and dated.' },
        { id: 'ret', label: 'Retention of prompts and files', options: ['Ignore retention if the UI is clear', 'Open current retention/help docs and note the review date', 'Trust a social-media summary forever'], answer: 1, why: 'Retention terms change; date your check.' },
        { id: 'admin', label: 'Administrator access to logs or content', options: ['Only developers need to care', 'Confirm who can see workspace content before use', 'Never relevant for education plans'], answer: 1, why: 'Admin visibility is part of risk.' },
        { id: 'cancel', label: 'Cancellation and data export/delete', options: ['Optional forever once paid', 'Locate cancel/export steps before relying on the tool', 'Only legal teams may read this'], answer: 1, why: 'Know exit and deletion paths early.' }
      ],
      routeTitle: 'Decision guide',
      routeNote: 'Answer the four prompts. You will get a category and evaluation process — not a permanent best brand.',
      routeOutput: 'Desired output',
      routeEvidence: 'Evidence needs',
      routeSens: 'Sensitivity',
      routeTools: 'Available tools',
      routeOutOpts: ['Bilingual staff notice from an approved source', 'Current-web research digest', 'Image concept draft'],
      routeEvOpts: ['Only an approved internal notice', 'Live web citations required', 'No factual claims beyond a creative brief'],
      routeSensOpts: ['Internal staff, non-sensitive', 'Includes personal student data', 'Public marketing claim'],
      routeToolOpts: ['Approved chat assistants only', 'Chat + research tools available', 'Design tools available'],
      routeGo: 'Recommend process',
      routeReset: 'Reset',
      recordTitle: 'Seven-step decision record',
      recordNote: 'Study the completed example for the bilingual notice, then edit your own version.',
      recordShow: 'Show completed example',
      recordEdit: 'Your editable record',
      recordSave: 'Save local draft',
      recordSaved: 'Draft saved in this browser session.',
      recordExample: 'Job: bilingual staff notice from Notice v2.\nRisk: internal staff, non-sensitive.\nEvidence: Notice v2 only.\nProduct type: approved general chat assistant.\nTest: same prompt in two assistants; TRACE claims.\nPrivacy/cost: confirm current plan retention on 10 Sep 2026; prefer free approved tier if quality passes.\nDecision: Tool A for drafting; human communications lead approves before send. Owner: you. Date: today.',
      compareTitle: 'Two-tool comparison with sample outputs',
      compareNote: 'If you have no account, use the samples. Judge evidence quality, not brand loyalty.',
      compareA: 'Sample A: “Workshop on 15 October, Room 204, up to 20 people (Notice v2). Fee AMD 10,000. No deadline stated.”',
      compareB: 'Sample B: “Join 40 colleagues on 14 October — free if you register by 10 October! Beautifully formatted.”',
      compareAsk: 'Which sample is safer to shortlist, and why?',
      compareOptions: ['Sample B — prettier formatting means higher quality', 'Sample A — claims stay closer to the notice; B invents capacity, date, fee waiver, and deadline', 'Neither — brand logos decide'],
      compareAnswer: 1,
      compareWhy: 'Evaluate evidence against the source. Sample B fails factual accuracy despite polish. Your reasoning should cite the invented fields.'
    },
    hy: {
      labCheck: 'Ստուգել', labReset: 'Վերակայել', labCorrect: 'Սա համապատասխանում է ուսումնական նշմանը։', labReview: 'Ոչ այնքան․ կարդացեք նշումը և կրկին փորձեք։',
      accessTitle: 'Նույն առաջադրանքը, չորս մուտքի եղանակ',
      accessNote: 'Առաջադրանք․ ամփոփել հաստատված աշխատարանի ծանուցումը աշխատակազմի համար։ Յուրաքանչյուր եղանակը համապատասխանեցրեք լրացուցիչ կարգավորմանը կամ պատասխանատվությանը։',
      accessItems: [
        { id: 'chat', label: 'Պաշտոնական զրույցի կայք կամ հավելված', options: ['Ամենաարագ անհատական մեկնարկ․ դեռ ստուգել ելքերն ու պայմանները', 'Նախ պետք է գրել արտադրական կոդ', 'Ինքնաբերաբար մշտապես գաղտնի է'], answer: 0, why: 'Զրույցի հավելվածները սկսնակների ուղին են։ Հարմարությունը ապացույց կամ գաղտնիություն չէ։' },
        { id: 'api', label: 'API այլ արտադրանքի ներսում', options: ['Պարտադիր է բոլոր սկսնակների համար զրույցից առաջ', 'Ընտրովի տեղադրման ուղի՝ նույնականացում, մոնիթորինգ և արժեքի պատասխանատվություն', 'Ջնջում է մարդկային վերանայման կարիքը'], answer: 1, why: 'API-ները հզոր և ընտրովի են։ Սկսնակներին սովորելու համար պարտադիր չեն։' },
        { id: 'auto', label: 'Առանց կոդի ավտոմատացման հարթակ', options: ['Թույլտվություններ ստուգել պետք չէ, քանի որ քայլերը տեսողական են', 'Դուք եք պատասխանատու միացումների, գործարկիչների և սխալների համար', 'Աշխատում է միայն օֆլայն'], answer: 1, why: 'Տեսողական քայլերը դեռ տվյալներ են տեղափոխում։' },
        { id: 'local', label: 'Տեղային կամ մասնավոր տեղադրված մոդել', options: ['Երաշխավորում է ճշգրտություն առանց թեստի', 'Ավելացնում է սարքավորման, թարմացման և գնահատման պատասխանատվություն', 'Հանում է բոլոր ինստիտուցիոնալ կանոնները'], answer: 1, why: 'Տեղային վերահսկումը ավտոմատ անվտանգություն կամ ճշգրտություն չէ։' }
      ],
      layerTitle: 'Դասակարգեք շերտը',
      layerNote: 'Մոդե՞լ, հավելված/արտադրա՞նք, թե միացված գործառույթ/թույլտվությո՞ւն։',
      layerItems: [
        { id: 'gpt', label: 'GPT դասի լեզվական մոդելի կշիռներ', options: ['Մոդել', 'Հավելված / արտադրանք', 'Միացված գործառույթ կամ թույլտվություն'], answer: 0, why: 'Մոդելը շարժիչի շերտն է։' },
        { id: 'claudeapp', label: 'claude.ai զրույցի աշխատատարածք', options: ['Մոդել', 'Հավելված / արտադրանք', 'Միացված գործառույթ կամ թույլտվություն'], answer: 1, why: 'Արտադրանքը մոդելը փաթեթավորում է ինտերֆեյսով և հոսքով։' },
        { id: 'upload', label: 'Ֆայլի վերբեռնում՝ թույլատրված ձեր ընթացիկ պլանում', options: ['Մոդել', 'Հավելված / արտադրանք', 'Միացված գործառույթ կամ թույլտվություն'], answer: 2, why: 'Պլանի թույլտվությունները որոշում են՝ գործառույթը ձեզ հասանելի է, թե ոչ։' },
        { id: 'copilot', label: 'Microsoft Copilot Word-ում՝ տենանտի grounding-ով', options: ['Միայն մոդելի անուն', 'Հավելված / արտադրանքային համակարգ թույլտվություններով', 'Մաքուր օֆլայն հաշվիչ'], answer: 1, why: 'Copilot-ը արտադրանքային համակարգ է՝ մոդելներ + հավելվածներ + կազմակերպական վերահսկում։' }
      ],
      scoreTitle: 'Անցում/ձախողում՝ նախքան կշիռները',
      scoreNote: 'A գործիքը պարզ է, բայց անցնում է գաղտնիության և ճշգրտության դարպասները։ B-ն ավելի գեղեցիկ է, բայց ձախողում է գաղտնիությունը։ Փոխեք կշիռները — B-ն չպետք է հաղթի։',
      scorePrivacy: 'Պարտադիր․ գաղտնիության դարպաս',
      scoreFacts: 'Պարտադիր․ փաստերի ճշգրտության դարպաս',
      scoreQuality: 'Կշիռ․ առաջադրանքի որակ',
      scoreFormat: 'Կշիռ․ ձևաչափի հղկվածություն',
      scoreCost: 'Կշիռ․ ցածր արժեք',
      scoreA: 'Գործիք A — անցնում է գաղտնիություն և ճշգրտություն․ բավարար որակ․ պարզ տեսք',
      scoreB: 'Գործիք B — ձախողում է պահպանման կանոնը․ շքեղ տեսք․ բարձր որակի միավոր',
      scoreRun: 'Հաշվել արդյունքը',
      scoreWhy: 'Պարտադիր դարպասները առաջնային են։ Ձախողված գաղտնիությունը կամ ճշգրտությունը արգելում է գործիքը՝ նույնիսկ եթե հղկվածությունը ավելի լավ է թվում։',
      planTitle: 'Պլանի ստուգման ցանկ',
      planNote: 'Նշեք յուրաքանչյուր կետը որպես վերանայված՝ ամսաթվով պաշտոնական աղբյուրի սովորույթով։',
      planItems: [
        { id: 'avail', label: 'Հասանելիություն ձեր երկրի / հաստատության համար', options: ['Բաց թողնել — լոգոները բավարար են', 'Ստուգել պաշտոնական մուտքի էջը և գրանցել ամսաթիվը', 'Ենթադրել, որ բոլոր անվճար պլանները աշխարհում նույնն են'], answer: 1, why: 'Հասանելիությունը տեղային և ամսաթվով է։' },
        { id: 'ret', label: 'Հրահանգների և ֆայլերի պահպանում', options: ['Անտեսել պահպանումը, եթե ինտերֆեյսը պարզ է', 'Բացել ընթացիկ պահպանման/օգնության փաստաթղթերը և նշել ամսաթիվը', 'Հավատալ սոցիալական ցանցի ամփոփմանը ընդմիշտ'], answer: 1, why: 'Պահպանման պայմանները փոխվում են․ ամսաթվով ստուգեք։' },
        { id: 'admin', label: 'Ադմինիստրատորի մուտք մատյաններին կամ բովանդակությանը', options: ['Միայն մշակողները պետք է հոգան', 'Հաստատել՝ ով կարող է տեսնել աշխատատարածքի բովանդակությունը', 'Երբեք տեղին չէ կրթական պլանների համար'], answer: 1, why: 'Ադմինի տեսանելիությունը ռիսկի մաս է։' },
        { id: 'cancel', label: 'Չեղարկում և տվյալների արտահանում/ջնջում', options: ['Ընտրովի է ընդմիշտ վճարելուց հետո', 'Գտնել չեղարկման/արտահանման քայլերը՝ նախքան հույս դնելը', 'Միայն իրավաբանները կարող են կարդալ'], answer: 1, why: 'Վաղ իմացեք ելքի և ջնջման ուղիները։' }
      ],
      routeTitle: 'Որոշման ուղեցույց',
      routeNote: 'Պատասխանեք չորս հուշման։ Կստանաք խումբ և գնահատման ընթացակարգ — ոչ մշտական լավագույն ապրանքանիշ։',
      routeOutput: 'Ցանկալի ելք',
      routeEvidence: 'Ապացույցի կարիք',
      routeSens: 'Զգայունություն',
      routeTools: 'Հասանելի գործիքներ',
      routeOutOpts: ['Երկլեզու աշխատակազմի ծանուցում հաստատված աղբյուրից', 'Ընթացիկ վեբ հետազոտության ամփոփում', 'Պատկերի հայեցակարգի նախագիծ'],
      routeEvOpts: ['Միայն հաստատված ներքին ծանուցում', 'Պահանջվում են կենդանի վեբ հղումներ', 'Ստեղծագործական բրիֆից դուրս փաստեր չկան'],
      routeSensOpts: ['Ներքին աշխատակազմ, ոչ զգայուն', 'Պարունակում է ուսանողի անձնական տվյալներ', 'Հրապարակային մարքեթինգային պնդում'],
      routeToolOpts: ['Միայն հաստատված զրույցի օգնականներ', 'Զրույց + հետազոտական գործիքներ', 'Դիզայնի գործիքներ հասանելի'],
      routeGo: 'Առաջարկել ընթացակարգ',
      routeReset: 'Վերակայել',
      recordTitle: 'Յոթ քայլի որոշման գրառում',
      recordNote: 'Ուսումնասիրեք երկլեզու ծանուցման լրացված օրինակը, ապա խմբագրեք ձերը։',
      recordShow: 'Ցույց տալ լրացված օրինակը',
      recordEdit: 'Ձեր խմբագրելի գրառումը',
      recordSave: 'Պահել տեղային նախագիծ',
      recordSaved: 'Նախագիծը պահված է այս դիտարկիչի նիստում։',
      recordExample: 'Աշխատանք․ երկլեզու աշխատակազմի ծանուցում Notice v2-ից։\nՌիսկ․ ներքին, ոչ զգայուն։\nԱպացույց․ միայն Notice v2։\nԱրտադրանք․ հաստատված ընդհանուր զրույցի օգնական։\nԹեստ․ նույն հրահանգը երկու օգնականում․ TRACE պնդումները։\nԳաղտնիություն/արժեք․ հաստատել պլանի պահպանումը 10 սեպտեմբերի 2026-ին․ նախընտրել անվճար հաստատված մակարդակ, եթե որակը բավարար է։\nՈրոշում․ A գործիքը նախագծման համար․ հաղորդակցության պատասխանատուն հաստատում է ուղարկելուց առաջ։ Պատասխանատու՝ դուք։ Ամսաթիվ՝ այսօր։',
      compareTitle: 'Երկու գործիքի համեմատություն նմուշ ելքերով',
      compareNote: 'Եթե հաշիվ չունեք, օգտագործեք նմուշները։ Գնահատեք ապացույցի որակը, ոչ ապրանքանիշի հավատարմությունը։',
      compareA: 'Նմուշ A․ «Աշատարան՝ հոկտեմբերի 15, սենյակ 204, մինչև 20 մարդ (Notice v2)։ Վճար՝ 10,000 դրամ։ Վերջնաժամկետ նշված չէ։»',
      compareB: 'Նմուշ B․ «Միացեք 40 գործընկերոջ հոկտեմբերի 14-ին — անվճար, եթե գրանցվեք մինչև հոկտեմբերի 10։ Գեղեցիկ ձևաչափված։»',
      compareAsk: 'Ո՞ր նմուշն է ավելի անվտանգ կարճ ցանկի համար և ինչու՞',
      compareOptions: ['Նմուշ B — ավելի գեղեցիկ ձևաչափը նշանակում է ավելի բարձր որակ', 'Նմուշ A — պնդումները մոտ են ծանուցմանը․ B-ն հորինում է տարողություն, ամսաթիվ, վճարի ազատում և վերջնաժամկետ', 'Ոչ մեկը — լոգոներն են որոշում'],
      compareAnswer: 1,
      compareWhy: 'Ապացույցը գնահատեք աղբյուրի դեմ։ B-ն ձախողում է փաստերի ճշգրտությունը՝ չնայած հղկվածությանը։'
    }
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const pack = (lang) => COPY[lang === 'hy' ? 'hy' : 'en'];

  function choiceLab(lang, kind, title, note, items) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${title}</h3><p>${note}</p>${items.map((item, index) => `<div class="try-item" data-item="${esc(item.id)}"><p class="try-prompt"><strong>${index + 1}.</strong> ${esc(item.label)}</p><div class="try-options">${item.options.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-${item.id}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div>`).join('')}<div class="try-actions"><button type="button" class="small-button" data-ch5-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-ch5-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function scoreLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-score-lab aria-labelledby="score-title"><h3 id="score-title">${c.scoreTitle}</h3><p>${c.scoreNote}</p>
      <div class="score-tools"><article><p>${esc(c.scoreA)}</p><p>Privacy: pass · Accuracy: pass · Quality 3/5 · Format 2/5 · Cost 4/5</p></article>
      <article><p>${esc(c.scoreB)}</p><p>Privacy: FAIL · Accuracy: pass · Quality 5/5 · Format 5/5 · Cost 3/5</p></article></div>
      <div class="criteria-sliders">
        <label>${esc(c.scoreQuality)} <input type="range" min="0" max="5" value="3" data-score-w="quality"> <span data-score-val="quality">3</span></label>
        <label>${esc(c.scoreFormat)} <input type="range" min="0" max="5" value="3" data-score-w="format"> <span data-score-val="format">3</span></label>
        <label>${esc(c.scoreCost)} <input type="range" min="0" max="5" value="3" data-score-w="cost"> <span data-score-val="cost">3</span></label>
      </div>
      <p class="try-prompt">${esc(c.scorePrivacy)} / ${esc(c.scoreFacts)} — required</p>
      <div class="try-actions"><button type="button" class="small-button" data-score-run>${c.scoreRun}</button></div>
      <p class="try-summary" data-score-summary role="status" aria-live="polite"></p>
      <p class="try-why is-correct" data-score-why hidden>${esc(c.scoreWhy)}</p></section>`;
  }

  function routeLab(lang) {
    const c = pack(lang);
    const select = (name, label, opts) => `<label class="prompt-field">${esc(label)}<select data-route="${name}">${opts.map((o, i) => `<option value="${i}">${esc(o)}</option>`).join('')}</select></label>`;
    return `<section class="try-lab" data-route-lab aria-labelledby="route-title"><h3 id="route-title">${c.routeTitle}</h3><p>${c.routeNote}</p>
      ${select('out', c.routeOutput, c.routeOutOpts)}
      ${select('ev', c.routeEvidence, c.routeEvOpts)}
      ${select('sens', c.routeSens, c.routeSensOpts)}
      ${select('tools', c.routeTools, c.routeToolOpts)}
      <div class="try-actions"><button type="button" class="small-button" data-route-go>${c.routeGo}</button><button type="button" class="small-button" data-route-reset>${c.routeReset}</button></div>
      <p class="try-summary" data-route-summary role="status" aria-live="polite"></p></section>`;
  }

  function recordLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-record-lab aria-labelledby="record-title"><h3 id="record-title">${c.recordTitle}</h3><p>${c.recordNote}</p>
      <details><summary>${esc(c.recordShow)}</summary><pre class="decision-example">${esc(c.recordExample)}</pre></details>
      <label class="prompt-field">${esc(c.recordEdit)}<textarea rows="8" data-record-draft></textarea></label>
      <div class="try-actions"><button type="button" class="small-button" data-record-save>${c.recordSave}</button></div>
      <p class="try-summary" data-record-summary role="status" aria-live="polite"></p></section>`;
  }

  function compareLab(lang) {
    const c = pack(lang);
    const body = `<div class="compare-pair"><article><p>${esc(c.compareA)}</p></article><article><p>${esc(c.compareB)}</p></article></div><p class="try-prompt">${esc(c.compareAsk)}</p>`;
    return `<section class="try-lab" data-choice-lab="compare" aria-labelledby="compare-title"><h3 id="compare-title">${c.compareTitle}</h3><p>${c.compareNote}</p>${body}<div class="try-item" data-item="compare"><div class="try-options">${c.compareOptions.map((opt, oi) => `<label class="try-option"><input type="radio" name="compare-main" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div><div class="try-actions"><button type="button" class="small-button" data-ch5-check="compare">${c.labCheck}</button><button type="button" class="small-button" data-ch5-reset="compare">${c.labReset}</button></div><p class="try-summary" data-lab-summary="compare" role="status" aria-live="polite"></p></section>`;
  }

  function render(lang, type) {
    const c = pack(lang);
    if (type === 'access-modes') return choiceLab(lang, 'access', c.accessTitle, c.accessNote, c.accessItems);
    if (type === 'layer-classify') return choiceLab(lang, 'layer', c.layerTitle, c.layerNote, c.layerItems);
    if (type === 'eval-scorecard') return scoreLab(lang);
    if (type === 'plan-checklist') return choiceLab(lang, 'plan', c.planTitle, c.planNote, c.planItems);
    if (type === 'decision-route') return routeLab(lang);
    if (type === 'decision-record') return recordLab(lang);
    if (type === 'tool-compare') return compareLab(lang);
    return null;
  }

  function gradeChoice(lang, kind) {
    const c = pack(lang);
    const items = kind === 'access' ? c.accessItems : kind === 'layer' ? c.layerItems : kind === 'plan' ? c.planItems : null;
    const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
    if (kind === 'compare') {
      const selected = document.querySelector('input[name="compare-main"]:checked');
      const why = document.querySelector('[data-item="compare"] .try-why');
      if (why) {
        why.hidden = false;
        why.textContent = c.compareWhy;
        why.classList.toggle('is-correct', selected && Number(selected.value) === c.compareAnswer);
        why.classList.toggle('is-review', !(selected && Number(selected.value) === c.compareAnswer));
      }
      if (summary) summary.textContent = selected && Number(selected.value) === c.compareAnswer ? c.labCorrect : c.labReview;
      return;
    }
    if (!items) return;
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

  function routeAdvice(lang) {
    const c = pack(lang);
    const out = Number(document.querySelector('[data-route="out"]').value);
    const ev = Number(document.querySelector('[data-route="ev"]').value);
    const sens = Number(document.querySelector('[data-route="sens"]').value);
    const tools = Number(document.querySelector('[data-route="tools"]').value);
    const summary = document.querySelector('[data-route-summary]');
    if (sens === 1) {
      summary.textContent = lang === 'hy'
        ? 'Կատեգորիա․ միայն հաստատված/պաշտպանված միջավայր։ Գնահատում․ նախ գաղտնիության դարպաս, ապա որակ։ Մի օգտագործեք հանրային զրուցարան ուսանողական տվյալներով։'
        : 'Category: approved/protected environment only. Evaluation: privacy gate first, then quality. Do not use a public chatbot with student data.';
      return;
    }
    if (out === 1 || ev === 1) {
      summary.textContent = lang === 'hy'
        ? 'Կատեգորիա․ հետազոտություն և սովորում (օր. Perplexity / մեջբերումներով ռեժիմ)։ Գնահատում․ բացել հղումները, ստուգել ամսաթիվն ու անկախությունը, ապա համեմատել երկու գործիք։'
        : 'Category: research & learning (for example Perplexity / cited mode). Evaluation: open citations, check date and independence, then compare two tools.';
      return;
    }
    if (out === 2 || tools === 2) {
      summary.textContent = lang === 'hy'
        ? 'Կատեգորիա․ պատկեր և դիզայն։ Գնահատում․ լիցենզիա, բրենդ, հասանելիություն․ փաստեր մի հորինեք պատկերից։'
        : 'Category: images & design. Evaluation: license, brand, accessibility; do not invent facts from an image.';
      return;
    }
    summary.textContent = lang === 'hy'
      ? 'Կատեգորիա․ ընդհանուր օգնականներ։ Գնահատում․ անցում/ձախողում դարպասներ, նույն թեստը երկու հասանելի գործիքում, TRACE պնդումները, ամսաթվով որոշման գրառում։ Սա «լավագույն ապրանքանիշ» չէ։'
      : 'Category: general assistants. Evaluation: pass/fail gates, same test in two accessible tools, TRACE claims, dated decision record. This is not a permanent best brand.';
    void c;
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
      const check = event.target.closest('[data-ch5-check]');
      if (check) gradeChoice(lang, check.dataset.ch5Check);
      const reset = event.target.closest('[data-ch5-reset]');
      if (reset) {
        const kind = reset.dataset.ch5Reset;
        document.querySelectorAll(`[data-choice-lab="${kind}"] input[type="radio"]`).forEach((el) => { el.checked = false; });
        document.querySelectorAll(`[data-choice-lab="${kind}"] .try-why`).forEach((el) => {
          el.hidden = true;
          el.textContent = '';
          el.classList.remove('is-correct', 'is-review');
        });
        const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-score-run]')) {
        const wq = Number(document.querySelector('[data-score-w="quality"]').value);
        const wf = Number(document.querySelector('[data-score-w="format"]').value);
        const wc = Number(document.querySelector('[data-score-w="cost"]').value);
        const scoreA = (3 * wq) + (2 * wf) + (4 * wc);
        const scoreB = (5 * wq) + (5 * wf) + (3 * wc);
        const summary = document.querySelector('[data-score-summary]');
        const why = document.querySelector('[data-score-why]');
        if (why) why.hidden = false;
        summary.textContent = lang === 'hy'
          ? `Կշռված միավորներ՝ A=${scoreA}, B=${scoreB}։ Արդյունք՝ A է անցնում, որովհետև B-ն ձախողում է գաղտնիության դարպասը։`
          : `Weighted points: A=${scoreA}, B=${scoreB}. Result: A advances because B fails the privacy gate.`;
      }
      if (event.target.closest('[data-route-go]')) routeAdvice(lang);
      if (event.target.closest('[data-route-reset]')) {
        document.querySelectorAll('[data-route]').forEach((el) => { el.selectedIndex = 0; });
        const summary = document.querySelector('[data-route-summary]');
        if (summary) summary.textContent = '';
      }
      if (event.target.closest('[data-record-save]')) {
        const draft = document.querySelector('[data-record-draft]');
        const summary = document.querySelector('[data-record-summary]');
        if (summary) summary.textContent = draft && draft.value.trim().length > 40 ? c.recordSaved : c.labReview;
      }
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-score-w]')) {
        const span = document.querySelector(`[data-score-val="${event.target.dataset.scoreW}"]`);
        if (span) span.textContent = event.target.value;
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
