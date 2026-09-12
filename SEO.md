# ModgillTravels — SEO state

Last updated: 2026-09-12. Regenerate the numbers with `/seo-report`.

> **Corrections applied 2026-09-12 from live pulls + the GBP dashboard.**
> Several claims below were stale or wrong; see "Corrections" at the end of
> this file before acting on anything here. Work from live tool output, never
> from these stored numbers.

Business: 24/7 taxi and outstation cab service, Patiala, Punjab.
Site: <https://www.modgilltravels.in> (canonical host is `www`).
Stack: Next.js 15 App Router. 36 live URLs — 20 route pages, 7 city pages,
8 blog posts. Dynamic `app/sitemap.js` + `app/robots.js`, JSON-LD throughout
(`utils/structuredData.js`, `utils/citySchema.js`, `utils/blogSchema.js`),
metadata on every page, `components/FAQAccordion.jsx` with FAQPage schema.

**Technical SEO is not the problem.** This is a well-built site. The gap is
local prominence and click-through. See also `Reports/FINAL-SEO-REPORT.md`
(March 2026) — its action list is still largely unchecked.

---

## Search Console baseline — 90 days to 2026-09-06

Property: `sc-domain:modgilltravels.in`.

2,680 query impressions, **2 clicks** at query level (~17 at page level — Google
withholds anonymized queries, so query sums always read low).

### Striking distance (position 5-20 — work these first)

| Query | Impressions | Position |
| --- | ---: | ---: |
| taxi service in patiala | 279 | 14.0 |
| patiala to manali distance | 145 | 11.6 |
| best taxi service in patiala | 140 | 11.8 |
| patiala taxi service | 119 | 17.1 |
| cab services in patiala | 75 | 17.9 |
| patiala to ludhiana distance | 57 | 19.6 |
| patiala taxi service contact number | 27 | 9.8 |

### High demand, ranking far too low

| Query | Impressions | Position |
| --- | ---: | ---: |
| patiala to delhi taxi | 256 | 35.7 |
| patiala to delhi taxi service | 228 | 37.7 |
| patiala to chandigarh distance | 105 | 36.1 |
| delhi to patiala taxi | 104 | 74.9 |
| patiala to delhi cab | 100 | 36.4 |

### Top pages

| Page | Clicks | Impressions | Position |
| --- | ---: | ---: | ---: |
| `/contact` | 5 | 240 | 9.5 |
| `/` | 4 | 1097 | 13.0 |
| `/routes/patiala-to-shimla` | 2 | 129 | 12.4 |
| **`/routes/patiala-to-delhi`** | 1 | **756** | **41.6** |
| `/blog/sedan-vs-innova-best-cab-for-outstation` | 1 | 592 | 7.6 |
| `/city/delhi` | 1 | 356 | 64.3 |
| `/blog/patiala-to-delhi-travel-guide` | 1 | 384 | 16.0 |

`/routes/patiala-to-delhi` is the single biggest gap on the site: highest
impressions of any route page, ranking 41st. The page exists and demand is
proven — it needs depth and internal links, not replacing.

Note: `https://modgilltravels.in/` (non-www) also picks up impressions
separately. Canonicalisation should consolidate on `www`.

---

## Google Business Profile

Verified and live. Managed under a separate Google account from the Cloud
project — see the workspace-level notes.

| | |
| --- | --- |
| Rating | 5.0 from **31 reviews** |
| Category | Taxi service |
| **Areas served** | **"Chandigarh and nearby areas"** ⚠️ |
| Address | Urban Estate Phase 2, Patiala |
| Phone | +91 62849 92669 |
| Profile views | 87 last month |
| Interactions | 6 |
| Photos last added | 287 days ago (as of 2026-09-07) |

### ⚠️ The service area is pointed at the wrong city

The business, its address, its website and its entire Search Console demand are
**Patiala**. The GBP service area says **Chandigarh**. Those are very different
markets:

| | Patiala taxi | Chandigarh taxi |
| --- | ---: | ---: |
| #1 | 406 reviews | 1,476 |
| #2 | 363 | 1,235 |
| #3 | 113 | 742 |
| #4 | 102 | 543 |
| top-20 floor | — | 56 |
| **ModgillTravels** | **31** | **31** |

31 reviews is competitive in Patiala and nowhere near competitive in
Chandigarh. **Fix the service area to Patiala first**, with outstation
destinations as secondary areas. Free, two minutes, highest-leverage change
available on this project.

⚠️ The Places API cannot find this listing under any name variant — a
competitor with **0** reviews surfaces while this one does not. Low prominence,
not absence. **Never read an empty `places` result as "the listing is
missing."**

---

## The competitive picture

"taxi service in Patiala", ranked by review count — the local-pack signal:

| Business | Rating | Reviews |
| --- | ---: | ---: |
| Joshan Cabs | 4.9 | 406 |
| Baba Cab | 4.8 | 363 |
| Cab On Call | 5.0 | 113 |
| 1313 Taxi Service | 4.5 | 102 |
| CHAWLA TOUR AND TRAVELS | 5.0 | 82 |
| PB-11 Cabs | 5.0 | 50 |
| **ModgillTravels** | **5.0** | **31** |

The local pack sits above every organic result. Ranking 14th organically for
"taxi service in patiala" earns nothing while three competitors with 100-400
reviews own the map above it.

---

## Known code issues

**`aggregateRating: 5.0, reviewCount: 31` is accurate** — verified against the
GBP dashboard, not fabricated. But it is hardcoded in **five** places and will
go stale on review #32:

- `app/layout.js` (two occurrences, lines ~250 and ~336)
- `utils/structuredData.js` (two occurrences, lines ~225 and ~501)
- `utils/citySchema.js` (line ~31)

Collapse to one value in `data/site.js` and have the schemas read it.

**NAP inconsistency.** GBP says `Modgilltravels` (one word); Justdial and
IndiaMART say `Modgill Travels`. Google itself prompts "Did you mean: Modgill
Travels". Pick one spelling and align GBP, the site, Justdial and IndiaMART.

**Founding year contradiction.** The site says "founded 2025"; IndiaMART says
"8 yrs". `Reports/FINAL-SEO-REPORT.md` flagged this as a manual-action risk in
March and it is still open. Make them agree.

**Unbuilt content.** `data/destinations.js` holds 16 destinations but only 10
route pairs are live. Patiala↔Dehradun / Jaipur / Haridwar / Katra /
Dharamshala are real routes with commercial intent. The page template already
exists — this is data entry, not development.

---

## Priorities

1. **GBP service area → Patiala** (free, 2 min, biggest single impact)
2. **Fresh photos** — 287 days stale
3. **Reviews** — 31 → 100+ moves you into the Patiala pack
4. **`/routes/patiala-to-delhi`** — 756 impressions at position 41.6
5. **Titles/meta for the striking-distance cluster** (positions 9.8-19.6, zero clicks)
6. **NAP + founding year consistency**
7. **Fill the route matrix** from `data/destinations.js`
8. **`data/site.js` rating consolidation** (low urgency)

Items 1-3 and 6 are dashboard/off-site work, no code. That is where the returns
are concentrated.

---

## Running the numbers again

```bash
/seo-report
```

Or directly, from this directory:

```bash
python "C:/Users/ACER/OneDrive/Desktop/Claude Skills/seo.py" gsc sc-domain:modgilltravels.in --days 90
python "C:/Users/ACER/OneDrive/Desktop/Claude Skills/seo.py" places "taxi service in Patiala" --limit 20
python "C:/Users/ACER/OneDrive/Desktop/Claude Skills/seo.py" psi https://www.modgilltravels.in/routes/patiala-to-delhi
```

Credentials live next to that script (`sa.json`, `.env`) and load
automatically. Full setup and troubleshooting:
`C:/Users/ACER/OneDrive/Desktop/Claude Skills/SEO_SETUP.md`.

Google Business Profile API access was applied for on 2026-09-07 (support case
`3-8270000041163`, reply due 16-21 Sep 2026). Until it is approved there is no
programmatic GBP data — export CSVs from the dashboard by hand.


---

## Corrections — 2026-09-12

Verified against live `gsc` / `places` / `inspect` / `crawl` runs and the GBP
dashboard. Each of these contradicts something written above.

### ✅ The GBP service area is already fixed
The dashboard now reads **"Patiala and nearby areas"**, with service areas
Delhi, Chandigarh, Ambala, Patiala, Sangrur, Amritsar, Zirakpur, Jalandhar,
Nabha and Mohali. The "service area points at Chandigarh" item was the #1
priority in this file and it is **done**. Do not re-raise it.

### ⚠️ New: two different phone numbers
The site uses `+91-62849-92669` / `wa.me/916284992669` everywhere, consistently.
The GBP contact block lists phone **089763 76926** and WhatsApp
**wa.me/918976376926** — a different number — while the profile *displays*
`06284 992 669`. Either the GBP contact fields are wrong, or a second line
exists that the site never mentions. **Ask the owner before changing either.**
IndiaMART shows `+918047790517`, but that is IndiaMART's proxy number and is
normal.

### ⚠️ New: duplicate Justdial listings
Two separate Justdial profiles are live — one rated **4.9 (32)**, one **5.0
(23)**. They split citation signal and the review count. One should be merged
or claimed and closed.

### Founding year — IndiaMART is the outlier
GBP opening date is **1 January 2025**; the site says founded 2025. Those
agree. **IndiaMART says "9 yrs"** (≈2017) and is the only source that
disagrees. Fix IndiaMART, not the site.

### Name
GBP business name is **"Modgilltravels"** (one word) and Google itself prompts
"Did you mean: Modgill Travels". Justdial and IndiaMART both use **"Modgill
Travels"**. Three of four sources use two words — the cheaper alignment is to
rename the GBP, not the rest of the web.

### The local ladder is deeper than recorded above
Live `places` returns **20** Patiala competitors, not 7:
52 reviews → top 10 · 96 → top 5 · 114 → top 3. At 31 the business sits ~14th.

### Price queries are worth almost nothing here
Live 90-day GSC: every fare/price/cost query combined draws **3 impressions**
(position 51). **Distance** queries draw **369** — "patiala to manali distance"
alone is 134 at position 11.8. Route-page content should lead with distance,
duration and journey detail, not fares.

### Other stale claims
- "16 destinations but only 10 route pairs live" — wrong, all 16 are live.
- Non-www → www is already a clean single **308**.
- Route-page `openGraph` is complete; the Next.js partial-OG bug does not apply.

### Fixed in code on 2026-09-12 (commit `ddfaf4a`)
Title truncation on 50 of 52 pages, 13 soft-404 route pages, the invalid
`itemReviewed` node failing rich results sitewide, the homepage missing from
its own sitemap, and `lastModified` churn. Re-run `inspect` after the next
deploy to confirm the rich-result verdict flips FAIL → PASS.
