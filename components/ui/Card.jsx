import Link from "next/link";

// One card. `href` turns it into a whole-card link without changing its look.
// Hover moves border and shadow only — never transform, which shifted
// neighbouring cards on the old site.
export default function Card({
  href,
  as: Tag = "div",
  padding = "p-5",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "bg-white border border-line rounded-2xl",
    padding,
    href
      ? "cursor-pointer transition-colors duration-200 hover:border-brand hover:shadow-md"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={`block ${classes}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
