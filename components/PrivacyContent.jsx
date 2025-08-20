"use client";

import Link from 'next/link';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import CookieIcon from '@mui/icons-material/Cookie';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: <PersonIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Personal info, booking details, and device data for service delivery.',
    details: [
      'Name, phone, email, addresses',
      'Travel dates, times, vehicle preferences',
      'SMS/WhatsApp communications',
      'IP address, browser type (auto-collected)'
    ]
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    icon: <StorageIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Process bookings, provide support, and improve our services.',
    details: [
      'Process bookings and coordinate rides',
      'Customer support and issue resolution',
      'Service improvement and analytics',
      'Safety verification and fraud prevention'
    ]
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    icon: <ShareIcon className="w-6 h-6 text-cyan-600" />,
    summary: "We don't sell your data. Limited sharing with drivers and service providers.",
    details: [
      'Drivers (only trip-related info)',
      'SMS providers for notifications',
      'Legal compliance when required',
      'Safety and security purposes only'
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: <SecurityIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'SSL encryption, access controls, and regular monitoring protect your data.',
    details: [
      'SSL/TLS encryption for data transmission',
      'Limited access on need-to-know basis',
      'Regular security monitoring',
      'Data retained only as needed'
    ]
  },
  {
    id: 'cookies-tracking',
    title: 'Cookies & Tracking',
    icon: <CookieIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Essential cookies for booking, analytics for improvement.',
    details: [
      'Essential cookies for website function',
      'Analytics to improve user experience',
      'Preference cookies for your settings',
      'Manage via browser settings'
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    icon: <SecurityIcon className="w-6 h-6 text-cyan-600" />,
    summary: 'Access, correct, delete your data, or opt-out of communications.',
    details: [
      'Request copies of your data',
      'Correct inaccurate information',
      'Request data deletion',
      'Unsubscribe from marketing'
    ]
  }
];

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-gray-900 pb-10">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2">
            <SecurityIcon className="w-6 h-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm md:text-base">
            How we protect your personal information
          </p>
          <p className="text-gray-500 text-xs mt-1">Last updated: January 19, 2025</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Quick Summary */}
        <section className="bg-slate-800 border border-gray-700 rounded-lg p-5 mb-8">
          <h2 className="text-lg font-semibold text-white mb-1">Quick Summary</h2>
          <p className="text-gray-300 text-sm">
            We collect only necessary information to provide taxi services, protect your data with encryption,
            don't sell personal information, and give you control over your data.
            <Link href="#contact" className="text-cyan-600 hover:text-cyan-500 underline ml-1 font-medium transition">
              Contact us
            </Link> with questions.
          </p>
        </section>

        {/* Card Sections */}
        <section className="grid gap-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-gray-950 border border-slate-800 rounded-xl p-5">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  {section.icon}
                </div>
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

        {/* Contact Section */}
        <section id="contact" className="mt-10 bg-slate-800 border border-gray-700 rounded-lg p-5">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center">
              <ContactMailIcon className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Contact & Questions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <Link href="mailto:privacy@modgilltravels.com" className="text-cyan-600 hover:text-cyan-500 ml-1 underline">
                    privacy@modgilltravels.com
                  </Link>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <Link href="tel:+919876543210" className="text-cyan-600 hover:text-cyan-500 ml-1 underline">
                    +91-98765-43210
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Changes to this policy will be updated here with notification via email.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-medium transition text-center text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/terms"
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg font-medium transition text-center text-sm"
          >
            Terms of Service
          </Link>
        </div>
      </main>
    </div>
  );
}
