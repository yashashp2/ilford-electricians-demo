import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
const base = "/ilford-electricians-demo";
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (pathname === base) {
      response.writeHead(302, { Location: `${base}/` });
      response.end();
      return;
    }
    if (!pathname.startsWith(`${base}/`)) throw new Error("Not found");
    let file = resolve(root, `.${pathname.slice(base.length)}`);
    if (file !== root && !file.startsWith(`${root}${sep}`))
      throw new Error("Not found");
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const content = await readFile(file);
    response.writeHead(200, {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
    });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(4173, "127.0.0.1", () =>
  console.log(`Pages preview: http://127.0.0.1:4173${base}/`),
);
