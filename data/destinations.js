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
      "Sedan": 6200,
      "Maruti Ertiga WC": 8200,
      "Toyota Innova WC": 9000,
      "Kia Carens WC": 9000,
      "Toyota Innova Crysta WC": 10900
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
      "Sedan": 6200,
      "Maruti Ertiga WC": 8200,
      "Toyota Innova WC": 9000,
      "Kia Carens WC": 9000,
      "Toyota Innova Crysta WC": 10900
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
      "Sedan": 1800,
      "Maruti Ertiga WC": 2300,
      "Toyota Innova WC": 2700,
      "Kia Carens WC": 2700,
      "Toyota Innova Crysta WC": 3300
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
      "Sedan": 1800,
      "Maruti Ertiga WC": 2300,
      "Toyota Innova WC": 2700,
      "Kia Carens WC": 2700,
      "Toyota Innova Crysta WC": 3300
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
      "Sedan": 2200,
      "Maruti Ertiga WC": 2900,
      "Toyota Innova WC": 3400,
      "Kia Carens WC": 3400,
      "Toyota Innova Crysta WC": 4100
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
      "Sedan": 2200,
      "Maruti Ertiga WC": 2900,
      "Toyota Innova WC": 3400,
      "Kia Carens WC": 3400,
      "Toyota Innova Crysta WC": 4100
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
      "Sedan": 2400,
      "Maruti Ertiga WC": 3200,
      "Toyota Innova WC": 3800,
      "Kia Carens WC": 3800,
      "Toyota Innova Crysta WC": 4700
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
      "Sedan": 2400,
      "Maruti Ertiga WC": 3200,
      "Toyota Innova WC": 3800,
      "Kia Carens WC": 3800,
      "Toyota Innova Crysta WC": 4700
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
      "Sedan": 4000,
      "Maruti Ertiga WC": 5200,
      "Toyota Innova WC": 6000,
      "Kia Carens WC": 6000,
      "Toyota Innova Crysta WC": 7400
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
      "Sedan": 4000,
      "Maruti Ertiga WC": 5200,
      "Toyota Innova WC": 6000,
      "Kia Carens WC": 6000,
      "Toyota Innova Crysta WC": 7400
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
      "Sedan": 2000,
      "Maruti Ertiga WC": 2700,
      "Toyota Innova WC": 3200,
      "Kia Carens WC": 3200,
      "Toyota Innova Crysta WC": 3900
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
      "Sedan": 2000,
      "Maruti Ertiga WC": 2700,
      "Toyota Innova WC": 3200,
      "Kia Carens WC": 3200,
      "Toyota Innova Crysta WC": 3900
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
      "Sedan": 6000,
      "Maruti Ertiga WC": 7700,
      "Toyota Innova WC": 9200,
      "Kia Carens WC": 9200,
      "Toyota Innova Crysta WC": 11300
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
      "Sedan": 6000,
      "Maruti Ertiga WC": 7700,
      "Toyota Innova WC": 9200,
      "Kia Carens WC": 9200,
      "Toyota Innova Crysta WC": 11300
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
    "Sedan": 10200,
    "Maruti Ertiga WC": 13000,
    "Toyota Innova WC": 14800,
    "Kia Carens WC": 14800,
    "Toyota Innova Crysta WC": 17500
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
    "Sedan": 10200,
    "Maruti Ertiga WC": 13000,
    "Toyota Innova WC": 14800,
    "Kia Carens WC": 14800,
    "Toyota Innova Crysta WC": 17500
  }
}

];

export default destinations;
