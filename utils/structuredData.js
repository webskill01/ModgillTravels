export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ModgillTravels",
  "url": "https://modgilltravels.in",
  "logo": "https://modgilltravels.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98765-43210",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Patiala",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://wa.me/919876543210"
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "ModgillTravels",
  "description": "Professional taxi and cab booking service in Punjab, Haryana, Himachal Pradesh, and Delhi NCR",
  "url": "https://modgilltravels.in",
  "telephone": "+91-98765-43210",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
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
  "openingHours": "Mo-Su 00:00-23:59",
  "serviceArea": {
    "@type": "State",
    "name": "Punjab, Haryana, Himachal Pradesh, Delhi"
  }
});

export const getServiceSchema = (route) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Taxi Service",
  "provider": {
    "@type": "Organization",
    "name": "ModgillTravels"
  },
  "areaServed": `${route.from} to ${route.to}`,
  "description": `Reliable taxi service from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}`,
  "offers": {
    "@type": "Offer",
    "price": route.displayFare,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
