// data/destinations.js

const destinations = [
  // Patiala to Delhi
  {
    id: "Patiala-to-Delhi",
    slug: "patiala-to-delhi",
    from: "Patiala",
    to: "Delhi",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
    description: "Professional taxi service from Patiala to Delhi with experienced drivers and comfortable vehicles."
  },
  {
    id: "Delhi-to-Patiala",
    slug: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
    description: "Professional taxi service from Delhi to Patiala with experienced drivers and comfortable vehicles."
  },

  // Patiala to Chandigarh
  {
    id: "Patiala-to-Chandigarh",
    slug: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
    description: "Quick and comfortable taxi service from Patiala to Chandigarh with city expert drivers."
  },
  {
    id: "Chandigarh-to-Patiala",
    slug: "chandigarh-to-patiala",
    from: "Chandigarh",
    to: "Patiala",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
    description: "Quick and comfortable taxi service from Chandigarh to Patiala with city expert drivers."
  },

  // Patiala to Ludhiana
  {
    id: "Patiala-to-Ludhiana",
    slug: "patiala-to-ludhiana",
    from: "Patiala",
    to: "Ludhiana",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
    description: "Professional taxi service from Patiala to Ludhiana for business and leisure travel."
  },
  {
    id: "Ludhiana-to-Patiala",
    slug: "ludhiana-to-patiala",
    from: "Ludhiana",
    to: "Patiala",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
    description: "Professional taxi service from Ludhiana to Patiala for business and leisure travel."
  },

  // Patiala to Jalandhar
  {
    id: "Patiala-to-Jalandhar",
    slug: "patiala-to-jalandhar",
    from: "Patiala",
    to: "Jalandhar",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
    description: "Comfortable taxi service from Patiala to Jalandhar with highway expert drivers."
  },
  {
    id: "Jalandhar-to-Patiala",
    slug: "jalandhar-to-patiala",
    from: "Jalandhar",
    to: "Patiala",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
    description: "Comfortable taxi service from Jalandhar to Patiala with highway expert drivers."
  },

  // Patiala to Amritsar
  {
    id: "Patiala-to-Amritsar",
    slug: "patiala-to-amritsar",
    from: "Patiala",
    to: "Amritsar",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
    description: "Religious tourism taxi service from Patiala to Amritsar Golden Temple with experienced drivers."
  },
  {
    id: "Amritsar-to-Patiala",
    slug: "amritsar-to-patiala",
    from: "Amritsar",
    to: "Patiala",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
    description: "Religious tourism taxi service from Amritsar Golden Temple to Patiala with experienced drivers."
  },

  // Patiala to Ambala
  {
    id: "Patiala-to-Ambala",
    slug: "patiala-to-ambala",
    from: "Patiala",
    to: "Ambala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
    description: "Quick transfer taxi service from Patiala to Ambala with local expert drivers."
  },
  {
    id: "Ambala-to-Patiala",
    slug: "ambala-to-patiala",
    from: "Ambala",
    to: "Patiala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
    description: "Quick transfer taxi service from Ambala to Patiala with local expert drivers."
  },

  // Patiala to Shimla
  {
    id: "Patiala-to-Shimla",
    slug: "patiala-to-shimla",
    from: "Patiala",
    to: "Shimla",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    description: "Hill station taxi service from Patiala to Shimla with experienced mountain drivers for scenic journey."
  },
  {
    id: "Shimla-to-Patiala",
    slug: "shimla-to-patiala",
    from: "Shimla",
    to: "Patiala",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    description: "Hill station taxi service from Shimla to Patiala with experienced mountain drivers for comfortable descent."
  },

  // Patiala to Manali
  {
    id: "Patiala-to-Manali",
    slug: "patiala-to-manali",
    from: "Patiala",
    to: "Manali",
    distanceKm: 301,
    duration: "6.5-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Mountain Route"],
    description: "Professional taxi service from Patiala to Manali hill station with experienced mountain drivers and comfortable vehicles for the scenic journey."
  },
  {
    id: "Manali-to-Patiala",
    slug: "manali-to-patiala",
    from: "Manali",
    to: "Patiala",
    distanceKm: 301,
    duration: "6.5-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Mountain Route"],
    description: "Professional taxi service from Manali hill station to Patiala with experienced mountain drivers for a comfortable descent journey."
  }
];

export default destinations;
