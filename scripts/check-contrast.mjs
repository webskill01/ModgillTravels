// Guards the two colour rules the design system depends on. Run: npm run check:contrast
// Tokens are duplicated here on purpose — that is the point of a check.
const T = {
  bg: '#ffffff', surface: '#f8fafc', ink: '#0f172a', inkMuted: '#475569',
  brand: '#10294a', accent: '#f5b301', cta: '#25d366', white: '#ffffff',
};

const lum = (h) => {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const used = [
  ['body text', T.ink, T.bg],
  ['muted text', T.inkMuted, T.bg],
  ['muted on surface', T.inkMuted, T.surface],
  ['call button', T.white, T.brand],
  ['whatsapp CTA', T.ink, T.cta],   // ink, not white — white is 1.98:1
  ['badge', T.ink, T.accent],
];
// Combinations the tokens forbid. If either ever passes, the palette moved
// and Button/Badge need revisiting.
const forbidden = [
  ['white on CTA green', T.white, T.cta],
  ['amber as text on white', T.accent, T.bg],
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
process.exit(bad ? 1 : 0);
