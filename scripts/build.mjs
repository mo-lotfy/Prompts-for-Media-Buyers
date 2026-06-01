import { readdir, readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import yaml from 'yaml';
import { z } from 'zod';

const ROOT = process.cwd();
const PROMPTS_DIR = join(ROOT, 'prompts');
const CATEGORIES_FILE = join(ROOT, 'categories.yaml');
const OUTPUT_DIR = join(ROOT, 'dist', 'v1');
const OUTPUT_FILE = join(OUTPUT_DIR, 'prompts.json');

const promptSchema = z.object({
  id: z.string().min(1),
  display_name_ar: z.string().min(1),
  display_name_en: z.string().optional(),
  category: z.string(),
  source_episode: z.number().optional(),
  contributors: z.array(z.string()).optional(),
  version: z.number().optional(),
  episode_uses: z.array(z.number()).optional(),
  placeholder_marker: z.string().nullable().optional(),
  example_input: z.string().nullable().optional(),
});

const categorySchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  display_name_ar: z.string().min(1),
  display_name_en: z.string().optional(),
  icon: z.string(),
  sort_order: z.number(),
});

async function loadCategories() {
  const raw = await readFile(CATEGORIES_FILE, 'utf-8');
  const parsed = yaml.parse(raw);
  return parsed.map((c) => categorySchema.parse(c));
}

async function loadPrompts() {
  const categories = await readdir(PROMPTS_DIR, { withFileTypes: true });
  const prompts = [];

  for (const cat of categories) {
    if (!cat.isDirectory()) continue;

    const files = await readdir(join(PROMPTS_DIR, cat.name));
    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const fullPath = join(PROMPTS_DIR, cat.name, file);
      const content = await readFile(fullPath, 'utf-8');
      const { data, content: body } = matter(content);

      const expectedId = file.replace(/\.md$/, '');
      // Normalize to NFC: macOS can hand back decomposed (NFD) filenames for
      // Arabic, while the frontmatter id is composed (NFC).
      if (String(data.id).normalize('NFC') !== expectedId.normalize('NFC')) {
        throw new Error(`${fullPath}: frontmatter id "${data.id}" must match filename "${expectedId}"`);
      }

      const parsed = promptSchema.parse(data);
      if (parsed.category !== cat.name) {
        throw new Error(`${fullPath}: frontmatter category "${parsed.category}" must match directory "${cat.name}"`);
      }

      prompts.push({
        ...parsed,
        body: body.trim(),
      });
    }
  }

  return prompts;
}

async function copyStaticAssets() {
  const staticDirs = ['images', 'public'];
  for (const dir of staticDirs) {
    const src = join(ROOT, dir);
    if (!existsSync(src)) continue;
    const dest = join(ROOT, 'dist', dir);
    await cp(src, dest, { recursive: true });
    console.log(`✓ Copied ${dir}/ → dist/${dir}/`);
  }
}

async function build() {
  console.log('Building prompts.json...');
  const categories = await loadCategories();
  const prompts = await loadPrompts();

  const idSet = new Set();
  for (const p of prompts) {
    if (idSet.has(p.id)) {
      throw new Error(`Duplicate prompt id: ${p.id}`);
    }
    idSet.add(p.id);
  }

  const validCategorySlugs = new Set(categories.map((c) => c.slug));
  for (const p of prompts) {
    if (!validCategorySlugs.has(p.category)) {
      throw new Error(`Prompt "${p.id}" references unknown category "${p.category}"`);
    }
  }

  const output = {
    version: new Date().toISOString(),
    generator: "Lotfy's AI Prompts CDN",
    categories,
    prompts,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`✓ Wrote ${prompts.length} prompts in ${categories.length} categories to ${OUTPUT_FILE}`);

  await copyStaticAssets();
}

build().catch((err) => {
  console.error('Build failed:', err.message);
  process.exit(1);
});
