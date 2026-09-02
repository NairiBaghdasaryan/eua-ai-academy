# EUA AI Academy — Programme Design

**Understand it. Question it. Build with it.**

European University of Armenia · proposed EUA AI Academy initiative
Version 2.1 review baseline · 31 August 2026 · Self-paced recorded model

> **Status:** programme proposal. Registration, certificates, community access, organisational ownership, and the January 2027 launch date remain subject to EUA approval and the gates in [docs/EXECUTION-STRATEGY.md](docs/EXECUTION-STRATEGY.md).

---

## Contents

1. [What changed in v2.0](#1-what-changed-in-v20)
2. [Five corrections to the original brief](#2-five-corrections-to-the-original-brief)
3. [Name and positioning](#3-name-and-positioning)
4. [Educational philosophy](#4-educational-philosophy)
5. [Learning outcomes](#5-learning-outcomes)
6. [The four programmes](#6-the-four-programmes)
7. [AI Explorers — the 20 lessons](#7-ai-explorers--the-20-lessons)
8. [The AI tools map](#8-the-ai-tools-map)
9. [Project library — 24 briefs](#9-project-library--24-briefs)
10. [Challenges and badges](#10-challenges-and-badges)
11. [Exams and certification](#11-exams-and-certification)
12. [EUA AI Demo Days](#12-eua-ai-demo-days)
13. [The Telegram Q&A group](#13-the-telegram-qa-group)
14. [Video production structure](#14-video-production-structure)
15. [Presenter methodology](#15-presenter-methodology)
16. [Marketing strategy](#16-marketing-strategy)
17. [Expansion](#17-expansion)
18. [Framework alignment](#18-framework-alignment)
19. [Suggestions beyond the brief](#19-suggestions-beyond-the-brief)
20. [Risks](#20-risks)
21. [Open decisions](#21-open-decisions)

---

## 1. What changed in v2.0

Version 1.0 designed a cohort-taught classroom programme: fifteen students, two instructors in the room, a capstone project built over five weeks, and a Demo Day that was the final taught hour. Version 2.0 replaces that with a **self-paced recorded course on an open-enrolment model** — the Coursera shape.

That is a different product, and the change reaches further than it first appears. What follows is the full redesign, not a patch.

| | v1.0 — cohort model | v2.0 — self-paced model |
|---|---|---|
| **Delivery** | 20 taught hours, live, in a room | 20 recorded lessons, watched anywhere |
| **Enrolment** | 12–15 places, application, selection | Proposed open-access model, subject to funded platform and moderation capacity |
| **Pace** | Weekly, fixed | Entirely the student's |
| **Staffing** | 2 instructors per cohort, every hour | 1 presenter (once, on camera) + 2 moderators for the community |
| **Assessment** | Instructor-marked portfolio, 4 dimensions | 7 optional module exams + a self-kept workbook |
| **Final work** | Capstone project, presented | None — Lesson 20 is *AI and Your Future* |
| **Demo Day** | The final taught hour | A separate monthly public event, open to all graduates |
| **Community** | The classroom | Moderated Telegram group + monthly Demo Days |
| **Marginal cost per student** | High — instructor hours | Near zero |
| **Reach ceiling** | ~45 students/year | Thousands |

### What the change gains

Reach, obviously. Also: regional equity — a fifteen-year-old in Kapan or Ijevan gets exactly what a Yerevan student gets, which the cohort model could never deliver without EUA physically travelling. And the marginal cost of the thousandth student is the same as the tenth, which makes free-at-the-point-of-use a viable position and turns the programme into a public good EUA can claim credit for.

### What the change costs, honestly

Four things, and they should be named in the room before this is approved:

1. **Completion rates fall, hard.** Open self-paced courses typically finish in single-digit percentages. A cohort of fifteen with an instructor who notices absence finishes at eighty-plus. Expect most enrolments never to reach Lesson 20, and design the funnel and the claims around that reality rather than being surprised by it. Section 19 has the mitigations.
2. **Nobody is watching the individual student.** In v1.0 a floor facilitator spotted the quiet student stuck for eight minutes. Nothing replaces that. The moderated Telegram group and the monthly Demo Days are the substitutes, and they are weaker.
3. **The strongest assessment is gone.** An instructor reading a student's transcripts and marking judgement above output was the single best feature of v1.0. Multiple-choice exams cannot do that as well. Section 11 explains how much of it can be recovered through exam *design* — it is more than you would expect, but it is not all of it.
4. **Nothing is verified.** The workbook is self-kept and self-reported. Only the exams produce evidence EUA can stand behind. The certificate levels in Section 11 are drawn along exactly that line, deliberately.

---

## 2. Five corrections to the original brief

These predate the model change and still stand.

### 2.1 Half the named tools are closed to 14–16-year-olds

Checked against current terms of service, August 2026:

- **Claude, ElevenLabs, Cursor, Google Flow/Veo** — 18+, no parental-consent path.
- **Gamma** — 16+, which excludes the younger half of the cohort.
- **Midjourney** — 13+ with consent, but no free tier.
- **Sora** — **discontinued.** OpenAI announced the shutdown in March 2026; the web and app experiences went offline on 26 April 2026. A curriculum listing it dates the whole document. [OpenAI Help Center](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)

None of these are dropped. They move to an **Instructor Console** tier: shown on the presenter's screen in the recorded lesson, never accounts a student creates. Students see what a voice model or a video model does; nobody breaches a terms of service to show them. Full map in Section 8.

### 2.2 Armenian law sets parental consent at 16, not 13

Article 9(9) of Armenia's Law on Personal Data Protection states that a legal representative gives consent for processing the personal data of a minor **under 16**. Every 14- and 15-year-old therefore needs the approved legal-representative consent process completed before an account exists. [Official ARLIS text](https://www.arlis.am/hy/acts/218690)

In the cohort model this was a parent evening. In the self-paced model it has to be **a field in the enrolment form and a confirmation email to the guardian's address** — which is both cheaper and more auditable. Confirm the article citation with counsel before the form goes live.

### 2.3 Armenia already has a national teen AI programme — sit upstream of it

FAST's **Generation AI** is a free three-year public-school programme whose enrolment begins in Grade 10; FAST states that it will operate in 41 high schools in the 2026–2027 academic year. [FAST programme page](https://www.fast.foundation/en/program/4379) In May 2026, Armenia announced a collaboration with OpenAI and Firebird to expand access to ChatGPT Edu and Codex for 50,000 students, teachers, and researchers. [OpenAI Education announcement](https://edunewsletter.openai.com/p/armenias-next-step-toward-ai-native)

The responsible position is complementary: Explorers is a lighter-touch AI literacy offer spanning ages 14–16, while Generation AI begins in Grade 10 and provides a multi-year mathematics, Python, and AI pathway in participating schools. Treat FAST as a prospective partner, not an assumed referral channel; any formal feeder language requires FAST's agreement.

**The self-paced model strengthens this considerably.** A free, broadly accessible course can complement a multi-year public-school pathway in a way that a fifteen-place paid cohort could not. Capacity still depends on the funded platform, moderation, and support model. It is also something EUA can offer the Ministry as a contribution rather than a competitor.

### 2.4 Select a community channel that can be safely governed

Telegram's current terms set an 18+ minimum for users in EU countries, the UK, and Australia, while the general terms do not publish a separate Armenia-specific minimum. [Telegram Terms of Service](https://telegram.org/tos) That does not by itself make the service appropriate for minors. The launch decision must also cover privacy, phone-number exposure, moderation controls, cross-border learners, evidence retention, incident response, and a fallback LMS-only support channel. If approved, use a **moderated Telegram group** for students and alumni, a **separate broadcast channel** for parents, and keep staff coordination separate. Rules in Section 13.

### 2.5 Twenty hours cannot hold everything in the brief

Explicit cuts: audio, music and voice share one lesson rather than three; automation and agents get one honest lesson teaching the concept and one workflow, not a Zapier course. Careers, which v1.0 squeezed into a homework mission, now has a full lesson — the capstone's removal freed it.

---

## 3. Name and positioning

### The names

**EUA AI Academy** is the umbrella. **AI Explorers** is the flagship programme for 14–16-year-olds. Keeping them distinct matters: the Academy holds four programmes, and "Explorer" is a rung that implies a next rung.

| Programme | Audience | Status |
|---|---|---|
| **AI Explorers** | Teenagers, 14–16 | Pilot in preparation; registration not open |
| **AI for Students** | University students | Future roadmap phase |
| **AI for Educators** | School and university teachers | Future roadmap phase |
| **AI for Public Service** | Civil servants and institutions | Future roadmap phase |

### The tagline

The original draft — *"Discover. Create. Build the Future."* — is three verbs any bootcamp could use. Replace it with:

> **Understand it. Question it. Build with it.**

Three verbs, each a claim, and the middle one is the differentiator. Nobody else selling AI to teenagers puts *question* in the tagline. It is what makes the programme credible to a university, reassuring to a parent, and attractive to a fifteen-year-old, who enjoys being told they are allowed to distrust things.

### Audience-specific lines

- **Students** — "Twenty lessons. Eight badges. Start today, finish whenever."
- **Parents** — "Your child already uses AI. Here they learn to use it well — and to know when not to. Free, from a university."
- **EUA** — "A practical entry point into a proposed university-led AI learning pathway."

### Positioning statement

For **14–16-year-olds in Armenia who already use AI but need a stronger model for judging it**, EUA AI Explorers is a **proposed free, self-paced, university-run video course** that aims to turn passive users into people who can choose a tool, direct it, challenge unreliable answers, and build something real with it. It is designed as a broad AI-literacy offer that complements longer technical programmes. The proposed launch model has no competitive application; actual capacity depends on funded platform, moderation, and support, with a monthly public event where graduates can ask questions and show work.

---

## 4. Educational philosophy

The programme has one enemy: the student who finishes able to get better outputs but no better at thinking. Everything below exists to prevent that specific failure. The self-paced model makes it harder to prevent, not easier — there is no instructor to catch a student coasting — so the principles have to be built into the *video and the exams* rather than into a room.

### Six principles

**1. Friction before fluency.** Every concept is met first as a problem the student fails at, then explained. Lesson 13 makes them try to get an image model to draw something specific and fail, *then* teaches visual prompting. Explaining first produces recognition without understanding — the failure the research on constructionist AI education keeps finding, where students build happily and keep their misconceptions intact.

**2. The machine is not a person, and we prove it every lesson.** Fourteen-year-olds anthropomorphise relentlessly. Rather than lecturing against it, every lesson contains a moment where the model does something no person would do — contradicts itself in two tabs, invents a citation with a convincing page number, miscounts the letters in a word. The mechanism is taught through the seams, not the successes.

**3. Nothing is learned that is not made.** Every lesson produces an artefact that goes into the student's **Workbook** — one running document or folder. Twenty pieces of work. It is not marked by anyone, which is a real weakness; it is still the thing they will actually show someone in two years.

**4. Judgement is what gets tested.** Half of every exam is not recall. It shows the student real AI output and asks what they would do with it. "Use it as it is" never scores. This is the one place the self-paced model can carry v1.0's most important design decision, and it carries it well if — and only if — the exams are written properly. Section 11.

**5. Capabilities, not brands.** Students learn seven capability categories and one deep tool per category. When a tool dies, as Sora did, the mental model survives. Every lesson names the capability first and the tool second.

**6. The human stays responsible.** Anything a student submits, they own. "The AI wrote it" is not a defence and not an excuse; it is also not a shame. The framing throughout is professional: you are the one who signs the work.

### The lesson loop

Every lesson runs the same six phases, which the student learns by name in Lesson 1:

| Phase | Time envelope | On video? | What happens |
|---|---|---|---|
| **Hook** | 1–2 min | Yes | A question, a trick, or a failure they witness |
| **Discover** | 6–10 min | Yes | The smallest theory that makes the practical work possible |
| **Watch** | 7–10 min | Yes | Screen demonstration, including at least one deliberate failure |
| **Try** | 15–30 min | **Paused** | Guided practical — the video stops and waits |
| **Challenge** | 15–35 min | **Paused** | Open-ended work, timed and shared afterwards |
| **Reflect** | 3–6 min | Yes + paused | The "what fooled you?" question, Workbook entry, and next hook |

Each lesson contains **20–30 minutes of edited video** plus **30–65 minutes of guided practice**. The exact allocation varies by learning task; the seven module video totals are **60–88 minutes**. The approved per-lesson runtime, chapter map, practice duration, output, and evidence are controlled in [docs/DETAILED-CURRICULUM.md](docs/DETAILED-CURRICULUM.md). A recorded lesson that runs 55 minutes is still a lecture with a webcam.

---

## 5. Learning outcomes

Twelve outcomes, grouped by the identities the programme moves students through. Each is written so that an exam item or a Workbook artefact can evidence it.

| # | Identity | By the end, the student can… | Evidenced by |
|---|---|---|---|
| 1 | **AI Explorer** | Explain what a model, training data and a prediction are, and why an LLM produces fluent text without knowing anything | Exam 1 · Lesson 3 artefact |
| 2 | | Name seven AI capability categories and pick a suitable one for an unfamiliar task | Exam 1 · Lesson 4 tool map |
| 3 | **AI User** | Write a structured prompt using CRISP and repair a weak prompt | Exam 2 · before/after pairs |
| 4 | | Run at least two rounds of critique-and-revise rather than accepting a first draft | Exam 2 · Workbook transcripts |
| 5 | **AI Thinker** | Identify a hallucination, a fabricated source and a biased output in unseen material | Exam 3 — the heaviest exam |
| 6 | | Apply Question → Verify → Compare → Decide and state a confidence level | Exam 3 · verification log |
| 7 | | Explain what personal data never goes into an AI tool, and what copyright means for AI-generated work | Exam 3 · settings audit |
| 8 | **AI Creator** | Produce a finished visual, written, audio and audio-visual artefact and describe the AI's contribution honestly | Exam 5 · four Workbook artefacts |
| 9 | | Use AI as a study partner in a way that increases what they learn, and state the line they will not cross | Exam 4 · signed integrity charter |
| 10 | **AI Problem Solver** | Turn an idea into a working digital artefact without writing code unaided | Exam 6 · published link |
| 11 | | Describe the difference between an assistant and an agent and sketch an Input → AI → Decision → Action workflow | Exam 7 · workflow diagram |
| 12 | | Describe how AI is changing a profession they might enter, and which human capacities it does not replace | Exam 7 · Lesson 20 artefact |

---

## 6. The four programmes

### AI Explorers — teenagers, 14–16 · **pilot in preparation**

20 lessons · 7 modules · self-paced · free · guardian consent required under 16.

From "I use ChatGPT for homework" to "I built this, and here is where I didn't trust it." Detailed in Section 7.

### AI for Students — university students · *coming soon*

30 lessons · 8 modules · portfolio-based.

For undergraduates in any faculty. Deeper than Explorers and pointed at employability. Indicative modules: how models work including a little Python; AI in academic work and where the line is; research, data analysis and reproducibility; building and shipping with AI assistance; agents and workflow automation; discipline-specific projects with faculty supervision.

**Why this must be a separate programme rather than "Explorers for older students":** the audience differs in what it is accountable for. A fifteen-year-old is accountable for their own learning. A twenty-year-old is accountable for a degree with plagiarism regulations, and shortly afterwards for professional work an employer will assume AI-literacy in. The integrity module and the employability framing carry the whole difference.

### AI for Educators — teachers · *coming soon*

20 lessons · shared core plus a practice track.

Armenia is expanding AI education nationwide and teacher capacity is the stated bottleneck. Reuses Modules 1–4 of Explorers almost unchanged; replaces Modules 5–7 with assessment design when every student has an AI, an enforceable integrity policy, lesson preparation and marking support, and certification to deliver AI Explorers in the teacher's own school.

This is the highest-demand, lowest-effort adjacent product EUA has.

### AI for Public Service — institutions · *coming soon*

20 lessons · executive format · delivered on request.

Capabilities and limits without the vendor pitch; data protection, consent and citizen records; automated decisions and the right to an explanation; procurement questions to ask before signing; alignment with EU AI literacy and governance practice.

---

## 7. AI Explorers — the 20 lessons

Seven modules, **8 hours 27 minutes of recorded video**, and **15 hours 05 minutes of guided practical work**. Every module contains **60–88 minutes of video**, every lesson produces evidence for the Workbook, and every module ends with an optional 15-minute exam and a badge. [The detailed curriculum and runtime plan](docs/DETAILED-CURRICULUM.md) is the production timing master.

| Module | Lessons | Video | Practice | The question it answers | Badge |
|---|---:|---:|---:|---|---|
| 1 · Foundations | 1–4 | **80 min** | 135 min | What is this thing, and how does it actually work? | AI Explorer |
| 2 · Communication | 5–6 | **60 min** | 80 min | How do I get it to do what I actually meant? | AI Communicator |
| 3 · Critical thinking | 7–10 | **88 min** | 155 min | When should I not believe it? | AI Detective |
| 4 · Learning | 11–12 | **60 min** | 90 min | How do I use it to learn more, not less? | AI Scholar |
| 5 · Creation | 13–15 | **75 min** | 160 min | What can I make that I could not make before? | AI Creator |
| 6 · Building | 16–18 | **84 min** | 180 min | Can I build a real thing without knowing how to code? | AI Analyst · AI Builder |
| 7 · What next | 19–20 | **60 min** | 105 min | What is worth building, and what does this mean for me? | AI Problem Solver |
| **Total** | **20** | **507 min** | **905 min** | **23 hr 32 min core learner time** | **8 badges** |

---

### Module 1 · Foundations — Lessons 1–4

Four lessons to replace "AI is a smart robot that knows things" with a mechanical picture the student can reason from. No maths beyond counting. Every abstraction is met as a physical or visual object before it is named.

#### Lesson 1 — Is That Actually AI?
**Big question:** If a machine can beat you at something, does that make it intelligent?

- **Objectives** — Distinguish AI from ordinary software; place machine learning and generative AI correctly inside AI; name three things AI does better than humans and three it does worse.
- **Theory (6 min)** — The nesting doll: AI ⊃ machine learning ⊃ deep learning ⊃ generative AI. The dividing line that matters: ordinary software is *told the rules*; machine learning *finds the rules in examples*.
- **Demonstration (8 min)** — Four things on screen — a calculator, a thermostat, a chatbot, a face-unlock camera — with the honest answer that two of them depend on what is inside. Then Google Quick, Draw! played badly, live, so the model visibly fails on a wonky drawing.
- **Practical (15 min)** — *The Intelligence Audit.* List every piece of technology you touched before starting this lesson and tag each: no AI / probably AI / definitely AI. Most students find eight to fifteen.
- **Challenge (15 min)** — 🧠 **Human vs AI, Round One.** Three timed rounds against a chatbot: 40-second mental arithmetic; name what is funny about a photo; count the letter "r" in a word. Humans lose the first, win the second, and win the third in a way that shocks them. Scores go in the Workbook and are re-run in Lesson 19.
- **Reflection** — "Round three should have been the easy one. Why wasn't it?" The prediction is written down and reopened in Lesson 3.
- **Workbook** — *Spot the Machine*: five AI systems in your daily life; for each, what does it predict and from what?
- **Tools** — Quick, Draw! · ChatGPT (teen) · paper
- **Outcome** — The student stops using "AI" as one word for everything, and has an unanswered question they want answered.

#### Lesson 2 — How Machines Learn
**Big question:** Can you teach a computer something without telling it any rules?

- **Objectives** — Describe data → model → training → prediction; explain why better data changes results; see first-hand how training data determines behaviour, including its failures.
- **Theory (6 min)** — Training as guided guessing: the model guesses, is scored, adjusts, repeats — millions of times. Three words and no more: **examples, pattern, prediction**. The model does not store your examples; it stores what they had in common. Which is why it cannot tell you where an answer came from.
- **Demonstration (8 min)** — A live model trained in Google Teachable Machine — three classes, thirty webcam images each — in under four minutes, then deliberately sabotaged: trained on "thumbs up" with the right hand only, then tested with the left. Confidence collapses on camera.
- **Practical (15 min)** — Build a three-class image classifier. No account, nothing installed. It must work — and then be broken on purpose, with the method recorded.
- **Challenge (15 min)** — 🎯 **The Sabotage Challenge.** Find the input that fools your own classifier most confidently, and post it to the group. Points for the most confidently wrong prediction. The winning fool is usually absurd — a hand at a strange angle, a different-coloured wall — and that is the whole lesson.
- **Reflection** — "Your model was never wrong on purpose. So whose fault was the mistake?" First appearance of the idea that model failures are usually data failures, and data is chosen by people.
- **Workbook** — *The Missing Data*: pick an AI system from Lesson 1. What data was it trained on, and who is missing from that data?
- **Tools** — Teachable Machine · Machine Learning for Kids
- **Outcome** — The student has personally trained a model and personally broken one. "Training data" is a thing they have touched.

#### Lesson 3 — The Prediction Machine
**Big question:** If it is only guessing the next word, how is it this good?

- **Objectives** — Explain next-token prediction well enough to teach a parent; explain why scale changed everything; define context window and multimodality; connect the mechanism to hallucination.
- **Theory (8 min)** — The phone-keyboard analogy taken seriously. Your keyboard predicts from the last two words; an LLM predicts from thousands, having read a substantial share of everything written. Three reasons it got powerful: more data, more compute, a better architecture. Then multimodality — the same trick on pixels and sound. The payoff line: *a machine that predicts plausible text is not a machine that checks true text.* That sentence is the seed of Module 3.
- **Demonstration (7 min)** — Building a sentence one word at a time by prediction, then the model doing the same. Then the Lesson 1 letter-counting failure explained: the model never saw letters, it saw chunks.
- **Practical (15 min)** — *Context experiment.* The same task with no context, with a paragraph of context, and with deliberately wrong context. Three outputs side by side. No conclusion is supplied.
- **Challenge (15 min)** — 🔬 **Two Tabs, One Question.** Ask the same factual question in two fresh chats, phrased slightly differently, until the answers disagree. Points for the largest contradiction, extra if the model was confident in both.
- **Reflection** — "It contradicted itself and both answers sounded certain. What does that tell you about how certainty works here?"
- **Workbook** — *Explain It to an Adult*: a 60-second voice note explaining LLMs to a parent or grandparent, jargon-free. Note the question they asked back — their confusion is data.
- **Tools** — ChatGPT (teen) · Gemini
- **Outcome** — The student can say why the machine is fluent and unreliable *at the same time and for the same reason*. The highest-leverage idea in the programme.

#### Lesson 4 — The Tool Map
**Big question:** There are a thousand AI tools. How do you choose without trying all of them?

- **Objectives** — Name the seven capability categories; match an unfamiliar task to one; state a limitation per category; evaluate an unseen tool against a fixed checklist.
- **Theory (6 min)** — Brands die; capabilities persist. **Converse · Research · Depict · Compose · Move · Present · Build & Automate.** Sora is the worked example of why you never memorise brands: the headline video tool eighteen months ago, gone today.
- **Demonstration (8 min)** — One brief — "promote hiking in Dilijan to teenagers" — run through five categories in eight minutes, so the student sees one idea become text, an image, a slide, a clip and a page. This is also the trailer moment for the whole course.
- **Practical (15 min)** — *Build the map.* Sort task cards ("revise for a biology test", "make a logo", "check whether this statistic is real") onto a seven-region board and justify three placements. The ambiguous cards are the point.
- **Challenge (15 min)** — 🧭 **Tool Scout.** Take a tool you have never used and answer five questions in eight minutes: what capability, what does it cost, what age does it require, what does it do with your data, what would you never use it for. Post the answer. The age and data questions quietly teach the safety curriculum.
- **Reflection** — "Which category will you use most? Which *should* you use most?" Rarely the same answer.
- **Workbook** — Start the *Future Self* file: a profession you might enter. Add to it across the course; completed in Lesson 20.
- **Tools** — Perplexity · Canva · ChatGPT (teen) · Console demos
- **Outcome** — 🏅 **Badge: AI Explorer.** The student approaches an unknown tool with questions instead of a login.

---

### Module 2 · Communication — Lessons 5–6

Two lessons, no lists of magic prompts. One framework, taught once, then drilled — plus the habit that separates good users from bad ones: never shipping the first output.

#### Lesson 5 — CRISP: How to Ask
**Big question:** Why does the same question get a brilliant answer from one person and a useless one from another?

- **Objectives** — Apply the five CRISP elements; diagnose which is missing from a failing prompt; understand why examples outperform adjectives.
- **Theory (8 min)** —
  - **C · Context** — who you are, what the situation is
  - **R · Role** — who the AI should be for this task
  - **I · Intent** — what you want *and why*, the part everyone skips
  - **S · Specifics** — examples, constraints, must-haves, must-avoids
  - **P · Presentation** — format, length, tone, audience

  The rule that makes it stick: *vague in, average out.* The model always produces something; the only variable is whether it produces *your* something.
- **Demonstration (7 min)** — One task, four prompts: bare, +Context, +Specifics, full CRISP. Then the trap — a very long prompt that is worse than the medium one, to kill the idea that longer means better.
- **Practical (15 min)** — *Prompt surgery.* Six real, bad prompts. For each: name the missing letter, rewrite, run, compare. Keep the pairs.
- **Challenge (15 min)** — ⚔️ **Prompt Battle.** A brief with a hard, judgeable target: *a 60-word message persuading a 40-year-old shopkeeper in Gyumri to try a new delivery app — must mention cost, must not use the word "revolutionary".* Outputs posted to the group and voted on weekly; winning prompts are published with the prompt shown, not just the result.
- **Reflection** — "Look at last week's winners. What do they share that yours didn't?" Usually a concrete example or a hard constraint — never longer wording.
- **Workbook** — *Three Rewrites*: three prompts you actually used for schoolwork this week, rewritten in CRISP, both outputs logged. Did the better prompt save time or cost time?
- **Tools** — ChatGPT (teen) · Gemini · Microsoft Copilot
- **Outcome** — The student can look at a disappointing output and diagnose their own prompt rather than blaming the tool.

#### Lesson 6 — The Second Draft Rule
**Big question:** What if the first answer is never the answer?

- **Objectives** — Critique output against explicit criteria; give specific correcting instructions; know when to iterate and when to start fresh; ask the model useful questions back.
- **Theory (6 min)** — The **Judge → Push → Keep** loop. *Judge*: score the output against what you actually needed, in writing. *Push*: one specific change per instruction — "cut the second paragraph and replace the statistic with a source" beats "improve it". *Keep*: paste the good parts forward; a chat that has gone wrong is cheaper to restart than to rescue. Plus the underused move — ask the model what it needs from you.
- **Demonstration (8 min)** — A genuinely bad output rescued in four moves, narrated. Then a chat that has gone irrecoverably wrong — looping, apologising, repeating — abandoned and restarted, which students find liberating.
- **Practical (15 min)** — *Four moves.* Improve one weak output in exactly four instructions, recording each. No instruction may contain "better", "nicer" or "more professional".
- **Challenge (15 min)** — ⚔️ **The Rescue.** Provoke the worst output you can, then rescue it. Post **the transcript, not the result** — the group votes on the repair, not the writing.
- **Reflection** — "What did you nearly submit?" Naming the first-draft output you almost accepted does more work than any lecture on over-reliance.
- **Workbook** — The rescue transcript.
- **Tools** — ChatGPT (teen) · Gemini
- **Outcome** — 🏅 **Badge: AI Communicator.** The student has internalised that the first answer is a draft.

---

### Module 3 · Critical thinking — Lessons 7–10

The heart of the programme, and the reason a university should run it rather than a coding school. Four failure modes — it invents, it is skewed, it can fake reality, it remembers what you tell it — all taught as investigations the student runs. **Exam 3 is the heaviest of the seven and carries the most judgement items.**

#### Lesson 7 — The Confidence Trap
**Big question:** Why does it sound most certain exactly when it is wrong?

- **Objectives** — Define hallucination mechanically rather than as "a mistake"; recognise the five red flags; apply Question → Verify → Compare → Decide; state and defend a confidence level.
- **Theory (8 min)** — Hallucination is not malfunction. It is the machine doing exactly what it was built to do — producing the most plausible continuation — in a case where plausible and true came apart. The callback to Lesson 3 lands here.

  **The Red Flag Radar:** very specific numbers with no source · named sources you cannot find · confident answers about very recent events · answers about small local things (an Armenian village, a school, a minor public figure) · anything that flatters your premise.
- **Demonstration (8 min)** — Ask a model for the biography of a plausible-sounding but non-existent Armenian scientist. It obliges, with dates, an institution and a publication list. Then ask for five sources on a real topic and try to open all five, on camera.
- **Practical (12 min)** — The **Q–V–C–D** routine as four physical moves. *Question*: what exactly is being claimed? *Verify*: find it somewhere that is not an AI. *Compare*: does a second independent source agree? *Decide*: confirmed / unconfirmed / false — and say which.
- **Challenge (18 min)** — 🔍 **AI Detective: Case File 01.** A one-page AI-generated article about Armenian history containing **six planted errors** — two fabricated citations, two wrong dates, one invented person, one subtly reversed causal claim. Twelve minutes. Points per catch, **minus points for false accusations.** The penalty matters: without it the lesson collapses into "distrust everything", which is as useless as trusting everything.
- **Reflection** — "Which error survived longest? Why was that one hard?" Almost always the reversed causal claim — the one with no checkable surface. *The dangerous errors are the ones that are not facts.*
- **Workbook** — *Catch One*: provoke a hallucination about something you personally know well — your town, your sport, your family's trade. Transcript plus correction, with a source.
- **Tools** — ChatGPT (teen) · Perplexity · Gemini · a library
- **Outcome** — The student cannot read a fluent AI paragraph without an involuntary check reflex. That reflex is the product.

#### Lesson 8 — Whose Data? Bias and Blind Spots
**Big question:** If it learned from the internet, whose internet was it?

- **Objectives** — Trace a biased output back to a data cause; distinguish bias from error; recognise under-representation of small languages and countries; describe a real-world consequence.
- **Theory (6 min)** — Bias here is a measurement, not an insult: the output distribution does not match the world. Three sources — who is in the data, who wrote the data, who checked the model. The Armenian angle makes it immediate: these models saw vastly more English than Armenian, more Los Angeles than Vanadzor. Not malice — arithmetic. And exactly why students should not accept AI output about their own country uncritically.
- **Demonstration (8 min)** — Generate ten images each for "a doctor", "a nurse", "a scientist", "a village". Count on camera. Then ask a text model to describe a traditional Armenian wedding and read the result out.
- **Practical (15 min)** — *The Bias Audit.* Ten generations on one occupation or place, tabulated. Results pooled into a public class table. Data, not opinion.
- **Challenge (15 min)** — 🌍 **The Armenia Test.** Find the most significant thing an AI gets wrong, thin or stereotyped about Armenia, ranked by *how badly it would mislead a foreigner*. Submissions are collected across all students into a public **EUA Armenia Test** page — genuinely publishable, and strong PR.
- **Reflection** — "If you were the only person who could fix this, what data would you add?" Introduces the idea that they produce the data too — they are the ones writing in Armenian on the internet.
- **Workbook** — *The Missing People*: choose an AI system that makes decisions about people (hiring, loans, admissions, policing). 150 words: who would it serve worst, and why?
- **Tools** — ChatGPT image generation · Adobe Express · Gemini
- **Outcome** — The student can explain bias as a data property with a cause, and has documented a case involving their own country.

#### Lesson 9 — The Reality Test
**Big question:** If you cannot trust your eyes, what can you trust?

- **Objectives** — Identify likely synthetic media; explain why detection-by-eye is a losing long-term strategy; use provenance and context as the primary test; describe personal and civic harms.
- **Theory (8 min)** — Two eras. *Then:* spot the six fingers. *Now:* you cannot, and less so next year. The durable test is not the pixels but **provenance and context** — who published it, where else does it appear, what does it want you to feel, does any non-synthetic record of this event exist? Content credentials explained honestly: helpful, not sufficient. The personal case named without drama: fabricated images of classmates happen in real schools, are a serious harm, and are a crime in many places.
- **Demonstration (8 min)** — Ten images and three clips, some real, some generated. The presenter's own score is shown — and it is not perfect, which is the point.
- **Practical (12 min)** — *Trace it back.* Reverse image search, publication check, cross-reference, on three items. The origin question is answerable far more often than the pixel question.
- **Challenge (15 min)** — 🎭 **Can You Catch the AI?** Round one: score yourself on twenty fresh items. Round two, the one that matters: take one item and build the **case** for real or fake using provenance only, no eyeballing, in 60 seconds of writing. Posted to the group. A correct guess with no case scores below a wrong conclusion with a rigorous method.
- **Reflection** — "Something fake will be shared in your family group chat this month. What will you actually do?" Three sentences. Realistic, not heroic.
- **Workbook** — *The Family Fact-Check*: find one dubious item circulating in a chat you belong to, run the reality test, report what you found and how people reacted when you said so.
- **Tools** — Reverse image search · content credentials viewer · Console video demo
- **Outcome** — The student stops asking "does this look fake?" and starts asking "where did this come from?" — the only question that still works next year.

#### Lesson 10 — Your Data, Your Rights
**Big question:** What happens to what you type after you press send?

- **Objectives** — State what never goes into an AI tool; read the relevant part of a privacy policy without reading all of it; explain who owns AI-generated work; understand consent, including that under 16 in Armenia theirs is not sufficient alone.
- **Theory (8 min)** — **The Never List:** identity documents, addresses, phone numbers, financial details, health information, other people's private information, anything about a classmate, passwords, and anything you would not want read aloud to your class. Then **copyright in three honest parts**: models were trained on work made by people; most jurisdictions do not grant copyright to purely machine-generated output; using someone's style is legally murky but ethically checkable. Then **consent**: Armenian law sets the threshold at 16 — which is why a guardian's email was required at enrolment. Not a technicality; an actual right they hold.
- **Demonstration (8 min)** — The settings pages of two tools students actually use, showing exactly where training-on-your-data is switched off and where chat history is deleted. Three minutes, entirely practical, and the single most-thanked segment by parents.
- **Practical (12 min)** — *The Data Audit.* Go back through your own chat history from the course so far and flag anything you should not have typed. Private. Most students find something. Then change one setting.
- **Challenge (15 min)** — ⚖️ **The Dilemma Deck.** Six cards, each a real situation with no clean answer: *you used AI to write a friend's application; you generated an image in a living artist's style and sold it; a classmate's face appears in a meme you made; you fed a group project's private data to a chatbot.* Take a position in the group, then argue the opposite. Judged on reasoning, not verdict.
- **Reflection** — "Which dilemma did you change your mind on?" Changing your mind is scored as a win, explicitly.
- **Workbook** — *The Settings Sweep*: audit every AI tool you use, screenshot each setting before and after, and write one paragraph for a parent explaining what you changed.
- **Tools** — The tools' own settings pages · printed dilemma cards in the workbook
- **Outcome** — 🏅 **Badge: AI Detective.** The student is now harder to fool than most adults they know.

---

### Module 4 · Learning — Lessons 11–12

Two lessons on the use case that is already happening every night whether the programme addresses it or not. The stance is not "don't" — it is "here is how to do it so that you get smarter instead of hollower", and a line the student draws themselves.

#### Lesson 11 — The Tutor in Your Pocket
**Big question:** Can a machine that does not understand anything help you understand something?

- **Objectives** — Run five study techniques with AI; distinguish AI-as-tutor from AI-as-answer-machine; test your own understanding without the AI present.
- **Theory (6 min)** — The distinction that decides everything: **a tutor asks you questions; an answer machine hands you conclusions.** The same tool does both — the difference is entirely in what you asked for. Five moves: *"Explain it three ways: to a child, to me, to an expert." · "Quiz me and do not give me the answers." · "I think X — tell me where my reasoning breaks." · "Make 15 flashcards from this chapter." · "Talk to me in English about football and correct me at the end."*
- **Demonstration (8 min)** — The presenter is tutored, live, on something they genuinely do not know, and gets a question wrong on purpose to show what a good tutor prompt does next. Then the same topic answer-machine style: thirty seconds, nothing learned.
- **Practical (15 min)** — *Tutor me.* A real topic you are currently struggling with at school. You must be asked at least six questions before you receive any explanation.
- **Challenge (15 min)** — 🧠 **The Closed-Book Challenge.** Twenty minutes with AI on a topic you have never met — then devices away, and explain it out loud to someone in your house for two minutes, unaided. They score your clarity. What is measured is what survived without the machine, which is the only thing that was ever learning.
- **Reflection** — "What did you think you understood until you had to say it out loud?" Names the illusion of fluency directly — the specific danger of learning from something that always sounds clear.
- **Workbook** — *One Real Topic*: use the tutor method on something you are genuinely behind on. Log the session. After your next test on it, report honestly whether it helped.
- **Tools** — ChatGPT (teen) Study Mode · Gemini · NotebookLM
- **Outcome** — The student has felt the difference between being handed an answer and being taught, in the same lesson.

#### Lesson 12 — Research and the Line You Won't Cross
**Big question:** Where exactly does help stop and cheating start?

- **Objectives** — Use a grounded research tool and check its citations; recognise a fabricated source; write an AI-use disclosure; define and sign a personal integrity line.
- **Theory (8 min)** — Two kinds of AI research: *ungrounded* (a chatbot recalling), which invents sources, and *grounded* (search-based, or reading documents you supplied), which mostly does not — but still misreads them. The professional norm, taught as a norm rather than a rule: **you disclose what the AI did.** Then the integrity spectrum, drawn as a line: "AI explained a concept to me" → "AI made my flashcards" → "AI outlined my essay" → "AI wrote a paragraph I edited" → "AI wrote it and I submitted it."
- **Demonstration (8 min)** — NotebookLM loaded with three real documents, answering with citations that can be clicked and checked. Immediately contrasted with a chatbot asked for sources on the same question, producing three plausible references, two of which do not exist. Same question, four minutes, unforgettable.
- **Practical (12 min)** — *Source hunt.* Research a real question with a grounded tool, then physically open every source cited. Any that fails is a finding you report.
- **Challenge (15 min)** — 📜 **Write the Rules.** Draft the AI policy you think your school should apply to *you* — what is allowed, what must be disclosed, what is forbidden, what the consequence is. Posted to the group; the best clauses are merged into a published **EUA Student AI Charter**, which every student is then invited to sign. Rules they wrote are rules they keep; rules handed down are rules they route around.
- **Reflection** — "Which clause was hardest to agree on?" It is always the essay-outlining one, and that is worth twenty minutes of a teenager's life.
- **Workbook** — The signed charter, and the source hunt log.
- **Tools** — NotebookLM · Perplexity · Google Scholar
- **Outcome** — 🏅 **Badge: AI Scholar.** The student has a line they can articulate, because they drew it.

---

### Module 5 · Creation — Lessons 13–15

Three lessons in which every student makes four finished things. Compressed from the brief: audio, music and voice share Lesson 14 rather than owning a lesson each, and presentation craft is folded into Lesson 15 where it belongs — attached to something worth presenting.

#### Lesson 13 — Seeing Ideas
**Big question:** Can you describe a picture precisely enough for a machine to draw it?

- **Objectives** — Control an image model through subject, composition, style, light and constraint; iterate toward an intent; know the copyright and style-imitation boundaries; assemble a generated image into a finished designed piece.
- **Theory (6 min)** — Image prompting is a different language from text prompting: models respond to **nouns and visual grammar**, not to reasoning. The five dials — *subject, composition, style, light, medium.* What these models are still bad at: text inside images, precise counts, specific real places, hands, and anything requiring understanding rather than resemblance. The ethical line stated plainly: imitating a genre is fine; imitating a living named artist in order to replace them is not.
- **Demonstration (8 min)** — One idea — "a poster for a student climate march in Yerevan" — through six iterations, narrating each dial change. Then a deliberate failure: ask for readable Armenian text inside the image.
- **Practical (15 min)** — *Five dials.* Generate the same subject five times, changing exactly one dial each time. Keep all five. Take the best into Canva or Adobe Express and add real text, because the model cannot.
- **Challenge (15 min)** — 🎨 **Design the Future.** A card — *Yerevan 2075 · a school with no classrooms · a village that runs on sunlight · the Armenian alphabet redesigned* — and fifteen minutes to produce one finished visual with a title and a one-sentence concept. Posted to the gallery; the group votes on two separate axes, **most beautiful** and **most interesting idea.** They are rarely the same piece, and the discussion about why is the actual lesson.
- **Reflection** — "Which of your five versions was closest to what was in your head, and what did you have to say to get there?"
- **Workbook** — The five-dial set plus the finished designed piece.
- **Tools** — ChatGPT image generation · Adobe Express / Firefly · Canva · Console: Midjourney comparison
- **Outcome** — A finished, designed visual artefact, and the ability to say what was changed to get it.

#### Lesson 14 — Worlds, Words and Voices
**Big question:** If the machine can write the story, what is left for you?

- **Objectives** — Use AI as a collaborator rather than a ghostwriter; build a coherent world across several turns; produce audio using generated music and sound; understand voice cloning and why it is the most dangerous consumer AI capability.
- **Theory (8 min)** — The honest answer: **taste, structure, and the decision about what matters.** Three collaborative moves — *AI as generator* (twenty options, you choose one), *AI as opponent* ("argue against my ending"), *AI as continuity checker* ("what have I contradicted?"). Then audio: music generation, sound design, and voice — where a thirty-second sample now reproduces a person. The scam angle is taught directly, because Armenian families are targeted by voice scams, and a fifteen-year-old warning their grandmother is a real outcome of this lesson.
- **Demonstration (8 min)** — A world built live in six turns — place, rule, conflict, character, voice, scene — with most of what comes back visibly rejected. Then, on the Instructor Console only: a voice model reading a line in the presenter's own cloned voice, and a generated song from a one-line prompt. The voice demo is the moment of the lesson; it happens once, is discussed, and is not repeated.
- **Practical (15 min)** — *Ten options, one choice.* Ask for ten variations on a story opening, choose one, then write the next paragraph yourself, unaided. Both paragraphs go in the Workbook side by side. Nobody is graded on which is better; the question is which was harder, and why.
- **Challenge (15 min)** — 🌍 **The 90-Second World.** Build a fictional world with one non-negotiable rule that makes it different from ours, then produce a 90-second audio piece — narration in your own voice, AI-generated music and ambience underneath. Judged on idea and sound design, not vocal performance. **No synthetic voices in student work, by policy.**
- **Reflection** — "You just heard a voice say something that person never said. Who else could do that, and what would they use it for?" Then, concretely: the family code word.
- **Workbook** — *The Grandparent Briefing*: explain voice cloning to an older relative and agree a family verification word. Report how the conversation went. **The highest parent-satisfaction assignment in the programme.**
- **Tools** — Suno · phone voice recorder · Canva audio · Console only: ElevenLabs (18+)
- **Outcome** — An audio piece made, and someone in their family protected from a scam class they did not know existed.

#### Lesson 15 — Motion and Message
**Big question:** How do you make people care about your idea in sixty seconds?

- **Objectives** — Storyboard before generating; produce a short video mixing AI-generated and self-shot material; build a presentation whose structure carries an argument; present without reading.
- **Theory (8 min)** — Video models generate *shots*, not *films*. Anything watchable is storyboarded first, which means the scarce skill is still the sequence, not the pixels. Then presentation as argument: **Problem → Evidence → Idea → Proof → Ask.** Five slides, one idea each, and the rule that governs Demo Days: *if the slide says it, you do not read it.*
- **Demonstration (8 min)** — A six-panel storyboard drawn by hand in two minutes, then the same six shots generated and cut together, so the student sees how much of the work happened before any tool opened. Then a deck built in ninety seconds by an AI presentation tool — and immediately critiqued for being generic, which is the honest verdict on most of them.
- **Practical (15 min)** — *Six panels.* Storyboard on paper — six boxes, stick figures, no tools. Then produce the first two shots and a five-slide skeleton.
- **Challenge (15 min)** — 🎬 **60-Second Armenia.** A 60-second piece selling one real Armenian place, craft or story to a foreign teenager. Mixed media encouraged — phone footage, generated shots, stills, your own narration. Screened monthly at Demo Day; the best pieces become EUA's social content, with permission, which turns the exercise into recruitment material students are proud of.
- **Reflection** — "Which shot did you have to make yourself, because no model could give it to you?" Almost always the specific, local, real one — a quiet argument about where human value sits.
- **Workbook** — The storyboard, the 60-second piece, the five-slide skeleton.
- **Tools** — Canva · Runway · CapCut or a phone editor · Gamma (16+ only) · Console: Veo, Kling (18+)
- **Outcome** — 🏅 **Badge: AI Creator.** Four finished artefacts — image, written piece, audio, video — plus a deck skeleton. The student has a portfolio.

---

### Module 6 · Building — Lessons 16–18

The module that surprises them. Three lessons from "I can't code" to a published, working thing with a URL they can send to their mother. The focus is the cycle — idea, describe, build, test, improve — never syntax.

#### Lesson 16 — Data Detective
**Big question:** What does a spreadsheet know that nobody has asked it?

- **Objectives** — Load a real dataset into an AI tool and interrogate it; produce a chart that answers a question; distinguish a finding from a coincidence; check the AI's arithmetic.
- **Theory (6 min)** — Three questions you can ask any dataset: *what is typical, what is unusual, what changed?* Correlation and causation in ninety seconds with one deliberately absurd real example. Then the warning that matters: **an AI will confidently compute a wrong number from a column it misread.** Always ask it to show the rows behind the answer.
- **Demonstration (8 min)** — A real open dataset — Armenian regional statistics — analysed in four questions, including one where the presenter catches the model misreading a column and says so out loud.
- **Practical (15 min)** — *Three questions, one chart.* Take a dataset connected to something you care about, ask three questions, produce one chart, write the one sentence the chart proves. Then verify one number by hand.
- **Challenge (15 min)** — 📊 **The Buried Story.** Everyone gets the same public dataset and twelve minutes to find the most interesting true thing in it, posted as one chart and one sentence. Monthly winners are **audited live at Demo Day**, which teaches more about data honesty than an hour of theory.
- **Reflection** — "Did the data change what you believed before you looked?"
- **Workbook** — The chart, the claim, the hand-verified number.
- **Tools** — ChatGPT data analysis · Google Sheets + Gemini · Armstat open data
- **Outcome** — 🏅 **Badge: AI Analyst.** The student can make a defensible claim from data and check the machine's arithmetic.

#### Lesson 17 — Build Without Code I
**Big question:** What if the only skill you need is describing what you want?

- **Objectives** — Specify a small digital product precisely; generate a working first version; read code well enough to locate a section; make a targeted change and see it happen.
- **Theory (6 min)** — The cycle: **Idea → Describe → Build → Test → Improve**, and the fact that describing is the hard part. A beginner's specification is four lines: *what it does, who uses it, what they see, what happens when they click.* Code is introduced not as something to learn but as something to *navigate* — you need to find the bit that sets the colour, not understand the language.
- **Demonstration (8 min)** — A working quiz app built from a four-line description in six minutes, then deliberately broken, then fixed by describing the symptom rather than the solution — the technique students most need to see.
- **Practical (18 min)** — *Your first build.* Choose from a menu — study planner, flashcard app, quiz, unit converter, personal page, tiny game — and get a first working version. It must run before the lesson ends, however ugly.
- **Challenge (15 min)** — 🚀 **Build in 20.** A surprise brief with a hard stop at twenty minutes: *"a tool that helps a student decide what to revise tonight."* Anything that runs counts. Post the link. The pace is the point — it kills perfectionism.
- **Reflection** — "What did you ask for that you did not get?" The gap between the description and the result is the whole skill.
- **Workbook** — The build link and the four-line spec.
- **Tools** — Replit (13+, consent) · ChatGPT Canvas · Scratch · Console: Cursor (18+)
- **Outcome** — The student has built a working piece of software. For many, this is where the course becomes personal.

#### Lesson 18 — Build Without Code II — Test, Break, Ship
**Big question:** Does it work, or does it only work for you?

- **Objectives** — Test a build against a real user; describe a bug precisely enough to get it fixed; improve based on observed failure rather than opinion; publish and share a working link.
- **Theory (6 min)** — Two ideas. **A good bug report** — what I did, what I expected, what happened — which is also how you talk to an AI about a broken build, and how you will talk to any engineer for the rest of your life. And **the builder's blindness**: you cannot test your own thing, because you know where not to click.
- **Demonstration (8 min)** — The Lesson 17 quiz app handed to someone else, who breaks it in ninety seconds. They always succeed. Then a proper bug report written on screen and fixed in two turns.
- **Practical (15 min)** — *Find a tester.* Hand your build to one real person — a sibling, a friend, a parent — and watch without helping. Log every failure as a proper bug report. Then fix the top two. Then publish.
- **Challenge (15 min)** — 💡 **The Ship-It Wall.** Every working link goes on a shared board. Try three others, leave one specific piece of feedback and one thing you liked on each. The wall is shown at Demo Day.
- **Reflection** — "What broke that you were sure would work?" Followed by the honest count: how many of the AI's suggested fixes worked first time? The realistic answer, roughly half, is itself a lesson about AI-assisted engineering.
- **Workbook** — The published link, the bug log, and the fix driven by someone else's failure.
- **Tools** — Replit · GitHub (13+) · Canva Sites
- **Outcome** — 🏅 **Badge: AI Builder.** A published link, a bug log, and a fix made because a real person failed.

---

### Module 7 · What next — Lessons 19–20

Two lessons that take everything above and point it forward. With the capstone removed, Lesson 20 is no longer a squeeze — careers gets the full hour it always deserved.

#### Lesson 19 — From Chatbot to Agent
**Big question:** What happens when AI stops answering and starts doing?

- **Objectives** — Distinguish assistant from agent; design an Input → AI → Decision → Action workflow; identify where an agent must ask a human first.
- **Theory (8 min)** — **An assistant answers. An agent acts.** The difference is permissions: an agent has tools, memory and the ability to take steps you did not individually approve — exactly what makes it useful and exactly what makes it dangerous. The shape on the board: *Trigger → AI decides → Action → Human check.* The last box is not optional, and where you place it is the judgement being taught.
- **Demonstration (8 min)** — A live automation on EUA's own n8n instance: a form arrives, an AI classifies it, it is routed and answered — the whole chain visible. Then the human-check step is removed, and a wrong classification runs downstream. Four minutes; nothing else in the lesson teaches as much.
- **Practical (15 min)** — *Design one workflow.* On paper, design an agent that would genuinely help your school. Mark where a human approves, what happens when the AI is wrong, and what it must never be allowed to do alone.
- **Challenge (15 min)** — 🤖 **The Runaway.** Take someone else's posted workflow and find the step where, if the AI were wrong, nobody would notice until it was too late. Post the failure scenario. Points for the most plausible disaster.
- **Reflection** — 🧠 **Human vs AI, Round Two.** The Lesson 1 scoreboard comes back out and is re-run — but now the student writes the questions. They design them to expose weaknesses, which is the whole distance travelled in one exercise.
- **Workbook** — The workflow diagram with the human-check step marked.
- **Tools** — EUA-hosted n8n (no student accounts) · ChatGPT (teen) · Console: Zapier, Make
- **Outcome** — The student understands AI as a component in a system with a human in it.

#### Lesson 20 — AI and Your Future
**Big question:** What is this going to do to the life you were planning?

- **Objectives** — Describe how AI is changing a specific profession; distinguish tasks at risk from capacities that are not; identify what to learn next; place themselves on the ladder beyond this course.
- **Theory (8 min)** — The honest version, without either the panic or the sales pitch. AI changes **tasks**, not whole professions, and it changes them unevenly: a radiologist's image reading and a lawyer's document review moved fast; a nurse's hands, a teacher's judgement of a particular child, a plumber's diagnosis in an actual basement did not. The question is never "will AI take this job" but "which parts of this job, and what is left." Then the capacities that keep appearing on the surviving side: judgement, communication, taste, responsibility, and knowing what is worth building.
- **Demonstration (8 min)** — Three professions taken apart on screen — medicine, law, design — task by task, with the presenter marking each as *already automated / partly assisted / stubbornly human*, and getting one of them visibly wrong and correcting themselves.
- **Practical (15 min)** — *Future Self, completed.* The file opened in Lesson 4 is finished: your profession, its tasks broken into those three categories, three findings from real research, and one worry. Grounded research tools only — every claim needs a source you can open, which is Lesson 12 applied to something that matters to you.
- **Challenge (15 min)** — 💼 **The Job That Doesn't Exist Yet.** Invent a plausible profession for 2040 and write its job advert — responsibilities, required skills, what an AI does in this role and what the human is there for. Posted to the group. The best are read aloud at Demo Day.
- **Reflection** — Two questions, written and kept: *"Three months ago I thought AI was ___. Now I think it is ___."* and *"The thing I want to build next is ___."* These are also, with permission, the testimonials for the next intake.
- **Workbook** — The completed Future Self file and the 2040 job advert.
- **Tools** — Perplexity · NotebookLM · ChatGPT (teen)
- **Outcome** — 🏅 **Badge: AI Problem Solver.** A student who can say: *"I understand AI. I know how to use it. I know when not to trust it. And I have ideas about what I can build next."*

---

## 8. The AI tools map

Organised by capability first, because brands die. Then tiered by how students actually touch them — which, for minors, is a legal question before it is a pedagogical one.

### The seven capabilities

| Capability | What it does | Reach for it when… | Its real limitation | Learn deeply |
|---|---|---|---|---|
| **Converse** | Generates and transforms text, reasons over what you give it | You need thinking-shaped help: explaining, drafting, planning, critiquing | Fluent about things it does not know; no memory of truth | **One** assistant, thoroughly |
| **Research** | Answers grounded in retrieved sources or documents you supply | You need facts you can check and cite | Retrieves the findable, misreads the subtle, summarises away nuance | Perplexity *and* NotebookLM — different jobs |
| **Depict** | Makes and edits images from description | You need a picture that does not exist | Text in images, exact counts, real places, anything needing understanding | One image tool + one design tool |
| **Compose** | Generates music, sound and speech | You need a soundtrack, an effect, or narration | Voice cloning is a weapon; output is generic without direction | Demo-level only at this age |
| **Move** | Generates and edits video | You need a shot you cannot film | Produces shots, not stories; expensive; consistency is hard | Demo + one accessible editor |
| **Present** | Turns content into slides, sites and documents | You have the argument and need the artefact | Beautiful and generic by default; will not find your idea for you | Canva, deeply |
| **Build & Automate** | Writes and runs code; chains steps into workflows and agents | You want a working thing, or a task to happen without you | Confidently wrong code; agents fail silently and at scale | Replit, deeply |

### Tier 1 · Essential — students use these directly

Age-viable at 13+ with guardian consent, usable free tier, reachable from Armenia. These are the tools the videos teach step by step.

| Tool | Capability | Min age | Consent | Used in |
|---|---|---|---|---|
| ChatGPT (teen experience) | Converse, Depict, Analyse | 13 | Yes, under 18 | Throughout |
| Google Gemini | Converse, compare | 13 | Institutional if via EUA Workspace | 3, 5, 8, 11, 16 |
| NotebookLM | Research on your own documents | 13 | Institutional | 11, 12, 20 |
| Perplexity | Grounded research | 13 | Yes — parent accepts terms | 4, 7, 12, 20 |
| Teachable Machine | Train a model | — | No account required | 2 |
| Canva | Design, present, video, audio | 13 | Yes | 13, 14, 15, 18 |
| Adobe Express / Firefly | Depict, design | 13 | Yes · Adobe models only | 8, 13 |
| Replit | Build | 13 | Yes | 17, 18 |
| Suno | Compose | 13 | Yes | 14 |
| Runway | Move | 13 | Yes | 15 |

### Tier 2 · Recommended — used once or optionally

| Tool | Why it earns a place | The catch |
|---|---|---|
| Microsoft Copilot | Free, Office-integrated, a second voice to compare against | 13+, but Armenian availability is not published — **test before including** |
| GitHub + Copilot Free | 13+, real developer tooling, free tier | Steep for this age; offer, do not impose |
| Scratch / ML for Kids | Zero-friction entry for the least confident | Reads as young to a 16-year-old |
| Gamma | Fastest route from outline to deck | **16+** — excludes the younger half; Console demo only |
| Google Sheets + Gemini | Data analysis where the data already lives | Requires EUA Workspace accounts |

### Tier 3 · Instructor Console — demonstration only, never a student account

The principle: **students see every capability; students create accounts only where they legally can.** These run on the presenter's machine, on camera, with the presenter's adult account. Students lose nothing pedagogically — they were never going to master a video model in ten minutes — and EUA takes on no compliance risk.

| Tool | Restriction | Demonstrated in |
|---|---|---|
| Claude | 18+, no consent path | Lesson 3 — model comparison |
| ElevenLabs | 18+ | Lesson 14 — the voice-cloning moment |
| Google Flow / Veo | 18+ | Lesson 15 — state of the art in video |
| Cursor | 18+ | Lesson 17 — professional AI coding |
| Midjourney | 13+ but no free tier | Lesson 13 — image quality comparison |
| Kling | 13+ with consent, data-transfer questions | Lesson 15 — optional |
| Zapier / Make | Contract capacity required | Lesson 19 — commercial automation |
| **n8n (EUA-hosted)** | Self-hosted on university infrastructure | Lesson 19 — **the best option: no accounts, no terms problem, EUA controls the data** |

**Removed from the brief:** Sora — discontinued, offline since April 2026. It appears in Lesson 4 as the worked example of tool churn, which is the only honest place for it.

### Keeping the map alive

This map will be wrong within six months. Build that in:

- **The map is a living page, not a page in the syllabus.** One URL, versioned, dated, reviewed quarterly by a named owner. Videos reference "the tool map" rather than tool names wherever possible.
- **Tool demos are shot separately from concept segments** so an obsolete demo is re-recorded in an afternoon. Section 14.
- **Two published entry criteria:** a tool enters Tier 1 only if it is age-viable at 13 with consent and has a free tier that survives real use. Everything else is Console.

---

## 9. Project library — 24 briefs

All real, Armenian-relevant where it helps, each naming the capability rather than the tool. In the self-paced model these are the **optional extension projects** — offered after Lesson 18, showcased at Demo Days, and the natural answer to "I finished, what now?"

### Student life
1. **Revision Router** — a tool that asks four questions and says what to revise tonight and for how long. *Build, Converse*
2. **The Honest Study Buddy** — a tutor prompt-pack for one school subject, tested on five classmates. *Converse*
3. **Exam Anxiety Guide** — a short, accurate, non-preachy resource for peers, fact-checked with a teacher. *Research, Present*
4. **Timetable Untangler** — an app that finds clashes and free-time gaps across a group's schedules. *Build*
5. **The New Student Kit** — everything you wish you had known in week one, as a site. *Present, Build*

### Armenia, culture and heritage
6. **60-Second Armenia** — a short film selling one real place or craft to a foreign teenager. *Move, Compose*
7. **The Armenia Test** — document what AI models get wrong about Armenia, and publish it. *Research, Analyse*
8. **Grandmother's Recipe Archive** — record, translate and illustrate family recipes before they are lost. *Converse, Depict*
9. **Khachkar Explainer** — an interactive page teaching a foreigner to read a khachkar. *Build, Depict*
10. **Dialect Rescue** — collect words your grandparents use that you do not. *Research, Analyse*
11. **Tourist Trap Map** — the honest guide to your town: what is worth it, what is not. *Present, Research*

### Community and environment
12. **The Bin Audit** — count what your school throws away for a week, analyse it, propose one change. *Analyse, Present*
13. **Air I Breathe** — analyse public air-quality data for your district; make one chart that changes minds. *Analyse, Depict*
14. **Accessibility Walk** — photograph a 500-metre route as a wheelchair user experiences it; produce the report. *Research, Present*
15. **The Scam Shield** — a one-page guide for older relatives on AI voice and image scams, in Armenian. *Present, Converse*
16. **Neighbourhood Noticeboard** — a site that tells your street what is happening this week. *Build, Automate*

### Ideas, business and imagination
17. **Startup in a Day** — a real problem, a product concept, a landing page and a three-minute pitch. *All*
18. **Design the Future** — Yerevan 2075 as a set of images with a coherent argument behind them. *Depict*
19. **Product Rescue** — take a badly designed everyday object and redesign it, with reasons. *Depict, Present*
20. **The Job That Doesn't Exist Yet** — invent a plausible 2040 profession and write its job advert. *Converse, Present*
21. **Rules for Robots** — write the AI policy your school should adopt, and present it to a teacher. *Research, Present*

### Play and craft
22. **Choose Your Own Armenia** — an interactive story where the choices teach real history. *Build, Converse*
23. **Tiny Game** — one mechanic, one screen, playable in 30 seconds. *Build*
24. **The Impossible Photograph** — an image of something that could not be photographed, with the prompt evolution shown. *Depict*

**Selection rule for a Demo Day slot:** the student can name **a real person, who is not them, who would use it.** That single filter removes most artificial school-project ideas without anyone having to reject anything.

---

## 10. Challenges and badges

Every lesson carries one challenge. Eight of them are badge gates. The system exists to do the thing a video cannot: make the programme's values visible in what actually gets rewarded.

### Nine challenge types

| Type | Shape | What it rewards | Appears in |
|---|---|---|---|
| 🧠 **Human vs AI** | Timed head-to-head against a model | Knowing where each side is strong | 1, 19 |
| 🎯 **Sabotage** | Break a system on purpose | Adversarial thinking | 2, 18, 19 |
| 🔬 **Experiment** | Controlled comparison, one variable | Method over opinion | 3, 13 |
| 🧭 **Scout** | Evaluate something unknown against a checklist | Transferable judgement | 4 |
| ⚔️ **Prompt Battle** | Competitive, posted, peer-voted | Precision and iteration | 5, 6 |
| 🔍 **Detective** | Find the planted errors; penalties for false accusations | Calibrated scepticism | 7, 8, 9 |
| ⚖️ **Dilemma** | Argue a position, then argue the opposite | Reasoning over verdicts | 10, 12 |
| 🎨 **Creator** | Make a finished thing under time pressure | Taste and finishing | 13, 14, 15 |
| 🚀 **Build Sprint** | Working artefact in twenty minutes | Shipping over perfecting | 16, 17, 18 |

### Three scoring rules that make the values real

1. **Reasoning outscores results.** In Detective and Reality Test challenges, a wrong conclusion with a rigorous method beats a lucky guess. Stated before the challenge; visible in how winners are chosen.
2. **False accusations cost points.** Without this, Detective challenges teach blanket cynicism, which is as useless as blanket trust and much harder to unlearn.
3. **Transcripts are half the marks in Prompt Battles.** A great result from one lucky shot scores below a good result from four deliberate moves.

### How challenges work without a classroom

This is the hardest thing to port from v1.0, and it needs to be designed rather than hoped for.

- **Posting is to the Telegram group**, in weekly threads pinned by a moderator — one thread per challenge, running continuously rather than per cohort.
- **Voting is weekly, not live.** A moderator posts the shortlist each Friday; the group votes; winners are named and the winning *method* is explained, not just displayed.
- **The monthly Demo Day is the final** for whichever challenges produced something worth showing — 60-Second Armenia, Design the Future, The Buried Story, the Ship-It Wall.
- **Nothing is gated on participation.** A student who never posts still completes the course and still earns badges through the exams. The social layer is an amplifier, not a requirement — because in an open enrolment most students will never post, and a design that assumes otherwise will fail most of its students.

### The eight badges

| Badge | Awarded at | On what evidence |
|---|---|---|
| **AI Explorer** | Module 1 | Exam 1 passed; tool map in the Workbook |
| **AI Communicator** | Module 2 | Exam 2 passed; three before/after prompt pairs |
| **AI Detective** | Module 3 | Exam 3 passed; one Armenia Test finding submitted |
| **AI Scholar** | Module 4 | Exam 4 passed; integrity charter signed |
| **AI Creator** | Module 5 | Exam 5 passed; four artefacts logged |
| **AI Analyst** | Module 6 | Exam 6 passed; a chart, a claim, a hand-verified number |
| **AI Builder** | Module 6 | Exam 6 passed; a published link and a bug log |
| **AI Problem Solver** | Module 7 | Exam 7 passed; the Future Self file completed |

Badges are **cumulative, not competitive** — every student can earn all eight. Competition lives inside the challenges, where losing costs nothing.

**The honesty problem, stated plainly.** In the self-paced model the exam half of each badge is verified and the Workbook half is self-reported. Two options, and EUA should choose deliberately:

- **(a) Badges on exams alone.** Fully verifiable, weaker signal, simplest to administer. *Recommended for launch.*
- **(b) Badges on exam plus submitted artefact**, spot-checked by a moderator on a sample. Stronger signal, real staffing cost, and unfair unless the sampling is consistent.

Whichever is chosen, the badge page should say which it is. A badge whose criteria are vague is a sticker.

Two rare honours sit above the set: **First Catch**, to the first student each month to find a hallucination the course did not plant, and **Changed My Mind**, voted by peers in the Dilemma threads.

---

## 11. Exams and certification

### The shape

Seven exams, one after each module. Fifteen minutes, 10–15 questions, pass at 70%, two retakes with no penalty. **Optional throughout** — a student can complete the whole course without sitting one.

| | |
|---|---|
| **When** | Unlocked as soon as that module's lessons are marked complete |
| **Length** | 15 minutes, 10–15 questions |
| **Pass mark** | 70% |
| **Retakes** | Two, no penalty, questions redrawn from the bank |
| **Blocking** | None — a failed exam blocks nothing; the next module opens anyway |
| **Weighting** | Exam 3 (critical thinking) is the longest and carries the most judgement items |

### Why optional, and why that is a feature

An exam a student chooses to sit measures learning. One they are forced to sit largely measures nerves — and in an open, free, self-paced course, a compulsory exam is simply a place where most students stop. Keeping them optional costs the programme very little and gains it the students who would otherwise have quit at Module 2. It is also a good line in the parent FAQ.

If EUA needs them compulsory for accreditation, that is a one-line change on the page and a real change in character. Have the argument before launch, not after.

### Question design — where the philosophy survives

This is the most important paragraph in the document. In v1.0, an instructor read transcripts and marked judgement above output. The exams are the only surviving mechanism for that, so they have to be written for it deliberately.

**Every exam is half recall, half judgement.**

- **Recall items** (5–7 per exam) check the mechanism: *what does a model store after training? · which of these is a sign of a fabricated source?*
- **Judgement items** (5–8 per exam) present **real AI output** — a paragraph, a chart, a cited claim, a generated image, a snippet of code — and ask what the student would do with it. Options always include a plausible-looking "use it as it is", which never scores. Correct answers are the ones that check, question, or narrow.

Judgement items should be built from the **Cohort Corpus** (Section 19) — real hallucinations, real Armenia Test findings, real bias audits submitted by earlier students. That makes them locally true, hard to game, and cheap to refresh.

**Three anti-gaming measures**, none of them heavy:

1. A question bank of at least 40 items per exam, with 12 drawn at random.
2. Judgement items rotated quarterly from the corpus.
3. No proctoring, and no pretence of it. This is a free public course; a student who cheats an optional exam has wasted their own afternoon. Say so and move on.

### Three certificate levels

| | **Level 1 — Certificate of Completion** | **Level 2 — Certified AI Explorer** | **Level 3 — Certified with Distinction** |
|---|---|---|---|
| Lessons | All 20 completed | All 20 completed | All 20 completed |
| Workbook | Missions done and logged | Missions done and logged | Missions done and logged |
| Exams | **None required** | All seven passed at 70%+ | 90% average across the seven |
| Extra | No deadline — finish in your own time | All eight badges; named on the EUA showcase | Invitation to show your work at a Demo Day; priority place on the next programme |
| Verified by EUA? | No — self-reported | **Yes** | **Yes** |

The line between Level 1 and Level 2 is exactly the line between what EUA can verify and what it cannot. Drawing it there rather than blurring it is what makes the credential worth anything.

### The certificate itself

Issued by the **Faculty of Artificial Intelligence**, Armenian and English on one sheet, with a permanent verification URL and the eight digital badges — each linking to the criteria and, where the badge is exam-verified, to the exam record. **A certificate nobody can check is decoration.**

Issue badges in an **Open Badges-compatible format** so the metadata travels: what was earned, on what evidence, issued by whom, when. Design them as a set that visibly continues, so a graduate can see there are Student, Educator and Public Service tiers above — the badge wall is a retention mechanism as much as a recognition one.

### Measuring the programme, not just the student

Run a **20-item pre/post instrument** — a short check at enrolment and the same one after Lesson 20. Half conceptual, half judgement. Same instrument for every student, forever.

Two reasons this matters more than it looks:

- It gives EUA a **publishable result**. Comparable teen AI programmes report teacher-satisfaction surveys; almost none report pre/post gains. That is a low bar and a real contribution — and exactly the kind of output that supports grant applications and faculty credibility.
- It tells you which lessons are not working, which is the only way this curriculum improves. In a self-paced course, **drop-off data does the same job an instructor's eyes used to do**: the lesson where 40% of students stop is the lesson that is wrong.

Add a **six-month follow-up** of ten questions: are they still using AI differently, did they enter another programme, did anything they built survive. Cheap, and the answers are next year's marketing copy.

---

## 12. EUA AI Demo Days

A **separate monthly public event**, not the final lesson. Open to everyone who has passed any of the four programmes. Free, families welcome, held at the university.

This is the live, human half of a course that is otherwise entirely recorded — and it is what stops the programme being just another video library.

### The evening

| Time | What happens |
|---|---|
| **18:00** | Doors open; anyone bringing something sets up |
| **18:15** | **Show & tell** — three minutes each, whatever you built with what you learned |
| **18:45** | **Open Q&A** — the part everyone comes for. Any question about AI, put to the faculty and a guest practitioner. Nothing submitted in advance |
| **19:30** | **Small groups** — sit with an instructor and go deeper on one thing |
| **19:45** | Certificates handed over in person; coffee; people staying too long |

**Cadence:** last Thursday of the month. Fixed, published a year ahead, and never moved — a monthly event that slips twice stops being a fixture.

### What each slot is for

- **Show & tell** replaces the capstone. It is voluntary, it has no marking, and it is the only place a student's work is seen by strangers. Three minutes and a hard timer.
- **Open Q&A** is the reason this event exists and should be protected accordingly. No submitted questions, no slides, no panel introductions longer than a sentence. If it starts becoming a lecture, it has failed.
- **Small groups** are where the students who would never speak in a room of eighty actually ask their question.
- **Certificates in person** is the only ceremony the programme has. Use it.

### Monthly rotation of challenge finals

Each Demo Day hosts one challenge final, rotating so the same students are not always on stage: 60-Second Armenia · Design the Future · The Buried Story (audited live) · The Ship-It Wall · The Job That Doesn't Exist Yet · Prompt Battle grand final.

### Why this is worth the staffing

Demo Day is simultaneously the community event, the graduation, the parent reassurance, the marketing asset and the recruitment engine. In a free self-paced course with no other live contact, it is also the **single strongest completion driver available** — a dated, social, public reason to finish. Budget it as the most important recurring cost in the programme, because commercially it is.

---

## 13. The Telegram Q&A group

Between the monthly events, this is where questions go. A tool broke, a prompt will not behave, an exam question is unclear, something in the news sounds wrong.

### House rules — published on the landing page, because they are the selling point for parents

- **Two instructors moderate.** One runs a weekly office hour in the group at a fixed time.
- **No private messages between staff and students.** Every answer happens in the open group. This is the single most important safeguarding rule and it should be stated publicly.
- **Parents of under-16s may join** and see exactly what their child sees.
- **A separate broadcast channel for parents** carries announcements, dates and Demo Day invitations — no discussion, no replies.
- **Anything assessed** — missions, exams, the Workbook — stays in the university's own space, not in Telegram.

### What it is used for

| Use | Cadence |
|---|---|
| Challenge threads — one pinned thread per challenge, running continuously | Always open |
| Weekly winners and the *method* behind them | Fridays |
| Instructor office hour | Weekly, fixed time |
| Demo Day announcements and reminders | Monthly |
| Alumni answering each other | Constant, and usually faster than staff |

### Two things to check before launch

1. **Telegram publishes no minimum age for Armenia**, but sets 18+ for EU, UK and Australian users. Confirm the position for anyone signing up from abroad.
2. **Name the specific channels in the guardian consent form.** A parent consenting to "an online course" has not consented to a chat group; a parent consenting to a named, moderated, no-DM group has.

---

## 14. Video production structure

The recording has a problem the live course did not: **tools change faster than video can be re-shot.** The whole production design is built around that constraint.

### The two-layer principle

Shoot every lesson as two separable layers, edited together but stored apart.

| | **Layer A — Evergreen** | **Layer B — Perishable** |
|---|---|---|
| Contains | Hook, theory, reflection prompts, challenge briefings | Every moment a tool's interface is on screen |
| Shot as | Presenter to camera or over static graphics | Isolated 2–5 minute takes with their own slates, cold openings, clean ends |
| Tools named? | Category only, wherever possible | Named and date-stamped |
| Shelf life | **3–5 years** | **6–12 months** |
| Cost model | One-time | **Annual line item** |

This is the difference between a course needing a full re-record every year and one needing an afternoon in a studio.

### Structure of a recorded lesson

| Segment | Target range | Layer | Shot as | On screen |
|---|---|---|---|---|
| Cold open hook | 0:45–1:15 | A | Presenter to camera, no intro, straight into the question | The big question as text |
| Title | 0:08 | A | Programme sting | Lesson number + title |
| Concept | 6:00–10:00 | A | Presenter + motion graphics, one idea per graphic | Key terms as lower thirds |
| Demonstration | 7:00–10:00 | B | Full screen capture, cursor highlighted, real time | Tool name + date stamp |
| The deliberate failure | 1:00–2:00 | B | Screen capture; presenter reacting honestly | "Watch this break" |
| **PAUSE & DO** | 0:20–0:40 | A | Full-screen card, countdown, instruction, **then silence** | The task + expected minutes |
| Challenge briefing | 1:30–3:00 | A | Presenter to camera; rules, scoring, where to post | Rules as a list |
| **PAUSE & DO** | 0:20 | A | Challenge card with timer | The brief |
| Reflection | 2:00–4:00 | A | Presenter; two or three questions with real pauses | Questions as text |
| Workbook + next | 0:45–1:30 | A | Presenter; the mission, and a hook into the next lesson | Mission card, downloadable |

**Total edited runtime: 20–30 minutes per lesson.** The exact target is set lesson by lesson; module masters must total **60–88 minutes** as specified in [docs/DETAILED-CURRICULUM.md](docs/DETAILED-CURRICULUM.md). Practice runs for 30–65 additional minutes and is never padded into the video.

### Production rules

- **PAUSE & DO cards are full-screen and silent.** A five-second countdown and then nothing. Voice-over during a pause card guarantees nobody pauses.
- **Date-stamp every demonstration.** A visible "recorded August 2026" on tool demos is honest, ages gracefully, and tells the viewer to expect interface drift rather than be confused by it.
- **Chapter markers on every segment**, so a teacher running the lesson in a classroom can jump straight to the demo.
- **Language:** record in Armenian with English subtitles as the primary version. The English-subtitled cut makes the course exportable and supports EUA's international positioning — but the teaching language should be the one a nervous fifteen-year-old thinks in.
- **Every lesson ships with a two-page PDF workbook** — the big question, the CRISP or Q–V–C–D reference, the practical steps, the challenge rules, and space for the Workbook entry. A student who cannot get a tool working can still do the thinking.
- **Shoot Lessons 1, 7 and 17 first.** The opening, the one that defines the programme's character, and the one people arrive for. Get the format right on those before recording the other seventeen.
- **Caption everything.** Armenian captions are an accessibility requirement and, incidentally, the cheapest SEO the programme will ever get.

### One thing not to do

Do not film the challenges. They are briefed on camera and then run by the student, with results posted to the group and finals held at Demo Day. A filmed Prompt Battle against nobody is a worksheet.

---

## 15. Presenter methodology

The v1.0 instructor methodology assumed a room. Most of it still applies — but it now applies to a person on camera and to two moderators in a chat group.

### Six rules for the camera

**1. Never answer first.** When the script reaches a question, the presenter asks *"what would you do to find out?"* and then leaves a real pause. A presenter who answers questions produces students who ask questions; one who redirects produces students who check.

**2. Fail on purpose, every lesson.** Each lesson plan contains a deliberate failure. Do not cut it in the edit when the demo went well — that is exactly when students most need to see the seam. The presenter's own wrong answers stay in: in Lesson 9 the presenter's deepfake-detection score is shown, and it should not be perfect.

**3. Talk to one person.** Not "hello everyone" — a fifteen-year-old is watching alone, on a phone, probably at night. Second person singular, throughout, in both languages.

**4. Name the student's own experience.** Say out loud in Lesson 1 that most of them already use these tools for homework, that nobody is in trouble, and that the point is to do it well. Ten seconds; it changes the honesty of the whole course.

**5. Respect the pause.** After a PAUSE & DO card, the next thing on the timeline is silence, then a genuinely different segment — never "so, how did you get on?" as if the student had done it in real time.

**6. Never encourage a rule-break.** No student is ever told to enter a false birth date, borrow an adult's account, or use a VPN to reach a restricted tool. If a tool is out of reach, it goes on the Console. This is not only compliance — it is the modelling. A course about responsible AI use that winks at terms of service teaches the opposite of its syllabus.

### Staffing

| Role | Commitment | Does |
|---|---|---|
| **Presenter** | One-time recording; annual Layer B re-shoots | Is the course. Choose for credibility *and* watchability — this decides the programme's character more than the curriculum does |
| **Community moderators ×2** | Ongoing, part-time | Telegram group, weekly office hour, challenge threads, weekly winners |
| **Demo Day host** | Monthly | Runs the evening; protects the Q&A from becoming a lecture |
| **Curriculum owner** | Quarterly | Owns the tool map, refreshes exam items from the corpus, watches drop-off data |
| **Guest practitioners** | Monthly | Fifteen minutes at Demo Day. A working professional makes careers real in a way no video can |

Community moderators can be senior EUA students, which is cheap and creates a second product: a teaching-assistant pipeline that feeds the ladder in Section 17.

### Failure modes to watch for

| Symptom | What it means | Fix |
|---|---|---|
| Drop-off concentrated at one lesson | That lesson is too long, too hard, or the tool broke | Re-shoot Layer B for it first |
| Challenge threads silent | Nobody is posting, so the social layer is decorative | Moderator seeds with their own attempt, badly, on purpose |
| "The AI said…" used as a source in the group | Lesson 7 did not land | Pin a Detective challenge as a warm-up; do not let it pass |
| Blanket cynicism ("it's all fake") | Module 3 over-corrected | Run a challenge where the correct answer is "this is true, and here is how I know" |
| Demo Day attendance falling | The Q&A has become a lecture | Cut every scripted segment; protect the open floor |
| Exam pass rates near 100% | The judgement items are too easy or too guessable | Refresh from the corpus; check the distractors |

---

## 16. Marketing strategy

Two audiences who want different things and must both be satisfied by the same page, plus a funnel whose economics changed completely when the course became free and unlimited.

### Three value propositions

| Audience | They actually want | The line | The proof |
|---|---|---|---|
| **Students** | Something to make, something to show, something that belongs to their world and not to school | "Twenty lessons. Eight badges. Start today, finish whenever." | The showcase page — other teenagers' work, with their names on it |
| **Parents** | Reassurance that AI will not hollow their child out, plus advantage, plus no cost | "Your child already uses AI. Here they learn to use it well — and to know when not to. Free, from a university." | The integrity charter, the privacy lesson, the no-DM Telegram rule |
| **EUA** | Brand, pipeline, faculty credibility, a research output, a public good | "Learn AI at a university — before university." | Pre/post results, enrolment numbers, media coverage, the ladder into degree programmes |

### The public message

Lead with **what you can create**, never with what you will learn about. The hero of every asset is a student's project, not a diagram of a neural network. But the **second** message — the one that closes parents — is the questioning. Sequence it deliberately:

1. **Hook (students):** a 15-second clip of something a student built, with their voice explaining it.
2. **Turn (parents):** "She can also tell you three things it got wrong."
3. **Close (both):** "EUA AI Explorers. Free. Start today."

### Landing page structure

| # | Section | Contains |
|---|---|---|
| 1 | **Hero** | Tagline, one sentence, one video of student work, one button: *Enrol free* |
| 2 | **Four programmes** | Explorers *Pilot in preparation*; other tracks *Future roadmap phase* |
| 3 | **What you'll build** | Six real projects from students. Names, links. Highest-converting section on the page |
| 4 | **The 20 lessons** | All seven modules and every lesson title, with durations |
| 5 | **Exams & certification** | The three levels, and the fact that exams are optional |
| 6 | **The badges** | Eight badge images, one line each — what a fifteen-year-old screenshots |
| 7 | **How the video works** | The two-layer model, the PAUSE & DO cards |
| 8 | **Demo Days & Telegram** | The monthly event and the group rules — the parent-facing safeguarding block |
| 9 | **For parents** | Safety, consent, integrity, what data is used, who teaches |
| 10 | **Pre-launch contact / enrol** | Before launch: non-collecting contact CTA. After legal and platform approval: short LMS form with legal-representative consent gate under 16 |
| 11 | **FAQ** | Including: is there a deadline, is there a place limit, do we need to be in Yerevan |

### The funnel, rebuilt for open enrolment

The cohort funnel had a hard constraint — fifteen places — and its job was selection. This funnel has no constraint and its job is **completion**. That inverts almost every decision.

| Stage | Mechanism | What to measure |
|---|---|---|
| **1 · Awareness** | School partnerships; Instagram and TikTok clips of student work; Telegram channels for parents; Armenian tech media after each Demo Day | Reach, referral source |
| **2 · Enrol** | Two-minute form. No application, no selection, no waiting. Guardian email under 16 | Enrolments; consent completion rate |
| **3 · Lesson 1 within 48 hours** | Automated: course link immediately, then a nudge at 48 hours | **% who start.** The single most predictive number in the funnel |
| **4 · Reach Module 3** | Weekly email, challenge threads, first badge at Module 1 | % reaching Lesson 7 — the natural first cliff |
| **5 · Complete** | Demo Day as a dated social deadline; badges; certificate | % completing; drop-off by lesson |
| **6 · Certify** | Optional exams | % who sit any exam; % reaching Level 2 |
| **7 · Advocate** | Demo Day, showcase page, referral to a sibling or friend | Attendance; referred enrolments |
| **8 · Retain** | Next programme in the ladder | % into another track |

**Set expectations internally now:** in open self-paced courses, completion in single digits is normal. If EUA plans and reports on the assumption of cohort-style completion, the programme will look like a failure while doing something genuinely valuable. The honest headline metric is **absolute completions**, not percentage — a course that enrols 3,000 and finishes 300 has taught twenty times as many teenagers as three cohorts of fifteen ever could.

### Eight-week launch campaign

| Week | Pillar | Content |
|---|---|---|
| 1–2 | Curiosity | "Can you tell which of these is AI?" carousels — highest-engagement format the programme has, and a genuine sample of Lesson 9 |
| 3 | Proof | Student projects, one per day, students speaking |
| 4 | Trust | Presenter and faculty faces, EUA campus, the parent block as a short video |
| 5 | Value | The eight badges revealed one per day |
| 6 | Access | "It's free. There's no application. Start tonight." The strongest single message available |
| 7 | Event | Demo Day promotion — open to anyone curious, not only graduates |
| 8 | Social proof | Parent and student testimonials; enrolment number announced |

### Channels

| Channel | Who | For |
|---|---|---|
| Course platform / LMS | Students | Lessons, workbook, exams, badges. EUA owns the data |
| **Telegram group** | Students + alumni | Q&A, challenges, office hour. Moderated, no DMs |
| **Telegram broadcast channel** | Parents | Announcements, dates, Demo Day invitations |
| Instagram + TikTok | Public | Student work, clips, badge reveals, Demo Day |
| Slack | Staff only | Running the programme |

---

## 17. Expansion

### The ladder

| Tier | Audience | Shape |
|---|---|---|
| **AI Explorers** | 14–16 | 20 lessons, self-paced, free. Understand, question, create, build. *This programme* |
| **AI for Students** | University | 30 lessons. Deeper, with Python, research practice and employability framing |
| **AI for Educators** | Teachers | 20 lessons. Shared core plus classroom practice, assessment design, certification to teach Explorers |
| **AI for Public Service** | Institutions | 20 lessons, executive format, delivered on request |

The self-paced model makes this ladder far cheaper to build than the cohort model did: three of the four tiers share Modules 1–4 almost unchanged, and none of them requires new instructor hours to serve one more student.

### Three adjacent products the same content already supports

- **Schools.** License the recorded course and workbooks, with EUA certifying teachers through the Educators track to run it in class. Turns a self-study product into a taught one without EUA delivering the hours.
- **Parents.** A three-hour Saturday: what your child is using, what the risks actually are, voice scams, integrity, the settings sweep. Charge little or nothing. It makes EUA the trusted institution on this subject for a whole demographic.
- **Regional.** The course already works from Kapan and Ijevan. What does not is Demo Day. A **quarterly regional Demo Day**, hosted with a partner school, is the cheapest possible equity move and a good press story.

### Where this fits in Armenia

The national picture as of mid-2026: FAST's **Generation AI** (~26 schools, ~800 students, grades 10–12) and **STEP.ai** expanding to all public institutions, targeting 10–15% of high schoolers, with partners including Synopsys Armenia and AGBU; an OpenAI partnership announced in May 2026 bringing ChatGPT Edu to 50,000 students and educators; and a national AI Strategy and Literacy Framework in development under the Ministry of High-Tech Industry.

Three moves follow:

1. **Position as the feeder, not the rival.** Explorers is 14–16, free, non-selective; Generation AI is 10–12 and competitive. Say so publicly and offer FAST a referral relationship — students arriving at Generation AI already knowing what a model is are worth something to them.
2. **Get into the literacy framework while it is still being written.** A framework in drafting is an opportunity; an adopted one is a compliance exercise. The AI Faculty has standing to contribute, and being cited is worth more than any marketing spend.
3. **Own the half nobody is serving.** The national programmes build the 10% who will engineer AI. Nobody is systematically serving the 90% who will be *governed* by it — and the research literature identifies exactly that gap: tool use taught together with critical literacy. Both a market position and a publishable contribution.

**A free, unlimited course strengthens all three arguments.** It is a contribution to the national effort rather than a competitor for the same students, and it is something EUA can put on the table in a Ministry conversation.

### A three-year shape

| Year | Delivery | Build | Evidence |
|---|---|---|---|
| **1** | Record and launch Explorers · 12 Demo Days · Telegram group live | Course platform, exam bank, workbooks, showcase page, parent Saturday twice | Pre/post data from every completer; drop-off curve by lesson |
| **2** | Launch AI for Students and AI for Educators · school licensing pilot with 3 schools · first regional Demo Day | Refresh Layer B; build the exam bank from the Cohort Corpus | First publishable pre/post result; six-month follow-ups |
| **3** | Full ladder operating; Public Service track delivered on request | Formalise as the **EUA AI Education Centre** under the AI Faculty | Paper or report; grant applications backed by three years of outcome data |

**The unlock:** the pre/post instrument in Section 11 is what turns a good teen course into a research programme, and a research programme is what turns a course into an argument for funding. It costs one screen at enrolment and one after Lesson 20. Set it up before launch, not after year three.

---

## 18. Framework alignment

A university programme should be able to say what it aligns with and — more credibly — what it does not. Twenty lessons cannot cover everything, and claiming otherwise is the fastest way for a reviewer to discount the design.

### UNESCO AI Competency Framework for Students (2024)

Four aspects × three progression levels (Understand → Apply → Create). Honest mapping:

| Aspect | Understand | Apply | Create | Lessons |
|---|---|---|---|---|
| Human-centred mindset | Full | Partial | Touched | 1, 10, 19, 20 |
| Ethics of AI | Full | Full | Partial — via the student charter | 8, 9, 10, 12 |
| AI techniques & applications | Full | Full | Partial — Teachable Machine, builds | 2, 3, 4, 13–18 |
| AI system design | Full | Partial | Partial — the build/test/improve cycle | 17, 18, 19 |

The defensible claim: **full coverage at Understand, substantial coverage at Apply, and genuine Create work in two of the four aspects.** Not "fully aligned with UNESCO". The honest version is more persuasive to the people who check.

**Note on the model change:** removing the capstone genuinely weakens the *Create* level in **AI system design** — that is where a sustained project did its work. Lessons 17 and 18 recover part of it. If EUA later wants a stronger UNESCO claim, the cheapest route is an **optional extension project** from Section 9, showcased at Demo Day, rather than reinstating a compulsory capstone.

### Other anchors

| Framework | How this programme maps |
|---|---|
| **Digital Promise AI Literacy Framework (2024)** | Its three modes — Understand / Evaluate / Use — map onto Modules 1–2 / 3 / 5–7. Its distinctive contribution is treating **Evaluate** as a first-class mode, which is precisely where this programme puts its heaviest exam weight |
| **AI4K12 Five Big Ideas** | Perception (2, 9) · Representation & Reasoning (3) · Learning (2, 3) · Natural Interaction (5, 6, 14) · Societal Impact (8, 9, 10, 19, 20). All five covered; Representation & Reasoning most lightly, deliberately |
| **DigComp 2.2, Annex 2** | The AI examples under "What do AI systems do and not do?", "How do AI systems work?" and "The challenges and ethics of AI" are directly usable as objective statements for Modules 1 and 3 |
| **EU AI Act, Article 4** | Use carefully. Article 4 obliges **providers and deployers** to ensure AI literacy among their staff — it is not a schools obligation, and Armenia is not an EU member state. The honest framing is that this programme prepares students for workplaces where Article 4 applies, and follows the European competence frameworks the Article points to. Overclaiming here is the easiest way to lose a reviewer |

Verify these citations against primary sources before they appear in accreditation documents or funding applications. Framework structures change, and a mis-cited framework is worse than none.

---

## 19. Suggestions beyond the brief

### 1. Design for the drop-off, because it is coming

Single-digit completion is the norm in open self-paced courses and no amount of good content prevents it. Four cheap mitigations, in order of effect:

- **Make Lesson 1 unmissable and short.** The Human vs AI challenge is the best hook in the course; it should be reachable within ninety seconds of enrolling.
- **First badge at Module 1, not Module 3.** Four lessons to a visible reward.
- **Weekly email with one specific thing**, never "continue your course" — *"this week's Prompt Battle winner, and why their prompt worked."*
- **The dated Demo Day.** A monthly public event is the only real deadline the programme has. Use it explicitly: "finish Module 3 before the 28th and bring your Detective case."

### 2. Publish absolute numbers, not percentages

Decide now which number goes in the annual report. *"1,400 Armenian teenagers started; 310 finished; 190 are certified"* is a good year. *"22% completion"* is the same year, described as a failure. Both are true; the first is the honest frame for a free public course.

### 3. Guardian consent as a real touchpoint, not a checkbox

Consent is legally required under 16. Use the requirement: the confirmation email to the guardian's address should state what tools their child will use, what data is involved, the integrity rules, the Telegram rules, and one thing the parent is asked to do — *look at your child's Workbook twice.* It converts a compliance step into an invested parent, and an invested parent is the strongest completion driver available to a fifteen-year-old.

### 4. Pilot four lessons with eight real students before recording twenty

Twenty lessons of video is expensive to make and painful to change. Run Lessons 1, 7, 13 and 17 with eight friendly students and watch them. The timings will be wrong — they always are — and you will learn which challenges fall flat. Record after.

### 5. Decide the language question deliberately

These models are much weaker in Armenian than in English, and students will notice. Do not hide it — teach it, in Lesson 8, as a live demonstration of data bias with a consequence they can feel. But present in Armenian and let students work in whichever language they think in. Requiring English would quietly select for the same students Generation AI already selects for, which is precisely the population this programme is not for.

### 6. Keep a Cohort Corpus

Every hallucination, Armenia Test finding, bias audit and Detective case that students submit goes into a growing internal corpus. Within a year you have a locally-sourced, genuinely Armenian teaching set no international curriculum can match — **and the raw material for the judgement half of every exam**, refreshed quarterly. It costs a shared folder and the discipline to use it.

### 7. Give the students who are already ahead a role

Every intake contains a fifteen-year-old who has been building with AI for a year and will be bored by Lesson 3. Give them a job rather than extra worksheets: **Community Helper** — a named role in the Telegram group, answering others' questions under moderator supervision, with a distinct badge. It keeps them, it makes the group work, and it is how you find next year's moderators.

### 8. Write the crisis protocol before you need it

In a programme where minors generate images and text and post to a group, three things will eventually happen: a student generates something inappropriate; a student generates an image of a classmate; a student discloses something concerning in the group. Decide now who is told, what is preserved, and what is said to parents. One page, agreed with EUA's safeguarding lead, before enrolment opens. The least interesting recommendation here and the most important.

### 9. Free is a position — say why

A free university course invites the question "what's the catch". Answer it on the page: EUA runs this because AI literacy is infrastructure, because the Faculty wants the research data, and because the students who enjoy it are the ones who will apply here in three years. Stating the institution's own interest plainly is more trustworthy than pretending it is pure altruism, and it costs nothing.

### 10. Keep one live entry point for people who will never finish alone

Not everyone learns from video. A **quarterly free three-hour "AI Discovery Saturday"** at EUA — one condensed lesson, one Detective challenge, one build sprint — gives the course a live front door, feeds Demo Day, and is the format schools and journalists actually turn up to.

---

## 20. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Low completion rates read as programme failure** | Certain | High — reputational, internal | Set the metric before launch (Section 19.2); report absolute completions; publish the drop-off curve as a learning output, not a shame |
| **A named tool changes, breaks or dies mid-year** | Certain | Medium | Capability-first curriculum; two-layer video; a living tool map with a named owner |
| **Guardian consent not properly captured** | Moderate | High — legal | Consent is a required field at enrolment with a confirming email; no account creation before it returns |
| **A student posts harmful or inappropriate content in the group** | Moderate | High | Two moderators; no DMs; written crisis protocol; parents of under-16s may join |
| **The Telegram group becomes unmoderated or dies** | Moderate | Medium | Fixed weekly office hour; moderators seed threads; group health is a reported metric |
| **The course teaches efficient cheating** | Moderate | High — reputational | Judgement-weighted exams; the student-written charter in Lesson 12; the integrity spectrum taught explicitly |
| **Students leave cynical rather than critical** | Moderate | Medium | False-accusation penalties; challenges where the answer is "true, and here is how I know" |
| **Exams gamed or shared** | High | Low | 40+ item banks, 12 drawn at random, quarterly refresh from the corpus; no pretence of proctoring |
| **Demo Day attendance decays** | Moderate | High — it is the only live contact | Fixed date, never moved; protect the open Q&A; rotate challenge finals |
| **Perceived as competing with national programmes** | Low | Medium | Public upstream positioning; approach FAST early with a referral relationship |
| **Recorded course ages badly and is not refreshed** | Moderate | High | Layer B re-shoot as an annual budget line with a named owner, not a project |

---

## 21. Open decisions

Eight, roughly in the order they block things.

1. **Legal confirmation of the consent threshold**, and the wording of the guardian consent email. Everything in the enrolment flow waits on this.
2. **Will EUA issue Google Workspace for Education accounts to enrolled students?** This is the difference between students using Gemini and NotebookLM under institutional control and using personal accounts under individual consent. Still the highest-leverage operational decision in the design.
3. **Which platform hosts the course** — EUA's own LMS, or a third party? It determines whether EUA holds the completion and exam data, which Section 11's research value depends on entirely.
4. **Badges on exams alone, or exams plus a spot-checked artefact?** Section 10. Recommendation: exams alone at launch.
5. **Are the exams genuinely optional?** Recommendation: yes, and say why on the page. If accreditation requires otherwise, have that argument before launch.
6. **Who presents?** The programme's character depends more on this person than on the curriculum. Credibility *and* watchability, and available for annual re-shoots.
7. **Is the pre/post instrument in scope for launch?** It is one screen at enrolment and one after Lesson 20, and it is the foundation of everything in year three. Say yes.
8. **Approach FAST and the Ministry now, or after the first thousand enrolments?** Earlier is better for the literacy framework; later is safer if the launch might be rough.

---

*EUA AI Academy — programme design, v2.1 review baseline, 31 August 2026. Prepared for supervisor review at the European University of Armenia.*

*Tool age policies, platform restrictions and the Armenian national programme figures cited here were checked against current sources in August 2026 and will drift; the tool map is designed to be re-verified quarterly. Framework citations should be confirmed against primary sources before use in accreditation or funding documents. The Armenian consent threshold should be confirmed with counsel before the enrolment form goes live.*
