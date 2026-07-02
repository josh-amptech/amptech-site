import { Eyebrow } from './Eyebrow';
import { Button } from './Button';
import { Icon } from './Icon';

export function CTASection() {
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
