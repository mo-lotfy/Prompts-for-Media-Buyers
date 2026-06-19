# Prompts for Media Buyers

> A free, open-source library of AI prompts curated for Arab media buyers — pulled from real workflows on the **Lotfy's AI Prompts for Media Buyers** Chrome extension.

[![Validate prompts](https://github.com/mo-lotfy/Prompts-for-Media-Buyers/actions/workflows/validate.yml/badge.svg)](https://github.com/mo-lotfy/Prompts-for-Media-Buyers/actions/workflows/validate.yml)

## Table of contents

- [What this is](#what-this-is)
- [How the pipeline works](#how-the-pipeline-works)
- [Adding a new prompt](#adding-a-new-prompt)
- [Prompt file format](#prompt-file-format)
- [Categories](#categories)
- [Local development](#local-development)
- [Deployment](#deployment)
- [License](#license)

## What this is

A markdown-first prompts library that compiles into a single JSON file served at a stable CDN URL. The companion Chrome extension fetches it; users right-click any text on any webpage, pick a prompt, and paste the result into Claude / ChatGPT / Gemini.

**Current snapshot:** 56 prompts across 9 categories.

The repo is the **canonical source of truth**. Anyone can submit PRs to improve a prompt or add a new one. Lotfy reviews and merges. Cloudflare auto-deploys on every merge to `main`.

## How the pipeline works

```
prompts/<category>/<id>.md   ← you write these
        │
        ▼
  scripts/build.mjs          ← validates frontmatter (zod) + body
        │
        ▼
  dist/v1/prompts.json       ← single compiled artifact
        │
        ▼
  Cloudflare Pages           ← rebuilds on every push to main
        │
        ▼
  https://prompts-for-media-buyers.lotfy.ai/v1/prompts.json
        │
        ▼
  Chrome extension           ← fetches + caches
```

Every PR runs `npm run build` and `npm run validate` in CI. If the schema breaks or a category slug doesn't match, the PR is blocked from merging — typos can't reach end users.

## Adding a new prompt

1. Pick the right category directory under `prompts/` (or open an issue if none fits)
2. Create a file: `prompts/<category>/<kebab-case-id>.md`
3. Fill in frontmatter + body (see [format](#prompt-file-format) below)
4. Run `npm run validate` locally to catch schema errors
5. Open a PR — describe what the prompt does and when it's useful

Full contributor guide in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Prompt file format

```markdown
---
id: brief-audit
display_name_ar: فحص البريف
display_name_en: Brief Audit
category: brief-analysis
contributors:
  - lotfy
---

راجع البريف ده ضد الخمس عناصر الأساسية...

[SELECTED_TEXT]
```

### Frontmatter fields

| Field | Required | Type | Notes |
|---|---|---|---|
| `id` | ✓ | string | Must match the filename (without `.md`). Unique across the repo. |
| `display_name_ar` | ✓ | string | Arabic name shown in the extension UI. |
| `display_name_en` | — | string | English fallback. |
| `category` | ✓ | string | Must match the directory name **and** a slug in `categories.yaml`. |
| `source_episode` | — | number | Original episode number for attribution. |
| `episode_uses` | — | number[] | All episodes that referenced this prompt. |
| `contributors` | — | string[] | GitHub usernames. |
| `version` | — | number | Bump when meaningfully revised. |
| `placeholder_marker` | — | string \| null | Override the default `[SELECTED_TEXT]` injection point if a prompt needs a custom marker. |
| `example_input` | — | string \| null | Optional sample text for previewing the prompt. |

### Body rules

- Plain text — no markdown formatting in the body (it gets copied to clipboard verbatim)
- Use `[SELECTED_TEXT]` (or the value of `placeholder_marker`) **exactly once** where the user's selection should land
- If the prompt doesn't take selected text, omit the marker entirely
- Keep under ~500 words

### Validation rules (enforced by `build.mjs`)

- `id` must match filename
- `category` must match directory name
- `category` must exist in `categories.yaml`
- No duplicate `id` across the whole repo

`npm run validate` adds soft warnings (suspiciously short body, multiple `[SELECTED_TEXT]` markers, empty categories, missing Arabic translations).

## Categories

| Slug | Arabic | English | Icon (lucide) | Prompts |
|---|---|---|---|---|
| `brief-analysis` | تحليل البريف | Brief Analysis | `FileSearch` | 1 |
| `copy-generation` | كتابة الـ Copy | Copy Generation | `PenTool` | 10 |
| `audience` | تحليل الجمهور | Audience Research | `Users` | 2 |
| `campaigns` | إدارة الكامبينات | Campaign Management | `Megaphone` | 10 |
| `performance` | تحليل الأداء | Performance Analysis | `TrendingUp` | 10 |
| `reporting` | التقارير | Reporting | `BarChart3` | 7 |
| `client-comms` | التواصل مع العميل | Client Comms | `MessageSquare` | 3 |
| `strategy` | الاستراتيجية | Strategy | `Target` | 2 |
| `claude-setup` | إعداد Claude | Claude Setup | `Settings` | 11 |

> _Counts are a snapshot. The truth is always `dist/v1/prompts.json`._

To add a category, append an entry to `categories.yaml` (keep `sort_order` ascending) and create the matching `prompts/<slug>/` directory.

## Local development

```bash
git clone https://github.com/mo-lotfy/Prompts-for-Media-Buyers
cd Prompts-for-Media-Buyers
npm install
```

| Script | What it does |
|---|---|
| `npm run build` | Compile `prompts/**/*.md` → `dist/v1/prompts.json` and copy `images/` / `public/` into `dist/`. Hard-fails on schema errors. |
| `npm run validate` | Run the build, then emit soft warnings for likely typos and missing translations. |

Node 20+ required. No bundler, no TypeScript, no test framework — intentionally minimal so non-developers can contribute.

## Deployment

The CDN at `https://prompts-for-media-buyers.lotfy.ai` is a **Cloudflare Workers project with Static Assets**, connected to this GitHub repo's `main` branch.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Static assets directory:** `./dist` (configured in `wrangler.toml`)
- **Custom domain:** `prompts-for-media-buyers.lotfy.ai`

`wrangler.toml` is **required** for deploys to succeed. Do not delete it.

## License

[MIT](./LICENSE) — same as the consumer extension. Use the prompts freely. Attribution appreciated but not required.
