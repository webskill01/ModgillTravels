// app/page.js - UPDATED WITH NEW COMPONENTS
import { InstantBookingBar } from "@/components/BookingBar";
import HeroSection from "../components/HeroSection";
import RouteCarousel from "../components/RouteCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import CitiesSection from "../components/CitiesSection";
import BlogSection from "../components/BlogSection";
import SEO from '@/components/SEO';
import { getOrganizationSchema, getLocalBusinessSchema, getFAQSchema, getWebsiteSchema } from '@/utils/structuredData';
import ServiceInfo from "@/components/ServiceInfo";

export const metadata = {
  title: "ModgillTravels - Taxi Service Patiala | Book Cab Now",
  description: "Book taxi in Patiala - one way & round trip. Professional drivers, AC vehicles, 24/7 available. Call +91-62849-92669. Transparent pricing, instant booking!",
  keywords: [
    "taxi service near me",
    "taxi agents near me", 
    "cab service patiala",
    "patiala taxi service",
    "one way cab service in patiala",
    "taxi service in patiala",
    "cab booking patiala",
    "patiala to delhi taxi",
    "taxi near me patiala",
    "best taxi service patiala",
  ],
  openGraph: {
    title: "ModgillTravels - Taxi Service Patiala | Book Cab Now",
    description: "Book taxi in Patiala - one way & round trip. Professional drivers, AC vehicles, 24/7 available. Call +91-62849-92669. Transparent pricing, instant booking!",
    type: "website",
    url: "https://modgilltravels.in",
    siteName: "ModgillTravels",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ModgillTravels - Best Taxi Service Near Me in Patiala | Cab Service Patiala"
      }
    ],
    locale: "en_IN"
  },
  alternates: {
    canonical: "https://modgilltravels.in"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      <SEO
        title="ModgillTravels - Taxi Service Patiala | Book Cab Now"
        description="Book taxi in Patiala - one way & round trip. Professional drivers, AC vehicles, 24/7 available. Call +91-62849-92669. Transparent pricing, instant booking!"
        keywords="taxi service near me, cab service patiala, one way cab service in patiala, taxi agents near me"
        url="/"
        jsonLd={[organizationSchema, localBusinessSchema, faqSchema, websiteSchema]}
      />
      
      <main className="min-h-screen">
        {/* Booking Bar */}
        <InstantBookingBar />
        
        {/* Hero Section */}
        <HeroSection />


        {/* Route Carousel */}
        <section className="max-w-6xl mx-auto px-4 ">
          <RouteCarousel />
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4">
          <WhyChooseUs />
        </section>
        <section className="max-w-6xl mx-auto px-4 space-y-12 py-8">
          <ServiceInfo />
        </section>
        {/* Cities & Blog Combined - Desktop 2 Columns, Mobile Stacked */}
         <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <BlogSection />
        </section>
      </main>
    </>
  );
}
