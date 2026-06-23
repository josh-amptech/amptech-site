function MetricsStrip() {
  const metrics = [
    { n: "138",   u: "",  l: "Prototypes reviewed",  s: "Since 2024." },
    { n: "21",    u: "d", l: "Median ship-to-prod",  s: "Engagement start to live traffic." },
    { n: "99.95", u: "%", l: "Rolling reliability",  s: "90-day across managed engagements." },
    { n: "0",     u: "",  l: "Handoffs refused",     s: "We finish, or we tell you why we won't." },
  ];
  return (
    <section style={{ padding: "64px 20px", background: "var(--amp-ink)", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 24px" }} className="metrics-grid">
          {metrics.map(m => (
            <div key={m.l} style={{ paddingLeft: 14, borderLeft: "3px solid var(--amp-red)", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9AA0A8", fontWeight: 600 }}>{m.l}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                {m.n}<span style={{ color: "var(--amp-red)" }}>{m.u}</span>
              </div>
              <div style={{ fontSize: 13, color: "#C4C6CC", lineHeight: 1.45 }}>{m.s}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (min-width: 768px) { .metrics-grid { grid-template-columns: repeat(4,1fr) !important; } }`}</style>
    </section>
  );
}

function Testimonial() {
  return (
    <section style={{ padding: "96px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "left", paddingLeft: 24, borderLeft: "3px solid var(--amp-red)" }}>
        <Eyebrow>What clients say</Eyebrow>
        <blockquote style={{
          fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1.2, letterSpacing: "-0.02em",
          fontWeight: 500, margin: "20px 0 24px", color: "var(--fg1)", textWrap: "balance",
        }}>
          "They shipped in three weeks what two agencies couldn't in six months. No ceremony. Just senior engineers who'd seen our failure modes before."
        </blockquote>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14, color: "var(--fg2)" }}>
          <div style={{ width: 40, height: 40, borderRadius: "var(--r-full)", background: "var(--gray-200)" }}/>
          <div>
            <div style={{ fontWeight: 600, color: "var(--fg1)" }}>Founder, Series A AI company</div>
            <div style={{ color: "var(--fg3)", fontSize: 13 }}>Placeholder — real attribution coming</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      padding: "80px 20px",
      background: "var(--amp-ink)", color: "#fff",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid #2A2D33",
    }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 320, height: 320,
        background: "radial-gradient(circle at top right, rgba(212,30,16,0.22), transparent 60%)" }}/>
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
        <Eyebrow>Start here</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)", letterSpacing: "var(--tr-h1)", fontWeight: 600, margin: "20px 0 20px", textWrap: "balance" }}>
          Your prototype is closer to production than you think.{" "}
          <span style={{ color: "var(--amp-red)" }}>Or further. Let's find out.</span>
        </h2>
        <p style={{ fontSize: "var(--fs-lg)", color: "#C4C6CC", maxWidth: 560, lineHeight: 1.55, margin: "0 0 28px" }}>
          One week, fixed fee. Written report. Five things that will break first, and what to do about each.
        </p>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" icon="arrowRight" style={{ minHeight: 44 }}>Book a prototype review</Button>
          <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, opacity: 0.9, minHeight: 44 }}>
            Read a sample report <Icon name="external" size={14}/>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Services",  l: ["Prototype review", "Production sprint", "Embedded engineering", "Advisory"] },
    { h: "Company",   l: ["How we work", "Case studies", "Playbook", "Contact"] },
    { h: "Resources", l: ["Sample report", "Eval harness template", "Observability checklist", "RSS"] },
  ];
  return (
    <footer style={{ background: "var(--amp-ink)", color: "#C4C6CC", padding: "64px 20px 32px", fontFamily: "var(--font-body)", fontSize: 14 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 36 }} className="footer-grid">
          <div>
            <img src="../../assets/svg/logo-horizontal-white-transparent.svg" alt="AmpTech" style={{ height: 26, marginBottom: 14 }}/>
            <p style={{ margin: 0, maxWidth: 280, lineHeight: 1.55, color: "#9AA0A8", fontSize: 14 }}>
              Senior engineering for teams taking AI projects from prototype to production.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--amp-red)", fontWeight: 600, marginBottom: 14 }}>{c.h}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map(x => <li key={x}><a href="#" style={{ color: "#C4C6CC", textDecoration: "none", display: "block", minHeight: 36, lineHeight: "36px" }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: "1px solid #2A2D33",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 8,
          fontSize: 12, color: "#6B7280", fontFamily: "var(--font-mono)",
        }}>
          <span>© 2026 AmpTech · Precision as a service</span>
          <span>v1.0.0</span>
        </div>
      </div>
      <style>{`
        @media (min-width: 640px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 1.3fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}

Object.assign(window, { MetricsStrip, Testimonial, CTASection, Footer });
