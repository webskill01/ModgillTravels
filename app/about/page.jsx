// app/about/page.jsx
import AboutContent from '@/components/AboutContent';
import SEO from '@/components/SEO';
import { getOrganizationSchema } from '@/utils/structuredData';

export const metadata = {
  title: "About ModgillTravels | Trusted Taxi Service in Patiala Since 2020",
  description: "Learn about ModgillTravels - your reliable taxi service provider in Patiala, Punjab. Professional drivers, transparent pricing, 24/7 support. Serving Punjab, Haryana, Himachal Pradesh & Delhi NCR with 5000+ happy customers.",
  keywords: "about ModgillTravels, taxi service Patiala, cab service Punjab, professional drivers, reliable transportation, taxi company Patiala",
  openGraph: {
    title: "About ModgillTravels - Trusted Taxi Service in Patiala",
    description: "Professional taxi service with 10+ years experience, 5000+ happy customers, and 24/7 support. Serving Punjab, Haryana & Himachal Pradesh.",
    type: "website",
    url: "https://modgilltravels.in/about",
    siteName: "ModgillTravels",
  },
  twitter: {
    card: "summary",
    title: "About ModgillTravels - Professional Taxi Service",
    description: "Trusted taxi service in Patiala with 10+ years experience and 5000+ happy customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://modgilltravels.in/about',
  },
};

export default function AboutPage() {
  const organizationSchema = getOrganizationSchema();
  
  return (
    <>
      <SEO
        title="About ModgillTravels - Trusted Taxi Service in Patiala"
        description="Learn about ModgillTravels - professional taxi service in Patiala with 10+ years experience, 5000+ customers, transparent pricing, and 24/7 support."
        keywords="about ModgillTravels, taxi service Patiala, professional drivers, reliable cab service"
        url="/about"
        jsonLd={[organizationSchema]}
      />
      <AboutContent />
    </>
  );
}
