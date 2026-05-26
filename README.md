# Prompts for Media Buyers

A free, open-source library of AI prompts curated for Media Buyers.

These prompts power the **Lotfy's AI Prompts for Media Buyers** Chrome extension. Right-click any text on any webpage, pick a prompt, and the combined result is copied to your clipboard — ready to paste into Claude, ChatGPT, Gemini, or any AI tool.

[Install the extension →](https://chromewebstore.google.com/)

## What's inside

- 8 categories of prompts (brief analysis, copy generation, audience research, campaigns, performance, reporting, client comms, strategy)
- Every prompt in Arabic + English metadata
- Compiled to a single JSON file served at `https://prompts.lotfy.ai/v1/prompts.json`

## Contributing

Found a typo? Have a better version of a prompt? See a missing scenario?

**Submit a PR** — see [CONTRIBUTING.md](./CONTRIBUTING.md) for the format and review process.

We welcome contributions in any language, but Arabic + English bilingual metadata is required for every prompt.

## Local development

```bash
git clone https://github.com/<your-username>/prompts-for-media-buyers
cd prompts-for-media-buyers
npm install
npm run build      # generates dist/v1/prompts.json
npm run validate   # runs the build + extra sanity checks
```

## License

MIT. Use the prompts freely. Attribution appreciated but not required.
