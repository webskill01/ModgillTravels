import Link from "next/link";

// The only button in the codebase. Variants are added here, never inlined at
// a call site — that is what kept the old site from looking like one thing.
//
// Colour rules this encodes:
//   - `whatsapp` and `call` are the booking actions. Green appears nowhere
//     else, so a green control always means "book".
//   - Every dark fill carries white text. --cta is #0b7a33, not WhatsApp's
//     #25d366, precisely so white passes on it (5.46:1); ink on it would be
//     3.27:1, and check:contrast fails the build if that flips back.
//   - Amber is never a button. It is a fill or a marker, handled in Badge.
const PRIMARY = "bg-brand text-white hover:bg-brand-hover shadow-sm";

const VARIANTS = {
  whatsapp:
    "bg-cta text-white hover:bg-cta-hover shadow-sm",
  // Same navy fill, two names: `call` says "this dials", `primary` says "this
  // is the main action on the page". Six pages had hand-rolled this stack.
  call: PRIMARY,
  primary: PRIMARY,
  secondary:
    "bg-white text-ink border border-line-strong hover:bg-surface",
  ghost:
    "bg-transparent text-ink-muted hover:text-ink hover:bg-surface",
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
    "inline-flex items-center justify-center rounded-xl",
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
