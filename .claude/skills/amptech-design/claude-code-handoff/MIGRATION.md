# AmpTech — Design System Alignment Migration

**Goal:** bring `amptech-site` from its current warm/Bebas/cream direction onto the
canonical **amptech-design** system (Space Grotesk · Inter · JetBrains Mono ·
flat surfaces · angular radii · red+steel).

**Why this is needed:** the design system was exported but never wired into the
repo. `skills-lock.json` only locks `docx` + `pdf`, and `CLAUDE.md` still
describes the old brand — so Claude Code kept building the superseded direction.
Fix the wiring first (Phase 0), or every code change drifts back.

Work top-to-bottom. Each item is independently committable (conventional commits noted).

---

## Phase 0 — Wire the skill in (do this first)

- [ ] **Install the skill into the repo.** Copy the exported design system into
      `./.claude/skills/amptech-design/` so Claude Code auto-discovers it:
      ```
      .claude/skills/amptech-design/
        SKILL.md  README.md  colors_and_type.css
        assets/  ui_kits/  preview/
      ```
      `chore: install amptech-design skill`
- [ ] **Confirm it locks.** Run the repo's skill sync so `amptech-design` appears
      in `skills-lock.json` alongside `docx`/`pdf`.
- [ ] **Replace the `## Brand` + `## Design Rules` sections in `CLAUDE.md`** with
      the contents of `CLAUDE-brand-block.md`. Delete the Montserrat line, the
      `brand-guide.pdf` / `Messaging-Guide-v2.docx` references, and the inline
      color table. `docs: point CLAUDE.md at amptech-design skill`

---

## Phase 1 — Tokens & fonts (the foundation)

- [ ] **Swap `app/globals.css`** for `app-globals.css` in this handoff (copy it to
      `app/globals.css`; mirrors the skill's tokens, flat surfaces, signature
      classes). `style: adopt amptech tokens`
- [ ] **Replace fonts in `app/layout.tsx`:**
      ```tsx
      import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

      const spaceGrotesk = Space_Grotesk({
        subsets: ["latin"], weight: ["400","500","600","700"],
        variable: "--font-space-grotesk",
      });
      const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
      const jetbrains = JetBrains_Mono({
        subsets: ["latin"], weight: ["400","500","700"],
        variable: "--font-jetbrains",
      });
      // <html className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}>
      // <body className="antialiased font-sans">
      ```
      Remove the `Bebas_Neue` and `Montserrat` imports and the `site-shell` class.
      `feat: load Space Grotesk / Inter / JetBrains Mono`
- [ ] **Delete dead tokens** anywhere they remain: `brand-cream`, `brand-steel`
      (the warm `#90877C`), `brand-night`, `brand-night-soft`, `brand-gray-bg`.
      Grep: `rg "brand-(cream|steel|night|gray-bg)"` → 0 results when done.

---

## Phase 2 — Components

- [ ] **`ui/Button.tsx`** — change `rounded-full` → `rounded-md`; primary hover
      uses `hover:bg-amp-red-hot` (token, not `#b8190d`); focus ring uses the
      red glow (`focus-visible:shadow-[var(--shadow-red-glow)]`).
      `refactor: square off button to brand radius`
- [ ] **`ui/Badge.tsx`** — this IS a pill meta-tag, so `rounded-full` is allowed;
      just move `bg-brand-red-light`/`text-brand-red` → `bg-amp-red/10 text-amp-red`
      (or a dedicated `--accent-subtle`). `style: badge on brand tokens`
- [ ] **`layout/Nav.tsx`** — keep sticky 64px + blur (already on-system). Surface
      uses `bg-amp-ink/80` not `brand-night`. Active nav item gets `.amp-bolt-bar`.
- [ ] **`sections/Hero.tsx`** — the big lift:
      - Headline → **sentence case** ("You have a demo. Now build the product.")
        in `display-type`, not stacked ALL-CAPS.
      - Wrapper → `.hero-ink` (flat ink + blueprint grid), drop `hero-noise`'s
        diagonal-to-red gradient.
      - The "AmpTech" kicker → `.amp-eyebrow` (red, with bar), not cream/70.
      - Replace `text-brand-cream*` with `text-fg-on-ink` / `text-white/NN`.
      `feat: rebuild hero on amptech-design`

---

## Phase 3 — Sweep the rest

- [ ] Grep the whole repo and reconcile each hit:
      - `rg "rounded-full"` → only avatars + Badge survive
      - `rg "uppercase"` → only `.amp-eyebrow`/metadata; un-caps headlines
      - `rg "linear-gradient|hero-noise|site-shell"` → flat or `.hero-ink` only
      - `rg "#[0-9A-Fa-f]{3,6}"` in `components/` → 0 (tokens only)
- [ ] **Numbers → `.amp-metric`** wherever a stat/uptime/latency/count appears.
- [ ] **Visual pass** at mobile + desktop against the skill's `preview/` cards.

---

## Definition of done

- `skills-lock.json` includes `amptech-design`; `CLAUDE.md` defers to it.
- `rg "Montserrat|Bebas|brand-cream|brand-night|brand-steel"` → **0 results.**
- Headlines render in Space Grotesk, sentence case; body in Inter; metrics in mono.
- No cream/candy gradients; buttons are `rounded-md`; the red eyebrow + bolt-bar
  appear where the system calls for them.
