import Link from "next/link";

// The only button in the codebase. Variants are added here, never inlined at
// a call site — that is what kept the old site from looking like one thing.
//
// Colour rules this encodes:
//   - `whatsapp` and `call` are the booking actions. Green appears nowhere
//     else, so a green control always means "book".
//   - Green carries --ink, not white. White on #25d366 is 2.2:1 and fails
//     WCAG; #0f172a on it is 8:1.
//   - Amber is never a button. It is a fill or a marker, handled in Badge.
const VARIANTS = {
  whatsapp:
    "bg-[--color-cta] text-[--color-ink] hover:bg-[--color-cta-hover] shadow-sm",
  call:
    "bg-[--color-brand] text-white hover:bg-[--color-brand-hover] shadow-sm",
  secondary:
    "bg-white text-[--color-ink] border border-[--color-line-strong] hover:bg-[--color-surface]",
  ghost:
    "bg-transparent text-[--color-ink-muted] hover:text-[--color-ink] hover:bg-[--color-surface]",
};

const SIZES = {
  sm: "text-sm px-3.5 py-2 gap-1.5",
  md: "text-[0.9375rem] px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2.5",
};

export default function Button({
  variant = "whatsapp",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  ...props
}) {
  // min-h-11 is the 44px touch target; hover shifts colour only, never
  // transform, so rows don't reflow under the cursor.
  const classes = [
    "inline-flex items-center justify-center rounded-[--radius]",
    "font-semibold min-h-11 cursor-pointer select-none",
    "transition-colors duration-200",
    SIZES[size] ?? SIZES.md,
    VARIANTS[variant] ?? VARIANTS.whatsapp,
    className,
  ].join(" ");

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
