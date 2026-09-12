// app/sitemap-html/page.jsx
import Link from 'next/link';
import site from "@/data/site";
import Button from "@/components/ui/Button";
import destinations from '@/data/destinations';
import { HomeIcon, InfoIcon, ContactMailIcon, BookOnlineIcon, DirectionsCarIcon, GavelIcon, ArrowForwardIcon } from '@/components/Icons';

export const metadata = {
  title: 'Complete Sitemap - All Taxi Routes & Pages | ModgillTravels',
  description: 'Browse all taxi routes, pages, and services on ModgillTravels. Find your route from Patiala to Delhi, Chandigarh, Shimla, Manali and more destinations.',
  keywords: 'sitemap, taxi routes, cab service patiala, all routes, navigation',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.modgilltravels.in/sitemap-html',
  }
};

export default function HTMLSitemapPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Complete Site <span className="text-brand">Navigation</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Explore all pages and taxi routes available on ModgillTravels. Find your destination quickly.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-surface backdrop-blur-sm border border-line rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-1">{destinations.length}</div>
            <div className="text-ink-muted text-sm">Taxi Routes</div>
          </div>
          <div className="bg-surface backdrop-blur-sm border border-line rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-1">24/7</div>
            <div className="text-ink-muted text-sm">Availability</div>
          </div>
          <div className="bg-surface backdrop-blur-sm border border-line rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-1">500+</div>
            <div className="text-ink-muted text-sm">Happy Customers</div>
          </div>
          <div className="bg-surface backdrop-blur-sm border border-line rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand mb-1">4.8★</div>
            <div className="text-ink-muted text-sm">Rating</div>
          </div>
        </div>

        {/* Main Pages Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <HomeIcon className="text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-ink">Main Pages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-brand rounded-xl p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <HomeIcon className="text-brand" />
                <h3 className="text-ink font-semibold">Home</h3>
              </div>
              <p className="text-ink-muted text-sm">Main landing page with booking form</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/about"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-brand rounded-xl p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <InfoIcon className="text-brand" />
                <h3 className="text-ink font-semibold">About Us</h3>
              </div>
              <p className="text-ink-muted text-sm">Learn about our company and services</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/contact"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-brand rounded-xl p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <ContactMailIcon className="text-brand" />
                <h3 className="text-ink font-semibold">Contact</h3>
              </div>
              <p className="text-ink-muted text-sm">Get in touch with our support team</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/booking"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-brand rounded-xl p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <BookOnlineIcon className="text-brand" />
                <h3 className="text-ink font-semibold">Book Taxi</h3>
              </div>
              <p className="text-ink-muted text-sm">Instant taxi booking with confirmation</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </section>

        {/* All Taxi Routes Section - CRITICAL FOR SEO */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <DirectionsCarIcon className="text-brand" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink">
                All Taxi Routes <span className="text-brand">({destinations.length})</span>
              </h2>
              <p className="text-ink-muted text-sm">Click any route to view details and book instantly</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {destinations.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-brand rounded-lg p-4 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-ink font-medium text-sm mb-1 group-hover:text-brand transition-colors">
                      {route.from} → {route.to}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink-muted">
                      <span>{route.distanceKm}km</span>
                      <span>•</span>
                      <span>{route.duration}</span>
                    </div>
                    {route.displayFare && (
                      <div className="text-brand font-semibold text-sm mt-2">
                        {route.distanceKm} km
                      </div>
                    )}
                  </div>
                  <ArrowForwardIcon className="text-brand opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-lg" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Legal & Policies Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
              <GavelIcon className="text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-ink">Legal & Policies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/privacy"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-line rounded-xl p-5 transition-all duration-300"
            >
              <h3 className="text-ink font-semibold mb-2 group-hover:text-brand transition-colors">
                Privacy Policy
              </h3>
              <p className="text-ink-muted text-sm">How we protect and handle your personal information</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/terms"
              className="group bg-surface backdrop-blur-sm hover:bg-surface border border-line hover:border-line rounded-xl p-5 transition-all duration-300"
            >
              <h3 className="text-ink font-semibold mb-2 group-hover:text-brand transition-colors">
                Terms of Service
              </h3>
              <p className="text-ink-muted text-sm">Booking terms, cancellation policies, and conditions</p>
              <ArrowForwardIcon className="text-brand mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-surface border border-brand rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-ink mb-3">
            Ready to Book Your Taxi?
          </h3>
          <p className="text-ink-muted mb-6 max-w-2xl mx-auto">
            Choose from {destinations.length} routes or contact us for custom bookings. Professional drivers, transparent pricing, 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              <BookOnlineIcon />
              Book Now
            </Link>
            <Button variant="call" href={`tel:${site.phone}`} className="justify-center"><ContactMailIcon />
              Call: +91-62849-92669</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
