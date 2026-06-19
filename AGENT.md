# AGENT.md — Prompts for Media Buyers

Scope and boundary rules for AI agents (Claude Code, Cursor, etc.) working
on this repository.

## What this repo is

The public, open-source source of truth for the AI prompts library. Markdown
files in `prompts/{category}/` get compiled into one JSON catalog
(`dist/v1/prompts.json`) served via Cloudflare Pages CDN at
`prompts-for-media-buyers.lotfy.ai`.

Read [`README.md`](./README.md) for the full architecture.

## In scope

You can:

- Add or edit prompts in `prompts/{category}/`
- Edit `categories.yaml` (when adding/removing categories)
- Modify `scripts/build.mjs` and `scripts/validate.mjs`
- Update GitHub Actions workflows in `.github/workflows/`
- Improve documentation (README.md, CONTRIBUTING.md, this file)

## Out of scope

Do NOT:

- Add a CMS, admin UI, web interface, or any frontend code — this repo is
  static markdown + a build script, period
- Add a Supabase client or any database connection — this repo doesn't know
  Supabase exists; prompt content lives here as the source of truth
- Call AI APIs (OpenAI, Anthropic, etc.) from any script in this repo
- Modify `dist/` directly — it's build output; `scripts/build.mjs` is the
  only writer
- Publish to npm or any other registry
- Add analytics, tracking, or telemetry
- Add authentication, payment, or any user system
- Push directly to `main` — all changes go through PRs (validate.yml gates
  them)

## When in doubt

If a task seems to fit this repo's stated purpose but requires any of the
"Do NOT" items above, stop and surface the conflict to the user. The
boundaries protect a clear separation of concerns across the three repos
(Script_builder ↔ Prompts ↔ Extension).
