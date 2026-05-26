import { createClient } from '@supabase/supabase-js';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://zwwcezmpzhwyufrlmaiz.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
const OUTPUT_BASE = 'prompts/uncategorized';

if (!SUPABASE_KEY) {
  console.error('Set SUPABASE_ANON_KEY in your environment');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/^-+|-+$/g, '');
}

function toFrontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    lines.push(`${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`);
  }
  lines.push('---');
  return lines.join('\n');
}

async function seed() {
  const { data: episodes, error } = await supabase
    .from('episodes')
    .select('episode_number, title, reviewed');

  if (error) throw error;

  await mkdir(OUTPUT_BASE, { recursive: true });

  const seen = new Map();

  for (const ep of episodes) {
    const paragraphs = ep.reviewed || [];
    for (const p of paragraphs) {
      if (!p.prompt || !p.prompt.label || !p.prompt.body) continue;

      const id = slugify(p.prompt.label);
      if (!id) continue;
      if (seen.has(id)) continue;
      seen.set(id, id);

      const md = [
        toFrontmatter({
          id,
          display_name_ar: p.prompt.label,
          display_name_en: p.prompt.label.replace(/_/g, ' ').toLowerCase()
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          category: 'uncategorized',
          source_episode: ep.episode_number,
        }),
        '',
        p.prompt.body.trim(),
        '',
      ].join('\n');

      const path = join(OUTPUT_BASE, `${id}.md`);
      await writeFile(path, md, 'utf-8');
      console.log(`✓ ${path}`);
    }
  }

  console.log(`\nSeeded ${seen.size} unique prompts.`);
  console.log(`\nNext steps (manual):`);
  console.log(`  1. Review each file in ${OUTPUT_BASE}/`);
  console.log(`  2. Edit display_name_ar to a clean Arabic name`);
  console.log(`  3. Move each file to its correct category directory`);
  console.log(`  4. Delete the empty ${OUTPUT_BASE}/ directory when done`);
  console.log(`  5. Replace one placeholder in each prompt body with [SELECTED_TEXT]`);
  console.log(`  6. Add 'uncategorized' to categories.yaml temporarily so build doesn't fail until you finish`);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
