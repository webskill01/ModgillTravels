import HeroSection from "../components/HeroSection";
import RouteCarousel from "../components/RouteCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import SEO from '@/components/SEO';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/utils/structuredData';

export const metadata = {
  title: "Professional Taxi Service in Punjab | ModgillTravels - 24/7 Cab Booking",
  description: "Book reliable taxi service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Professional drivers, transparent pricing, 24/7 availability. Book now!",
  keywords: "taxi service Punjab, cab booking Patiala, Delhi to Patiala taxi, Chandigarh to Shimla cab, taxi booking India",
  
  openGraph: {
    title: "Professional Taxi Service in Punjab | ModgillTravels",
    description: "Book reliable taxi service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Professional drivers, transparent pricing, 24/7 availability.",
    type: 'website',
    siteName: 'ModgillTravels',
  },
  
  twitter: {
    card: 'summary',
    title: "Professional Taxi Service in Punjab | ModgillTravels",
    description: "Book reliable taxi service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Professional drivers, transparent pricing, 24/7 availability.",
  },
};


export default function HomePage() {
  const jsonLd = [
    getOrganizationSchema(),
    getLocalBusinessSchema()
  ];

  return (
    <>
      <SEO
        title="Professional Taxi Service in Punjab"
        description="Book reliable taxi service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Professional drivers, transparent pricing, 24/7 availability."
        keywords="taxi service Punjab, cab booking Patiala, Delhi to Patiala taxi, Chandigarh to Shimla cab"
        jsonLd={jsonLd}
      />
      <div>
      <HeroSection />
      <RouteCarousel />
      <WhyChooseUs />
    </div>
    </>
  );
}