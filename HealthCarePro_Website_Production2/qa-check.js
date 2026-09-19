const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "dist");
const htmlFiles = [];

function walk(dir) {
  fs.readdirSync(dir).forEach((f) => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith(".html")) htmlFiles.push(full);
  });
}
walk(DIST);

function resolveUrl(url, fromFile) {
  // strip query/hash
  url = url.split("#")[0].split("?")[0];
  if (!url) return { ok: true, skip: true };
  if (/^https?:\/\//.test(url) || url.startsWith("mailto:") || url.startsWith("tel:")) {
    return { ok: true, skip: true };
  }
  let target;
  if (url.startsWith("/")) {
    target = path.join(DIST, url);
  } else {
    target = path.join(path.dirname(fromFile), url);
  }
  // try as-is, then as directory index, then with .html
  const candidates = [
    target,
    path.join(target, "index.html"),
    target + ".html",
  ];
  const ok = candidates.some((c) => fs.existsSync(c) && (fs.statSync(c).isFile() || fs.statSync(c).isDirectory()));
  return { ok, target };
}

let brokenLinks = [];
let brokenAssets = [];
let totalLinks = 0;
let totalAssets = 0;

const hrefRe = /href="([^"]+)"/g;
const srcRe = /src="([^"]+)"/g;

htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  let m;
  hrefRe.lastIndex = 0;
  while ((m = hrefRe.exec(html))) {
    const url = m[1];
    if (url.startsWith("javascript:") || url === "#") continue;
    totalLinks++;
    const res = resolveUrl(url, file);
    if (!res.skip && !res.ok) {
      brokenLinks.push({ file: path.relative(DIST, file), url });
    }
  }
  srcRe.lastIndex = 0;
  while ((m = srcRe.exec(html))) {
    const url = m[1];
    totalAssets++;
    const res = resolveUrl(url, file);
    if (!res.skip && !res.ok) {
      brokenAssets.push({ file: path.relative(DIST, file), url });
    }
  }
});

console.log(`Checked ${htmlFiles.length} HTML files.`);
console.log(`Total hrefs: ${totalLinks}, broken: ${brokenLinks.length}`);
console.log(`Total srcs: ${totalAssets}, broken: ${brokenAssets.length}`);

if (brokenLinks.length) {
  console.log("\n--- BROKEN LINKS ---");
  brokenLinks.forEach((b) => console.log(`${b.file} -> ${b.url}`));
}
if (brokenAssets.length) {
  console.log("\n--- BROKEN ASSETS ---");
  brokenAssets.forEach((b) => console.log(`${b.file} -> ${b.url}`));
}

// Check for duplicate <title> and duplicate meta description across pages
const titles = {};
const descs = {};
htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (t) { titles[t] = titles[t] || []; titles[t].push(path.relative(DIST, file)); }
  if (d) { descs[d] = descs[d] || []; descs[d].push(path.relative(DIST, file)); }
});
const dupTitles = Object.entries(titles).filter(([, v]) => v.length > 1);
const dupDescs = Object.entries(descs).filter(([, v]) => v.length > 1);
console.log(`\nDuplicate titles: ${dupTitles.length}`);
dupTitles.forEach(([t, files]) => console.log(`  "${t}" in ${files.join(", ")}`));
console.log(`Duplicate meta descriptions: ${dupDescs.length}`);
dupDescs.forEach(([d, files]) => console.log(`  "${d.slice(0,60)}..." in ${files.join(", ")}`));

// Missing alt on <img>
let missingAlt = [];
htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  const imgRe = /<img\s+[^>]*>/g;
  let im;
  while ((im = imgRe.exec(html))) {
    if (!/alt="/.test(im[0])) missingAlt.push({ file: path.relative(DIST, file), tag: im[0] });
  }
});
console.log(`\nImages missing alt: ${missingAlt.length}`);
missingAlt.forEach((m) => console.log(`  ${m.file}: ${m.tag}`));

// Basic JSON-LD validity check
let badJsonLd = [];
htmlFiles.forEach((file) => {
  const html = fs.readFileSync(file, "utf8");
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let mm;
  while ((mm = re.exec(html))) {
    try { JSON.parse(mm[1]); } catch (e) { badJsonLd.push({ file: path.relative(DIST, file), err: e.message }); }
  }
});
console.log(`\nInvalid JSON-LD blocks: ${badJsonLd.length}`);
badJsonLd.forEach((b) => console.log(`  ${b.file}: ${b.err}`));

const failed = brokenLinks.length || brokenAssets.length || badJsonLd.length;
process.exit(failed ? 1 : 0);
