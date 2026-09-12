// app/page.js - UPDATED WITH NEW COMPONENTS
import Link from "next/link";
import Image from "next/image";
import BlogSection from "../components/BlogSection";
import SEO from '@/components/SEO';
import { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema } from '@/utils/structuredData';
import FAQAccordion from "@/components/FAQAccordion";
import RouteFinder from "@/components/RouteFinder";
import BookCta from "@/components/ui/BookCta";
import { Section, Container, Badge } from "@/components/ui";
import site from "@/data/site";
import { VerifiedIcon, AccessTimeIcon, WhatsAppIcon, StarIcon } from "@/components/Icons";

export const metadata = {
  title: "Taxi Service in Patiala | 24/7 Cab Booking — ModgillTravels",
  description: "Patiala's 24/7 taxi service. One-way and round trip to Delhi, Chandigarh, Shimla and Manali. Verified drivers, AC vehicles. Call +91-62849-92669.",
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
    title: "Taxi Service in Patiala | 24/7 Cab Booking — ModgillTravels",
    description: "Patiala's 24/7 taxi service. One-way and round trip to Delhi, Chandigarh, Shimla and Manali. Verified drivers, AC vehicles. Call +91-62849-92669.",
    type: "website",
    url: "https://www.modgilltravels.in",
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
    canonical: "https://www.modgilltravels.in"
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

// Schema blocks from schema-blocks.json (schema_002, schema_004, schema_005, schema_006, schema_007, schema_008)
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a taxi from Patiala to Delhi cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Patiala to Delhi road distance is about 250 km via NH44, and the drive takes 4.5 to 5 hours in normal traffic. Sedan, Ertiga and Innova Crysta are all available. Send your pickup point and travel time on WhatsApp and we confirm the vehicle and a fixed quote before the trip."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Patiala from Shimla by taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Patiala to Shimla is about 170 km by road and takes 4 to 5 hours, climbing through Kalka and Solan. An Innova or Ertiga is the sensible choice for the hill section. Book a day ahead for morning departures, which avoid the afternoon hill traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to travel from Patiala to Manali by taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The journey from Patiala to Manali by taxi takes approximately 7-8 hours covering about 320 km. Travel time varies based on traffic conditions and road conditions. We recommend starting early in the morning or booking an overnight taxi service for comfort."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best taxi service in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ModgillTravels is the best taxi service in Patiala with a 5.0/5 rating from 31 Google reviews. We offer professional drivers, well-maintained AC vehicles, 24/7 availability, and transparent pricing. Our services include one-way taxis, round trips, airport transfers, and corporate cab services across Punjab and neighboring states."
      }
    },
    {
      "@type": "Question",
      "name": "How to book a cab from Patiala to Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a cab from Patiala to Delhi in 3 easy ways: 1) Use our online booking form at ModgillTravels.in and select your route, 2) WhatsApp us at +91-62849-92669 with your travel details, or 3) Call us directly. Instant confirmation and pricing within minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What type of cars are available for Patiala to Delhi taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer multiple vehicle options for Patiala to Delhi: Sedan (4 passengers, most economical), Innova (6-7 passengers, comfortable), Ertiga (6 passengers, mid-range), and Tempo Traveller (8-13 passengers for groups). All vehicles are air-conditioned, well-maintained, and driven by professional drivers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a one-way taxi from Patiala to Chandigarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ModgillTravels offers one-way taxi service from Patiala to Chandigarh. The distance is about 68 km and the drive takes around 1.5 hours. You pay only for the one-way trip without return charges. Ideal for airport transfers or relocation."
      }
    },
    {
      "@type": "Question",
      "name": "Does ModgillTravels offer 24-hour taxi service in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ModgillTravels operates 24/7, including nights, weekends, and holidays. Whether you need an early morning airport drop or a late-night travel, we are available round the clock. Our drivers are trained to handle night travel safely and professionally."
      }
    },
    {
      "@type": "Question",
      "name": "What is the distance from Patiala to Manali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The distance from Patiala to Manali is approximately 320 km via the Chandigarh-Ambala-Kalka-Shimla-Kufri-Manali route. Total travel time is about 7-8 hours depending on traffic and road conditions. This is a scenic hill station route with beautiful views."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an Innova Crysta taxi cost from Patiala to Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Innova Crysta seats 6 to 7 with room for luggage, which makes it the usual pick for families on the 250 km Patiala to Delhi run. Tell us the group size on WhatsApp and we confirm the vehicle and a fixed quote before you travel."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a taxi service from Patiala to Amritsar Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ModgillTravels provides dedicated airport taxi service from Patiala to Sri Guru Ramdas Ji International Airport (ATQ) in Amritsar. Distance is 120 km, journey takes 2.5-3 hours. We offer pickups from any location in Patiala at fixed, transparent rates."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a corporate cab service in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ModgillTravels offers dedicated corporate cab service in Patiala for companies, businesses, and organizations. We provide monthly contracts, on-demand bookings, professional drivers, and customized service. Ideal for employee commute, business travel, and client transport."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best vehicle for a Patiala to Shimla trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Patiala to Shimla (170 km, 4-5 hour journey), we recommend Sedan for couples, Innova for families (6+ people), or Ertiga for comfort. Innova is the most popular choice as it offers good space, comfort for the hilly route, and reasonable pricing. All vehicles have strong air conditioning for the hill station climate."
      }
    },
    {
      "@type": "Question",
      "name": "How early should I book a taxi from Patiala to Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 12-24 hours in advance for best availability and rates. However, we also accept last-minute bookings (2-3 hours before travel). For bulk bookings, group travel, or corporate contracts, notify us 48 hours ahead for special pricing and dedicated vehicles."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods does ModgillTravels accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ModgillTravels accepts multiple payment methods: Cash on ride, UPI (Google Pay, PhonePe, Paytm), Credit Card, Debit Card, and Bank Transfer. Pay after the journey or book online with advance payment. All transactions are secure and receipts are provided immediately."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Taxi and Transportation",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.modgilltravels.in/#organization",
    "name": "ModgillTravels"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Taxi Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outstation Taxi from Patiala",
          "description": "Outstation taxi service from Patiala to Delhi, Shimla, Manali, Amritsar, Chandigarh with professional drivers and AC vehicles.",
          "areaServed": ["Delhi", "Shimla", "Manali", "Amritsar", "Chandigarh"],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "2500-4500"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One-Way Taxi Service",
          "description": "One-way taxi booking from Patiala without return charges. Ideal for airport transfers and relocations.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "2000-4500"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Round-Trip Cab Booking",
          "description": "Round-trip taxi service with return journey included. Perfect for family outings and day trips.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "3000-6000"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfer",
          "description": "Airport pickup and drop service to Chandigarh, Delhi, and Amritsar airports with real-time flight tracking.",
          "areaServed": ["Chandigarh International Airport", "Indira Gandhi International Airport", "Sri Guru Ramdas Ji International Airport"],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "1500-4000"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Travel Service",
          "description": "Dedicated corporate cab service for companies with flexible monthly contracts and on-demand bookings.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "CustomQuote"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Taxi Service in Patiala",
          "description": "Local cab service for city travel within Patiala for shopping, medical appointments, and daily commute.",
          "areaServed": "Patiala",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "100-300"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hourly Rental Cab",
          "description": "Hourly rental taxi for flexible local travel with drivers available for 2-8 hour bookings.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "400-1200"
          }
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.modgilltravels.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.modgilltravels.in/#services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Book Taxi",
      "item": "https://www.modgilltravels.in/booking"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.modgilltravels.in/#webpage",
  "name": "ModgillTravels - Best Taxi Service Near Me in Patiala",
  "url": "https://www.modgilltravels.in/",
  "description": "Book reliable taxi service near me in Patiala. ModgillTravels offers one-way cab service, outstation taxi to Delhi, Shimla, Manali. Professional drivers, AC vehicles, 24/7 service.",
  "isPartOf": {
    "@id": "https://www.modgilltravels.in/#website"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.modgilltravels.in/og-image.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@id": "https://www.modgilltravels.in/#organization"
  },
  "datePublished": "2025-01-01"
};


export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <SEO
        title="Taxi Service in Patiala | 24/7 Cab Booking — ModgillTravels"
        description="Book a taxi in Patiala 24/7 — one way and round trip to Delhi, Chandigarh, Shimla and Manali. Verified drivers, AC vehicles. Call or WhatsApp +91-62849-92669."
        keywords="taxi service near me, cab service patiala, one way cab service in patiala, taxi agents near me"
        url="/"
        jsonLd={[organizationSchema, localBusinessSchema, websiteSchema]}
      />

      <main>
        {/* 1 — Hero. One headline, one paragraph, the two booking actions. */}
        <Section tight>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Badge tone="soft" className="mb-4">
                <StarIcon className="h-3.5 w-3.5" />
                {site.rating.value} from {site.rating.count} Google reviews
              </Badge>
              <h1>Taxi service in Patiala, available 24/7</h1>
              <p className="mt-4 text-lg text-ink-muted">
                ModgillTravels runs outstation cabs, airport transfers and local
                rides across Punjab, Haryana, Delhi and Himachal Pradesh. Send a
                WhatsApp message and we reply within about 15 minutes with the
                driver, the vehicle and a quote fixed before you travel.
              </p>
              <BookCta size="lg" className="mt-6" />
            </div>

            {/* LCP element, so it carries `priority` and explicit dimensions —
                no layout shift while it loads. Order is set so it sits under
                the copy on phones and beside it from lg up. */}
            <div className="order-first lg:order-last">
              <Image
                src="/car-caption.png"
                alt="ModgillTravels outstation taxi — Patiala to Delhi, Shimla, Manali and Chandigarh, with professional drivers and AC vehicles."
                width={640}
                height={420}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full max-w-lg mx-auto lg:ml-auto lg:mr-0"
                priority
              />
            </div>
          </div>
        </Section>

        {/* 2 — Route finder. The interactive block; replaces the hero form
            and the carousel, and links straight to the pages that rank. */}
        <Section
          tight
          surface
          title="Find your route"
          lead="Distances and travel times for every route we run from Patiala."
        >
          <RouteFinder />
        </Section>

        {/* 3 — Trust row. One row, not a section. */}
        <Section tight>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              [`${site.rating.value} ★`, `${site.rating.count} Google reviews`],
              ["24/7", "Every day of the year"],
              [site.tripsCompleted, "Trips completed"],
              ["10", "Cities served"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-line bg-white p-4 text-center"
              >
                <dt className="text-2xl font-semibold text-brand">
                  {value}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 4 — Three benefits, which is the cap the layout is built around. */}
        <Section
          tight
          surface
          title="Why book with ModgillTravels"
          lead="Serving Patiala since 2025, with 5,000+ completed trips across Punjab and NCR."
        >
          <ul className="grid gap-4 sm:grid-cols-3">
            {[
              [
                <VerifiedIcon key="i" className="h-6 w-6" />,
                "Verified drivers",
                "Background-checked and licensed, and they know these highways. Sedan, Ertiga and Innova Crysta, all air-conditioned with GPS tracking.",
              ],
              [
                <AccessTimeIcon key="i" className="h-6 w-6" />,
                "Available 24/7",
                "Outstation runs to Delhi (250 km), Chandigarh (68 km), Shimla (170 km) and Manali (357 km), plus local Patiala trips and airport transfers. Early flights and late arrivals included.",
              ],
              [
                <WhatsAppIcon key="i" className="h-6 w-6" />,
                "Booked on WhatsApp",
                "No form and no account. Message your pickup point and time; we confirm the driver and a fixed quote before the trip, with no surge pricing.",
              ],
            ].map(([icon, title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-line bg-white p-5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-ink">
                  {icon}
                </span>
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-muted">
            Serving all of Patiala — Urban Estate, Rajindra Hospital, Punjabi
            University, Leela Bhawan and Tripuri — and every major outstation
            route across Punjab, Haryana and Himachal Pradesh.{" "}
            <Link
              href="/about"
              className="font-semibold text-brand underline underline-offset-2"
            >
              More about us
            </Link>
            .
          </p>
        </Section>

        {/* 5 — Latest posts, then the FAQ, which carries the FAQPage schema. */}
        <Section tight>
          <BlogSection />
        </Section>

        <Section tight surface title="Frequently asked questions">
          <FAQAccordion />
        </Section>
      </main>
    </>
  );
}
