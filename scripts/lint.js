import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const requiredFiles = [
  'README.md',
  'google-apps-script/CreateInvestorNeedsForm.gs',
  'src/formSpec.js',
  'test/form_spec.test.js',
  'docs/setup.md',
  'docs/architecture.md',
  '.github/workflows/ci.yml',
  '.devcontainer/devcontainer.json'
];

const forbiddenPatterns = [
  new RegExp('TO' + 'DO\\b', 'i'),
  /console\.log\(.+secret/i,
  /GITHUB_TOKEN\s*=\s*['\"][^'\"]+/i,
  /SHARED_SECRET\s*=\s*['\"][^'\"]+/i
];

function walk(dir) {
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (['.git', 'node_modules'].includes(entry)) return [];
      return walk(path);
    }
    return [path];
  });
}

for (const file of requiredFiles) {
  readFileSync(file, 'utf8');
}

for (const file of walk('.')) {
  if (!/\.(js|gs|md|yml|yaml|json|mmd)$/.test(file)) continue;
  const content = readFileSync(file, 'utf8');
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) {
      throw new Error(`Forbidden pattern ${pattern} found in ${file}`);
    }
  }
}

console.log('lint passed');
