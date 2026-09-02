# EUA AI Academy - Landing Page

Minimal bilingual academy and course-discovery experience for **ai.eua.am**.

## Structure

- `index.html` - academy homepage and four-course catalogue
- `ai-explorers.html` - course-specific AI Explorers overview
- `track.html` - course-specific entry pages for students, educators, and government workers
- `styles/academy.css` - academy design system and responsive layout
- `js/academy.js` - English/Armenian homepage language control
- `assets/og.png` - social sharing preview

## Preview locally

```powershell
cd landing
python -m http.server 8080
```

Open http://localhost:8080

## Deploy to Netlify

1. Create site from this `landing/` folder
2. Build command: *(none - static)*
3. Publish directory: `.`
4. Add custom domain `ai.eua.am`
5. DNS: CNAME `ai` → `[your-site].netlify.app`

## Deploy to Vercel

```powershell
cd landing
npx vercel --prod
```

Add `ai.eua.am` in Vercel project settings → Domains.

## Deploy to EUA server

Copy contents of `landing/` to static web root for `ai.eua.am` virtual host.

## Before go-live

- [ ] Replace EUA blue hex in `styles/eua.css` with official values from comms
- [ ] Replace the text monogram with the approved official EUA logo asset
- [ ] Confirm programme naming and permission to use the EUA AI Academy identity
- [ ] Open enrolment only after legal, safeguarding, LMS, and soft-launch gates pass
- [ ] Connect the approved enrolment and guardian-consent flow to the LMS
- [ ] Add analytics (Plausible or GA4)
- [ ] Legal sign-off on the privacy notice, consent evidence, retention, and withdrawal process
- [ ] Update target dates if the gated launch baseline changes

## Current contact behaviour

The pre-launch page deliberately does not collect personal data. Its CTA opens an email to `info@eua.am`. Replace it with the approved LMS enrolment flow only after Gate G4 and the soft-launch plan are ready. See the [Execution Strategy](../docs/EXECUTION-STRATEGY.md).
