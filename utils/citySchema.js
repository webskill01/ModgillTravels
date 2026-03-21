// utils/citySchema.js
export function getCitySchema(city) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Taxi Service in ${city.name}`,
    "description": city.description,
    "brand": {
      "@type": "Brand",
      "name": "ModgillTravels"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": city.popularRoutes[0]?.fare || "1000",
      "highPrice": "10000",
      "offerCount": city.popularRoutes.length
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": city.state,
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "ModgillTravels",
      "telephone": "+91-62849-92669",
      "url": "https://www.modgilltravels.in"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "31",
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
        "datePublished": "2024-12-15"
      }
    ]
  };
}
