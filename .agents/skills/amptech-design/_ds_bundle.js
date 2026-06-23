/* @ds-bundle: {"format":3,"namespace":"AmpTechDesignSystem_aafdb1","components":[],"sourceHashes":{"preview/ios-frame.jsx":"d67eb3ffe562","ui_kits/marketing/Hero.jsx":"50590a2d191b","ui_kits/marketing/Navbar.jsx":"833c56656d36","ui_kits/marketing/Primitives.jsx":"8e5163a6a7e7","ui_kits/marketing/ProcessTimeline.jsx":"4e54a6e817ee","ui_kits/marketing/Sections.jsx":"787a89ef9f9c","ui_kits/marketing/ServiceGrid.jsx":"1b5693ed8d08"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AmpTechDesignSystem_aafdb1 = window.AmpTechDesignSystem_aafdb1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// preview/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 20px 64px",
      background: "linear-gradient(180deg, #fff 0%, var(--gray-50) 100%)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 48
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Custom software \xB7 AI production"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      letterSpacing: "var(--tr-h1)",
      fontWeight: 600,
      margin: "20px 0 16px",
      color: "var(--fg1)",
      textWrap: "balance"
    }
  }, "Your AI prototype works on your laptop.", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)"
    }
  }, "Now it needs to survive production.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lg)",
      lineHeight: "var(--lh-lg)",
      color: "var(--fg2)",
      margin: "0 0 28px",
      textWrap: "pretty"
    }
  }, "We pair senior engineers with founders shipping AI-built products. Reliability, observability, and the judgment calls the demo didn't ask you to make."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrowRight",
    style: {
      minHeight: 44
    }
  }, "Book a prototype review"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      minHeight: 44
    }
  }, "See how we work")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      gap: 24,
      alignItems: "center",
      paddingTop: 24,
      borderTop: "1px solid var(--border)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--fg3)",
      fontWeight: 600
    }
  }, "Trusted by teams shipping"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--fg2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "/copilots"), /*#__PURE__*/React.createElement("span", null, "/agents"), /*#__PURE__*/React.createElement("span", null, "/search"), /*#__PURE__*/React.createElement("span", null, "/retrieval")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-panel"
  }, /*#__PURE__*/React.createElement(DiagnosticPanel, null)))), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.1fr 1fr !important; gap: 64px !important; }
        }
        @media (max-width: 640px) {
          .hero-panel { display: none; }
        }
      `));
}
function DiagnosticPanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--amp-ink)",
      color: "#fff",
      borderRadius: "var(--r-5)",
      boxShadow: "var(--shadow-4)",
      overflow: "hidden",
      border: "1px solid #2A2D33",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid #2A2D33",
      background: "#15171B"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#3A3E45"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#3A3E45"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--amp-red)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9AA0A8",
      letterSpacing: "0.06em"
    }
  }, "prototype-review \xB7 session 01"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--amp-red)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--amp-red)"
    }
  }), "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6B7280"
    }
  }, "$"), " ", /*#__PURE__*/React.createElement("span", null, "amptech review"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9AA0A8"
    }
  }, "./copilot-prototype")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#9AA0A8"
    }
  }, "\u2192 scanning 24 prompt chains, 8 endpoints\u2026"), /*#__PURE__*/React.createElement(DiagRow, {
    icon: "alert",
    tone: "red",
    label: "P0 \xB7 no eval harness",
    val: "0 tests"
  }), /*#__PURE__*/React.createElement(DiagRow, {
    icon: "alert",
    tone: "red",
    label: "P0 \xB7 unbounded retry loop",
    val: "app.ts:248"
  }), /*#__PURE__*/React.createElement(DiagRow, {
    icon: "alert",
    tone: "amber",
    label: "P1 \xB7 prompt injection surface",
    val: "3 fields"
  }), /*#__PURE__*/React.createElement(DiagRow, {
    icon: "alert",
    tone: "amber",
    label: "P1 \xB7 silent fallback on 429",
    val: "openai client"
  }), /*#__PURE__*/React.createElement(DiagRow, {
    icon: "check",
    tone: "green",
    label: "OK \xB7 graceful shutdown",
    val: "SIGTERM \u2713"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6B7280"
    }
  }, "report.md written \xB7 14 KB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)"
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", null, "median ship-to-prod:"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)",
      fontWeight: 600
    }
  }, "21 days"))));
}
function DiagRow({
  icon,
  tone,
  label,
  val
}) {
  const color = {
    red: "var(--amp-red)",
    amber: "#E8A33C",
    green: "#4ADE80"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "#C4C6CC"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#9AA0A8",
      fontSize: 12
    }
  }, val));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Navbar.jsx
try { (() => {
const {
  useState: useNavState
} = React;
function Navbar({
  active = "how"
}) {
  const [open, setOpen] = useNavState(false);
  const [current, setCurrent] = useNavState(active);
  const links = [{
    id: "how",
    label: "How we work"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "cases",
    label: "Case studies"
  }, {
    id: "playbook",
    label: "Playbook"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      height: 64,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/svg/logo-horizontal.svg",
    alt: "AmpTech",
    style: {
      height: 26,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "amp-desktop-only",
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setCurrent(l.id);
    },
    style: {
      position: "relative",
      padding: "4px 0",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      color: current === l.id ? "var(--fg1)" : "var(--fg2)"
    }
  }, l.label, current === l.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -6,
      height: 2,
      background: "var(--amp-red)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "amp-desktop-only",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--fg2)",
      textDecoration: "none"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    icon: "arrowRight"
  }, "Book a review")), /*#__PURE__*/React.createElement("button", {
    className: "amp-mobile-only",
    onClick: () => setOpen(o => !o),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 8,
      color: "var(--fg1)",
      display: "flex",
      alignItems: "center",
      minHeight: 44,
      minWidth: 44,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 22
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#fff",
      zIndex: 49,
      overflowY: "auto",
      borderTop: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 0 32px",
      fontFamily: "var(--font-body)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setCurrent(l.id);
      setOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      fontSize: 16,
      fontWeight: 500,
      textDecoration: "none",
      color: current === l.id ? "var(--amp-red)" : "var(--fg1)",
      borderBottom: "1px solid var(--border)",
      minHeight: 44
    }
  }, l.label, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrowRight",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Book a prototype review"))));
}
Object.assign(window, {
  Navbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Primitives.jsx
try { (() => {
const {
  useState
} = React;
function Icon({
  name,
  size = 20
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    arrowRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m12 5 7 7-7 7"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18h18"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }),
    bolt: /*#__PURE__*/React.createElement("polyline", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }),
    code: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "16 18 22 12 16 6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8 6 2 12 8 18"
    })),
    activity: /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    }),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    })),
    external: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M15 3h6v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 14 21 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    })),
    play: /*#__PURE__*/React.createElement("polygon", {
      points: "6 3 20 12 6 21 6 3"
    })
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[name]);
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--accent)"
    }
  }), children);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  style = {},
  icon
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      padding: "7px 12px",
      fontSize: 13
    },
    md: {
      padding: "11px 18px",
      fontSize: 14
    },
    lg: {
      padding: "14px 22px",
      fontSize: 15
    }
  };
  const variants = {
    primary: {
      background: hover ? "var(--amp-red-hot)" : "var(--amp-red)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: hover ? "var(--shadow-2)" : "none"
    },
    secondary: {
      background: hover ? "#23262C" : "var(--amp-ink)",
      color: "#fff",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--fg1)",
      border: `1px solid ${hover ? "var(--amp-ink)" : "var(--border-strong)"}`
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      borderRadius: "var(--r-3)",
      cursor: "pointer",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: "all 150ms var(--ease-out)",
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(window, {
  Icon,
  Eyebrow,
  Button
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ProcessTimeline.jsx
try { (() => {
function ProcessTimeline() {
  const steps = [{
    n: "01",
    t: "Read the code",
    d: "Senior engineer, on-site or async. Full repo, prompts, infra, docs."
  }, {
    n: "02",
    t: "Find the five",
    d: "Top five production risks, prioritized. Written report, no slide decks."
  }, {
    n: "03",
    t: "Ship the fix",
    d: "Evals, guardrails, observability — we implement or pair with your team."
  }, {
    n: "04",
    t: "Hand off clean",
    d: "Runbook, dashboards, on-call playbook. You own it. We stay reachable."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 20px",
      background: "var(--gray-50)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      letterSpacing: "var(--tr-h2)",
      margin: "18px 0 0",
      fontWeight: 600
    }
  }, "Four steps. No theater.")), /*#__PURE__*/React.createElement("div", {
    className: "process-mobile",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "flex",
      gap: 16,
      paddingBottom: i < steps.length - 1 ? 28 : 0,
      position: "relative"
    }
  }, i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21,
      top: 44,
      bottom: 0,
      width: 2,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--r-full)",
      background: "#fff",
      border: "2px solid var(--amp-red)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--amp-red)",
      flexShrink: 0,
      zIndex: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: 600,
      margin: "0 0 6px"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      color: "var(--fg2)",
      lineHeight: 1.55
    }
  }, s.d))))), /*#__PURE__*/React.createElement("div", {
    className: "process-desktop",
    style: {
      display: "none",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 21,
      left: "12.5%",
      right: "12.5%",
      height: 2,
      background: "var(--border)"
    }
  }), steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: "0 12px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--r-full)",
      background: "#fff",
      border: "2px solid var(--amp-red)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--amp-red)",
      marginBottom: 18,
      position: "relative",
      zIndex: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: 600,
      margin: "0 0 8px",
      letterSpacing: "-0.01em"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      color: "var(--fg2)",
      lineHeight: 1.55
    }
  }, s.d))))), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 768px) {
          .process-mobile  { display: none !important; }
          .process-desktop { display: grid !important; }
        }
      `));
}
Object.assign(window, {
  ProcessTimeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ProcessTimeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
function MetricsStrip() {
  const metrics = [{
    n: "138",
    u: "",
    l: "Prototypes reviewed",
    s: "Since 2024."
  }, {
    n: "21",
    u: "d",
    l: "Median ship-to-prod",
    s: "Engagement start to live traffic."
  }, {
    n: "99.95",
    u: "%",
    l: "Rolling reliability",
    s: "90-day across managed engagements."
  }, {
    n: "0",
    u: "",
    l: "Handoffs refused",
    s: "We finish, or we tell you why we won't."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 20px",
      background: "var(--amp-ink)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px 24px"
    },
    className: "metrics-grid"
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.l,
    style: {
      paddingLeft: 14,
      borderLeft: "3px solid var(--amp-red)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#9AA0A8",
      fontWeight: 600
    }
  }, m.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "clamp(28px, 5vw, 44px)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums"
    }
  }, m.n, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)"
    }
  }, m.u)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#C4C6CC",
      lineHeight: 1.45
    }
  }, m.s))))), /*#__PURE__*/React.createElement("style", null, `@media (min-width: 768px) { .metrics-grid { grid-template-columns: repeat(4,1fr) !important; } }`));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 32px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "left",
      paddingLeft: 24,
      borderLeft: "3px solid var(--amp-red)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What clients say"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 36,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontWeight: 500,
      margin: "20px 0 24px",
      color: "var(--fg1)",
      textWrap: "balance"
    }
  }, "\"They shipped in three weeks what two agencies couldn't in six months. No ceremony. Just senior engineers who'd seen our failure modes before.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontSize: 14,
      color: "var(--fg2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--r-full)",
      background: "var(--gray-200)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--fg1)"
    }
  }, "Founder, Series A AI company"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg3)",
      fontSize: 13
    }
  }, "Placeholder \u2014 real attribution coming")))));
}
function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 20px",
      background: "var(--amp-ink)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid #2A2D33"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 320,
      height: 320,
      background: "radial-gradient(circle at top right, rgba(212,30,16,0.22), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      letterSpacing: "var(--tr-h1)",
      fontWeight: 600,
      margin: "20px 0 20px",
      textWrap: "balance"
    }
  }, "Your prototype is closer to production than you think.", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)"
    }
  }, "Or further. Let's find out.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lg)",
      color: "#C4C6CC",
      maxWidth: 560,
      lineHeight: 1.55,
      margin: "0 0 28px"
    }
  }, "One week, fixed fee. Written report. Five things that will break first, and what to do about each."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrowRight",
    style: {
      minHeight: 44
    }
  }, "Book a prototype review"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none",
      fontSize: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      opacity: 0.9,
      minHeight: 44
    }
  }, "Read a sample report ", /*#__PURE__*/React.createElement(Icon, {
    name: "external",
    size: 14
  })))));
}
function Footer() {
  const cols = [{
    h: "Services",
    l: ["Prototype review", "Production sprint", "Embedded engineering", "Advisory"]
  }, {
    h: "Company",
    l: ["How we work", "Case studies", "Playbook", "Contact"]
  }, {
    h: "Resources",
    l: ["Sample report", "Eval harness template", "Observability checklist", "RSS"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--amp-ink)",
      color: "#C4C6CC",
      padding: "64px 20px 32px",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 36
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/svg/logo-horizontal-white-transparent.svg",
    alt: "AmpTech",
    style: {
      height: 26,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 280,
      lineHeight: 1.55,
      color: "#9AA0A8",
      fontSize: 14
    }
  }, "Senior engineering for teams taking AI projects from prototype to production.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--amp-red)",
      fontWeight: 600,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.l.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#C4C6CC",
      textDecoration: "none",
      display: "block",
      minHeight: 36,
      lineHeight: "36px"
    }
  }, x))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid #2A2D33",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      fontSize: 12,
      color: "#6B7280",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AmpTech \xB7 Precision as a service"), /*#__PURE__*/React.createElement("span", null, "v1.0.0"))), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 640px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 1.3fr 1fr 1fr 1fr !important; } }
      `));
}
Object.assign(window, {
  MetricsStrip,
  Testimonial,
  CTASection,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ServiceGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState: useSvcState
} = React;
function ServiceGrid() {
  const services = [{
    num: "01",
    duration: "1 week · fixed",
    title: "Prototype review",
    body: "A senior engineer reads your code, your prompts, and your infra. You get a written report with the five things that will break first in production — and what to do about each.",
    bullets: ["Reliability audit", "Eval-harness plan", "Observability gaps", "Cost and latency budget"],
    cta: "Book a review"
  }, {
    num: "02",
    duration: "4–6 weeks",
    title: "Production sprint",
    body: "We take your working prototype and make it survive real traffic. Load-tested, instrumented, documented. You keep the keys and the runbook.",
    bullets: ["Load & stress testing", "Evals + guardrails", "Observability stack", "Handoff runbook"],
    cta: "See the playbook",
    featured: true
  }, {
    num: "03",
    duration: "Ongoing · retainer",
    title: "Embedded engineering",
    body: "We sit in your repo. Senior engineers, by the week, no junior rotation. You keep moving — we hold the line on quality.",
    bullets: ["Senior-only staffing", "Your tools, your CI", "Weekly shipping cadence", "No handoff tax"],
    cta: "Start a conversation"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 20px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-h2)",
      letterSpacing: "var(--tr-h2)",
      margin: "18px 0 14px",
      fontWeight: 600
    }
  }, "Three ways to get from prototype to production."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lg)",
      color: "var(--fg2)",
      lineHeight: 1.55,
      margin: 0
    }
  }, "Pick the one that fits where you are. We'll tell you if you're picking wrong.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 16
    },
    className: "svc-grid"
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.num
  }, s))))), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 768px)  { .svc-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `));
}
function ServiceCard({
  num,
  duration,
  title,
  body,
  bullets,
  cta,
  featured
}) {
  const [hover, setHover] = useSvcState(false);
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: dark ? "var(--amp-ink)" : "#fff",
      color: dark ? "#fff" : "var(--fg1)",
      border: `1px solid ${dark ? "#2A2D33" : "var(--border)"}`,
      borderRadius: "var(--r-4)",
      padding: 24,
      boxShadow: hover ? "var(--shadow-3)" : "var(--shadow-1)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "all 200ms var(--ease-out)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative",
      overflow: "hidden"
    }
  }, dark && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 24,
      right: 24,
      height: 2,
      background: "var(--amp-red)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: dark ? "#9AA0A8" : "var(--fg3)",
      letterSpacing: "0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)",
      fontWeight: 600
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase"
    }
  }, duration)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: 600,
      margin: 0,
      letterSpacing: "-0.015em",
      color: "inherit"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      lineHeight: 1.55,
      color: dark ? "#C4C6CC" : "var(--fg2)"
    }
  }, body), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--fs-sm)",
      color: dark ? "#C4C6CC" : "var(--fg2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14,
      borderTop: `1px solid ${dark ? "#2A2D33" : "var(--border)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: dark ? "#fff" : "var(--fg1)"
    }
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amp-red)",
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform 200ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 18
  }))));
}
Object.assign(window, {
  ServiceGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ServiceGrid.jsx", error: String((e && e.message) || e) }); }

})();
