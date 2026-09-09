/* Bilingual teaching enhancements. Examples are authored illustrations, not live AI calls. */
(function (root) {
  'use strict';
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const copy = {
    en: {
      welcome:'Your journey starts with a question.', welcomeText:'What would you like AI to help you do? Keep that task in mind as you read, experiment, and check the results.',
      journey:['Understand the basics','Give clear instructions','Check the result','Apply it responsibly'],
      welcomeAction:'Explore the learning pathway', position:'Your place in this chapter', section:'Section', of:'of',
      example:'SEE IT IN PRACTICE', note:'Illustrative teaching example, not a live AI response. Your results may differ.',
      input:'The task / input', result:'Illustrative result', reveal:'Reveal the example result', check:'Human checkpoint', try:'Now try it',
      finishTitle:'Ready to move on?', finishText:'Review your practice and self-check explanations, then finish this chapter when you feel ready.',
      finish:'Finish chapter', congrats:'Well done, explorer!', covered:'You have explored', next:'Continue to',
      endNote:'This is a personal learning milestone, not a grade or certificate. It is remembered only while this page stays open.',
      nextNote:'Next, put these ideas to work.', review:'Revisit this chapter',
      outcomes:[
        ['what AI is, how language models work, and why their answers need judgment.','Now let’s turn your questions into clear instructions for AI.'],
        ['how to give context, set constraints, and improve a prompt through iteration.','A clear answer is not always a correct one. Next, let’s learn how to check it.'],
        ['how to question claims, verify sources, and protect people and data.','Now let’s use those habits in everyday writing, learning, and creative work.'],
        ['practical ways to write, plan, learn, and work with different types of content.','Which tool fits which task? Let’s build your selection method next.'],
        ['how to compare AI tools by task, quality, cost, and data controls.','Next, see how individual tools become supervised workflows and agents.'],
        ['the difference between chatbots, workflows, and agents, with human approval at key steps.','Let’s make those workflows practical by managing tokens, context, and costs.'],
        ['how to manage context, reuse prompts, and estimate the cost of a useful result.','Now explore 100 ways to apply what you have learned.'],
        ['100 applications of AI and ways to turn an idea into a practical task.','You have reached the end of the eight core chapters. Next, test your skills in the practice labs.']
      ]
    },
    hy: {
      welcome:'Ձեր ուղին սկսվում է մեկ հարցից։', welcomeText:'Ի՞նչ կցանկանայիք անել ԱԲ-ի օգնությամբ։ Մտքում պահեք այդ առաջադրանքը՝ ընթերցելիս, փորձարկելիս և արդյունքները ստուգելիս։',
      journey:['Հասկանալ հիմունքները','Տալ հստակ հրահանգներ','Ստուգել արդյունքը','Կիրառել պատասխանատու կերպով'],
      welcomeAction:'Տեսնել ուսուցման ուղին', position:'Ձեր տեղը այս գլխում', section:'Բաժին', of:'/',
      example:'ՏԵՍԵՔ ԳՈՐԾՆԱԿԱՆՈՒՄ', note:'Ուսումնական օրինակ է, ոչ ԱԲ-ի ուղիղ պատասխան։ Ձեր արդյունքները կարող են տարբերվել։',
      input:'Առաջադրանք / մուտք', result:'Արդյունքի օրինակ', reveal:'Բացել արդյունքի օրինակը', check:'Մարդու ստուգումը', try:'Հիմա փորձեք ինքներդ',
      finishTitle:'Պատրա՞ստ եք շարունակել', finishText:'Վերանայեք գործնական աշխատանքը և ինքնաստուգման բացատրությունները։ Ավարտեք գլուխը, երբ պատրաստ լինեք։',
      finish:'Ավարտել գլուխը', congrats:'Շնորհավորում ենք, բացահայտո՛ղ։', covered:'Դուք ուսումնասիրեցիք՝', next:'Շարունակել՝',
      endNote:'Սա ձեր ուսուցման անձնական հանգրվանն է, ոչ գնահատական կամ վկայական։ Այն հիշվում է միայն այս էջը բաց պահելու ընթացքում։',
      nextNote:'Հաջորդ քայլը՝ կիրառել սովորածը։', review:'Վերանայել այս գլուխը',
      outcomes:[
        ['ինչ է ԱԲ-ն, ինչպես են աշխատում լեզվային մոդելները և ինչու են դրանց պատասխանները պահանջում մարդկային դատողություն։','Այժմ սովորենք ձեր հարցերը վերածել ԱԲ-ին ուղղված հստակ հրահանգների։'],
        ['ինչպես տալ համատեքստ, սահմանել սահմանափակումներ և քայլ առ քայլ բարելավել հրահանգը։','Հստակ պատասխանը միշտ չէ, որ ճիշտ է։ Հաջորդիվ սովորենք ստուգել այն։'],
        ['ինչպես կասկածի տակ դնել պնդումները, ստուգել աղբյուրները և պաշտպանել մարդկանց ու տվյալները։','Այժմ այդ սովորությունները կիրառենք գրելու, սովորելու և ստեղծագործելու ընթացքում։'],
        ['գրելու, պլանավորելու, սովորելու և տարբեր տեսակի բովանդակության հետ աշխատելու գործնական եղանակներ։','Ո՞ր գործիքն է հարմար ձեր առաջադրանքին։ Հաջորդիվ սովորենք ընտրել այն։'],
        ['ինչպես համեմատել ԱԲ գործիքներն ըստ առաջադրանքի, որակի, ծախսի և տվյալների վերահսկման։','Հաջորդիվ տեսնենք՝ ինչպես են գործիքները դառնում վերահսկվող աշխատանքային հոսքեր և գործակալներ։'],
        ['չաթբոտերի, աշխատանքային հոսքերի և գործակալների տարբերությունները՝ կարևոր քայլերում մարդու հաստատմամբ։','Այժմ կառավարենք թոքենները, համատեքստը և ծախսերը՝ այդ հոսքերն արդյունավետ կիրառելու համար։'],
        ['ինչպես կառավարել համատեքստը, կրկին օգտագործել հրահանգները և գնահատել օգտակար արդյունքի արժեքը։','Այժմ բացահայտեք սովորածը կիրառելու 100 հնարավորություն։'],
        ['ԱԲ-ի 100 կիրառություն և գաղափարը գործնական առաջադրանք դարձնելու եղանակներ։','Դուք հասաք ութ հիմնական գլուխների ավարտին։ Հաջորդիվ փորձարկեք ձեր հմտությունները գործնական աշխատանքներում։']
      ]
    }
  };
  // Each record: title, task, result steps, human check, learner activity.
  const examples = {
    en: [
      ['A useful draft is not a verified fact', 'Source note: “Workshop on 15 May. Registration required.” Ask AI for a one-sentence invitation.', ['Join our workshop on 15 May.', 'Register before attending.', 'Location and time: not provided in the source.'], 'The draft preserves the date and registration rule without inventing a venue. Confirm the source is current before publishing.', 'Give AI a short fictional notice. Ask it to separate known facts from missing information.'],
      ['From a vague request to a usable brief', 'Instead of “Write an email,” try: “Draft an invitation for students. Use only these facts: workshop, 15 May, registration required. Keep it under 60 words. Do not invent a time or location.”', ['Subject: Join our workshop on 15 May', 'Dear students, you are invited to our workshop on 15 May. Registration is required. Please register before attending.', 'The time, location, and registration link still need confirmation.'], 'The constraints make the draft easier to check. Missing details stay visible instead of becoming invented facts.', 'Change only the audience to lecturers. Compare the two drafts: what changes, and which facts must stay fixed?'],
      ['Spot the unsupported addition', 'Approved note: “The library opens at 09:00 on Monday.” AI draft: “The library opens at 09:00 every weekday and closes at 18:00.”', ['09:00 on Monday: supported.', 'Every weekday: not supported.', 'Closes at 18:00: not supported.'], 'A plausible schedule is not evidence. Keep only the supported statement, or ask the library to confirm the rest.', 'Rewrite the draft using only what the approved note actually says.'],
      ['Turn meeting notes into an action list', 'Fictional notes: “Ani drafts the agenda by Tuesday. Aram checks the room. The event date is not decided.”', ['Ani → Draft agenda → Tuesday', 'Aram → Check room → Deadline not specified', 'Event date → Decision needed → Owner not specified'], 'Check names, ownership, and dates against the notes. A useful table exposes gaps rather than filling them with guesses.', 'Use fictional meeting notes of your own. Request a table with action, owner, deadline, and open questions.'],
      ['Choose by the job, not the hype', 'You need a five-slide summary of an approved public report, with a source for every factual claim.', ['Find and verify evidence → A source-linked research tool', 'Draft the storyline → A general-purpose assistant', 'Lay out slides → A presentation tool', 'Check claims and design → You'], 'One product may cover several steps. Test citation accuracy, editing options, and data terms before choosing.', 'Run the same small task in two available tools. Compare factual accuracy and how much editing each output needs.'],
      ['A news brief with an approval gate', 'Design a daily brief using an approved list of public news sources. Do not publish automatically.', ['Collect → Retrieve items from approved sources', 'Filter → Keep relevant items and remove duplicates', 'Draft → Summarize each item with its source link', 'Approve → A person checks facts before sharing'], 'If a source fails or a claim has no evidence, flag it. Give the workflow only the permissions it needs.', 'Draw your own workflow. Mark exactly where it must stop and ask for approval.'],
      ['Shorter context, same acceptance criteria', 'Hypothetical comparison: a full document uses 4,000 input tokens. A checked, relevant excerpt uses 1,000. Both request a 300-token answer.', ['Full document → 4,000 input + 300 output tokens', 'Relevant excerpt → 1,000 input + 300 output tokens', 'Input reduction → 75% (not a measured quality improvement)'], 'The shorter version is only better if it preserves all necessary facts and passes the same checks. Total cost also depends on output rates, retries, and review.', 'Write three acceptance criteria. Compare a full-context prompt and a shorter version against those same criteria.'],
      ['One topic, three useful outputs', 'Use an approved public workshop brief as the common source for a small communication project.', ['Presentation → A general assistant + a slide tool → Five-slide outline', 'Short video → A script assistant + a video editor → 30-second storyboard', 'Announcement → A writing assistant → A concise invitation'], 'Keep dates and claims consistent across formats. Check permissions for images, voices, and music before sharing.', 'Choose one output, define its audience and acceptance criteria, then use a related practice lab to build it.']
    ],
    hy: [
      ['Օգտակար նախագիծը դեռ ստուգված փաստ չէ', 'Աղբյուր՝ «Աշխատարանը մայիսի 15-ին է։ Գրանցումը պարտադիր է»։ Խնդրեք ԱԲ-ին գրել մեկ նախադասությամբ հրավեր։', ['Մասնակցեք մայիսի 15-ի աշխատարանին։', 'Մասնակցելուց առաջ գրանցվեք։', 'Վայրն ու ժամը աղբյուրում նշված չեն։'], 'Նախագիծը պահպանում է ամսաթիվն ու գրանցման պայմանը՝ առանց վայր հորինելու։ Հրապարակելուց առաջ հաստատեք աղբյուրի արդիականությունը։', 'ԱԲ-ին տվեք կարճ հորինված հայտարարություն։ Խնդրեք առանձնացնել հայտնի փաստերն ու բացակայող տեղեկությունները։'],
      ['Անորոշ խնդրանքից դեպի կիրառելի հրահանգ', '«Նամակ գրիր» խնդրանքի փոխարեն՝ «Կազմիր հրավեր ուսանողների համար։ Օգտագործիր միայն այս փաստերը՝ աշխատարան, մայիսի 15, պարտադիր գրանցում։ Մինչև 60 բառ։ Մի հորինիր ժամ կամ վայր»։', ['Թեմա՝ Մասնակցեք մայիսի 15-ի աշխատարանին', 'Սիրելի՛ ուսանողներ, հրավիրում ենք մայիսի 15-ի աշխատարանին։ Գրանցումը պարտադիր է։ Խնդրում ենք նախապես գրանցվել։', 'Ժամը, վայրը և գրանցման հղումը դեռ պետք է հաստատել։'], 'Սահմանափակումները հեշտացնում են ստուգումը։ Բացակայող տեղեկությունները մնում են տեսանելի՝ հորինված փաստեր դառնալու փոխարեն։', 'Փոխեք միայն լսարանը՝ ուսանողների փոխարեն դասախոսներ։ Համեմատեք նախագծերը․ ի՞նչ է փոխվում, և ո՞ր փաստերը պետք է նույնը մնան։'],
      ['Գտեք չհիմնավորված հավելումը', 'Հաստատված գրառում՝ «Երկուշաբթի գրադարանը բացվում է 09:00-ին»։ ԱԲ-ի նախագիծ՝ «Գրադարանը բացվում է ամեն աշխատանքային օր՝ 09:00-ին, և փակվում է 18:00-ին»։', ['Երկուշաբթի՝ 09:00-ին․ հիմնավորված է։', 'Ամեն աշխատանքային օր․ հիմնավորված չէ։', 'Փակվում է 18:00-ին․ հիմնավորված չէ։'], 'Հավանական ժամանակացույցը ապացույց չէ։ Պահեք միայն հիմնավորված պնդումը կամ մնացածը ճշտեք գրադարանի հետ։', 'Վերաշարադրեք նախագիծը՝ օգտագործելով միայն հաստատված գրառման տեղեկությունը։'],
      ['Հանդիպման նշումներից դեպի անելիքների ցանկ', 'Հորինված նշումներ՝ «Անին մինչև երեքշաբթի կազմում է օրակարգը։ Արամը ստուգում է սենյակը։ Միջոցառման ամսաթիվը որոշված չէ»։', ['Անի → Կազմել օրակարգը → Երեքշաբթի', 'Արամ → Ստուգել սենյակը → Ժամկետը նշված չէ', 'Միջոցառման ամսաթիվ → Որոշում է պետք → Պատասխանատուն նշված չէ'], 'Անունները, պատասխանատուներին և ժամկետները համեմատեք նշումների հետ։ Օգտակար աղյուսակը ցույց է տալիս բացերը՝ գուշակություններով լրացնելու փոխարեն։', 'Կազմեք ձեր հորինված հանդիպման նշումները։ Պահանջեք աղյուսակ՝ գործողություն, պատասխանատու, ժամկետ և բաց հարցեր սյունակներով։'],
      ['Ընտրեք ըստ առաջադրանքի, ոչ աղմուկի', 'Ձեզ անհրաժեշտ է հաստատված հանրային զեկույցի հինգ սլայդանոց ամփոփում՝ յուրաքանչյուր փաստական պնդման աղբյուրով։', ['Գտնել և ստուգել ապացույցները → Աղբյուրների հղումներ տրամադրող հետազոտական գործիք', 'Կազմել պատմողական կառուցվածքը → Ընդհանուր նշանակության օգնական', 'Ձևավորել սլայդները → Ներկայացումների գործիք', 'Ստուգել փաստերն ու ձևավորումը → Դուք'], 'Մեկ գործիքը կարող է ընդգրկել մի քանի քայլ։ Ընտրելուց առաջ փորձարկեք հղումների ճշտությունը, խմբագրման հնարավորությունները և տվյալների պայմանները։', 'Նույն փոքր առաջադրանքը կատարեք երկու հասանելի գործիքով։ Համեմատեք փաստերի ճշտությունն ու անհրաժեշտ խմբագրումների ծավալը։'],
      ['Լուրերի ամփոփում՝ մարդու հաստատմամբ', 'Նախագծեք ամենօրյա ամփոփում՝ հանրային լրատվական աղբյուրների հաստատված ցանկով։ Ինքնաշխատ մի հրապարակեք։', ['Հավաքել → Ստանալ նյութեր հաստատված աղբյուրներից', 'Զտել → Պահել առնչվող նյութերը և հեռացնել կրկնությունները', 'Կազմել → Ամփոփել յուրաքանչյուր նյութը՝ աղբյուրի հղումով', 'Հաստատել → Մարդը ստուգում է փաստերը՝ տարածելուց առաջ'], 'Եթե աղբյուրը չի աշխատում կամ պնդումը ապացույց չունի, նշեք դա։ Հոսքին տվեք միայն անհրաժեշտ թույլտվությունները։', 'Գծեք ձեր աշխատանքային հոսքը։ Նշեք՝ որտեղ այն պետք է կանգ առնի և հաստատում խնդրի։'],
      ['Կարճ համատեքստ, նույն ընդունման չափանիշները', 'Պայմանական համեմատություն՝ ամբողջ փաստաթուղթը 4 000 մուտքային թոքեն է, իսկ ստուգված, առնչվող հատվածը՝ 1 000։ Երկու դեպքում էլ պահանջվում է 300 թոքենանոց պատասխան։', ['Ամբողջ փաստաթուղթ → 4 000 մուտքային + 300 ելքային թոքեն', 'Առնչվող հատված → 1 000 մուտքային + 300 ելքային թոքեն', 'Մուտքի նվազում → 75% (որակի չափված բարելավում չէ)'], 'Կարճ տարբերակն ավելի լավն է միայն այն դեպքում, երբ պահպանում է անհրաժեշտ փաստերը և անցնում նույն ստուգումները։ Ընդհանուր ծախսը կախված է նաև ելքի գնից, կրկնափորձերից և ստուգումից։', 'Գրեք ընդունման երեք չափանիշ։ Դրանցով համեմատեք ամբողջական համատեքստով հրահանգն ու կարճ տարբերակը։'],
      ['Մեկ թեմա, երեք օգտակար արդյունք', 'Օգտագործեք աշխատարանի մասին հաստատված հանրային տեղեկությունը՝ որպես հաղորդակցական փոքր նախագծի ընդհանուր աղբյուր։', ['Ներկայացում → Ընդհանուր օգնական + սլայդների գործիք → Հինգ սլայդի կառուցվածք', 'Կարճ տեսանյութ → Սցենարի օգնական + տեսախմբագրիչ → 30 վայրկյանանոց կադրային պլան', 'Հայտարարություն → Գրելու օգնական → Հակիրճ հրավեր'], 'Տարբեր ձևաչափերում պահեք նույն ամսաթվերն ու պնդումները։ Տարածելուց առաջ ստուգեք պատկերների, ձայների և երաժշտության օգտագործման թույլտվությունները։', 'Ընտրեք մեկ արդյունք, սահմանեք լսարանն ու ընդունման չափանիշները, ապա ստեղծեք այն առնչվող գործնական աշխատանքի օգնությամբ։']
    ]
  };
  function welcome(lang, route) {
    const c=copy[lang];
    return `<section class="learning-welcome"><img src="assets/explorers/chapter-01.png" width="1672" height="941" alt=""><div><h2>${c.welcome}</h2><p>${c.welcomeText}</p><a href="${route('guide-2','intro')}">${c.welcomeAction} →</a></div></section><ol class="learning-journey">${c.journey.map((v,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${v}</li>`).join('')}</ol>`;
  }
  function position(section, lesson, lang, route) {
    if (!section.chapter) return '';
    const c=copy[lang], index=section.lessons.findIndex(l=>l.id===lesson.id);
    return `<nav class="chapter-position" aria-label="${c.position}"><p>${c.section} ${index+1} ${c.of} ${section.lessons.length}<span>${esc(section.title)}</span></p><ol>${section.lessons.map((l,i)=>`<li><a href="${route(section.id,l.id)}" ${i===index?'aria-current="step"':''} aria-label="${esc(`${c.section} ${i+1}: ${l.title}`)}" title="${esc(l.title)}">${i+1}</a></li>`).join('')}</ol></nav>`;
  }
  function example(id, lang) {
    const c=copy[lang], e=examples[lang][Number(id)-1];
    if (!e) return '';
    return `<section class="worked-example" aria-labelledby="worked-title"><p class="example-eyebrow">${c.example}</p><h2 id="worked-title">${e[0]}</h2><p class="example-note">${c.note}</p><div class="example-input"><h3>${c.input}</h3><p>${e[1]}</p></div><details class="example-reveal"><summary>${c.reveal}</summary><div class="example-result"><h3>${c.result}</h3><ol>${e[2].map(v=>`<li>${v}</li>`).join('')}</ol></div><div class="example-check"><h3>${c.check}</h3><p>${e[3]}</p></div></details><p class="example-try"><strong>${c.try}:</strong> ${e[4]}</p></section>`;
  }
  function ending(section, lesson, data, lang, route, completed) {
    if (!section.chapter || section.lessons.at(-1).id!==lesson.id) return '';
    const c=copy[lang], outcome=c.outcomes[Number(section.id)-1];
    const next=data.sections.find(s=>s.chapter && Number(s.id)===Number(section.id)+1) || data.sections.find(s=>s.id==='guide-3');
    return `<section class="chapter-finish" aria-labelledby="finish-heading">${completed?`<div class="chapter-celebration"><img src="assets/explorers/chapter-04.png" width="1672" height="941" alt="" loading="lazy"><div><p class="example-eyebrow">${c.covered}</p><h2 id="finish-heading" tabindex="-1">${c.congrats}</h2><p>${outcome[0]}</p><p>${outcome[1]}</p>${next?`<a class="learning-primary" href="${route(next.id,next.lessons[0].id)}">${c.next} ${esc(next.title)} →</a>`:''}<a class="chapter-review" href="${route(section.id,section.lessons[0].id)}">${c.review}</a></div></div>`:`<h2 id="finish-heading">${c.finishTitle}</h2><p>${c.finishText}</p><button class="learning-primary" type="button" data-finish-chapter="${section.id}">${c.finish} ✓</button>`}<p class="milestone-note">${c.endNote}</p></section>`;
  }
  const api={copy,examples,welcome,position,example,ending};
  if (typeof module!=='undefined' && module.exports) module.exports=api;
  else root.EuaLearning=api;
}(typeof window!=='undefined'?window:globalThis));
