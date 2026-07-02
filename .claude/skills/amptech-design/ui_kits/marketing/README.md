# AmpTech Marketing UI Kit

High-fidelity recreation of what an AmpTech marketing website should look and feel like — built directly from the brand system in the parent repo. There is **no existing codebase or Figma for AmpTech**; this kit is an extrapolation from the logo DNA, voice guidelines, and visual foundations documented in the root `README.md`.

## Components
Each is `<Name>.jsx` + `<Name>.d.ts` (+ `<Name>.prompt.md`), compiled into the design system bundle and reachable via `window.AmpTechDesignSystem_aafdb1`:

- **Navbar** — sticky nav with active-state underline and primary red CTA, mobile drawer.
- **Hero** — headline + lead + dual CTA + right-side terminal/diagnostic panel.
- **ServiceGrid** — three-up service cards (Prototype review, Production sprint, Embedded engineering).
- **ProcessTimeline** — 4-step horizontal/vertical process with mono step numbers.
- **MetricsStrip** — dark inverted section with tabular-num credibility metrics.
- **Testimonial** — pull-quote with the red bolt-bar (placeholder attribution).
- **CTASection** — full-width ink CTA with red glow.
- **Footer** — tall footer with logo, link columns, legal row.
- **Button**, **Eyebrow**, **Icon** — shared primitives the sections above compose.

`index.html` assembles all of them into a click-through interactive landing page (mobile nav, CTA hover, service-card states).

## Usage
Open `index.html` directly — it loads `colors_and_type.css` and the compiled `_ds_bundle.js` from two directories up.

## Known limits
- Copy is house voice, plausible but illustrative — real case study names, client logos, and metrics are placeholders and labeled as such.
- No imagery beyond the AmpTech logo + geometric/terminal compositions (matches the visual rules).
