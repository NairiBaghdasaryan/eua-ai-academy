(function (global) {
  "use strict";

  const catalog = global.EuaCourseCatalog;
  const content = {};

  if (!catalog) {
    global.EuaLessonContent = { get: () => null };
    return;
  }

  const labels = {
    en: {
      idea: "Core idea",
      apply: "Apply the idea",
      checkpoint: "Human checkpoint",
      objective: "Learning goal",
      practice: "Practical challenge",
      quality: "Quality standard",
      resources: "Useful resources",
      readingLead: "This lesson builds a practical understanding of",
      readingClose: "Use the challenge to test the idea in a real task. Keep a record of your input, the AI output, the changes you made, and the evidence you checked.",
      checks: ["Check important facts and assumptions", "Protect private or restricted information", "You remain responsible for the final decision"]
    },
    hy: {
      idea: "Հիմնական գաղափար",
      apply: "Կիրառեք գաղափարը",
      checkpoint: "Մարդկային ստուգում",
      objective: "Ուսումնական նպատակ",
      practice: "Գործնական առաջադրանք",
      quality: "Որակի չափանիշ",
      resources: "Օգտակար ռեսուրսներ",
      readingLead: "Այս դասը ձևավորում է գործնական պատկերացում հետևյալ թեմայի մասին՝",
      readingClose: "Գործնական առաջադրանքով փորձարկեք գաղափարը իրական իրավիճակում։ Պահեք մուտքային տվյալը, ԱԲ-ի արդյունքը, ձեր կատարած փոփոխությունները և ստուգված ապացույցները։",
      checks: ["Ստուգեք կարևոր փաստերն ու ենթադրությունները", "Պաշտպանեք անձնական կամ սահմանափակ տվյալները", "Վերջնական որոշման համար պատասխանատու եք դուք"]
    }
  };

  function buildPayload(item, language) {
    const t = labels[language];
    const title = item[`title_${language}`];
    const objective = item[`objective_${language}`];
    const points = item[`points_${language}`];
    const practice = item[`practice_${language}`];
    const takeaway = item[`takeaway_${language}`];

    return {
      slides: [
        { title: `${t.idea}: ${title}`, points },
        { title: t.apply, points: [`${t.objective}: ${objective}`, `${t.practice}: ${practice}`, `${t.quality}: ${takeaway}`] },
        { title: t.checkpoint, points: t.checks }
      ],
      paragraphs: [
        `${t.readingLead} ${title}. ${objective}`,
        points.join(" "),
        t.readingClose
      ],
      practice,
      takeaway,
      resourcesTitle: t.resources,
      resources: (item.resources || []).map((resource) => ({
        title: resource[`title_${language}`],
        href: resource.href
      }))
    };
  }

  catalog.modules.forEach((module) => {
    module.lessons.forEach((item) => {
      content[item.id] = {
        en: buildPayload(item, "en"),
        hy: buildPayload(item, "hy")
      };
    });
  });

  global.EuaLessonContent = {
    get(id, language) {
      const item = content[Number(id)];
      return item ? (item[language] || item.en) : null;
    }
  };
})(window);
