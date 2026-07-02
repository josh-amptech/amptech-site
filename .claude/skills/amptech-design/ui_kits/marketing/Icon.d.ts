/** Geometric, stroke-based icon glyph matching the brand's Lucide iconography (2px stroke, no fills). */
export interface IconProps {
  /** Which glyph to render. */
  name: "arrowRight" | "menu" | "x" | "check" | "bolt" | "code" | "activity" | "shield" | "alert" | "external" | "play";
  /** Icon size in pixels. @default 20 */
  size?: number;
}

export function Icon(props: IconProps): JSX.Element;
