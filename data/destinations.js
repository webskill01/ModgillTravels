// data/destinations.js

const destinations = [
  // Patiala Routes (Priority)
  {
    id: "patiala-to-delhi",
    slug: "patiala-to-delhi",
    from: "Patiala",
    to: "Delhi",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"],
    description: "Professional taxi service from Patiala to Delhi with experienced drivers and comfortable vehicles."
  },
  {
    id: "delhi-to-patiala",
    slug: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceKm: 240,
    duration: "4.5-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Professional Driver", "Highway Expert"]
  },
  {
    id: "patiala-to-chandigarh",
    slug: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"]
  },
  {
    id: "chandigarh-to-patiala",
    slug: "chandigarh-to-patiala",
    from: "Chandigarh",
    to: "Patiala",
    distanceKm: 67,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "City Expert"]
  },
  {
    id: "patiala-to-mohali",
    slug: "patiala-to-mohali",
    from: "Patiala",
    to: "Mohali",
    distanceKm: 65,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "mohali-to-patiala",
    slug: "mohali-to-patiala",
    from: "Mohali",
    to: "Patiala",
    distanceKm: 65,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "patiala-to-ludhiana",
    slug: "patiala-to-ludhiana",
    from: "Patiala",
    to: "Ludhiana",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"]
  },
  {
    id: "ludhiana-to-patiala",
    slug: "ludhiana-to-patiala",
    from: "Ludhiana",
    to: "Patiala",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Business Route", "Professional Driver"]
  },
  {
    id: "patiala-to-jalandhar",
    slug: "patiala-to-jalandhar",
    from: "Patiala",
    to: "Jalandhar",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "jalandhar-to-patiala",
    slug: "jalandhar-to-patiala",
    from: "Jalandhar",
    to: "Patiala",
    distanceKm: 100,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "patiala-to-amritsar",
    slug: "patiala-to-amritsar",
    from: "Patiala",
    to: "Amritsar",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"]
  },
  {
    id: "amritsar-to-patiala",
    slug: "amritsar-to-patiala",
    from: "Amritsar",
    to: "Patiala",
    distanceKm: 165,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"]
  },
  {
    id: "patiala-to-sangrur",
    slug: "patiala-to-sangrur",
    from: "Patiala",
    to: "Sangrur",
    distanceKm: 60,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Quick Transfer"]
  },
  {
    id: "sangrur-to-patiala",
    slug: "sangrur-to-patiala",
    from: "Sangrur",
    to: "Patiala",
    distanceKm: 60,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Quick Transfer"]
  },
  {
    id: "patiala-to-sunam",
    slug: "patiala-to-sunam",
    from: "Patiala",
    to: "Sunam",
    distanceKm: 80,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Local Expert"]
  },
  {
    id: "sunam-to-patiala",
    slug: "sunam-to-patiala",
    from: "Sunam",
    to: "Patiala",
    distanceKm: 80,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Local Expert"]
  },
  {
    id: "patiala-to-mansa",
    slug: "patiala-to-mansa",
    from: "Patiala",
    to: "Mansa",
    distanceKm: 75,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Professional Driver"]
  },
  {
    id: "mansa-to-patiala",
    slug: "mansa-to-patiala",
    from: "Mansa",
    to: "Patiala",
    distanceKm: 75,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Professional Driver"]
  },
  {
    id: "patiala-to-bathinda",
    slug: "patiala-to-bathinda",
    from: "Patiala",
    to: "Bathinda",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "bathinda-to-patiala",
    slug: "bathinda-to-patiala",
    from: "Bathinda",
    to: "Patiala",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "patiala-to-shimla",
    slug: "patiala-to-shimla",
    from: "Patiala",
    to: "Shimla",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"]
  },
  {
    id: "shimla-to-patiala",
    slug: "shimla-to-patiala",
    from: "Shimla",
    to: "Patiala",
    distanceKm: 180,
    duration: "5-6 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Expert", "Mountain Route"]
  },

  // Delhi Routes (Major Hub)
  {
    id: "delhi-to-chandigarh",
    slug: "delhi-to-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    distanceKm: 245,
    duration: "4-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "chandigarh-to-delhi",
    slug: "chandigarh-to-delhi",
    from: "Chandigarh",
    to: "Delhi",
    distanceKm: 245,
    duration: "4-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "delhi-to-shimla",
    slug: "delhi-to-shimla",
    from: "Delhi",
    to: "Shimla",
    distanceKm: 343,
    duration: "7-8 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "shimla-to-delhi",
    slug: "shimla-to-delhi",
    from: "Shimla",
    to: "Delhi",
    distanceKm: 343,
    duration: "7-8 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "delhi-to-amritsar",
    slug: "delhi-to-amritsar",
    from: "Delhi",
    to: "Amritsar",
    distanceKm: 465,
    duration: "8-9 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "amritsar-to-delhi",
    slug: "amritsar-to-delhi",
    from: "Amritsar",
    to: "Delhi",
    distanceKm: 465,
    duration: "8-9 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "delhi-to-ludhiana",
    slug: "delhi-to-ludhiana",
    from: "Delhi",
    to: "Ludhiana",
    distanceKm: 325,
    duration: "6-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Business Friendly"]
  },
  {
    id: "ludhiana-to-delhi",
    slug: "ludhiana-to-delhi",
    from: "Ludhiana",
    to: "Delhi",
    distanceKm: 325,
    duration: "6-7 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Business Friendly"]
  },
  {
    id: "delhi-to-jalandhar",
    slug: "delhi-to-jalandhar",
    from: "Delhi",
    to: "Jalandhar",
    distanceKm: 360,
    duration: "6.5-7.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "jalandhar-to-delhi",
    slug: "jalandhar-to-delhi",
    from: "Jalandhar",
    to: "Delhi",
    distanceKm: 360,
    duration: "6.5-7.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Comfortable Seats"]
  },
  {
    id: "delhi-to-bathinda",
    slug: "delhi-to-bathinda",
    from: "Delhi",
    to: "Bathinda",
    distanceKm: 245,
    duration: "4.5-5.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "bathinda-to-delhi",
    slug: "bathinda-to-delhi",
    from: "Bathinda",
    to: "Delhi",
    distanceKm: 245,
    duration: "4.5-5.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },

  // Chandigarh Routes (Major Hub)
  {
    id: "chandigarh-to-shimla",
    slug: "chandigarh-to-shimla",
    from: "Chandigarh",
    to: "Shimla",
    distanceKm: 114,
    duration: "3-3.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "shimla-to-chandigarh",
    slug: "shimla-to-chandigarh",
    from: "Shimla",
    to: "Chandigarh",
    distanceKm: 114,
    duration: "3-3.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Hill Driving Expert", "Scenic Route"]
  },
  {
    id: "chandigarh-to-amritsar",
    slug: "chandigarh-to-amritsar",
    from: "Chandigarh",
    to: "Amritsar",
    distanceKm: 235,
    duration: "4-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Religious Tourism"]
  },
  {
    id: "amritsar-to-chandigarh",
    slug: "amritsar-to-chandigarh",
    from: "Amritsar",
    to: "Chandigarh",
    distanceKm: 235,
    duration: "4-5 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Religious Tourism"]
  },
  {
    id: "chandigarh-to-ludhiana",
    slug: "chandigarh-to-ludhiana",
    from: "Chandigarh",
    to: "Ludhiana",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "ludhiana-to-chandigarh",
    slug: "ludhiana-to-chandigarh",
    from: "Ludhiana",
    to: "Chandigarh",
    distanceKm: 95,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "chandigarh-to-jalandhar",
    slug: "chandigarh-to-jalandhar",
    from: "Chandigarh",
    to: "Jalandhar",
    distanceKm: 145,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "City Expert", "Comfortable Ride"]
  },
  {
    id: "jalandhar-to-chandigarh",
    slug: "jalandhar-to-chandigarh",
    from: "Jalandhar",
    to: "Chandigarh",
    distanceKm: 145,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "City Expert", "Comfortable Ride"]
  },
  {
    id: "chandigarh-to-bathinda",
    slug: "chandigarh-to-bathinda",
    from: "Chandigarh",
    to: "Bathinda",
    distanceKm: 175,
    duration: "3.5-4.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Comfortable Journey"]
  },
  {
    id: "bathinda-to-chandigarh",
    slug: "bathinda-to-chandigarh",
    from: "Bathinda",
    to: "Chandigarh",
    distanceKm: 175,
    duration: "3.5-4.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Comfortable Journey"]
  },
  {
    id: "chandigarh-to-mohali",
    slug: "chandigarh-to-mohali",
    from: "Chandigarh",
    to: "Mohali",
    distanceKm: 14,
    duration: "0.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "mohali-to-chandigarh",
    slug: "mohali-to-chandigarh",
    from: "Mohali",
    to: "Chandigarh",
    distanceKm: 14,
    duration: "0.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "chandigarh-to-sangrur",
    slug: "chandigarh-to-sangrur",
    from: "Chandigarh",
    to: "Sangrur",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Comfortable Drive"]
  },
  {
    id: "sangrur-to-chandigarh",
    slug: "sangrur-to-chandigarh",
    from: "Sangrur",
    to: "Chandigarh",
    distanceKm: 85,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Comfortable Drive"]
  },
  {
    id: "chandigarh-to-mansa",
    slug: "chandigarh-to-mansa",
    from: "Chandigarh",
    to: "Mansa",
    distanceKm: 135,
    duration: "3-3.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Highway Route"]
  },
  {
    id: "mansa-to-chandigarh",
    slug: "mansa-to-chandigarh",
    from: "Mansa",
    to: "Chandigarh",
    distanceKm: 135,
    duration: "3-3.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Expert", "Highway Route"]
  },
  {
    id: "chandigarh-to-sunam",
    slug: "chandigarh-to-sunam",
    from: "Chandigarh",
    to: "Sunam",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "City Connection"]
  },
  {
    id: "sunam-to-chandigarh",
    slug: "sunam-to-chandigarh",
    from: "Sunam",
    to: "Chandigarh",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "City Connection"]
  },

  // Inter-Punjab Routes
  {
    id: "ludhiana-to-jalandhar",
    slug: "ludhiana-to-jalandhar",
    from: "Ludhiana",
    to: "Jalandhar",
    distanceKm: 65,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "jalandhar-to-ludhiana",
    slug: "jalandhar-to-ludhiana",
    from: "Jalandhar",
    to: "Ludhiana",
    distanceKm: 65,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "amritsar-to-jalandhar",
    slug: "amritsar-to-jalandhar",
    from: "Amritsar",
    to: "Jalandhar",
    distanceKm: 80,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"]
  },
  {
    id: "jalandhar-to-amritsar",
    slug: "jalandhar-to-amritsar",
    from: "Jalandhar",
    to: "Amritsar",
    distanceKm: 80,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Religious Tourism", "Highway Expert"]
  },
  {
    id: "amritsar-to-bathinda",
    slug: "amritsar-to-bathinda",
    from: "Amritsar",
    to: "Bathinda",
    distanceKm: 150,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "bathinda-to-amritsar",
    slug: "bathinda-to-amritsar",
    from: "Bathinda",
    to: "Amritsar",
    distanceKm: 150,
    duration: "3-4 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Long Distance"]
  },
  {
    id: "ludhiana-to-bathinda",
    slug: "ludhiana-to-bathinda",
    from: "Ludhiana",
    to: "Bathinda",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Professional Driver"]
  },
  {
    id: "bathinda-to-ludhiana",
    slug: "bathinda-to-ludhiana",
    from: "Bathinda",
    to: "Ludhiana",
    distanceKm: 110,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Professional Driver"]
  },
  {
    id: "mohali-to-ludhiana",
    slug: "mohali-to-ludhiana",
    from: "Mohali",
    to: "Ludhiana",
    distanceKm: 58,
    duration: "1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "ludhiana-to-mohali",
    slug: "ludhiana-to-mohali",
    from: "Ludhiana",
    to: "Mohali",
    distanceKm: 58,
    duration: "1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Business Route"]
  },
  {
    id: "jalandhar-to-mohali",
    slug: "jalandhar-to-mohali",
    from: "Jalandhar",
    to: "Mohali",
    distanceKm: 90,
    duration: "2-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Comfortable Ride"]
  },
  {
    id: "mohali-to-jalandhar",
    slug: "mohali-to-jalandhar",
    from: "Mohali",
    to: "Jalandhar",
    distanceKm: 90,
    duration: "2-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Comfortable Ride"]
  },
  {
    id: "sunam-to-sangrur",
    slug: "sunam-to-sangrur",
    from: "Sunam",
    to: "Sangrur",
    distanceKm: 43,
    duration: "1 hour",
    carFeatures: ["AC", "GPS Tracking", "Local Route", "Quick Transfer"]
  },
  {
    id: "sangrur-to-sunam",
    slug: "sangrur-to-sunam",
    from: "Sangrur",
    to: "Sunam",
    distanceKm: 43,
    duration: "1 hour",
    carFeatures: ["AC", "GPS Tracking", "Local Route", "Quick Transfer"]
  },

  // Haryana Routes
  {
    id: "ambala-to-chandigarh",
    slug: "ambala-to-chandigarh",
    from: "Ambala",
    to: "Chandigarh",
    distanceKm: 45,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "chandigarh-to-ambala",
    slug: "chandigarh-to-ambala",
    from: "Chandigarh",
    to: "Ambala",
    distanceKm: 45,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Local Expert"]
  },
  {
    id: "karnal-to-delhi",
    slug: "karnal-to-delhi",
    from: "Karnal",
    to: "Delhi",
    distanceKm: 125,
    duration: "2-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Quick Service"]
  },
  {
    id: "delhi-to-karnal",
    slug: "delhi-to-karnal",
    from: "Delhi",
    to: "Karnal",
    distanceKm: 125,
    duration: "2-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "Quick Service"]
  },
  {
    id: "panipat-to-delhi",
    slug: "panipat-to-delhi",
    from: "Panipat",
    to: "Delhi",
    distanceKm: 90,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "City Connection"]
  },
  {
    id: "delhi-to-panipat",
    slug: "delhi-to-panipat",
    from: "Delhi",
    to: "Panipat",
    distanceKm: 90,
    duration: "1.5-2 hours",
    carFeatures: ["AC", "GPS Tracking", "Highway Expert", "City Connection"]
  },
  {
    id: "kurukshetra-to-chandigarh",
    slug: "kurukshetra-to-chandigarh",
    from: "Kurukshetra",
    to: "Chandigarh",
    distanceKm: 90,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Religious Tourism"]
  },
  {
    id: "chandigarh-to-kurukshetra",
    slug: "chandigarh-to-kurukshetra",
    from: "Chandigarh",
    to: "Kurukshetra",
    distanceKm: 90,
    duration: "2-2.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Religious Tourism"]
  },
  {
    id: "sonipat-to-delhi",
    slug: "sonipat-to-delhi",
    from: "Sonipat",
    to: "Delhi",
    distanceKm: 45,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "NCR Route"]
  },
  {
    id: "delhi-to-sonipat",
    slug: "delhi-to-sonipat",
    from: "Delhi",
    to: "Sonipat",
    distanceKm: 45,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "NCR Route"]
  },
  {
    id: "kaithal-to-chandigarh",
    slug: "kaithal-to-chandigarh",
    from: "Kaithal",
    to: "Chandigarh",
    distanceKm: 120,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Highway Drive"]
  },
  {
    id: "chandigarh-to-kaithal",
    slug: "chandigarh-to-kaithal",
    from: "Chandigarh",
    to: "Kaithal",
    distanceKm: 120,
    duration: "2.5-3 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Highway Drive"]
  },
  {
    id: "ambala-to-karnal",
    slug: "ambala-to-karnal",
    from: "Ambala",
    to: "Karnal",
    distanceKm: 50,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Regional Route"]
  },
  {
    id: "karnal-to-ambala",
    slug: "karnal-to-ambala",
    from: "Karnal",
    to: "Ambala",
    distanceKm: 50,
    duration: "1-1.5 hours",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Regional Route"]
  },
  {
    id: "kurukshetra-to-panipat",
    slug: "kurukshetra-to-panipat",
    from: "Kurukshetra",
    to: "Panipat",
    distanceKm: 85,
    duration: "2 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Highway Expert"]
  },
  {
    id: "panipat-to-kurukshetra",
    slug: "panipat-to-kurukshetra",
    from: "Panipat",
    to: "Kurukshetra",
    distanceKm: 85,
    duration: "2 hours",
    carFeatures: ["AC", "GPS Tracking", "Regional Route", "Highway Expert"]
  },
  {
    id: "sonipat-to-panipat",
    slug: "sonipat-to-panipat",
    from: "Sonipat",
    to: "Panipat",
    distanceKm: 50,
    duration: "1 hour",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Regional Route"]
  },
  {
    id: "panipat-to-sonipat",
    slug: "panipat-to-sonipat",
    from: "Panipat",
    to: "Sonipat",
    distanceKm: 50,
    duration: "1 hour",
    carFeatures: ["AC", "GPS Tracking", "Quick Transfer", "Regional Route"]
  }
];

export default destinations;
