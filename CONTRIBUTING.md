# Contributing

Thanks for considering a contribution.

## Adding a new prompt

1. Pick the right category directory under `prompts/`
2. Create a new file: `prompts/{category}/{kebab-case-id}.md`
3. Add frontmatter + body following this format:

   ```markdown
   ---
   id: my-prompt-id
   display_name_ar: اسم البرومبت بالعربي
   display_name_en: My Prompt Name
   category: brief-analysis
   contributors:
     - your-github-username
   ---

   Your prompt template here.
   Use [SELECTED_TEXT] where the user's selected text should appear.
   ```

4. Run `npm run validate` locally to make sure your changes are valid
5. Open a PR — describe what the prompt does and when it's useful

## Editing an existing prompt

1. Open the file in `prompts/{category}/{id}.md`
2. Make your changes
3. Add your GitHub username to the `contributors` list
4. Run `npm run validate`
5. PR with a clear explanation of why the new version is better

## Style guidelines

- Prompts in **Egyptian Arabic** for tone consistency (other dialects welcome as alternates — see "Variants" below)
- Direct and specific — avoid vague phrasing like "make it good"
- Keep prompts under 500 words; longer prompts tend to be less effective with most AIs
- Place `[SELECTED_TEXT]` at the END of the prompt unless the structure absolutely requires it elsewhere

## Variants

For now: one prompt per situation. If you want to propose a Saudi/Gulf Arabic variant of an existing prompt, open an issue first to discuss whether it should be a separate file or a variant of the existing one.

## Review process

Lotfy reviews PRs. Expect a turnaround of 2–7 days. Constructive feedback is welcomed and encouraged.
