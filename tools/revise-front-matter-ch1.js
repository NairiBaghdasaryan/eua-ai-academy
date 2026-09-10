/**
 * Revise Preface → Learning pathway → Chapter 1 (EN + HY).
 * Run: node tools/revise-front-matter-ch1.js
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
  const section = data.sections.find((s) => s.id === sectionId);
  const lesson = section.lessons.find((l) => l.id === lessonId);
  if (!lesson) throw new Error(`Missing ${sectionId}/${lessonId}`);
  lesson.html = html;
  if (minutes != null) lesson.minutes = minutes;
}

const en = {
  'guide-1/intro': {
    minutes: 4,
    html: [
      '<p><strong>You will learn to use AI for useful tasks, recognize its limitations, and check its results.</strong> This course is practical: short explanations, clear demonstrations, guided practice, and feedback you can apply immediately.</p>',
      '<p>You do not need to be a programmer. You need curiosity, careful reading, and the habit of verifying important claims. Work with the on-page examples first. Use an external AI account only when an exercise asks you to try a live tool — and never paste confidential information into an unapproved service.</p>',
      '<aside class="lesson-callout"><p><strong>Before you continue</strong></p><p>What task would you like AI to help you with? Write one sentence. Keep it nearby; you will reuse it later.</p></aside>',
      '<details class="lesson-optional"><summary>Optional: a short visual timeline of AI history</summary>',
      '<ol class="concept-flow timeline-flow">',
      '<li><span>1950</span>Turing asks whether a machine could converse in a way that is hard to tell from a person.</li>',
      '<li><span>1956</span>The Dartmouth workshop names the field and sets an ambitious research agenda.</li>',
      '<li><span>1980s–2000s</span>Machine learning grows as computers and data improve; systems learn patterns from examples.</li>',
      '<li><span>2010s</span>Deep learning advances image, speech, and language tasks.</li>',
      '<li><span>Today</span>Large language models and products make drafting, analysis, and tool use widely accessible — and make checking results essential.</li>',
      '</ol>',
      '<p>History helps orientation. Your day-to-day skill is still: define the task, supply evidence, inspect the output, and take responsibility for what you use.</p>',
      '</details>'
    ].join('')
  },
  'guide-2/intro': {
    minutes: 2,
    html: [
      '<p>Use this route through the course. Suggested times are study estimates, not a fixed timetable.</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Course route"><table><thead><tr><th scope="col">Path</th><th scope="col">What it includes</th><th scope="col">Suggested time</th></tr></thead><tbody>',
      '<tr><td><strong>Essential lessons 1–4</strong></td><td>Core literacy: what AI is, how to instruct it, how to check it, and how to use it for everyday work</td><td>45–60 min reading and practice per lesson</td></tr>',
      '<tr><td><strong>Professional lessons 5–7</strong></td><td>Tool choice, agents with approval gates, cost and practical constraints</td><td>45–60 min per lesson</td></tr>',
      '<tr><td><strong>Lesson 8 catalogue</strong></td><td>Searchable ideas to adapt; not a second quiz format</td><td>Browse as needed</td></tr>',
      '<tr><td><strong>Optional technical explorations</strong></td><td>Deeper detail inside lessons (for example, neuron mathematics) marked as optional</td><td>Extra 10–20 min when useful</td></tr>',
      '<tr><td><strong>Practice labs</strong></td><td>Four complete labs with on-page source tables and acceptance checks</td><td>60–90 min each</td></tr>',
      '</tbody></table></div>',
      '<h3>Equipment and accounts</h3>',
      '<ul><li><strong>Required:</strong> a modern browser, this course site, and a way to take notes.</li>',
      '<li><strong>Required skills:</strong> basic file and browser use; comfort copying short tables or prompts.</li>',
      '<li><strong>External AI account:</strong> optional for most reading. Needed only when an exercise asks you to try a live assistant. Prefer institution-approved tools. Use fictional or public data.</li></ul>',
      '<p>Practice materials are on the page: copyable tables, worksheets, answer keys in <a href="course.html?chapter=guide-6&amp;lesson=1">Answers and feedback</a>, catalogues in <a href="course.html?chapter=5&amp;lesson=1">Lesson 5</a> and <a href="course.html?chapter=8&amp;lesson=1">Lesson 8</a>, and the <a href="course.html?chapter=7&amp;lesson=practice">cost calculator</a>.</p>'
    ].join('')
  },
  'guide-2/1': {
    minutes: 2,
    html: [
      '<p>By the end of this course, you can:</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Learning outcomes"><table><thead><tr><th scope="col">By the end, you can…</th><th scope="col">Visible evidence</th></tr></thead><tbody>',
      '<tr><td>Explain what generative AI and large language models do, and where they fail</td><td>A short claim check that separates training, inference, and retrieval</td></tr>',
      '<tr><td>Write clear, testable instructions and improve them with controlled changes</td><td>A before/after prompt with fixed success criteria</td></tr>',
      '<tr><td>Verify claims, sources, calculations, and media with an explicit evidence habit</td><td>Three claims marked verified, unsupported, or needing another source</td></tr>',
      '<tr><td>Produce a useful draft and leave a human review trail</td><td>A checked announcement or short document with corrections noted</td></tr>',
      '<tr><td>Compare tools by task fit, data controls, quality, and total cost</td><td>A one-page tool comparison for the same task</td></tr>',
      '<tr><td>Design a supervised workflow with inputs, outputs, approval points, and ownership</td><td>A workflow sketch that marks where a person must decide</td></tr>',
      '<tr><td>Estimate cost per accepted result and reduce waste without lowering required quality</td><td>A completed cost calculation with stated assumptions</td></tr>',
      '<tr><td>Communicate AI use transparently, including limits and human accountability</td><td>A short use statement attached to a finished task</td></tr>',
      '</tbody></table></div>'
    ].join('')
  },
  'guide-2/2': {
    minutes: 3,
    html: [
      '<p>Three different actions matter in this course:</p>',
      '<ul><li><strong>Reading a section</strong> builds vocabulary and a mental model.</li>',
      '<li><strong>Completing an activity</strong> means you sort, choose, calculate, or draft on the page.</li>',
      '<li><strong>Demonstrating understanding</strong> means you can explain a decision and show evidence — in a self-check, a lab deliverable, or a short comparison.</li></ul>',
      '<p>Lessons 1–7 end with two self-check questions. Write your reasoning before opening the explanation. Lesson 8 is a catalogue exercise: search, filter, and plan from the 100 use cases.</p>',
      '<h3>What different responses look like</h3>',
      '<p>Example task: “Should you publish this AI-drafted workshop announcement?”</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Response examples"><table><thead><tr><th scope="col">Level</th><th scope="col">Example response</th><th scope="col">Why</th></tr></thead><tbody>',
      '<tr><td><strong>Weak</strong></td><td>“The draft sounds good, so publish it.”</td><td>No evidence check; fluency treated as proof.</td></tr>',
      '<tr><td><strong>Adequate</strong></td><td>“I compared the date and room with the approved notice. One detail still needs confirmation before sending.”</td><td>Checks key facts; still names an open risk.</td></tr>',
      '<tr><td><strong>Strong</strong></td><td>“I verified time, place, and registration link against the approved notice; corrected one invented fee; and recorded who approved publication.”</td><td>Evidence, correction, and human ownership are explicit.</td></tr>',
      '</tbody></table></div>',
      '<h3>Rubric for applied work</h3>',
      '<p>Score four dimensions from 0 to 2: factual accuracy, evidence, usability, and documented human decisions. A score of 0 on accuracy or evidence requires revision regardless of the total. This is an instructional rubric, not an accreditation standard.</p>',
      '<p>CLEAR and TRACE are practical memory aids used in this course. Their wording is a teaching choice, not a universal scientific standard. Judge them by whether they help your real task.</p>'
    ].join('')
  },
  '1/1': {
    minutes: 3,
    html: [
      '<p>You already meet artificial intelligence in familiar places: a calculator that always follows the same arithmetic rules, a mailbox that filters spam, a music or shopping list that recommends the next item, and a chat assistant that drafts text. Start from those jobs, then name the family they belong to.</p>',
      '<p><strong>Artificial intelligence</strong> is a broad name for computer systems that perform tasks associated with perception, language, prediction, planning, or decision support. <strong>Generative AI</strong> goes further: it can produce new text, images, audio, video, or code from instructions and examples.</p>',
      '<p>AI is not human intelligence. A system can be impressive at a narrow task without lived experience, personal responsibility, or automatic access to truth. Its output is a proposal. A person decides whether that proposal is accurate, appropriate, and safe to use.</p>',
      '<h3>Try this: sort familiar systems</h3>',
      '<p>For each example, choose the best description. There is more than a yes/no label: explain what kind of process you think is happening.</p>',
      '<div data-lab="ai-sort"></div>',
      '<aside class="lesson-callout"><p><strong>Habit</strong></p><p>Describe any AI system by its job: What goes in? What comes out? What evidence can it use? What happens if it is wrong? Who reviews the result?</p></aside>'
    ].join('')
  },
  '1/2': {
    minutes: 3,
    html: [
      '<p>Use one consistent analogy in this course: <strong>the model is the engine; the application adds tools and controls</strong>. The engine predicts the next pieces of a response. The application may add a chat interface, file upload, search, memory, permissions, and safety filters.</p>',
      '<p>A <strong>large language model (LLM)</strong> is trained on very large collections of text and related data so it can generate sequences. In a chat, it receives your message plus conversation history and other instructions, then produces a response piece by piece. It is a compressed statistical representation of patterns — not a searchable copy of every document it ever saw.</p>',
      '<h3>Demonstration: prompt, context, response</h3>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Prompt context response"><table><thead><tr><th scope="col">Part</th><th scope="col">Example</th></tr></thead><tbody>',
      '<tr><td><strong>Prompt</strong></td><td>“Write a two-sentence announcement for staff.”</td></tr>',
      '<tr><td><strong>Supplied context</strong></td><td>Approved notice: workshop on 12 May, Room 214, registration closes 10 May.</td></tr>',
      '<tr><td><strong>Generated response</strong></td><td>“Join the AI workshop on 12 May in Room 214. Please register before 10 May.”</td></tr>',
      '</tbody></table></div>',
      '<p><strong>Check:</strong> Which information came from the supplied document, and which would need another source? Date, room, and deadline are in the notice. Claims about speakers, fees, or “mandatory attendance” would need another source — or should be removed.</p>',
      '<aside class="lesson-callout"><p><strong>Remember</strong></p><p>If a response includes a current fact, ask for the date and a source. Then open the source and confirm that it supports the claim.</p></aside>'
    ].join('')
  },
  '1/3': {
    minutes: 8,
    html: [
      '<p>This section has three short parts. Optional technical detail sits at the end. The tiny interactive network below is a teaching toy — <strong>not</strong> a complete model of a modern LLM.</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/neural-networks-brain.png" alt="Illustration comparing a biological brain hemisphere with an artificial neural network hemisphere" width="1400" height="788" loading="lazy"><figcaption>Biological inspiration versus artificial networks: related metaphor, different mechanism.</figcaption></figure>',
      '<h3>1. Tokens and context</h3>',
      '<p>Language models process text as <strong>tokens</strong> — pieces that may be words, parts of words, or punctuation. Your prompt, conversation history, and any pasted document become the current <strong>context</strong>. The model predicts what should come next given that context. Providing a document is not the same as retraining the model.</p>',
      '<h3>2. Learning weights during training</h3>',
      '<p>During <strong>training</strong>, the system adjusts many numerical <strong>weights</strong> so that its predictions better match examples. Those weights store the learned patterns. Training is expensive and usually done by the provider, not during an ordinary chat.</p>',
      '<h3>3. Generating an answer during use</h3>',
      '<p>During <strong>inference</strong> (everyday use), the trained weights stay fixed for that moment. The model reads the current context and generates a response. If you need fresh facts, you add them through context, search, or retrieval — you do not instantly rewrite the whole model.</p>',
      '<h3>Interactive demonstration A: adjust one weight</h3>',
      '<p>Change one weight in a tiny three-input network and watch the output score move. This shows that weights matter. It does not recreate a modern language model.</p>',
      '<div data-lab="tiny-net"></div>',
      '<h3>Interactive demonstration B: add a source passage</h3>',
      '<p>Ask the same question with and without a source passage. Notice which facts become available to check.</p>',
      '<div data-lab="context-compare"></div>',
      '<details class="lesson-optional"><summary>Optional technical exploration: neurons, activations, and a tiny classifier</summary>',
      '<h3>Neural network basics</h3>',
      '<p>Most modern generative systems use artificial neural networks: many simple units that transform inputs and pass signals forward. The biological metaphor is inspiration, not a literal copy of a brain.</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/neural-network-layers.png" alt="Diagram of input, hidden, and output layers in a neural network" width="1536" height="864" loading="lazy"></figure>',
      '<h3>How one artificial neuron works</h3>',
      '<p>A unit multiplies inputs by weights, adds them (often with a bias), then applies an activation function. That shaped signal becomes input to later units.</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/artificial-neuron.png" alt="Diagram of an artificial neuron combining weighted inputs" width="1536" height="864" loading="lazy"></figure>',
      '<h3>Activation functions</h3>',
      '<p>Activations such as sigmoid, step, or ReLU shape how strongly a signal passes onward. They help networks build non-linear patterns.</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/activation-functions.png" alt="Charts comparing sigmoid, step, and ReLU activation functions" width="1536" height="864" loading="lazy"></figure>',
      '<h3>From one neuron to a network</h3>',
      '<p>Layers of units can represent richer combinations. Deep learning simply means many such layers trained on large datasets. Language models add specialized structure and scale; the toy network above is only a first intuition.</p>',
      '<p>History note: early perceptrons and small classifiers sparked both progress and hype. Useful demos still need evidence and human judgment before high-stakes use.</p>',
      '</details>'
    ].join('')
  },
  '1/4': {
    minutes: 3,
    html: [
      '<p>Pair each useful capability with the human work that remains.</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Capabilities and limits"><table><thead><tr><th scope="col">Useful for…</th><th scope="col">Still requires…</th></tr></thead><tbody>',
      '<tr><td>Drafting a summary from a supplied document</td><td>Checking omissions, tone, and whether every claim is in the source</td></tr>',
      '<tr><td>Transforming notes into a clearer outline</td><td>Confirming priorities and what must not be lost</td></tr>',
      '<tr><td>Suggesting options for a bounded problem</td><td>Choosing among options with accountable judgment</td></tr>',
      '<tr><td>Translating or rephrasing for a stated audience</td><td>Checking meaning, cultural fit, and sensitive terms</td></tr>',
      '<tr><td>Coordinating a multi-step draft with tools</td><td>Approving consequential actions and reviewing tool outputs</td></tr>',
      '</tbody></table></div>',
      '<p>Common failure modes include fabricated details, outdated knowledge, uneven language quality, hidden bias, arithmetic mistakes, and answers that sound finished while resting on weak evidence.</p>',
      '<h3>Try this: choose the right approach</h3>',
      '<p>For each situation, choose: use AI, use another tool, or ask a qualified person.</p>',
      '<div data-lab="route-choice"></div>',
      '<aside class="lesson-callout"><p><strong>Human judgment first</strong></p><p>AI may accelerate analysis. Accountability stays with people and institutions.</p></aside>'
    ].join('')
  },
  '1/practice': {
    minutes: 4,
    html: [
      '<h3>Guided practice with an on-page source</h3>',
      '<p>Use this fictional notice only. Do not invent missing details.</p>',
      '<blockquote class="lesson-source"><p><strong>EUA Staff Development Notice (fictional)</strong><br>Workshop: “Checking AI drafts at work”<br>Date: 12 May 2026<br>Time: 14:00–16:00<br>Room: 214, Main Building<br>Registration closes: 10 May 2026<br>Contact: training@example.eua.am<br>Note: Bring a laptop. Coffee is provided. No attendance fee.</p></blockquote>',
      '<ol><li>Ask (or imagine asking) an assistant: “Summarize the workshop for staff in two sentences.”</li>',
      '<li>Compare the draft with the notice. Mark each claim as supported by the notice, unsupported, or needing another source.</li>',
      '<li>Answer: What additional information would make this answer checkable if a draft mentioned speakers or a fee?</li></ol>',
      '<p><strong>Deliverable.</strong> A short claim table with at least four claims and your labels.</p>',
      '<h3>Training, inference, or retrieval?</h3>',
      '<p>Match each situation to the best mechanism.</p>',
      '<div data-lab="mechanism-sort"></div>',
      '<h3>Summary</h3>',
      '<aside class="lesson-callout"><p>• AI is a family of systems with different jobs, not one kind of intelligence.</p><p>• The model is the engine; the application adds tools and controls.</p><p>• Training, inference, and retrieval are different mechanisms.</p><p>• Useful drafts still need evidence checks; human judgment remains decisive.</p></aside>',
      '<h3>Reflection</h3>',
      '<ul><li>What additional information would make your chosen task’s AI answer checkable?</li>',
      '<li>Where would an AI error create the greatest harm in your context?</li>',
      '<li>What is one review rule you will keep for the next lesson?</li></ul>'
    ].join('')
  }
};

// Armenian mirrors — same structure and activities.
const hy = {
  'guide-1/intro': {
    minutes: 4,
    html: [
      '<p><strong>Դուք կսովորեք ԱԲ-ը կիրառել օգտակար առաջադրանքների համար, ճանաչել նրա սահմանները և ստուգել արդյունքները։</strong> Այս դասընթացը գործնական է՝ կարճ բացատրություն, պարզ ցուցադրություն, ուղեկցվող փորձ և անմիջապես կիրառելի հետադարձ կապ։</p>',
      '<p>Ծրագրավորող լինելը պարտադիր չէ։ Պետք են հետաքրքրասիրություն, ուշադիր ընթերցում և կարևոր պնդումները ստուգելու սովորություն։ Սկսեք էջի օրինակներից։ Արտաքին ԱԲ հաշիվ օգտագործեք միայն այնտեղ, որտեղ վարժությունը խնդրում է փորձել գործիք, և երբեք գաղտնի տեղեկություն մի տեղադրեք չհաստատված ծառայության մեջ։</p>',
      '<aside class="lesson-callout"><p><strong>Մինչ շարունակելը</strong></p><p>Ո՞ր առաջադրանքում կցանկանայիք ԱԲ-ի օգնությունը։ Գրեք մեկ նախադասություն։ Պահեք այն․ հետո կվերադառնաք։</p></aside>',
      '<details class="lesson-optional"><summary>Լրացուցիչ․ ԱԲ պատմության կարճ ժամանակագիծ</summary>',
      '<ol class="concept-flow timeline-flow">',
      '<li><span>1950</span>Թյուրինգը հարցնում է՝ կարո՞ղ է մեքենան խոսել այնպես, որ դժվար լինի տարբերել մարդուց։</li>',
      '<li><span>1956</span>Դարթմութի աշխատաժողովը տալիս է ոլորտի անունը և ձևավորում հետազոտական օրակարգ։</li>',
      '<li><span>1980–2000-ականներ</span>Մեքենայական ուսուցումը զարգանում է տվյալների ու հաշվարկի աճով։</li>',
      '<li><span>2010-ականներ</span>Խորը ուսուցումը առաջընթաց է բերում պատկերի, խոսքի և լեզվի խնդիրներում։</li>',
      '<li><span>Այսօր</span>Մեծ լեզվական մոդելներն ու արտադրանքները հասանելի են դարձնում նախագծումը և վերլուծությունը, ուստի ստուգումը դառնում է էական։</li>',
      '</ol>',
      '<p>Պատմությունը կողմնորոշում է տալիս։ Ամենօրյա հմտությունը մնում է՝ սահմանել առաջադրանքը, տրամադրել ապացույց, ստուգել արդյունքը և պատասխանատու լինել կիրառման համար։</p>',
      '</details>'
    ].join('')
  },
  'guide-2/intro': {
    minutes: 2,
    html: [
      '<p>Օգտագործեք այս երթուղին։ Ժամանակները ուսման գնահատումներ են, ոչ հաստատված ժամանակացույց։</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Դասընթացի երթուղի"><table><thead><tr><th scope="col">Ուղի</th><th scope="col">Ինչ է ներառում</th><th scope="col">Առաջարկվող ժամանակ</th></tr></thead><tbody>',
      '<tr><td><strong>Հիմնական դասեր 1–4</strong></td><td>Հիմնական գրագիտություն՝ ինչ է ԱԲ-ը, ինչպես հրահանգել, ստուգել և կիրառել</td><td>45–60 ր ընթերցում և փորձ՝ յուրաքանչյուր դաս</td></tr>',
      '<tr><td><strong>Մասնագիտական դասեր 5–7</strong></td><td>Գործիքի ընտրություն, գործակալներ հաստատման կետերով, ծախս և սահմանափակումներ</td><td>45–60 ր՝ յուրաքանչյուր դաս</td></tr>',
      '<tr><td><strong>8-րդ դասի ցանկ</strong></td><td>Որոնելի գաղափարներ․ ոչ երկհարցանի ինքնաստուգում</td><td>Ըստ անհրաժեշտության</td></tr>',
      '<tr><td><strong>Լրացուցիչ տեխնիկական բացատրություններ</strong></td><td>Ավելի խոր մանրամասներ դասերի ներսում՝ նշված որպես լրացուցիչ</td><td>+10–20 ր անհրաժեշտության դեպքում</td></tr>',
      '<tr><td><strong>Գործնական աշխատանքներ</strong></td><td>Չորս ամբողջական լաբորատորիա՝ էջի աղյուսակներով և ընդունման չափանիշներով</td><td>60–90 ր յուրաքանչյուրը</td></tr>',
      '</tbody></table></div>',
      '<h3>Սարքավորում և հաշիվներ</h3>',
      '<ul><li><strong>Պարտադիր․</strong> ժամանակակից դիտարկիչ, այս դասընթացի կայքը և նշումներ անելու միջոց։</li>',
      '<li><strong>Հմտություններ․</strong> ֆայլերի և դիտարկիչի հիմնական օգտագործում, կարճ աղյուսակներ կամ հրահանգներ պատճենելու կարողություն։</li>',
      '<li><strong>Արտաքին ԱԲ հաշիվ․</strong> ընթերցման մեծ մասի համար պարտադիր չէ։ Պետք է միայն այնտեղ, որտեղ վարժությունը խնդրում է փորձել օգնական։ Նախընտրեք հաստատության թույլատրած գործիքները։ Օգտագործեք ուսումնական կամ հրապարակային տվյալներ։</li></ul>',
      '<p>Գործնական նյութերը էջում են․ պատճենելի աղյուսակներ, աշխատաթերթեր, պատասխանները՝ <a href="course.html?chapter=guide-6&amp;lesson=1">Պատասխաններ և հետադարձ կապ</a>, ցանկերը՝ <a href="course.html?chapter=5&amp;lesson=1">5-րդ դաս</a> և <a href="course.html?chapter=8&amp;lesson=1">8-րդ դաս</a>, և <a href="course.html?chapter=7&amp;lesson=practice">ծախսի հաշվիչը</a>։</p>'
    ].join('')
  },
  'guide-2/1': {
    minutes: 2,
    html: [
      '<p>Դասընթացի վերջում դուք կկարողանաք․</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Ուսումնական արդյունքներ"><table><thead><tr><th scope="col">Վերջում կարող եք…</th><th scope="col">Տեսանելի ապացույց</th></tr></thead><tbody>',
      '<tr><td>Բացատրել՝ ինչ են անում գեներատիվ ԱԲ-ն ու մեծ լեզվական մոդելները, և որտեղ են սխալվում</td><td>Կարճ ստուգում, որ տարբերակում է ուսուցումը, եզրակացությունը և վերականգնումը</td></tr>',
      '<tr><td>Գրել հստակ, ստուգելի հրահանգներ և բարելավել դրանք վերահսկվող փոփոխություններով</td><td>Նախկին/նոր հրահանգ՝ ֆիքսված հաջողության չափանիշներով</td></tr>',
      '<tr><td>Ստուգել պնդումները, աղբյուրները, հաշվարկները և մեդիան ապացույցի հստակ սովորությամբ</td><td>Երեք պնդում՝ նշված որպես հաստատված, չհիմնավորված կամ այլ աղբյուր պահանջող</td></tr>',
      '<tr><td>Ստեղծել օգտակար նախագիծ և թողնել մարդու ստուգման հետք</td><td>Ստուգված հայտարարություն կամ կարճ փաստաթուղթ՝ ուղղումների նշումով</td></tr>',
      '<tr><td>Համեմատել գործիքները ըստ առաջադրանքի, տվյալների վերահսկման, որակի և ընդհանուր ծախսի</td><td>Մեկ էջանոց գործիքների համեմատություն նույն առաջադրանքի համար</td></tr>',
      '<tr><td>Նախագծել վերահսկվող աշխատանքային հոսք՝ մուտքերով, ելքերով, հաստատման կետերով և պատասխանատվությամբ</td><td>Հոսքի ուրվագիծ, որտեղ նշված է մարդու որոշման կետը</td></tr>',
      '<tr><td>Գնահատել մեկ ընդունված արդյունքի արժեքը և նվազեցնել վատնումն առանց պահանջվող որակի իջեցման</td><td>Լրացված ծախսի հաշվարկ՝ նշված ենթադրություններով</td></tr>',
      '<tr><td>Թափանցիկ ներկայացնել ԱԲ կիրառումը՝ ներառյալ սահմանները և մարդկային պատասխանատվությունը</td><td>Կարճ կիրառման հայտարարություն՝ կցված ավարտված աշխատանքին</td></tr>',
      '</tbody></table></div>'
    ].join('')
  },
  'guide-2/2': {
    minutes: 3,
    html: [
      '<p>Այս դասընթացում կարևոր են երեք տարբեր գործողություններ․</p>',
      '<ul><li><strong>Բաժին կարդալը</strong> կառուցում է բառապաշար և մտավոր մոդել։</li>',
      '<li><strong>Գործողություն կատարելը</strong> նշանակում է էջում դասակարգել, ընտրել, հաշվել կամ նախագծել։</li>',
      '<li><strong>Հասկացողությունը ցույց տալը</strong> նշանակում է բացատրել որոշումը և ցույց տալ ապացույց՝ ինքնաստուգմամբ, լաբորատոր արդյունքով կամ կարճ համեմատությամբ։</li></ul>',
      '<p>1–7 դասերն ավարտվում են երկու ինքնաստուգման հարցով։ Գրեք հիմնավորումը՝ բացատրությունը բացելուց առաջ։ 8-րդ դասը ցանկի վարժություն է․ որոնեք, զտեք և պլանավորեք 100 գաղափարներից։</p>',
      '<h3>Ինչպիսի՞ն են տարբեր պատասխանները</h3>',
      '<p>Օրինակ առաջադրանք․ «Պե՞տք է հրապարակել ԱԲ-ով գրված աշխատարանի այս հայտարարությունը։»</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Պատասխանների օրինակներ"><table><thead><tr><th scope="col">Մակարդակ</th><th scope="col">Օրինակ պատասխան</th><th scope="col">Ինչու</th></tr></thead><tbody>',
      '<tr><td><strong>Թույլ</strong></td><td>«Նախագիծը լավ է հնչում, ուրեմն հրապարակենք։»</td><td>Ապացույցի ստուգում չկա․ սահունությունը ընդունվում է որպես ապացույց։</td></tr>',
      '<tr><td><strong>Բավարար</strong></td><td>«Համեմատեցի ամսաթիվն ու սենյակը հաստատված ծանուցման հետ։ Մեկ մանրամասն դեռ պետք է հաստատել։»</td><td>Ստուգում է հիմնական փաստերը և նշում բաց ռիսկը։</td></tr>',
      '<tr><td><strong>Ուժեղ</strong></td><td>«Հաստատեցի ժամը, վայրն ու գրանցման հղումը հաստատված ծանուցմամբ, ուղղեցի հորինված վճարը և գրանցեցի՝ ով է հաստատել հրապարակումը։»</td><td>Ապացույցը, ուղղումը և մարդու պատասխանատվությունը հստակ են։</td></tr>',
      '</tbody></table></div>',
      '<h3>Գործնական աշխատանքի չափանիշ</h3>',
      '<p>Գնահատեք չորս չափանիշով 0–2 միավորով՝ փաստական ճշգրտություն, ապացույց, կիրառելիություն և մարդու որոշումների փաստաթղթավորում։ Ճշգրտության կամ ապացույցի 0-ի դեպքում աշխատանքը պետք է վերանայվի՝ անկախ ընդհանուրից։ Սա ուսումնական չափանիշ է, ոչ հավատարմագրման ստանդարտ։</p>',
      '<p>CLEAR-ը և TRACE-ը գործնական հուշումներ են։ Ձևակերպումը ուսումնական ընտրություն է, ոչ համընդհանուր գիտական չափորոշիչ։ Գնահատեք՝ արդյոք օգնում են ձեր իրական առաջադրանքին։</p>'
    ].join('')
  },
  '1/1': {
    minutes: 3,
    html: [
      '<p>Արհեստական բանականությանը արդեն հանդիպում եք ծանոթ վայրերում․ հաշվիչ, որ միշտ նույն թվաբանական կանոններն է կիրառում, փոստարկղ, որ զտում է սպամը, երաժշտության կամ գնումների ցանկ, որ առաջարկում է հաջորդ տարրը, և զրուցարան, որ նախագծում է տեքստ։ Սկսեք այդ աշխատանքներից, ապա անվանեք ընտանիքը։</p>',
      '<p><strong>Արհեստական բանականությունը</strong> համակարգիչային համակարգերի լայն անուն է, որոնք կատարում են ընկալման, լեզվի, կանխատեսման, պլանավորման կամ որոշումների աջակցման հետ կապված առաջադրանքներ։ <strong>Գեներատիվ ԱԲ-ն</strong> ավելի հեռու է գնում․ կարող է ստեղծել նոր տեքստ, պատկեր, ձայն, տեսանյութ կամ կոդ՝ հրահանգներից ու օրինակներից։</p>',
      '<p>ԱԲ-ը մարդկային բանականություն չէ։ Համակարգը կարող է տպավորիչ լինել նեղ առաջադրանքում՝ առանց ապրած փորձի, անձնական պատասխանատվության կամ ճշմարտության ավտոմատ մուտքի։ Արդյունքը առաջարկ է։ Մարդը որոշում է՝ այն ճշգրի՞տ է, պատշա՞ճ և անվտա՞նգ։</p>',
      '<h3>Փորձեք․ դասակարգեք ծանոթ համակարգերը</h3>',
      '<p>Յուրաքանչյուր օրինակի համար ընտրեք լավագույն նկարագրությունը։ Սա պարզ այո/ոչ չէ․ բացատրեք՝ ինչպիսի գործընթաց եք տեսնում։</p>',
      '<div data-lab="ai-sort"></div>',
      '<aside class="lesson-callout"><p><strong>Սովորություն</strong></p><p>Ցանկացած ԱԲ համակարգ նկարագրեք աշխատանքով․ Ի՞նչ է մտնում։ Ի՞նչ է դուրս գալիս։ Ի՞նչ ապացույց կարող է օգտագործել։ Ի՞նչ կլինի սխալի դեպքում։ Ո՞վ է ստուգում արդյունքը։</p></aside>'
    ].join('')
  },
  '1/2': {
    minutes: 3,
    html: [
      '<p>Այս դասընթացում օգտագործեք մեկ համանմանություն․ <strong>մոդելը շարժիչն է, իսկ հավելվածն ավելացնում է գործիքներն ու վերահսկումը</strong>։ Շարժիչը կանխատեսում է պատասխանի հաջորդ մասերը։ Հավելվածը կարող է ավելացնել զրույցի միջերես, ֆայլերի բեռնում, որոնում, հիշողություն, թույլտվություններ և անվտանգության զտիչներ։</p>',
      '<p><strong>Մեծ լեզվական մոդելը (LLM)</strong> սովորեցվում է տեքստի և առնչվող տվյալների մեծ ծավալով, որպեսզի կարողանա ստեղծել հաջորդականություններ։ Զրույցում այն ստանում է ձեր հաղորդագրությունը, պատմությունը և այլ հրահանգներ, ապա պատասխանը կառուցում է մաս առ մաս։ Այն օրինաչափությունների սեղմված վիճակագրական ներկայացում է, ոչ բոլոր տեսած փաստաթղթերի որոնելի պատճեն։</p>',
      '<h3>Ցուցադրություն․ հրահանգ, համատեքստ, պատասխան</h3>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Հրահանգ համատեքստ պատասխան"><table><thead><tr><th scope="col">Մաս</th><th scope="col">Օրինակ</th></tr></thead><tbody>',
      '<tr><td><strong>Հրահանգ</strong></td><td>«Գրիր երկու նախադասությամբ հայտարարություն աշխատակազմի համար։»</td></tr>',
      '<tr><td><strong>Տրամադրված համատեքստ</strong></td><td>Հաստատված ծանուցում․ աշխատարան՝ մայիսի 12, սենյակ 214, գրանցումը փակվում է մայիսի 10-ին։</td></tr>',
      '<tr><td><strong>Ստեղծված պատասխան</strong></td><td>«Միացեք ԱԲ աշխատարանին մայիսի 12-ին՝ 214 սենյակում։ Խնդրում ենք գրանցվել մինչև մայիսի 10-ը։»</td></tr>',
      '</tbody></table></div>',
      '<p><strong>Ստուգում․</strong> Որ տեղեկությունն է եկել տրամադրված փաստաթղթից, և որն է պահանջում այլ աղբյուր։ Ամսաթիվը, սենյակը և վերջնաժամկետը ծանուցումում են։ Բանախոսների, վճարների կամ «պարտադիր մասնակցության» մասին պնդումները պետք է ունենան այլ աղբյուր՝ կամ հանվեն։</p>',
      '<aside class="lesson-callout"><p><strong>Հիշեք</strong></p><p>Եթե պատասխանը պարունակում է արդիական փաստ, խնդրեք ամսաթիվ և աղբյուր։ Ապա բացեք աղբյուրը և հաստատեք, որ այն աջակցում է պնդմանը։</p></aside>'
    ].join('')
  },
  '1/3': {
    minutes: 8,
    html: [
      '<p>Այս բաժինն ունի երեք կարճ մաս։ Լրացուցիչ տեխնիկական մանրամասները վերջում են։ Ստորև փոքր ինտերակտիվ ցանցը ուսումնական խաղալիք է՝ <strong>ոչ</strong> ժամանակակից LLM-ի ամբողջական մոդել։</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/neural-networks-brain.png" alt="Նկար՝ կենսաբանական ուղեղի կիսագունդ և արհեստական նեյրոնային ցանցի կիսագունդ" width="1400" height="788" loading="lazy"><figcaption>Կենսաբանական ոգեշնչում և արհեստական ցանցեր․ նման փոխաբերություն, տարբեր մեխանիզմ։</figcaption></figure>',
      '<h3>1. Թոքեններ և համատեքստ</h3>',
      '<p>Լեզվական մոդելները տեքստը մշակում են <strong>թոքեններով</strong>՝ բառեր, բառամասեր կամ կետադրություն։ Ձեր հրահանգը, զրույցի պատմությունը և տեղադրված փաստաթուղթը դառնում են ընթացիկ <strong>համատեքստ</strong>։ Մոդելը կանխատեսում է՝ ինչը պետք է գա հաջորդը։ Փաստաթուղթ տրամադրելը մոդելի վերաուսուցում չէ։</p>',
      '<h3>2. Կշիռների ուսուցում</h3>',
      '<p><strong>Ուսուցման</strong> ընթացքում համակարգը կարգավորում է բազմաթիվ թվային <strong>կշիռներ</strong>, որպեսզի կանխատեսումները ավելի լավ համընկնեն օրինակների հետ։ Կշիռները պահում են սովորած օրինաչափությունները։ Ուսուցումը սովորաբար անում է մատակարարը, ոչ սովորական զրույցը։</p>',
      '<h3>3. Պատասխանի ստեղծում կիրառման ժամանակ</h3>',
      '<p><strong>Եզրակացության</strong> (ամենօրյա կիրառման) ժամանակ ուսուցված կշիռները այդ պահին ֆիքսված են։ Մոդելը կարդում է համատեքստը և ստեղծում պատասխան։ Թարմ փաստերի համար դրանք ավելացնում եք համատեքստով, որոնմամբ կամ վերականգնմամբ՝ առանց ամբողջ մոդելը անմիջապես վերագրելու։</p>',
      '<h3>Ինտերակտիվ ցուցադրություն Ա․ փոխեք մեկ կշիռ</h3>',
      '<p>Փոխեք մեկ կշիռ եռամուտք փոքր ցանցում և տեսեք ելքային գնահատականի փոփոխությունը։ Սա ցույց է տալիս, որ կշիռները կարևոր են։ Սա ժամանակակից լեզվական մոդելի կրկնօրինակ չէ։</p>',
      '<div data-lab="tiny-net"></div>',
      '<h3>Ինտերակտիվ ցուցադրություն Բ․ ավելացրեք աղբյուրի հատված</h3>',
      '<p>Նույն հարցը տվեք աղբյուրով և առանց աղբյուրի։ Նկատեք՝ որ փաստերն են դառնում ստուգելի։</p>',
      '<div data-lab="context-compare"></div>',
      '<details class="lesson-optional"><summary>Լրացուցիչ տեխնիկական ուսումնասիրություն․ նեյրոններ, ակտիվացումներ և փոքր դասակարգիչ</summary>',
      '<h3>Նեյրոնային ցանցերի հիմունքներ</h3>',
      '<p>Ժամանակակից գեներատիվ համակարգերի մեծ մասը օգտագործում է արհեստական նեյրոնային ցանցեր․ պարզ միավորներ, որոնք փոխակերպում են մուտքերը և փոխանցում ազդանշանը։ Կենսաբանական փոխաբերությունը ոգեշնչում է, ոչ ուղեղի բառացի պատճեն։</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/neural-network-layers.png" alt="Նեյրոնային ցանցի մուտքային, թաքնված և ելքային շերտերի գծապատկեր" width="1536" height="864" loading="lazy"></figure>',
      '<h3>Ինչպես է աշխատում մեկ արհեստական նեյրոն</h3>',
      '<p>Միավորը մուտքերը բազմապատկում է կշիռներով, գումարում է (հաճախ շեղումով), ապա կիրառում ակտիվացման ֆունկցիա։ Այդ ձևավորված ազդանշանը դառնում է հաջորդ միավորների մուտք։</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/artificial-neuron.png" alt="Արհեստական նեյրոնի գծապատկեր՝ կշռված մուտքերով" width="1536" height="864" loading="lazy"></figure>',
      '<h3>Ակտիվացման ֆունկցիաներ</h3>',
      '<p>Sigmoid, step կամ ReLU ակտիվացումները որոշում են՝ որքան ուժեղ է ազդանշանն անցնում առաջ։ Դրանք օգնում են կառուցել ոչ գծային օրինաչափություններ։</p>',
      '<figure class="lesson-figure-wrap"><img class="lesson-figure" src="content/explorers/assets/activation-functions.png" alt="Sigmoid, step և ReLU ակտիվացման ֆունկցիաների գծապատկերներ" width="1536" height="864" loading="lazy"></figure>',
      '<h3>Մեկ նեյրոնից դեպի ցանց</h3>',
      '<p>Շերտերը կարող են ներկայացնել ավելի հարուստ համակցություններ։ Խորը ուսուցումը նշանակում է բազմաթիվ շերտեր՝ մեծ տվյալներով։ Լեզվական մոդելներն ավելացնում են մասնագիտացված կառուցվածք և մասշտաբ․ վերը նշված խաղալիք ցանցը միայն առաջին ինտուիցիան է։</p>',
      '<p>Պատմական նշում․ վաղ պերսեպտրոններն ու փոքր դասակարգիչները և՛ առաջընթաց, և՛ չափազանցված սպասումներ են առաջացրել։ Օգտակար ցուցադրությունից հետո էլ ապացույցն ու մարդկային դատողությունը մնում են անհրաժեշտ։</p>',
      '</details>'
    ].join('')
  },
  '1/4': {
    minutes: 3,
    html: [
      '<p>Յուրաքանչյուր օգտակար կարողություն զուգակցեք մարդու աշխատանքի հետ, որ մնում է։</p>',
      '<div class="table-scroll" tabindex="0" role="region" aria-label="Կարողություններ և սահմաններ"><table><thead><tr><th scope="col">Օգտակար է…</th><th scope="col">Դեռևս պահանջում է…</th></tr></thead><tbody>',
      '<tr><td>Ամփոփագիր նախագծել տրամադրված փաստաթղթից</td><td>Ստուգել բացթողումները, տոնը և արդյոք յուրաքանչյուր պնդում կա աղբյուրում</td></tr>',
      '<tr><td>Նշումները վերածել ավելի պարզ կառուցվածքի</td><td>Հաստատել առաջնահերթությունները և այն, ինչ չպետք է կորչի</td></tr>',
      '<tr><td>Սահմանափակ խնդրի համար տարբերակներ առաջարկել</td><td>Տարբերակներից ընտրել պատասխանատու դատողությամբ</td></tr>',
      '<tr><td>Թարգմանել կամ վերաձևակերպել նշված լսարանի համար</td><td>Ստուգել իմաստը, մշակութային համապատասխանությունը և զգայուն բառերը</td></tr>',
      '<tr><td>Գործիքներով համակարգել բազմաքայլ նախագիծ</td><td>Հաստատել հետևանք ունեցող գործողությունները և ստուգել գործիքների ելքը</td></tr>',
      '</tbody></table></div>',
      '<p>Հաճախակի ձախողումներն են՝ հորինված մանրամասներ, հնացած գիտելիք, անհավասար լեզվական որակ, թաքնված կողմնակալություն, հաշվարկային սխալներ և պատասխաններ, որոնք «պատրաստ» են հնչում՝ թույլ ապացույցով։</p>',
      '<h3>Փորձեք․ ընտրեք ճիշտ մոտեցումը</h3>',
      '<p>Յուրաքանչյուր իրավիճակի համար ընտրեք՝ ԱԲ կիրառել, այլ գործիք օգտագործել, թե դիմել որակավորված մասնագետի։</p>',
      '<div data-lab="route-choice"></div>',
      '<aside class="lesson-callout"><p><strong>Մարդկային դատողությունն առաջնային է</strong></p><p>ԱԲ-ը կարող է արագացնել վերլուծությունը։ Պատասխանատվությունը մնում է մարդկանց և հաստատություններին։</p></aside>'
    ].join('')
  },
  '1/practice': {
    minutes: 4,
    html: [
      '<h3>Ուղեկցվող պրակտիկա՝ էջի աղբյուրով</h3>',
      '<p>Օգտագործեք միայն այս հորինված ծանուցումը։ Բացակայող մանրամասներ մի հորինեք։</p>',
      '<blockquote class="lesson-source"><p><strong>ՀԵՀ աշխատակազմի զարգացման ծանուցում (հորինված)</strong><br>Աշատարան․ «ԱԲ նախագծերի ստուգում աշխատանքում»<br>Ամսաթիվ․ 12 մայիսի 2026<br>Ժամ․ 14:00–16:00<br>Սենյակ․ 214, Գլխավոր մասնաշենք<br>Գրանցումը փակվում է․ 10 մայիսի 2026<br>Կապ․ training@example.eua.am<br>Նշում․ Բերեք նոութբուք։ Սուրճը տրամադրվում է։ Մասնակցության վճար չկա։</p></blockquote>',
      '<ol><li>Խնդրեք (կամ պատկերացրեք) օգնականին․ «Ամփոփիր աշխատարանը աշխատակազմի համար երկու նախադասությամբ։»</li>',
      '<li>Համեմատեք նախագիծը ծանուցման հետ։ Յուրաքանչյուր պնդում նշեք որպես ծանուցմամբ հաստատված, չհիմնավորված կամ այլ աղբյուր պահանջող։</li>',
      '<li>Պատասխանեք․ Ի՞նչ լրացուցիչ տեղեկություն կդարձներ պատասխանը ստուգելի, եթե նախագիծը նշեր բանախոսներ կամ վճար։</li></ol>',
      '<p><strong>Արդյունք։</strong> Կարճ աղյուսակ՝ առնվազն չորս պնդումով և ձեր պիտակներով։</p>',
      '<h3>Ուսուցո՞ւմ, եզրակացությո՞ւն, թե վերականգնում</h3>',
      '<p>Յուրաքանչյուր իրավիճակը համապատասխանեցրեք լավագույն մեխանիզմին։</p>',
      '<div data-lab="mechanism-sort"></div>',
      '<h3>Ամփոփում</h3>',
      '<aside class="lesson-callout"><p>• ԱԲ-ը տարբեր աշխատանքներով համակարգերի ընտանիք է, ոչ մեկ տեսակի բանականություն։</p><p>• Մոդելը շարժիչն է, հավելվածն ավելացնում է գործիքներն ու վերահսկումը։</p><p>• Ուսուցումը, եզրակացությունը և վերականգնումը տարբեր մեխանիզմներ են։</p><p>• Օգտակար նախագիծը դեռևս ապացույցի ստուգում է պահանջում․ մարդկային դատողությունը վճռորոշ է։</p></aside>',
      '<h3>Խորհրդածություն</h3>',
      '<ul><li>Ի՞նչ լրացուցիչ տեղեկություն կդարձներ ձեր ընտրած առաջադրանքի ԱԲ պատասխանը ստուգելի։</li>',
      '<li>Որտե՞ղ կստեղծեր ԱԲ սխալը ամենամեծ վնասը ձեր համատեքստում։</li>',
      '<li>Ո՞ր ստուգման կանոնը կպահեք հաջորդ դասի համար։</li></ul>'
    ].join('')
  }
};

function apply(data, pack) {
  for (const [key, value] of Object.entries(pack)) {
    const [sectionId, lessonId] = key.split('/');
    setLesson(data, sectionId, lessonId, value.html, value.minutes);
  }
  // Move concept explorer injection target: keep section description practical.
  const ch1 = data.sections.find((s) => s.id === '1');
  if (data.language === 'en') {
    ch1.description = 'A practical mental model for modern artificial intelligence: familiar examples, clear checks, and human judgment.';
  } else {
    ch1.description = 'Ժամանակակից արհեստական բանականության գործնական մտավոր մոդել՝ ծանոթ օրինակներ, հստակ ստուգումներ և մարդկային դատողություն։';
  }
}

const enData = load('en');
const hyData = load('hy');
apply(enData, en);
apply(hyData, hy);
save('en', enData);
save('hy', hyData);
console.log('Revised preface, learning pathway, and Chapter 1 for EN and HY.');
