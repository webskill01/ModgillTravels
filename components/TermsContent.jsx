// components/TermsContent.jsx
"use client";

import Link from 'next/link';
import { GavelIcon, BookOnlineIcon, PaymentIcon, CancelIcon, SecurityIcon, SupportAgentIcon, ContactMailIcon, WarningIcon, UpdateIcon, VerifiedIcon } from '@/components/Icons';

const sections = [
  {
    id: 'acceptance-terms',
    title: 'Acceptance of Terms',
    icon: <GavelIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'By booking any ModgillTravels service, you agree to these binding terms.',
    details: [
      'Legally binding agreement upon booking completion',
      'Must be 18+ years old or have legal guardian consent',
      'Terms apply to all ModgillTravels taxi services',
      'Continued use of services implies acceptance of updated terms'
    ],
    color: 'cyan'
  },
  {
    id: 'booking-services',
    title: 'Booking & Service Delivery',
    icon: <BookOnlineIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'How to book rides, service availability, and confirmation process.',
    details: [
      'Advance booking recommended for guaranteed availability',
      'Service subject to driver and vehicle availability in your area',
      'Confirmation via phone/WhatsApp within 2 hours of booking request',
      'Accurate pickup/drop locations and contact info required',
      'We reserve the right to refuse service for safety reasons'
    ],
    color: 'blue'
  },
  {
    id: 'payment-pricing',
    title: 'Payment Terms & Pricing',
    icon: <PaymentIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Fare structure, payment methods, and additional charges explained.',
    details: [
      'Fixed rates displayed during booking are binding',
      'Toll charges and parking fees are additional (actual costs)',
      'Night charges: 10% extra between 11 PM - 5 AM',
      'Payment due at trip completion (cash, UPI, cards accepted)',
      'Advance payment (₹200) required for booking confirmation'
    ],
    color: 'green'
  },
  {
    id: 'cancellation-policy',
    title: 'Cancellation & Refund Policy',
    icon: <CancelIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: '₹200 advance payment required for booking confirmation with specific refund terms.',
    details: [
      'Advance payment: ₹200 collected for all bookings to confirm reservation',
      'Customer cancellation: ₹200 advance is non-refundable',
      'Company cancellation: ₹200 refund + ₹100 compensation = ₹300 total',
      'Weather/emergency cancellation by company: Full refund + compensation',
      'Advance payment ensures booking priority and driver allocation',
      'Refunds processed within 3-5 business days to original payment method'
    ],
    color: 'yellow'
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities & Conduct',
    icon: <SecurityIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Your obligations for safe, respectful use of our taxi services.',
    details: [
      'Provide accurate pickup and drop-off locations with landmarks',
      'Be punctual for scheduled pickups (5-minute grace period)',
      'Respectful, courteous behavior with drivers is mandatory',
      'No smoking, alcohol consumption, or illegal activities in vehicles',
      'Maximum passengers as per vehicle capacity (child policy applies)',
      'Responsible for securing personal belongings during travel'
    ],
    color: 'purple'
  },
  {
    id: 'liability-limitations',
    title: 'Liability & Service Limitations',
    icon: <WarningIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Understanding service limitations, liability coverage, and force majeure.',
    details: [
      'Service provided "as is" with reasonable care and professionalism',
      'Not liable for delays caused by traffic, weather, or road conditions',
      'Basic passenger insurance coverage as per vehicle policy',
      'Users responsible for personal belongings and valuable items',
      'Force majeure: Not liable for events beyond reasonable control',
      'Maximum liability limited to booking fare amount'
    ],
    color: 'red'
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution & Complaints',
    icon: <SupportAgentIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Clear process for resolving issues, complaints, and legal matters.',
    details: [
      'First step: Contact customer support via phone or email',
      'Escalation to management within 48 hours if unresolved',
      'Good-faith mediation preferred over legal proceedings',
      'Jurisdiction: Courts of Patiala, Punjab, India',
      'Response time: Initial reply within 2 hours, resolution within 7 days'
    ],
    color: 'blue'
  }
];

export default function TermsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-white border-b border-[--color-line]">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[--color-accent-soft] border border-[--color-brand] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
            <GavelIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[--color-brand]" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--color-ink] mb-3 sm:mb-4">
            Terms & Conditions
          </h1>
          <p className="text-[--color-ink-muted] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Your agreement for using ModgillTravels taxi booking services
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm text-[--color-ink-muted]">
            <UpdateIcon className="w-4 h-4" />
            <span>Last updated: October 7, 2025</span>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        
        {/* Quick Summary - Enhanced */}
        <section className="bg-[--color-accent-soft] border border-[--color-brand] rounded-xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-[--color-accent-soft] rounded-full flex items-center justify-center flex-shrink-0">
              <VerifiedIcon className="w-5 h-5 text-[--color-brand]" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[--color-ink] mb-2">Terms at a Glance</h2>
              <p className="text-[--color-brand] text-sm sm:text-base leading-relaxed">
                Book responsibly with accurate details, pay ₹200 advance to confirm, respect cancellation 
                terms, treat drivers courteously, and contact support for any issues. 
                <Link href="#contact" className="text-[--color-brand] hover:text-[--color-brand] underline font-semibold ml-1 transition">
                  Have questions?
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-[--color-accent-soft] border border-[--color-line] rounded-xl p-4 sm:p-5 mb-8">
          <div className="flex items-start gap-3">
            <WarningIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[--color-brand] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[--color-brand] font-semibold text-sm sm:text-base mb-2">
                Legal Agreement Notice
              </h3>
              <p className="text-[--color-brand] text-xs sm:text-sm leading-relaxed">
                These terms constitute a legally binding agreement between you and ModgillTravels. 
                Please read carefully before booking any service. Completing a booking indicates 
                your full acceptance of all terms and conditions stated below.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Sections - Mobile Optimized */}
        <section className="space-y-5 sm:space-y-6">
          {sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className="bg-white border border-[--color-line] rounded-xl p-4 sm:p-6 hover:border-[--color-brand] transition-all scroll-mt-20"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  section.color === 'cyan' ? 'bg-[--color-accent-soft]' :
                  section.color === 'blue' ? 'bg-[--color-accent-soft]' :
                  section.color === 'green' ? 'bg-[--color-accent-soft]' :
                  section.color === 'yellow' ? 'bg-[--color-accent-soft]' :
                  section.color === 'purple' ? 'bg-[--color-accent-soft]' : 'bg-[--color-accent-soft]'
                }`}>
                  <span className={
                    section.color === 'cyan' ? 'text-[--color-brand]' :
                    section.color === 'blue' ? 'text-[--color-brand]' :
                    section.color === 'green' ? 'text-[--color-brand]' :
                    section.color === 'yellow' ? 'text-[--color-brand]' :
                    section.color === 'purple' ? 'text-[--color-brand]' : 'text-[--color-brand]'
                  }>
                    {section.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[--color-ink] font-bold text-base sm:text-lg mb-2">{section.title}</h3>
                  <p className="text-[--color-ink-muted] text-xs sm:text-sm leading-relaxed">{section.summary}</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-2">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-[--color-ink-muted] text-xs sm:text-sm leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${
                      section.color === 'cyan' ? 'bg-[--color-accent]' :
                      section.color === 'blue' ? 'bg-blue-400' :
                      section.color === 'green' ? 'bg-green-400' :
                      section.color === 'yellow' ? 'bg-yellow-400' :
                      section.color === 'purple' ? 'bg-purple-400' : 'bg-red-400'
                    }`}></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Key Policies Highlight - Visual Cards */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[--color-ink] mb-5 text-center">Key Policies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white border border-[--color-line] rounded-xl p-4 sm:p-5 text-center transition-transform">
              <div className="w-12 h-12 bg-[--color-accent-soft] rounded-full flex items-center justify-center mx-auto mb-3">
                <CancelIcon className="w-6 h-6 text-[--color-brand]" />
              </div>
              <h4 className="text-[--color-ink] font-semibold mb-1 text-sm sm:text-base">Cancellation</h4>
              <p className="text-[--color-brand] text-xs sm:text-sm">₹200 advance non-refundable</p>
              <p className="text-[--color-ink-muted] text-xs mt-1">Customer cancellations</p>
            </div>
            
            <div className="bg-white border border-[--color-line] rounded-xl p-4 sm:p-5 text-center transition-transform">
              <div className="w-12 h-12 bg-[--color-accent-soft] rounded-full flex items-center justify-center mx-auto mb-3">
                <SupportAgentIcon className="w-6 h-6 text-[--color-brand]" />
              </div>
              <h4 className="text-[--color-ink] font-semibold mb-1 text-sm sm:text-base">Support</h4>
              <p className="text-[--color-brand] text-xs sm:text-sm">24/7 assistance</p>
              <p className="text-[--color-ink-muted] text-xs mt-1">Response within 2 hrs</p>
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section 
          id="contact" 
          className="mt-8 sm:mt-10 bg-white border border-[--color-brand] rounded-xl p-5 sm:p-6"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[--color-accent-soft] rounded-full flex items-center justify-center flex-shrink-0">
              <ContactMailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[--color-brand]" />
            </div>
            <div className="flex-1">
              <h3 className="text-[--color-ink] font-bold text-base sm:text-lg mb-3">Questions or Disputes?</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="p-3 bg-[--color-surface] rounded-lg">
                  <span className="text-[--color-ink-muted] text-xs sm:text-sm block mb-1">Support Email:</span>
                  <Link 
                    href="mailto:modgilltravels@gmail.com" 
                    className="text-[--color-brand] hover:text-[--color-brand] font-medium text-sm sm:text-base break-all transition"
                  >
                    modgilltravels@gmail.com
                  </Link>
                </div>
                <div className="p-3 bg-[--color-surface] rounded-lg">
                  <span className="text-[--color-ink-muted] text-xs sm:text-sm block mb-1">Support Phone:</span>
                  <Link 
                    href="tel:+916284992669" 
                    className="text-[--color-brand] hover:text-[--color-brand] font-medium text-sm sm:text-base transition"
                  >
                    +91-62849-92669
                  </Link>
                </div>
              </div>

              <div className="bg-[--color-accent-soft] border border-[--color-line] rounded-lg p-3 sm:p-4">
                <p className="text-[--color-brand] text-xs sm:text-sm leading-relaxed">
                  <strong>Response Time:</strong> Initial reply within 2 hours • Full resolution within 7 days • 
                  Escalation to management within 48 hours if needed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="mt-8 bg-white border border-[--color-line] rounded-xl p-5 sm:p-6">
          <h3 className="text-[--color-ink] font-semibold text-base sm:text-lg mb-4">Legal Information</h3>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2 text-[--color-ink-muted]">
              <span className="text-[--color-brand] mt-0.5">•</span>
              <span><strong>Governing Law:</strong> These terms are governed by Indian law and subject to exclusive jurisdiction of Patiala, Punjab courts</span>
            </div>
            <div className="flex items-start gap-2 text-[--color-ink-muted]">
              <span className="text-[--color-brand] mt-0.5">•</span>
              <span><strong>Updates:</strong> Terms may be updated with 30 days advance notice via email and website notification</span>
            </div>
            <div className="flex items-start gap-2 text-[--color-ink-muted]">
              <span className="text-[--color-brand] mt-0.5">•</span>
              <span><strong>Severability:</strong> If any provision is found invalid, remaining terms continue in full effect</span>
            </div>
            <div className="flex items-start gap-2 text-[--color-ink-muted]">
              <span className="text-[--color-brand] mt-0.5">•</span>
              <span><strong>Business License:</strong> Valid taxi operator license issued by Punjab State Transport Authority</span>
            </div>
          </div>
        </section>

        {/* Bottom Actions - Enhanced */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex-1 bg-[--color-brand] hover:bg-[--color-brand-hover] text-white py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all text-center text-sm sm:text-base shadow-lg shadow-[--shadow]"
          >
            Back to Home
          </Link>
          <Link
            href="/privacy"
            className="flex-1 bg-white hover:bg-[--color-surface] border border-[--color-line] hover:border-[--color-brand] text-[--color-ink] py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all text-center text-sm sm:text-base"
          >
            Privacy Policy →
          </Link>
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 p-4 sm:p-5 bg-[--color-surface] border border-[--color-line] rounded-xl">
          <h4 className="text-[--color-ink] font-semibold text-sm sm:text-base mb-3">Quick Navigation:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-[--color-brand] hover:text-[--color-brand] transition truncate"
              >
                → {section.title}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
