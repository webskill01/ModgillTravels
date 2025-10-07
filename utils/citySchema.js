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
      "url": "https://modgilltravels.in"
    }
  };
}
