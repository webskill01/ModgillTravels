// app/routes/[slug]/page.jsx
import Link from "next/link";
import destinations from "@/data/destinations";
import PlaceIcon from '@mui/icons-material/Place';
import RouteOverview from "@/components/RouteOverview";
import VehicleOptions from "@/components/VehicleOptions";
import QuickBookingSidebar from "@/components/QuickBookingSidebar";
import RouteContent from "@/components/RouteContent";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/structuredData';

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = destinations.find(r => r.slug === slug);
  
  if (!route) {
    return {
      title: '404 - Route Not Found | ModgillTravels',
      description: 'The requested taxi route was not found.',
    };
  }

  return {
    title: `${route.from} to ${route.to} Taxi | ₹${route.fare["Sedan"]} Cab Fare | ModgillTravels`,
    description: `Book ${route.from} to ${route.to} taxi service. Distance: ${route.distanceKm}km, Duration: ${route.duration}. Starting ₹${route.fare["Sedan"]}. Professional drivers, AC vehicles, 24/7 availability. One way & round trip options.`,
    keywords: [
      `${route.from} to ${route.to} taxi`,
      `${route.from} ${route.to} cab`,
      `taxi service ${route.from} to ${route.to}`,
      `${route.to} taxi booking`,
      `one way taxi ${route.from}`,
      `${route.from} to ${route.to} cab fare`,
      `taxi fare ${route.from} ${route.to}`,
      `cab booking ${route.from} to ${route.to}`
    ],
    alternates: {
      canonical: `https://modgilltravels.in/routes/${route.slug}`,
    },
    openGraph: {
      title: `${route.from} to ${route.to} Taxi Service - ModgillTravels`,
      description: `Book reliable taxi from ${route.from} to ${route.to}. ${route.distanceKm}km journey starting at ₹${route.fare["Sedan"]}.`,
      url: `https://modgilltravels.in/routes/${route.slug}`,
      siteName: 'ModgillTravels',
      images: [
        {
          url: `/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${route.from} to ${route.to} Taxi Service`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${route.from} to ${route.to} Taxi Service - ModgillTravels`,
      description: `Book reliable taxi from ${route.from} to ${route.to}. ${route.distanceKm}km journey starting at ₹${route.fare["Sedan"]}.`,
      images: [`/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  };
}

export default async function RouteDetailsPage({ params }) {
  const { slug } = await params;
  const route = destinations.find(r => r.slug === slug);

  if (!route) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* Main Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-2xl p-8 sm:p-10 text-center">
          
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <DirectionsCarIcon className="w-10 h-10 text-cyan-400" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Looking for a Cab for this Route?
          </h1>
          
          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
            We'd love to help you book a taxi for your journey! This route isn't listed yet, 
            but our team can arrange it for you. Call or WhatsApp us now for instant booking.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:+916284992669"
              className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500  text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-3 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Call Us Now</div>
                <div className="text-base font-bold">+91-62849-92669</div>
              </div>
            </a>

            <a
              href="https://wa.me/916284992669?text=Hi, I want to book a taxi for a custom route"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600  text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">WhatsApp</div>
                <div className="text-base font-bold">Instant Reply</div>
              </div>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <SupportAgentIcon className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-white text-sm font-semibold">24/7 Support</div>
              <div className="text-gray-500 text-xs">Always available</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <DirectionsCarIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-white text-sm font-semibold">Any Route</div>
              <div className="text-gray-500 text-xs">Custom bookings</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-white text-sm font-semibold">Instant Quote</div>
              <div className="text-gray-500 text-xs">Fair pricing</div>
            </div>
          </div>

          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-semibold"
          >
            <ArrowBackIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Popular Routes Suggestion */}
        <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4 text-center">Popular Routes You Might Like:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: 'Patiala → Delhi', slug: 'patiala-to-delhi' },
              { name: 'Patiala → Chandigarh', slug: 'patiala-to-chandigarh' },
              { name: 'Patiala → Shimla', slug: 'patiala-to-shimla' },
              { name: 'Delhi → Patiala', slug: 'delhi-to-patiala' }
            ].map((route) => (
              <Link
                key={route.slug}
                href={`/route/${route.slug}`}
                className="bg-slate-700/50 hover:bg-slate-700 border border-gray-600 hover:border-cyan-500/40 rounded-lg p-3 text-center transition-all hover:scale-105"
              >
                <div className="text-white text-sm font-medium">{route.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Routes", url: "/" },
    { name: `${route.from} to ${route.to}`, url: `/routes/${route.slug}` }
  ]);

  const jsonLd = [
    getServiceSchema(route),
    breadcrumbSchema
  ];

  return (
    <>
      <SEO
        title={`${route.from} to ${route.to} Taxi | ₹${route.fare["Sedan"]}`}
        description={`Book taxi from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}. Starting ₹${route.fare["Sedan"]}. Professional drivers, AC vehicles.`}
        keywords={`${route.from} to ${route.to} taxi, ${route.from} ${route.to} cab, taxi fare, cab booking`}
        url={`/routes/${slug}`}
        jsonLd={jsonLd}
      />
      
      <div className="max-w-7xl mx-auto px-5 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-cyan-400 transition">Routes</Link>
            <span>/</span>
            <span className="text-white">{route.from} to {route.to}</span>
          </div>
        </nav>

        {/* Page Header - SEO Optimized H1 */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <PlaceIcon className="text-cyan-400" />
            {route.from} to {route.to} Taxi Service
          </h1>
          <p className="text-gray-400 text-sm sm:lg">
            {route.distanceKm}km • {route.duration} • Starting ₹{route.fare["Sedan"]} • Professional Drivers
          </p>
        </div>

        {/* MOBILE FIRST: Main Booking Content */}
        {/* On mobile: Sidebar appears first, then Route Overview, then Vehicles */}
        {/* On desktop: 2-column layout with sidebar on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          

          {/* Desktop: Left Column (order-2 on mobile, order-1 on desktop) */}
          <div className="lg:col-span-2 lg:order-2 space-y-6">
            <RouteOverview route={route} />
            <VehicleOptions route={route} />
          </div>
          {/* Mobile: Sidebar appears FIRST (order-1 on mobile, order-2 on desktop) */}
          <div className="lg:col-span-1 lg:order-1">
            <QuickBookingSidebar route={route} />
          </div>
        </div>

        {/* SEO CONTENT SECTION - BOTTOM OF PAGE */}
        {/* This appears AFTER the main booking content on ALL devices */}
        <div className="mt-12">
          <RouteContent route={route} />
        </div>
      </div>
    </>
  );
}
