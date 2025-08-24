// data/destinations.js

const destinations = [
  // Patiala to Delhi
  {
    id: "patiala-to-delhi",
    slug: "patiala-to-delhi",
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
    id: "delhi-to-patiala",
    slug: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
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
    id: "patiala-to-chandigarh",
    slug: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
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
    id: "chandigarh-to-patiala",
    slug: "chandigarh-to-patiala",
    from: "Chandigarh",
    to: "Patiala",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
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
    id: "patiala-to-ludhiana",
    slug: "patiala-to-ludhiana",
    from: "Patiala",
    to: "Ludhiana",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
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
    id: "ludhiana-to-patiala",
    slug: "ludhiana-to-patiala",
    from: "Ludhiana",
    to: "Patiala",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"],
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
    id: "patiala-to-jalandhar",
    slug: "patiala-to-jalandhar",
    from: "Patiala",
    to: "Jalandhar",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
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
    id: "jalandhar-to-patiala",
    slug: "jalandhar-to-patiala",
    from: "Jalandhar",
    to: "Patiala",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
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
    id: "patiala-to-amritsar",
    slug: "patiala-to-amritsar",
    from: "Patiala",
    to: "Amritsar",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
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
    id: "amritsar-to-patiala",
    slug: "amritsar-to-patiala",
    from: "Amritsar",
    to: "Patiala",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"],
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
    id: "patiala-to-ambala",
    slug: "patiala-to-ambala",
    from: "Patiala",
    to: "Ambala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
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
    id: "ambala-to-patiala",
    slug: "ambala-to-patiala",
    from: "Ambala",
    to: "Patiala",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"],
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
    id: "patiala-to-shimla",
    slug: "patiala-to-shimla",
    from: "Patiala",
    to: "Shimla",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    fare: {
      "Sedan": 2600,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 3100,
      "Kia Carens WC": 3100,
      "Toyota Innova Crysta WC": 3600
    },
    roundTripFare: {
      "Sedan": "NA",
      "Maruti Ertiga WC": "NA",
      "Toyota Innova WC": "NA",
      "Kia Carens WC": "NA",
      "Toyota Innova Crysta WC": "NA"
    }
  },
  {
    id: "shimla-to-patiala",
    slug: "shimla-to-patiala",
    from: "Shimla",
    to: "Patiala",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"],
    fare: {
      "Sedan": 2600,
      "Maruti Ertiga WC": 3000,
      "Toyota Innova WC": 3100,
      "Kia Carens WC": 3100,
      "Toyota Innova Crysta WC": 3600
    },
    roundTripFare: {
      "Sedan": "NA",
      "Maruti Ertiga WC": "NA",
      "Toyota Innova WC": "NA",
      "Kia Carens WC": "NA",
      "Toyota Innova Crysta WC": "NA"
    }
  },
  //Patiala to Manali
  {
  id: "patiala-to-manali",
  slug: "patiala-to-manali", 
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
    "Sedan": "NA",
    "Maruti Ertiga WC": "NA",
    "Toyota Innova WC": "NA",
    "Kia Carens WC": "NA",
    "Toyota Innova Crysta WC": "NA"
  }
},
{
  id: "manali-to-patiala",
  slug: "manali-to-patiala",
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
    "Sedan": "NA",
    "Maruti Ertiga WC": "NA",
    "Toyota Innova WC": "NA",
    "Kia Carens WC": "NA",
    "Toyota Innova Crysta WC": "NA"
  }
}

];

export default destinations;
