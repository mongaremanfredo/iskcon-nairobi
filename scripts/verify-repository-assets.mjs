import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const requiredFonts = [
  "fraunces-latin-variable.woff2",
  "inter-latin-variable.woff2",
  "source-serif-4-latin-variable.woff2",
  "source-serif-4-latin-variable-italic.woff2",
];

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? sourceFiles(target) : [target];
    }),
  );
  return files.flat().filter((file) => /\.(css|tsx?|jsx?)$/.test(file));
}

for (const font of requiredFonts) {
  await access(path.join(root, "public", "fonts", font));
}

const forbiddenRuntimeDependencies = [
  /from\s+["']next\/font\/google["']/,
  /@import\s+(?:url\()?['"]?https?:\/\//,
  /(?:src|poster)\s*=\s*["']https?:\/\//,
  /url\(\s*["']?https?:\/\//,
];

const failures = [];
for (const file of await sourceFiles(sourceRoot)) {
  const content = await readFile(file, "utf8");
  for (const pattern of forbiddenRuntimeDependencies) {
    if (pattern.test(content)) {
      failures.push(`${path.relative(root, file)} matches ${pattern}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Remote render dependency detected:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Fonts and render-critical assets are repository-hosted.");
