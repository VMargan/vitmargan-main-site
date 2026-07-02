#!/usr/bin/env node
/**
 * Called by semantic-release (@semantic-release/exec, prepareCmd) at release
 * time. Scaffolds a *public* changelog entry for the new version if one does
 * not already exist yet, so the /changelog page always has an entry per release.
 *
 * The generated entry ships with sensible bilingual defaults; enrich it by hand
 * (or with Claude) for releases that deserve a nicer, visitor-facing note.
 *
 * Usage: node scripts/new-public-changelog-entry.mjs <version> <type>
 *   <type> = major | minor | patch  (semantic-release nextRelease.type)
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const version = process.argv[2];
const type = process.argv[3] || 'patch';

if (!version) {
  console.error('[changelog] missing <version> argument');
  process.exit(1);
}

const kind = type === 'patch' ? 'fix' : 'feature';
const date = new Date().toISOString().slice(0, 10);

const dir = resolve(process.cwd(), 'src/content/changelog');
const file = resolve(dir, `${version}.md`);

if (existsSync(file)) {
  console.log(`[changelog] ${version}.md already exists — keeping the curated version.`);
  process.exit(0);
}

mkdirSync(dir, { recursive: true });

const entry = `---
version: "${version}"
date: ${date}
kind: ${kind}
title:
  fr: "Mise à jour ${version}"
  en: "Update ${version}"
notes:
  fr:
    - "Améliorations et corrections diverses."
  en:
    - "Various improvements and fixes."
---
`;

writeFileSync(file, entry, 'utf8');
console.log(`[changelog] created public entry src/content/changelog/${version}.md`);
