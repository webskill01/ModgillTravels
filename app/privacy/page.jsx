import PrivacyContent from '@/components/PrivacyContent';

export const metadata = {
  title: "Privacy Policy - ModgillTravels | Data Protection & Security",
  description: "Learn how ModgillTravels protects your personal information, data usage policies, and your privacy rights when using our taxi booking services.",
  keywords: "privacy policy, data protection, ModgillTravels privacy, personal information security",
  openGraph: {
    title: "Privacy Policy - ModgillTravels",
    description: "Learn how ModgillTravels protects your personal information and privacy rights.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
