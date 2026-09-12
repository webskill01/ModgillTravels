// app/terms/page.jsx
import TermsContent from '@/components/TermsContent';
import SEO from '@/components/SEO';

export const metadata = {
  title: "Terms & Conditions | ModgillTravels",
  description: "ModgillTravels terms of service — booking conditions, the ₹200 advance, cancellation policy and payment terms.",
  keywords: "terms of service, taxi booking terms, cancellation policy, ModgillTravels conditions, booking agreement, taxi terms and conditions",
  openGraph: {
    title: "Terms & Conditions - ModgillTravels",
    description: "Understand our booking terms, cancellation policy, and service conditions for ModgillTravels taxi services.",
    type: "website",
    url: "https://www.modgilltravels.in/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.modgilltravels.in/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions - ModgillTravels"
        description="Read our terms of service, booking conditions, cancellation policy, and user responsibilities for ModgillTravels taxi services."
        keywords="terms of service, booking terms, cancellation policy, taxi conditions"
        url="/terms"
      />
      <TermsContent />
    </>
  );
}
