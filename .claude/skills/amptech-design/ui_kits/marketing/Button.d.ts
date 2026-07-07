/** Brand button. Solid red `primary` is reserved for the one direct CTA per view — see the red usage policy. */
export interface ButtonProps {
  children: ReactNode;
  /** @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  style?: Record<string, string | number>;
  /** Optional trailing icon glyph (see Icon). */
  icon?: string;
}

export function Button(props: ButtonProps): JSX.Element;
