interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-sm font-medium uppercase tracking-wide bg-brand-red-light text-brand-red px-4 py-2 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
