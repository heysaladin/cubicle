/**
 * Bundle/unbundle tokens for Tokens Studio single-file sync (free plan).
 *
 * - `node scripts/tokens-sync.mjs bundle`
 *   Merges tokens/core.json, tokens/semantic.*.json, $themes.json and
 *   $metadata.json into tokens/tokens.json (the file Tokens Studio syncs).
 *   Run this after editing the split token files by hand.
 *
 * - `node scripts/tokens-sync.mjs unbundle`
 *   Splits tokens/tokens.json back into the per-set files that
 *   Style Dictionary reads. Run this after a designer pushes from Figma.
 */

import fs from 'node:fs';
import path from 'node:path';

const TOKENS_DIR = 'tokens';
const BUNDLE_FILE = path.join(TOKENS_DIR, 'tokens.json');
const THEMES_FILE = path.join(TOKENS_DIR, '$themes.json');
const METADATA_FILE = path.join(TOKENS_DIR, '$metadata.json');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, data) =>
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');

const mode = process.argv[2];

if (mode === 'bundle') {
  const metadata = readJson(METADATA_FILE);
  const bundle = {};
  for (const set of metadata.tokenSetOrder) {
    bundle[set] = readJson(path.join(TOKENS_DIR, `${set}.json`));
  }
  bundle.$themes = readJson(THEMES_FILE);
  bundle.$metadata = metadata;
  writeJson(BUNDLE_FILE, bundle);
  console.log(`Bundled ${metadata.tokenSetOrder.join(', ')} -> ${BUNDLE_FILE}`);
} else if (mode === 'unbundle') {
  const { $themes, $metadata, ...sets } = readJson(BUNDLE_FILE);
  for (const [name, tokens] of Object.entries(sets)) {
    writeJson(path.join(TOKENS_DIR, `${name}.json`), tokens);
  }
  if ($themes) writeJson(THEMES_FILE, $themes);
  if ($metadata) writeJson(METADATA_FILE, $metadata);
  console.log(`Unbundled ${BUNDLE_FILE} -> ${Object.keys(sets).join(', ')}`);
} else {
  console.error('Usage: node scripts/tokens-sync.mjs <bundle|unbundle>');
  process.exit(1);
}
