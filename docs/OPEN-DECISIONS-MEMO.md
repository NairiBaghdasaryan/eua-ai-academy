# EUA AI Academy — Open Decisions Memo

**Prepared for:** Faculty of Artificial Intelligence, European University of Armenia  
**Date:** 31 August 2026  
**Status:** Awaiting sign-off (Week 1–2 checkpoint)

---

## Summary

Eight decisions block enrolment, production, or launch. Recommendations below follow Programme Design v2.0 (Section 21). Each item needs a named owner and a decision date before Week 3 work begins.

| # | Decision | Recommendation | Owner | Target date | Blocks |
|---|----------|----------------|-------|-------------|--------|
| 1 | Legal confirmation of under-16 consent notice, evidence, retention, withdrawal, and channel wording | Confirm Article 9 with counsel; use a guardian confirmation gate before account creation | Legal + Faculty | 4 Sep 2026 | Enrolment flow |
| 2 | Google Workspace for Education accounts for enrolled students | **Yes** — institutional control for Gemini and NotebookLM; reduces personal-account consent burden | IT + Dean | Week 2 | Lessons 3, 11, 12, 16, 20 |
| 3 | Course platform (EUA LMS vs third party) | **EUA-owned LMS preferred** — EUA holds completion, exam, and pre/post data (Section 11 research value) | Dean + IT | Week 1 | Certificates, analytics |
| 4 | Badge verification model at launch | **Exams only** — fully verifiable; Workbook self-report noted on badge page (Section 10) | Faculty Dean | Week 2 | Badge issuance |
| 5 | Exams compulsory or optional | **Optional** — stated on landing page and parent FAQ; one-line change if accreditation requires otherwise | Faculty Dean | Week 2 | LMS config |
| 6 | Presenter selection | Select for credibility **and** watchability; must be available for annual Layer B re-shoots | Faculty Dean | Week 2 | Video production |
| 7 | Pre/post instrument at launch | **Yes** — one screen at enrolment, one after Lesson 20; foundation for Year 3 evidence | Curriculum lead | Week 2 | LMS |
| 8 | FAST / Ministry outreach timing | **Week 21** — institutional outreach after soft-launch gate; position as complementary, not as a formal feeder without agreement | Dean | 18–20 Jan 2027 | Partnerships |

---

## Decision 1 — Guardian consent

**Context:** Article 9(9) of Armenia's Law on Personal Data Protection states that a legal representative gives consent for processing the personal data of a minor under **16**. The official consolidated text was checked on ARLIS on 31 August 2026. Counsel must still approve how the programme obtains, proves, retains, withdraws, and scopes that consent.

**Primary source:** [ARLIS — Law on Personal Data Protection, Article 9](https://www.arlis.am/hy/acts/218690)

**Required actions:**
- [ ] Counsel confirms article citation and form wording
- [ ] Enrolment form: guardian email mandatory when age &lt; 16
- [ ] No student account until guardian confirmation email returns
- [ ] Consent names specific channels: course platform, moderated Telegram group (no DMs)
- [ ] Notice states purpose, data fields, operations, recipients, retention, withdrawal, correction, and deletion/escalation process

**Draft guardian email must include:** tools used, data involved, integrity rules, Telegram safeguarding rules, one parent action (review Workbook twice).

---

## Decision 2 — Google Workspace

| Option | Pros | Cons |
|--------|------|------|
| **Yes (recommended)** | Institutional Gemini/NotebookLM; auditable; aligns with OpenAI Edu national context | IT setup cost; admin overhead |
| No | Faster launch | Personal accounts; weaker data posture; uneven tool access |

---

## Decision 3 — Platform

| Option | Pros | Cons |
|--------|------|------|
| **EUA LMS (recommended)** | Owns data; verification URLs; integrates with EUA identity | Build/configure time |
| Third party (Moodle Cloud, etc.) | Faster | Data export dependency; less control |

**Minimum requirements:** lesson progress tracking, optional exams, badge/certificate generation, verification URL, pre/post screens, guardian consent gate.

---

## Decision 4 & 5 — Badges and exams

**Launch policy (recommended):**
- Badges awarded on **exam pass only** (70%, two retakes)
- Exams **optional** — unlock after module completion; failure blocks nothing
- Landing page and FAQ state this explicitly

---

## Decision 6 — Presenter

**Criteria:** credible to parents and university; watchable to 15-year-olds on a phone at night; available for Layer B annual re-shoots (~6–12 month shelf life on demos).

**Schedule impact:** Presenter must be confirmed before Week 7 recording begins.

---

## Decision 7 — Pre/post instrument

- 20 items: half conceptual, half judgement
- Same instrument at enrolment and after Lesson 20
- Six-month follow-up (10 questions) scoped for Year 1 Q3

---

## Decision 8 — National positioning

**Public message to FAST / Ministry:**
> EUA AI Explorers serves ages 14–16, free and non-selective — upstream of Generation AI (grades 10–12, competitive). We refer motivated graduates to national programmes.

**Contact:** Week 21, after the soft-launch gate and before the 21 January public-launch target.

---

## Week 1 operational actions (parallel)

- [ ] Email `info@eua.am` — request official logo (SVG), brand hex values, `ai.eua.am` subdomain approval
- [ ] IT ticket: DNS CNAME for `ai.eua.am` → staging host
- [ ] Safeguarding: crisis protocol one-pager (Section 19.8) — inappropriate content, classmate images, disclosures
- [ ] Sign this memo or annotate with alternate decisions

---

**Signatures**

| Role | Name | Date | Decision |
|------|------|------|----------|
| Dean / Faculty lead | | | |
| Legal | | | |
| IT | | | |
| Safeguarding | | | |
