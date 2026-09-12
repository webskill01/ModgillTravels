import Link from "next/link";
import site from "@/data/site";
import BookCta from "@/components/ui/BookCta";

// The SEO body of every route page.
//
// This used to lead with a fare comparison table. Live Search Console shows
// every fare/price/cost query combined draws 3 impressions at position 51,
// while distance queries draw 369 — so the page now leads with distance and
// duration, and each H2 is phrased the way someone actually types the query.
//
// Phase 8 replaces the generic paragraphs with real per-route journey detail
// (road taken, toll points, rest stops). Until then this is honest and
// distinct on the numbers, but the prose is still templated — do not scale
// the route matrix on it.
export default function RouteContent({ route }) {
  if (!route) return null;

  const { from, to, distanceKm, duration } = route;

  return (
    <div className="space-y-6">
      <section className="rounded-[--radius-lg] border border-[--color-line] bg-white p-5 sm:p-6">
        <h2 className="mb-3">
          {from} to {to} distance and travel time
        </h2>
        <p className="text-[--color-ink-muted]">
          The road distance from {from} to {to} is approximately{" "}
          <strong className="text-[--color-ink]">{distanceKm} km</strong>, and
          the drive takes{" "}
          <strong className="text-[--color-ink]">{duration}</strong> in normal
          traffic. ModgillTravels runs this route around the clock with
          air-conditioned Sedan, Ertiga and Innova Crysta vehicles, GPS
          tracking and background-verified drivers.
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Distance", `${distanceKm} km`],
            ["Travel time", duration],
            ["Availability", "24/7"],
            ["Trip types", "One way & round trip"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[--radius] bg-[--color-surface] p-3"
            >
              <dt className="text-xs text-[--color-ink-muted]">{label}</dt>
              <dd className="mt-0.5 font-semibold text-[--color-ink]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-[--radius-lg] border border-[--color-line] bg-white p-5 sm:p-6">
        <h2 className="mb-3">
          How to book a {from} to {to} taxi
        </h2>
        <p className="text-[--color-ink-muted]">
          Send a WhatsApp message with your pickup point in {from}, your drop
          address in {to}, and the date and time you want to leave. We reply
          within about 15 minutes with the driver, the vehicle and a quote
          fixed before you travel. You can also call {site.phone} directly —
          there is no form to fill in and no account to create.
        </p>
        <BookCta route={route} className="mt-5" />
      </section>

      <section className="rounded-[--radius-lg] border border-[--color-line] bg-white p-5 sm:p-6">
        <h2 className="mb-4">What is included</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            ["Verified drivers", "Background-checked, with valid commercial licences."],
            ["AC vehicles", "Sedan, Ertiga and Innova Crysta, all with GPS tracking."],
            ["Available 24/7", "Early flights and late arrivals included."],
            ["Quote fixed upfront", "Confirmed on WhatsApp before the trip starts."],
          ].map(([title, text]) => (
            <li
              key={title}
              className="rounded-[--radius] bg-[--color-surface] p-4"
            >
              <h3 className="text-base font-semibold text-[--color-ink]">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[--color-ink-muted]">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[--radius-lg] border border-[--color-line] bg-white p-5 sm:p-6">
        <h2 className="mb-3">Other routes from Patiala</h2>
        <p className="text-[--color-ink-muted]">
          Also looking at{" "}
          <Link
            href="/routes/patiala-to-chandigarh"
            className="font-semibold text-[--color-brand] underline underline-offset-2"
          >
            Patiala to Chandigarh
          </Link>{" "}
          (67 km),{" "}
          <Link
            href="/routes/patiala-to-shimla"
            className="font-semibold text-[--color-brand] underline underline-offset-2"
          >
            Patiala to Shimla
          </Link>{" "}
          (180 km), or{" "}
          <Link
            href="/routes/patiala-to-delhi"
            className="font-semibold text-[--color-brand] underline underline-offset-2"
          >
            Patiala to Delhi
          </Link>{" "}
          (240 km)? See{" "}
          <Link
            href="/booking"
            className="font-semibold text-[--color-brand] underline underline-offset-2"
          >
            all outstation routes from Patiala
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
