// app/booking/page.jsx
import Link from 'next/link';
import BookCta from "@/components/ui/BookCta";
import destinations from '@/data/destinations';
import cities from '@/data/cities';
import { DirectionsCarIcon, LocationOnIcon, SearchIcon, TrendingUpIcon, ExploreIcon, LocalOfferIcon } from '@/components/Icons';

export const metadata = {
  // patch_028: Title rewrite
  title: 'Cab Booking Patiala | Outstation Routes & Fares',
  description: 'All outstation taxi routes from Patiala — Delhi 250 km, Chandigarh 68 km, Shimla 170 km, Manali 357 km. Book on WhatsApp or call +91-62849-92669.',
  keywords: ['book taxi online', 'taxi booking', 'cab booking patiala', 'all routes', 'outstation taxi patiala'],
  alternates: {
    canonical: 'https://www.modgilltravels.in/booking',
  },
  openGraph: {
    title: 'Cab Booking Patiala | Outstation Taxi Routes & Fares — ModgillTravels',
    description: 'Browse all available taxi routes and cities. Book your cab service instantly with ModgillTravels.',
    url: 'https://www.modgilltravels.in/booking',
    type: 'website',
  },
};

export default function BookingPage() {
  // Group routes by origin city
  const routesByCity = destinations.reduce((acc, route) => {
    if (!acc[route.from]) {
      acc[route.from] = [];
    }
    acc[route.from].push(route);
    return acc;
  }, {});

  // Popular routes (first in each category)
  const popularRoutes = [
    destinations.find(r => r.slug === 'patiala-to-delhi'),
    destinations.find(r => r.slug === 'delhi-to-patiala'),
    destinations.find(r => r.slug === 'patiala-to-chandigarh'),
    destinations.find(r => r.slug === 'patiala-to-shimla'),
    destinations.find(r => r.slug === 'patiala-to-manali'),
    destinations.find(r => r.slug === 'patiala-to-amritsar'),
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">

        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="w-14 h-14 bg-accent-soft border border-brand rounded-full flex items-center justify-center mx-auto mb-5">
            <DirectionsCarIcon className="w-8 h-8 text-brand" />
          </div>
          {/* patch_027: H1 rewrite */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            Book Taxi in Patiala — All Outstation Routes & Cab Fares
          </h1>
          <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto mb-4">
            Browse all available routes and cities. Choose your destination and book instantly via phone or WhatsApp.
          </p>
          {/* patch_029: keyword-rich intro paragraph */}
          <p className="text-ink-muted text-sm sm:text-base max-w-2xl mx-auto mb-8">
            ModgillTravels covers every major outstation route from Patiala — Delhi (250 km), Chandigarh (68 km), Shimla (170 km), Manali (357 km), Amritsar (233 km) and Ludhiana (93 km). One-way or round trip, booked on WhatsApp or by phone, with verified drivers available 24/7.
          </p>

          {/* Quick Contact Buttons */}
          <BookCta align="center" size="lg" />
        </section>

        {/* Popular Routes Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Popular Routes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {popularRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/routes/${route.slug}`}
                className="group bg-white border border-line rounded-xl p-5 sm:p-6 hover:border-brand transition-all hover:shadow-xl hover:shadow-md"
              >
                {/* Route Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-brand">{route.from}</span>
                      <DirectionsCarIcon className="w-5 h-5 text-ink-muted group-hover:text-brand transition" />
                      <span className="text-ink">{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Route Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-ink-muted block mb-1">Distance</span>
                    <span className="text-ink font-semibold">{route.distanceKm} km</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block mb-1">Duration</span>
                    <span className="text-ink font-semibold">{route.duration}</span>
                  </div>
                </div>

                {/* Fare */}
                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <div>
                    <span className="text-ink-muted text-sm block mb-1">Starting from</span>
                    <span className="text-brand font-bold text-xl">{route.distanceKm} km</span>
                  </div>
                  <span className="text-brand text-sm font-semibold group-hover:text-brand transition">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cities We Serve Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
              <ExploreIcon className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Cities We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="group bg-white border border-line rounded-xl p-5 text-center hover:border-line transition-all"
              >
                <LocationOnIcon className="w-10 h-10 text-brand mx-auto mb-3  transition" />
                <h3 className="text-ink font-bold mb-1">{city.name}</h3>
                <p className="text-ink-muted text-sm mb-3">{city.state}</p>
                <span className="text-brand text-sm group-hover:text-brand transition">
                  Explore Routes →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* All Routes by City */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
              <SearchIcon className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Browse All Routes
            </h2>
          </div>

          {/* Routes Grouped by Origin City */}
          <div className="space-y-8">
            {Object.entries(routesByCity).map(([cityName, routes]) => (
              <div key={cityName} className="bg-white border border-line rounded-2xl p-6">
                <h3 className="text-xl font-bold text-ink mb-5 flex items-center gap-2">
                  <LocationOnIcon className="w-6 h-6 text-brand" />
                  From {cityName}
                  <span className="text-ink-muted text-sm font-normal ml-2">({routes.length} routes)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/routes/${route.slug}`}
                      className="group bg-surface border border-line/50 rounded-lg p-4 hover:bg-surface hover:border-brand transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-ink font-semibold">{route.to}</span>
                          <DirectionsCarIcon className="w-4 h-4 text-ink-muted group-hover:text-brand transition" />
                        </div>
                        <span className="text-brand font-bold">{route.distanceKm} km</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-ink-muted">
                        <span>{route.distanceKm} km</span>
                        <span>•</span>
                        <span>{route.duration}</span>
                        <span className="text-brand group-hover:text-brand ml-auto">View →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="mb-12 bg-surface border border-line rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
              <LocalOfferIcon className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-ink">Special Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-xl p-5">
              <h3 className="text-ink font-bold mb-2">₹200 advance to confirm</h3>
              <p className="text-ink-muted text-sm mb-3">
                A ₹200 advance confirms the booking. The balance is settled after the trip.
              </p>
              <span className="text-brand text-sm font-semibold">✓ Easy Confirmation</span>
            </div>

            <div className="bg-surface rounded-xl p-5">
              <h3 className="text-ink font-bold mb-2">One Way Taxi</h3>
              <p className="text-ink-muted text-sm mb-3">
                Pay only for the journey you take. One-way trips are not charged for the return leg.
              </p>
              <span className="text-brand text-sm font-semibold">✓ Save Money</span>
            </div>

            <div className="bg-surface rounded-xl p-5">
              <h3 className="text-ink font-bold mb-2">24/7 Availability</h3>
              <p className="text-ink-muted text-sm mb-3">
                Book anytime, day or night. Professional drivers available round the clock.
              </p>
              <span className="text-brand text-sm font-semibold">✓ Always Ready</span>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 text-center">
            How to Book
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-line rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand text-2xl font-bold">1</span>
              </div>
              <h3 className="text-ink font-bold mb-2">Choose Your Route</h3>
              <p className="text-ink-muted text-sm">
                Browse routes above or use our search to find your destination
              </p>
            </div>

            <div className="bg-white border border-line rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand text-2xl font-bold">2</span>
              </div>
              <h3 className="text-ink font-bold mb-2">Call or WhatsApp</h3>
              {/* patch_030: step-2 text rewrite */}
              <p className="text-ink-muted text-sm">
                WhatsApp us with your pickup location, travel date, and destination — we confirm your cab within 15 minutes
              </p>
            </div>

            <div className="bg-white border border-line rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand text-2xl font-bold">3</span>
              </div>
              <h3 className="text-ink font-bold mb-2">Get Confirmation</h3>
              <p className="text-ink-muted text-sm">
                Receive driver details and vehicle info within 30 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-surface border border-brand rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-ink-muted mb-6 max-w-xl mx-auto">
            Our team is available 24/7 to assist with your booking. Call or WhatsApp for instant confirmation.
          </p>
          <BookCta align="center" size="lg" />
        </section>
      </div>
    </div>
  );
}
