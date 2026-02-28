import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:opacity-90",
  secondary:
    "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
  ghost: "text-brand-red hover:underline underline-offset-4",
};

const base =
  "inline-flex items-center justify-center text-base font-semibold rounded transition-all duration-200 px-6 py-3 cursor-pointer";

type LinkButtonProps = {
  variant?: Variant;
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type NativeButtonProps = {
  variant?: Variant;
  href?: never;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as NativeButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
