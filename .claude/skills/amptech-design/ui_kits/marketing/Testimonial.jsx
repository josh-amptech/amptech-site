import { Eyebrow } from './Eyebrow';

export function Testimonial() {
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
