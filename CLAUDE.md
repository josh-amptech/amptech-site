# AmpTech — Claude Code Project Brief

**Goal:** Convert visitors with app ideas into booked discovery calls. One CTA, always visible.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js App Router | v16.x — App Router only, no Pages Router |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS v4 | Configured via `globals.css @theme` — no `tailwind.config.ts` |
| Animations | Framer Motion | Scroll-reveal only. Section components require `'use client'` |
| Forms | React Hook Form | `app/contact/page.tsx` |
| Email | AWS SES or Resend | TODO: wire up in `app/api/contact/route.ts` |
| Hosting | AWS Amplify Gen 2 | Git-based CI/CD, zero-config — no `amplify.yml` needed |
| Analytics | Umami (self-hosted) | `NEXT_PUBLIC_UMAMI_URL` + `NEXT_PUBLIC_UMAMI_WEBSITE_ID` env vars |

## Architecture

```
app/
  layout.tsx            ← Root: fonts, Nav, Footer, Umami script (see amptech-design skill)
  page.tsx              ← Homepage (assembles section components)
  contact/page.tsx      ← Discovery call form
  api/contact/route.ts  ← Form handler (wire email delivery here)
  services|work|about/page.tsx
components/
  layout/Nav.tsx        ← Sticky, mobile-responsive
  layout/Footer.tsx
  ui/Button.tsx         ← primary / secondary / ghost variants
  ui/SectionWrapper.tsx
  ui/Badge.tsx
  sections/             ← Hero, Problem, Guide, Plan, SocialProof, Success, ClosingCTA
types/umami.d.ts        ← window.umami type declaration
```

**GitHub:** https://github.com/josh-amptech/amptech-site

## Codex + GitHub CLI

Codex sandboxed shells do not reliably inherit or persist GitHub CLI auth. Attempts to
bootstrap `GH_TOKEN`, PowerShell SecretStore, or other environment variables inside the
sandbox may appear to work briefly and then fail with `HTTP 401`.

When an agent needs `gh`, run it from the outside Windows context with escalated
permissions instead of trying to repair sandbox auth:

```powershell
gh issue list --repo josh-amptech/amptech-site --state open
gh issue view 13 --repo josh-amptech/amptech-site
```

For issue and PR reads, the GitHub connector is also acceptable when available. For
GitHub writes, prefer the connector or an escalated Windows-context `gh` command, then
verify the resulting issue/PR state.

## Brand

**Brand is defined by the `amptech-design` skill, not by this file.**
Source of truth: `.claude/skills/amptech-design/` → `README.md` (full guide) +
`colors_and_type.css` (all 155 tokens). When the skill and this file ever
disagree, the skill wins — fix this file.

> Do not reintroduce the old brand. The previous setup (Montserrat font,
> `docs/brand-guide.pdf`, `…Messaging-Guide-v2.docx`, an inline color table,
> a warm cream palette) is **superseded**. Delete references to it on sight.

### Tokens & fonts — one source

- **All colors, radii, shadows, and fonts** live in `globals.css`, which mirrors
  the skill's `colors_and_type.css`. Reference them; never hardcode hex.
- **Fonts** (official): **Space Grotesk** (display) · **Inter** (body/UI) ·
  **JetBrains Mono** (metrics/code). Loaded via `next/font/google` in
  `app/layout.tsx`, bound to `--font-space-grotesk` / `--font-inter` /
  `--font-jetbrains`. **Not Montserrat. Not Bebas Neue.**
- **Brand red `#D41E10`** and **steel gray `#4D4D4D`** are the only brand chromatics.
  Red is an accent — one focal point per view (CTA, active state, key metric).
  Never a large background fill.

### Non-negotiables

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

### Voice

Senior engineer at a whiteboard: calm, specific, zero hype. **"You"** is the
founder with a prototype; **"we"** is AmpTech (the guide, not the hero). Lead
with the reader's outcome, not the technology. Short sentences, active voice,
contractions OK. One dry aside per page is the ceiling.

**Copy** is verbatim in `components/sections/` — do not rewrite unless asked.

## Workflow — Spec-Driven Development

**Every feature starts as a spec. No exceptions — including "quick" changes.**

### Steps (never skip)

1. **Idea → Issue.** Before any code, create a GitHub issue.
   - Vague or large initiative → `epic` (use Epic template, then break into stories)
   - Concrete deliverable → `story` (use Feature Story template)
   - Something broken → `bug` (use Bug Report template)

2. **Groom the story** with the user before touching code:
   - Rules are atomic and testable (each maps to 1+ examples)
   - Examples cover happy path and key edge cases
   - All Questions are answered or explicitly deferred with a decision
   - Out of Scope is confirmed to prevent creep
   - Move issue to **Ready** in the GitHub Project when grooming is complete

3. **Branch off main.**
   ```
   git checkout -b feat/123-short-description
   ```

4. **Implement against the spec.** Rules = acceptance criteria. Stop if you hit an unresolved Question — surface it to the user, do not assume.

5. **PR with `Closes #123`.** Title follows conventional commits. Fill out the PR checklist.

### Claude must

- **Always** create a GitHub issue before writing any code
- **Always** walk through Rules, Examples, and Questions with the user before marking a story Ready
- **Always** create a feature branch before implementation (`git checkout -b type/N-description`)
- **Always** include `Closes #N` in PR descriptions
- **Never** commit directly to `main`
- **Never** assume an answer to an unresolved Question — ask the user
- **Never** expand scope mid-implementation; open a new issue instead

### Branch naming

| Work type | Pattern | Example |
|---|---|---|
| Feature | `feat/N-description` | `feat/12-contact-form-email` |
| Bug fix | `fix/N-description` | `fix/15-nav-mobile-close` |
| Chore | `chore/N-description` | `chore/8-upgrade-nextjs` |
| Refactor | `refactor/N-description` | `refactor/20-extract-button` |

## Git Conventions

Use **conventional commits** for all commit messages:

```
feat:     new feature or page
fix:      bug fix
chore:    deps, config, tooling
style:    formatting, CSS tweaks (no logic change)
refactor: code change with no behavior change
docs:     CLAUDE.md or other documentation only
```

Examples: `feat: add contact form validation`, `fix: nav mobile menu close on route change`

## Design Rules

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

## Environment Variables

Set in Amplify console (not in `.env` files — those are gitignored):
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_UMAMI_URL`
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
- Email service key (Resend or SES) — when wired

## Status

- [x] Repo: https://github.com/josh-amptech/amptech-site
- [x] Next.js 16 scaffolded (TypeScript, Tailwind v4, App Router)
- [x] Brand theme configured (`globals.css`)
- [x] Nav + Footer built
- [x] Homepage built (all 7 sections)
- [x] Contact form built
- [ ] Email delivery wired — `app/api/contact/route.ts`
- [ ] Amplify app connected to GitHub repo
- [ ] Domain connected
- [ ] Umami analytics instance deployed
