export function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    arrowRight: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    menu: <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>,
    x: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    bolt: <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    shield: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>,
    alert: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    play: <polygon points="6 3 20 12 6 21 6 3"/>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
