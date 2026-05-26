import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import matter from 'gray-matter';
import yaml from 'yaml';

const ROOT = process.cwd();
const PROMPTS_DIR = join(ROOT, 'prompts');
const CATEGORIES_FILE = join(ROOT, 'categories.yaml');

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [join(ROOT, 'scripts', 'build.mjs')], {
      stdio: 'inherit',
      cwd: ROOT,
    });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`build.mjs exited with code ${code}`));
    });
  });
}

async function gatherWarnings() {
  const warnings = [];
  const categoriesRaw = await readFile(CATEGORIES_FILE, 'utf-8');
  const categories = yaml.parse(categoriesRaw);
  const categorySlugs = new Set(categories.map((c) => c.slug));

  const promptsPerCategory = new Map();
  for (const slug of categorySlugs) promptsPerCategory.set(slug, 0);

  const dirents = await readdir(PROMPTS_DIR, { withFileTypes: true });
  for (const cat of dirents) {
    if (!cat.isDirectory()) continue;

    const files = await readdir(join(PROMPTS_DIR, cat.name));
    const mdFiles = files.filter((f) => f.endsWith('.md'));

    if (categorySlugs.has(cat.name)) {
      promptsPerCategory.set(cat.name, (promptsPerCategory.get(cat.name) || 0) + mdFiles.length);
    }

    for (const file of mdFiles) {
      const fullPath = join(PROMPTS_DIR, cat.name, file);
      const content = await readFile(fullPath, 'utf-8');
      const { data, content: body } = matter(content);
      const trimmed = body.trim();

      if (trimmed.length < 20) {
        warnings.push(`${fullPath}: body is suspiciously short (${trimmed.length} chars)`);
      }

      const placeholderMatches = trimmed.match(/\[SELECTED_TEXT\]/g) || [];
      if (placeholderMatches.length > 1) {
        warnings.push(`${fullPath}: [SELECTED_TEXT] appears ${placeholderMatches.length} times — extension only injects one occurrence`);
      }

      if (data.display_name_ar && data.id && data.display_name_ar === data.id) {
        warnings.push(`${fullPath}: display_name_ar is identical to id ("${data.id}") — likely missing translation`);
      }
    }
  }

  for (const [slug, count] of promptsPerCategory) {
    if (count === 0) {
      warnings.push(`category "${slug}" has zero prompts`);
    }
  }

  return warnings;
}

async function main() {
  await runBuild();
  const warnings = await gatherWarnings();
  if (warnings.length === 0) {
    console.log('✓ No warnings.');
    return;
  }
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  - ${w}`);
}

main().catch((err) => {
  console.error('Validate failed:', err.message);
  process.exit(1);
});
