/* Chapter 4 try-labs — loaded after explorers-labs.js */
(function (global) {
  'use strict';

  const COPY = {
    en: {
      labCheck: 'Check', labReset: 'Reset', labCorrect: 'That matches the teaching note.', labReview: 'Not quite — read the note and try again.',
      editTitle: 'Which edit should you reject?',
      editNote: 'Same source paragraph. Highlighted text shows what changed.',
      editOriginal: 'Original: The workshop runs on 15 October in Room 204. Capacity is up to 20 participants.',
      editProof: 'Proofread: The workshop runs on 15 October in Room 204. Capacity is up to 20 participants.',
      editProofNote: 'Fixes a typo only. Meaning unchanged.',
      editLine: 'Line edit: The workshop <mark>takes place</mark> on 15 October in Room 204, with capacity <mark>limited to 20</mark> participants.',
      editLineNote: 'Clearer wording. Still matches “up to 20.”',
      editSub: 'Substantive: The workshop takes place on 15 October in Room 204 for up to 20 people. <mark>Registration closes on 10 October.</mark>',
      editSubNote: 'Adds a deadline not in the source. Attractive, unsupported.',
      editOptions: ['Reject the proofread', 'Reject the line edit', 'Reject the substantive edit that invents a deadline'],
      editAnswer: 2,
      editWhy: 'Proofreading and line editing preserve meaning. The substantive version invents a registration deadline. Reject that claim even when the sentence is fluent.',
      eventTitle: 'Generate first, then choose',
      eventNote: 'Three alternatives are already generated. Raise the criteria that matter most, then pick the option that fits.',
      eventCost: 'Cost priority', eventAccess: 'Accessibility priority', eventPrep: 'Preparation-time priority',
      eventOptions: [
        { id: 'cafe', label: 'A) Campus café lunch — low prep, moderate cost, limited wheelchair seating' },
        { id: 'lib', label: 'B) Library seminar room — accessible, low cost, needs booking and chair setup' },
        { id: 'yard', label: 'C) Courtyard meetup — free, weather risk, longer setup for seating' }
      ],
      eventPick: 'Which option will you take?',
      eventExplain: 'One-sentence trade-off',
      eventExplainPh: 'I choose … because … accepting …',
      eventCheck: 'Record choice',
      eventWhy: 'There is no single correct venue. A good answer names your weighted criteria and the trade-off you accept. Ask AI for alternatives before it ranks them for you.',
      tutorTitle: 'Hint → partial → complete',
      tutorNote: 'Problem: Notice v2 says capacity is “up to 20.” A draft says “at least 20 seats guaranteed.” What is wrong, and how do you fix the sentence?',
      tutorAttempt: 'I attempted an answer before opening help',
      tutorHint: 'Hint', tutorPartial: 'Partial explanation', tutorFull: 'Complete solution',
      tutorHintText: 'Compare the draft words with the exact capacity phrase in the notice. Maximum and minimum are not the same.',
      tutorPartialText: '“Up to 20” is a maximum. “At least 20” is a minimum. The draft contradicts the notice on capacity.',
      tutorFullText: 'Classify the claim as contradicted. Rewrite to “capacity is up to 20 participants” or remove the capacity claim. Then check any AI tutor steps against Notice v2 before you trust them.',
      tutorAsk: 'After using help, what must you still do?',
      tutorOptions: ['Memorize the AI wording without opening the notice', 'Check the tutor’s explanation against the reliable notice text', 'Assume every fluent tutor is automatically correct'],
      tutorAnswer: 1,
      tutorWhy: 'Graduated help protects learning, but you still verify the explanation against a trusted source.',
      mediaTitle: 'Find the extraction error',
      mediaNote: 'Open one media type. Spot the realistic mistake in the AI extract.',
      mediaTabs: [
        { id: 'chart', label: 'Chart', body: 'Bars labeled: Year 1 = 40, Year 2 = 35, Year 3 = 25 (sum 100). AI extract: “Total participants across three years: 120.”', options: ['Axes are unlabeled in the image', 'Invented total that does not match the bars', 'Correct extract'], answer: 1, why: '40+35+25 = 100. The extract invents 120.' },
        { id: 'scan', label: 'Armenian scan', body: 'Scanned line: «Սենյակ 204». AI extract: “Room 304, Building B.”', options: ['OCR/digit swap and invented building', 'Correct bilingual extract', 'Only a font problem'], answer: 0, why: '204 became 304 and Building B was invented. Check digits and names against the scan.' },
        { id: 'audio', label: 'Transcript', body: 'Audio: “We do not waive the fee.” AI transcript summary: “Fee will be waived for everyone.”', options: ['Speaker labels swapped only', 'Negation dropped / meaning reversed', 'Correct paraphrase'], answer: 1, why: 'Dropping “not” reverses the decision. Replay the clip for negations.' },
        { id: 'table', label: 'Table', body: 'Table has 8 rows; 5 status=confirmed. AI extract: “There are 8 confirmed registrations.”', options: ['Correct count of confirmed rows', 'Counted all rows instead of confirmed only', 'Currency error only'], answer: 1, why: 'Confirmed ≠ all rows. Filter status before counting.' }
      ],
      prefTitle: 'Preference or fact to verify?',
      prefNote: 'Classify each statement from an everyday AI draft.',
      prefItems: [
        { id: 'study', label: '“I prefer shorter evening study blocks.”', options: ['Preference you decide', 'Fact you must verify'], answer: 0, why: 'Scheduling preference is yours to choose.' },
        { id: 'hours', label: '“The campus library closes at 22:00 on Fridays.”', options: ['Preference you decide', 'Fact you must verify'], answer: 1, why: 'Opening hours need a checkable source.' },
        { id: 'chores', label: '“Put laundry before cooking tonight.”', options: ['Preference / priority you decide', 'External verified fact'], answer: 0, why: 'Task order is a household preference unless a hard deadline exists.' },
        { id: 'price', label: '“Brand A headphones cost AMD 45,000 at Shop X.”', options: ['Preference you decide', 'Fact you must verify'], answer: 1, why: 'Price and seller claims need verification.' }
      ],
      promptTitle: 'Editable prompt card',
      promptNote: 'Fill one card. Load the Armenian example, then adapt it.',
      promptPurpose: 'Purpose', promptInput: 'Required input', promptTemplate: 'Template',
      promptExample: 'Example output', promptCheck: 'Checking instructions',
      promptLoad: 'Load Armenian example', promptClear: 'Clear card',
      promptSaved: 'Card updated locally in this browser session.',
      promptExampleFill: {
        purpose: 'Ստուգել հայտարարության պնդումները հաստատված ծանուցմամբ',
        input: 'Notice v2 տեքստ + հայտարարության նախագիծ',
        template: 'Օգտագործելով միայն ծանուցումը՝ դասակարգիր յուրաքանչյուր պնդումը որպես հաստատված, հակասող կամ չնշված։ Ցույց տուր աղբյուրի նախադասությունը։ Մի հորինիր վերջնաժամկետ։',
        example: 'Պնդում՝ «մինչև 20» → հաստատված (բաժին A)։ Պնդում՝ «վերջնաժամկետ հոկտեմբերի 10» → չնշված/հակասող։',
        check: 'Բացել ծանուցումը։ Համեմատել մինչև/առնվազն։ Հեռացնել չհիմնավորված դաշտերը։ Անվանել հաստատողին։'
      },
      practiceTitle: 'Writing track or data track',
      practiceNote: 'Choose Lab A–style writing or Lab B–style data. Produce the work and note what you corrected.',
      practiceWriting: 'Writing (Lab A)', practiceData: 'Data (Lab B)',
      practiceWritingTask: 'Using Notice v2 only, rewrite this flawed line: “Join 40 students on 14 October. Apply by 10 October for a free place.” Then list each correction.',
      practiceDataTask: 'From a fictional table of 8 registrations with 5 confirmed, state confirmed count and total fees for confirmed rows only. Note any invented total you refused.',
      practiceWork: 'Your resulting work', practiceCorrected: 'What you corrected (short)',
      practiceDone: 'Keep this text for Lab A or Lab B. Use the shared quality checklist above.'
    },
    hy: {
      labCheck: 'Ստուգել', labReset: 'Վերակայել', labCorrect: 'Սա համապատասխանում է ուսումնական նշմանը։', labReview: 'Ոչ այնքան․ կարդացեք նշումը և կրկին փորձեք։',
      editTitle: 'Ո՞ր խմբագրումն եք մերժում',
      editNote: 'Նույն աղբյուրային պարբերությունը։ Ընդգծված տեքստը ցույց է տալիս փոփոխությունը։',
      editOriginal: 'Բնօրինակ․ Աշատարանը հոկտեմբերի 15-ին է՝ 204 սենյակում։ Տարողությունը մինչև 20 մասնակից է։',
      editProof: 'Սրբագրում․ Աշատարանը հոկտեմբերի 15-ին է՝ 204 սենյակում։ Տարողությունը մինչև 20 մասնակից է։',
      editProofNote: 'Ուղղում է միայն տառասխալը։ Իմաստը նույնն է։',
      editLine: 'Տողային․ Աշատարանը <mark>տեղի է ունենում</mark> հոկտեմբերի 15-ին՝ 204 սենյակում՝ տարողությամբ <mark>մինչև 20</mark> մասնակից։',
      editLineNote: 'Ավելի պարզ ձևակերպում։ Դեռ համապատասխանում է «մինչև 20»-ին։',
      editSub: 'Բովանդակային․ Աշատարանը հոկտեմբերի 15-ին է՝ 204 սենյակում՝ մինչև 20 մարդու համար։ <mark>Գրանցումը փակվում է հոկտեմբերի 10-ին։</mark>',
      editSubNote: 'Ավելացնում է աղբյուրում չեղած վերջնաժամկետ։ Գրավիչ, չհիմնավորված։',
      editOptions: ['Մերժել սրբագրումը', 'Մերժել տողային խմբագրումը', 'Մերժել բովանդակային խմբագրումը, որ հորինում է վերջնաժամկետ'],
      editAnswer: 2,
      editWhy: 'Սրբագրումն ու տողային խմբագրումը պահպանում են իմաստը։ Բովանդակային տարբերակը հորինում է վերջնաժամկետ։ Մերժեք այդ պնդումը։',
      eventTitle: 'Նախ ստեղծեք, ապա ընտրեք',
      eventNote: 'Երեք այլընտրանք արդեն ստեղծված են։ Բարձրացրեք կարևոր չափանիշները, ապա ընտրեք համապատասխան տարբերակը։',
      eventCost: 'Արժեքի առաջնություն', eventAccess: 'Մատչելիության առաջնություն', eventPrep: 'Պատրաստման ժամանակի առաջնություն',
      eventOptions: [
        { id: 'cafe', label: 'Ա) Քամփուսի սրճարան — քիչ պատրաստում, միջին արժեք, սահմանափակ անվասայլակի տեղեր' },
        { id: 'lib', label: 'Բ) Գրադարանի սեմինար սենյակ — մատչելի, ցածր արժեք, ամրագրում և աթոռներ' },
        { id: 'yard', label: 'Գ) Բակային հանդիպում — անվճար, եղանակային ռիսկ, ավելի երկար տեղադրում' }
      ],
      eventPick: 'Ո՞ր տարբերակն եք ընտրում',
      eventExplain: 'Մեկ նախադասությամբ փոխզիջումը',
      eventExplainPh: 'Ընտրում եմ … որովհետև … ընդունելով …',
      eventCheck: 'Գրանցել ընտրությունը',
      eventWhy: 'Մեկ ճիշտ վայր չկա։ Լավ պատասխանը անվանում է ձեր չափանիշներն ու փոխզիջումը։',
      tutorTitle: 'Հուշում → մասնակի → ամբողջական',
      tutorNote: 'Խնդիր․ Notice v2-ում տարողությունը «մինչև 20» է։ Նախագիծը գրում է «երաշխավորված առնվազն 20 տեղ»։ Ի՞նչն է սխալ, և ինչպե՞ս ուղղել։',
      tutorAttempt: 'Օգնությունը բացելուց առաջ փորձել եմ պատասխանել',
      tutorHint: 'Հուշում', tutorPartial: 'Մասնակի բացատրություն', tutorFull: 'Ամբողջ լուծում',
      tutorHintText: 'Համեմատեք նախագծի բառերը ծանուցման ճշգրիտ տարողության ձևակերպման հետ։ Առավելագույնն ու նվազագույնը նույնը չեն։',
      tutorPartialText: '«Մինչև 20»-ը առավելագույն է։ «Առնվազն 20»-ը նվազագույն է։ Նախագիծը հակասում է ծանուցմանը։',
      tutorFullText: 'Դասակարգեք որպես հակասող։ Վերագրեք «տարողությունը մինչև 20 մասնակից» կամ հանեք պնդումը։ Ապա ստուգեք ԱԲ դասատուի քայլերը Notice v2-ով։',
      tutorAsk: 'Օգնությունից հետո ի՞նչ պետք է դեռ անեք',
      tutorOptions: ['Անգիր անել ԱԲ ձևակերպումը առանց ծանուցումը բացելու', 'Ստուգել դասատուի բացատրությունը վստահելի ծանուցմամբ', 'Ենթադրել, որ սահուն դասատուն միշտ ճիշտ է'],
      tutorAnswer: 1,
      tutorWhy: 'Աստիճանական օգնությունը պաշտպանում է ուսուցումը, բայց դուք դեռ ստուգում եք բացատրությունը վստահելի աղբյուրով։',
      mediaTitle: 'Գտեք արդյունահանման սխալը',
      mediaNote: 'Բացեք մեկ մեդիա տեսակ։ Գտեք իրատեսական սխալը ԱԲ արդյունահանման մեջ։',
      mediaTabs: [
        { id: 'chart', label: 'Գծապատկեր', body: 'Սյուներ․ Տարի 1 = 40, Տարի 2 = 35, Տարի 3 = 25 (գումար 100)։ ԱԲ․ «Երեք տարում ընդամենը 120 մասնակից։»', options: ['Առանցքները պիտակված չեն', 'Հորինված գումար, որը չի համընկնում սյուներին', 'Ճիշտ արդյունահանում'], answer: 1, why: '40+35+25 = 100։ Արդյունահանումը հորինում է 120։' },
        { id: 'scan', label: 'Հայերեն սկան', body: 'Սկան․ «Սենյակ 204»։ ԱԲ․ «Room 304, Building B.»', options: ['OCR/թվի փոխարինում և հորինված շենք', 'Ճիշտ երկլեզու արդյունահանում', 'Միայն տառատեսակի խնդիր'], answer: 0, why: '204-ը դարձել է 304, Building B-ն հորինված է։' },
        { id: 'audio', label: 'Տեքստագրություն', body: 'Աուդիո․ «Մենք չենք ազատում վճարից։» ԱԲ ամփոփում․ «Վճարը կազատվի բոլորի համար։»', options: ['Միայն խոսողների պիտակներն են փոխված', 'Ժխտումը բաց է թողնված / իմաստը շրջված', 'Ճիշտ վերափոխում'], answer: 1, why: '«Չենք»-ի բացթողումը շրջում է որոշումը։' },
        { id: 'table', label: 'Աղյուսակ', body: 'Աղյուսակում 8 տող է․ 5-ը status=confirmed։ ԱԲ․ «Կա 8 հաստատված գրանցում։»', options: ['Հաստատված տողերի ճիշտ հաշվարկ', 'Հաշվել է բոլոր տողերը՝ ոչ միայն confirmed', 'Միայն արժույթի սխալ'], answer: 1, why: 'Confirmed ≠ բոլոր տողերը։ Նախ զտեք կարգավիճակը։' }
      ],
      prefTitle: 'Նախընտրությո՞ւն, թե ստուգելի փաստ',
      prefNote: 'Դասակարգեք ամենօրյա ԱԲ նախագծի յուրաքանչյուր պնդումը։',
      prefItems: [
        { id: 'study', label: '«Նախընտրում եմ կարճ երեկոյան ուսումնական բլոկներ։»', options: ['Նախընտրություն, որ դուք եք որոշում', 'Փաստ, որ պետք է ստուգել'], answer: 0, why: 'Ժամանակացույցի նախընտրությունը ձեր ընտրությունն է։' },
        { id: 'hours', label: '«Քամփուսի գրադարանը ուրբաթներին փակվում է 22:00-ին։»', options: ['Նախընտրություն, որ դուք եք որոշում', 'Փաստ, որ պետք է ստուգել'], answer: 1, why: 'Բացման ժամերը ստուգելի աղբյուր են պահանջում։' },
        { id: 'chores', label: '«Այսօր լվացքը դիր պատրաստելուց առաջ։»', options: ['Նախընտրություն / առաջնություն, որ դուք եք որոշում', 'Արտաքին ստուգված փաստ'], answer: 0, why: 'Աշխատանքների հերթականությունը անձնական նախընտրություն է՝ եթե կոշտ վերջնաժամկետ չկա։' },
        { id: 'price', label: '«A ապրանքանիշի ականջակալները X խանութում արժեն 45,000 դրամ։»', options: ['Նախընտրություն, որ դուք եք որոշում', 'Փաստ, որ պետք է ստուգել'], answer: 1, why: 'Գինն ու վաճառողի պնդումները պետք է ստուգել։' }
      ],
      promptTitle: 'Խմբագրելի հրահանգի քարտ',
      promptNote: 'Լրացրեք մեկ քարտ։ Բեռնեք հայերեն օրինակը, ապա հարմարեցրեք։',
      promptPurpose: 'Նպատակ', promptInput: 'Պահանջվող մուտք', promptTemplate: 'Ձևանմուշ',
      promptExample: 'Օրինակ ելք', promptCheck: 'Ստուգման հրահանգներ',
      promptLoad: 'Բեռնել հայերեն օրինակը', promptClear: 'Մաքրել քարտը',
      promptSaved: 'Քարտը թարմացված է այս դիտարկիչի նիստում։',
      promptExampleFill: {
        purpose: 'Ստուգել հայտարարության պնդումները հաստատված ծանուցմամբ',
        input: 'Notice v2 տեքստ + հայտարարության նախագիծ',
        template: 'Օգտագործելով միայն ծանուցումը՝ դասակարգիր յուրաքանչյուր պնդումը որպես հաստատված, հակասող կամ չնշված։ Ցույց տուր աղբյուրի նախադասությունը։ Մի հորինիր վերջնաժամկետ։',
        example: 'Պնդում՝ «մինչև 20» → հաստատված (բաժին A)։ Պնդում՝ «վերջնաժամկետ հոկտեմբերի 10» → չնշված/հակասող։',
        check: 'Բացել ծանուցումը։ Համեմատել մինչև/առնվազն։ Հեռացնել չհիմնավորված դաշտերը։ Անվանել հաստատողին։'
      },
      practiceTitle: 'Գրավոր ուղի կամ տվյալների ուղի',
      practiceNote: 'Ընտրեք Lab A ոճի գրելը կամ Lab B ոճի տվյալները։ Պատրաստեք աշխատանքը և նշեք ուղղումները։',
      practiceWriting: 'Գրել (Լաբորատոր A)', practiceData: 'Տվյալներ (Լաբորատոր B)',
      practiceWritingTask: 'Միայն Notice v2-ով վերագրեք․ «Միացեք 40 ուսանողի հոկտեմբերի 14-ին։ Դիմեք մինչև հոկտեմբերի 10՝ անվճար տեղի համար։» Ապա ցանկացրեք ուղղումները։',
      practiceDataTask: '8 գրանցումներից 5-ը confirmed է։ Նշեք confirmed քանակը և միայն confirmed տողերի վճարների գումարը։ Նշեք հորինված գումարը, որ մերժել եք։',
      practiceWork: 'Ձեր արդյունքը', practiceCorrected: 'Ինչ եք ուղղել (կարճ)',
      practiceDone: 'Պահեք այս տեքստը Lab A կամ Lab B-ի համար։ Օգտագործեք վերևի ընդհանուր որակի ցանկը։'
    }
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const pack = (lang) => COPY[lang === 'hy' ? 'hy' : 'en'];

  function singleChoice(lang, kind, options) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="${kind}" aria-labelledby="lab-${kind}-title"><h3 id="lab-${kind}-title">${options.title}</h3><p>${options.note}</p>${options.body || ''}<div class="try-item" data-item="${kind}"><div class="try-options">${options.choices.map((opt, oi) => `<label class="try-option"><input type="radio" name="${kind}-main" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div><div class="try-actions"><button type="button" class="small-button" data-lab-check="${kind}">${c.labCheck}</button><button type="button" class="small-button" data-lab-reset="${kind}">${c.labReset}</button></div><p class="try-summary" data-lab-summary="${kind}" role="status" aria-live="polite"></p></section>`;
  }

  function editLab(lang) {
    const c = pack(lang);
    const body = `<p class="edit-original">${esc(c.editOriginal)}</p><div class="edit-stack"><article><p>${c.editProof}</p><p class="edit-note">${esc(c.editProofNote)}</p></article><article><p>${c.editLine}</p><p class="edit-note">${esc(c.editLineNote)}</p></article><article><p>${c.editSub}</p><p class="edit-note">${esc(c.editSubNote)}</p></article></div>`;
    return singleChoice(lang, 'edit', { title: c.editTitle, note: c.editNote, body, choices: c.editOptions });
  }

  function eventLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-event-lab aria-labelledby="event-title"><h3 id="event-title">${c.eventTitle}</h3><p>${c.eventNote}</p>
      <div class="criteria-sliders">
        <label>${esc(c.eventCost)} <input type="range" min="1" max="5" value="3" data-crit="cost"> <span data-crit-val="cost">3</span></label>
        <label>${esc(c.eventAccess)} <input type="range" min="1" max="5" value="3" data-crit="access"> <span data-crit-val="access">3</span></label>
        <label>${esc(c.eventPrep)} <input type="range" min="1" max="5" value="3" data-crit="prep"> <span data-crit-val="prep">3</span></label>
      </div>
      <div class="try-item"><p class="try-prompt">${esc(c.eventPick)}</p><div class="try-options">${c.eventOptions.map((opt, oi) => `<label class="try-option"><input type="radio" name="event-pick" value="${oi}"> <span>${esc(opt.label)}</span></label>`).join('')}</div>
      <label class="prompt-field">${esc(c.eventExplain)}<textarea rows="2" data-event-explain placeholder="${esc(c.eventExplainPh)}"></textarea></label>
      <p class="try-why" data-event-why hidden></p></div>
      <div class="try-actions"><button type="button" class="small-button" data-event-check>${c.eventCheck}</button></div>
      <p class="try-summary" data-event-summary role="status" aria-live="polite"></p></section>`;
  }

  function tutorLab(lang) {
    const c = pack(lang);
    const body = `<label class="try-option"><input type="checkbox" data-tutor-attempt> <span>${esc(c.tutorAttempt)}</span></label>
      <div class="tutor-levels" data-tutor-locked>
        <details data-tutor-level="hint"><summary>${esc(c.tutorHint)}</summary><p>${esc(c.tutorHintText)}</p></details>
        <details data-tutor-level="partial"><summary>${esc(c.tutorPartial)}</summary><p>${esc(c.tutorPartialText)}</p></details>
        <details data-tutor-level="full"><summary>${esc(c.tutorFull)}</summary><p>${esc(c.tutorFullText)}</p></details>
      </div>
      <p class="try-prompt">${esc(c.tutorAsk)}</p>`;
    return singleChoice(lang, 'tutor', { title: c.tutorTitle, note: c.tutorNote, body, choices: c.tutorOptions });
  }

  function mediaLab(lang) {
    const c = pack(lang);
    const tabs = c.mediaTabs.map((tab, i) => `<button type="button" class="media-tab${i === 0 ? ' is-active' : ''}" data-media-tab="${esc(tab.id)}" aria-selected="${i === 0}">${esc(tab.label)}</button>`).join('');
    const panels = c.mediaTabs.map((tab, i) => `<div class="media-panel" data-media-panel="${esc(tab.id)}" ${i === 0 ? '' : 'hidden'}><p class="lesson-source">${esc(tab.body)}</p><div class="try-item" data-item="media-${esc(tab.id)}"><div class="try-options">${tab.options.map((opt, oi) => `<label class="try-option"><input type="radio" name="media-${tab.id}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div></div>`).join('');
    return `<section class="try-lab" data-media-lab aria-labelledby="media-title"><h3 id="media-title">${c.mediaTitle}</h3><p>${c.mediaNote}</p><div class="media-tabs" role="tablist">${tabs}</div>${panels}<div class="try-actions"><button type="button" class="small-button" data-media-check>${c.labCheck}</button><button type="button" class="small-button" data-media-reset>${c.labReset}</button></div><p class="try-summary" data-media-summary role="status" aria-live="polite"></p></section>`;
  }

  function prefLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-choice-lab="pref" aria-labelledby="pref-title"><h3 id="pref-title">${c.prefTitle}</h3><p>${c.prefNote}</p>${c.prefItems.map((item, index) => `<div class="try-item" data-item="${esc(item.id)}"><p class="try-prompt"><strong>${index + 1}.</strong> ${esc(item.label)}</p><div class="try-options">${item.options.map((opt, oi) => `<label class="try-option"><input type="radio" name="pref-${item.id}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><p class="try-why" hidden></p></div>`).join('')}<div class="try-actions"><button type="button" class="small-button" data-lab-check="pref">${c.labCheck}</button><button type="button" class="small-button" data-lab-reset="pref">${c.labReset}</button></div><p class="try-summary" data-lab-summary="pref" role="status" aria-live="polite"></p></section>`;
  }

  function promptLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab prompt-card-lab" data-prompt-lab aria-labelledby="prompt-title"><h3 id="prompt-title">${c.promptTitle}</h3><p>${c.promptNote}</p>
      <label class="prompt-field">${esc(c.promptPurpose)}<input type="text" data-prompt-field="purpose"></label>
      <label class="prompt-field">${esc(c.promptInput)}<input type="text" data-prompt-field="input"></label>
      <label class="prompt-field">${esc(c.promptTemplate)}<textarea rows="3" data-prompt-field="template"></textarea></label>
      <label class="prompt-field">${esc(c.promptExample)}<textarea rows="2" data-prompt-field="example"></textarea></label>
      <label class="prompt-field">${esc(c.promptCheck)}<textarea rows="2" data-prompt-field="check"></textarea></label>
      <div class="try-actions"><button type="button" class="small-button" data-prompt-load>${c.promptLoad}</button><button type="button" class="small-button" data-prompt-clear>${c.promptClear}</button></div>
      <p class="try-summary" data-prompt-summary role="status" aria-live="polite"></p></section>`;
  }

  function practiceLab(lang) {
    const c = pack(lang);
    return `<section class="try-lab" data-practice-lab aria-labelledby="practice-lab-title"><h3 id="practice-lab-title">${c.practiceTitle}</h3><p>${c.practiceNote}</p>
      <div class="practice-tracks">
        <button type="button" class="small-button is-active" data-practice-track="writing">${c.practiceWriting}</button>
        <button type="button" class="small-button" data-practice-track="data">${c.practiceData}</button>
      </div>
      <p class="try-prompt" data-practice-task>${esc(c.practiceWritingTask)}</p>
      <label class="prompt-field">${esc(c.practiceWork)}<textarea rows="4" data-practice-work></textarea></label>
      <label class="prompt-field">${esc(c.practiceCorrected)}<textarea rows="2" data-practice-corrected></textarea></label>
      <div class="try-actions"><button type="button" class="small-button" data-practice-save>${c.labCheck}</button></div>
      <p class="try-summary" data-practice-summary role="status" aria-live="polite"></p></section>`;
  }

  function render(lang, type) {
    if (type === 'edit-levels') return editLab(lang);
    if (type === 'event-plan') return eventLab(lang);
    if (type === 'tutor-levels') return tutorLab(lang);
    if (type === 'media-errors') return mediaLab(lang);
    if (type === 'pref-vs-fact') return prefLab(lang);
    if (type === 'prompt-card') return promptLab(lang);
    if (type === 'practice-choice') return practiceLab(lang);
    return null;
  }

  function gradeSingle(lang, kind, answer, why) {
    const c = pack(lang);
    const selected = document.querySelector(`input[name="${kind}-main"]:checked`);
    const whyEl = document.querySelector(`[data-item="${kind}"] .try-why`);
    const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
    if (whyEl) {
      whyEl.hidden = false;
      whyEl.textContent = why;
      whyEl.classList.toggle('is-correct', selected && Number(selected.value) === answer);
      whyEl.classList.toggle('is-review', !(selected && Number(selected.value) === answer));
    }
    if (summary) summary.textContent = selected && Number(selected.value) === answer ? c.labCorrect : c.labReview;
  }

  function gradePref(lang) {
    const c = pack(lang);
    let correct = 0;
    c.prefItems.forEach((item) => {
      const selected = document.querySelector(`input[name="pref-${item.id}"]:checked`);
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
    const summary = document.querySelector('[data-lab-summary="pref"]');
    if (summary) summary.textContent = correct === c.prefItems.length ? c.labCorrect : `${c.labReview} (${correct}/${c.prefItems.length})`;
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
      const check = event.target.closest('[data-lab-check]');
      if (check) {
        const kind = check.dataset.labCheck;
        if (kind === 'edit') gradeSingle(lang, 'edit', c.editAnswer, c.editWhy);
        if (kind === 'tutor') gradeSingle(lang, 'tutor', c.tutorAnswer, c.tutorWhy);
        if (kind === 'pref') gradePref(lang);
      }
      const reset = event.target.closest('[data-lab-reset]');
      if (reset && (reset.dataset.labReset === 'edit' || reset.dataset.labReset === 'tutor' || reset.dataset.labReset === 'pref')) {
        const kind = reset.dataset.labReset;
        document.querySelectorAll(`[data-choice-lab="${kind}"] input[type="radio"]`).forEach((el) => { el.checked = false; });
        document.querySelectorAll(`[data-choice-lab="${kind}"] .try-why`).forEach((el) => {
          el.hidden = true;
          el.textContent = '';
          el.classList.remove('is-correct', 'is-review');
        });
        const summary = document.querySelector(`[data-lab-summary="${kind}"]`);
        if (summary) summary.textContent = '';
      }
      const eventCheck = event.target.closest('[data-event-check]');
      if (eventCheck) {
        const picked = document.querySelector('input[name="event-pick"]:checked');
        const explain = document.querySelector('[data-event-explain]');
        const why = document.querySelector('[data-event-why]');
        const summary = document.querySelector('[data-event-summary]');
        if (why) {
          why.hidden = false;
          why.textContent = c.eventWhy;
          why.classList.toggle('is-correct', !!(picked && explain && explain.value.trim().length > 12));
          why.classList.toggle('is-review', !(picked && explain && explain.value.trim().length > 12));
        }
        if (summary) summary.textContent = picked && explain && explain.value.trim().length > 12 ? c.labCorrect : c.labReview;
      }
      const mediaTab = event.target.closest('[data-media-tab]');
      if (mediaTab) {
        document.querySelectorAll('[data-media-tab]').forEach((btn) => {
          btn.classList.toggle('is-active', btn === mediaTab);
          btn.setAttribute('aria-selected', String(btn === mediaTab));
        });
        document.querySelectorAll('[data-media-panel]').forEach((panel) => {
          panel.hidden = panel.dataset.mediaPanel !== mediaTab.dataset.mediaTab;
        });
      }
      const mediaCheck = event.target.closest('[data-media-check]');
      if (mediaCheck) {
        const active = document.querySelector('[data-media-panel]:not([hidden])');
        if (!active) return;
        const id = active.dataset.mediaPanel;
        const tab = c.mediaTabs.find((t) => t.id === id);
        const selected = document.querySelector(`input[name="media-${id}"]:checked`);
        const why = active.querySelector('.try-why');
        const summary = document.querySelector('[data-media-summary]');
        if (why && tab) {
          why.hidden = false;
          why.textContent = tab.why;
          why.classList.toggle('is-correct', selected && Number(selected.value) === tab.answer);
          why.classList.toggle('is-review', !(selected && Number(selected.value) === tab.answer));
        }
        if (summary && tab) summary.textContent = selected && Number(selected.value) === tab.answer ? c.labCorrect : c.labReview;
      }
      const mediaReset = event.target.closest('[data-media-reset]');
      if (mediaReset) {
        document.querySelectorAll('[data-media-lab] input[type="radio"]').forEach((el) => { el.checked = false; });
        document.querySelectorAll('[data-media-lab] .try-why').forEach((el) => {
          el.hidden = true;
          el.textContent = '';
          el.classList.remove('is-correct', 'is-review');
        });
        const summary = document.querySelector('[data-media-summary]');
        if (summary) summary.textContent = '';
      }
      const load = event.target.closest('[data-prompt-load]');
      if (load) {
        const fill = c.promptExampleFill;
        Object.keys(fill).forEach((key) => {
          const field = document.querySelector(`[data-prompt-field="${key}"]`);
          if (field) field.value = fill[key];
        });
        const summary = document.querySelector('[data-prompt-summary]');
        if (summary) summary.textContent = c.promptSaved;
      }
      const clear = event.target.closest('[data-prompt-clear]');
      if (clear) {
        document.querySelectorAll('[data-prompt-field]').forEach((field) => { field.value = ''; });
        const summary = document.querySelector('[data-prompt-summary]');
        if (summary) summary.textContent = '';
      }
      const track = event.target.closest('[data-practice-track]');
      if (track) {
        document.querySelectorAll('[data-practice-track]').forEach((btn) => btn.classList.toggle('is-active', btn === track));
        const task = document.querySelector('[data-practice-task]');
        if (task) task.textContent = track.dataset.practiceTrack === 'data' ? c.practiceDataTask : c.practiceWritingTask;
      }
      const save = event.target.closest('[data-practice-save]');
      if (save) {
        const work = document.querySelector('[data-practice-work]');
        const corrected = document.querySelector('[data-practice-corrected]');
        const summary = document.querySelector('[data-practice-summary]');
        const ok = work && corrected && work.value.trim().length > 20 && corrected.value.trim().length > 8;
        if (summary) summary.textContent = ok ? c.practiceDone : c.labReview;
      }
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('[data-crit]')) {
        const span = document.querySelector(`[data-crit-val="${event.target.dataset.crit}"]`);
        if (span) span.textContent = event.target.value;
      }
      if (event.target.matches('[data-tutor-attempt]')) {
        const box = document.querySelector('[data-tutor-locked]');
        if (box) box.classList.toggle('is-unlocked', event.target.checked);
      }
    });
    document.addEventListener('toggle', (event) => {
      const details = event.target.closest('[data-tutor-level]');
      if (!details || !details.open) return;
      const locked = details.closest('[data-tutor-locked]');
      if (locked && !locked.classList.contains('is-unlocked')) {
        details.open = false;
      }
    }, true);
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
