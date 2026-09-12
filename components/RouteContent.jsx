import Link from "next/link";
import site from "@/data/site";
import destinations from "@/data/destinations";
import BookCta from "@/components/ui/BookCta";

// The SEO body of every route page.
//
// Each H2 is phrased the way the query is actually typed — distance queries
// draw 369 impressions against 3 for every fare query combined, so distance
// and travel time lead. The answer sits in the first sentence under each
// heading, which is what gets pulled into an AI answer or a featured snippet.
//
// The journey, stop and tip fields come from data/destinations.js and differ
// per route. That is deliberate: pages built from one templated sentence with
// the names swapped are scaled content abuse, and this route matrix is meant
// to grow.
export default function RouteContent({ route }) {
  if (!route) return null;

  const { from, to, distanceKm, duration, highway, via, journey, stop, tip } = route;

  // Three other routes to link to, never this one.
  const related = destinations
    .filter((r) => r.slug !== route.slug && r.from === from)
    .slice(0, 3);

  // The return leg. /routes/delhi-to-patiala was unknown to Google — zero
  // referring URLs — while /city/delhi picked up "delhi to patiala taxi" at
  // position 75. A contextual link from the forward route, which is the
  // strongest route page on the site, is the cheapest way to get it crawled.
  const returnLeg = destinations.find((r) => r.from === to && r.to === from);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2 className="mb-3">
          How far is {to} from {from}?
        </h2>
        <p className="text-ink-muted">
          <strong className="text-ink">
            {from} to {to} is about {distanceKm} km by road, and the drive takes{" "}
            {duration}
          </strong>{" "}
          in normal traffic, running on {highway}
          {via?.length ? ` via ${via.join(", ")}` : ""}.
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Distance", `${distanceKm} km`],
            ["Travel time", duration],
            ["Route", highway],
            ["Availability", "24/7"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-surface p-3">
              <dt className="text-sm text-ink-muted">{label}</dt>
              <dd className="mt-0.5 font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2 className="mb-3">
          What the {from} to {to} drive is like
        </h2>
        <p className="text-ink-muted">{journey}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-surface p-4">
            <h3 className="text-base font-semibold text-ink">Where to break</h3>
            <p className="mt-1.5 text-sm text-ink-muted">{stop}</p>
          </div>
          <div className="rounded-xl bg-surface p-4">
            <h3 className="text-base font-semibold text-ink">
              Best time to leave
            </h3>
            <p className="mt-1.5 text-sm text-ink-muted">{tip}</p>
          </div>
        </div>

        {via?.length > 1 && (
          <>
            <h3 className="mt-6 text-base font-semibold text-ink">
              Towns on the way
            </h3>
            <ol className="mt-2 flex flex-wrap gap-2 text-sm">
              {[from, ...via, to].map((place, i) => (
                <li
                  key={`${place}-${i}`}
                  className="rounded-full bg-surface px-3 py-1 text-ink"
                >
                  {place}
                </li>
              ))}
            </ol>
          </>
        )}
      </section>

      <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2 className="mb-3">
          How do I book a {from} to {to} taxi?
        </h2>
        <p className="text-ink-muted">
          Send a WhatsApp message with your pickup point in {from}, the drop
          address in {to}, and when you want to leave. We reply within about 15
          minutes with the driver, the vehicle and a quote fixed before you
          travel. You can also call us. There is no form and no
          account.
        </p>
        <BookCta route={route} className="mt-5" />

        {returnLeg && (
          <p className="mt-4 text-sm text-ink-muted">
            Travelling the other way? We run the{" "}
            <Link
              href={`/routes/${returnLeg.slug}`}
              className="font-semibold text-brand underline underline-offset-2"
            >
              {returnLeg.from} to {returnLeg.to} taxi
            </Link>{" "}
            just as often — same {returnLeg.distanceKm} km road, same{" "}
            {returnLeg.duration} drive.
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
        <h2 className="mb-4">What is included</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "Verified drivers",
              route.carFeatures?.includes("Hill-Experienced Driver")
                ? "Background-checked, and experienced on this hill route specifically."
                : "Background-checked, with valid commercial licences.",
            ],
            ["AC vehicles", "Sedan, Ertiga and Innova Crysta, all GPS tracked."],
            ["Available 24/7", "Early flights and late arrivals included."],
            ["Quote fixed upfront", "Confirmed on WhatsApp before the trip."],
          ].map(([title, text]) => (
            <li key={title} className="rounded-xl bg-surface p-4">
              <h3 className="text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
          <h2 className="mb-4">Other routes from {from}</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/routes/${r.slug}`}
                  className="block h-full rounded-xl border border-line p-4 transition-colors duration-200 hover:border-brand"
                >
                  <span className="block font-semibold text-ink">
                    {r.from} to {r.to}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {r.distanceKm} km &middot; {r.duration}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link
              href="/booking"
              className="font-semibold text-brand underline underline-offset-2"
            >
              See all outstation routes from Patiala
            </Link>
          </p>
        </section>
      )}
    </div>
  );
}
