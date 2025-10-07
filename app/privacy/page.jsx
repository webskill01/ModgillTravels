// app/privacy/page.jsx
import PrivacyContent from '@/components/PrivacyContent';
import SEO from '@/components/SEO';

export const metadata = {
  title: "Privacy Policy - ModgillTravels | Your Data Protection & Security",
  description: "Read ModgillTravels privacy policy. Learn how we collect, use, protect your personal information. SSL encryption, transparent data practices, GDPR compliant. Your privacy is our priority.",
  keywords: "privacy policy, data protection, personal information security, ModgillTravels privacy, GDPR, data security, user privacy",
  openGraph: {
    title: "Privacy Policy - ModgillTravels",
    description: "Learn how ModgillTravels protects your personal information with SSL encryption and transparent privacy practices.",
    type: "website",
    url: "https://modgilltravels.in/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://modgilltravels.in/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy - ModgillTravels"
        description="Learn how ModgillTravels protects your personal information, data usage policies, and your privacy rights when using our taxi booking services."
        keywords="privacy policy, data protection, ModgillTravels privacy"
        url="/privacy"
      />
      <PrivacyContent />
    </>
  );
}
