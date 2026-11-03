// Shrinks oversized source images in public/images in place, keeping their paths.
// next/image already serves resized copies, but CSS backgrounds, link previews and
// the service worker use these files directly. Originals remain in git history.
import { readdirSync, renameSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const maxBytes = 500 * 1024;
const maxWidth = 2000;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const file = path.join(dir, name);
    if (statSync(file).isDirectory()) walk(file, files);
    else if (/\.(jpe?g|png)$/i.test(name)) files.push(file);
  }
  return files;
}

let saved = 0;
for (const file of walk("public/images")) {
  const before = statSync(file).size;
  if (before <= maxBytes) continue;

  const temp = `${file}.tmp`;
  const image = sharp(file).rotate().resize({ width: maxWidth, withoutEnlargement: true });
  if (/\.png$/i.test(file)) {
    await image.png({ palette: true, quality: 80, effort: 10 }).toFile(temp);
  } else {
    await image.jpeg({ quality: 78, mozjpeg: true }).toFile(temp);
  }

  const after = statSync(temp).size;
  if (after < before) {
    renameSync(temp, file);
    saved += before - after;
    console.log(`${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB  ${file}`);
  } else {
    unlinkSync(temp);
  }
}
console.log(`Saved ${(saved / 1048576).toFixed(1)} MB`);
