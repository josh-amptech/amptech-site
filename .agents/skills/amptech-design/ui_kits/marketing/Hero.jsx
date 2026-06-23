function Hero() {
  return (
    <section style={{
      padding: "72px 20px 64px",
      background: "linear-gradient(180deg, #fff 0%, var(--gray-50) 100%)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
      }}>
        {/* Responsive grid: stacked on mobile, side-by-side on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
        }} className="hero-grid">
          {/* Left — copy */}
          <div>
            <Eyebrow>Custom software · AI production</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h1)", lineHeight: "var(--lh-h1)",
              letterSpacing: "var(--tr-h1)",
              fontWeight: 600, margin: "20px 0 16px", color: "var(--fg1)",
              textWrap: "balance",
            }}>
              Your AI prototype works on your laptop.{" "}
              <span style={{ color: "var(--amp-red)" }}>Now it needs to survive production.</span>
            </h1>
            <p style={{
              fontSize: "var(--fs-lg)", lineHeight: "var(--lh-lg)",
              color: "var(--fg2)", margin: "0 0 28px", textWrap: "pretty",
            }}>
              We pair senior engineers with founders shipping AI-built products.
              Reliability, observability, and the judgment calls the demo didn't ask you to make.
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" icon="arrowRight" style={{ minHeight: 44 }}>Book a prototype review</Button>
              <Button variant="ghost" size="lg" style={{ minHeight: 44 }}>See how we work</Button>
            </div>
            <div style={{
              marginTop: 40, display: "flex", gap: 24, alignItems: "center",
              paddingTop: 24, borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg3)", fontWeight: 600 }}>
                Trusted by teams shipping
              </div>
              <div style={{ display: "flex", gap: 20, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg2)", flexWrap: "wrap" }}>
                <span>/copilots</span>
                <span>/agents</span>
                <span>/search</span>
                <span>/retrieval</span>
              </div>
            </div>
          </div>

          {/* Right — diagnostic panel (hidden on small mobile, shown md+) */}
          <div className="hero-panel">
            <DiagnosticPanel/>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.1fr 1fr !important; gap: 64px !important; }
        }
        @media (max-width: 640px) {
          .hero-panel { display: none; }
        }
      `}</style>
    </section>
  );
}

function DiagnosticPanel() {
  return (
    <div style={{
      background: "var(--amp-ink)", color: "#fff",
      borderRadius: "var(--r-5)", boxShadow: "var(--shadow-4)",
      overflow: "hidden", border: "1px solid #2A2D33",
      fontFamily: "var(--font-mono)", fontSize: 13,
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", borderBottom: "1px solid #2A2D33",
        background: "#15171B",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3A3E45" }}/>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3A3E45" }}/>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--amp-red)" }}/>
        </div>
        <div style={{ fontSize: 11, color: "#9AA0A8", letterSpacing: "0.06em" }}>prototype-review · session 01</div>
        <div style={{ fontSize: 11, color: "var(--amp-red)", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amp-red)" }}/>
          LIVE
        </div>
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10, lineHeight: 1.55 }}>
        <div><span style={{ color: "#6B7280" }}>$</span> <span>amptech review</span> <span style={{ color: "#9AA0A8" }}>./copilot-prototype</span></div>
        <div style={{ color: "#9AA0A8" }}>→ scanning 24 prompt chains, 8 endpoints…</div>
        <DiagRow icon="alert" tone="red"   label="P0 · no eval harness"         val="0 tests"/>
        <DiagRow icon="alert" tone="red"   label="P0 · unbounded retry loop"     val="app.ts:248"/>
        <DiagRow icon="alert" tone="amber" label="P1 · prompt injection surface" val="3 fields"/>
        <DiagRow icon="alert" tone="amber" label="P1 · silent fallback on 429"   val="openai client"/>
        <DiagRow icon="check" tone="green" label="OK · graceful shutdown"        val="SIGTERM ✓"/>
        <div style={{ color: "#6B7280" }}>report.md written · 14 KB</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "var(--amp-red)" }}>▸</span>
          <span>median ship-to-prod:</span>
          <span style={{ color: "var(--amp-red)", fontWeight: 600 }}>21 days</span>
        </div>
      </div>
    </div>
  );
}

function DiagRow({ icon, tone, label, val }) {
  const color = { red: "var(--amp-red)", amber: "#E8A33C", green: "#4ADE80" }[tone];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ color }}><Icon name={icon} size={14}/></span>
      <span style={{ flex: 1, color: "#C4C6CC" }}>{label}</span>
      <span style={{ color: "#9AA0A8", fontSize: 12 }}>{val}</span>
    </div>
  );
}

Object.assign(window, { Hero });
