# AI Explorers web course

The public illustrated lesson overview is at `landing/ai-explorers.html`. The handbook reader now lives at `landing/course.html`, replacing the previous slide-based player. Both the overview's lesson links and the dashboard's Continue course button enter that reader through the existing login flow. Database records, legacy progress and quiz records, and certificate rules are unchanged; the new handbook self-checks are not synced to those old records.

The current GitHub Pages login is an explicitly labelled static demo. `course-access.js` recognizes that existing demo session; otherwise it checks the platform session and active AI Explorers enrollment. This is a navigation gate only: static course JSON and downloads are still public. Genuine private materials require deploying the backend and enforcing access on every content/download endpoint. Backend failures do not automatically turn the new reader into demo mode.

## Design rationale

Reference reviewed: https://course.elementsofai.com/1/1 on 9 September 2026. Its useful teaching patterns are a focused reading column, strong heading hierarchy, visual examples, short explanatory notes, embedded exercises, and next-section navigation. This implementation uses EUA's own handbook content, navy and yellow palette, and original workflow diagrams. No reference-site prose, artwork, or branding was copied.

English reading uses Georgia with system sans-serif headings. Armenian uses Sylfaen with system Armenian-capable sans-serif headings. These are local font stacks; the course does not send font requests to a third-party service. Body text is responsive, with a mobile contents disclosure, keyboard focus styles, print styles, and reduced-motion support.

## Content and routes

- Eight core lessons, with 105 paired reading units across the course and supporting materials.
- Four complete labs, twelve planning briefs, worksheets, explained self-checks, glossary, epilogue, useful resources, and references.
- A searchable catalogue of 100 use cases and a 40-tool directory in each language, with the original handbook's logos reused when available.
- An interactive four-step text-generation explanation and responsive HTML versions of the handbook's workflow diagrams.
- A hypothetical USD cost calculator including retries, human review, fixed costs, and cost per accepted result. This is not live pricing or an API connection.
- Reader deep links use `course.html?chapter=1&lesson=1&lang=en`. Language switching preserves the route. Existing `eua-ai-language` preferences are reused. Login return destinations are restricted to local academy pages.
- Self-check responses are held only in the current tab's memory, separately for each language. They are not uploaded, graded, or saved to an account. Reloading clears them.

## Editing and rebuilding

The Word handbooks are unchanged. `tools/export_explorers.py` converts the two edition 1.1 DOCX files in `output/docx/` and the curated CSVs in `output/practice-pack-v1.1/` into `landing/content/explorers/{en,hy}.json`, plus the lightweight public lesson outline `overview.json`. It reads quiz explanations directly from the DOCX and copies only explicitly selected downloadable practice files. It does not require the old temporary handbook-builder scripts.

The signed-out card grid uses `styles/explorers-overview.css`, `js/explorers-overview.js`, and eight banner paths in `landing/assets/explorers/`. Seven original banners were generated with the built-in image tool. Lesson 07 temporarily shares lesson 05's tools illustration because its generation was interrupted. Original images and the exact prompt set are in `output/imagegen/`. Card self-check numbers are question counts, not invented progress.

Use the configured Python runtime with `python-docx`/`lxml` available to run the exporter. Before publishing content changes, run `node tools/test_explorers.cjs` — it validates bilingual JSON parse, route parity, quiz policy (lessons 1–7 only), asset paths, Copilot product-vs-model placement, and rejects obsolete practice-pack / workbook download instructions. The website itself has no new package dependency or build step; serve `landing/` using the existing platform server or a static server.

Each JSON reading unit has an ID, title, HTML content, estimated reading time, and optional quiz index. Preserve paired IDs when updating languages. If the Word structure changes, review the exporter's lesson/practice grouping before regenerating. Direct edits to generated JSON are overwritten by export.

## Publication status

### Reader learning enhancements

`landing/js/explorers-learning.js` contains the bilingual web-only welcome, eight authored worked examples, lesson-position navigation, and eight lesson-end messages. `landing/styles/explorers-learning.css` styles these and refines reading typography. These additions are separate from generated handbook JSON and survive handbook exports.

The introduction reuses the course character from `assets/explorers/chapter-01.png`; completion panels reuse `chapter-04.png`. No new illustration was generated for this update. Examples distinguish source input, illustrative output, human verification, and learner practice. Structured visuals include supported/unsupported claims, an action table, a supervised workflow, and a hypothetical token comparison. No live AI service or vendor pricing is connected.

The last section of each core lesson offers an explicit “Finish lesson” action. It reveals a topic-specific recap and a link to the next lesson; lesson 8 links to the practice labs. Milestones live only in page memory and survive in-page navigation and language switches, not reloads. They do not validate mastery, update account progress, award certificates, or gate the next lesson. Keyboard focus moves to the congratulatory heading and a live status announces it. The numbered lesson strip shows the current location, not completion percentage.

Run `node tools/test_explorers_learning.cjs` for bilingual renderers, all lesson-end routes, the actual reader completion handler, focus, and language-switch behavior using a minimal document adapter. Browser-based visual QA was not performed in this update.

Prepared locally for review. No commit, push, public deployment, hosting migration, student-data change, or account-access change was performed. The repository already deploys `landing/` through its existing GitHub Pages workflow; retain that destination rather than creating an unrelated new site.

Before public release, review the Armenian editorial wording, current vendor capabilities and terms, copyright/trademark notices, responsive behavior and keyboard/screen-reader access. The source handbook's academic-review approval remains a separate human decision. The current interactive self-checks must not be advertised as graded completion or certification. Account-synced progress would require a separate backend integration.
