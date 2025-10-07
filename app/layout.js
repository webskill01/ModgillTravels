// app/layout.js
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://modgilltravels.in"),
  title: {
    default: "ModgillTravels - Taxi Service Patiala | Book Cab Now",
    template: "%s | ModgillTravels - Best Taxi Service in Patiala",
  },
  description:
    "Looking for taxi service near me? ModgillTravels offers best cab service in Patiala with one way taxi, round trip options. Trusted taxi agents near me with professional drivers, AC vehicles, transparent pricing. Available 24/7 for local & outstation trips to Delhi, Shimla, Manali. Book now!",
  keywords: [
    "taxi service near me",
    "taxi agents near me",
    "cab service patiala",
    "patiala taxi service",
    "one way cab service in patiala",
    "taxi service in patiala",
    "cab booking patiala",
    "taxi near me patiala",
    "best taxi service patiala",
    "local taxi service patiala",
    "taxi booking near me",
    "cab service near me",
    "one way taxi patiala",
    "round trip taxi patiala",
    "outstation taxi patiala",
    "airport taxi patiala",
    "24x7 taxi service patiala",
    "affordable cab service patiala",
    "patiala to delhi taxi",
    "delhi to patiala taxi",
    "patiala to chandigarh cab",
    "patiala to shimla taxi",
    "patiala to manali cab",
    "patiala to ludhiana taxi",
    "patiala to ambala cab",
  ],
  authors: [{ name: "ModgillTravels", url: "https://modgilltravels.in" }],
  creator: "ModgillTravels",
  publisher: "ModgillTravels",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://modgilltravels.in",
    siteName: "ModgillTravels",
    title: "ModgillTravels - Taxi Service Patiala | Book Cab Now",
    description:
      "Book reliable taxi service near me in Patiala. One way cab service, professional drivers, 24/7 availability. Best taxi agents near me with transparent pricing for local & outstation travel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ModgillTravels - Best Taxi Service Near Me in Patiala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModgillTravels - Taxi Service Patiala | Book Cab Now",
    description:
      "Book reliable taxi service near me in Patiala. One way cab service, professional drivers, 24/7 availability.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://modgilltravels.in",
  },
  category: "transportation",
  verification: {
    google: "your-google-verification-code",
  },
};

// Business structured data
const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "ModgillTravels",
  "alternateName": "Modgill Travels - Taxi Service Near Me Patiala",
  "description":
    "Best taxi service near me in Patiala offering one way cab service, round trip taxi, and outstation travel. Professional drivers, AC vehicles, transparent pricing. Available 24/7 for local & outstation trips.",
  "url": "https://modgilltravels.in",
  "telephone": "+91-62849-92669",
  "email": "modgilltravels@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Urban Estate, Phase 2 Near Police Station",
    "addressLocality": "Patiala",
    "addressRegion": "Punjab",
    "addressCountry": "IN",
    "postalCode": "147001",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3398",
    "longitude": "76.3869",
  },
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
  ],
  "serviceArea": [
    {
      "@type": "State",
      "name": "Punjab",
    },
    {
      "@type": "State",
      "name": "Haryana",
    },
    {
      "@type": "State",
      "name": "Himachal Pradesh",
    },
    {
      "@type": "State",
      "name": "Delhi",
    },
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Patiala",
    },
    {
      "@type": "City",
      "name": "Delhi",
    },
    {
      "@type": "City",
      "name": "Chandigarh",
    },
    {
      "@type": "City",
      "name": "Shimla",
    },
    {
      "@type": "City",
      "name": "Manali",
    },
    {
      "@type": "City",
      "name": "Ludhiana",
    },
    {
      "@type": "City",
      "name": "Ambala",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Taxi Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One Way Cab Service in Patiala",
          "description": "One way taxi service from Patiala to Delhi, Chandigarh, Shimla, Manali with no return fare. Pay only for your journey.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Round Trip Taxi Service Patiala",
          "description": "Comfortable round trip taxi service from Patiala for outstation travel with professional drivers.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Taxi Service Patiala",
          "description": "Local cab service for city travel, shopping, medical appointments within Patiala.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Taxi Service",
          "description": "Airport pickup and drop service from Patiala to nearby airports including Delhi and Chandigarh.",
        },
      },
    ],
  },
  "paymentAccepted": ["Cash", "UPI", "Credit Card", "Debit Card", "Bank Transfer"],
  "availableLanguage": ["English", "Hindi", "Punjabi"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-62849-92669",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "areaServed": ["IN-PB", "IN-HR", "IN-HP", "IN-DL"],
    "availableLanguage": ["English", "Hindi", "Punjabi"],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1",
  },
  "sameAs": [
    "https://wa.me/916284992669",
  ],
};

// Website structured data
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ModgillTravels - Taxi Service Near Me in Patiala",
  "url": "https://modgilltravels.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://modgilltravels.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0b0f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo-targeting for local SEO */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala, Punjab" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        
        {/* Additional SEO meta tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        
        {/* Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
<script dangerouslySetInnerHTML={{
  __html: `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `
}} />

      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
