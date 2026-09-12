// components/Footer.jsx
import Link from "next/link";
import site from "@/data/site";
import Button from "@/components/ui/Button";
import { PhoneIcon, EmailIcon, WhatsAppIcon, InstagramIcon, LocationOnIcon, ArticleIcon, LinkedIn } from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();


const popularRoutes = [
  { name: 'Patiala → Delhi', slug: 'patiala-to-delhi' },
  { name: 'Delhi → Patiala', slug: 'delhi-to-patiala' },
  { name: 'Patiala → Chandigarh', slug: 'patiala-to-chandigarh' },
  { name: 'Patiala → Shimla', slug: 'patiala-to-shimla' },
];


  const cities = [
    { name: 'Patiala', slug: 'patiala' },
    { name: 'Chandigarh', slug: 'chandigarh' },
    { name: 'Ludhiana', slug: 'ludhiana' },
    { name: 'Delhi', slug: 'delhi' },
  ];

  const blogLinks = [
    { name: 'Patiala to Chandigarh Taxi', slug: 'patiala-to-chandigarh-taxi' },
    { name: 'Patiala to Manali Guide', slug: 'patiala-to-manali-travel-guide' },
    { name: 'Chandigarh to Shimla Cab', slug: 'chandigarh-to-shimla-taxi' },
    { name: 'Patiala to Amritsar Taxi', slug: 'patiala-to-amritsar-golden-temple-taxi' },
    { name: 'Best Places in Shimla', slug: 'best-places-to-visit-in-shimla' },
  ];

  return (
    <footer className="bg-white border-t border-[--color-line]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        
        {/* Grid Layout: 2 cols mobile, 5 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Company Info - Takes 2 cols on mobile, 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[--color-ink] font-bold text-base mb-3">
              ModgillTravels
            </h4>
            <p className="text-[--color-ink-muted] text-xs sm:text-sm leading-relaxed mb-4">
              Your trusted taxi service in Patiala. Professional cab booking for local & outstation 
              travel. Available 24/7 with transparent pricing.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link
                href="/about"
                className="text-[--color-ink-muted] hover:text-[--color-brand] text-xs sm:text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[--color-ink-muted] hover:text-[--color-brand] text-xs sm:text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="text-[--color-ink-muted] hover:text-[--color-brand] text-xs sm:text-sm transition-colors"
              >
                Book Taxi
              </Link>
            </div>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="text-[--color-ink] font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Popular Routes
            </h4>
            <div className="space-y-2">
              {popularRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/routes/${route.slug}`}
                  className="block text-[--color-ink-muted] hover:text-[--color-brand] text-xs transition-colors"
                >
                  {route.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="block text-[--color-brand] hover:text-[--color-brand] text-xs font-medium transition-colors pt-1"
              >
                View All Routes →
              </Link>
            </div>
          </div>

          {/* Cities We Serve */}
          <div>
            <h4 className="text-[--color-ink] font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Cities We Serve
            </h4>
            <div className="space-y-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="block text-[--color-ink-muted] hover:text-[--color-brand] text-xs transition-colors"
                >
                  {city.name}
                </Link>
              ))}
              <Link
                href="/city/shimla"
                className="block text-[--color-ink-muted] hover:text-[--color-brand] text-xs transition-colors"
              >
                Shimla
              </Link>
              <Link
                href="/booking"
                className="block text-[--color-brand] hover:text-[--color-brand] text-xs font-medium transition-colors pt-1"
              >
                More Cities →
              </Link>
            </div>
          </div>

          {/* Blog & Resources */}
          <div>
            <h4 className="text-[--color-ink] font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1">
              <ArticleIcon className="w-4 h-4" />
              Travel Guides
            </h4>
            <div className="space-y-2">
              {blogLinks.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="block text-[--color-ink-muted] hover:text-[--color-brand] text-xs transition-colors line-clamp-1"
                >
                  {blog.name}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block text-[--color-brand] hover:text-[--color-brand] text-xs font-medium transition-colors pt-1"
              >
                Read More Blogs →
              </Link>
            </div>
          </div>

          {/* Contact Info - Takes 2 cols on mobile, 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[--color-ink] font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              
              {/* Phone */}
              <Button variant="call" href={`tel:${site.phone}`} className=""><div className="w-8 h-8 rounded-lg bg-[--color-surface] flex items-center justify-center group-hover:bg-[--color-accent-soft] transition-colors flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-[--color-brand]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[--color-ink-muted]">Call 24/7</p>
                  <p className="text-xs font-medium truncate">+91-62849-92669</p>
                </div></Button>
              
              {/* WhatsApp */}
              <Button variant="whatsapp" external href="https://wa.me/916284992669?text=Hi, I want to book a taxi" className=""><div className="w-8 h-8 rounded-lg bg-[--color-surface] flex items-center justify-center group-hover:bg-[--color-accent-soft] transition-colors flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-[--color-brand]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[--color-ink-muted]">WhatsApp</p>
                  <p className="text-xs font-medium">Book Now</p>
                </div></Button>

              {/* Email */}
              <a 
                href="mailto:modgilltravels@gmail.com" 
                className="flex items-center gap-2 text-[--color-ink-muted] hover:text-[--color-brand] transition-colors group col-span-2 lg:col-span-1"
              >
                <div className="w-8 h-8 rounded-lg bg-[--color-surface] flex items-center justify-center group-hover:bg-[--color-accent-soft] transition-colors flex-shrink-0">
                  <EmailIcon className="w-4 h-4 text-[--color-brand]" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs text-[--color-ink-muted]">Contact via Email</p>
                </div>
              </a>

              {/* Location */}
              <div className="hidden lg:flex items-center gap-2 text-[--color-ink-muted]">
                <div className="w-8 h-8 rounded-lg bg-[--color-surface] flex items-center justify-center flex-shrink-0">
                  <LocationOnIcon className="w-4 h-4 text-[--color-brand]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[--color-ink-muted]">Location</p>
                  <p className="text-xs font-medium">Patiala, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[--color-line] bg-[--color-surface]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          
          {/* Mobile: Compact Stack */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[--color-accent-soft] flex items-center justify-center text-[--color-brand] hover:bg-[--color-accent-soft] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[--color-accent-soft] flex items-center justify-center text-[--color-brand] hover:bg-[--color-accent-soft] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedIn className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.instagram.com/modgilltravels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Links & Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xs text-[--color-ink-muted]">
              <Link href="/privacy" className="hover:text-[--color-brand] transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[--color-brand] transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-[--color-brand] transition-colors">Blog</Link>
            </div>

            <div className="text-center text-xs text-[--color-ink-muted]">
              <div>&copy; {currentYear} ModgillTravels</div>
              <div className="mt-1">
                Designed By{' '}
                <a 
                  href="https://codenest-service.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-brand] hover:text-[--color-brand] transition-colors"
                >
                  CodeNest
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="text-[--color-ink-muted] text-sm">
                &copy; {currentYear} ModgillTravels
              </div>
              
              <div className="flex items-center gap-3 text-xs">
                <Link href="/privacy" className="text-[--color-ink-muted] hover:text-[--color-brand] transition-colors">
                  Privacy
                </Link>
                <span className="text-[--color-ink-muted]">•</span>
                <Link href="/terms" className="text-[--color-ink-muted] hover:text-[--color-brand] transition-colors">
                  Terms
                </Link>
                <span className="text-[--color-ink-muted]">•</span>
                <Link href="/blog" className="text-[--color-ink-muted] hover:text-[--color-brand] transition-colors">
                  Blog
                </Link>
                <span className="text-[--color-ink-muted]">•</span>
                <Link href="/sitemap.xml" className="text-[--color-ink-muted] hover:text-[--color-brand] transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[--color-accent-soft] flex items-center justify-center text-[--color-brand] hover:bg-[--color-accent-soft] transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[--color-accent-soft] flex items-center justify-center text-[--color-brand] hover:bg-[--color-accent-soft] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="w-4 h-4" />
                </a>
                
                <a
                  href="https://www.instagram.com/modgilltravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
              
              <div className="text-[--color-ink-muted] text-xs">
                Designed By{' '}
                <a 
                  href="https://codenest-service.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-brand] hover:text-[--color-brand] transition-colors"
                >
                  CodeNest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Mobile Only */}
      <a
        href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-[--shadow] transition-all lg:hidden"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-[--color-ink]" />
      </a>
    </footer>
  );
}
