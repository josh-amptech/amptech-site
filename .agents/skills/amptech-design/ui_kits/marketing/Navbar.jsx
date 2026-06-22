const { useState: useNavState } = React;

function Navbar({ active = "how" }) {
  const [open, setOpen] = useNavState(false);
  const [current, setCurrent] = useNavState(active);
  const links = [
    { id: "how",      label: "How we work" },
    { id: "services", label: "Services" },
    { id: "cases",    label: "Case studies" },
    { id: "playbook", label: "Playbook" },
  ];

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        height: 64, background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", fontFamily: "var(--font-body)",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src="../../assets/svg/logo-horizontal.svg" alt="AmpTech" style={{ height: 26, display: "block" }}/>
        </a>

        {/* Desktop links */}
        <div className="amp-desktop-only" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.id} href="#" onClick={e => { e.preventDefault(); setCurrent(l.id); }}
              style={{
                position: "relative", padding: "4px 0",
                fontSize: 14, fontWeight: 500, textDecoration: "none",
                color: current === l.id ? "var(--fg1)" : "var(--fg2)",
              }}>
              {l.label}
              {current === l.id && (
                <span style={{ position: "absolute", left: 0, right: 0, bottom: -6, height: 2, background: "var(--amp-red)" }}/>
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="amp-desktop-only" style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14 }}>
          <a href="#" style={{ color: "var(--fg2)", textDecoration: "none" }}>Sign in</a>
          <Button size="md" icon="arrowRight">Book a review</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="amp-mobile-only"
          onClick={() => setOpen(o => !o)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 8, color: "var(--fg1)", display: "flex", alignItems: "center",
            minHeight: 44, minWidth: 44, justifyContent: "center",
          }}>
          <Icon name={open ? "x" : "menu"} size={22}/>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          background: "#fff", zIndex: 49, overflowY: "auto",
          borderTop: "1px solid var(--border)",
          display: "flex", flexDirection: "column",
          padding: "8px 0 32px",
          fontFamily: "var(--font-body)",
        }}>
          {links.map(l => (
            <a key={l.id} href="#"
              onClick={e => { e.preventDefault(); setCurrent(l.id); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", fontSize: 16, fontWeight: 500,
                textDecoration: "none",
                color: current === l.id ? "var(--amp-red)" : "var(--fg1)",
                borderBottom: "1px solid var(--border)",
                minHeight: 44,
              }}>
              {l.label}
              <Icon name="arrowRight" size={16}/>
            </a>
          ))}
          <div style={{ padding: "20px 20px 0" }}>
            <Button variant="primary" size="lg" icon="arrowRight" style={{ width: "100%", justifyContent: "center" }}>
              Book a prototype review
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { Navbar });
