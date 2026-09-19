const site = require("../data/site.js");

function esc(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function listToSentence(items) {
  if (!items || items.length === 0) return "";
  if (items.length === 1) return items[0] + ".";
  return items.slice(0, -1).join(", ") + " ve " + items[items.length - 1] + ".";
}

function ul(items) {
  if (!items || items.length === 0) return "";
  return `<ul class="list-check">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
}

function canonical(path) {
  const clean = path === "/" ? "/" : "/" + path.replace(/^\/+|\/+$/g, "") + "/";
  return site.domain + clean;
}

function absUrl(path) {
  return canonical(path);
}

module.exports = { esc, listToSentence, ul, canonical, absUrl };
