# EUA AI Platform - Unified Server

Serves the **landing website** and **course API** from one process on port **8080**.

## Quick start

```powershell
cd platform
npm install
npm start
```

| URL | What |
|-----|------|
| http://localhost:8080/ | Marketing site |
| http://localhost:8080/#curriculum | Lesson list + video player |
| http://localhost:8080/login.html | Student login |
| http://localhost:8080/admin.html | Admin - YouTube URLs |

**Admin:** `admin@eua.am` / `admin123`

## Admin workflow

1. Log in at `/admin.html`
2. Paste YouTube URL for each lesson → Save
3. Students watch at `/#curriculum`

## Deploy

Set `SESSION_SECRET` in production. Point `learn.ai.eua.am` or `ai.eua.am` to this Node process behind nginx with HTTPS.

Database: `platform/data/eua-ai.db` - back up regularly.
