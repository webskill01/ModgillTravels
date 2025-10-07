// components/PrivacyContent.jsx
"use client";

import Link from 'next/link';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import CookieIcon from '@mui/icons-material/Cookie';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import UpdateIcon from '@mui/icons-material/Update';

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'We collect only essential information needed to provide reliable taxi services.',
    details: [
      'Personal details: Name, phone number, email address',
      'Booking information: Pick-up/drop locations, travel dates & times',
      'Communication records: SMS, WhatsApp messages for service coordination',
      'Technical data: IP address, browser type (automatically collected)'
    ],
    color: 'cyan'
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    icon: <StorageIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Your data helps us deliver excellent service and ensure your safety.',
    details: [
      'Process and confirm your taxi bookings',
      'Coordinate rides with professional drivers',
      'Provide customer support and resolve issues',
      'Improve service quality through analytics',
      'Verify safety and prevent fraudulent activities'
    ],
    color: 'blue'
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing & Disclosure',
    icon: <ShareIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: "We never sell your data. Sharing is limited to service delivery only.",
    details: [
      'Drivers: Only trip-related information (pick-up, drop-off, contact)',
      'Service providers: SMS/WhatsApp providers for booking confirmations',
      'Legal requirements: When required by law or court orders',
      'Safety purposes: To protect rights, property, or safety of users',
      'No third-party marketing: We never sell your data to advertisers'
    ],
    color: 'purple'
  },
  {
    id: 'data-security',
    title: 'Data Security Measures',
    icon: <SecurityIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'Industry-standard security protocols protect your personal information.',
    details: [
      'SSL/TLS encryption for all data transmission',
      'Secure servers with restricted access controls',
      'Regular security audits and monitoring',
      'Data retention policies: We keep data only as long as necessary',
      'Employee training on data privacy best practices'
    ],
    color: 'green'
  },
  {
    id: 'cookies-tracking',
    title: 'Cookies & Tracking Technologies',
    icon: <CookieIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'We use minimal cookies to improve your booking experience.',
    details: [
      'Essential cookies: Required for booking system functionality',
      'Analytics cookies: Help us understand user behavior and improve service',
      'Preference cookies: Remember your settings and preferences',
      'Third-party cookies: Google Analytics for website performance insights',
      'Control: Manage cookie preferences through your browser settings'
    ],
    color: 'yellow'
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    icon: <VerifiedUserIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    summary: 'You have full control over your personal information.',
    details: [
      'Access: Request copies of data we hold about you',
      'Correction: Update or correct inaccurate information',
      'Deletion: Request removal of your personal data',
      'Opt-out: Unsubscribe from promotional communications anytime',
      'Data portability: Request your data in a structured format'
    ],
    color: 'cyan'
  }
];

export default function PrivacyContent() {
  return (
    <div className="min-h-screen">
      {/* Header - Mobile Optimized */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
            <SecurityIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            How ModgillTravels collects, uses, and protects your personal information
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm text-gray-500">
            <UpdateIcon className="w-4 h-4" />
            <span>Last updated: October 7, 2025</span>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <LockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            <p className="text-white font-semibold text-xs sm:text-sm">SSL Encrypted</p>
            <p className="text-gray-500 text-xs mt-1 hidden sm:block">Secure Data</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <VerifiedUserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <p className="text-white font-semibold text-xs sm:text-sm">No Data Selling</p>
            <p className="text-gray-500 text-xs mt-1 hidden sm:block">Privacy First</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-lg p-3 sm:p-4 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <SecurityIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <p className="text-white font-semibold text-xs sm:text-sm">Your Control</p>
            <p className="text-gray-500 text-xs mt-1 hidden sm:block">Full Rights</p>
          </div>
        </div>

        {/* Quick Summary - Enhanced */}
        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <SecurityIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Privacy at a Glance</h2>
              <p className="text-cyan-100 text-sm sm:text-base leading-relaxed">
                We collect only what's necessary for taxi bookings, protect your data with SSL encryption, 
                never sell your information to third parties, and give you complete control over your data. 
                Questions? <Link href="#contact" className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition">
                  Contact us anytime
                </Link>.
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
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500/30 transition-all scroll-mt-20"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  section.color === 'cyan' ? 'bg-cyan-500/20' :
                  section.color === 'blue' ? 'bg-blue-500/20' :
                  section.color === 'purple' ? 'bg-purple-500/20' :
                  section.color === 'green' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                }`}>
                  <span className={
                    section.color === 'cyan' ? 'text-cyan-400' :
                    section.color === 'blue' ? 'text-blue-400' :
                    section.color === 'purple' ? 'text-purple-400' :
                    section.color === 'green' ? 'text-green-400' : 'text-yellow-400'
                  }>
                    {section.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{section.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{section.summary}</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-2">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${
                      section.color === 'cyan' ? 'bg-cyan-400' :
                      section.color === 'blue' ? 'bg-blue-400' :
                      section.color === 'purple' ? 'bg-purple-400' :
                      section.color === 'green' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Contact Section - Enhanced */}
        <section 
          id="contact" 
          className="mt-8 sm:mt-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl p-5 sm:p-6"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ContactMailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3">Questions About Your Privacy?</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-400 text-xs sm:text-sm block mb-1">Email Us:</span>
                  <Link 
                    href="mailto:modgilltravels@gmail.com" 
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base break-all transition"
                  >
                    modgilltravels@gmail.com
                  </Link>
                </div>
                <div className="p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-400 text-xs sm:text-sm block mb-1">Call Us:</span>
                  <Link 
                    href="tel:+916284992669" 
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition"
                  >
                    +91-62849-92669
                  </Link>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 sm:p-4">
                <div className="flex items-start gap-2">
                  <UpdateIcon className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-yellow-200 text-xs sm:text-sm leading-relaxed">
                    <strong>Policy Updates:</strong> We may update this privacy policy occasionally. 
                    Material changes will be communicated via email to registered users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Actions - Enhanced */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all hover:scale-105 text-center text-sm sm:text-base shadow-lg shadow-cyan-500/25"
          >
            Back to Home
          </Link>
          <Link
            href="/terms"
            className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border border-gray-700 hover:border-cyan-500/40 text-white py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all hover:scale-105 text-center text-sm sm:text-base"
          >
            Terms of Service →
          </Link>
        </div>

        {/* Quick Navigation - Mobile Friendly */}
        <div className="mt-8 p-4 sm:p-5 bg-slate-800/50 border border-gray-700 rounded-xl">
          <h4 className="text-white font-semibold text-sm sm:text-base mb-3">Quick Links:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-cyan-400 hover:text-cyan-300 transition truncate"
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
