# AmpTech Marketing UI Kit

High-fidelity recreation of what an AmpTech marketing website should look and feel like — built directly from the brand system in the parent repo. There is **no existing codebase or Figma for AmpTech**; this kit is an extrapolation from the logo DNA, voice guidelines, and visual foundations documented in the root `README.md`.

## What's in here
- `index.html` — assembled landing page, click-through interactive (mobile nav, CTA hover, service-card states).
- `Navbar.jsx` — sticky nav with active-state underline and primary red CTA.
- `Hero.jsx` — headline + lead + dual CTA + right-side terminal/diagnostic panel.
- `ServiceGrid.jsx` — three-up service cards (Prototype Review, Production Sprint, Embedded Engineering).
- `ProcessTimeline.jsx` — 4-step horizontal process with mono step numbers.
- `MetricsStrip.jsx` — dark inverted section with tabular-num stats (reused as a pattern).
- `CTASection.jsx` — full-width ink CTA with red glow.
- `Footer.jsx` — tall footer with logo, link columns, legal row.

## Usage
Open `index.html` directly — it loads `colors_and_type.css` from two directories up.

## Known limits
- Copy is house voice, plausible but illustrative — real case study names, client logos, and metrics are placeholders and labeled as such.
- No imagery beyond the AmpTech logo + geometric/terminal compositions (matches the visual rules).
