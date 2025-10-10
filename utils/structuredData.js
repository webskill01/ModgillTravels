// utils/structuredData.js

/**
 * Organization Schema - Main business entity
 * Used for brand recognition and knowledge graph
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ModgillTravels",
  "alternateName": "Modgill Travels Taxi Service",
  "url": "https://modgilltravels.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://modgilltravels.in/logo.png",
    "width": 250,
    "height": 60
  },
  "image": "https://modgilltravels.in/og-image.jpg",
  "description": "Professional taxi service in Patiala offering one way cab service, round trip taxis, and outstation travel. Available 24/7 with verified drivers.",
  "telephone": "+91-62849-92669",
  "email": "info@modgilltravels.in",
  "foundingDate": "2015",
  "priceRange": "₹₹",
  "paymentAccepted": ["Cash", "UPI", "Credit Card", "Debit Card"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Urban Estate, Phase 2 Near Police Station",
    "addressLocality": "Patiala",
    "addressRegion": "Punjab",
    "postalCode": "147001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3398",
    "longitude": "76.3869"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-62849-92669",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": ["IN-PB", "IN-HR", "IN-HP", "IN-DL"],
      "availableLanguage": ["English", "Hindi", "Punjabi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-62849-92669",
      "contactType": "reservations",
      "availableLanguage": ["English", "Hindi", "Punjabi"]
    }
  ],
  "sameAs": [
    "https://wa.me/916284992669"
  ]
});

/**
 * Local Business Schema - Enhanced TaxiService with local SEO
 * Helps with "near me" searches and Google Maps
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["TaxiService", "LocalBusiness"],
  "@id": "https://modgilltravels.in/#organization", // Added ID for reference
  "name": "ModgillTravels - Best Taxi Service Near Me in Patiala",
  "alternateName": "Modgill Travels Cab Service",
  "description": "Looking for taxi service near me in Patiala? ModgillTravels offers reliable cab service with professional drivers. One way taxi, round trip, airport transfers available 24/7. Best taxi agents in Patiala for local and outstation travel.",
  "url": "https://modgilltravels.in",
  "telephone": "+91-62849-92669",
  "email": "info@modgilltravels.in",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": ["Cash", "UPI", "Google Pay", "PhonePe", "Paytm", "Credit Card", "Debit Card"],
  "image": [
    "https://modgilltravels.in/og-image.jpg",
    "https://modgilltravels.in/car-caption.png"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Urban Estate, Phase 2 Near Police Station",
    "addressLocality": "Patiala",
    "addressRegion": "Punjab",
    "postalCode": "147001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3398",
    "longitude": "76.3869"
  },
  "hasMap": "https://www.google.com/maps/place/30.3398,76.3869",
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "serviceArea": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "30.3398",
        "longitude": "76.3869"
      },
      "geoRadius": "300000"
    },
    {
      "@type": "State",
      "name": "Punjab"
    },
    {
      "@type": "State",
      "name": "Haryana"
    },
    {
      "@type": "State",
      "name": "Himachal Pradesh"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Patiala", "sameAs": "https://en.wikipedia.org/wiki/Patiala" },
    { "@type": "City", "name": "Delhi", "sameAs": "https://en.wikipedia.org/wiki/Delhi" },
    { "@type": "City", "name": "Chandigarh", "sameAs": "https://en.wikipedia.org/wiki/Chandigarh" },
    { "@type": "City", "name": "Ludhiana" },
    { "@type": "City", "name": "Amritsar" },
    { "@type": "City", "name": "Jalandhar" },
    { "@type": "City", "name": "Ambala" },
    { "@type": "City", "name": "Shimla", "sameAs": "https://en.wikipedia.org/wiki/Shimla" },
    { "@type": "City", "name": "Manali", "sameAs": "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh" }
  ],
  "slogan": "Best Taxi Service Near Me in Patiala - Available 24/7",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Taxi & Cab Services in Patiala",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "One Way Cab Service",
          "name": "One Way Taxi Service in Patiala",
          "description": "Affordable one way cab service from Patiala to Delhi, Chandigarh, Shimla, Manali. No return fare charges. Pay only for your journey.",
          "provider": {
            "@type": "Organization",
            "name": "ModgillTravels"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "INR",
          "price": "10"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Round Trip Taxi",
          "name": "Round Trip Taxi Service Patiala",
          "description": "Round trip cab booking from Patiala for outstation travel. Comfortable AC vehicles with professional drivers.",
          "provider": {
            "@type": "Organization",
            "name": "ModgillTravels"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Airport Taxi",
          "name": "Airport Taxi Service Patiala",
          "description": "Reliable airport transfer service from Patiala to Delhi Airport, Chandigarh Airport. Available 24/7 with flight tracking.",
          "provider": {
            "@type": "Organization",
            "name": "ModgillTravels"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Local Taxi",
          "name": "Local Taxi Service in Patiala",
          "description": "Local city taxi service for hourly bookings, shopping, medical appointments, business meetings within Patiala.",
          "provider": {
            "@type": "Organization",
            "name": "ModgillTravels"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "serviceType": "Outstation Taxi",
          "name": "Outstation Taxi Service Patiala",
          "description": "Long-distance outstation cab service from Patiala to Punjab, Haryana, Himachal Pradesh destinations.",
          "provider": {
            "@type": "Organization",
            "name": "ModgillTravels"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Excellent taxi service in Patiala. Professional driver, clean car, reached Delhi on time. Best cab service for outstation trips.",
      "datePublished": "2024-12-15",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "@id": "https://modgilltravels.in/#organization"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Singh"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Reliable taxi agents. Booked one way cab to Shimla, transparent pricing, no hidden charges. Highly recommend ModgillTravels.",
      "datePublished": "2024-11-28",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "@id": "https://modgilltravels.in/#organization"
      }
    }
  ],
  "sameAs": [
    "https://wa.me/916284992669"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-62849-92669",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  }
});

/**
 * FAQ Schema - Helps with voice search and featured snippets
 * Targets "near me" and service-related queries
 */
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I find the best taxi service near me in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ModgillTravels is the top-rated taxi service in Patiala. Call +91-62849-92669 for instant booking, visit www.modgilltravels.in, or WhatsApp us. Our professional taxi agents are available 24/7 for local and outstation cab service."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fare for one way cab service in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One way cab service in Patiala starts from ₹10/km for local trips. Outstation rates: Patiala to Delhi from ₹3,500, Patiala to Chandigarh from ₹1,800, Patiala to Shimla from ₹5,500. No return charges for one way taxi booking."
      }
    },
    {
      "@type": "Question",
      "name": "Are ModgillTravels taxi agents verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our taxi agents and drivers are verified with valid licenses, police verification, and 5+ years driving experience. We ensure safe and professional cab service in Patiala with trained drivers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 24/7 taxi service in Patiala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our Patiala taxi service operates 24 hours, 7 days a week. Book early morning airport taxis, late-night cabs, or emergency taxi service anytime. Our agents respond within 5 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does your cab service in Patiala cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our taxi service covers entire Punjab (Ludhiana, Amritsar, Jalandhar), Haryana (Ambala, Chandigarh), Himachal Pradesh (Shimla, Manali), and Delhi NCR. We offer one way and round trip cab bookings to all major cities."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a taxi online with ModgillTravels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking is easy: 1) Visit modgilltravels.in and select pickup/drop locations, 2) Call +91-62849-92669 for instant booking, 3) WhatsApp your travel details. Get instant confirmation via WhatsApp with driver details."
      }
    },
    {
      "@type": "Question",
      "name": "What types of cabs are available for taxi booking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer AC sedans (Swift Dzire, Toyota Etios) for 4 passengers and SUVs (Innova Crysta, Ertiga) for 6-7 passengers. All vehicles are well-maintained, clean, and equipped with GPS tracking for safety."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept for cab service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept multiple payment methods: Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit cards. Pay at pickup or advance online booking. Transparent pricing with no hidden charges."
      }
    }
  ]
});

/**
 * Service Schema for specific routes
 * Used on individual route detail pages
 */
export const getServiceSchema = (route) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Taxi Service",
  "name": `${route.from} to ${route.to} Taxi Service | ModgillTravels`,
  "description": `Book reliable taxi from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}. Professional drivers, AC vehicles, transparent pricing. One way and round trip options available.`,
  "provider": {
    "@type": "TaxiService",
    "name": "ModgillTravels",
    "telephone": "+91-62849-92669",
    "url": "https://modgilltravels.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patiala",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": route.from
    },
    {
      "@type": "City",
      "name": route.to
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": `https://modgilltravels.in/routes/${route.slug}`,
    "servicePhone": "+91-62849-92669"
  },
  "offers": {
    "@type": "Offer",
    "price": route.fare?.Sedan || route.displayFare,
    "priceCurrency": "INR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": route.fare?.Sedan || route.displayFare,
      "priceCurrency": "INR",
      "valueAddedTaxIncluded": false
    },
    "description": `Starting fare for ${route.from} to ${route.to} taxi service. Sedan AC cab with professional driver.`,
    "eligibleRegion": {
      "@type": "Place",
      "name": "India"
    },
    "availability": "https://schema.org/InStock"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Distance",
      "value": `${route.distanceKm} km`
    },
    {
      "@type": "PropertyValue",
      "name": "Duration",
      "value": route.duration
    },
    {
      "@type": "PropertyValue",
      "name": "Vehicle Type",
      "value": "AC Sedan (Swift Dzire, Toyota Etios)"
    },
    {
      "@type": "PropertyValue",
      "name": "Service Type",
      "value": "One Way & Round Trip"
    }
  ],
  "category": "Transportation",
  "termsOfService": "https://modgilltravels.in/terms",
  "audience": {
    "@type": "Audience",
    "audienceType": "Travelers, Business professionals, Tourists"
  }
});

/**
 * Breadcrumb Schema - Improves site navigation in search results
 * Helps Google understand site structure
 */
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://modgilltravels.in${item.url}`
  }))
});

/**
 * Website Schema - Main website entity
 * Used for sitelinks search box in Google
 */
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ModgillTravels - Taxi Service Near Me in Patiala",
  "alternateName": "Modgill Travels Cab Booking",
  "url": "https://modgilltravels.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://modgilltravels.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "description": "Book taxi service near me in Patiala. Best cab service with professional drivers, one way taxi, round trip, and airport transfers. Available 24/7.",
  "publisher": {
    "@type": "Organization",
    "name": "ModgillTravels"
  }
});

/**
 * Product Schema for Route Packages (Optional)
 * Can be used for route bundles or special offers
 */
export const getProductSchema = (route) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": `${route.from} to ${route.to} Taxi Package`,
  "description": `Book ${route.from} to ${route.to} taxi service. Professional drivers, AC vehicles. Distance: ${route.distanceKm}km.`,
  "image": "https://modgilltravels.in/car-caption.png",
  "brand": {
    "@type": "Brand",
    "name": "ModgillTravels"
  },
  "offers": {
    "@type": "Offer",
    "price": route.fare?.Sedan || route.displayFare,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": `https://modgilltravels.in/routes/${route.slug}`,
    "seller": {
      "@type": "Organization",
      "name": "ModgillTravels"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  }
});
