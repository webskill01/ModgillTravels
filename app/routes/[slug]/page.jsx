// app/routes/[slug]/page.jsx
import Link from "next/link";
import destinations from "@/data/destinations";
import PlaceIcon from '@mui/icons-material/Place';
import RouteOverview from "@/components/RouteOverview";
import VehicleOptions from "@/components/VehicleOptions";
import QuickBookingSidebar from "@/components/QuickBookingSidebar";
import RouteContent from "@/components/RouteContent";
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/structuredData';
import { notFound } from "next/navigation";

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
      canonical: `https://www.modgilltravels.in/routes/${route.slug}`,
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
    notFound(); // This returns proper 404 status
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
