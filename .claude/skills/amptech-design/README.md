# AmpTech Design System

> **AmpTech helps you take your AI project from prototype to production.**

AmpTech is a custom software consultancy for founders and business owners who've built a promising AI prototype and need senior engineering judgment to ship it as a real, reliable product. The brand positions AI as a **mech suit, not a robo-taxi** — powerful leverage that still needs an expert operator.

The brand's marketing is built on the **StoryBrand framework** (see "Messaging Framework" below — it comes before the visual system on purpose: the narrative is the skeleton, the visuals serve it). The design system captures the same stance visually and verbally: **competent, fast, powerful, controlled, trustworthy** — never hypey, never playful.

---

## Locked vs. Recommended

Every major rule in this guide is tagged:

- **[Locked]** — derived from the logo or client-confirmed. Changing these requires a client decision: the wordmark and logo files, brand red `#D41E10`, steel gray `#4D4D4D`, the angular geometry of the mark, the StoryBrand positioning (provided in the original brand notes), the typefaces, the tagline "From prototype to production", the first-class dark mode, and the destructive-action treatment (all client-confirmed 2026-07-02).
- **[Recommended]** — design decisions made building this system: the gray scale, ink `#141414`, radii, motion timing, casing policy, iconography. Follow them for consistency, but they can evolve without breaking the brand.

**Canonical token file: `colors_and_type.css`.** The site's `globals.css` and `claude-code-handoff/app-globals.css` are mirrors. When any file disagrees with `colors_and_type.css`, the canonical file wins — fix the mirror.

---

## Sources

- **Logo files** (uploaded 2026-04-18) — PNG and SVG variants. Canonical renamed copies live in `assets/` (PNG) and `assets/svg/` (SVG — preferred for all screen use).
- **Brand positioning / tone notes** — provided inline with the original request: the StoryBrand frame, "mech suit, not robo-taxi," the tagline, and the emotional palette. These are client-confirmed and treated as [Locked].
- **Typefaces** — Space Grotesk / Inter / JetBrains Mono were designer-recommended, then **client-confirmed 2026-07-02**. Now [Locked].
- **No codebase or Figma were provided.** The visual system beyond the two brand colors and the typefaces is extrapolated from the logo's DNA and is [Recommended].

---

## Index — what's in this repo

| Path | What it is |
|---|---|
| `README.md` | This file. Messaging framework + content fundamentals + visual foundations + iconography. |
| `SKILL.md` | Agent-Skills-compatible entry point for using this system in Claude Code. |
| `colors_and_type.css` | **Canonical token file.** All design tokens as CSS variables, plus semantic type classes (`.amp-h1`, `.amp-eyebrow`, etc.). Import this first. |
| `assets/` | Canonical logo PNGs — horizontal, stacked, mark-only, across light/dark/transparent variants. |
| `assets/svg/` | Canonical logo SVGs — same variants, crisp at every size. **Prefer these** for favicons, UI, and anything that scales. |
| `preview/` | Individual HTML cards that populate the Design System tab (tokens, type specimens, components). |
| `ui_kits/marketing/` | High-fidelity marketing-site UI kit. See its own `README.md`. |
| `fonts/` | `SpaceGrotesk-VariableFont_wght.ttf` — local copy of the recommended display font. |

### Components (`ui_kits/marketing/`)

Reusable marketing-site components, each compiled into the design system bundle:

- **Navbar** — sticky nav, active-state underline, primary red CTA, mobile drawer.
- **Hero** — headline + lead + dual CTA + terminal-style diagnostic panel.
- **ServiceGrid** — three-up service cards (Prototype review, Production sprint, Embedded engineering).
- **ProcessTimeline** — 4-step process, mono step numbers.
- **MetricsStrip** — dark inverted credibility-metrics strip.
- **Testimonial** — pull-quote with the red bolt-bar.
- **CTASection** — full-width ink CTA with red glow.
- **Footer** — tall footer with logo, link columns, legal row.
- **Button**, **Eyebrow**, **Icon** — shared primitives the sections above compose.

---

## Messaging Framework [Locked frame · Recommended copy]

AmpTech's marketing follows StoryBrand: the customer is the hero of the story; AmpTech is the guide. The live homepage is literally structured on these beats (its section components are named Problem, Guide, Plan, SocialProof, Success, ClosingCTA). This section makes that framework explicit so every new page and campaign is built on it — not rediscovered from the code.

**The framework is internal vocabulary only.** "Hero," "guide," "villain," "BrandScript," and every other StoryBrand term never appears in customer-facing copy. If a reader can detect the formula, the copy failed. StoryBrand is the skeleton; the senior-engineer voice is the skin.

### The BrandScript

**Character.** A founder or operator with a working AI prototype — built with AI tools, a contractor, or nights and weekends — who wants to ship it as a real, sellable product.

**Problem.** Three levels. Copy usually names the external one; the internal one is what actually converts; the philosophical one shows up rarely, as the quiet conviction under a headline.

- *External:* the prototype works in the demo and breaks everywhere else. Auth is half-wired, data doesn't persist reliably, edge cases crash it, and every fix spawns two more bugs.
- *Internal:* they can't tell whether they're 90% done or need to start over — and not knowing is quietly eroding their confidence in the whole idea.
- *Philosophical:* getting a working idea to market shouldn't require you to already be a senior engineer.

**Guide.** Two signals, always in this order:

- *Empathy through specificity* — we've watched good builds stall a hundred commits from done: auth that half-works, data that doesn't stick, a fix that spawns two new bugs. Never sympathy phrases ("we understand your frustration").
- *Authority, stated flatly* — 20+ years shipping software past the prototype stage. No adjectives, no "world-class."

AmpTech is never the protagonist. Sections don't open with "We…" — they open with what the reader is trying to do.

**Plan.** Three steps, always plainly worded:

1. **Show us where it stands** — a senior engineer reads the code. No pitch, no scorecard.
2. **Get a clear build plan** — what's keepable, what isn't, and what it takes to go live.
3. **Go live** — we build alongside you until it's in production and holding.

**Call to action.** One *direct* CTA per page, always visible: **"Book a discovery call."** One *transitional* CTA for people not ready: **"See how we work."** The direct CTA is the page's single solid-red action (see "Red usage policy").

**Success.** What changes when they ship: the product exists. They can charge for it, demo it without crossed fingers, and build the next feature on a foundation that holds.

**Failure stakes.** Used sparingly — at most once per page, dry and factual, never fear-mongering. The canonical line: *promising builds don't fail loudly; they sit in a repo no one opens again.* One quiet gut-punch beats three dramatic warnings.

### The one-liner

> **Most AI prototypes stall somewhere between the demo and the first paying customer. We're senior engineers who take yours the rest of the way — so you have a product you can sell, not a demo you can show.**

Test applied to this and every future variant: would a senior engineer say it out loud to a founder without wincing? If it needs a slide behind it, rewrite it.

### Applying the framework

Every new page or campaign maps to the beats before a word is written. The beats structure the page; the copy never announces them. Worked example — a services page:

| Beat | On the page | Copy in the house voice |
|---|---|---|
| Problem | Opening section | "The demo went great. Then someone else tried to log in." |
| Guide | One credibility strip | "We've spent twenty years getting software past the demo stage — ours and other people's." |
| Plan | Three numbered steps | "Show us where it stands. Get a build plan you can hold us to. Go live." |
| Proof | Case study + mono metric | See "Proof patterns" below. |
| Success | Short outcome section | "You walk away with a product in production — one you can sell, demo, and build on." |
| CTA | Closing block + persistent nav button | "Book a discovery call" |

A case study runs the same beats in miniature: what they came with (Character/Problem) → what we found (Guide) → what we did (Plan) → what shipped (Success), with one real metric.

### Guardrails against cheese

1. **The framework never surfaces.** No beat labels, no "your story," no "every hero needs a guide." If the structure is visible, rewrite until it reads like something a person would say.
2. **Empathy is specificity.** Name the actual failure modes (auth broke, data didn't save, every fix spawned two bugs). Sympathy phrases are banned.
3. **Stakes stay dry.** Failure language is factual and quiet. One understated line per page, maximum. No countdown urgency, no "don't get left behind."
4. **The voice rules apply doubly here.** No hype words, adjectives earn their place, one dry aside per page. StoryBrand executed lazily produces exactly the register this brand exists to avoid — when in doubt, cut the drama and keep the fact.

---

## Content Fundamentals

### Voice in one line
**Senior engineer at a whiteboard, explaining something hard in plain English.** Calm, specific, zero hype.

### Pronouns & framing
- **"You"** is the founder/operator with a prototype; **"we"** is AmpTech. Second-person dominant.
- The customer is the hero of the story; we are the guide (internal framing only — see Messaging Framework). Never lead with "We are…" — lead with what you, the reader, are trying to do.

### Tone dials (where each sits on the continuum)
| Dial | Setting | Why |
|---|---|---|
| Technical ↔ Plain | ~65% technical | We expect the reader to understand "load tests," "observability," "latency" — we don't explain them. But we don't use jargon for its own sake. |
| Confident ↔ Humble | Confident, no boasting | State capability flatly. "We ship production code." Not "world-class engineering team." |
| Formal ↔ Casual | Business-casual | Contractions are fine. No slang, no memes, no exclamation points. |
| Serious ↔ Playful | Almost entirely serious | One dry aside per page is the ceiling. |
| Hype ↔ Understated | Strongly understated | Adjectives earn their place. Verbs do the work. |

### Casing [Recommended]
- **Sentence case** for headlines, buttons, nav links. ("From prototype to production", not "From Prototype To Production".)
- *Why:* sentence case reads calm and technical — the register of engineering documentation, not advertising. Title Case reads like a pitch deck; ALL CAPS reads like shouting. Both undercut the whiteboard voice.
- *Exceptions:* proper nouns, product names, and acronyms keep their casing — "Deploy to AWS", "Works with GPT-4", "Book a call about your Postgres migration."
- **ALL CAPS** reserved for tiny eyebrows/metadata labels (tracked +14%), section kickers, and the wordmark itself.
- The brand is written **AmpTech** in prose (one word, camel-cased). Only the logo uses AMPTECH. [Locked]

### Copy examples (house voice)

**Hero, good:**
> **Your AI prototype works on your laptop. Now it needs to survive production.**
> We pair senior engineers with founders shipping AI-built products. Reliability, observability, and the judgment calls the demo didn't ask you to make.
> — [ Book a discovery call ]   [ See how we work ]

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
Supercharge, unlock, revolutionary, game-changing, AI-powered, cutting-edge, world-class, seamlessly, magical, effortless, disrupt, synergy, "let's" anything, emoji in body copy, exclamation points. Plus all StoryBrand vocabulary in customer-facing copy: hero, guide, villain, journey, transformation.

### Emoji & punctuation
- **No emoji.** Not in headlines, not in buttons, not in marketing. (OK privately in Slack — not in the product or site.)
- Em-dashes (—) for asides, mid-dot (·) for metadata separators, arrows (→) for directional links.
- Periods end headlines only when they're a full declarative sentence; otherwise no terminal punctuation on headings.

### Form microcopy

The contact form is where the direct CTA lands — it gets the same editorial care as the hero.

- **Labels:** sentence case, short nouns. "Work email", "What are you building?" Never "Please enter…"
- **Helper text:** only when it changes what the user does. "One or two sentences is plenty." Not restatements of the label.
- **Validation errors:** specific, calm, and actionable. Say what's wrong and how to fix it. Never blamey ("Invalid input"), never cutesy ("Oops!"), no exclamation points.
  - Empty email: "We need an email to reply to."
  - Malformed email: "Check the email address — it doesn't look complete."
  - Empty message: "Tell us a sentence about the project so the right engineer replies."
- **Success state:** confirm what happens next, flatly. "Got it. A senior engineer — not a sales rep — replies within one business day."
- **Mechanics:** validate on blur, not on every keystroke. Errors render in `--danger` at `--fs-sm` with a Lucide `circle-alert` icon; the field border switches to `--danger`.

---

## Proof patterns

Proof is the authority half of the Guide beat — messaging infrastructure, not decoration. Three sanctioned formats. **Never invent numbers, client names, or quotes.** If a real metric doesn't exist, describe the outcome qualitatively or omit the section.

### Case studies
Skeleton (the BrandScript in miniature, unlabeled):
1. **What they came with** — one sentence: the prototype and what it was for.
2. **What was breaking** — the specific failure modes, in the customer's terms.
3. **What we did** — the plan as executed. Plain verbs, no methodology names.
4. **What shipped** — the production outcome, with one real metric in mono.

Length: 150–300 words on a page, one paragraph in a card. Headline is the outcome, not the client: "From weekend prototype to 400 paying users" — never "How we helped Acme unlock growth."

### Credibility metrics
- Rendered in JetBrains Mono (`.amp-metric`), `tabular-nums`, at body-adjacent size; the terse label in `--fg3`.
- Real and sourceable only. "20+ years shipping" is fine; "99.99% uptime" requires a system that actually measures it.
- Three metrics maximum per strip. A wall of numbers reads as hype.

### Terminal output & architecture diagrams
The sanctioned imagery ("no smiling teams") made concrete:

- **Terminal blocks:** `--gray-900` background, JetBrains Mono at `--fs-code`, `--fg1`-on-dark text, `--r-4` corners, 1px `--border-inverse`. Content must be plausible, real-looking output — actual test runs, deploy logs, latency numbers. No cutesy fake commands (`$ ship_it --now`). At most one accent color inside (red for a failing line or highlighted value).
- **Architecture diagrams:** 1px steel strokes on white or `--gray-50`, gray fills, labels in mono at 12px, small radii matching the UI. **One red element maximum** — the path or node the diagram is about. No drop shadows, no isometric 3D, no vendor logos unless real.

---

## Visual Foundations

The visuals serve the narrative above: calm surfaces so the one action stands out, engineering textures as proof, red as controlled power.

### Core metaphor [Locked]
The logo is an **angular "A" formed from a lightning bolt** — half steel gray, half red. This duality *is* the brand:
- **Steel gray = the operator, the engineering rigor, the constant.**
- **Red = the power, the speed, the forward vector.**

The shape is sharp, triangulated, forward-pointing — never rounded off. Every design choice echoes this: precise edges, small radii, confident whitespace, occasional 20° diagonal slashes.

### Color
- **Amp Red `#D41E10`** [Locked] (R212 G30 B16 · C14 M100 Y100 K0). Never as large background fills. Usage is governed by the red policy below.
- **Steel Gray `#4D4D4D`** [Locked] (R77 G77 B77 · C76 M69 Y67 K29) — secondary mark color; icon strokes, UI chrome in light mode.
- **Ink `#141414`** [Recommended] — near-black, softened from the brand's secondary `#000000`; primary type on light, primary surface in dark mode.
- **Gray scale 0–900** [Recommended] — cool-neutral (hint of blue-graphite, ~3° hue).
- **Dark-mode red ramp** [Recommended] — `--amp-red` is only 3.5:1 against ink, so dark surfaces use `--amp-red-hot` for accents and `--amp-red-bright` (`#FF4B3A`, brand hue, 5.5:1 on ink) for hover/link states. These are the only reds; don't introduce off-hue variants.
- **Status colors** [Recommended] — muted palette; `--danger` aliases brand red, disambiguated by *treatment*, not hue (see red policy).

### Red usage policy [Recommended]

The old rule — "one red focal point per view" — was contradicted by the system's own components (eyebrows, links, bolt-bars are all red). Re-scoped:

- **One primary ACTION per view.** Exactly one solid-red-fill element per view, and it's the page's direct CTA ("Book a discovery call"). Solid red fill is reserved for it alone.
- **Structural red micro-accents** are expected and don't count against the limit: eyebrow bars, the bolt-bar, link color, active-nav indicators, one highlighted metric or diagram node. They're thin, small, or text-weight — never fills.
- If a view has two solid-red elements, one of them is wrong.

**Primary vs. destructive** [client-confirmed 2026-07-02]. Making danger literally the same red as the CTA is a usability risk, not a feature — a delete button must not dress like the "buy" button. Disambiguation by treatment:

- **Primary action:** solid `--amp-red` fill, white text. The only solid red on the page.
- **Destructive action:** ghost/outline style — `--danger` text, 1px `--danger` border, transparent fill. It gains a solid red fill *only* inside its confirmation dialog, where it is unambiguously the point.
- **Error states** (form validation, alerts): `--danger` text and border with `--danger-subtle` background — never solid fills.

### Typography [Locked — client-confirmed 2026-07-02]
- **Display: Space Grotesk** — geometric, slightly engineered, humanist enough to feel considered. H1–H4. Loaded from the local variable font `fonts/SpaceGrotesk-VariableFont_wght.ttf` (weights 300–700).
- **Body: Inter** — neutral, dense, screen-optimised. Google Fonts.
- **Mono: JetBrains Mono** — code, metrics, uptime numbers, technical annotations, at body-adjacent size with `tabular-nums`. Google Fonts.
- **Eyebrows** are 12px, tracked +14%, uppercase, red, preceded by an 18px red bar (`.amp-eyebrow`). This is a signature.

### Backgrounds [Recommended]
- **White or near-black, dominantly flat.**
- **Gradient policy (the single statement of it):** `--grad-ink` is the only approved background gradient, for dark hero/section surfaces. `--grad-protect-top/-bottom` are functional overlays for text legibility on imagery, not decoration. `--grad-ember` and `--grad-steel` are removed — don't reintroduce them.
- **Grid texture is allowed** at low opacity (dotted 1px grid on `--gray-100` / `--gray-800`) — suggests blueprint/engineering.
- **No hand-drawn illustrations, no photographs of smiling teams, no glossy product mockups.** When imagery is needed: real product screenshots, architecture diagrams, terminal output, code snippets, or abstract geometric compositions using the logo shapes (specs under "Proof patterns").
- **Full-bleed imagery:** sparingly, and only for architecture-diagram-style visuals or dark abstract geometry.

### Dark mode [Locked — client decision 2026-07-02]
Dark mode is **first-class and user-facing** — for a dev shop, dark reads as engineering-native, and the audience expects it. Two mechanisms, same tokens:

- **Site-wide theme:** default to `prefers-color-scheme`, offer a visible toggle (Lucide `sun`/`moon`, in the nav, 44px target), persist the choice in `localStorage`, apply via `[data-theme="dark"]` on `<html>`. *The live site does not have this yet — it's a build task.*
- **Interleaved dark sections** (hero, proof strips, closing CTA) on light pages remain a layout device, styled with the same `[data-theme="dark"]` scope on the section.

Every component must render correctly under both themes; the dark-mode red ramp (`--amp-red-hot` / `--amp-red-bright`) exists precisely for this — check contrast against the Accessibility table before shipping.

### Borders & dividers [Recommended]
- Hairline **1px** borders are the default (`--border`).
- **2px** borders for emphasized cards, especially on dark.
- **3px red left-bar** (`.amp-bolt-bar`) is reserved: ONLY on pull-quotes, key callouts, or the active nav item. Not on every card — that's a cliché we explicitly avoid.

### Corner radii [Recommended]
- **0–6px range for UI elements.** Buttons, inputs, chips = 6px. Cards = 10px. The system is **angular**, not pillowy (the angularity itself is [Locked] — it comes from the mark).
- Full-round (`--r-full`) only for avatars and the tiny pill-badge meta tags.

### Shadows [Recommended]
- Four-step system (`--shadow-1` through `--shadow-4`), all with tight offsets + small blur radii. Precise, never cloudy.
- **`--shadow-red-glow`**: a 3px ring of brand red at 18% (`rgba(212,30,16,0.18)`) for focus states and high-emphasis hover — the brand's "powered-on" indicator.

### Hover & press states [Recommended]
- **Hover:** buttons and cards lift `--shadow-2` → `--shadow-3`; solid-red buttons shift to `--amp-red-hot`. 120ms, `--ease-out`.
- **Press:** scale(0.98) + `--amp-red-deep` for primary buttons. 80ms, `--ease-in`.
- **Focus:** `--shadow-red-glow` + `--border-strong`. Visible, deliberate.
- **Disabled:** opacity 0.4, no pointer, preserves shape.

### Motion [Recommended]
- **Short and snappy** — 120–320ms, never over 400ms.
- **Easing:** `--ease-out` default; `--ease-snap` (tiny 1.05 overshoot) for confirmations and toggles, sparingly.
- **No wobble, no elastic, no parallax scroll.** Motion is a confirmation, not decoration.
- **`prefers-reduced-motion: reduce` is honored globally** (see the block in `colors_and_type.css`): transitions and animations collapse to instant. Because motion here is only confirmation, nothing essential is lost — never gate meaning on an animation.

### Transparency & blur [Recommended]
- Only for: sticky headers on scroll (backdrop-blur-12, 85% surface), modal scrims (60% ink), and protection gradients on imagery.
- Not used decoratively.

### Cards [Recommended]
- White (or `--surface` in dark) with `--border` 1px, `--r-4` (10px), `--shadow-1` default.
- Hover: `--shadow-2` + `translateY(-2px)`, 200ms.
- **Never a card with rounded corners and a colored-left-border as the only visual identity** — the AI-startup cliché. If the bolt-bar appears, the card has an editorial reason (callout, quote, or feature with one primary action).

### Layout [Recommended]
- **12-column, 72px gutters on desktop**, 16px edge padding on mobile.
- Container max widths: 1120 default, 1280 for dashboards, 1440 for full marketing.
- **Fixed elements:** sticky nav (64px) — which carries the page's direct CTA, satisfying "one direct CTA, always visible." Sticky CTA banner only on pricing-style pages. Footers are tall, organized, never sticky.
- **Asymmetry is welcome.** A hero can be 60/40; a feature block can offset its image. Precision, not sterility.

### Signature micro-elements
1. **The red bolt-bar** (3px red accent line — vertical before eyebrows, or horizontal under section kickers).
2. **Mono metrics** — wherever a number appears, it's JetBrains Mono at body-adjacent size.
3. **The diagonal slash** — a subtle 20° `clip-path` accent at the edge of some hero sections, echoing the logo's angle. Once per page, max.

---

## Accessibility

- **Contrast target: WCAG 2.1 AA.** 4.5:1 for normal text, 3:1 for large text (24px+/19px bold) and UI components.
- Documented pairs:
  - `#D41E10` on white ≈ **5.3:1** — passes AA for normal text (not AAA; don't set long body copy in red anyway).
  - White on `#D41E10` ≈ **5.3:1** — the solid CTA passes AA.
  - `#D41E10` on ink `#141414` ≈ **3.5:1** — large text and UI components only; this is why the dark-mode ramp (`--amp-red-hot`, `--amp-red-bright` at 5.5:1) exists.
  - `--fg3` (`--gray-500`) on white ≈ **4.6:1** — passes AA; don't go lighter for running text.
- **Focus is always visible** (`--shadow-red-glow` + `--border-strong`) — never `outline: none` without a replacement.
- **Reduced motion:** honored globally (see Motion).
- Touch targets ≥ 44px (`--touch-min`).

---

## Iconography [Recommended]

AmpTech's iconography approach is **geometric, stroke-based, engineered**.

- **System: Lucide** (CDN-loaded, https://unpkg.com/lucide-static). Stroke weight (2px) and geometric construction match the logo's precision without feeling hand-drawn. Chosen by us — no in-house set was provided.
- **Stroke weight:** 2px always; no filled icons in UI chrome.
- **Size scale:** 16 / 20 / 24 / 32px. Use 20px default for buttons & nav.
- **Color:** inherits from text color. Red only when the icon IS the accent.
- **The logo mark itself** is the brand's primary "icon" — use `assets/svg/mark-red.svg` (SVG preferred; PNG fallback in `assets/`) wherever a favicon, app icon, social avatar, or tiny brand presence is needed. Never draw a simplified/stylized version of it. [Locked]
- **No emoji anywhere in the UI or brand surfaces.** Not even in empty states. Lucide icon + short prose instead.
- **No unicode char icons** (no ▶, ★, ✓ in copy). Lucide equivalents: `play`, `star`, `check`.

---

## Caveats & open questions (for the client)

Resolved 2026-07-02: typefaces confirmed; dark mode is first-class with a user toggle; destructive-action treatment confirmed; tagline **"From prototype to production" is locked** (alternatives considered and declined).

1. **Proof assets** — none exist yet (client-confirmed 2026-07-02). Proof sections stay qualitative placeholders; **no invented metrics, client names, or quotes** until real ones are supplied.
2. **Real product materials** — no codebase, website source, or Figma was provided to this repo. Send the current site URL or Figma to tighten the UI kit to pixel-perfect.
3. **Imagery direction** — the system prohibits stock-team photography and leans geometric/terminal/diagram. Confirm this matches intent.
4. **Dark-mode toggle** — approved but not yet built on the live site. Build task: nav toggle, `prefers-color-scheme` default, persisted choice.

---

*Built for AmpTech — precision as a service.*
