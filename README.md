# EUA AI Academy — Project Files

Programme design, professional bilingual landing page, and gated launch strategy for the proposed EUA AI Explorers programme.

## Start here (supervisor)

1. **[docs/EXECUTION-STRATEGY.md](docs/EXECUTION-STRATEGY.md)** — step-by-step plan, dated timeline, resources, gates, and KPIs
2. **[docs/SUPERVISOR-BRIEF.md](docs/SUPERVISOR-BRIEF.md)** — supervisor index
3. **[landing/index.html](landing/index.html)** — bilingual pre-launch page preview
4. **[docs/OPEN-DECISIONS-MEMO.md](docs/OPEN-DECISIONS-MEMO.md)** — 8 decisions needing sign-off

## Programme design

- [EUA-AI-Academy-Programme-Design-v2.md](EUA-AI-Academy-Programme-Design-v2.md) — full v2.0 specification
- [docs/DETAILED-CURRICULUM.md](docs/DETAILED-CURRICULUM.md) — exact video runtimes, chapter plans, outcomes, assignments, and evidence for all 20 lessons

## Landing page

```powershell
cd landing
python -m http.server 8080
```

## Course platform (login + videos + quiz)

**One server — website + course together:**

```powershell
cd platform
npm install
npm start
```

Open **http://localhost:8080** — everything on one site:

| URL | Purpose |
|-----|---------|
| http://localhost:8080/ | Landing page |
| http://localhost:8080/ai-explorers.html | AI Explorers course overview |
| http://localhost:8080/course.html | Authenticated lesson player |
| http://localhost:8080/login.html | Student login |
| http://localhost:8080/admin.html | Admin — paste YouTube links |

Admin: `admin@eua.am` / `admin123`

## Execution guides

| Weeks | Guide |
|-------|-------|
| 1–2 | [docs/WEEK1-ACTIONS.md](docs/WEEK1-ACTIONS.md) |
| 5–7 | [docs/PILOT-GUIDE.md](docs/PILOT-GUIDE.md) |
| 8–15 | [docs/VIDEO-PRODUCTION-CHECKLIST.md](docs/VIDEO-PRODUCTION-CHECKLIST.md) |
| 16–17 | [docs/PLATFORM-SETUP-GUIDE.md](docs/PLATFORM-SETUP-GUIDE.md) |
| 19–20 | [docs/SOFT-LAUNCH-PLAYBOOK.md](docs/SOFT-LAUNCH-PLAYBOOK.md) |
| 21–22 | [docs/LAUNCH-CAMPAIGN.md](docs/LAUNCH-CAMPAIGN.md) |

## Supervisor package

- [docs/EXECUTIVE-SUMMARY.md](docs/EXECUTIVE-SUMMARY.md)
- [docs/RISK-REGISTER.md](docs/RISK-REGISTER.md)
- [docs/20-WEEK-TIMELINE.md](docs/20-WEEK-TIMELINE.md)
- [docs/EXECUTION-STRATEGY.md](docs/EXECUTION-STRATEGY.md)
