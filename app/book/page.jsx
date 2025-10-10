import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import BookingSummary from '@/components/BookingSummary';
import { getOrganizationSchema } from '@/utils/structuredData';

export const metadata = {
  title: "Book Taxi Online - Instant Confirmation | ModgillTravels Patiala",
  description: "Book taxi online with ModgillTravels. Get instant WhatsApp confirmation for one-way & round-trip cab booking in Patiala, Punjab. Professional drivers, transparent pricing, 24/7 support. Book now!",
  keywords: "book taxi online, cab booking, instant taxi booking, ModgillTravels booking, Patiala taxi booking, one way cab, round trip taxi, online cab booking, taxi near me, book cab Patiala",
  
  alternates: {
    canonical: 'https://www.modgilltravels.in/booking',
  },
  
  openGraph: {
    title: "Book Taxi Online - Instant Confirmation | ModgillTravels",
    description: "Complete your taxi booking in 3 steps. Instant WhatsApp confirmation, professional drivers, transparent pricing. Available 24/7 in Patiala.",
    url: "https://modgilltravels.in/booking",
    siteName: "ModgillTravels",
    images: [
      {
        url: "https://modgilltravels.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ModgillTravels - Book Taxi Online with Instant Confirmation"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Book Taxi Online - Instant Confirmation | ModgillTravels",
    description: "Instant taxi booking with WhatsApp confirmation. Professional service available 24/7 in Patiala.",
    images: ["https://modgilltravels.in/og-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

function BookingPageContent() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-5 md:py-8 relative">
        {/* Page Header */}
        <div className="text-center mb-6 md:mb-8 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
            Book Your Taxi Online 
          </h1>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in your travel details below and get instant confirmation for your taxi booking in Patiala
          </p>
        </div>

        {/* Main Booking Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 overflow-hidden">
          {/* Left: Booking Form */}
          <div className="lg:col-span-3 min-w-0">
            <BookingForm />
          </div>

          {/* Right: Booking Summary */}
          <div className="lg:col-span-1 min-w-0">
            <BookingSummary />
          </div>
        </div>

        {/* Trust Indicators - Enhanced with Semantic HTML */}
        <section className="mt-8 md:mt-12" aria-label="Why Book With Us">
          <h2 className="sr-only">Our Service Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
            
            <article className="flex flex-col items-center p-4 md:p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-white/10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-400 text-xl md:text-2xl" aria-hidden="true">✓</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
                Instant Confirmation
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Get booking confirmation via WhatsApp within 2 minutes of submitting your request
              </p>
            </article>
            
            <article className="flex flex-col items-center p-4 md:p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-white/10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-400 text-lg md:text-xl font-bold" aria-hidden="true">24/7</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
                24/7 Customer Support
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Round-the-clock assistance via phone and WhatsApp for booking support and emergencies
              </p>
            </article>
            
            <article className="flex flex-col items-center p-4 md:p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-white/10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-purple-400 text-xl md:text-2xl font-bold" aria-hidden="true">₹</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
                Transparent Pricing
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                No hidden charges or extra fees. Pay exactly what you see at the time of booking
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function BookPage() {
  // Structured Data for SEO
  const organizationSchema = getOrganizationSchema();
  
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book Taxi Online - ModgillTravels",
    "description": "Complete your taxi booking with instant WhatsApp confirmation. Professional drivers, transparent pricing, available 24/7.",
    "url": "https://modgilltravels.in/booking",
    "mainEntity": {
      "@type": "Service",
      "name": "Online Taxi Booking Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ModgillTravels",
        "telephone": "+91-62849-92669",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Patiala",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      },
      "areaServed": ["Punjab", "Haryana", "Himachal Pradesh", "Delhi NCR"],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://modgilltravels.in/booking",
        "servicePhone": "+91-62849-92669"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://modgilltravels.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Book Taxi",
          "item": "https://modgilltravels.in/booking"
        }
      ]
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://modgilltravels.in/booking",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book a taxi online with ModgillTravels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply fill out the booking form with your pickup location, destination, date, time, and contact details. You'll receive instant confirmation via WhatsApp within 2 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is advance payment required to book a taxi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a ₹200 advance payment is required to confirm your booking. This ensures your ride is reserved and a driver is allocated."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods are accepted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept Cash, UPI, Credit/Debit Cards, and Bank Transfer for taxi bookings."
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, bookingSchema, faqSchema])
        }}
      />

      <Suspense fallback={
        <div className="max-w-6xl mx-auto px-4 md:px-5 py-8">
          <div className="animate-pulse">
            {/* Header Skeleton */}
            <div className="text-center mb-8">
              <div className="h-8 md:h-10 bg-gray-700 rounded w-3/4 md:w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-full md:w-2/3 mx-auto"></div>
            </div>
            
            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="lg:col-span-3">
                <div className="h-96 md:h-[500px] bg-gray-700 rounded-2xl"></div>
              </div>
              <div className="lg:col-span-1">
                <div className="h-64 md:h-80 bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Trust Indicators Skeleton */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-32 bg-gray-700 rounded-xl"></div>
              <div className="h-32 bg-gray-700 rounded-xl"></div>
              <div className="h-32 bg-gray-700 rounded-xl"></div>
            </div>
          </div>
        </div>
      }>
        <BookingPageContent />
      </Suspense>
    </>
  );
}