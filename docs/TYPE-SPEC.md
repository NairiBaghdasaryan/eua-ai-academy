# EUA AI Academy — Type Spec

Shared tokens live in `landing/styles/tokens.css`. Every marketing, course, and auth page should load that file (directly or via `academy.css`).

| Role | Token | Typical use |
|------|--------|-------------|
| H1 short | `--type-hero` | Home, course marketing (“Human judgment first.”) |
| H1 long | `--type-hero-long` | About mission / multi-line statements |
| H2 | `--type-display` | Section titles only |
| Pull quote | `--type-subhead` | Rare emphasis (belief quote) |
| H3 / cards | `--type-card` | Cards, chapters, sessions, auth title |
| Lesson title | `--type-lesson` | Course reader lesson H1 |
| Lead | `--type-lead` | Hero supporting sentence |
| Body | `--type-body` | Paragraphs |
| Eyebrow | `--type-eyebrow` | Uppercase labels (0.73rem) |

## Rules

1. One H1 per page.
2. Do not invent one-off `clamp()` sizes in page CSS — change the token.
3. Armenian: tokens already shrink slightly and increase line-height via `html[lang="hy"]`.
4. Person names are not section H2s — use `.author-name` / card weight.
5. Mobile sizes are defined on the tokens, not per component.
