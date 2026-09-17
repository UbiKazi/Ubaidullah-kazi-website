// Build guard: fails the build if unfinished placeholders or held items leak into content.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/content", "src/views", "src/components", "src/config"];
const banned = [/\[X\]/, /\bTBD\b/, /lorem ipsum/i, /\bMMM ['‘]YY\b/, /\[Module \d\]/, /Research Paper Title/, /WorldQuant/i];
const problems = [];

function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(f)) {
      const text = readFileSync(p, "utf8");
      banned.forEach((re) => {
        if (re.test(text)) problems.push(`${p}: matches ${re}`);
      });
    }
  }
}
roots.forEach(walk);

// every referenced thumbnail must exist
const work = readFileSync("src/content/work.ts", "utf8") + readFileSync("src/components/thread-data.ts", "utf8");
for (const m of work.matchAll(/id: "([a-z0-9-]+)",\s*alt:/g)) {
  if (!existsSync(`public/thumbs/${m[1]}.webp`)) problems.push(`missing thumbnail public/thumbs/${m[1]}.webp`);
}
// no invented URLs in the OneDrive config
const links = readFileSync("src/config/library-links.ts", "utf8");
for (const m of links.matchAll(/:\s*"([^"]+)"/g)) {
  if (!/^https:\/\/(1drv\.ms|onedrive\.live\.com|[a-z0-9-]+\.sharepoint\.com)\//.test(m[1])) problems.push(`library-links: unexpected URL ${m[1]}`);
}

if (problems.length) {
  console.error("Content check failed:\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("Content check passed.");
