import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: "About ModgillTravels | Professional Taxi Service Since Years",
  description: "Learn about ModgillTravels - your trusted taxi service provider in Punjab, Haryana, and Himachal Pradesh. Professional drivers, reliable service, transparent pricing.",
  keywords: "about ModgillTravels, taxi service company, Punjab taxi service, professional drivers, reliable transportation",
  openGraph: {
    title: "About ModgillTravels - Professional Taxi Service",
    description: "Learn about ModgillTravels - your trusted taxi service provider with professional drivers and reliable service.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
