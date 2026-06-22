const { useState: useSvcState } = React;

function ServiceGrid() {
  const services = [
    {
      num: "01", duration: "1 week · fixed",
      title: "Prototype review",
      body: "A senior engineer reads your code, your prompts, and your infra. You get a written report with the five things that will break first in production — and what to do about each.",
      bullets: ["Reliability audit", "Eval-harness plan", "Observability gaps", "Cost and latency budget"],
      cta: "Book a review",
    },
    {
      num: "02", duration: "4–6 weeks",
      title: "Production sprint",
      body: "We take your working prototype and make it survive real traffic. Load-tested, instrumented, documented. You keep the keys and the runbook.",
      bullets: ["Load & stress testing", "Evals + guardrails", "Observability stack", "Handoff runbook"],
      cta: "See the playbook",
      featured: true,
    },
    {
      num: "03", duration: "Ongoing · retainer",
      title: "Embedded engineering",
      body: "We sit in your repo. Senior engineers, by the week, no junior rotation. You keep moving — we hold the line on quality.",
      bullets: ["Senior-only staffing", "Your tools, your CI", "Weekly shipping cadence", "No handoff tax"],
      cta: "Start a conversation",
    },
  ];
  return (
    <section style={{ padding: "80px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <Eyebrow>What we do</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", letterSpacing: "var(--tr-h2)", margin: "18px 0 14px", fontWeight: 600 }}>
            Three ways to get from prototype to production.
          </h2>
          <p style={{ fontSize: "var(--fs-lg)", color: "var(--fg2)", lineHeight: 1.55, margin: 0 }}>
            Pick the one that fits where you are. We'll tell you if you're picking wrong.
          </p>
        </div>
        {/* Responsive grid: 1 col mobile → 3 col desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }} className="svc-grid">
          {services.map(s => <ServiceCard key={s.num} {...s}/>)}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px)  { .svc-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ num, duration, title, body, bullets, cta, featured }) {
  const [hover, setHover] = useSvcState(false);
  const dark = featured;
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: dark ? "var(--amp-ink)" : "#fff",
        color: dark ? "#fff" : "var(--fg1)",
        border: `1px solid ${dark ? "#2A2D33" : "var(--border)"}`,
        borderRadius: "var(--r-4)", padding: 24,
        boxShadow: hover ? "var(--shadow-3)" : "var(--shadow-1)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "all 200ms var(--ease-out)",
        display: "flex", flexDirection: "column", gap: 14,
        position: "relative", overflow: "hidden",
      }}>
      {dark && <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: "var(--amp-red)" }}/>}
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: dark ? "#9AA0A8" : "var(--fg3)", letterSpacing: "0.08em" }}>
        <span style={{ color: "var(--amp-red)", fontWeight: 600 }}>{num}</span>
        <span style={{ textTransform: "uppercase" }}>{duration}</span>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", fontWeight: 600, margin: 0, letterSpacing: "-0.015em", color: "inherit" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "var(--fs-sm)", lineHeight: 1.55, color: dark ? "#C4C6CC" : "var(--fg2)" }}>{body}</p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {bullets.map(b => (
          <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--fs-sm)", color: dark ? "#C4C6CC" : "var(--fg2)" }}>
            <span style={{ color: "var(--amp-red)", flexShrink: 0 }}><Icon name="check" size={16}/></span>
            {b}
          </li>
        ))}
      </ul>
      <div style={{ flex: 1 }}/>
      <div style={{ paddingTop: 14, borderTop: `1px solid ${dark ? "#2A2D33" : "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 44 }}>
        <span style={{ fontWeight: 600, fontSize: 14, color: dark ? "#fff" : "var(--fg1)" }}>{cta}</span>
        <span style={{ color: "var(--amp-red)", transform: hover ? "translateX(3px)" : "none", transition: "transform 200ms var(--ease-out)" }}>
          <Icon name="arrowRight" size={18}/>
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { ServiceGrid });
