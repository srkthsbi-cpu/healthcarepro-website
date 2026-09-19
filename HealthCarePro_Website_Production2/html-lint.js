const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "dist");
const VOID = new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr","!doctype"]);

const files = [];
(function walk(d) {
  fs.readdirSync(d).forEach((f) => {
    const full = path.join(d, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith(".html")) files.push(full);
  });
})(DIST);

let problems = 0;

files.forEach((file) => {
  let html = fs.readFileSync(file, "utf8");
  // strip script/style contents (may contain tag-like text / JSON with </ etc. is fine since we don't have literal '<' there)
  html = html.replace(/<script[\s\S]*?<\/script>/g, "<script></script>");
  html = html.replace(/<style[\s\S]*?<\/style>/g, "<style></style>");
  // strip SVG content entirely (self-contained, not part of doc-level structure we care about)
  html = html.replace(/<svg[\s\S]*?<\/svg>/g, "<svg-block></svg-block>");
  // strip comments
  html = html.replace(/<!--[\s\S]*?-->/g, "");

  const tagRe = /<\/?([a-zA-Z0-9-]+)((?:"[^"]*"|'[^']*'|[^"'>])*)>/g;
  const stack = [];
  let m;
  while ((m = tagRe.exec(html))) {
    const full = m[0];
    const name = m[1].toLowerCase();
    if (name === "!doctype") continue;
    const isClosing = full.startsWith("</");
    const isSelfClosing = full.endsWith("/>") || VOID.has(name);
    if (isClosing) {
      // pop until match found
      let idx = -1;
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === name) { idx = i; break; }
      }
      if (idx === -1) {
        console.log(`${path.relative(DIST, file)}: unmatched closing tag </${name}>`);
        problems++;
      } else {
        stack.length = idx; // pop everything up to and including idx
      }
    } else if (!isSelfClosing) {
      stack.push(name);
    }
  }
  if (stack.length) {
    console.log(`${path.relative(DIST, file)}: unclosed tag(s): ${stack.join(", ")}`);
    problems++;
  }
});

console.log(`\nChecked ${files.length} files. Problems: ${problems}`);
process.exit(problems ? 1 : 0);
