import Container from "./Container";

// Vertical rhythm lives here, so no page sets its own section padding.
// `tight` is the homepage default — the summary layout leans on smaller gaps
// to cut scroll height.
export default function Section({
  tight = false,
  surface = false,
  title,
  lead,
  headingLevel: Heading = "h2",
  className = "",
  children,
  ...props
}) {
  return (
    <section
      className={[
        tight ? "py-8 sm:py-10" : "py-12 sm:py-16",
        surface ? "bg-surface" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Container>
        {title && (
          <div className="mb-6 max-w-2xl">
            <Heading>{title}</Heading>
            {lead && <p className="mt-2 text-ink-muted">{lead}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
