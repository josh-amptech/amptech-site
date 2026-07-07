# Brand

**Brand is defined by the `amptech-design` skill, not by this file.**
Source of truth: `.claude/skills/amptech-design/` → `README.md` (full guide) +
`colors_and_type.css` (all 155 tokens). When the skill and this file ever
disagree, the skill wins — fix this file.

> Do not reintroduce the old brand. The previous setup (Montserrat font,
> `docs/brand-guide.pdf`, `…Messaging-Guide-v2.docx`, an inline color table,
> a warm cream palette) is **superseded**. Delete references to it on sight.

## Tokens & fonts — one source

- **All colors, radii, shadows, and fonts** live in `globals.css`, which mirrors
  the skill's `colors_and_type.css`. Reference them; never hardcode hex.
- **Fonts** (official): **Space Grotesk** (display) · **Inter** (body/UI) ·
  **JetBrains Mono** (metrics/code). Loaded via `next/font/google` in
  `app/layout.tsx`, bound to `--font-space-grotesk` / `--font-inter` /
  `--font-jetbrains`. **Not Montserrat. Not Bebas Neue.**
- **Brand red `#D41E10`** and **steel gray `#4D4D4D`** are the only brand chromatics.
  Red is an accent — one focal point per view (CTA, active state, key metric).
  Never a large background fill.

## Non-negotiables

- **Backgrounds are flat** white or near-black. No cream gradient, no fixed
  gradient overlay, no diagonal red wash. The only allowed gradient is
  `--grad-ink` on a dark hero.
- **Sentence case** for all headlines, buttons, and nav. ALL-CAPS is reserved
  for tiny eyebrow/metadata labels (tracked +0.14em) and the wordmark.
- **Angular, not pillowy.** Radii 2–14px (`--radius-md` 6px for buttons/inputs,
  `--radius-lg` 10px for cards). `rounded-full` is ONLY for avatars and tiny
  pill meta-tags — never buttons.
- **Signature elements** exist and should be used: the red **eyebrow** (red bar +
  uppercase label, `.amp-eyebrow`), the 3px **bolt-bar** (`.amp-bolt-bar`, for
  callouts/active nav only — not every card), and **mono metrics** (`.amp-metric`
  for any number: uptime, latency, counts).
- **No emoji. No hype words** ("revolutionary," "cutting-edge," "innovative,"
  "game-changing," "supercharge," "unlock," "seamless," "leverage" as a verb,
  "solutions"). **No smiling-team stock photography.** No bluish-purple gradients.

## Voice

Senior engineer at a whiteboard: calm, specific, zero hype. **"You"** is the
founder with a prototype; **"we"** is AmpTech (the guide, not the hero). Lead
with the reader's outcome, not the technology. Short sentences, active voice,
contractions OK. One dry aside per page is the ceiling.

**Copy** is verbatim in `components/sections/` — do not rewrite unless asked.

---

# Design Rules

1. **No hardcoded colors.** Use Tailwind brand utilities (`bg-amp-red`,
   `text-amp-steel`, `bg-gray-900`…) or the semantic CSS vars (`var(--accent)`,
   `var(--fg1)`, `var(--surface)`). All defined in `globals.css`.
2. **No new brand tokens** in `globals.css` or components. Add to the skill's
   `colors_and_type.css` first, then mirror into `globals.css`.
3. **Fonts only via the bound vars** — `font-display` / `font-sans` / `font-mono`.
   Never import Montserrat or Bebas Neue.
4. **Flat backgrounds.** No cream, no candy gradients; dark sections use
   `.hero-ink` (`--grad-ink`) only.
5. **Sentence case headlines.** Uppercase only via `.amp-eyebrow`.
6. **Radii stay small.** Buttons/inputs `rounded-md`, cards `rounded-lg`.
   `rounded-full` only for avatars and pill meta-tags.
7. **Numbers render in mono** — wrap metrics in `.amp-metric`.
8. **Icons: Lucide**, 2px stroke, 16/20/24/32px, default 20px. No emoji, no
   unicode glyph icons (▶ ★ ✓) — use `play` / `star` / `check`.
9. No `<img>` — always `next/image`. No inline styles. No UI libraries
   (shadcn, MUI, Chakra) — Tailwind only. Mobile-first. Umami analytics only.
