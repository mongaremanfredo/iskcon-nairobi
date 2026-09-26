import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");
const failures = [];

async function pageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== "api") files.push(...await pageFiles(fullPath));
    if (entry.isFile() && entry.name === "page.tsx") files.push(fullPath);
  }
  return files;
}

for (const file of await pageFiles(appDir)) {
  const source = await readFile(file, "utf8");
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const isAlias = relative.endsWith("festivals/radhastami/page.tsx");
  if (!isAlias && !source.includes("createPageMetadata") && !source.includes("generateMetadata")) {
    failures.push(`${relative}: missing route-specific metadata`);
  }
}

const layout = await readFile(path.join(appDir, "layout.tsx"), "utf8");
if (/alternates:\s*\{\s*canonical:\s*["']\/["']/.test(layout)) {
  failures.push("src/app/layout.tsx: root canonical must not be inherited by child routes");
}

const sitemap = await readFile(path.join(appDir, "sitemap.ts"), "utf8");
if (sitemap.includes("lastModified: new Date(),")) {
  failures.push("src/app/sitemap.ts: build-time lastModified dates are not allowed");
}

for (const frameworkFile of ["not-found.tsx", "error.tsx", "loading.tsx"]) {
  try {
    await readFile(path.join(appDir, frameworkFile), "utf8");
  } catch {
    failures.push(`src/app/${frameworkFile}: branded framework state is missing`);
  }
}

if (failures.length) {
  console.error("SEO verification failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log("SEO source verification passed.");
