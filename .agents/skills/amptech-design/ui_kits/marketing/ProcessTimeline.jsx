function ProcessTimeline() {
  const steps = [
    { n: "01", t: "Read the code",  d: "Senior engineer, on-site or async. Full repo, prompts, infra, docs." },
    { n: "02", t: "Find the five",  d: "Top five production risks, prioritized. Written report, no slide decks." },
    { n: "03", t: "Ship the fix",   d: "Evals, guardrails, observability — we implement or pair with your team." },
    { n: "04", t: "Hand off clean", d: "Runbook, dashboards, on-call playbook. You own it. We stay reachable." },
  ];
  return (
    <section style={{ padding: "80px 20px", background: "var(--gray-50)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Eyebrow>How we work</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", letterSpacing: "var(--tr-h2)", margin: "18px 0 0", fontWeight: 600 }}>
            Four steps. No theater.
          </h2>
        </div>

        {/* Mobile: vertical stack */}
        <div className="process-mobile" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: "flex", gap: 16, paddingBottom: i < steps.length - 1 ? 28 : 0, position: "relative" }}>
              {/* vertical line */}
              {i < steps.length - 1 && <div style={{ position: "absolute", left: 21, top: 44, bottom: 0, width: 2, background: "var(--border)" }}/>}
              <div style={{ width: 44, height: 44, borderRadius: "var(--r-full)", background: "#fff", border: "2px solid var(--amp-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13, color: "var(--amp-red)", flexShrink: 0, zIndex: 1 }}>{s.n}</div>
              <div style={{ paddingTop: 10 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h4)", fontWeight: 600, margin: "0 0 6px" }}>{s.t}</h4>
                <p style={{ margin: 0, fontSize: "var(--fs-sm)", color: "var(--fg2)", lineHeight: 1.55 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal row */}
        <div className="process-desktop" style={{ display: "none", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
          <div style={{ position: "absolute", top: 21, left: "12.5%", right: "12.5%", height: 2, background: "var(--border)" }}/>
          {steps.map((s) => (
            <div key={s.n} style={{ padding: "0 12px", position: "relative" }}>
              <div style={{ width: 44, height: 44, borderRadius: "var(--r-full)", background: "#fff", border: "2px solid var(--amp-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13, color: "var(--amp-red)", marginBottom: 18, position: "relative", zIndex: 1 }}>{s.n}</div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h4)", fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{s.t}</h4>
              <p style={{ margin: 0, fontSize: "var(--fs-sm)", color: "var(--fg2)", lineHeight: 1.55 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .process-mobile  { display: none !important; }
          .process-desktop { display: grid !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { ProcessTimeline });
