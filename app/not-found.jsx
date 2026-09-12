// app/not-found.jsx
import Link from 'next/link';
import site from "@/data/site";
import Button from "@/components/ui/Button";
import { DirectionsCarIcon, HomeIcon, PhoneIcon, SearchIcon, ExploreIcon } from '@/components/Icons';

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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[--color-accent-soft] border border-[--color-line] rounded-full mb-6">
            <SearchIcon className="w-12 h-12 text-[--color-brand]" />
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-[--color-brand] mb-4">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-ink] mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-[--color-ink-muted] text-base sm:text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track!
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[--color-brand] hover:bg-[--color-brand-hover] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[--shadow]"
            >
              <HomeIcon className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Button variant="call" href={`tel:${site.phone}`} className="justify-center"><PhoneIcon className="w-5 h-5" />
              Call Us Now</Button>
          </div>
        </div>

        {/* Quick Links */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-[--color-ink] mb-6 text-center">
            Quick Links
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group bg-white border border-[--color-line] rounded-xl p-5 text-center hover:border-[--color-brand] transition-all"
                >
                  <Icon className="w-8 h-8 text-[--color-brand] mx-auto mb-3 group- transition" />
                  <span className="text-[--color-ink] font-semibold text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular Routes */}
        <section className="bg-white border border-[--color-line] rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[--color-ink] mb-6 text-center">
            Popular Taxi Routes
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="group bg-[--color-surface] border border-[--color-line]/50 rounded-lg p-4 hover:bg-[--color-surface] hover:border-[--color-brand] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DirectionsCarIcon className="w-5 h-5 text-[--color-brand]" />
                    <span className="text-[--color-ink] font-semibold text-sm">{route.name}</span>
                  </div>
                  <span className="text-[--color-brand] text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-[--color-brand] hover:text-[--color-brand] transition font-semibold"
            >
              <ExploreIcon className="w-5 h-5" />
              View All Routes
            </Link>
          </div>
        </section>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-[--color-ink-muted] text-sm mb-3">
            Need help finding something?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Button variant="call" href={`tel:${site.phone}`} className="">Call: +91-62849-92669</Button>
            <span className="hidden sm:inline text-[--color-ink-muted]">•</span>
            <Button variant="whatsapp" external href="https://wa.me/916284992669" className="">WhatsApp Us</Button>
            <span className="hidden sm:inline text-[--color-ink-muted]">•</span>
            <a
              href="mailto:modgilltravels@gmail.com"
              className="text-[--color-brand] hover:text-[--color-brand] transition"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
