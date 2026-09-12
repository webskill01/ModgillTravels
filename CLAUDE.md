# ModgillTravels

Marketing and booking site for a 24/7 taxi service in Patiala, Punjab.
<https://www.modgilltravels.in> (canonical host is `www`) — Next.js 15 App
Router, Tailwind v4, JS (not TS). Route and city pages are generated from
`data/`.

`npm run dev` · `npm run build` · `npm run lint`

## SEO

**Read `SEO.md` before any SEO, content, metadata, or schema work.** It holds
the Search Console baseline, Google Business Profile state, the competitor
picture, known code issues, and the ranked priority list. `Reports/` holds an
older March 2026 audit whose action list is still largely unchecked.

Four facts that are easy to get wrong:

- Technical SEO here is already sound — sitemap, robots, JSON-LD, FAQ schema
  and per-page metadata all exist. The gap is local prominence, not markup.
- **The GBP service area is set to Chandigarh, not Patiala.** That is the
  single biggest problem on this project and it is fixed in the dashboard, not
  in code.
- `aggregateRating: 5.0, reviewCount: 31` is **accurate**, not fabricated —
  verified against the dashboard. It is however hardcoded in five files and
  will drift; it belongs in `data/site.js`.
- The `places` command in the `/seo-report` skill **cannot find this
  business's own listing** despite it being verified and live. An empty result
  is a prominence quirk, never evidence the profile is missing.

Run `/seo-report` from this directory for fresh Search Console numbers.
