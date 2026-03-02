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
  layout.tsx            ← Root: Montserrat font, Nav, Footer, Umami script
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

## Brand

Full brand guide: `docs/brand-guide.pdf` | Messaging guide: `AmpTech-Brand-Messaging-Guide-v2.docx`

**Colors** (defined as Tailwind tokens in `globals.css`):
| Token | Hex | Use |
|---|---|---|
| `brand-red` | `#D41E10` | CTAs, accents, section labels |
| `brand-red-light` | `#FAE5E4` | Badge backgrounds |
| `brand-gray` | `#4D4D4D` | Body copy |
| `brand-black` | `#000000` | Headings, logo, Problem section bg |
| `brand-gray-bg` | `#F5F5F5` | Alternating section backgrounds |

**Font:** Montserrat via `next/font/google` → CSS var `--font-montserrat` → `--font-sans` in `@theme`

**Voice:** Short sentences. Active voice. Lead with outcomes, not technology.
Never use: "revolutionary," "cutting-edge," "innovative," "game-changing," "leverage" (verb), "solutions."

**Copy:** Verbatim in `components/sections/` — do not rewrite unless explicitly asked.

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

1. Problem section uses `bg-brand-black` — intentional dark tonal shift, keep it
2. No `<img>` tags — always `next/image`
3. No hardcoded colors — always Tailwind brand tokens
4. No inline styles
5. No UI libraries (shadcn, MUI, Chakra) — Tailwind only
6. No analytics except Umami — no GA, Clarity, etc.
7. Mobile-first layouts

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
