// utils/citySchema.js
import site from '@/data/site';
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
    // No offers block. It read `city.popularRoutes[0]?.fare`, and fares were
    // deleted in Phase 6 — so it always fell through to a hardcoded "1000"
    // against an invented "10000", publishing a fabricated INR 1,000-10,000
    // range on every city page. Same class of problem as the fabricated
    // Review nodes removed in Phase 4: made-up structured data is a manual
    // action risk, and this site quotes per trip rather than by price list.
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": city.state,
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "ModgillTravels",
      "telephone": site.phone,
      "url": "https://www.modgilltravels.in"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": site.rating.value,
      "reviewCount": site.rating.count,
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}
