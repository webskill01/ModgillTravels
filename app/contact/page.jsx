// app/contact/page.jsx
import ContactContent from '@/components/ContactContent';
import SEO from '@/components/SEO';
import { getOrganizationSchema } from '@/utils/structuredData';

export const metadata = {
  title: "Contact ModgillTravels - 24/7 Taxi Booking Support in Patiala",
  description: "Get in touch with ModgillTravels for taxi bookings in Patiala and nearby areas. 24/7 phone & WhatsApp support at +91-62849-92669. Email: modgilltravels@gmail.com. Office in Patiala, Punjab.",
  keywords: "contact ModgillTravels, taxi booking Patiala, customer support, WhatsApp taxi booking, phone number, Patiala taxi contact, 24/7 cab support",
  openGraph: {
    title: "Contact ModgillTravels - 24/7 Taxi Booking Support",
    description: "Need a taxi in Patiala? Contact us 24/7 via phone, WhatsApp, or email. Fast response, professional service.",
    type: "website",
    url: "https://modgilltravels.in/contact",
    siteName: "ModgillTravels",
  },
  twitter: {
    card: "summary",
    title: "Contact ModgillTravels - 24/7 Support",
    description: "Get in touch for taxi bookings in Patiala. Available 24/7 via phone & WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://modgilltravels.in/contact',
  },
};

export default function ContactPage() {
  const organizationSchema = getOrganizationSchema();
  
  return (
    <>
      <SEO
        title="Contact ModgillTravels - 24/7 Taxi Booking Support"
        description="Get in touch with ModgillTravels for taxi bookings in Patiala. 24/7 support via phone, WhatsApp, email. Fast response guaranteed."
        keywords="contact ModgillTravels, taxi booking Patiala, customer support, 24/7 cab service"
        url="/contact"
        jsonLd={[organizationSchema]}
      />
      <ContactContent />
    </>
  );
}
