export function MetricsStrip() {
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
