// app/layout.js
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://modgilltravels.in"),
  title: {
    default: "ModgillTravels",
    template: "%s | ModgillTravels",
  },
  description:
    "Professional taxi service in Patiala offering one-way and round trips to Delhi, Shimla, Manali. Experienced drivers, AC vehicles, transparent pricing. Book online now!",
  keywords: [
    "taxi service Patiala",
    "Patiala taxi",
    "Delhi to Patiala taxi",
    "cab booking Patiala",
    "one way taxi Patiala",
    "taxi to Shimla",
    "taxi to Manali",
    "Patiala to Delhi cab",
    "outstation taxi Patiala",
  ],
  authors: [{ name: "ModgillTravels", url: "https://modgilltravels.in" }],
  creator: "ModgillTravels",
  publisher: "ModgillTravels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    title: "ModgillTravels - Best Taxi Service in Patiala",
    description:
      "Professional taxi service in Patiala offering reliable transportation to Delhi, Shimla, Manali and more. Book your cab online now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ModgillTravels Taxi Service in Patiala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModgillTravels - Best Taxi Service in Patiala",
    description:
      "Professional taxi service in Patiala offering reliable transportation.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://modgilltravels.in",
  },
  category: "transportation",
};

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "ModgillTravels",
  description:
    "Professional taxi service in Patiala offering one-way and round trips to Delhi, Shimla, Manali and other destinations",
  url: "https://modgilltravels.in",
  telephone: "+91-62849-92669",
  email: "info@modgilltravels.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patiala",
    addressRegion: "Punjab",
    addressCountry: "IN",
    postalCode: "147001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.3398",
    longitude: "76.3869",
  },
  serviceArea: [
    {
      "@type": "State",
      name: "Punjab",
    },
    {
      "@type": "State",
      name: "Haryana",
    },
    {
      "@type": "State",
      name: "Himachal Pradesh",
    },
  ],
  areaServed: ["Patiala", "Delhi", "Shimla", "Manali", "Chandigarh"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taxi Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "One Way Taxi Service",
          description: "Professional one-way taxi service from Patiala",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Round Trip Taxi Service",
          description: "Comfortable round trip taxi service",
        },
      },
    ],
  },
  priceRange: "₹₹",
  paymentAccepted: ["Cash", "UPI", "Bank Transfer"],
  availableLanguage: ["English", "Hindi", "Punjabi"],
  openingHours: "Mo-Su 00:00-23:59",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-62849-92669",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://modgilltravels.in" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala, Punjab" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ModgillTravels",
            url: "https://modgilltravels.in",
          })}
        </script>
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
