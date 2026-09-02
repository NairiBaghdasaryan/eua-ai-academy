# EUA AI Academy — Supervisor Brief

**Package for supervisor review · 31 August 2026**

---

## Quick links

| Item | Location |
|------|----------|
| **Landing page (local)** | Open `landing/index.html` in browser |
| **Landing page (live)** | `https://ai.eua.am` — after DNS deploy |
| **Programme design (full)** | [EUA-AI-Academy-Programme-Design-v2.md](../EUA-AI-Academy-Programme-Design-v2.md) |
| **Detailed curriculum + runtimes** | [DETAILED-CURRICULUM.md](./DETAILED-CURRICULUM.md) |
| **Executive summary** | [EXECUTIVE-SUMMARY.md](./EXECUTIVE-SUMMARY.md) |
| **Execution strategy** | [EXECUTION-STRATEGY.md](./EXECUTION-STRATEGY.md) |
| **Dated launch timeline** | [20-WEEK-TIMELINE.md](./20-WEEK-TIMELINE.md) |
| **Open decisions (sign-off)** | [OPEN-DECISIONS-MEMO.md](./OPEN-DECISIONS-MEMO.md) |
| **Risk register** | [RISK-REGISTER.md](./RISK-REGISTER.md) |

---

## One-minute pitch

EUA AI Explorers is a **proposed free, self-paced video course** for Armenian teenagers (14–16) that aims to turn passive AI users into people who can **choose tools, direct them, challenge unreliable answers, and build real things**. It is the proposed first programme in an **EUA AI Academy** roadmap. Registration is not yet open.

**Tagline:** Understand it. Question it. Build with it.

---

## What needs your decision (Week 1–2)

1. Guardian consent legal wording
2. LMS platform (EUA-owned recommended)
3. Google Workspace for students (yes recommended)
4. Presenter appointment
5. Badge policy: exams-only at launch (recommended)
6. Exams optional at launch (recommended)
7. Pre/post instrument at launch (recommended yes)
8. FAST / Ministry outreach timing

**Separate approval:** budget for video production, annual time-sensitive content refresh, monthly Demo Day, two moderators, LMS/hosting, captions, legal/privacy, accessibility QA, and programme management.

→ Full detail: [OPEN-DECISIONS-MEMO.md](./OPEN-DECISIONS-MEMO.md)

---

## Landing page — professional pre-launch version

1. Honest pre-launch hero and January 2027 target  
2. Programme roadmap with inactive future tracks  
3. Six proposed learner projects  
4. Full 20-lesson / 7-module curriculum with 507 minutes of video, timed chapters, outcomes, and assignments  
5. Active-learning lesson model  
6. Draft certification and eight-badge framework, clearly marked pending approval  
7. Parent, privacy, and safeguarding commitments with ARLIS source  
8. Four-phase launch roadmap  
9. Non-collecting contact CTA  
10. Pre-launch FAQ  

**Languages:** Armenian (default) + English toggle.

---

## Re-baselined plan at a glance

```
Weeks 1–2   Decisions, legal, funding, owners
Weeks 3–4   Service design, staging page, pilot preparation
Weeks 5–7   Pilot 4 lessons with 8 learners; format lock
Weeks 8–15  Produce 20 lessons, workbooks, captions, exams
Weeks 16–17 Platform, consent, moderation, certificates, QA
Week 18     Holiday buffer and change freeze
Weeks 19–20 Soft launch with 50–100 learners
Week 21     Public launch target: 21 January 2027
Week 22     First Demo Day target: 28 January 2027
```

→ Full steps, resources, gates, and KPIs: [EXECUTION-STRATEGY.md](./EXECUTION-STRATEGY.md)

---

## Honest expectations

Open self-paced courses can have low completion. EUA should report both **absolute completions and conversion rates**, treat drop-off as curriculum feedback, and avoid presenting reach as a substitute for a working learner journey. Demo Day is the proposed live completion and community anchor and requires recurring funding.

---

## How to preview the landing page locally

```bash
cd landing
# Python 3:
python -m http.server 8080
# Then open http://localhost:8080
```

Or open `landing/index.html` directly in a browser.

---

## How to deploy to ai.eua.am

See [landing/README.md](../landing/README.md) — Netlify/Vercel or EUA static hosting; CNAME `ai` → deploy URL.

---

## Execution guides (by phase)

| Phase | Guide |
|-------|-------|
| Weeks 1–2 | [WEEK1-ACTIONS.md](./WEEK1-ACTIONS.md) |
| Weeks 5–7 | [PILOT-GUIDE.md](./PILOT-GUIDE.md) |
| Weeks 8–15 | [VIDEO-PRODUCTION-CHECKLIST.md](./VIDEO-PRODUCTION-CHECKLIST.md) |
| Weeks 16–17 | [PLATFORM-SETUP-GUIDE.md](./PLATFORM-SETUP-GUIDE.md) |
| Weeks 19–20 | [SOFT-LAUNCH-PLAYBOOK.md](./SOFT-LAUNCH-PLAYBOOK.md) |
| Weeks 21–22 | [LAUNCH-CAMPAIGN.md](./LAUNCH-CAMPAIGN.md) |

---

*Proposed EUA AI Academy initiative · European University of Armenia*
