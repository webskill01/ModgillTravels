// app/city/[slug]/page.jsx
import { notFound } from 'next/navigation';
import site from "@/data/site";
import Button from "@/components/ui/Button";
import cities from '@/data/cities';
import Link from 'next/link';
import { PhoneIcon, WhatsAppIcon, LocationOnIcon, AccessTime, ArrowForward, CheckCircle, CurrencyRupee, DirectionsCar, LocalAirport, LocationOn, Phone, Straighten } from '@/components/Icons';
import Breadcrumbs from '@/components/BreadCrumbs';
import { getCitySchema } from '@/utils/citySchema';
import destinations from '@/data/destinations';

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// Not every popularRoutes pair has a /routes page — chandigarh->manali and
// friends are in data/cities.js but not in data/destinations.js. Linking them
// anyway produced 13 crawlable soft-404s sitting at depth 3 in the link graph,
// all sharing one title. Fall back to the routes hub instead.
function routeHref(from, to) {
  const slug = `${from.toLowerCase()}-to-${to.toLowerCase()}`;
  return destinations.some((r) => r.slug === slug) ? `/routes/${slug}` : '/booking';
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
      url: `https://www.modgilltravels.in/city/${city.slug}`,
      siteName: 'ModgillTravels',
      type: 'website',
      // patch_045: Add OG image to city pages
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `Taxi Service in ${city.name} — ModgillTravels`,
        }
      ],
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

  if (!city) {
    notFound();
  }

  const citySchema = getCitySchema(city);
  const cityRoutes = getCityRoutes(city.name);

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
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-soft border border-brand rounded-full flex items-center justify-center">
              <LocationOnIcon className="w-6 h-6 sm:w-7 sm:h-7 text-brand" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4">
            Taxi Service in {city.name}
          </h1>
          <p className="text-ink-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            {city.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="call" href={`tel:${site.phone}`} className="justify-center"><PhoneIcon className="w-5 h-5" />
              <span>Call +91-62849-92669</span></Button>
            <Button variant="whatsapp" external href={`https://wa.me/916284992669?text=Hi, I want to book a taxi in ${city.name}`} className="justify-center"><WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Booking</span></Button>
          </div>
        </section>

 {/* Popular Routes - Enhanced with MUI Icons */}
<section className="mb-12">
  <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 flex items-center gap-3">
    <div className="w-10 h-10 bg-accent-soft border border-brand rounded-full flex items-center justify-center">
      <DirectionsCar className="text-brand w-6 h-6" />
    </div>
    Popular Routes from {city.name}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {city.popularRoutes.map((route, index) => (
      <div
        key={index}
        className="group bg-white border border-line rounded-xl p-5 sm:p-6 hover:border-brand transition-all hover:shadow-xl hover:shadow-md"
      >
        {/* Route Header with Arrow */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-line/50">
          <h3 className="text-ink font-bold text-lg sm:text-xl flex items-center gap-2">
            <span className="text-brand">{route.from}</span>
            <ArrowForward className="w-5 h-5 text-ink-muted group-hover:text-brand group-hover:translate-x-1 transition-all" />
            <span className="text-ink">{route.to}</span>
          </h3>
        </div>

        {/* Route Details with Icons */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {/* Distance */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
              <Straighten className="w-4 h-4 text-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-xs block mb-0.5">Distance</span>
              <span className="text-ink font-semibold text-sm">{route.distance}</span>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
              <AccessTime className="w-4 h-4 text-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-xs block mb-0.5">Duration</span>
              <span className="text-ink font-semibold text-sm">{route.duration}</span>
            </div>
          </div>

          {/* Fare */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
              <CurrencyRupee className="w-4 h-4 text-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-xs block mb-0.5">Starting Fare</span>
              <span className="text-brand font-bold text-lg">{route.distance}</span>
            </div>
          </div>

          {/* Vehicle Type (Optional) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
              <DirectionsCar className="w-4 h-4 text-brand" />
            </div>
            <div>
              <span className="text-ink-muted text-xs block mb-0.5">Vehicle</span>
              <span className="text-ink font-semibold text-sm">AC Sedan</span>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Link
          href={routeHref(route.from, route.to)}
          className="w-full bg-brand hover:bg-brand-hover text-white px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-md"
        >
          <span>Book This Route</span>
          <ArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Additional Info Badge */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-ink-muted">
          <CheckCircle className="w-4 h-4 text-brand" />
          <span>Professional drivers • Clean AC cars</span>
        </div>
      </div>
    ))}
  </div>
</section>

{cityRoutes.length > 0 && (
  <section className="mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
      All Taxi Routes from {city.name}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cityRoutes.map((route) => (
        <Link
          key={route.id}
          href={`/routes/${route.slug}`}
          className="group bg-white border border-line rounded-xl p-5 hover:border-brand transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-ink font-bold text-lg">
              {route.from} → {route.to}
            </h3>
            <ArrowForward className="w-5 h-5 text-ink-muted group-hover:text-brand transition" />
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-muted">Distance:</span>
              <span className="text-ink font-semibold">{route.distanceKm} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-muted">Duration:</span>
              <span className="text-ink font-semibold">{route.duration}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-line">
              <span className="text-ink-muted">Starting at:</span>
              <span className="text-brand font-bold text-lg">
                {route.distanceKm} km
              </span>
            </div>
          </div>

          <div className="mt-4 text-brand text-sm font-semibold group-hover:text-brand transition">
            View Details & Book →
          </div>
        </Link>
      ))}
    </div>
  </section>
)}


        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
            Service Areas in {city.name}
          </h2>

          <div className="bg-white border border-line rounded-xl p-6">
            <p className="text-ink-muted mb-4">
              We provide taxi service in all major areas of {city.name}, {city.state}:
            </p>
            {/* geo_010: neighborhood-level paragraph for hyperlocal keywords */}
            <p className="text-ink-muted text-sm mb-4">For Patiala bookings, we serve Urban Estate (Phase 1 &amp; 2), Rajpura Road near the bus stand, Sangrur Road, Leela Bhawan, Tripuri, New Lal Bagh Colony, and Model Town. Need a cab near Rajindra Hospital, Punjabi University, or Qila Mubarak? We pick up from your exact location within 30 minutes, 24/7.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {city.serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-ink-muted">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Landmarks */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
            Popular Destinations in {city.name}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {city.localLandmarks.map((landmark, index) => (
              <div
                key={index}
                className="bg-white border border-line rounded-lg p-4 text-center hover:border-brand transition-all"
              >
                <LocationOn className="w-8 h-8 text-brand mx-auto mb-2" />
                <p className="text-ink text-sm font-medium">{landmark}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Airports */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 flex items-center gap-3">
            <LocalAirport className="text-brand" />
            Airport Transfers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.nearbyAirports.map((airport, index) => (
              <div
                key={index}
                className="bg-white border border-line rounded-xl p-6"
              >
                <h3 className="text-ink font-bold text-lg mb-2">{airport.name}</h3>
                <p className="text-ink-muted text-sm mb-4">Distance: {airport.distance}</p>
                {/* geo_006 + patch_019: Airport transfer paragraph rewrite */}
                <p className="text-ink-muted text-sm leading-relaxed">
                  Airport taxi from {city.name} to {airport.name} — {airport.distance} away. Pre-booked pickup with flight tracking, meet &amp; greet at the terminal, and guaranteed on-time arrival. Book at least 2 hours before departure — call or WhatsApp +91-62849-92669.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-accent-soft border border-brand rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6 text-center">
            Why Choose ModgillTravels in {city.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-ink font-semibold mb-2">Local Expertise</h3>
              <p className="text-ink-muted text-sm">
                Drivers familiar with every corner of {city.name}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-ink font-semibold mb-2">24/7 Availability</h3>
              <p className="text-ink-muted text-sm">
                Book anytime for immediate or advance bookings
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <DirectionsCar className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-ink font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-ink-muted text-sm">
                No hidden charges. Pay exactly what&apos;s quoted
              </p>
            </div>
          </div>
        </section>

        {/* geo_005 + patch_020: FAQ section with FAQPage microdata */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">Frequently Asked Questions — Taxi Service in {city.name}</h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">How far is {city.name} from Delhi by road?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">Patiala to Delhi is about 250 km via NH44 and takes 4.5 to 5 hours in normal traffic. Sedan, Ertiga and Innova Crysta are all available, one-way or round trip. Send your pickup point on WhatsApp at +91-62849-92669 and we confirm the vehicle and a fixed quote before you travel.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">How do I book a local taxi in {city.name}?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">To book a local taxi in {city.name}, WhatsApp or call ModgillTravels at +91-62849-92669. Share your pickup location, destination, and time — we confirm your cab within 15 minutes. We cover all major areas of {city.name} including neighborhoods listed in the service areas section above. Available 24/7.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">Does ModgillTravels cover airport transfers from {city.name}?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">Yes. We run airport transfers from {city.name} to Chandigarh Airport (75 km from Patiala), Delhi IGI (260 km) and Amritsar Airport (230 km). Every airport booking includes flight tracking, so the pickup shifts if your flight does. Book at least 2 hours before departure.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">Is there a cab service available near me in {city.name} right now?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">Yes. ModgillTravels provides 24/7 cab service across all major areas of {city.name}. Call or WhatsApp +91-62849-92669 for immediate or advance booking. Drivers are available around the clock including late nights, early mornings, and public holidays.</p>
              </div>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">How long does the taxi from {city.name} to Manali take?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">The Patiala to Manali distance is about 357 km by road via Chandigarh, Bilaspur, Mandi and Kullu. The drive takes 8 to 9 hours. ModgillTravels recommends an Innova Crysta for this hill route due to mountain terrain and luggage capacity. Book at least 24 hours in advance for Manali trips.</p>
              </div>
            </div>

            {/* patch_018: neighborhood-level service areas paragraph */}
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white border border-line rounded-xl p-5">
              <h3 itemProp="name" className="text-ink font-semibold mb-3">Does ModgillTravels pick up from all neighborhoods in {city.name}?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-ink-muted text-sm leading-relaxed">We cover all {city.name} neighborhoods for taxi bookings — {city.serviceAreas.join(', ')}. If you need a cab near Rajindra Hospital, Punjabi University, or Qila Mubarak, we pick up from your exact location within 30 minutes of confirmation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-white border border-brand rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            Ready to Book Your Taxi in {city.name}?
          </h2>
          <p className="text-ink-muted mb-6">
            Call us now for instant booking or WhatsApp for quick confirmation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="call" href={`tel:${site.phone}`} className="justify-center"><Phone />
              Call Now</Button>
          </div>
        </section>
      </div>
    </div>
</>
  );
}
