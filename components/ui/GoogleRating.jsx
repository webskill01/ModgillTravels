import site from "@/data/site";

// The Google rating chip. Uses Google's own four-colour mark and review gold
// rather than the site palette — that is the point: it reads as a third-party
// verdict, not as our own claim about ourselves.
//
// The review *count* is deliberately absent. 31 reads as small beside local
// competitors at 400+; the 5.0 does not. reviewCount stays in the JSON-LD,
// where an aggregateRating is invalid without it.
const GOOGLE_GOLD = "#FBBC04";

function GoogleG({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.4 5.4 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.7 0 3.99 2.47 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function Stars({ className = "w-4 h-4" }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className={className}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={GOOGLE_GOLD}
        >
          <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleRating({ className = "" }) {
  return (
    <a
      href={site.gbp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${site.rating.value} out of 5 on Google — open our Google Business Profile`}
      className={[
        "inline-flex items-center gap-3 rounded-xl border border-line bg-white",
        "px-3.5 py-2.5 shadow-sm transition-colors hover:border-line-strong",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <GoogleG className="w-5 h-5 shrink-0" />
      <span className="flex items-center gap-2">
        <span className="font-heading text-lg font-semibold leading-none text-ink">
          {site.rating.value}
        </span>
        <Stars className="w-4 h-4" />
      </span>
      <span className="text-sm leading-none text-ink-muted">
        Rated on Google
      </span>
    </a>
  );
}
