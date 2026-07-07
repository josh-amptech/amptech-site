---
name: amptech-design
description: Use this skill to generate well-branded interfaces and assets for AmpTech, either for production or throwaway prototypes/mocks/etc. Contains the StoryBrand messaging framework, essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. **Read the Messaging Framework section before writing any marketing copy** — pages are structured on StoryBrand beats (Problem → Guide → Plan → Proof → Success → CTA), but the framework's vocabulary never appears in customer-facing copy.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## AmpTech in one line
Most AI prototypes stall somewhere between the demo and the first paying customer. AmpTech's senior engineers take yours the rest of the way — a product you can sell, not a demo you can show.

## Key files
- `README.md` — messaging framework (StoryBrand), content fundamentals, visual foundations, iconography
- `colors_and_type.css` — **canonical token file** (all mirrors defer to it) + semantic type classes. Start here in any HTML artifact.
- `assets/svg/` — logo SVGs (preferred); `assets/` — PNG fallbacks. Horizontal, stacked, mark-only, light/dark/transparent.
- `ui_kits/marketing/` — high-fidelity marketing-site components you can lift
- `preview/` — small cards demoing each token / component in isolation

## Locked (client-confirmed or derived from the logo)
- Brand red `#D41E10` (R212 G30 B16) and steel gray `#4D4D4D` — the only brand chromatics.
- The logo files and wordmark; the angular geometry of the mark.
- The StoryBrand positioning: customer is the hero, AmpTech is the guide — internal vocabulary only, never in copy.
- The tagline: **"From prototype to production"** (client-confirmed 2026-07-02).
- Typography: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (metrics/code) — client-confirmed 2026-07-02.
- Dark mode is first-class and user-facing: site-wide toggle + interleaved dark sections, both via `[data-theme="dark"]`.
- Destructive actions are outline-red, never solid — solid red is reserved for the one primary CTA (client-confirmed 2026-07-02).

## Recommended (working standard — follow unless the client redirects)
- Red policy: **one solid-red primary action per view** (the direct CTA). Thin red micro-accents (eyebrows, bolt-bars, links) don't count.
- Gradient policy: `--grad-ink` is the only background gradient.
- Radii stay small (2–14px); the brand is angular, not pillowy.
- No emoji. No hype words. No smiling-team stock photography. No invented metrics — real proof only.
- Voice = senior engineer at a whiteboard. "You" is the founder; "we" is AmpTech. If copy sounds like a marketing framework talking, rewrite it.
