type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'orange'
  | 'navy'
  | 'pink';

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary/15 text-primary',
  secondary: 'bg-secondary/15 text-secondary',
  accent: 'bg-accent/15 text-accent',
  orange: 'bg-orange/15 text-orange',
  navy: 'bg-navy text-white',
  pink: 'bg-pink/15 text-pink',
};

const Badge = ({
  variant = 'primary',
  className = '',
  children,
}: BadgeProps) => {
  return (
    <span
      className={`
    inline-flex items-center justify-center
    px-3 py-1 rounded-full
    text-xs font-semibold uppercase tracking-wide
    ${variantStyles[variant]}
    ${className}
  `}
    >
      {children}
    </span>
  );
};

export default Badge;
