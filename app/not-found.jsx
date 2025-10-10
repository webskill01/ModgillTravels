// app/not-found.jsx
import Link from 'next/link';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';

export const metadata = {
  title: '404 - Page Not Found | ModgillTravels',
  description: 'The page you are looking for could not be found. Browse our taxi services or contact us for booking.',
};

export default function NotFound() {
  const quickLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Book a Taxi', href: '/booking', icon: DirectionsCarIcon },
    { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
    { name: 'All Routes', href: '/booking', icon: ExploreIcon },
  ];

  const popularRoutes = [
    { name: 'Patiala to Delhi', slug: 'patiala-to-delhi' },
    { name: 'Patiala to Chandigarh', slug: 'patiala-to-chandigarh' },
    { name: 'Patiala to Shimla', slug: 'patiala-to-shimla' },
    { name: 'Delhi to Patiala', slug: 'delhi-to-patiala' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        
        {/* 404 Icon & Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full mb-6">
            <SearchIcon className="w-12 h-12 text-red-400" />
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track!
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <HomeIcon className="w-5 h-5" />
              Go to Homepage
            </Link>
            <a
              href="tel:+916284992669"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Quick Links
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 text-center hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition" />
                  <span className="text-white font-semibold text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular Routes */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Popular Taxi Routes
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group bg-slate-700/30 border border-gray-600/50 rounded-lg p-4 hover:bg-slate-700/50 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DirectionsCarIcon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold text-sm">{route.name}</span>
                  </div>
                  <span className="text-cyan-400 text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold"
            >
              <ExploreIcon className="w-5 h-5" />
              View All Routes
            </Link>
          </div>
        </section>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-3">
            Need help finding something?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="tel:+916284992669"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              Call: +91-62849-92669
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="https://wa.me/916284992669"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              WhatsApp Us
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="mailto:modgilltravels@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
