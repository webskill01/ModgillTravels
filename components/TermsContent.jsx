"use client";

import Link from 'next/link';
import GavelIcon from '@mui/icons-material/Gavel';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaymentIcon from '@mui/icons-material/Payment';
import CancelIcon from '@mui/icons-material/Cancel';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WarningIcon from '@mui/icons-material/Warning';

const sections = [
  {
    id: 'acceptance-terms',
    title: 'Acceptance of Terms',
    icon: <GavelIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'By using our services, you agree to these terms and conditions.',
    details: [
      'Agreement binding upon booking completion',
      'Must be 18+ years or have guardian consent',
      'Terms apply to all ModgillTravels services',
      'Continued use implies acceptance of updates'
    ]
  },
  {
    id: 'booking-services',
    title: 'Booking & Services',
    icon: <BookOnlineIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'How to book rides, service availability, and booking confirmations.',
    details: [
      'Advance booking recommended for availability',
      'Service subject to driver and vehicle availability',
      'Confirmation via Call within 2 hours of booking',
      'Accurate information required for all bookings'
    ]
  },
  {
    id: 'payment-pricing',
    title: 'Payment & Pricing',
    icon: <PaymentIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Fare structure, payment methods, and additional charges.',
    details: [
      'Fixed rates as displayed during booking',
      'Only Parking Charges Extra',
      'Payment due at trip completion unless pre-arranged'
    ]
  },
  {
  id: 'cancellation-policy',
  title: 'Cancellation Policy',
  icon: <CancelIcon className="w-6 h-6 text-cyan-600" />,
  summary: 'Advance payment and cancellation terms for booking confirmation.',
  details: [
    'We will contact you to collect ₹200 advance payment for booking confirmation',
    'Ride confirmed only after advance payment is received',
    'Customer cancellation: ₹200 advance payment will not be refunded',
    'Company cancellation: ₹200 refund + ₹100 additional compensation',
    'Weather/emergency cancellations by company: Full refund with compensation',
    'Advance payment ensures your booking priority and driver allocation'
  ]
},
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    icon: <SecurityIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Your obligations regarding conduct, safety, and accurate information.',
    details: [
      'Provide accurate pickup and drop locations',
      'Be punctual for scheduled pickups',
      'Respectful behavior with drivers required',
      'No smoking, drinking, or illegal activities in vehicles'
    ]
  },
  {
    id: 'liability-limitations',
    title: 'Liability & Limitations',
    icon: <WarningIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Service limitations, liability coverage, and risk acknowledgments.',
    details: [
      'Service provided "as is" with reasonable care',
      'Not liable for delays due to traffic or weather',
      'Basic insurance coverage for passenger safety',
      'Users responsible for personal belongings'
    ]
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    icon: <SupportAgentIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'How to resolve issues, complaints, and legal jurisdiction.',
    details: [
      'First contact customer support for resolution',
      'Escalation to management within 48 hours',
      'Mediation preferred over legal proceedings',
      'Jurisdiction: Courts of Patiala, Punjab, India'
    ]
  }
];

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-gray-900 pb-10">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2">
            <GavelIcon className="w-6 h-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Your agreement for using ModgillTravels services
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Quick Summary */}
        <section className="bg-slate-800 border border-gray-700 rounded-lg p-5 mb-8">
          <h2 className="text-lg font-semibold text-white mb-1">Quick Summary</h2>
          <p className="text-gray-300 text-sm">
            Book responsibly, pay on time, cancel with 2+ hours notice to avoid charges,
            treat drivers respectfully, and contact us for any issues.
            <Link href="#contact" className="text-cyan-600 hover:text-cyan-500 underline ml-1 font-medium transition">
              Questions?
            </Link>
          </p>
        </section>

        {/* Important Notice */}
        <section className="bg-yellow-900/40 border border-yellow-600/30 rounded-lg p-5 mb-8">
          <div className="flex items-start gap-3">
            <WarningIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-300 font-medium text-sm mb-1">Important Notice</h3>
              <p className="text-yellow-200 text-xs leading-relaxed">
                These terms constitute a legal agreement. Please read carefully before booking.
                Booking any service indicates acceptance of all terms and conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Card Sections */}
        <section className="grid gap-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-slate-800 border border-gray-700 rounded-xl p-5">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">{section.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">{section.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{section.summary}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 pl-1">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs md:text-sm">
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-600 inline-block flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Policies Highlight */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <CancelIcon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-white font-medium">Cancellation</div>
            <div className="text-purple-200 text-sm">Free till 2hrs before</div>
          </div>
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <PaymentIcon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-white font-medium">Night Charges</div>
            <div className="text-purple-200 text-sm">+10% (11PM-5AM)</div>
          </div>
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <SupportAgentIcon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <div className="text-white font-medium">Support</div>
            <div className="text-purple-200 text-sm">24/7 available</div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-10 bg-slate-800 border border-gray-700 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center">
              <ContactMailIcon className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Questions or Disputes?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                <div>
                  <span className="text-gray-400">Support Email:</span>
                  <Link href="mailto:modgilltravels@gmail.com" className="text-cyan-600 hover:text-cyan-500 ml-1 underline">modgilltravels@gmail.com</Link>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <Link href="tel:+916284992669" className="text-cyan-600 hover:text-cyan-500 ml-1 underline">+91-62849-92669</Link>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Business hours: 24/7 • Response time: Within 2 hours • Escalation: Management within 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="mt-8 bg-gray-800 border border-gray-700 rounded-lg p-5">
          <h3 className="text-gray-300 font-medium text-sm mb-2">Legal Information</h3>
          <div className="text-gray-400 text-xs space-y-1">
            <p>• These terms are governed by Indian law and subject to Patiala, Punjab jurisdiction</p>
            <p>• Terms may be updated with 30 days notice via email and website notification</p>
            <p>• Severability clause: Invalid provisions don't affect remaining terms</p>
            <p>• Business License: Valid taxi operator license in Punjab state</p>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/" className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition text-center text-sm">
            Back to Home
          </Link>
          <Link href="/privacy" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg font-medium transition text-center text-sm">
            Privacy Policy
          </Link>
        </div>
      </main>
    </div>
  );
}
