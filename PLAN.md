# Portfolio Redesign — Plan

**Repo:** `aemc64/aemc64.github.io` · **Live:** https://aemc64.github.io
**Goal:** turn the site into a simple, clean **project showcase** — not a copy of the résumé.
**Status:** implemented on branch `redesign` (2026-11-19), not merged, not pushed.
Two jam clips are placeholders until footage is recorded.

---

## 1. Why

The current page is résumé-shaped: a paragraph of self-description, 56 skill badges, and 12
identically-weighted cards. It lists everything instead of arguing for anything.

Measured on the live site:

| Metric | Now |
| --- | --- |
| Page weight on load | **~113 MB** (all 12 videos download and autoplay) |
| Page height | 4,473 px |
| Lighthouse accessibility | 0.84 |
| Lighthouse SEO | 0.75 |
| Headings | 29, with `H1` third and 56 badges inside `H4`/`H5` |
| Bootstrap JS | loaded, unused (~100 KB + Popper) |
| Unused file | `assets/css/bootstrap.min.css` (232 KB, never referenced) |

**Split of responsibilities:** the PDF tells, the site shows. The résumé stays a résumé; the site
carries the proof.

One finding is not cosmetic. The current site gives Groovity a **"Steam" button** while its store
page reads **"Coming soon"**, and gives a delisted 2021 mobile title the same visual weight as a
live one. A reviewer discovers that by clicking, and the click costs more trust than a smaller,
exact site earns. The tiering below fixes it structurally — status is a property of the card, not
a paragraph someone has to remember to write.

## 2. Decisions

| Decision | Choice |
| --- | --- |
| Structure | One static page, no framework, no build step |
| Depth | Inline `<details>` expanders ("How it works") |
| Project count | All 14, tiered by **shipping status**: 2 shipped + 2 vertical slices + 10 jams |
| Featured slot | **Dragonfire + NFL Clash** — the only two commercially shipped titles |
| Status labels | Explicit on every card: `Shipped` / `Vertical slice` / `Game jam` |
| Media | Posters by default, video on hover / tap |
| CSS | Drop Bootstrap, hand-written ~200-line stylesheet |
| Résumé content | No experience timeline, no badge walls |

## 3. Non-goals

No framework, no CMS, no build step, no dark/light toggle, no blog, no experience timeline.
Per-project URLs (`/projects/groovity/`) are the one thing that would justify a tiny templating
step — deferred until there's a reason.

---

## 4. Project inventory

14 projects in **three tiers, split by shipping status** — not by how impressive the work is.
A shipped title, a vertical slice, and a 48-hour jam are different claims; the site should not
blur them.

| # | Project | Year | Status | Studio / context | My role | Tier | Media |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Game of Thrones: Dragonfire | 2025 | **Shipped** — live on Google Play | WB Games | Client Engineer | **Shipped** | ✅ re-encode |
| 2 | NFL Clash | 2021 | **Shipped** — Oct 2021, delisted; studio closed 2023 | Nifty Games | Client Engineer | **Shipped** | ✅ re-encode |
| 3 | Groovity | 2025 | **Vertical slice** — Steam page "Coming soon", demo downloadable | Beyond Toppings / Voxel School | Gameplay Programmer | Slice | ✅ re-encode |
| 4 | Human 101 | 2023 | **Vertical slice** — gameplay video only | Onion Head Games | Gameplay Programmer | Slice | ✅ re-encode |
| 5 | Between the Canvases | 2026 | Game jam — UDIT Jamaggedon 2026 | Team of 7 | Programming | Jam | ❌ **to capture** |
| 6 | Overlook Inn | 2026 | Game jam — Brackeys Game Jam 2026.1 | Team of 7 | Programming | Jam | ❌ **to capture** |
| 7 | Mask Heist | 2026 | Game jam — Global Game Jam | — | — | Jam | ✅ re-encode |
| 8 | No Way Up | 2026 | Game jam — Hack Jam XI | — | — | Jam | ✅ re-encode |
| 9 | Aftermath Fellows | 2025 | Game jam — Ubisoft Volunteer Week | — | — | Jam | ✅ re-encode |
| 10 | Who are you again? | 2025 | Game jam — Unity 20th Anniversary | — | — | Jam | ✅ re-encode |
| 11 | Big Nanny is Watching | 2025 | Game jam — Hack Jam IX | — | — | Jam | ✅ re-encode |
| 12 | Gōu | 2025 | Game jam — Mini Jam 182 | — | — | Jam | ✅ re-encode |
| 13 | Beat the Costume! | 2025 | Game jam — Hack Jam VIII | — | — | Jam | ✅ re-encode |
| 14 | Tower of Bubble | 2025 | Game jam — Global Game Jam | — | — | Jam | ✅ re-encode |

### Do not blur status

This is the one place where the current site actively misleads. Groovity's card has a
**"Steam" button**, which reads as *available now*; the Steam page says **"Coming soon"**.
A reviewer who clicks through learns the site overstates — worse than a smaller site that's exact.

Rules:

- Every card carries a visible status word: `Shipped`, `Vertical slice`, or `Game jam · <name>`.
- CTA text matches reality: **Play the demo** (Groovity), **Watch gameplay** (Human 101, NFL Clash),
  **Google Play** (Dragonfire), **Play** (jams).
- Words to avoid unless true: *released*, *launched*, *shipped*, *live*, *on Steam*.
- Never "3 shipped titles" in the hero. The accurate, stronger claim is **two shipped commercial
  titles** — and NFL Clash's licence is a bigger credential than a third unshipped project.

### Why two tiers below shipped

- **Slices (Groovity, Human 101)** — substantial production work with a public build or video,
  but no release. Medium cards, 2-up. They keep prominence without borrowing the word "shipped".
- **Jams (10)** — credibility for range and speed. Compact cards, 3-up.

If Groovity's demo makes it the strongest *gameplay* example on the page, that's an argument for
making the slices row visually equal to the shipped row — not for relabelling it as released.


### New project facts (for copy)

**Between the Canvases** — https://carmux.itch.io/betweenthecanvases
- 2026, UDIT Jamaggedon 2026, theme "Architecture of Meaning". Unity. Windows. Free.
- Programming: Andrés Mayo (with Marta Crespo). Team of 7.
- A girl visits her grandmother's house; the cat has ruined her late grandfather's paintings.
  A magical paintbrush lets her step inside each painting, explore it, and restore its meaning.
- **Hook for the card:** *the painting is the level* — you enter the artwork.
- Rating 5.0/5 (18 ratings).

**Overlook Inn** — https://paxcu.itch.io/overlook-inn
- 2026, Brackeys Game Jam 2026.1, theme "Strange Places". Unity. **HTML5**, Windows, Linux. Free.
- Programming: Andrés Mayo, Daniel Pascual, Eduardo Rico. Team of 7. ~30 min.
- You're the hotel receptionist hunting runaway cats through corridors that don't quite behave.
  Liminal-space horror played for laughs.
- **Hook for the card:** browser-playable, zero install.
- Rating 3.8/5 (4 ratings).
- **CTA:** `Play in browser` — the lowest-friction button on the whole page. Worth placing first in
  the jam grid even though Between the Canvases is slightly newer; recency matters less than a
  one-click playable build.

---

## 5. Page structure

Three labeled tiers. The labels are the point — they tell a visitor what each claim is worth
before they click anything.

```
┌──────────────────────────────────────────────────────────┐
│  Andrés Mayo · Gameplay Programmer        email · résumé │  sticky, 56px
├──────────────────────────────────────────────────────────┤
│  Gameplay programmer. I build mechanics that feel good   │
│  to touch — Unity and Unreal.                            │  hero, 2 lines
│  [Email me]  [Résumé]              Currently: …          │
│                                                          │
│  SHIPPED ──────────────────────────────────────────────  │
│  ┌──────────────────┐ ┌──────────────────┐               │
│  │ Dragonfire       │ │ NFL Clash        │  2-up, large  │
│  │ Shipped · 2025   │ │ Shipped · 2021   │               │
│  └──────────────────┘ └──────────────────┘               │
│    ▸ How it works      ▸ How it works                    │
│                                                          │
│  DEMOS & VERTICAL SLICES ──────────────────────────────  │
│  ┌──────────────────┐ ┌──────────────────┐               │
│  │ Groovity         │ │ Human 101        │  2-up, medium │
│  │ Vertical slice   │ │ Vertical slice   │               │
│  └──────────────────┘ └──────────────────┘               │
│                                                          │
│  GAME JAM PROJECTS ────────────────────────────────────  │
│  ┌────┐ ┌────┐ ┌────┐   10 compact cards, 3-up           │
│  ┌────┐ ┌────┐ ┌────┐   (2-up ≤992px, 1-up ≤576px)       │
│  ┌────┐ ┌────┐ ┌────┐                                    │
│  ┌────┐                                                   │
│                                                          │
│  email · linkedin · itch · résumé · updated 2026-11       │  footer
└──────────────────────────────────────────────────────────┘
```

Target height: **~3,600 px** (from 4,473). Initial weight: **~460 KB** (from 113 MB).

Ten jam cards is what sets the floor, not the tiering — four rows of cards at three per row.

---

## 6. Card specification

### Anatomy (all tiers)

```
[ media: 16:9, poster → preview on hover/tap ]
Title (year)
Status · Role · team size          ← e.g. "Shipped · Client Engineer · WB Games"
One sentence: what the player does
One line: the system I built that mattered   ← bolded
Unity · C# · Addressables                     Play the demo ↗
```

| Tier | Layout | Media | Expander |
| --- | --- | --- | --- |
| Shipped (2) | 2-up, large | 960 px clip | yes |
| Slice (2) | 2-up, medium | 960 px clip | yes |
| Jam (10) | 3-up, compact | 640 px clip | no |

Rules:
- **No badges.** Tech is one line of muted text, separated by `·`.
- **Status word on every card.** `Shipped` / `Vertical slice` / `Game jam · Global Game Jam`.
- **One primary link** plus at most one secondary. CTA verb matches status (§4).
- Shipped and slice cards add `▸ How it works` — a native `<details>` with 3 bullets and one
  screenshot or a small systems diagram.
- Jam cards have no expander. Hovering the media previews the clip; the whole card is not a link,
  the button is.
- Equal-height cards per row (`height: 100%` on the card, `align-items: stretch`).

### The bolded line is the point

That single sentence is what separates a showcase from a list. Compare:

- ❌ `Tile Map Systems · Army & Marches · Combat Visualization`
- ✅ **Built the tile-map layer that streams 400×400 maps and drives army marches, POI placement,
  and combat visualization.**

Rules for drafting (§7): specific, first person, no invented metrics.

---

## 7. Copy plan

Draft every card's fields from existing card text, then hand over for edits.

| Field | Source | Owner |
| --- | --- | --- |
| Status word | §4 table (verified against store pages) | me |
| One sentence (what the player does) | existing card text, trimmed | me → you approve |
| **The system line** | existing "Contributions" badges, rewritten | me drafts, **you verify** |
| Tech line | existing "Tools" badges, cut to 3–4 | me |
| Role · team · studio | existing + itch/Steam pages | me |
| `How it works` bullets | needs your input | **you** |
| Hero sentence | draft | you approve |

**Constraint:** I will not invent numbers. If a line needs "60 fps on low-end Android" or
"400×400 maps", you supply it or the number comes out. Vague is better than fabricated on a
hiring site.

**Same rule for status.** I will not describe a vertical slice as released, a jam game as
commercial, or a delisted game as available. Derived from the store pages, not from memory:

| Project | Verified fact | Card wording |
| --- | --- | --- |
| Dragonfire | Live on Google Play | `Shipped · 2025` |
| NFL Clash | Launched Oct 2021; studios sunset + delisted 2023 | `Shipped · 2021` (link the video, not a dead store page) |
| Groovity | Steam page: "Coming soon"; demo downloadable | `Vertical slice` + "Play the demo" |
| Human 101 | Gameplay video only | `Vertical slice` + "Watch gameplay" |

Hero claim: **"Two commercially shipped titles"** — Dragonfire and NFL Clash. That is accurate and
it is a stronger sentence than a list of three projects, one of which never shipped.

Optional, only if you know the figure: NFL Clash's lifetime installs. Public reporting puts
Nifty's two titles at ~2.2M combined — do **not** attribute that to NFL Clash alone.

Copy fixes carried over: `Linkedin` → `LinkedIn`, `Mail` → `Email`,
`Combat Vistualization` → `Combat Visualization`.

---

## 8. Asset pipeline

### 8.1 Capture the two missing clips

Same treatment as the existing ones. Requirements:

- **1920×1080, 60 fps**, 12–15 s, 16:9, no letterboxing, no cursor, no UI chrome from the OS.
- Start *already in gameplay* — no menus, logos, loading screens, or fades in the first 0.5 s.
- Make it **loopable**: end on a framing close to the start.
- Capture with game audio (we strip it, but it helps you find the beat).
- Also grab **3 stills** per game for the expander / poster fallback.

What to show:

| Project | Shot list |
| --- | --- |
| Between the Canvases | Paintbrush → **entering a painting** (the hook), then restoring a detail inside it. One continuous take if possible. |
| Overlook Inn | A corridor behaving wrong, then a **cat reveal**. Browser build is fine to record — it's the same build visitors will play. |

Deliver as `assets/videos/src/<slug>-master.mp4` (git-ignored, 1080p60, large).
Slugs: `between-the-canvases`, `overlook-inn`.

### 8.2 Encode

Keep existing filenames for the 12 current clips (avoids 12 renames); kebab-case for the new two.

```bash
# Large — 960px wide (shipped + slices)
ffmpeg -i src.mp4 -an -vf "scale=960:-2:flags=lanczos,fps=30" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p \
  -movflags +faststart assets/videos/out.mp4

# Compact — 640px wide (jams)
ffmpeg -i src.mp4 -an -vf "scale=640:-2:flags=lanczos,fps=30" \
  -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p \
  -movflags +faststart assets/videos/out.mp4
```

`-an` strips the audio track — every clip is muted, so it is pure waste (currently 12 wasted tracks).
`-movflags +faststart` lets playback begin before the file finishes.

### 8.3 Posters

Three candidates per clip, tiled for review; you pick one.

```bash
for t in 2 6 11; do
  ffmpeg -ss $t -i src.mp4 -frames:v 1 -vf scale=480:-2 -q:v 3 /tmp/cand_$t.jpg
done
ffmpeg -i /tmp/cand_2.jpg -i /tmp/cand_6.jpg -i /tmp/cand_11.jpg \
  -filter_complex hstack=3 /tmp/sheet-<slug>.jpg
```

Save the winner as `assets/img/<slug>.jpg` at the card's width (960 shipped/slice, 640 jam), q80.

### 8.4 Resulting weights

| Asset | Spec | Count | Weight |
| --- | --- | --- | --- |
| Large clip (shipped + slices) | 960 px / 30 fps / no audio | 4 | ~600 KB each |
| Compact clip (jams) | 640 px / 30 fps / no audio | 10 | ~280 KB each |
| Posters | JPEG q80 | 14 | ~45–90 KB each |

Initial load ≈ **850 KB** (HTML + CSS + posters). Clips load only on hover/tap, one at a time.
Verified on `dragonfire.mp4`: **8.7 MB → 286 KB** at 640 px, a 30× reduction.

### 8.5 Playback behaviour

```js
// Desktop: hover preview. Touch: tap to toggle. One clip at a time.
// Respects prefers-reduced-motion — no preview at all, poster only.
```

- `preload="none"` on every `<video>`; no `autoplay`.
- Hover/pointerenter → load and play; pointerleave → pause (keeps the frame).
- Mobile: poster + play affordance; tap toggles playback.
- Since nothing autoplays, WCAG 2.2.2 (pause moving content) is satisfied by construction.

---

## 9. Implementation phases

### Phase 0 — Decisions — answered

- [x] Featured tier: **Dragonfire + NFL Clash**
- [x] Groovity: master's project, final build, no further development → stated on the card
- [x] Human 101: Onion Head Games was a small indie studio Andrés co-founded; it no longer exists → stated on the card
- [x] Résumé: stays on Google Drive
- [x] Credits: jam cards name the jam only; no team-size line
- [x] Dates: year only

### Phase 1 — Assets — done, two clips outstanding

- [x] Re-encode 12 clips (4 × 960 px / 8 × 640 px, audio stripped, faststart) — **113 MB → 5.7 MB**
- [x] Poster frames picked from three candidates per clip
- [x] 14 posters exported; designed placeholders for the two without footage
- [x] `ffprobe` audit: 960×540 / 640×360, 30 fps, no audio stream
- [ ] **Capture `overlook-inn` and `between-the-canvases`** (yours)
- [ ] Swap the placeholder `<img>` for the `<video data-preview>` block in both jam cards

### Phase 2 — Page shell — done

- [x] `assets/css/site.css` (~380 lines, custom properties, no framework)
- [x] Bootstrap CSS/JS, Popper and the unused local copy removed
- [x] Header + hero, one sentence, two CTAs
- [x] **Shipped** section: Dragonfire + NFL Clash
- [x] **Demos & vertical slices** section: Groovity + Human 101
- [x] `<details>` expanders, keyboard-operable, no JS

### Phase 3 — Jam grid — done

- [x] 10 jam cards, 3-up / 2-up / 1-up
- [x] Hover / tap preview, one clip at a time, IntersectionObserver pause
- [x] Between the Canvases + Overlook Inn added with credits and CTAs
- [x] Status word and matching CTA on every card

### Phase 4 — Copy and metadata — done

- [x] "System" line for the four main cards; jam cards deliberately have none (see §11)
- [x] Tech lines trimmed to 3–4 per card
- [x] Meta description, canonical, OG/Twitter, theme-color
- [x] `assets/img/og.jpg` (1200×630) from Dragonfire footage
- [x] `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`
- [x] `robots.txt`, `sitemap.xml`, `404.html`
- [x] JSON-LD `Person` with `sameAs` → LinkedIn, itch.io

### Phase 5 — Verify — results

| Check | Result |
| --- | --- |
| Lighthouse accessibility | **1.00** (was 0.84) |
| Lighthouse best practices | **1.00** |
| Lighthouse SEO | **1.00** (was 0.75) |
| Initial transfer | **462 KB** (was ~113 MB) |
| `.mp4` requests before interaction | **0** |
| Page height | 3,593 px (was 4,473) |
| Horizontal overflow | none at 320 / 375 / 768 |
| Columns | 1 / 1 / 2 (3-up ≥ 993 px) |
| Keyboard | skip link → header → cards; expanders open with Enter |
| Console | clean |

Not run: `html-validate` — not installed, and installing it would add a toolchain the plan
explicitly avoids.

### Phase 6 — Ship — done, awaiting your review

- [x] Branch `redesign`, three commits, **not pushed**
- [x] `index.html` kept at the same path, so a merge deploys atomically
- [ ] Merge to `master` when you're happy

---

## 10. Accessibility & SEO checklist

- One `H1`; `H2` per section; `H3` per card; **zero headings wrapping badges**
- `<header>`, `<main>`, `<footer>` landmarks + skip link
- Contrast ≥ 4.5:1 (current primary button is 2.99:1)
- Unique link labels: `aria-label="Play Overlook Inn in your browser"`, not eleven "Play"s
- `:focus-visible` rings that are actually visible on the dark palette
- `prefers-reduced-motion` honoured
- Video elements: `muted playsinline preload="none" poster="…"`
- Meta description, canonical, OG/Twitter cards, favicon, sitemap, robots, 404

---

## 11. Remaining work

1. **Two clips to capture** — Overlook Inn and Between the Canvases. The cards are wired; swapping
   the `<img>` for the `<video data-preview>` block is the only change needed.
2. **Jam cards have no "what I built" line.** The repo records only the game premise for the older
   jams, and I won't invent contributions. One honest line each would make all ten stronger:
   what system you owned, not what the game is.
3. **No hero "currently" line.** Left out deliberately — nothing accurate to put there.
4. **Hero reel** — still the single biggest upgrade if you ever cut 20–30 s of footage.
5. **Repo history is still heavy.** The branch replaces 113 MB of video with 5.7 MB, but the old
   blobs live on in history, so a fresh clone still pulls them. `git filter-repo` would fix it;
   not worth the risk to history unless clone size matters to you.

---

## 12. Effort sketch

| Phase | Time |
| --- | --- |
| 1 — Assets (encode is unattended; capture is you) | done, minus your capture |
| 2–3 — Shell + two tiers + jam grid | done |
| 4 — Copy | done, pending your read-through |
| 5–6 — Verify + ship | done, pending merge |

---

## 13. Changelog

- **2026-11-19 (implementation)** — Built the tiered showcase on branch `redesign`: hand-written
  CSS replaces Bootstrap, 12 clips re-encoded (113 MB → 5.7 MB), posters and placeholders generated,
  preview script added, metadata/OG/favicon/sitemap/404 added. Lighthouse accessibility 0.84 → 1.00,
  SEO 0.75 → 1.00, initial transfer 113 MB → 462 KB.
- **2026-11-19 (copy pass)** — Cut restated claims, editorial asides and the mixed jam-button
  labels: no em dashes in visible copy, no "two shipped titles" line above a Shipped section,
  no notes repeating the card meta, and every jam link now reads "Play on itch.io".
- **2026-11-19** — Corrected tiering after status review: Groovity and Human 101 are vertical
  slices, not commercial releases. Featured tier reduced from 3 to 2 (Dragonfire, NFL Clash); added
  a `Shipped / Vertical slice / Game jam` status vocabulary and a "do not blur status" rule.
  Added Between the Canvases and Overlook Inn as jam entries; both need footage.
