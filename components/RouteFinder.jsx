"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import destinations from "@/data/destinations";
import { RouteIcon, AccessTimeIcon } from "@/components/Icons";

// Replaces the old hero form (react-hook-form + yup + two selects that could
// submit a pair with no page behind it) and the route carousel. Typing filters
// every route; nothing is submitted, so there is no dead end and no /book.
//
// Shown first are the routes that actually earn impressions in Search Console.
const FEATURED = [
  "patiala-to-delhi",
  "patiala-to-chandigarh",
  "patiala-to-shimla",
  "patiala-to-ludhiana",
  "patiala-to-manali",
  "patiala-to-amritsar",
];

export default function RouteFinder() {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(destinations, {
        keys: ["from", "to", "slug"],
        threshold: 0.35,
      }),
    []
  );

  const featured = useMemo(
    () =>
      FEATURED.map((slug) => destinations.find((r) => r.slug === slug)).filter(
        Boolean
      ),
    []
  );

  const results = query.trim()
    ? fuse.search(query.trim()).map((r) => r.item)
    : featured;

  return (
    <div>
      <label htmlFor="route-search" className="sr-only">
        Search taxi routes
      </label>
      <input
        id="route-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Where are you going? Try Delhi, Shimla, Manali…"
        className="w-full min-h-12 rounded-[--radius] border border-[--color-line-strong] bg-white px-4 py-3 text-[--color-ink] placeholder:text-[--color-ink-muted] focus:border-[--color-brand] focus:outline-none"
      />

      {results.length === 0 ? (
        <p className="mt-4 text-sm text-[--color-ink-muted]">
          No route page for that yet — call or WhatsApp us and we will quote it.
        </p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, 6).map((route) => (
            <li key={route.slug}>
              <Link
                href={`/routes/${route.slug}`}
                className="block h-full rounded-[--radius-lg] border border-[--color-line] bg-white p-4 transition-colors duration-200 hover:border-[--color-brand] hover:shadow-[--shadow]"
              >
                <span className="block font-semibold text-[--color-ink]">
                  {route.from} to {route.to}
                </span>
                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[--color-ink-muted]">
                  <span className="inline-flex items-center gap-1.5">
                    <RouteIcon className="h-4 w-4" />
                    {route.distanceKm} km
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <AccessTimeIcon className="h-4 w-4" />
                    {route.duration}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 text-sm">
        <Link
          href="/booking"
          className="font-semibold text-[--color-brand] underline underline-offset-2"
        >
          See all outstation routes from Patiala
        </Link>
      </p>
    </div>
  );
}
