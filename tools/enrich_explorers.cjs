/* Produce an idempotent apply_patch document. Does not write project files. */
const fs=require('node:fs');
const sources=['foundations','practice','professional','applications','guides'];
const notes=sources.flatMap(name=>JSON.parse(fs.readFileSync(`landing/content/explorers/teaching-${name}.json`,'utf8')));
const byKey=new Map(notes.map(n=>[n.key,n]));
const studios=new Map(['core','professional'].flatMap(name=>JSON.parse(fs.readFileSync(`landing/content/explorers/studios-${name}.json`,'utf8'))).map(n=>[n.key,n]));
const lectureNotes=new Map(JSON.parse(fs.readFileSync('landing/content/explorers/lecture-informed.json','utf8')).map(n=>[n.key,n]));
if(byKey.size!==notes.length)throw Error('Duplicate teaching topic');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paragraphs=s=>s.split('\n\n').map(p=>`<p>${esc(p)}</p>`).join('');
const visualRoutes={'1/1':'1','1/3':'1','2/2':'2','3/1':'3','3/2':'3','4/1':'4','5/1':'5','5/3':'5','6/1':'6','6/4':'6','7/1':'7','7/2':'7','8/intro':'8','8/4':'8'};
const references={
 '1/3':['Google: language models and transformers','Google․ լեզվական մոդելներ և տրանսֆորմերներ','https://developers.google.com/machine-learning/crash-course/llm/transformers'],
 '4/3':['IES: organizing instruction and study','IES․ ուսուցման և ուսումնառության կազմակերպում','https://ies.ed.gov/ncee/wwc/PracticeGuide/1'],
 '6/1':['Anthropic: workflows and agents','Anthropic․ աշխատանքային հոսքեր և գործակալներ','https://www.anthropic.com/engineering/building-effective-agents'],
 '6/5':['Technical example: provider-specific idempotent requests (Stripe)','Տեխնիկական օրինակ՝ ծառայությունից կախված իդեմպոտենտ հարցումներ (Stripe)','https://docs.stripe.com/api/idempotent_requests']
};
function studio(n,i){
 const label=(en,hy)=>i?hy:en;
 let html=`<section class="chapter-studio" data-chapter-studio="${n.key}"><p class="studio-eyebrow">${label('WORKED STUDIO · TRY, COMPARE, TRANSFER','ԳՈՐԾՆԱԿԱՆ ՕՐԻՆԱԿ · ՓՈՐՁԵԼ, ՀԱՄԵՄԱՏԵԼ, ԿԻՐԱՌԵԼ')}</p><h2>${esc(n.title[i])}</h2><p>${esc(n.introduction[i])}</p><aside class="studio-source"><h3>${label('Your source packet','Ձեր աղբյուրային նյութը')}</h3><p>${esc(n.source[i]).replace(/\n/g,'<br>')}</p></aside><h3>${label('A prompt you can adapt','Հարմարեցվող հրահանգ')}</h3><blockquote class="studio-prompt"><p>${esc(n.prompt[i])}</p></blockquote><ol class="studio-steps">${n.steps.map(step=>`<li><h3>${esc(step[0][i])}</h3><p>${esc(step[1][i])}</p></li>`).join('')}</ol>`;
 if(n.key==='8/12')html+=`<figure class="studio-slides"><figcaption>${label('A reviewable slide outline, using fictional data','Ստուգելի սլայդների պլան՝ հորինված տվյալներով')}</figcaption><div class="studio-slide"><span>01</span><h3>${label('Preferences among 20 respondents','20 պատասխանողների նախընտրությունները')}</h3>${[[label('Discussion','Քննարկում'),10],[label('Workshop','Գործնական'),6],[label('Film','Կինո'),4]].map(([name,v])=>`<div class="studio-chart-row"><span>${name}</span><div><i style="width:${v*10}%" aria-hidden="true"></i></div><b>${v}</b></div>`).join('')}<p>${label('Zero-based scale: 0-10 responses. Shares: 50%, 30%, 20%. Fictional sample, not population evidence.','Սանդղակ՝ 0-10 պատասխան։ Բաժիններ՝ 50%, 30%, 20%։ Հորինված ընտրանք, ոչ բնակչության մասին ապացույց։')}</p></div><div class="studio-slide"><span>02</span><h3>${label('Propose a small pilot','Առաջարկել փոքր փորձ')}</h3><p>${label('One discussion session · up to 12 people · subject to confirmation','Մեկ քննարկում · մինչև 12 անձ · հաստատման պայմանով')}</p></div><div class="studio-slide"><span>03</span><h3>${label('Confirm before booking','Հաստատել՝ մինչև ամրագրելը')}</h3><p>${label('Date · venue · costs · access needs · decision owner','Օր · վայր · ծախսեր · հասանելիություն · պատասխանատու')}</p></div></figure>`;
 html+=`<aside class="studio-result"><h3>${label('A worked result, not a live AI response','Լուծված օրինակ, ոչ իրական ԱԲ պատասխան')}</h3><p>${esc(n.result[i])}</p></aside><div class="studio-comparison"><table><caption>${label('What changes the decision?','Ի՞նչն է փոխում որոշումը։')}</caption><thead><tr><th scope="col">${label('Observation','Դիտարկում')}</th><th scope="col">${label('Interpretation','Մեկնաբանություն')}</th></tr></thead><tbody>${n.comparisons.map(row=>`<tr><th scope="row">${esc(row[0][i])}</th><td>${esc(row[1][i])}</td></tr>`).join('')}</tbody></table></div><aside class="studio-transfer"><h3>${label('Now change one condition','Հիմա փոխեք մեկ պայման')}</h3><p>${esc(n.challenge[i])}</p><details class="teaching-reflection"><summary>${label('Compare after your own attempt','Համեմատեք՝ ինքնուրույն փորձելուց հետո')}</summary><p>${esc(n.answer[i])}</p></details></aside></section>`;
 return html;
}
function lectureBox(n,i){
 const label=(en,hy)=>i?hy:en;
 return `<section class="lecture-informed" data-lecture-informed="${n.key}"><p class="lecture-eyebrow">${label('APPLY THE LECTURE KNOWLEDGE','ԿԻՐԱՌԵՔ ԴԱՍԱԽՈՍՈՒԹՅԱՆ ԳԻՏԵԼԻՔԸ')}</p><h2>${esc(n.title[i])}</h2>${paragraphs(n.text[i])}<aside class="lecture-try"><h3>${label('Try it with a safe example','Փորձեք անվտանգ օրինակով')}</h3><p>${esc(n.try[i])}</p></aside><details class="lecture-check"><summary>${label('Check before you continue','Ստուգեք՝ նախքան շարունակելը')}</summary><p>${esc(n.check[i])}</p></details></section>`;
}
function chart(hy){return `<figure class="teaching-chart"><figcaption>${hy?'Հորինված հարցման պատասխանների քանակը':'Fictional survey response counts'}</figcaption>${[['A',40],['B',35],['C',25]].map(([n,v])=>`<div class="teaching-bar"><span>${n}</span><i style="width:${v*2}%" aria-hidden="true"></i><strong>${v}</strong></div>`).join('')}<p>${hy?'Նույն սանդղակ՝ 0-50 պատասխան։ Գումար՝ 40 + 35 + 25 = 100։ Համեմատեք սա օգնականի սխալ՝ 120 գումարի հետ։':'Shared scale: 0-50 responses. Total: 40 + 35 + 25 = 100. Compare this with the assistant’s incorrect total of 120.'}</p></figure>`;}
let patch='*** Begin Patch\n',report=[];
for(const lang of ['en','hy']){
 const path=`landing/content/explorers/${lang}.json`,old=fs.readFileSync(path,'utf8').replace(/\r\n/g,'\n'),data=JSON.parse(old),i=lang==='hy'?1:0;
 for(const section of data.sections)for(const lesson of section.lessons){
  const key=`${section.id}/${lesson.id}`,n=byKey.get(key);
  lesson.html=lesson.html.replace(/<!-- teaching-depth:start -->[\s\S]*?<!-- teaching-depth:end -->/g,'');
  if(!n){report.push(`${lang} ${key}: retained practice/reference; no word-count padding`);continue;}
  for(const field of ['title','story','explain','example','question','answer'])if(!n[field]?.[i])throw Error(`${key} missing ${lang} ${field}`);
  const ref=references[key];
  let added=`<section class="teaching-depth"><h2>${esc(n.title[i])}</h2><p class="teaching-story">${esc(n.story[i])}</p>${paragraphs(n.explain[i])}`;
  if(visualRoutes[key])added+=`<div data-teaching-slot="${visualRoutes[key]}"></div>`;
  if(key==='4/4')added+=chart(i===1);
  if(key==='guide-2/intro')added+=`<figure class="teaching-path"><img src="assets/explorers/chapter-01.png" alt="" width="1672" height="941" loading="lazy"><figcaption><strong>${i?'Ձեր ուսումնառության ուղին':'Your learning pathway'}</strong><ol><li>${i?'Հասկանալ և ստուգել՝ դասեր 1-3':'Understand and verify: lessons 1-3'}</li><li>${i?'Կիրառել և ընտրել՝ դասեր 4-5':'Apply and choose: lessons 4-5'}</li><li>${i?'Կառուցել վերահսկվող հոսք՝ դասեր 6-7':'Build a supervised workflow: lessons 6-7'}</li><li>${i?'Ընտրել ձեր կիրառությունը՝ դաս 8':'Choose your application: lesson 8'}</li></ol></figcaption></figure>`;
  added+=`<aside class="teaching-example"><h3>${i?'Օրինակը՝ քայլ առ քայլ':'Follow the example'}</h3><p>${esc(n.example[i])}</p></aside><details class="teaching-reflection"><summary>${esc(n.question[i])}</summary><p>${esc(n.answer[i])}</p></details>`;
  if(ref)added+=`<p class="teaching-source"><a href="${ref[2]}" target="_blank" rel="noopener noreferrer">${esc(ref[i])} ↗</a></p>`;
  const lecture=lectureNotes.get(key);
  if(lecture){
   for(const field of ['title','text','try','check'])if(!lecture[field]?.[i])throw Error(`${key} missing lecture-informed ${lang} ${field}`);
   added+=lectureBox(lecture,i);
  }
  added+='</section>';
  if(studios.has(key))added+=studio(studios.get(key),i);
  if(key==='guide-9/intro')added+=`<aside class="teaching-example"><h3>${i?'Դասընթացներ՝ ուսումնառությունը շարունակելու համար':'Courses for continued learning'}</h3><p>${i?'Այս արտաքին դասընթացների հանրային ծրագրերն օգտագործվել են որպես ուսուցման ձևավորման հղումներ։ EUA-ի օրինակներն ինքնուրույն են․ գործընկերություն կամ հավաստագրման համարժեքություն չի ենթադրվում։ Մուտքի պայմանները ստուգեք համապատասխան կայքում։':'These external courses’ public outlines informed the teaching-design review. EUA examples are original; no affiliation or equivalent certification is implied. Check each site for access conditions.'}</p><ul><li><a href="https://www.deeplearning.ai/courses/ai-prompting-for-everyone" target="_blank" rel="noopener noreferrer">${i?'ԱԲ հրահանգներ բոլորի համար (AI Prompting for Everyone)':'AI Prompting for Everyone'} · DeepLearning.AI</a></li><li><a href="https://course.elementsofai.com/" target="_blank" rel="noopener noreferrer">${i?'ԱԲ հիմունքներ (Elements of AI)':'Elements of AI'}</a></li><li><a href="https://grow.google/ai-professional/" target="_blank" rel="noopener noreferrer">${i?'ԱԲ մասնագիտական վկայականի ծրագիր (Google AI Professional Certificate)':'Google AI Professional Certificate'}</a></li></ul></aside>`;
  // Insert only after a top-level opening paragraph, never inside a list or disclosure.
  const insertion=lesson.html.startsWith('<p>') ? lesson.html.indexOf('</p>')+4 : 0;
  lesson.html=lesson.html.slice(0,insertion)+'<!-- teaching-depth:start -->'+added+'<!-- teaching-depth:end -->'+lesson.html.slice(insertion);
  const words=lesson.html.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length;
  lesson.minutes=Math.max(lesson.minutes,Math.ceil(words/(i?130:165)));
  report.push(`${lang} ${key}: explained mechanism; concrete example; misconception check${visualRoutes[key]?'; interactive walkthrough':''}`);
 }
 // Keep one factual taxonomy and avoid presenting a style policy as universal law.
 if(lang==='en')data.sections.find(s=>s.id==='3').lessons.find(l=>l.id==='4').html=data.sections.find(s=>s.id==='3').lessons.find(l=>l.id==='4').html.replace('do not ask a system to imitate a living artist’s or author’s protected style for publication','follow applicable rights, consent, and institutional rules when creating material for publication');
 // A fictional safety exercise must never present a plausible emergency number.
 const cultural=data.sections.find(s=>s.id==='8').lessons.find(l=>l.id==='11');
 cultural.html=cultural.html.replace('Emergency number: 123.','No real emergency contact is supplied in this fictional exercise.').replace(/(?:Արտակարգ|Շտապ) համար՝ 123։/g,'Այս հորինված վարժությունում իրական շտապ կապի համար չի տրամադրվում։');
 const bias=data.sections.find(s=>s.id==='3').lessons.find(l=>l.id==='3');
 bias.html=bias.html.replace('Change only the name and one background cue.','Change only one irrelevant cue, such as the name; keep every other detail identical.').replace('Փոխեք միայն անունը և մեկ ֆոնային ազդանշան։','Փոխեք միայն մեկ չառնչվող հատկանիշ, օրինակ՝ անունը․ մնացած բոլոր տվյալները պահեք նույնը։');
 const a=old.trimEnd().split('\n'),b=JSON.stringify(data,null,2).replace(/—/g,'-').split('\n');
 if(a.length!==b.length)throw Error('Unexpected structural change');
 patch+=`*** Update File: ${path}\n`;
 const changed=a.map((line,n)=>line!==b[n]?n:-1).filter(n=>n>=0);
 for(let k=0;k<changed.length;k++){
  const first=changed[k];let last=first;
  while(k+1<changed.length&&changed[k+1]-last<=5)last=changed[++k];
  patch+='@@\n';
  for(let n=Math.max(0,first-2);n<=Math.min(a.length-1,last+2);n++)patch+=a[n]===b[n]?` ${a[n]}\n`:`-${a[n]}\n+${b[n]}\n`;
 }
}
patch+='*** End Patch';
if(process.argv.includes('--report'))console.log(report.join('\n'));else process.stdout.write(patch);
