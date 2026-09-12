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
  // Prefilled booking link. Every CTA uses this rather than a hand-written
  // wa.me URL — one of those was shipped missing the 91 country code and the
  // button was dead. waLink() is for the few CTAs that want their own message.
  whatsappBook:
    "https://wa.me/916284992669?text=Hi%2C%20I%20want%20to%20book%20a%20taxi",
  email: "modgilltravels@gmail.com",

  // Google Business Profile. ponytail: this is the Maps *search* URL, which
  // always resolves to the listing without needing the CID. Swap it for the
  // profile's own short link (g.page/... or maps.app.goo.gl/...) from the GBP
  // dashboard — "Share profile" — when that is to hand; it is one hop shorter.
  gbp: "https://www.google.com/maps/search/?api=1&query=ModgillTravels%20Patiala",

  // Service-area business: the GBP reads "No location; deliveries and home
  // services only". The street line is the real operating base in Urban
  // Estate Phase 2, confirmed by the owner — it is not an invented address
  // (the site once claimed "Main Market, Near Bus Stand", which matched
  // neither the GBP nor the actual locality). The schema files each used to
  // hardcode their own copy of this; they now all read it from here.
  address: {
    street: "Urban Estate, Phase 2",
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

// For CTAs that want a context-specific opening message.
export const waLink = (text) =>
  `${site.whatsapp}?text=${encodeURIComponent(text)}`;

export default site;
