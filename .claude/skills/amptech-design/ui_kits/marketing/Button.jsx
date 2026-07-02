import { Icon } from './Icon';

const { useState } = React;

export function Button({ children, variant = "primary", size = "md", onClick, style = {}, icon }) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { padding: "7px 12px", fontSize: 13 },
    md: { padding: "11px 18px", fontSize: 14 },
    lg: { padding: "14px 22px", fontSize: 15 },
  };
  const variants = {
    primary: {
      background: hover ? "var(--amp-red-hot)" : "var(--amp-red)",
      color: "#fff", border: "1px solid transparent",
      boxShadow: hover ? "var(--shadow-2)" : "none",
    },
    secondary: {
      background: hover ? "#23262C" : "var(--amp-ink)",
      color: "#fff", border: "1px solid transparent",
    },
    ghost: {
      background: "transparent", color: "var(--fg1)",
      border: `1px solid ${hover ? "var(--amp-ink)" : "var(--border-strong)"}`,
    },
  };
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)", fontWeight: 600,
        borderRadius: "var(--r-3)", cursor: "pointer", lineHeight: 1,
        display: "inline-flex", alignItems: "center", gap: 8,
        transition: "all 150ms var(--ease-out)",
        ...sizes[size], ...variants[variant], ...style,
      }}>
      {children}
      {icon && <Icon name={icon} size={16}/>}
    </button>
  );
}
