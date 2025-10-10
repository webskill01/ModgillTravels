// app/city/[slug]/page.jsx
import { notFound } from 'next/navigation';
import cities from '@/data/cities';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AccessTime, ArrowForward, CheckCircle, CurrencyRupee, DirectionsCar, LocalAirport, LocationOn, Phone, Straighten } from '@mui/icons-material';
import Breadcrumbs from '@/components/BreadCrumbs';
import { getCitySchema } from '@/utils/citySchema';
import destinations from '@/data/destinations';

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// Helper function to get routes for a city
function getCityRoutes(cityName) {
  return destinations.filter(route => 
    route.from === cityName || route.to === cityName
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = cities.find(c => c.slug === slug);
  
  if (!city) {
    return {
      title: '404 - City Not Found',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: `https://www.modgilltravels.in/city/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://modgilltravels.in/city/${city.slug}`,
      siteName: 'ModgillTravels',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = cities.find(c => c.slug === slug);
   const citySchema = getCitySchema(city);
const cityRoutes = getCityRoutes(city.name);


  if (!city) {
    notFound();
  }

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs items={[
    { label: 'Cities', href: '/booking' },
    { label: city.name, href: `/city/${city.slug}` }
  ]} 
  />
  
        
        {/* Hero Section */}
        <section className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center">
              <LocationOnIcon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Taxi Service in {city.name}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            {city.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call +91-62849-92669</span>
            </a>
            <a
              href={`https://wa.me/916284992669?text=Hi, I want to book a taxi in ${city.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </section>
  
 {/* Popular Routes - Enhanced with MUI Icons */}
<section className="mb-12">
  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center">
      <DirectionsCar className="text-cyan-400 w-6 h-6" />
    </div>
    Popular Routes from {city.name}
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {city.popularRoutes.map((route, index) => (
      <div 
        key={index}
        className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/40 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
      >
        {/* Route Header with Arrow */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700/50">
          <h3 className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
            <span className="text-cyan-400">{route.from}</span>
            <ArrowForward className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            <span className="text-white">{route.to}</span>
          </h3>
        </div>

        {/* Route Details with Icons */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {/* Distance */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Straighten className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <span className="text-gray-400 text-xs block mb-0.5">Distance</span>
              <span className="text-white font-semibold text-sm">{route.distance}</span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <AccessTime className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <span className="text-gray-400 text-xs block mb-0.5">Duration</span>
              <span className="text-white font-semibold text-sm">{route.duration}</span>
            </div>
          </div>

          {/* Fare */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <CurrencyRupee className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <span className="text-gray-400 text-xs block mb-0.5">Starting Fare</span>
              <span className="text-cyan-400 font-bold text-lg">₹{route.fare}</span>
            </div>
          </div>

          {/* Vehicle Type (Optional) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <DirectionsCar className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="text-gray-400 text-xs block mb-0.5">Vehicle</span>
              <span className="text-white font-semibold text-sm">AC Sedan</span>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Link 
          href={`/routes/${route.from}-to-${route.to}`}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
        >
          <span>Book This Route</span>
          <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Additional Info Badge */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>Professional drivers • Clean AC cars</span>
        </div>
      </div>
    ))}
  </div>
</section>

{cityRoutes.length > 0 && (
  <section className="mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
      All Taxi Routes from {city.name}
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cityRoutes.map((route) => (
        <Link
          key={route.id}
          href={`/routes/${route.slug}`}
          className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold text-lg">
              {route.from} → {route.to}
            </h3>
            <ArrowForward className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition" />
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Distance:</span>
              <span className="text-white font-semibold">{route.distanceKm} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white font-semibold">{route.duration}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="text-gray-400">Starting at:</span>
              <span className="text-cyan-400 font-bold text-lg">
                ₹{Object.values(route.fare)[0]}
              </span>
            </div>
          </div>
          
          <div className="mt-4 text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition">
            View Details & Book →
          </div>
        </Link>
      ))}
    </div>
  </section>
)}


        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Service Areas in {city.name}
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              We provide taxi service in all major areas of {city.name}, {city.state}:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {city.serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Landmarks */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Popular Destinations in {city.name}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {city.localLandmarks.map((landmark, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500/40 transition-all"
              >
                <LocationOn className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{landmark}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Airports */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <LocalAirport className="text-cyan-400" />
            Airport Transfers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.nearbyAirports.map((airport, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-white font-bold text-lg mb-2">{airport.name}</h3>
                <p className="text-gray-400 text-sm mb-4">Distance: {airport.distance}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Reliable airport pickup and drop service from {city.name} to {airport.name}. 
                  24/7 available with professional drivers.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Why Choose ModgillTravels in {city.name}?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-300 text-sm">
                Drivers familiar with every corner of {city.name}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-300 text-sm">
                Book anytime for immediate or advance bookings
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DirectionsCar className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-300 text-sm">
                No hidden charges. Pay exactly what's quoted
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book Your Taxi in {city.name}?
          </h2>
          <p className="text-gray-400 mb-6">
            Call us now for instant booking or WhatsApp for quick confirmation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone />
              Call Now
            </a>
          </div>
        </section>
      </div>
    </div>
</>
  );
}
