// Checks the BUILT HTML, not the source. Run after `next build`:
//   npm run check:render
//
// check-contrast.mjs guards the palette and the cascade. This guards the two
// things that survived both of those and still shipped broken:
//
//   1. A control whose text resolves to (nearly) its own background. Class
//      names were right every time; what was wrong was the colour the element
//      actually inherited. Only the rendered tree shows that.
//   2. A control with no visible label at all — an empty navy pill. This was
//      created by a find/replace that removed a button's only child, and
//      nothing in the build, the linter or a class audit noticed.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const TOK = {
  bg: "#ffffff", surface: "#f8fafc", "surface-2": "#f1f5f9",
  ink: "#0f172a", "ink-muted": "#475569",
  brand: "#10294a", "brand-hover": "#16375f",
  accent: "#f5b301", "accent-soft": "#fff8e5",
  cta: "#0b7a33", "cta-hover": "#09632a",
  white: "#ffffff", black: "#000000",
  line: "#e2e8f0", "line-strong": "#cbd5e1",
};

const lum = (h) => {
  const c = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// Last matching colour utility wins, so `text-sm text-white` reads as white.
// Taking the first match instead is exactly how a self-check can miss this.
const pick = (cls, prefix) => {
  const re = new RegExp(`(?:^|\\s)${prefix}-([a-z0-9-]+?)(?:/\\d+)?(?=\\s|$)`, "g");
  let found = null;
  for (const m of cls.matchAll(re)) if (TOK[m[1]]) found = TOK[m[1]];
  return found;
};

const VOID = new Set([
  "img", "br", "input", "meta", "link", "path", "circle", "source", "hr",
  "use", "rect", "line", "polygon", "polyline", "ellipse", "area", "col",
]);

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".html")) out.push(p);
  }
  return out;
}

const TAG = /<\/?([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
const CLASS = /class="([^"]*)"/;

function scan(html) {
  const body = html
    .replace(/<(script|style|head)\b[\s\S]*?<\/\1>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const stack = [{ bg: TOK.bg, fg: TOK.ink }];
  const problems = [];
  // Controls we are inside of, so we can tell whether one ever got any text.
  const open = [];

  let m;
  TAG.lastIndex = 0;
  while ((m = TAG.exec(body))) {
    const tag = m[1].toLowerCase();
    const closing = m[0][1] === "/";
    const selfClose = m[0].endsWith("/>");
    const attrs = m[2] || "";
    const cls = (attrs.match(CLASS) || [, ""])[1];

    if (closing) {
      if (!VOID.has(tag)) {
        const ctx = stack.pop() || stack[0];
        if (open.length && open[open.length - 1].tag === tag) {
          const c = open.pop();
          if (!c.text && !c.hasImg) {
            problems.push({ kind: "empty", cls: c.cls.slice(0, 70) });
          }
        }
        void ctx;
      }
      continue;
    }

    const top = stack[stack.length - 1];
    const bg = pick(cls, "bg") || top.bg;
    const fg = pick(cls, "text") || top.fg;

    const isControl =
      /(?:^|\s)(?:bg-brand|bg-cta)(?:\s|$)/.test(cls) &&
      /rounded/.test(cls) &&
      (tag === "a" || tag === "button");

    if (isControl) open.push({ tag, cls, text: "", hasImg: false });

    if (tag === "svg" || tag === "span" || tag === "p" || tag === "a") {
      const r = ratio(fg, bg);
      if (r < 3) problems.push({ kind: "contrast", r: r.toFixed(2), fg, bg, cls: cls.slice(0, 60) });
    }
    if (tag === "svg" || tag === "img") {
      for (const c of open) c.hasImg = true;
    }

    if (!VOID.has(tag) && !selfClose) stack.push({ bg, fg });

    // Text between this tag and the next one counts as the control's label.
    const next = body.indexOf("<", TAG.lastIndex);
    const text = body.slice(TAG.lastIndex, next === -1 ? undefined : next).trim();
    if (text) for (const c of open) c.text += text;
  }
  return problems;
}

const root = ".next/server/app";
let files;
try {
  files = walk(root);
} catch {
  console.error(`FAIL ${root} not found — run \`next build\` first.`);
  process.exit(1);
}

let bad = 0;
for (const f of files) {
  const problems = scan(readFileSync(f, "utf8"));
  const seen = new Set();
  for (const p of problems) {
    const key = p.kind + (p.cls || "") + (p.fg || "");
    if (seen.has(key)) continue;
    seen.add(key);
    if (p.kind === "empty") {
      console.error(`FAIL ${f}\n     control with no label or icon: class="${p.cls}"`);
    } else {
      console.error(
        `FAIL ${f}\n     ${p.fg} on ${p.bg} = ${p.r}:1 (needs 3:1) class="${p.cls}"`
      );
    }
    bad++;
  }
}

if (bad) {
  console.error(`\n${bad} rendered-output problem(s) across ${files.length} pages.`);
  process.exit(1);
}
console.log(`ok   ${files.length} built pages: no invisible text and no empty controls`);
