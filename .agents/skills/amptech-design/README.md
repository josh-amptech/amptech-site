# AmpTech Design System

> **AmpTech helps you take your AI project from prototype to production.**

AmpTech is a custom software consultancy for founders and business owners who've built a promising AI prototype and need senior engineering judgment to ship it as a real, reliable product. The brand positions AI as a **mech suit, not a robo-taxi** — powerful leverage that still needs an expert operator. The customer is the hero; AmpTech is the guide.

This design system captures that stance visually and verbally: **competent, fast, powerful, controlled, trustworthy** — never hypey, never playful.

---

## Sources

- **Logo files** (uploaded by the user, 2026-04-18) — 19 PNG variants, copied into `assets/`.
  - Original upload names: `uploads/logo gray red ( transparent ).png`, `uploads/logo only red ( white background )-01.png`, `uploads/logo white-01.png`, etc.
- **Brand positioning / tone notes** — provided inline with the original request (StoryBrand frame; "mech suit, not robo-taxi"; tagline; emotional palette).
- **No codebase, Figma, or website was provided.** The visual system below is extrapolated from the logo's DNA (angular red "A" lightning bolt, steel gray, geometric sans wordmark with thin red TECH bar) and the brand's positioning notes.

---

## Index — what's in this repo

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context + content fundamentals + visual foundations + iconography. |
| `SKILL.md` | Agent-Skills-compatible entry point for using this system in Claude Code. |
| `colors_and_type.css` | All design tokens as CSS variables, plus semantic type classes (`.amp-h1`, `.amp-eyebrow`, etc.). Import this first. |
| `assets/` | Renamed, canonical logo files — horizontal, stacked, mark-only, across light/dark/transparent variants. |
| `preview/` | Individual HTML cards that populate the Design System tab (tokens, type specimens, components). |
| `ui_kits/marketing/` | High-fidelity marketing-site UI kit — navbar, hero, service grid, process timeline, CTA, footer. See its own `README.md`. |
| `fonts/` | (empty — fonts currently loaded from Google Fonts CDN; see "Typography" below) |

---

## Content Fundamentals

### Voice in one line
**Senior engineer at a whiteboard, explaining something hard in plain English.** Calm, specific, zero hype.

### Pronouns & framing
- **"You"** is the founder/operator with a prototype; **"we"** is AmpTech. Second-person dominant.
- The customer is the hero. We are **the guide**, not the protagonist. Never lead with "We are…" — lead with what you, the reader, are trying to do.

### Tone dials (where each sits on the continuum)
| Dial | Setting | Why |
|---|---|---|
| Technical ↔ Plain | ~65% technical | We expect the reader to understand "load tests," "observability," "latency" — we don't explain them. But we don't use jargon for its own sake. |
| Confident ↔ Humble | Confident, no boasting | State capability flatly. "We ship production code." Not "world-class engineering team." |
| Formal ↔ Casual | Business-casual | Contractions are fine. No slang, no memes, no exclamation points. |
| Serious ↔ Playful | Almost entirely serious | One dry aside per page is the ceiling. |
| Hype ↔ Understated | Strongly understated | Adjectives earn their place. Verbs do the work. |

### Casing
- **Sentence case** for headlines, buttons, nav links. ("From prototype to production", not "From Prototype To Production".)
- **ALL CAPS** reserved for tiny eyebrows/metadata labels (tracked +140), section kickers, and the wordmark itself.
- The brand is written **AmpTech** in prose (one word, camel-cased). Only the logo uses AMPTECH.

### Copy examples (house voice)

**Hero, good:**
> **Your AI prototype works on your laptop. Now it needs to survive production.**
> We pair senior engineers with founders shipping AI-built products. Reliability, observability, and the judgment calls the demo didn't ask you to make.
> — [ See how we work ]   [ Book a prototype review ]

**Hero, off-brand (don't):**
> 🚀 Unlock the power of AI with our world-class team! Let's supercharge your business today!

**Service card, good:**
> **Prototype review** · 1 week
> A senior engineer reads your code, your prompts, and your infra. You get a written report with the five things that will break first in production, and what to do about them.

**Off-brand (don't):**
> We leverage cutting-edge AI solutions to drive synergistic outcomes for forward-thinking organizations.

### Words we use
Ship, production, reliability, observability, evals, latency, judgment, leverage, operator, senior, precise, clear, shipped, measured, tradeoff, guardrails, guarantee, load, stress-test, handoff, runbook.

### Words we avoid
Supercharge, unlock, revolutionary, game-changing, AI-powered, cutting-edge, world-class, seamlessly, magical, effortless, disrupt, synergy, "let's" anything, emoji in body copy, exclamation points.

### Emoji & punctuation
- **No emoji.** Not in headlines, not in buttons, not in marketing. (OK privately in Slack — not in the product or site.)
- Em-dashes (—) for asides, mid-dot (·) for metadata separators, arrows (→) for directional links.
- Periods end headlines only when they're a full declarative sentence; otherwise no terminal punctuation on headings.

---

## Visual Foundations

### Core metaphor
The logo is an **angular "A" formed from a lightning bolt** — half steel gray, half red. This duality *is* the brand:
- **Steel gray = the operator, the engineering rigor, the constant.**
- **Red = the power, the speed, the forward vector.**

The shape is sharp, triangulated, forward-pointing — never rounded off. Every design choice echoes this: precise edges, small radii, confident whitespace, occasional 20° diagonal slashes.

### Color
- **Amp Red `#D41E10`** (official brand value — R212 G30 B16 · C14 M100 Y100 K0) — the accent. Used for a single focal point per view: CTA, active state, key metric, bolt-bar divider. Never as large background fills.
- **Steel Gray `#4D4D4D`** (official brand value — R77 G77 B77 · C76 M69 Y67 K29) — secondary mark color; used for icon strokes, UI chrome in light mode.
- **Ink `#141414`** — near-black (softened from brand's secondary `#000000`); primary type on light, primary surface in dark mode.
- **Gray scale 0–900** — a cool-neutral palette (hint of blue-graphite, ~3° hue).
- **Status colors** use a muted palette; danger is **intentionally the brand red** — the brand tolerates no ambiguity between "important" and "dangerous".
- **Dark mode is first-class**, because it reads as engineering-native.

### Typography
- **Display: Space Grotesk** — official brand display font. Geometric, slightly engineered, humanist enough to feel considered. Used for H1–H4 and the wordmark family. Loaded from the local variable font file `fonts/SpaceGrotesk-VariableFont_wght.ttf` (official brand asset, supports weights 300–700).
- **Body: Inter** — official brand body/UI font. Neutral, dense, screen-optimised. Loaded from Google Fonts.
- **Mono: JetBrains Mono** — official brand mono font. Used for code, metrics, uptime numbers, and technical annotations. Use at body-adjacent size with `tabular-nums` for an engineered credibility signal. Loaded from Google Fonts.
- **Eyebrows** are 12px, tracked +14%, uppercase, red, preceded by an 18px red bar (`.amp-eyebrow`). This is a signature.

### Backgrounds
- **White or near-black, dominantly flat.** No big candy gradients.
- Approved subtle surfaces: `--grad-ink` (subtle vertical ink gradient for dark hero sections), `--grad-steel` (for section dividers), and the controlled `--grad-ember` — only for a **focal element** (e.g. a hover state, or a single badge), never a hero backdrop.
- **Grid texture is allowed** at low opacity (dotted 1px grid on `--gray-100` / `--gray-800`) — suggests blueprint/engineering.
- **No hand-drawn illustrations, no photographs of smiling teams, no glossy product mockups.** When imagery is needed, use: real product screenshots, architecture diagrams, terminal output, code snippets, or abstract geometric compositions using the logo shapes.
- **Full-bleed imagery:** sparingly, and only for architecture-diagram-style visuals or dark abstract geometry.

### Borders & dividers
- Hairline **1px** borders are the default (`--border`).
- **2px** borders for emphasized cards, especially on dark.
- **3px red left-bar** (`.amp-bolt-bar`) is reserved: use ONLY on pull-quotes, key callouts, or the active nav item. Not on every card — that's a cliché we explicitly avoid.

### Corner radii
- **0–6px range for UI elements.** Buttons, inputs, chips = 6px. Cards = 10px. The system is **angular**, not pillowy.
- Full-round (`--r-full`) only for avatars and the tiny pill-badge meta tags.

### Shadows (precise, never cloudy)
- Four-step system (`--shadow-1` through `--shadow-4`), all with tight offsets + small blur radii.
- **`--shadow-red-glow`**: a 3px semi-transparent red ring used for focus states and high-emphasis hover. This is the brand's "powered-on" indicator.

### Hover & press states
- **Hover:** buttons and cards lift with `--shadow-2` → `--shadow-3`, and solid-red buttons shift to `--amp-red-hot`. Duration 120ms, `--ease-out`.
- **Press:** scale(0.98) + shift to `--amp-red-deep` for primary buttons. 80ms, `--ease-in`.
- **Focus:** `--shadow-red-glow` + `--border-strong`. Visible, deliberate.
- **Disabled:** opacity 0.4, no pointer, preserves shape.

### Motion
- **Short and snappy** — 120–320ms, never over 400ms.
- **Easing:** `--ease-out` is the default; `--ease-snap` adds a tiny overshoot (1.05) for confirmations and toggles — used sparingly for a feeling of precision, not bounce.
- **No wobble, no elastic, no parallax scroll.** Motion is a confirmation, not decoration.

### Transparency & blur
- Used only for: sticky headers on scroll (backdrop-blur-12, 85% surface), modal scrims (60% ink), and protection gradients on imagery (top/bottom fades for legibility).
- Not used decoratively.

### Cards
- White (or `--surface` in dark) with `--border` 1px, `--r-4` (10px), and **`--shadow-1`** as default.
- On hover: `--shadow-2` + `translateY(-2px)`, 200ms.
- **Never a card with rounded corners and a colored-left-border as the only visual identity** — that's the AI-startup cliché. If we use the red bolt-bar, the card has a clear editorial reason (a callout, quote, or feature with one primary action).

### Layout
- **12-column, 72px gutters on desktop**, 16px edge padding on mobile.
- Container max widths: 1120 default, 1280 for dashboards, 1440 for full marketing.
- **Fixed elements:** sticky nav (64px), sticky CTA banner only on pricing-style pages. Footers are tall, organized, never sticky.
- **Asymmetry is welcome.** A hero can be 60/40, a feature block can offset its image — we're not a boxy, perfectly-centered template site. Precision, not sterility.

### Signature micro-elements
1. **The red bolt-bar** (3px red accent line — vertical before eyebrows, or horizontal under section kickers).
2. **Mono metrics** — wherever a number appears (uptime, latency, client count), it's rendered in JetBrains Mono at the body-adjacent size.
3. **The diagonal slash** — a subtle 20° `clip-path` accent at the edge of some hero sections, echoing the logo's angle. Use once per page, max.

---

## Iconography

AmpTech's iconography approach is **geometric, stroke-based, engineered**.

- **System: Lucide** (CDN-loaded, https://unpkg.com/lucide-static). Selected because its stroke weight (2px), rounded line caps, and geometric construction match the logo's precision without feeling hand-drawn.
- **Stroke weight:** 2px always; no filled icons in UI chrome.
- **Size scale:** 16 / 20 / 24 / 32px. Use 20px as default for buttons & nav.
- **Color:** inherits from current text color by default. Red only when the icon IS the accent (e.g. the ⚡-equivalent next to "Powered by AmpTech" footnotes — but we use the logo mark, not a bolt icon, for this).
- **The logo mark itself** is the brand's primary "icon" — use `assets/mark-red.png` (or the stacked version) wherever a favicon, app icon, social avatar, or tiny brand presence is needed. Never draw a simplified/stylized version of it.
- **No emoji anywhere in the UI or brand surfaces.** Not even in empty states. Use a Lucide icon + short prose instead.
- **No unicode char icons** (no ▶, ★, ✓ in copy). Use Lucide equivalents: `play`, `star`, `check`.
- **SVG vs PNG:** Lucide is SVG-only. Our logo files are PNG (as delivered); if SVG logos become available, we'll swap them in (flagged — see Caveats).

### Flagged substitutions
- Icon library: **Lucide via CDN** (not a bespoke in-house set, because none was provided).
- Fonts: **Space Grotesk / Inter / JetBrains Mono via Google Fonts** (no brand fonts provided).

---

## Caveats & open asks (for the user)

1. **SVG logos?** We only received PNGs. SVGs would make the mark crisp at every size (favicons, micro-UI usage) — if you have them, drop them in `assets/`.
2. **Brand typefaces confirmed** — Space Grotesk (display), Inter (body), JetBrains Mono (mono). All loaded from Google Fonts.
3. **Real product materials?** No codebase, no website, no deck. The marketing UI kit here is an extrapolation from brand strategy. To tighten it into pixel-perfect, send the current website URL or Figma.
4. **Imagery direction?** The system currently prohibits stock-smiling-team photography and leans into geometric/terminal/diagram visuals. Confirm this matches AmpTech's visual intent.

---

*Built for AmpTech — precision as a service.*
