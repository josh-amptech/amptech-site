export function Footer() {
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
