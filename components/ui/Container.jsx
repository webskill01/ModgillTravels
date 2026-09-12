// Single max-width for the whole site. Mixing max-w-6xl and max-w-7xl across
// pages was a large part of why the old site read as inconsistent.
export default function Container({ className = "", children, ...props }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
