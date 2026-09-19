/*
 * Zero-dependency static file server for local preview.
 * Usage: node serve.js  (then open http://localhost:8080)
 * This is for LOCAL PREVIEW only - production hosting is Cloudflare Workers Static Assets,
 * which serves the dist/ folder directly (see README.md).
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "dist");
const PORT = process.env.PORT || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, filePath) {
  const ext = path.extname(filePath);
  res.writeHead(status, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(ROOT, urlPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    fs.access(filePath, fs.constants.R_OK, (err2) => {
      if (err2) {
        const notFound = path.join(ROOT, "404.html");
        if (fs.existsSync(notFound)) return send(res, 404, notFound);
        res.writeHead(404);
        return res.end("404 Not Found");
      }
      send(res, 200, filePath);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Health Care Pro preview running at http://localhost:${PORT}`);
  console.log(`Serving: ${ROOT}`);
});
