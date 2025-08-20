import Link from "next/link";
import destinations from "@/data/destinations";
import PlaceIcon from '@mui/icons-material/Place';
import RouteOverview from "@/components/RouteOverview";
import VehicleOptions from "@/components/VehicleOptions";
import QuickBookingSidebar from "@/components/QuickBookingSidebar";
import SEO from '@/components/SEO';
import { getServiceSchema } from '@/utils/structuredData';


export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = destinations.find(r => r.slug === slug);
  
  if (!route) return {};

  return {
    title: `${route.from} to ${route.to} Taxi Service | ₹${route.displayFare} | ModgillTravels`,
    description: `Book taxi from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}. Starting ₹${route.displayFare}. Professional drivers, AC vehicles.`,
    keywords: `${route.from} to ${route.to} taxi, ${route.from} ${route.to} cab booking, taxi fare ${route.from} ${route.to}`,
    
    openGraph: {
      title: `${route.from} to ${route.to} Taxi Service - ModgillTravels`,
      description: `Book reliable taxi from ${route.from} to ${route.to}. ${route.distanceKm}km journey starting at ₹${route.displayFare}.`,
      type: 'website',
      siteName: 'ModgillTravels',
    },
    
    twitter: {
      card: 'summary',
      title: `${route.from} to ${route.to} Taxi Service - ModgillTravels`,
      description: `Book reliable taxi from ${route.from} to ${route.to}. ${route.distanceKm}km journey starting at ₹${route.displayFare}.`,
    },
  };
}



export default async function RouteDetailsPage({ params }) {
  const { slug } = await params;
  const route = destinations.find(r => r.slug === slug);

  if (!route) {
    return (
      <div className="max-w-4xl mx-auto px-5 py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Route Not Found ! Call To Book</h1>
        <p className="text-gray-400 mb-8">Sorry, the requested route could not be found .Call On This Number +91 483343-34834. To Book Cab For This Route</p>
        <Link href="/" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition">
          Back to Home
        </Link>
      </div>
    );
  }
  
  const jsonLd = [
   getServiceSchema(route)
];

  return (<>
   <SEO
        title={`${route.from} to ${route.to} Taxi Service | ₹${route.displayFare}`}
        description={`Book taxi from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}. Starting ₹${route.displayFare}.`}
        keywords={`${route.from} to ${route.to} taxi, cab booking, taxi fare`}
        url={`/routes/${slug}`}
        jsonLd={jsonLd}
      />
    <div className="max-w-7xl mx-auto px-5 py-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <div className="flex items-center space-x-2 text-gray-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <span>/</span>
          <span className="text-white">{route.from} to {route.to}</span>
        </div>
      </nav>

      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <PlaceIcon className="text-cyan-400" />
          {route.from} to {route.to} Taxi Service
        </h2>
        <p className="text-gray-400">
          Professional taxi service with transparent pricing and reliable drivers
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Route Info */}
        <div className="lg:col-span-2 space-y-6">
          <RouteOverview route={route} />
          <VehicleOptions route={route} />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <QuickBookingSidebar route={route} />
        </div>
      </div>
    </div>
  </>
  );
}
