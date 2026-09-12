// Guards the design system's two failure modes. Run: npm run check:contrast
//
// 1. Contrast — the colour rules the palette depends on.
// 2. Cascade — class names being correct is NOT enough. An unlayered element
//    selector outranks every @layer, so a bare `a { color: inherit }` in
//    globals.css beat Tailwind's own .text-white and made the text on every
//    dark button invisible. A class-name audit cannot see that; this can.
import { readFileSync } from "node:fs";

const T = {
  bg: "#ffffff", surface: "#f8fafc", ink: "#0f172a", inkMuted: "#475569",
  brand: "#10294a", accent: "#f5b301", cta: "#0b7a33", white: "#ffffff",
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

const used = [
  ["body text", T.ink, T.bg],
  ["muted text", T.inkMuted, T.bg],
  ["muted on surface", T.inkMuted, T.surface],
  ["call button", T.white, T.brand],
  ["whatsapp CTA", T.white, T.cta], // white, not ink — ink on it is 3.27:1
  ["badge", T.ink, T.accent],
];
// Combinations the tokens forbid. If either starts passing, the palette moved
// and Button/Badge need revisiting.
const forbidden = [
  ["ink on CTA green", T.ink, T.cta],
  ["amber as text on white", T.accent, T.bg],
];

let bad = 0;
for (const [name, fg, bg] of used) {
  const r = ratio(fg, bg);
  if (r < 4.5) { console.error(`FAIL ${name}: ${r.toFixed(2)}:1 (needs 4.5:1)`); bad++; }
  else console.log(`ok   ${name}: ${r.toFixed(2)}:1`);
}
for (const [name, fg, bg] of forbidden) {
  const r = ratio(fg, bg);
  if (r >= 4.5) { console.error(`FAIL ${name} now passes at ${r.toFixed(2)}:1 — palette changed`); bad++; }
  else console.log(`ok   ${name} still forbidden: ${r.toFixed(2)}:1`);
}

// --- cascade guard ---
const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "");

// Drop every at-rule block, leaving only what sits outside a layer.
let outside = "";
for (let i = 0; i < css.length; i++) {
  if (css[i] === "@") {
    const open = css.indexOf("{", i);
    if (open === -1) break;
    let d = 1, j = open + 1;
    while (j < css.length && d > 0) {
      if (css[j] === "{") d++;
      else if (css[j] === "}") d--;
      j++;
    }
    i = j - 1;
    continue;
  }
  outside += css[i];
}

const offenders = [...outside.matchAll(/(?:^|\})\s*([^{}@]+?)\s*\{/g)]
  .map((m) => m[1].trim().replace(/\s+/g, " "))
  .filter((sel) => sel && /(^|,\s*)[a-z]/i.test(sel) && !/^[.#:\[]/.test(sel));

if (offenders.length) {
  console.error(
    `FAIL unlayered element selector(s) in globals.css: ${offenders.join(" | ")}`
  );
  console.error("     These outrank every Tailwind utility. Move them into @layer base.");
  bad++;
} else {
  console.log("ok   no unlayered element selectors in globals.css");
}

process.exit(bad ? 1 : 0);
