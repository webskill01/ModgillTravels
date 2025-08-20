// data/destinations.js
const destinations = [
  {
    id: "delhi-to-patiala",
    slug: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 250,
    duration: "4-5 hours",
    // Display fare (lowest option)
    displayFare: 2500,
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Music System"],
    description: "Comfortable ride from Delhi to Patiala with experienced drivers and transparent pricing.",
    highlights: ["Airport pickup available", "24/7 service", "Fixed fare policy"],
    tags: ["popular", "intercity", "airport"]
  },
  {
    id: "delhi-to-manali",
    slug: "delhi-to-manali",
    from: "Delhi", 
    to: "Manali",
    distanceKm: 540,
    duration: "12-14 hours",
    displayFare: 6500,
    carFeatures: ["AC", "GPS Tracking", "Hill Station Expert", "Rest Stops"],
    description: "Scenic mountain drive from Delhi to Manali with hill-station experienced drivers.",
    highlights: ["Mountain driving experts", "Rest stops included", "Luggage space"],
    tags: ["hill-station", "popular", "long-distance"]
  },
  {
    id: "chandigarh-to-shimla", 
    slug: "chandigarh-to-shimla",
    from: "Chandigarh",
    to: "Shimla", 
    distanceKm: 115,
    duration: "3-4 hours",
    displayFare: 2200,
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"],
    description: "Quick and comfortable transfers from Chandigarh to Shimla.",
    highlights: ["Hill station specialists", "Scenic route", "Flexible timings"],
    tags: ["hill-station", "short-distance"]
  },
  {
    id: "chandigarh-to-manali",
    slug: "chandigarh-to-manali",
    from: "Chandigarh", 
    to: "Manali",
    distanceKm: 300,
    duration: "7-8 hours", 
    displayFare: 4800,
    carFeatures: ["AC", "GPS Tracking", "Mountain Specialist", "Tourist Guide"],
    description: "Reliable mountain transfers from Chandigarh to Manali with local expertise.",
    highlights: ["Local route knowledge", "Weather updates", "Tourist guidance"],
    tags: ["hill-station", "popular"]
  },
  {
    id: "patiala-to-chandigarh",
    slug: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 65,
    duration: "1.5-2 hours",
    displayFare: 1200,
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"],
    description: "Fast and convenient daily transfers between Patiala and Chandigarh.",
    highlights: ["Daily service", "Business friendly", "Airport connections"],
    tags: ["daily", "business", "airport"]
  },
  {
    id: "amritsar-to-delhi",
    slug: "amritsar-to-delhi",
    from: "Amritsar",
    to: "Delhi",
    distanceKm: 450,
    duration: "7-8 hours",
    displayFare: 5500,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"],
    description: "Direct highway connection between Amritsar and Delhi with experienced drivers.",
    highlights: ["Golden Temple visits", "Highway specialists", "Flexible departure"],
    tags: ["religious", "highway", "sightseeing"]
  }
];

export default destinations;
