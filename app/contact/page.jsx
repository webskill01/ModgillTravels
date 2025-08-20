import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: "Contact Us - ModgillTravels | 24/7 Taxi Booking Support",
  description: "Contact ModgillTravels for taxi bookings, customer support, and inquiries. Available 24/7 via phone, WhatsApp, email. Based in Patiala, Punjab.",
  keywords: "contact ModgillTravels, taxi booking support, Patiala taxi contact, customer service, 24/7 support",
  openGraph: {
    title: "Contact ModgillTravels - 24/7 Support",
    description: "Get in touch with ModgillTravels for taxi bookings and support. Available 24/7.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function ContactPage() {
  return <ContactContent />;
}
