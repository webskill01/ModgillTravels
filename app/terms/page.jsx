import TermsContent from '@/components/TermsContent';

export const metadata = {
  title: "Terms of Service - ModgillTravels | Taxi Booking Terms & Conditions",
  description: "Read ModgillTravels terms of service, booking conditions, cancellation policies, and user responsibilities for our taxi services.",
  keywords: "terms of service, taxi booking terms, ModgillTravels conditions, booking policy, cancellation terms",
  openGraph: {
    title: "Terms of Service - ModgillTravels",
    description: "Read our terms of service and booking conditions for taxi services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsPage() {
  return <TermsContent />;
}
