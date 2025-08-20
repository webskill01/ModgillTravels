// data/destinations.js
const destinations = [
  // Delhi Routes
  {
    id: "delhi-to-patiala",
    slug: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 240,
    duration: "4.5-5 hours",
    displayFare: 2800,
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Music System"]
  },
  {
    id: "delhi-to-chandigarh",
    slug: "delhi-to-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    distanceKm: 245,
    duration: "4-5 hours",
    displayFare: 2900,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "delhi-to-manali",
    slug: "delhi-to-manali",
    from: "Delhi", 
    to: "Manali",
    distanceKm: 520,
    duration: "10-12 hours",
    displayFare: 8500,
    carFeatures: ["AC", "GPS Tracking", "Hill Station Expert", "Rest Stops"]
  },
  {
    id: "delhi-to-shimla",
    slug: "delhi-to-shimla",
    from: "Delhi",
    to: "Shimla",
    distanceKm: 343,
    duration: "7-8 hours",
    displayFare: 5200,
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "delhi-to-amritsar",
    slug: "delhi-to-amritsar",
    from: "Delhi",
    to: "Amritsar",
    distanceKm: 465,
    duration: "8-9 hours",
    displayFare: 6800,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "delhi-to-ludhiana",
    slug: "delhi-to-ludhiana",
    from: "Delhi",
    to: "Ludhiana",
    distanceKm: 325,
    duration: "6-7 hours",
    displayFare: 4200,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Business Friendly"]
  },
  {
    id: "delhi-to-jalandhar",
    slug: "delhi-to-jalandhar",
    from: "Delhi",
    to: "Jalandhar",
    distanceKm: 360,
    duration: "6.5-7.5 hours",
    displayFare: 4600,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "delhi-to-bathinda",
    slug: "delhi-to-bathinda",
    from: "Delhi",
    to: "Bathinda",
    distanceKm: 245,
    duration: "4.5-5.5 hours",
    displayFare: 3200,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "delhi-to-ambala",
    slug: "delhi-to-ambala",
    from: "Delhi",
    to: "Ambala",
    distanceKm: 200,
    duration: "3.5-4.5 hours",
    displayFare: 2600,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Quick Service"]
  },
  {
    id: "delhi-to-karnal",
    slug: "delhi-to-karnal",
    from: "Delhi",
    to: "Karnal",
    distanceKm: 125,
    duration: "2-3 hours",
    displayFare: 1800,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Business Travel"]
  },
  {
    id: "delhi-to-panipat",
    slug: "delhi-to-panipat",
    from: "Delhi",
    to: "Panipat",
    distanceKm: 90,
    duration: "1.5-2 hours",
    displayFare: 1400,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Quick Transfer"]
  },
  {
    id: "delhi-to-kullu",
    slug: "delhi-to-kullu",
    from: "Delhi",
    to: "Kullu",
    distanceKm: 480,
    duration: "9-11 hours",
    displayFare: 7800,
    carFeatures: ["AC", "GPS Tracking", "Hill Station Expert", "Valley Route"]
  },

  // Chandigarh Routes
  {
    id: "chandigarh-to-shimla", 
    slug: "chandigarh-to-shimla",
    from: "Chandigarh",
    to: "Shimla", 
    distanceKm: 114,
    duration: "3-3.5 hours",
    displayFare: 2400,
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "chandigarh-to-manali",
    slug: "chandigarh-to-manali",
    from: "Chandigarh", 
    to: "Manali",
    distanceKm: 305,
    duration: "8-9 hours", 
    displayFare: 5800,
    carFeatures: ["AC", "GPS Tracking", "Mountain Specialist", "Tourist Guide"]
  },
  {
    id: "chandigarh-to-kullu",
    slug: "chandigarh-to-kullu",
    from: "Chandigarh",
    to: "Kullu",
    distanceKm: 260,
    duration: "6-7 hours",
    displayFare: 4200,
    carFeatures: ["AC", "GPS Tracking", "Valley Expert", "Scenic Route"]
  },
  {
    id: "chandigarh-to-spiti-valley",
    slug: "chandigarh-to-spiti-valley",
    from: "Chandigarh",
    to: "Spiti Valley",
    distanceKm: 430,
    duration: "12-14 hours",
    displayFare: 12000,
    carFeatures: ["4WD Available", "High Altitude Expert", "Emergency Kit", "Local Guide"]
  },
  {
    id: "chandigarh-to-amritsar",
    slug: "chandigarh-to-amritsar",
    from: "Chandigarh",
    to: "Amritsar",
    distanceKm: 235,
    duration: "4-5 hours",
    displayFare: 3400,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Religious Tourism"]
  },

  // Patiala Routes
  {
    id: "patiala-to-chandigarh",
    slug: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 67,
    duration: "2-2.5 hours",
    displayFare: 1400,
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"]
  },
  {
    id: "patiala-to-delhi",
    slug: "patiala-to-delhi",
    from: "Patiala",
    to: "Delhi",
    distanceKm: 240,
    duration: "4.5-5 hours",
    displayFare: 2800,
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"]
  },
  {
    id: "patiala-to-shimla",
    slug: "patiala-to-shimla",
    from: "Patiala",
    to: "Shimla",
    distanceKm: 180,
    duration: "5-6 hours",
    displayFare: 3600,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"]
  },

  // Amritsar Routes
  {
    id: "amritsar-to-delhi",
    slug: "amritsar-to-delhi",
    from: "Amritsar",
    to: "Delhi",
    distanceKm: 465,
    duration: "8-9 hours",
    displayFare: 6800,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "amritsar-to-chandigarh",
    slug: "amritsar-to-chandigarh",
    from: "Amritsar",
    to: "Chandigarh",
    distanceKm: 235,
    duration: "4-5 hours",
    displayFare: 3400,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "City Connection"]
  },
  {
    id: "amritsar-to-shimla",
    slug: "amritsar-to-shimla",
    from: "Amritsar",
    to: "Shimla",
    distanceKm: 340,
    duration: "7-8 hours",
    displayFare: 5600,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Religious to Hill"]
  },

  // Ludhiana Routes
  {
    id: "ludhiana-to-delhi",
    slug: "ludhiana-to-delhi",
    from: "Ludhiana",
    to: "Delhi",
    distanceKm: 325,
    duration: "6-7 hours",
    displayFare: 4200,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Business Friendly"]
  },
  {
    id: "ludhiana-to-chandigarh",
    slug: "ludhiana-to-chandigarh",
    from: "Ludhiana",
    to: "Chandigarh",
    distanceKm: 95,
    duration: "2-2.5 hours",
    displayFare: 1600,
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "ludhiana-to-shimla",
    slug: "ludhiana-to-shimla",
    from: "Ludhiana",
    to: "Shimla",
    distanceKm: 210,
    duration: "5.5-6.5 hours",
    displayFare: 3800,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Drive"]
  },

  // Jalandhar Routes
  {
    id: "jalandhar-to-chandigarh",
    slug: "jalandhar-to-chandigarh",
    from: "Jalandhar",
    to: "Chandigarh",
    distanceKm: 145,
    duration: "3-4 hours",
    displayFare: 2200,
    carFeatures: ["AC", "GPS Tracking", "City Expert", "Comfortable Ride"]
  },
  {
    id: "jalandhar-to-delhi",
    slug: "jalandhar-to-delhi",
    from: "Jalandhar",
    to: "Delhi",
    distanceKm: 360,
    duration: "6.5-7.5 hours",
    displayFare: 4600,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "jalandhar-to-shimla",
    slug: "jalandhar-to-shimla",
    from: "Jalandhar",
    to: "Shimla",
    distanceKm: 250,
    duration: "6-7 hours",
    displayFare: 4200,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"]
  },

  // Bathinda Routes
  {
    id: "bathinda-to-delhi",
    slug: "bathinda-to-delhi",
    from: "Bathinda",
    to: "Delhi",
    distanceKm: 245,
    duration: "4.5-5.5 hours",
    displayFare: 3200,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "bathinda-to-chandigarh",
    slug: "bathinda-to-chandigarh",
    from: "Bathinda",
    to: "Chandigarh",
    distanceKm: 175,
    duration: "3.5-4.5 hours",
    displayFare: 2600,
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Comfortable Journey"]
  },

  // Haryana Cities
  {
    id: "ambala-to-chandigarh",
    slug: "ambala-to-chandigarh",
    from: "Ambala",
    to: "Chandigarh",
    distanceKm: 45,
    duration: "1-1.5 hours",
    displayFare: 900,
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "karnal-to-delhi",
    slug: "karnal-to-delhi",
    from: "Karnal",
    to: "Delhi",
    distanceKm: 125,
    duration: "2-3 hours",
    displayFare: 1800,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Quick Service"]
  },
  {
    id: "panipat-to-delhi",
    slug: "panipat-to-delhi",
    from: "Panipat",
    to: "Delhi",
    distanceKm: 90,
    duration: "1.5-2 hours",
    displayFare: 1400,
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "City Connection"]
  },
  {
    id: "kurukshetra-to-chandigarh",
    slug: "kurukshetra-to-chandigarh",
    from: "Kurukshetra",
    to: "Chandigarh",
    distanceKm: 90,
    duration: "2-2.5 hours",
    displayFare: 1500,
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Religious Tourism"]
  },
  {
    id: "sonipat-to-delhi",
    slug: "sonipat-to-delhi",
    from: "Sonipat",
    to: "Delhi",
    distanceKm: 45,
    duration: "1-1.5 hours",
    displayFare: 800,
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "NCR Route"]
  },

  // Himachal Pradesh Routes
  {
    id: "kullu-to-manali",
    slug: "kullu-to-manali",
    from: "Kullu",
    to: "Manali",
    distanceKm: 42,
    duration: "1-1.5 hours",
    displayFare: 1200,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Scenic Route"]
  },
  {
    id: "shimla-to-manali",
    slug: "shimla-to-manali",
    from: "Shimla",
    to: "Manali",
    distanceKm: 245,
    duration: "7-8 hours",
    displayFare: 4800,
    carFeatures: ["AC", "GPS Tracking", "Mountain Expert", "Hill Station Route"]
  },
  {
    id: "shimla-to-kullu",
    slug: "shimla-to-kullu",
    from: "Shimla",
    to: "Kullu",
    distanceKm: 200,
    duration: "6-7 hours",
    displayFare: 4000,
    carFeatures: ["AC", "GPS Tracking", "Mountain Expert", "Valley Route"]
  },

  // Mohali Routes
  {
    id: "mohali-to-manali",
    slug: "mohali-to-manali",
    from: "Mohali",
    to: "Manali",
    distanceKm: 290,
    duration: "7-8 hours",
    displayFare: 5400,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Tourist Route"]
  },
  {
    id: "mohali-to-shimla",
    slug: "mohali-to-shimla",
    from: "Mohali",
    to: "Shimla",
    distanceKm: 105,
    duration: "3-4 hours",
    displayFare: 2200,
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Scenic Drive"]
  },

  // Additional Punjab Cities
  {
    id: "sangrur-to-chandigarh",
    slug: "sangrur-to-chandigarh",
    from: "Sangrur",
    to: "Chandigarh",
    distanceKm: 85,
    duration: "2-2.5 hours",
    displayFare: 1500,
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Comfortable Drive"]
  },
  {
    id: "mansa-to-chandigarh",
    slug: "mansa-to-chandigarh",
    from: "Mansa",
    to: "Chandigarh",
    distanceKm: 135,
    duration: "3-3.5 hours",
    displayFare: 2000,
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Highway Route"]
  },
  {
    id: "sunam-to-chandigarh",
    slug: "sunam-to-chandigarh",
    from: "Sunam",
    to: "Chandigarh",
    distanceKm: 110,
    duration: "2.5-3 hours",
    displayFare: 1800,
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "City Connection"]
  },

  // Remaining Haryana
  {
    id: "kaithal-to-chandigarh",
    slug: "kaithal-to-chandigarh",
    from: "Kaithal",
    to: "Chandigarh",
    distanceKm: 120,
    duration: "2.5-3 hours",
    displayFare: 1900,
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Highway Drive"]
  }
];

export default destinations;
