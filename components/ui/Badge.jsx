// Where amber is allowed to appear: as a fill behind --ink (11:1), never as
// text on white (1.9:1) and never as a button.
const TONES = {
  accent: "bg-accent text-ink",
  soft: "bg-accent-soft text-ink border border-accent",
  neutral: "bg-surface-2 text-ink-muted",
};

export default function Badge({ tone = "soft", className = "", children, ...props }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full",
        "px-2.5 py-1 text-xs font-semibold leading-none",
        TONES[tone] ?? TONES.soft,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
