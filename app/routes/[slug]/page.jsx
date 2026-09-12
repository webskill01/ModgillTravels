// app/routes/[slug]/page.jsx
import Link from "next/link";
import destinations from "@/data/destinations";
import site from "@/data/site";
import { PlaceIcon } from '@/components/Icons';
import BookCta from "@/components/ui/BookCta";
import RouteContent from "@/components/RouteContent";
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
    title: `${route.from} to ${route.to} Taxi | ${route.distanceKm} km Cab Service`,
    description: `${route.from} to ${route.to} taxi: ${route.distanceKm} km, ${route.duration}. AC vehicles, verified drivers, 24/7. Book on WhatsApp or call ${site.phone}.`,
    keywords: [
      `${route.from} to ${route.to} taxi`,
      `${route.from} ${route.to} cab`,
      `taxi service ${route.from} to ${route.to}`,
      `${route.to} taxi booking`,
      `one way taxi ${route.from}`,
      `${route.from} to ${route.to} distance`,
      `cab booking ${route.from} to ${route.to}`
    ],
    alternates: {
      canonical: `https://www.modgilltravels.in/routes/${route.slug}`,
    },
    openGraph: {
      title: `${route.from} to ${route.to} Taxi Service - ModgillTravels`,
      description: `${route.from} to ${route.to} taxi. ${route.distanceKm} km, ${route.duration}. Book on WhatsApp.`,
      url: `https://www.modgilltravels.in/routes/${route.slug}`,
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
      description: `${route.from} to ${route.to} taxi. ${route.distanceKm} km, ${route.duration}. Book on WhatsApp.`,
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
    { name: "Routes", url: "/booking" },
    { name: `${route.from} to ${route.to}`, url: `/routes/${route.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(route)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="max-w-7xl mx-auto px-5 py-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-ink-muted">
            <Link href="/" className="hover:text-brand transition">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-brand transition">Routes</Link>
            <span>/</span>
            <span className="text-ink">{route.from} to {route.to}</span>
          </div>
        </nav>

        {/* Page Header - SEO Optimized H1 */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-ink mb-2 flex items-center gap-3">
            <PlaceIcon className="w-5 h-5 text-brand" />
            {route.from} to {route.to} Taxi Service
          </h1>
          <p className="text-ink-muted text-sm sm:lg">
            {route.distanceKm} km • {route.duration} • Verified drivers • Available 24/7
          </p>
        </div>

        {/* MOBILE FIRST: Main Booking Content */}
        {/* On mobile: Sidebar appears first, then Route Overview, then Vehicles */}
        {/* On desktop: 2-column layout with sidebar on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          

          {/* Desktop: Left Column (order-2 on mobile, order-1 on desktop) */}
          <div className="lg:col-span-2 lg:order-2 space-y-6">
          </div>
          {/* Mobile: Sidebar appears FIRST (order-1 on mobile, order-2 on desktop) */}
          <div className="lg:col-span-1 lg:order-1">
            <div className="rounded-2xl border border-line bg-surface p-5 lg:sticky lg:top-24">
              <h2 className="text-lg mb-1">Book this route</h2>
              <p className="text-sm text-ink-muted mb-4">
                Send a message with your pickup point and time. We reply with the
                driver and vehicle details.
              </p>
              <BookCta route={route} className="flex-col [&>*]:w-full" />
            </div>
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
