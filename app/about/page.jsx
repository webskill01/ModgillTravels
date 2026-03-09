// app/about/page.jsx
import AboutContent from '@/components/AboutContent';
import SEO from '@/components/SEO';
import { getOrganizationSchema } from '@/utils/structuredData';

export const metadata = {
  // patch_022: Title rewrite — removes false 2020 founding year, adds primary keyword
  title: "About ModgillTravels | Best Taxi Service in Patiala, Punjab — Reliable Cab Booking",
  description: "Learn about ModgillTravels - your reliable taxi service provider in Patiala, Punjab. Professional drivers, transparent pricing, 24/7 support. Serving Punjab, Haryana, Himachal Pradesh & Delhi NCR with 5000+ completed trips.",
  keywords: "about ModgillTravels, taxi service Patiala, cab service Punjab, professional drivers, reliable transportation, taxi company Patiala",
  openGraph: {
    title: "About ModgillTravels - Best Taxi Service in Patiala, Punjab",
    description: "Professional taxi service founded in 2025, 5000+ completed trips, and 24/7 support. Serving Punjab, Haryana & Himachal Pradesh.",
    type: "website",
    url: "https://modgilltravels.in/about",
    siteName: "ModgillTravels",
  },
  twitter: {
    card: "summary",
    title: "About ModgillTravels - Best Taxi Service in Patiala",
    description: "Trusted taxi service in Patiala, Punjab. Founded 2025 with 5000+ completed trips. 24/7 availability.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.modgilltravels.in/about',
  },
};

export default function AboutPage() {
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <SEO
        title="About ModgillTravels - Best Taxi Service in Patiala, Punjab"
        description="Learn about ModgillTravels - professional taxi service in Patiala founded 2025 with 5000+ completed trips, transparent pricing, and 24/7 support."
        keywords="about ModgillTravels, taxi service Patiala, professional drivers, reliable cab service"
        url="/about"
        jsonLd={[organizationSchema]}
      />
      <AboutContent />
    </>
  );
}
