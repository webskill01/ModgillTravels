// app/booking/page.jsx
import Link from 'next/link';
import destinations from '@/data/destinations';
import cities from '@/data/cities';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export const metadata = {
  title: 'Book Taxi Online | All Routes & Cities - ModgillTravels',
  description: 'Browse all taxi routes and cities served by ModgillTravels. Book cab service from Patiala to Delhi, Chandigarh, Shimla, Ludhiana. View fares and book instantly.',
  keywords: ['book taxi online', 'taxi booking', 'cab booking patiala', 'all routes', 'taxi fares'],
  alternates: {
    canonical: 'https://modgilltravels.in/booking',
  },
  openGraph: {
    title: 'Book Taxi - All Routes & Cities | ModgillTravels',
    description: 'Browse all available taxi routes and cities. Book your cab service instantly with ModgillTravels.',
    url: 'https://modgilltravels.in/booking',
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
    destinations.find(r => r.slug === 'Patiala-to-Delhi'),
    destinations.find(r => r.slug === 'Delhi-to-Patiala'),
    destinations.find(r => r.slug === 'Patiala-to-Chandigarh'),
    destinations.find(r => r.slug === 'Patiala-to-Shimla'),
    destinations.find(r => r.slug === 'Patiala-to-Manali'),
    destinations.find(r => r.slug === 'Patiala-to-Amritsar'),
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
            <DirectionsCarIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Taxi
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Browse all available routes and cities. Choose your destination and book instantly via phone or WhatsApp.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call +91-62849-92669</span>
            </a>
            <a
              href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </section>

        {/* Popular Routes Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Popular Routes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {popularRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/route/${route.slug}`}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Route Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-lg font-bold">
                      <span className="text-cyan-400">{route.from}</span>
                      <DirectionsCarIcon className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition" />
                      <span className="text-white">{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Route Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400 block mb-1">Distance</span>
                    <span className="text-white font-semibold">{route.distanceKm} km</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Duration</span>
                    <span className="text-white font-semibold">{route.duration}</span>
                  </div>
                </div>

                {/* Fare */}
                <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-xs block mb-1">Starting from</span>
                    <span className="text-cyan-400 font-bold text-xl">₹{Object.values(route.fare)[0]}</span>
                  </div>
                  <span className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition">
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
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
              <ExploreIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Cities We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 text-center hover:border-purple-500/40 transition-all hover:scale-105"
              >
                <LocationOnIcon className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition" />
                <h3 className="text-white font-bold mb-1">{city.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{city.state}</p>
                <span className="text-purple-400 text-sm group-hover:text-purple-300 transition">
                  Explore Routes →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* All Routes by City */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
              <SearchIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Browse All Routes
            </h2>
          </div>

          {/* Routes Grouped by Origin City */}
          <div className="space-y-8">
            {Object.entries(routesByCity).map(([cityName, routes]) => (
              <div key={cityName} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <LocationOnIcon className="w-6 h-6 text-cyan-400" />
                  From {cityName}
                  <span className="text-gray-500 text-sm font-normal ml-2">({routes.length} routes)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/route/${route.slug}`}
                      className="group bg-slate-700/30 border border-gray-600/50 rounded-lg p-4 hover:bg-slate-700/50 hover:border-cyan-500/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{route.to}</span>
                          <DirectionsCarIcon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition" />
                        </div>
                        <span className="text-cyan-400 font-bold">₹{Object.values(route.fare)[0]}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{route.distanceKm} km</span>
                        <span>•</span>
                        <span>{route.duration}</span>
                        <span className="text-cyan-400 group-hover:text-cyan-300 ml-auto">View →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="mb-12 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <LocalOfferIcon className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Special Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">₹200 Advance Booking</h3>
              <p className="text-gray-400 text-sm mb-3">
                Pay just ₹200 advance to confirm your booking. Balance payment after trip completion.
              </p>
              <span className="text-green-400 text-xs font-semibold">✓ Easy Confirmation</span>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">One Way Taxi</h3>
              <p className="text-gray-400 text-sm mb-3">
                Pay only for your journey. No return fare charges. Save up to 40% on one-way trips.
              </p>
              <span className="text-green-400 text-xs font-semibold">✓ Save Money</span>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-400 text-sm mb-3">
                Book anytime, day or night. Professional drivers available round the clock.
              </p>
              <span className="text-green-400 text-xs font-semibold">✓ Always Ready</span>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            How to Book
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white font-bold mb-2">Choose Your Route</h3>
              <p className="text-gray-400 text-sm">
                Browse routes above or use our search to find your destination
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white font-bold mb-2">Call or WhatsApp</h3>
              <p className="text-gray-400 text-sm">
                Contact us with your pickup location, date, and time
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white font-bold mb-2">Get Confirmation</h3>
              <p className="text-gray-400 text-sm">
                Receive driver details and vehicle info within 30 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Our team is available 24/7 to assist with your booking. Call or WhatsApp for instant confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
