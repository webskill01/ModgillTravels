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
    "https://wa.me/916284992669"
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
  '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `${route.from} to ${route.to} Taxi Service`,
    description: `Professional taxi service from ${route.from} to ${route.to}. Distance: ${route.distanceKm}km, Duration: ${route.duration}`,
    provider: {
      '@type': 'Organization',
      name: 'ModgillTravels',
      telephone: '+91-62849-92669',
      url: 'https://modgilltravels.in'
    },
    areaServed: [route.from, route.to],
    offers: {
      '@type': 'Offer',
      price: route.fare.Sedan,
      priceCurrency: 'INR',
      description: `Starting fare for ${route.from} to ${route.to} taxi service`
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Distance',
        value: `${route.distanceKm} km`
      },
      {
        '@type': 'PropertyValue', 
        name: 'Duration',
        value: route.duration
      }
    ]
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
