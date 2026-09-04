(function (global) {
  "use strict";

  function lesson(en, hy) {
    return { en, hy: hy || en };
  }

  function L(slides, paragraphs, practice, takeaway) {
    return {
      slides,
      paragraphs,
      practice: practice || "",
      takeaway: takeaway || ""
    };
  }

  const content = {
    1: lesson(
      L(
        [
          { title: "What is Artificial Intelligence?", points: ["AI is software that can perform tasks that usually need human judgment.", "It learns patterns from data — it does not understand the world like a person.", "Your job is to use it carefully, not to trust it blindly."] },
          { title: "A useful mental model", points: ["Input → model → output.", "The output is a prediction, not a guarantee.", "Human review closes the loop."] },
          { title: "Where AI helps", points: ["Drafting, summarising, brainstorming, explaining.", "Speed and structure — not automatic truth.", "Best when you already know what “good” looks like."] }
        ],
        [
          "Artificial intelligence is a family of computer systems that can recognise patterns, generate language or images, classify information, and suggest next steps. In everyday tools, that often means a chatbot that replies in natural language.",
          "AI systems do not “know” facts the way people do. They produce likely continuations of text (or other media) based on training data. That is why they can sound confident and still be wrong.",
          "In this course, AI is a collaborator you supervise. You set the goal, check the result, and stay responsible for what you submit or share."
        ],
        "Ask an AI: “Explain artificial intelligence to a 15-year-old in 5 sentences. Then list 3 things AI cannot reliably do.” Read the answer and mark anything you would verify.",
        "AI is a powerful pattern tool. Human judgment decides whether the result is usable."
      ),
      L(
        [
          { title: "Ի՞նչ է արհեստական բանականությունը։", points: ["ԱԲ-ն ծրագրային համակարգ է, որ կարող է կատարել մարդկային դատողություն պահանջող աշխատանքներ։", "Այն սովորում է օրինաչափություններ տվյալներից, ոչ թե հասկանում աշխարհը մարդու պես։", "Ձեր խնդիրն է կիրառել այն զգուշությամբ, ոչ թե կուրորեն վստահել։"] },
          { title: "Օգտակար մտավոր մոդել", points: ["Մուտք → մոդել → ելք։", "Ելքը կանխատեսում է, ոչ թե երաշխիք։", "Մարդկային ստուգումը փակում է շրջանը։"] },
          { title: "Որտե՞ղ է ԱԲ-ն օգնում", points: ["Սևագրում, ամփոփում, գաղափարներ, բացատրություն։", "Արագություն և կառուցվածք՝ ոչ ավտոմատ ճշմարտություն։", "Լավագույնն է, երբ գիտեք՝ ինչ տեսք ունի «լավ» արդյունքը։"] }
        ],
        [
          "Արհեստական բանականությունը համակարգիչային համակարգերի ընտանիք է, որոնք կարող են ճանաչել օրինաչափություններ, ստեղծել տեքստ կամ պատկերներ և առաջարկել հաջորդ քայլեր։",
          "ԱԲ համակարգերը չեն «գիտեն» փաստերը մարդու պես։ Դրա համար կարող են վստահ հնչել և միևնույն ժամանակ սխալ լինել։",
          "Այս դասընթացում ԱԲ-ն ձեր վերահսկած գործընկերն է։ Դուք եք սահմանում նպատակը, ստուգում արդյունքը և պատասխանատու մնում։"
        ],
        "Խնդրեք ԱԲ-ին՝ «Բացատրիր արհեստական բանականությունը 15-ամյա աշակերտին 5 նախադասությամբ։ Ապա թվարկիր 3 բան, որ ԱԲ-ն հուսալիորեն չի կարող անել։» Ստուգեք պատասխանը։",
        "ԱԲ-ն հզոր գործիք է։ Մարդկային դատողությունն է որոշում՝ արդյոք արդյունքը պիտանի է։"
      )
    ),

    2: lesson(
      L(
        [
          { title: "What are Large Language Models?", points: ["LLMs predict the next token (piece of text).", "They were trained on huge collections of writing.", "Scale makes them fluent — not necessarily accurate."] },
          { title: "Tokens, not “thoughts”", points: ["Text is broken into tokens.", "The model scores what is likely to come next.", "Fluency can hide gaps in evidence."] },
          { title: "Practical implication", points: ["Use LLMs for drafts and options.", "Verify claims, numbers, citations, and names.", "Prefer your own sources for high-stakes work."] }
        ],
        [
          "A large language model (LLM) is a neural network trained to continue text. When you chat with ChatGPT, Claude, Gemini, or similar tools, you are interacting with an LLM (sometimes with extra tools attached).",
          "Because LLMs optimise for plausible language, they can invent details. That behaviour is often called hallucination. Treat surprising facts as hypotheses until checked.",
          "LLMs are especially strong at rewriting, outlining, comparing options, and explaining concepts at different levels. They are weaker when you need guaranteed truth or private data they never saw."
        ],
        "Prompt: “What is an LLM? Give a short definition, one strength, one risk, and one example of a safe classroom use.” Edit the answer into your own words.",
        "An LLM is a text-prediction engine. Fluency ≠ truth."
      ),
      L(
        [
          { title: "Ի՞նչ են մեծ լեզվական մոդելները։", points: ["ՄԼՄ-ները կանխատեսում են հաջորդ տեքստային մասը (token)։", "Դրանք մարզվել են հսկայական տեքստային հավաքածուներով։", "Չափը դարձնում է դրանք սահուն, բայց ոչ պարտադիր ճշգրիտ։"] },
          { title: "Token-ներ, ոչ «մտքեր»", points: ["Տեքստը բաժանվում է token-ների։", "Մոդելը գնահատում է՝ ինչն է հավանական հաջորդը։", "Սահունությունը կարող է թաքցնել ապացույցների բացերը։"] },
          { title: "Գործնական եզրակացություն", points: ["Օգտագործեք ՄԼՄ-ները սևագրերի և տարբերակների համար։", "Ստուգեք պնդումները, թվերը, աղբյուրներն ու անունները։", "Կարևոր աշխատանքում նախընտրեք ձեր սեփական աղբյուրները։"] }
        ],
        [
          "Մեծ լեզվական մոդելը (ՄԼՄ) նյարդային ցանց է, որը մարզված է շարունակելու տեքստը։ Երբ զրուցում եք ChatGPT-ի, Claude-ի կամ նման գործիքների հետ, աշխատում եք ՄԼՄ-ի հետ։",
          "Քանի որ ՄԼՄ-ները օպտիմալացված են հավանական լեզվի համար, կարող են հորինել մանրամասներ։ Անակնկալ փաստերը դիտարկեք որպես վարկածներ՝ մինչև ստուգելը։",
          "ՄԼՄ-ները ուժեղ են վերաշարադրման, ուրվագծերի և բացատրությունների մեջ։ Թույլ են, երբ պետք է երաշխավորված ճշմարտություն կամ գաղտնի տվյալներ։"
        ],
        "Հարցրեք՝ «Ի՞նչ է ՄԼՄ-ը։ Տուր կարճ սահմանում, մեկ ուժեղ կողմ, մեկ ռիսկ և մեկ անվտանգ դասարանային օրինակ։» Խմբագրեք պատասխանը ձեր բառերով։",
        "ՄԼՄ-ն տեքստի կանխատեսման շարժիչ է։ Սահունությունը ճշմարտություն չէ։"
      )
    ),

    3: lesson(
      L(
        [
          { title: "How do language models work?", points: ["Training teaches statistical relationships in language.", "Inference generates a reply from your prompt + context.", "Temperature and instructions change style and risk."] },
          { title: "Context window", points: ["The model only “sees” a limited recent context.", "Important facts must be in the prompt or documents you provide.", "Long chats can push early details out of view."] },
          { title: "Why checking matters", points: ["Wrong training patterns → wrong outputs.", "Ambiguous prompts → mixed results.", "Your review is part of the system."] }
        ],
        [
          "During training, the model adjusts billions of parameters so that, given previous tokens, it better predicts the next one. At use time (inference), it samples from those predictions to write a reply.",
          "Your prompt is the control panel: role, goal, constraints, examples, and format all steer the distribution of answers. Clearer prompts usually produce more useful drafts.",
          "You do not need to become a machine-learning engineer. You do need a working picture: probability, context limits, and the need for verification."
        ],
        "Ask the model to explain next-token prediction with a tiny example sentence. Then ask it what information it would need to answer a factual question reliably.",
        "Models complete patterns under constraints you set. Constraints + checks = quality."
      ),
      L(
        [
          { title: "Ինչպե՞ս են աշխատում լեզվական մոդելները։", points: ["Մարզումը սովորեցնում է լեզվի վիճակագրական կապերը։", "Կիրառման ժամանակ պատասխանը գեներացվում է ձեր պրոմփթից և համատեքստից։", "Հրահանգները փոխում են ոճն ու ռիսկը։"] },
          { title: "Համատեքստի պատուհան", points: ["Մոդելը «տեսնում» է միայն սահմանափակ վերջին համատեքստը։", "Կարևոր փաստերը պետք է լինեն պրոմփթում կամ տրամադրված փաստաթղթերում։", "Երկար զրույցները կարող են դուրս մղել վաղ մանրամասները։"] },
          { title: "Ինչու՞ է ստուգումը կարևոր", points: ["Սխալ օրինաչափություններ → սխալ ելքեր։", "Անորոշ պրոմփթեր → խառը արդյունքներ։", "Ձեր վերանայումը համակարգի մաս է։"] }
        ],
        [
          "Մարզման ընթացքում մոդելը կարգավորում է պարամետրերը, որպեսզի ավելի լավ կանխատեսի հաջորդ token-ը։ Կիրառման ժամանակ այն այդ կանխատեսումներից նմուշ է վերցնում պատասխան գրելու համար։",
          "Ձեր պրոմփթը կառավարման վահանակն է՝ դեր, նպատակ, սահմանափակումներ, օրինակներ և ձևաչափ։",
          "Պետք չէ դառնալ մեքենայական ուսուցման ինժեներ։ Պետք է հասկանալ հավանականությունը, համատեքստի սահմանները և ստուգման անհրաժեշտությունը։"
        ],
        "Խնդրեք մոդելին բացատրել հաջորդ token-ի կանխատեսումը փոքր օրինակով։ Ապա հարցրեք՝ ինչ տեղեկություն կպահանջվեր փաստական հարցին հուսալի պատասխանելու համար։",
        "Մոդելները լրացնում են օրինաչափությունները ձեր սահմանած պայմաններով։ Պայմաններ + ստուգում = որակ։"
      )
    ),

    4: lesson(
      L(
        [
          { title: "Module summary", points: ["AI performs pattern-based tasks at scale.", "LLMs generate likely text, not certified truth.", "You remain the decision-maker."] },
          { title: "Carry forward", points: ["Define the task before opening a chat.", "Ask for structure, then verify content.", "Keep a human approval step for anything public or graded."] }
        ],
        [
          "You now have a basic map: AI as supervised assistance, LLMs as text predictors, and verification as a required habit.",
          "Next module focuses on talking to AI well — prompts that make intent clear and results easier to check."
        ],
        "Write 3 bullet points in your notes: one definition of AI, one risk of LLMs, one personal rule for checking outputs.",
        "Understand → question → then use."
      ),
      L(
        [
          { title: "Մոդուլի ամփոփում", points: ["ԱԲ-ն կատարում է օրինաչափությունների վրա հիմնված աշխատանք։", "ՄԼՄ-ները ստեղծում են հավանական տեքստ, ոչ վավերացված ճշմարտություն։", "Որոշում կայացնողը դուք եք։"] },
          { title: "Տանելի գաղափարներ", points: ["Նախ սահմանեք առաջադրանքը, ապա բացեք զրույցը։", "Խնդրեք կառուցվածք, ապա ստուգեք բովանդակությունը։", "Հանրային կամ գնահատվող աշխատանքի համար պահեք մարդկային հաստատում։"] }
        ],
        [
          "Այժմ ունեք հիմնական քարտեզ՝ ԱԲ որպես վերահսկվող օգնություն, ՄԼՄ որպես տեքստի կանխատեսող, և ստուգում որպես պարտադիր սովորություն։",
          "Հաջորդ մոդուլը կենտրոնանում է ԱԲ-ի հետ ճիշտ հաղորդակցության վրա։"
        ],
        "Գրեք 3 կետ՝ ԱԲ-ի սահմանում, ՄԼՄ-ի մեկ ռիսկ, ելքերը ստուգելու ձեր անձնական կանոնը։",
        "Հասկացիր → հարցադրիր → ապա կիրառիր։"
      )
    ),

    5: lesson(
      L(
        [
          { title: "What is prompt engineering?", points: ["A prompt is the instruction set you give the model.", "Engineering means designing that instruction on purpose.", "Small changes in wording can change quality a lot."] },
          { title: "Good prompts usually include", points: ["Goal — what success looks like.", "Context — audience, subject, constraints.", "Format — bullets, table, steps, length.", "Examples — one short sample of the desired style."] },
          { title: "Iteration is normal", points: ["First answer = draft.", "Critique it, then ask for a revision.", "Save prompts that work."] }
        ],
        [
          "Prompt engineering is the craft of writing clear instructions so the model spends its capacity on your real goal instead of guessing.",
          "You do not need clever tricks. You need specificity: who the reader is, what to include, what to avoid, and how to present the answer.",
          "Treat prompting like briefing a fast junior assistant: be explicit, give examples, and request a checklist for self-review."
        ],
        "Rewrite this weak prompt into a strong one: “Write about climate.” Your version should name audience, length, structure, and what to avoid.",
        "Clear intent in → usable draft out."
      ),
      L(
        [
          { title: "Ի՞նչ է պրոմփթ ինժեներիան։", points: ["Պրոմփթը մոդելին տրվող հրահանգների հավաքածուն է։", "Ինժեներիան նշանակում է այդ հրահանգը մտածված կազմել։", "Փոքր ձևակերպման փոփոխությունները կարող են մեծ ազդեցություն ունենալ։"] },
          { title: "Լավ պրոմփթը սովորաբար ներառում է", points: ["Նպատակ — ինչպիսին է հաջող արդյունքը։", "Համատեքստ — լսարան, թեմա, սահմանափակումներ։", "Ձևաչափ — կետեր, աղյուսակ, քայլեր, ծավալ։", "Օրինակներ — ցանկալի ոճի կարճ նմուշ։"] },
          { title: "Կրկնությունը նորմալ է", points: ["Առաջին պատասխանը = սևագիր։", "Քննադատեք, ապա խնդրեք վերանայում։", "Պահպանեք աշխատող պրոմփթերը։"] }
        ],
        [
          "Պրոմփթ ինժեներիան հստակ հրահանգներ գրելու արվեստն է, որպեսզի մոդելը գուշակի ձեր իրական նպատակը։",
          "Հնարքներ պետք չեն։ Պետք է կոնկրետություն՝ ով է ընթերցողը, ինչ ներառել, ինչից խուսափել, ինչպես ներկայացնել։",
          "Պրոմփթը դիտարկեք որպես արագ օգնականի բրիֆինգ։"
        ],
        "Այս թույլ պրոմփթը դարձրեք ուժեղ՝ «Գրիր կլիմայի մասին։» Նշեք լսարան, ծավալ, կառուցվածք և ինչից խուսափել։",
        "Հստակ նպատակ → օգտակար սևագիր։"
      )
    ),

    6: lesson(
      L(
        [
          { title: "How should one talk to AI?", points: ["Be direct about the task.", "State assumptions and limits.", "Ask for uncertainty to be marked."] },
          { title: "Conversation pattern", points: ["1) Brief the goal.", "2) Get a draft.", "3) Request critique against your criteria.", "4) Finalise yourself."] },
          { title: "Tone tips", points: ["Polite is fine; vague is not.", "“Make it better” is weak — say what “better” means.", "Split big jobs into steps."] }
        ],
        [
          "Talking to AI well is less about magic phrases and more about project management: scope, criteria, and feedback loops.",
          "If the topic is sensitive (health, legal, personal data), say so and ask for general information only, with a reminder to consult a professional.",
          "When you disagree with an answer, quote the part you reject and explain why. Targeted revision beats starting from zero."
        ],
        "Have a 4-message chat that turns a messy paragraph into a clear email. Message 1: goal. Message 2: draft. Message 3: critique. Message 4: improved version you edit by hand.",
        "Brief → draft → critique → human final."
      ),
      L(
        [
          { title: "Ինչպե՞ս խոսել ԱԲ-ի հետ։", points: ["Ուղղակի ասեք առաջադրանքը։", "Նշեք ենթադրություններն ու սահմանները։", "Խնդրեք նշել անորոշությունը։"] },
          { title: "Զրույցի կաղապար", points: ["1) Նպատակի բրիֆինգ։", "2) Սևագիր։", "3) Քննադատություն ձեր չափանիշներով։", "4) Վերջնական տարբերակը դուք եք սահմանում։"] },
          { title: "Ոճի խորհուրդներ", points: ["Քաղաքավարությունը լավ է, անորոշությունը՝ ոչ։", "«Ավելի լավ արա»-ն թույլ է՝ ասեք՝ ինչ է նշանակում «լավ»։", "Մեծ աշխատանքը բաժանեք քայլերի։"] }
        ],
        [
          "ԱԲ-ի հետ լավ հաղորդակցությունը կախարդական բառեր չեն, այլ նախագծի կառավարում՝ շրջանակ, չափանիշներ և հետադարձ կապ։",
          "Զգայուն թեմաների դեպքում խնդրեք միայն ընդհանուր տեղեկություն և հիշեցում մասնագետին դիմելու մասին։",
          "Եթե համաձայն չեք, մեջբերեք մերժվող մասը և բացատրեք՝ ինչու։"
        ],
        "4 հաղորդագրությամբ խառը պարբերությունը վերածեք հստակ նամակի՝ նպատակ → սևագիր → քննադատություն → ձեր խմբագրած տարբերակ։",
        "Բրիֆ → սևագիր → քննադատություն → մարդկային վերջնակետ։"
      )
    ),

    7: lesson(
      L(
        [
          { title: "Techniques that work", points: ["Role + task + constraints.", "Step-by-step reasoning requests (when helpful).", "Few-shot examples.", "Output schemas (JSON, table, rubric)."] },
          { title: "Example skeleton", points: ["Role: You are a study coach.", "Task: Create a 3-day revision plan.", "Constraints: 45 minutes/day, exam on Friday.", "Format: Day / focus / practice task."] },
          { title: "Quality controls", points: ["Ask for sources or “ unknowns”.", "Request a self-check list.", "Compare two alternative answers."] }
        ],
        [
          "Techniques are reusable patterns. Start with role, task, constraints, and format. Add examples when style matters. Add a rubric when scoring or grading quality matters.",
          "Chain-of-thought style prompts can help for multi-step problems, but still verify the final numbers and claims.",
          "For schoolwork, ask the model to quiz you or critique your draft — not to replace your thinking entirely."
        ],
        "Build one reusable prompt template for “explain a concept at two levels: beginner and advanced, with one analogy and one common misconception.”",
        "Reusable structure beats one-off clever wording."
      ),
      L(
        [
          { title: "Աշխատող տեխնիկաներ", points: ["Դեր + առաջադրանք + սահմանափակումներ։", "Քայլ առ քայլ հիմնավորում (երբ օգտակար է)։", "Փոքր օրինակներ (few-shot)։", "Ելքի սխեմաներ (աղյուսակ, ռուբրիկա)։"] },
          { title: "Օրինակ կմախք", points: ["Դեր՝ դու ուսումնական մարզիչ ես։", "Առաջադրանք՝ 3-օրյա կրկնության պլան։", "Սահմանափակում՝ օրական 45 րոպե։", "Ձևաչափ՝ օր / թեմա / վարժություն։"] },
          { title: "Որակի վերահսկում", points: ["Խնդրեք աղբյուրներ կամ «անհայտներ»։", "Խնդրեք ինքնաստուգման ցանկ։", "Համեմատեք երկու այլընտրանք։"] }
        ],
        [
          "Տեխնիկաները կրկնվող կաղապարներ են։ Սկսեք դերից, առաջադրանքից, սահմանափակումներից և ձևաչափից։",
          "Բազմաքայլ խնդիրների համար կարող է օգնել քայլ առ քայլ հիմնավորումը, բայց ստուգեք թվերն ու պնդումները։",
          "Դպրոցական աշխատանքում խնդրեք մոդելին քննարկել ձեր սևագիրը, ոչ թե ամբողջությամբ փոխարինել մտածողությունը։"
        ],
        "Ստեղծեք կաղապար՝ «բացատրիր հասկացությունը երկու մակարդակով՝ սկսնակ և առաջադեմ, մեկ անալոգիայով և մեկ տարածված սխալ պատկերացումով։»",
        "Կրկնվող կառուցվածքը մեկանգամյա խորամանկ ձևակերպումից լավ է։"
      )
    ),

    8: lesson(
      L(
        [
          { title: "Common pitfalls", points: ["Vague goals.", "Hidden private data in prompts.", "Accepting citations without opening them.", "One long prompt for five different jobs."] },
          { title: "Failure modes", points: ["Hallucinated references.", "Outdated knowledge.", "Bias from training data.", "Overconfident tone."] },
          { title: "Defences", points: ["Split tasks.", "Provide your own source text.", "Ask “what might be wrong here?”", "Keep a verification checklist."] }
        ],
        [
          "Most disappointing AI results come from unclear briefs or skipped checks — not from “using the wrong model.”",
          "Never paste passwords, ID numbers, confidential school records, or private messages into public tools.",
          "When the answer includes links or paper titles, verify them. Invented sources are a frequent failure mode."
        ],
        "Take any AI answer you trust too quickly. Ask: “List assumptions you made and rank confidence for each claim.” Then verify the top claim.",
        "Ambiguity and skipped checks cause most pain."
      ),
      L(
        [
          { title: "Տարածված սխալներ", points: ["Անորոշ նպատակներ։", "Գաղտնի տվյալներ պրոմփթում։", "Աղբյուրներն առանց բացելու ընդունելը։", "Մեկ երկար պրոմփթ՝ հինգ տարբեր աշխատանքի համար։"] },
          { title: "Ձախողման ձևեր", points: ["Հորինված հղումներ։", "Հնացած գիտելիք։", "Մարզման տվյալների կողմնակալություն։", "Չափից վստահ տոն։"] },
          { title: "Պաշտպանություն", points: ["Բաժանեք առաջադրանքները։", "Տրամադրեք ձեր աղբյուր տեքստը։", "Հարցրեք՝ «ի՞նչ կարող է սխալ լինել։»", "Պահեք ստուգման ցանկ։"] }
        ],
        [
          "ԱԲ-ի հիասթափեցնող արդյունքների մեծ մասը գալիս է անորոշ բրիֆից կամ չկատարված ստուգումից։",
          "Երբեք մի տեղադրեք գաղտնաբառեր, անձնական տվյալներ կամ գաղտնի փաստաթղթեր հանրային գործիքներում։",
          "Հղումներն ու վերնագրերը ստուգեք։ Հորինված աղբյուրները հաճախակի խնդիր են։"
        ],
        "Վերցրեք մի պատասխան, որին շատ արագ վստահեցիք։ Հարցրեք՝ «Թվարկիր ենթադրությունները և վստահությունը։» Ստուգեք գլխավոր պնդումը։",
        "Անորոշությունն ու չստուգելը ամենից շատ վնասում են։"
      )
    ),

    9: lesson(
      L(
        [
          { title: "Talking to AI — summary", points: ["Prompts are designed briefs.", "Iterate with criteria.", "Watch for privacy and hallucination risks."] },
          { title: "Your starter kit", points: ["Goal / audience / format / constraints.", "One example.", "One verification question."] }
        ],
        [
          "You can now brief an AI like a teammate: clear goal, constraints, format, and a habit of revision.",
          "Next you will apply these skills to writing, planning, and everyday tasks."
        ],
        "Save your best prompt from this module in a notes file with a title and one sentence on when to use it.",
        "Design the brief. Check the draft."
      ),
      L(
        [
          { title: "Ամփոփում", points: ["Պրոմփթերը մտածված բրիֆեր են։", "Կրկնեք չափանիշներով։", "Հետևեք գաղտնիության և հորինվածքների ռիսկերին։"] },
          { title: "Սկզբնական հավաքածու", points: ["Նպատակ / լսարան / ձևաչափ / սահմանափակումներ։", "Մեկ օրինակ։", "Մեկ ստուգման հարց։"] }
        ],
        [
          "Այժմ կարող եք ԱԲ-ին բրիֆավորել որպես թիմակից՝ հստակ նպատակով և վերանայման սովորությամբ։",
          "Հաջորդիվ կիրառեք սա գրելու, պլանավորելու և առօրյա աշխատանքում։"
        ],
        "Պահպանեք այս մոդուլի լավագույն պրոմփթը՝ վերնագրով և մեկ նախադասությամբ՝ երբ օգտագործել։",
        "Կազմեք բրիֆը։ Ստուգեք սևագիրը։"
      )
    ),

    10: lesson(
      L(
        [
          { title: "Writing and editing with AI", points: ["Use AI for outlines and alternatives.", "Keep your voice and evidence.", "Edit line by line for claims."] },
          { title: "A writing workflow", points: ["Outline first (yours or co-created).", "Draft in sections.", "Ask for clarity edits, not new facts.", "Human final pass."] },
          { title: "Academic integrity", points: ["Follow your school’s AI policy.", "Disclose AI use when required.", "Do not submit unedited AI text as your own thinking."] }
        ],
        [
          "AI can help you unstick a blank page, tighten structure, and spot unclear sentences. It should not invent quotations or sources.",
          "A strong pattern: you provide notes or a rough draft; AI proposes structure; you rewrite in your voice; AI checks clarity; you verify facts.",
          "If a sentence introduces a new fact you did not provide, treat it as unverified until you confirm it."
        ],
        "Paste a short paragraph you wrote. Ask AI only to improve clarity and rhythm without adding new facts. Accept or reject each suggestion consciously.",
        "AI drafts. You author."
      ),
      L(
        [
          { title: "Գրել և խմբագրել ԱԲ-ով", points: ["Օգտագործեք ԱԲ-ն ուրվագծերի և այլընտրանքների համար։", "Պահպանեք ձեր ձայնն ու ապացույցները։", "Խմբագրեք պնդումները տող առ տող։"] },
          { title: "Գրելու գործընթաց", points: ["Նախ ուրվագիծ։", "Սևագրեք բաժիններով։", "Խնդրեք պարզության խմբագրում, ոչ նոր փաստեր։", "Մարդկային վերջնական անցում։"] },
          { title: "Ակադեմիական ազնվություն", points: ["Հետևեք դպրոցի ԱԲ կանոններին։", "Բացահայտեք ԱԲ կիրառումը, երբ պահանջվում է։", "Մի հանձնեք չխմբագրված ԱԲ տեքստը որպես ձեր մտածողություն։"] }
        ],
        [
          "ԱԲ-ն կարող է օգնել կառուցվածքին և պարզությանը։ Չպետք է հորինի մեջբերումներ կամ աղբյուրներ։",
          "Ուժեղ կաղապար՝ դուք տալիս եք նշումներ, ԱԲ-ն առաջարկում է կառուցվածք, դուք վերաշարադրում եք ձեր ձայնով։",
          "Եթե նախադասությունը նոր փաստ է ավելացնում, այն համարվում է չստուգված։"
        ],
        "Տեղադրեք ձեր կարճ պարբերությունը։ Խնդրեք միայն պարզություն և ռիթմ՝ առանց նոր փաստերի։",
        "ԱԲ-ն սևագրում է։ Հեղինակը դուք եք։"
      )
    ),

    11: lesson(
      L(
        [
          { title: "Ideation and planning", points: ["Diverge first, then converge.", "Ask for options with trade-offs.", "Score ideas against your criteria."] },
          { title: "Useful prompt moves", points: ["Generate 10 ideas, then cluster them.", "Force constraints (time, budget, tools).", "Request a 1-week plan with risks."] },
          { title: "Keep ownership", points: ["You choose the direction.", "AI expands and stress-tests.", "Document decisions in your words."] }
        ],
        [
          "Brainstorming with AI works best when you separate idea generation from idea selection. First ask for volume and variety. Then ask for critique using your goals.",
          "Planning prompts should include deadlines, resources, and definition of done. Otherwise you get generic advice.",
          "End ideation sessions by writing a short decision note: chosen option, why, next three actions."
        ],
        "Pick a real project (exam prep, club event, portfolio). Ask for 8 options, then a comparison table on impact vs effort. Choose one and write the next 3 steps yourself.",
        "AI multiplies options. You pick the path."
      ),
      L(
        [
          { title: "Գաղափարներ և պլանավորում", points: ["Նախ ընդլայնիր, ապա նեղացրու։", "Խնդրիր տարբերակներ՝ փոխզիջումներով։", "Գնահատիր գաղափարները քո չափանիշներով։"] },
          { title: "Օգտակար քայլեր", points: ["10 գաղափար, ապա խմբավորում։", "Սահմանափակումներ (ժամանակ, բյուջե)։", "1 շաբաթվա պլան՝ ռիսկերով։"] },
          { title: "Պահպանիր պատասխանատվությունը", points: ["Ուղղությունը դու ես ընտրում։", "ԱԲ-ն ընդլայնում և փորձարկում է։", "Որոշումները գրիր քո բառերով։"] }
        ],
        [
          "ԱԲ-ով գաղափարների մշակումն աշխատում է, երբ առանձնացնում եք ստեղծումը և ընտրությունը։",
          "Պլանավորման պրոմփթերը պետք է ներառեն ժամկետներ, ռեսուրսներ և «պատրաստ է»-ի սահմանումը։",
          "Ավարտեք կարճ որոշման նշումով՝ ընտրված տարբերակ, ինչու, հաջորդ 3 գործողություն։"
        ],
        "Ընտրեք իրական նախագիծ։ Խնդրեք 8 տարբերակ, ապա համեմատական աղյուսակ։ Ընտրեք մեկը և գրեք հաջորդ 3 քայլը։",
        "ԱԲ-ն բազմապատկում է տարբերակները։ Ուղին դուք եք ընտրում։"
      )
    ),

    12: lesson(
      L(
        [
          { title: "Everyday AI uses", points: ["Summaries of long texts you provide.", "Meeting/action lists from your notes.", "Study plans and practice questions.", "Translation drafts you still review."] },
          { title: "Boundary examples", points: ["OK: rewrite your notes more clearly.", "Careful: medical or legal advice.", "Avoid: submitting AI work as unaided original analysis."] },
          { title: "Daily habit", points: ["One clear task per chat thread.", "Save useful prompts.", "End with a human checklist."] }
        ],
        [
          "Everyday use should reduce friction without removing responsibility. Feed the model your materials when possible, so answers stay grounded.",
          "For summaries, paste the source (or key excerpts) and ask for claims vs opinions to be separated.",
          "Build a tiny personal playbook: 5 prompts you reuse for school and life admin."
        ],
        "Create a “weekly reset” prompt: review goals, list unfinished tasks, propose a realistic plan for 5 weekdays at 60 minutes/day.",
        "Small, repeated, checked uses beat rare dramatic asks."
      ),
      L(
        [
          { title: "Առօրյա կիրառումներ", points: ["Ձեր տրամադրած երկար տեքստերի ամփոփում։", "Ձեր նշումներից գործողությունների ցանկ։", "Ուսումնական պլաններ և վարժություններ։", "Թարգմանության սևագրեր՝ ձեր ստուգմամբ։"] },
          { title: "Սահմանների օրինակներ", points: ["Լավ՝ ձեր նշումների պարզ վերաշարադրում։", "Զգույշ՝ բժշկական կամ իրավական խորհուրդ։", "Խուսափել՝ ԱԲ աշխատանքը որպես ինքնուրույն վերլուծություն հանձնել։"] },
          { title: "Ամենօրյա սովորություն", points: ["Մեկ հստակ առաջադրանք՝ մեկ զրույցում։", "Պահպանեք օգտակար պրոմփթերը։", "Ավարտեք մարդկային ստուգաթերթով։"] }
        ],
        [
          "Առօրյա կիրառումը պետք է նվազեցնի շփումը՝ առանց հանելու պատասխանատվությունը։",
          "Ամփոփումների համար տեղադրեք աղբյուրը և խնդրեք տարանջատել պնդումներն ու կարծիքները։",
          "Կազմեք փոքր անձնական ուղեցույց՝ 5 կրկնվող պրոմփթ։"
        ],
        "Ստեղծեք «շաբաթական վերագործարկում» պրոմփթ՝ նպատակներ, անավարտ աշխատանքներ, 5 օրվա իրատեսական պլան։",
        "Փոքր, կրկնվող, ստուգված կիրառումները լավ են։"
      )
    ),

    13: lesson(
      L(
        [
          { title: "Create your own prompts", points: ["Name the job.", "Write the brief once, reuse often.", "Version it when results drift."] },
          { title: "Template fields", points: ["Role", "Input I will paste", "Steps to follow", "Output format", "Quality checks"] },
          { title: "Test like a designer", points: ["Try 2–3 variants.", "Keep the winner.", "Note failure cases."] }
        ],
        [
          "This lesson is a studio session. Your output is a small library of prompts you actually intend to use.",
          "Each prompt should be understandable to your future self in two weeks. Add a one-line “when to use” note.",
          "Share prompts with classmates only if they contain no private data."
        ],
        "Write 3 prompts: (1) explain a tough topic, (2) critique your essay outline, (3) turn notes into flashcards. Test each once and improve.",
        "A prompt library is a learning asset."
      ),
      L(
        [
          { title: "Ստեղծեք ձեր պրոմփթերը", points: ["Անվանեք աշխատանքը։", "Գրեք բրիֆը մեկ անգամ, կիրառեք հաճախ։", "Երբ արդյունքը վատանում է՝ թարմացրեք։"] },
          { title: "Կաղապարի դաշտեր", points: ["Դեր", "Մուտք, որ կտեղադրեմ", "Քայլեր", "Ելքի ձևաչափ", "Որակի ստուգումներ"] },
          { title: "Փորձարկեք որպես դիզայներ", points: ["Փորձեք 2–3 տարբերակ։", "Պահեք լավագույնը։", "Նշեք ձախողման դեպքերը։"] }
        ],
        [
          "Այս դասը ստուդիա է։ Արդյունքը պրոմփթերի փոքր գրադարան է, որ իսկապես կօգտագործեք։",
          "Յուրաքանչյուր պրոմփթ պետք է հասկանալի լինի ձեզ երկու շաբաթից։ Ավելացրեք «երբ օգտագործել» նշում։",
          "Դասընկերների հետ կիսվեք միայն առանց անձնական տվյալների։"
        ],
        "Գրեք 3 պրոմփթ՝ բացատրություն, ուրվագծի քննադատություն, նշումներից քարտեր։ Փորձեք և բարելավեք։",
        "Պրոմփթերի գրադարանը ուսումնական ակտիվ է։"
      )
    ),

    14: lesson(
      L(
        [
          { title: "What are AI characters?", points: ["A character is a consistent role + personality + goals.", "Defined in text instructions (system/prompt).", "Useful for practice, tutoring, storytelling — with limits."] },
          { title: "Why characters help", points: ["Stable tone across a session.", "Clear boundaries for the conversation.", "Makes practice feel purposeful."] },
          { title: "Risks", points: ["Over-attachment or misplaced trust.", "Characters can still hallucinate.", "Not a substitute for real mentors."] }
        ],
        [
          "An AI character is not a person. It is a constrained style of response. You design traits, knowledge boundaries, and forbidden behaviours.",
          "Good educational characters explain, ask questions, and refuse harmful requests. They should admit uncertainty.",
          "Keep character chats separate from factual research chats when possible."
        ],
        "Design a “Socratic tutor” character: patient, asks questions before answers, never invents sources. Write 6–8 instruction lines.",
        "Characters are instruction sets with personality."
      ),
      L(
        [
          { title: "Ի՞նչ են ԱԲ կերպարները։", points: ["Կերպարը հետևողական դեր + անհատականություն + նպատակներ է։", "Սահմանվում է տեքստային հրահանգներով։", "Օգտակար է պրակտիկայի և պատմությունների համար՝ սահմանափակումներով։"] },
          { title: "Ինչու՞ են օգնում", points: ["Կայուն տոն զրույցում։", "Հստակ սահմաններ։", "Պրակտիկան դարձնում է նպատակային։"] },
          { title: "Ռիսկեր", points: ["Չափից կապվածություն կամ սխալ վստահություն։", "Կերպարները դեռ կարող են հորինել։", "Չեն փոխարինում իրական ուսուցիչներին։"] }
        ],
        [
          "ԱԲ կերպարը մարդ չէ։ Այն պատասխանի սահմանափակված ոճ է։",
          "Լավ ուսումնական կերպարները բացատրում են, հարցեր են տալիս և մերժում վնասակար խնդրանքները։",
          "Հնարավորության դեպքում կերպարային զրույցները առանձնացրեք փաստական հետազոտությունից։"
        ],
        "Ստեղծեք «սոկրատեսյան դաստիարակ» կերպար՝ համբերատար, նախ հարցեր, առանց հորինված աղբյուրների։",
        "Կերպարները անհատականությամբ հրահանգներ են։"
      )
    ),

    15: lesson(
      L(
        [
          { title: "Personality from text?", points: ["Yes — traits are described in language.", "Consistency needs explicit rules.", "Examples lock in style better than adjectives alone."] },
          { title: "Specify behaviour", points: ["Voice (formal / warm / concise).", "Values (honesty, safety, curiosity).", "Moves (ask clarifying questions, give options)."] },
          { title: "Stress-test", points: ["Ask off-topic or pressured questions.", "See if boundaries hold.", "Adjust the instructions."] }
        ],
        [
          "Personality adjectives like “friendly” are weak alone. Combine them with do/don’t rules and sample lines.",
          "If you need a debate partner, define that they must steelman the opposite view before arguing.",
          "Document your character card so you can reload it in a new chat."
        ],
        "Write two versions of the same tutor: one concise, one elaborate. Chat for 5 turns each and note which helps you learn better.",
        "Rules + examples create personality."
      ),
      L(
        [
          { title: "Անհատականություն տեքստո՞վ։", points: ["Այո՝ հատկությունները նկարագրվում են լեզվով։", "Հետևողականության համար պետք են հստակ կանոններ։", "Օրինակները ավելի լավ են ամրացնում ոճը, քան միայն ածականները։"] },
          { title: "Սահմանեք վարքը", points: ["Ձայն (պաշտոնական / ջերմ / համառոտ)։", "Արժեքներ (ազնվություն, անվտանգություն)։", "Քայլեր (հստակեցնող հարցեր, տարբերակներ)։"] },
          { title: "Սթրես-թեստ", points: ["Տվեք թեմայից դուրս հարցեր։", "Տեսեք՝ սահմանները պահվո՞ւմ են։", "Կարգավորեք հրահանգները։"] }
        ],
        [
          "«Բարեհամբույր» ածականը միայնակ թույլ է։ Համադրեք do/don’t կանոնների և օրինակների հետ։",
          "Եթե պետք է բանավեճի գործընկեր, սահմանեք, որ նախ պետք է ուժեղ ներկայացնի հակառակ տեսակետը։",
          "Փաստագրեք կերպարի քարտը՝ նոր զրույցում վերաբեռնելու համար։"
        ],
        "Նույն դաստիարակի երկու տարբերակ՝ համառոտ և մանրամասն։ 5 քայլ զրուցեք և նշեք՝ որն է ավելի օգնում։",
        "Կանոններ + օրինակներ = անհատականություն։"
      )
    ),

    16: lesson(
      L(
        [
          { title: "Characters for imagination", points: ["Story coaches, interviewers, historical personas (clearly fictionalised).", "Always label fiction vs fact.", "Use for rehearsal, not authority."] },
          { title: "Safe creative practice", points: ["No impersonation of real private people.", "No harmful or abusive scenarios.", "Keep school policies in view."] },
          { title: "Learning angle", points: ["Practice explaining ideas to different audiences.", "Rehearse presentations.", "Explore perspectives ethically."] }
        ],
        [
          "Creative characters can make practice engaging: pitch your idea to an “investor,” explain physics to a “curious child,” or run a mock interview.",
          "When using historical or public figures, remind the model (and yourself) that replies are dramatizations, not primary sources.",
          "End creative sessions by extracting transferable skills: clearer explanations, better questions, stronger structure."
        ],
        "Create a “panel of three reviewers” character set (supportive, sceptical, practical). Ask each to comment on one project idea.",
        "Imagination is a sandbox — keep the exit back to reality."
      ),
      L(
        [
          { title: "Կերպարներ երևակայության համար", points: ["Պատմության մարզիչներ, հարցազրույցներ, պատմական կերպարներ (հստակ գեղարվեստական)։", "Միշտ տարբերակեք գեղարվեստն ու փաստը։", "Օգտագործեք փորձարկման համար, ոչ իշխանության։"] },
          { title: "Անվտանգ ստեղծագործություն", points: ["Առանց իրական անձանց կեղծ ներկայացման։", "Առանց վնասակար սցենարների։", "Հետևեք դպրոցի կանոններին։"] },
          { title: "Ուսումնական անկյուն", points: ["Բացատրեք գաղափարները տարբեր լսարանների։", "Փորձարկեք ներկայացումներ։", "Էթիկորեն ուսումնասիրեք տեսանկյուններ։"] }
        ],
        [
          "Ստեղծագործ կերպարները պրակտիկան դարձնում են հետաքրքիր՝ ներկայացրեք գաղափարը «ներդրողին» կամ բացատրեք ֆիզիկա «հետաքրքրասեր երեխային»։",
          "Պատմական կերպարների դեպքում հիշեցրեք, որ պատասխանները դրամատիզացիա են, ոչ առաջնային աղբյուր։",
          "Ավարտեք՝ առանձնացնելով փոխանցելի հմտությունները։"
        ],
        "Ստեղծեք երեք գրախոս՝ աջակցող, կասկածող, գործնական։ Խնդրեք մեկ նախագծի մասին մեկնաբանություն։",
        "Երևակայությունը ավազատուփ է՝ ելքը դեպի իրականություն պահեք։"
      )
    ),

    17: lesson(
      L(
        [
          { title: "Characters — summary", points: ["Text defines behaviour.", "Boundaries protect learning.", "Fiction must be labelled."] },
          { title: "Next", points: ["Choose tools intentionally.", "Match tool to task.", "Avoid lock-in thinking."] }
        ],
        [
          "You can now draft character cards that stay useful across chats.",
          "Next module compares ways to access LLMs and pick the right tool for the job."
        ],
        "Save one character card you would actually reuse for studying.",
        "Design characters. Keep humans in charge."
      ),
      L(
        [
          { title: "Ամփոփում", points: ["Տեքստը սահմանում է վարքը։", "Սահմանները պաշտպանում են ուսուցումը։", "Գեղարվեստը պետք է պիտակավորվի։"] },
          { title: "Հաջորդը", points: ["Գործիքներն ընտրեք մտածված։", "Համապատասխանեցրեք գործիքն ու առաջադրանքը։"] }
        ],
        [
          "Այժմ կարող եք կազմել կերպարների քարտեր, որոնք օգտակար են տարբեր զրույցներում։",
          "Հաջորդ մոդուլը համեմատում է ՄԼՄ-ների հասանելիության եղանակները։"
        ],
        "Պահպանեք մեկ կերպարի քարտ, որ իսկապես կօգտագործեք սովորելիս։",
        "Կերպարներ ստեղծիր։ Մարդը մնում է պատասխանատու։"
      )
    ),

    18: lesson(
      L(
        [
          { title: "Ways to access LLMs", points: ["Consumer chat apps.", "School / workspace copilots.", "API & builder tools.", "Local / offline options (advanced)."] },
          { title: "Choose by job", points: ["Quick drafting → chat app.", "Docs & email inside school suite → copilot.", "Custom workflows → builders/API.", "Sensitive data → check approved tools only."] },
          { title: "Decision checklist", points: ["Is the tool approved by your school?", "Where does data go?", "Can you export/save your work?", "Cost / limits?"] }
        ],
        [
          "There is no single “best” model for every task. There is a best fit for privacy rules, features, and your workflow.",
          "Prefer institution-approved tools for schoolwork that includes personal or unpublished materials.",
          "Learn one primary tool deeply, then add specialists when needed (image tools, coding assistants, research browsers)."
        ],
        "Make a 2-column table: Task | Best tool type for you (with one reason each) for five tasks you actually do.",
        "Tool choice is a responsibility choice."
      ),
      L(
        [
          { title: "ՄԼՄ-ների հասանելիություն", points: ["Սպառողական չաթ հավելվածներ։", "Դպրոցական / աշխատանքային համաօգնականներ։", "API և կառուցման գործիքներ։", "Տեղական տարբերակներ (առաջադեմ)։"] },
          { title: "Ընտրեք ըստ աշխատանքի", points: ["Արագ սևագիր → չաթ։", "Փաստաթղթեր դպրոցական փաթեթում → copilot։", "Հատուկ գործընթացներ → builder/API։", "Զգայուն տվյալներ → միայն հաստատված գործիքներ։"] },
          { title: "Որոշման ստուգաթերթ", points: ["Հաստատվա՞ծ է դպրոցի կողմից։", "Որտե՞ղ են գնում տվյալները։", "Կարո՞ղ եք արտահանել աշխատանքը։", "Արժե՞ք / սահմանափակումներ։"] }
        ],
        [
          "Չկա մեկ «լավագույն» մոդել բոլոր առաջադրանքների համար։ Կա լավագույն համապատասխանություն գաղտնիության կանոններին և ձեր աշխատանքին։",
          "Դպրոցական աշխատանքի համար նախընտրեք հաստատության հաստատած գործիքները։",
          "Մեկ հիմնական գործիք սովորեք խորությամբ, ապա ավելացրեք մասնագիտացվածները։"
        ],
        "Կազմեք աղյուսակ՝ Առաջադրանք | Լավագույն գործիքի տեսակ (մեկ պատճառ)՝ ձեր 5 իրական աշխատանքների համար։",
        "Գործիքի ընտրությունը պատասխանատվության ընտրություն է։"
      )
    ),

    19: lesson(
      L(
        [
          { title: "Tools — summary", points: ["Match tool to task and policy.", "Privacy first for school data.", "Depth beats tool-hopping."] },
          { title: "Next up", points: ["Costs and limits.", "Prompt libraries.", "Sustainable habits."] }
        ],
        [
          "You can explain why you pick a tool, not just which logo you like.",
          "Practical matters comes next: cost awareness and prompt management."
        ],
        "Write your personal rule: “I will only paste ___ into public AI tools.”",
        "Approved tools + clear jobs."
      ),
      L(
        [
          { title: "Ամփոփում", points: ["Համապատասխանեցրեք գործիքը առաջադրանքին և կանոններին։", "Դպրոցական տվյալների համար՝ նախ գաղտնիություն։", "Խորությունը գործիքափոխությունից լավ է։"] },
          { title: "Հաջորդը", points: ["Արժեք և սահմանափակումներ։", "Պրոմփթերի գրադարաններ։", "Կայուն սովորություններ։"] }
        ],
        [
          "Կարող եք բացատրել՝ ինչու եք ընտրում գործիքը, ոչ միայն որ լոգոն եք սիրում։",
          "Հաջորդը՝ ծախսերի գիտակցում և պրոմփթերի կառավարում։"
        ],
        "Գրեք անձնական կանոն՝ «Հանրային ԱԲ գործիքներում կտեղադրեմ միայն ___։»",
        "Հաստատված գործիքներ + հստակ աշխատանքներ։"
      )
    ),

    20: lesson(
      L(
        [
          { title: "Understanding costs", points: ["Free tiers have limits.", "Paid plans trade money for higher caps/features.", "API usage is often priced by tokens."] },
          { title: "What drives cost", points: ["Long inputs and outputs.", "Large models vs smaller ones.", "Image/multimodal features.", "Retries and abandoned chats."] },
          { title: "Student strategy", points: ["Draft short, then expand.", "Paste only needed context.", "Cache reusable prompts.", "Know your monthly limit."] }
        ],
        [
          "Even when a chat feels “free,” capacity is limited. Heavy use can hit rate limits or require payment.",
          "Token-aware habits help everyone: shorter prompts with the right details beat huge dumps of irrelevant text.",
          "If you use school-provided access, treat it as a shared resource — don’t run endless unnecessary generations."
        ],
        "Estimate: if each reply is ~500 tokens and you do 40 replies/day, roughly how many tokens/month is that? (Order-of-magnitude thinking is enough.)",
        "Efficiency is part of responsible use."
      ),
      L(
        [
          { title: "Արժեքի ըմբռնում", points: ["Անվճար շերտերն ունեն սահմանափակումներ։", "Վճարովի պլանները տալիս են ավելի բարձր սահմաններ։", "API-ն հաճախ գնագոյացվում է token-ներով։"] },
          { title: "Ինչն է բարձրացնում արժեքը", points: ["Երկար մուտքեր և ելքեր։", "Մեծ մոդելներ։", "Պատկերային հնարավորություններ։", "Անպետք կրկնություններ։"] },
          { title: "Ուսանողի ռազմավարություն", points: ["Կարճ սևագիր, ապա ընդլայնում։", "Տեղադրեք միայն անհրաժեշտ համատեքստը։", "Պահեք կրկնվող պրոմփթերը։", "Իմացեք ամսական սահմանը։"] }
        ],
        [
          "Նույնիսկ երբ չաթը «անվճար» է թվում, հզորությունը սահմանափակ է։",
          "Token-ագիտակ սովորությունները օգնում են՝ կարճ, ճիշտ մանրամասներով պրոմփթերը լավ են երկար անպետք տեքստից։",
          "Դպրոցական հասանելիությունը համատեղ ռեսուրս է։"
        ],
        "Գնահատեք՝ եթե յուրաքանչյուր պատասխանը ~500 token է և օրական 40 պատասխան եք անում, մոտավորապես քանի՞ token է ամսում։",
        "Արդյունավետությունը պատասխանատու կիրառման մաս է։"
      )
    ),

    21: lesson(
      L(
        [
          { title: "Managing prompts", points: ["Name them by job.", "Store in notes / Notion / doc.", "Include version + date.", "Tag: school / creative / admin."] },
          { title: "Library hygiene", points: ["Retire broken prompts.", "Keep one “golden” version per job.", "Share only sanitized copies."] },
          { title: "Team habits", points: ["Agree on disclosure rules.", "Don’t paste secrets into shared libraries.", "Review prompts after policy changes."] }
        ],
        [
          "A prompt without a home will be reinvented poorly next week. Create a simple folder structure now.",
          "Each entry: title, when to use, prompt text, example input, notes on failure modes.",
          "Revisit your library monthly — tools and school rules change."
        ],
        "Create a one-page prompt library with at least 5 entries using the fields above.",
        "Organised prompts compound your learning."
      ),
      L(
        [
          { title: "Պրոմփթերի կառավարում", points: ["Անվանեք ըստ աշխատանքի։", "Պահեք նշումներում / փաստաթղթում։", "Ներառեք տարբերակ և ամսաթիվ։", "Պիտակավորեք՝ դպրոց / ստեղծագործ / վարչական։"] },
          { title: "Գրադարանի կարգապահություն", points: ["Հեռացրեք կոտրված պրոմփթերը։", "Յուրաքանչյուր աշխատանքի համար մեկ «ոսկե» տարբերակ։", "Կիսվեք միայն մաքրված պատճեններով։"] },
          { title: "Թիմային սովորություններ", points: ["Համաձայնեցրեք բացահայտման կանոնները։", "Գաղտնիքներ մի՛ դրեք ընդհանուր գրադարանում։", "Քաղաքականության փոփոխությունից հետո վերանայեք։"] }
        ],
        [
          "Առանց տեղի պրոմփթը հաջորդ շաբաթ վատ կվերահայտնագործվի։ Հիմա ստեղծեք պարզ թղթապանակ։",
          "Յուրաքանչյուր գրառում՝ վերնագիր, երբ օգտագործել, տեքստ, օրինակ մուտք, ձախողման նշումներ։",
          "Ամեն ամիս վերանայեք գրադարանը։"
        ],
        "Ստեղծեք մեկ էջանոց պրոմփթերի գրադարան՝ առնվազն 5 գրառումով։",
        "Կազմակերպված պրոմփթերը բազմապատկում են սովորածը։"
      )
    ),

    22: lesson(
      L(
        [
          { title: "Practical matters — summary", points: ["Respect limits and costs.", "Keep a living prompt library.", "Privacy and integrity stay non-negotiable."] },
          { title: "Course close (demo path)", points: ["You can brief AI clearly.", "You can check outputs.", "You can choose tools and habits wisely."] },
          { title: "Your next 7 days", points: ["Use 3 saved prompts.", "Verify one factual claim daily.", "Refuse one unsafe paste."] }
        ],
        [
          "This demo course used slides and text — the same habits apply when videos or live workshops are added later.",
          "Keep practicing the loop: understand the task, brief the model, inspect the draft, decide as a human.",
          "Thank you for exploring with EUA AI Academy."
        ],
        "Write a short reflection (8–10 lines): what you will start, stop, and continue when using AI.",
        "Human judgment first — always."
      ),
      L(
        [
          { title: "Ամփոփում", points: ["Հարգեք սահմաններն ու ծախսերը։", "Պահեք կենդանի պրոմփթերի գրադարան։", "Գաղտնիությունն ու ազնվությունը անփոխարինելի են։"] },
          { title: "Դասընթացի ավարտ (դեմո)", points: ["Կարող եք հստակ բրիֆավորել ԱԲ-ին։", "Կարող եք ստուգել ելքերը։", "Կարող եք խելամիտ ընտրել գործիքներ և սովորություններ։"] },
          { title: "Ձեր հաջորդ 7 օրը", points: ["Օգտագործեք 3 պահված պրոմփթ։", "Ամեն օր ստուգեք մեկ փաստական պնդում։", "Մերժեք մեկ անվտանգ չտեղադրում։"] }
        ],
        [
          "Այս դեմո դասընթացն օգտագործեց սլայդներ և տեքստ։ Նույն սովորությունները կիրառելի կլինեն տեսանյութերի ավելացումից հետո էլ։",
          "Շարունակեք շրջանը՝ հասկացիր առաջադրանքը, բրիֆավորիր, ստուգիր, որոշիր որպես մարդ։",
          "Շնորհակալություն ՀԵՀ ԱԲ ակադեմիայի հետ բացահայտելու համար։"
        ],
        "Գրեք կարճ անդրադարձ (8–10 տող)՝ ինչ կսկսեք, ինչ կդադարեցնեք, ինչ կշարունակեք ԱԲ օգտագործելիս։",
        "Նախ՝ մարդկային դատողությունը։ Միշտ։"
      )
    )
  };

  global.EuaLessonContent = {
    get(lessonId, language) {
      const entry = content[lessonId];
      if (!entry) return null;
      return entry[language === "hy" ? "hy" : "en"] || entry.en;
    }
  };
})(window);
