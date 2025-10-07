// app/sitemap-html/page.jsx
import Link from 'next/link';
import destinations from '@/data/destinations';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GavelIcon from '@mui/icons-material/Gavel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackToTopButton from '@/components/BackToTopButton';

export const metadata = {
  title: 'Complete Sitemap - All Taxi Routes & Pages | ModgillTravels',
  description: 'Browse all taxi routes, pages, and services on ModgillTravels. Find your route from Patiala to Delhi, Chandigarh, Shimla, Manali and more destinations.',
  keywords: 'sitemap, taxi routes, cab service patiala, all routes, navigation',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://modgilltravels.in/sitemap-html',
  }
};

export default function HTMLSitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Site <span className="text-cyan-400">Navigation</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore all pages and taxi routes available on ModgillTravels. Find your destination quickly.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">{destinations.length}</div>
            <div className="text-gray-400 text-sm">Taxi Routes</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Availability</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">4.8★</div>
            <div className="text-gray-400 text-sm">Rating</div>
          </div>
        </div>

        {/* Main Pages Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <HomeIcon className="text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Main Pages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                <HomeIcon className="text-cyan-400" />
                <h3 className="text-white font-semibold">Home</h3>
              </div>
              <p className="text-gray-400 text-sm">Main landing page with booking form</p>
              <ArrowForwardIcon className="text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/about"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                <InfoIcon className="text-blue-400" />
                <h3 className="text-white font-semibold">About Us</h3>
              </div>
              <p className="text-gray-400 text-sm">Learn about our company and services</p>
              <ArrowForwardIcon className="text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/contact"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                <ContactMailIcon className="text-green-400" />
                <h3 className="text-white font-semibold">Contact</h3>
              </div>
              <p className="text-gray-400 text-sm">Get in touch with our support team</p>
              <ArrowForwardIcon className="text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/booking"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                <BookOnlineIcon className="text-yellow-400" />
                <h3 className="text-white font-semibold">Book Taxi</h3>
              </div>
              <p className="text-gray-400 text-sm">Instant taxi booking with confirmation</p>
              <ArrowForwardIcon className="text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </section>

        {/* All Taxi Routes Section - CRITICAL FOR SEO */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <DirectionsCarIcon className="text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                All Taxi Routes <span className="text-cyan-400">({destinations.length})</span>
              </h2>
              <p className="text-gray-400 text-sm">Click any route to view details and book instantly</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {destinations.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 border border-white/10 hover:border-cyan-400/50 rounded-lg p-4 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                      {route.from} → {route.to}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{route.distanceKm}km</span>
                      <span>•</span>
                      <span>{route.duration}</span>
                    </div>
                    {route.displayFare && (
                      <div className="text-cyan-400 font-semibold text-sm mt-2">
                        ₹{route.displayFare}
                      </div>
                    )}
                  </div>
                  <ArrowForwardIcon className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-lg" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Legal & Policies Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <GavelIcon className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Legal & Policies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/privacy"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-purple-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                Privacy Policy
              </h3>
              <p className="text-gray-400 text-sm">How we protect and handle your personal information</p>
              <ArrowForwardIcon className="text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/terms"
              className="group bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 border border-white/10 hover:border-purple-400/50 rounded-xl p-5 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                Terms of Service
              </h3>
              <p className="text-gray-400 text-sm">Booking terms, cancellation policies, and conditions</p>
              <ArrowForwardIcon className="text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Book Your Taxi?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Choose from {destinations.length} routes or contact us for custom bookings. Professional drivers, transparent pricing, 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <BookOnlineIcon />
              Book Now
            </Link>
            <a
              href="tel:+916284992669"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ContactMailIcon />
              Call: +91-62849-92669
            </a>
          </div>
        </section>

        {/* Back to Top - Client Component */}
        <BackToTopButton />
      </div>
    </div>
  );
}
