// data/site.js — the single source of truth for NAP, ratings and service area.
//
// Nothing here may be duplicated elsewhere. The rating pair in particular used
// to be hardcoded in six places across app/layout.js, utils/structuredData.js
// and utils/citySchema.js, which guaranteed drift on review #32.
//
// NAP must stay byte-identical to the Google Business Profile. It is a top-3
// local ranking signal, and Justdial/IndiaMART are checked against it too.

const site = {
  // GBP spells this as one word. Justdial, IndiaMART and Google's own
  // "Did you mean" all use two. Aligning the profile to "Modgill Travels" is
  // the cheaper fix — until that happens the site matches the GBP.
  businessName: "ModgillTravels",
  legalName: "Modgill Travels",
  tagline: "Patiala's 24/7 taxi and outstation cab service",

  // 6284992669 is primary: it is what the GBP displays and what every
  // citation carries. 8976376926 is a confirmed second line.
  phone: "+91-62849-92669",
  phoneSecondary: "+91-89763-76926",
  phoneDigits: "916284992669",
  whatsapp: "https://wa.me/916284992669",
  email: "modgilltravels@gmail.com",

  // Service-area business: the GBP reads "No location; deliveries and home
  // services only", so there is no public street address and the site must
  // not invent one. It previously claimed "Main Market, Near Bus Stand",
  // which matched neither the GBP nor the Urban Estate Phase 2 locality.
  address: {
    locality: "Patiala",
    region: "Punjab",
    postalCode: "147001",
    country: "IN",
  },
  geo: { latitude: 30.3398, longitude: 76.3869 },

  // Mirrors the GBP service-area list exactly.
  serviceArea: [
    "Patiala",
    "Chandigarh",
    "Delhi",
    "Ambala",
    "Sangrur",
    "Amritsar",
    "Zirakpur",
    "Jalandhar",
    "Nabha",
    "Mohali",
  ],

  // Verified against the GBP dashboard. Update both numbers together, here
  // and nowhere else.
  rating: { value: 5.0, count: 31 },

  foundedYear: 2025, // GBP opening date: 1 January 2025.
  tripsCompleted: "5,000+",

  hours: { opens: "00:00", closes: "23:59", allWeek: true },

  // No emoji — icons come from components/Icons.jsx as SVG.
  valueProps: [
    {
      title: "Available 24/7",
      text: "Early flights and late arrivals included. Someone answers the phone.",
      icon: "clock",
    },
    {
      title: "Verified drivers",
      text: "Professional, background-checked drivers who know these roads.",
      icon: "shield",
    },
    {
      title: "Book on WhatsApp",
      text: "Send a message, get a confirmed cab. No forms, no account.",
      icon: "whatsapp",
    },
  ],

  socialLinks: {
    whatsapp: "https://wa.me/916284992669",
  },
};

export default site;
