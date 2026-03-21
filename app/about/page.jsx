// app/about/page.jsx
import AboutContent from '@/components/AboutContent';
import { getOrganizationSchema } from '@/utils/structuredData';

export const metadata = {
  // patch_022: Title rewrite — removes false 2020 founding year, adds primary keyword
  title: "About ModgillTravels | Best Taxi Service in Patiala, Punjab — Reliable Cab Booking",
  description: "Trusted taxi service in Patiala. Professional drivers, AC vehicles, transparent pricing. 5000+ trips across Punjab, Haryana & Himachal Pradesh. Book 24/7.",
  keywords: "about ModgillTravels, taxi service Patiala, cab service Punjab, professional drivers, reliable transportation, taxi company Patiala",
  openGraph: {
    title: "About ModgillTravels - Best Taxi Service in Patiala, Punjab",
    description: "Professional taxi service founded in 2025, 5000+ completed trips, and 24/7 support. Serving Punjab, Haryana & Himachal Pradesh.",
    type: "website",
    url: "https://www.modgilltravels.in/about",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <AboutContent />
    </>
  );
}
