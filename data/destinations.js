// data/destinations.js

const destinations = [
  // Patiala to Delhi
  {
    id: "Patiala-to-Delhi",
    slug: "Patiala-to-Delhi",
    from: "Patiala",
    to: "Delhi",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
    description: "Professional taxi service from Patiala to Delhi with experienced drivers and comfortable vehicles.",
    fare: {
      "Sedan": 3400,
      "Maruti Ertiga WC": 4400,
      "Toyota Innova WC": 4900,
      "Kia Carens WC": 4900,
      "Toyota Innova Crysta WC": 5900
    },
    roundTripFare: {
      "Sedan": 6400,
      "Maruti Ertiga WC": 8400,
      "Toyota Innova WC": 9400,
      "Kia Carens WC": 9400,
      "Toyota Innova Crysta WC": 10000
    }
  },
  {
    id: "Delhi-to-Patiala",
    slug: "Delhi-to-Patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
    description: "Professional taxi service from Delhi to Patiala with experienced drivers and comfortable vehicles.",
    fare: {
      "Sedan": 3400,
      "Maruti Ertiga WC": 4400,
      "Toyota Innova WC": 4900,
      "Kia Carens WC": 4900,
      "Toyota Innova Crysta WC": 5900
    },
    roundTripFare: {
      "Sedan": 6400,
      "Maruti Ertiga WC": 8400,
      "Toyota Innova WC": 9400,
      "Kia Carens WC": 9400,
      "Toyota Innova Crysta WC": 10000
    }
  },

  // Patiala to Chandigarh
  {
    id: "Patiala-to-Chandigarh",
    slug: "Patiala-to-Chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
    description: "Quick and comfortable taxi service from Patiala to Chandigarh with city expert drivers.",
    fare: {
      "Sedan": 1400,
      "Maruti Ertiga WC": 1800,
      "Toyota Innova WC": 2300,
      "Kia Carens WC": 2300,
      "Toyota Innova Crysta WC": 3300
    },
    roundTripFare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 4200,
      "Kia Carens WC": 4200,
      "Toyota Innova Crysta WC": 6200
    }
  },
  {
    id: "Chandigarh-to-Patiala",
    slug: "Chandigarh-to-Patiala",
    from: "Chandigarh",
    to: "Patiala",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
    description: "Quick and comfortable taxi service from Chandigarh to Patiala with city expert drivers.",
    fare: {
      "Sedan": 1400,
      "Maruti Ertiga WC": 1800,
      "Toyota Innova WC": 2300,
      "Kia Carens WC": 2300,
      "Toyota Innova Crysta WC": 3300
    },
    roundTripFare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 4200,
      "Kia Carens WC": 4200,
      "Toyota Innova Crysta WC": 6200
    }
  },

  // Patiala to Ludhiana
  {
    id: "Patiala-to-Ludhiana",
    slug: "Patiala-to-Ludhiana",
    from: "Patiala",
    to: "Ludhiana",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
    description: "Professional taxi service from Patiala to Ludhiana for business and leisure travel.",
    fare: {
      "Sedan": 1500,
      "Maruti Ertiga WC": 2000,
      "Toyota Innova WC": 2500,
      "Kia Carens WC": 2500,
      "Toyota Innova Crysta WC": 3500
    },
    roundTripFare: {
      "Sedan": 2800,
      "Maruti Ertiga WC": 4000,
      "Toyota Innova WC": 5200,
      "Kia Carens WC": 5200,
      "Toyota Innova Crysta WC": 6500
    }
  },
  {
    id: "Ludhiana-to-Patiala",
    slug: "Ludhiana-to-Patiala",
    from: "Ludhiana",
    to: "Patiala",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
    description: "Professional taxi service from Ludhiana to Patiala for business and leisure travel.",
    fare: {
      "Sedan": 1500,
      "Maruti Ertiga WC": 2000,
      "Toyota Innova WC": 2500,
      "Kia Carens WC": 2500,
      "Toyota Innova Crysta WC": 3500
    },
    roundTripFare: {
      "Sedan": 2800,
      "Maruti Ertiga WC": 4000,
      "Toyota Innova WC": 5200,
      "Kia Carens WC": 5200,
      "Toyota Innova Crysta WC": 6500
    }
  },

  // Patiala to Jalandhar
  {
    id: "Patiala-to-Jalandhar",
    slug: "Patiala-to-Jalandhar",
    from: "Patiala",
    to: "Jalandhar",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
    description: "Comfortable taxi service from Patiala to Jalandhar with highway expert drivers.",
    fare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 2900,
      "Toyota Innova WC": 3000,
      "Kia Carens WC": 3000,
      "Toyota Innova Crysta WC": 3500
    },
    roundTripFare: {
      "Sedan": 4500,
      "Maruti Ertiga WC": 5500,
      "Toyota Innova WC": 6000,
      "Kia Carens WC": 6000,
      "Toyota Innova Crysta WC": 7500
    }
  },
  {
    id: "Jalandhar-to-Patiala",
    slug: "Jalandhar-to-Patiala",
    from: "Jalandhar",
    to: "Patiala",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
    description: "Comfortable taxi service from Jalandhar to Patiala with highway expert drivers.",
    fare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 2900,
      "Toyota Innova WC": 3000,
      "Kia Carens WC": 3000,
      "Toyota Innova Crysta WC": 3500
    },
    roundTripFare: {
      "Sedan": 4500,
      "Maruti Ertiga WC": 5500,
      "Toyota Innova WC": 6000,
      "Kia Carens WC": 6000,
      "Toyota Innova Crysta WC": 7500
    }
  },

  // Patiala to Amritsar
  {
    id: "Patiala-to-Amritsar",
    slug: "Patiala-to-Amritsar",
    from: "Patiala",
    to: "Amritsar",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
    description: "Religious tourism taxi service from Patiala to Amritsar Golden Temple with experienced drivers.",
    fare: {
      "Sedan": 3500,
      "Maruti Ertiga WC": 4300,
      "Toyota Innova WC": 4800,
      "Kia Carens WC": 4800,
      "Toyota Innova Crysta WC": 5800
    },
    roundTripFare: {
      "Sedan": 6300,
      "Maruti Ertiga WC": 8300,
      "Toyota Innova WC": 9300,
      "Kia Carens WC": 9300,
      "Toyota Innova Crysta WC": 9900
    }
  },
  {
    id: "Amritsar-to-Patiala",
    slug: "Amritsar-to-Patiala",
    from: "Amritsar",
    to: "Patiala",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
    description: "Religious tourism taxi service from Amritsar Golden Temple to Patiala with experienced drivers.",
    fare: {
      "Sedan": 3500,
      "Maruti Ertiga WC": 4300,
      "Toyota Innova WC": 4800,
      "Kia Carens WC": 4800,
      "Toyota Innova Crysta WC": 5800
    },
    roundTripFare: {
      "Sedan": 6300,
      "Maruti Ertiga WC": 8300,
      "Toyota Innova WC": 9300,
      "Kia Carens WC": 9300,
      "Toyota Innova Crysta WC": 9900
    }
  },

  // Patiala to Ambala
  {
    id: "Patiala-to-Ambala",
    slug: "Patiala-to-Ambala",
    from: "Patiala",
    to: "Ambala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
    description: "Quick transfer taxi service from Patiala to Ambala with local expert drivers.",
    fare: {
      "Sedan": 1400,
      "Maruti Ertiga WC": 1800,
      "Toyota Innova WC": 2300,
      "Kia Carens WC": 2300,
      "Toyota Innova Crysta WC": 3300
    },
    roundTripFare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 4200,
      "Kia Carens WC": 4200,
      "Toyota Innova Crysta WC": 6200
    }
  },
  {
    id: "Ambala-to-Patiala",
    slug: "Ambala-to-Patiala",
    from: "Ambala",
    to: "Patiala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
    description: "Quick transfer taxi service from Ambala to Patiala with local expert drivers.",
    fare: {
      "Sedan": 1400,
      "Maruti Ertiga WC": 1800,
      "Toyota Innova WC": 2300,
      "Kia Carens WC": 2300,
      "Toyota Innova Crysta WC": 3300
    },
    roundTripFare: {
      "Sedan": 2500,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 4200,
      "Kia Carens WC": 4200,
      "Toyota Innova Crysta WC": 6200
    }
  },

  // Patiala to Shimla
  {
    id: "Patiala-to-Shimla",
    slug: "Patiala-to-Shimla",
    from: "Patiala",
    to: "Shimla",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    description: "Hill station taxi service from Patiala to Shimla with experienced mountain drivers for scenic journey.",
    fare: {
      "Sedan": 2600,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 3100,
      "Kia Carens WC": 3100,
      "Toyota Innova Crysta WC": 3600
    },
    roundTripFare: {
      "Sedan": "N/A",
      "Maruti Ertiga WC": "N/A",
      "Toyota Innova WC": "N/A",
      "Kia Carens WC": "N/A",
      "Toyota Innova Crysta WC": "N/A"
    }
  },
  {
    id: "Shimla-to-Patiala",
    slug: "Shimla-to-Patiala",
    from: "Shimla",
    to: "Patiala",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    description: "Hill station taxi service from Shimla to Patiala with experienced mountain drivers for comfortable descent.",
    fare: {
      "Sedan": 2600,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 3100,
      "Kia Carens WC": 3100,
      "Toyota Innova Crysta WC": 3600
    },
    roundTripFare: {
      "Sedan": "N/A",
      "Maruti Ertiga WC": "N/A",
      "Toyota Innova WC": "N/A",
      "Kia Carens WC": "N/A",
      "Toyota Innova Crysta WC": "N/A"
    }
  },

  // Patiala to Manali
  {
    id: "Patiala-to-Manali",
    slug: "Patiala-to-Manali", 
    from: "Patiala",
    to: "Manali",
    distanceKm: 301,
    duration: "6.5-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Mountain Route"],
    description: "Professional taxi service from Patiala to Manali hill station with experienced mountain drivers and comfortable vehicles for the scenic journey.",
    fare: {
      "Sedan": 5400,
      "Maruti Ertiga WC": 6800,
      "Toyota Innova WC": 7800,
      "Kia Carens WC": 7800,
      "Toyota Innova Crysta WC": 9200
    },
    roundTripFare: {
      "Sedan": "N/A",
      "Maruti Ertiga WC": "N/A",
      "Toyota Innova WC": "N/A",
      "Kia Carens WC": "N/A",
      "Toyota Innova Crysta WC": "N/A"
    }
  },
  {
    id: "Manali-to-Patiala",
    slug: "Manali-to-Patiala",
    from: "Manali", 
    to: "Patiala",
    distanceKm: 301,
    duration: "6.5-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Mountain Route"],
    description: "Professional taxi service from Manali hill station to Patiala with experienced mountain drivers for a comfortable descent journey.",
    fare: {
      "Sedan": 5400,
      "Maruti Ertiga WC": 6800,
      "Toyota Innova WC": 7800,
      "Kia Carens WC": 7800,
      "Toyota Innova Crysta WC": 9200
    },
    roundTripFare: {
      "Sedan": "N/A",
      "Maruti Ertiga WC": "N/A",
      "Toyota Innova WC": "N/A",
      "Kia Carens WC": "N/A",
      "Toyota Innova Crysta WC": "N/A"
    }
  }
];

export default destinations;
