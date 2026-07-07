export function Eyebrow({ children }) {
  return (
    <span style={{
      fontSize: 12, fontWeight: 600, letterSpacing: "0.14em",
      textTransform: "uppercase", color: "var(--accent)",
      display: "inline-flex", alignItems: "center", gap: 8,
    }}>
      <span style={{ width: 18, height: 2, background: "var(--accent)" }}/>
      {children}
    </span>
  );
}
