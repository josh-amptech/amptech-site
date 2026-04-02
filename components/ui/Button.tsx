import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-[#b8190d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red",
  secondary:
    "border border-current text-current hover:bg-current hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
  ghost:
    "text-brand-red hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red",
};

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200";

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
