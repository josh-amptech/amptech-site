/** Sticky marketing nav: logo, active-state links, desktop CTA, and a mobile drawer. Carries the site's persistent direct CTA. */
export interface NavbarProps {
  /** Which nav link is highlighted as active. @default "how" */
  active?: "how" | "services" | "cases" | "playbook";
}

export function Navbar(props: NavbarProps): JSX.Element;
