// components/Footer.jsx
import Link from "next/link";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArticleIcon from '@mui/icons-material/Article';
import { LinkedIn } from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();


const popularRoutes = [
  { name: 'Patiala → Delhi', slug: 'Patiala-to-Delhi' },
  { name: 'Delhi → Patiala', slug: 'Delhi-to-Patiala' },
  { name: 'Patiala → Chandigarh', slug: 'Patiala-to-Chandigarh' },
  { name: 'Patiala → Shimla', slug: 'Patiala-to-Shimla' },
];


  const cities = [
    { name: 'Patiala', slug: 'patiala' },
    { name: 'Chandigarh', slug: 'chandigarh' },
    { name: 'Ludhiana', slug: 'ludhiana' },
    { name: 'Delhi', slug: 'delhi' },
  ];

  const blogLinks = [
    { name: 'Best Places in Shimla', slug: 'best-places-to-visit-in-shimla' },
    { name: 'Patiala to Delhi Guide', slug: 'patiala-to-delhi-travel-guide' },
    { name: 'One Way Taxi Booking', slug: 'how-to-book-one-way-taxi' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        
        {/* Grid Layout: 2 cols mobile, 5 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Company Info - Takes 2 cols on mobile, 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-base mb-3">
              ModgillTravels
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              Your trusted taxi service in Patiala. Professional cab booking for local & outstation 
              travel. Available 24/7 with transparent pricing.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="text-gray-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
              >
                Book Taxi
              </Link>
            </div>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Popular Routes
            </h4>
            <div className="space-y-2">
              {popularRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/route/${route.slug}`}
                  className="block text-gray-400 hover:text-cyan-400 text-xs transition-colors"
                >
                  {route.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="block text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors pt-1"
              >
                View All Routes →
              </Link>
            </div>
          </div>

          {/* Cities We Serve */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Cities We Serve
            </h4>
            <div className="space-y-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="block text-gray-400 hover:text-cyan-400 text-xs transition-colors"
                >
                  {city.name}
                </Link>
              ))}
              <Link
                href="/city/shimla"
                className="block text-gray-400 hover:text-cyan-400 text-xs transition-colors"
              >
                Shimla
              </Link>
              <Link
                href="/booking"
                className="block text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors pt-1"
              >
                More Cities →
              </Link>
            </div>
          </div>

          {/* Blog & Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1">
              <ArticleIcon className="w-4 h-4" />
              Travel Guides
            </h4>
            <div className="space-y-2">
              {blogLinks.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="block text-gray-400 hover:text-cyan-400 text-xs transition-colors line-clamp-1"
                >
                  {blog.name}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors pt-1"
              >
                Read More Blogs →
              </Link>
            </div>
          </div>

          {/* Contact Info - Takes 2 cols on mobile, 1 on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              
              {/* Phone */}
              <a 
                href="tel:+916284992669" 
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-400/20 transition-colors flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Call 24/7</p>
                  <p className="text-xs font-medium truncate">+91-62849-92669</p>
                </div>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/916284992669?text=Hi, I want to book a taxi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-400/20 transition-colors flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">WhatsApp</p>
                  <p className="text-xs font-medium">Book Now</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:modgilltravels@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group col-span-2 lg:col-span-1"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors flex-shrink-0">
                  <EmailIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="text-xs text-gray-400">Contact via Email</p>
                </div>
              </a>

              {/* Location */}
              <div className="hidden lg:flex items-center gap-2 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <LocationOnIcon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-xs font-medium">Patiala, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          
          {/* Mobile: Compact Stack */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 hover:bg-green-600/30 hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedIn className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.instagram.com/modgilltravels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Links & Copyright */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            </div>

            <div className="text-center text-xs text-gray-600">
              <div>&copy; {currentYear} ModgillTravels</div>
              <div className="mt-1">
                Designed By{' '}
                <a 
                  href="https://codenest-service.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  CodeNest
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="text-gray-500 text-sm">
                &copy; {currentYear} ModgillTravels
              </div>
              
              <div className="flex items-center gap-3 text-xs">
                <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Privacy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Terms
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/blog" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/sitemap.xml" className="text-gray-500 hover:text-cyan-400 transition-colors">
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
                  className="w-9 h-9 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 hover:bg-green-600/30 hover:scale-110 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="w-4 h-4" />
                </a>
                
                <a
                  href="https://www.instagram.com/modgilltravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
              
              <div className="text-gray-500 text-xs">
                Designed By{' '}
                <a 
                  href="https://codenest-service.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
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
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/50 hover:scale-110 transition-all lg:hidden"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
}
