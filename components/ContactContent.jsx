"use client";

import Link from 'next/link';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

const contactMethods = [
  {
    id: 'phone',
    title: 'Call Us',
    icon: <PhoneIcon className="w-6 h-6" />,
    value: '+91-98765-43210',
    action: 'tel:+919876543210',
    description: 'Immediate assistance for bookings',
    availability: '24/7',
    color: 'green'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    icon: <WhatsAppIcon className="w-6 h-6" />,
    value: '+91-98765-43210',
    action: 'https://wa.me/919876543210?text=Hi, I need help with taxi booking',
    description: 'Quick chat support and booking',
    availability: '24/7',
    color: 'green'
  },
  {
    id: 'email',
    title: 'Email Support',
    icon: <EmailIcon className="w-6 h-6" />,
    value: 'support@modgilltravels.com',
    action: 'mailto:support@modgilltravels.com',
    description: 'Detailed inquiries and feedback',
    availability: 'Response within 2 hours',
    color: 'blue'
  },
  {
    id: 'location',
    title: 'Visit Office',
    icon: <LocationOnIcon className="w-6 h-6" />,
    value: 'Patiala, Punjab',
    action: '#office-location',
    description: 'In-person consultation',
    availability: 'Mon-Sun: 9 AM - 8 PM',
    color: 'purple'
  }
];

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <ContactMailIcon className="w-8 h-8 text-cyan-600" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Contact Us</h1>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              We're here to help you 24/7. Get in touch for bookings, support, or any questions.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Contact Methods Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Link
              key={method.id}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : undefined}
              className="bg-gray-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-600/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                method.color === 'green' ? 'bg-green-500/20' :
                method.color === 'blue' ? 'bg-blue-500/20' :
                'bg-purple-500/20'
              }`}>
                <span className={
                  method.color === 'green' ? 'text-green-400' :
                  method.color === 'blue' ? 'text-blue-400' :
                  'text-purple-400'
                }>
                  {method.icon}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{method.title}</h3>
              <p className="text-cyan-400 text-base font-medium mb-2">{method.value}</p>
              <p className="text-gray-400 text-sm mb-4">{method.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <AccessTimeIcon className="w-4 h-4" />
                <span>{method.availability}</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Info Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Business Hours */}
          <div className="bg-slate-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AccessTimeIcon className="text-cyan-600" />
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Phone Support:</span>
                <span className="text-white font-medium">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">WhatsApp:</span>
                <span className="text-white font-medium">24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email Response:</span>
                <span className="text-white font-medium">Within 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Office Visits:</span>
                <span className="text-white font-medium">9 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div id="office-location" className="bg-slate-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <LocationOnIcon className="text-cyan-600" />
              Our Location
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">Address:</span>
                <p className="text-white font-medium mt-1">
                  ModgillTravels Office<br/>
                  Patiala, Punjab 147001<br/>
                  India
                </p>
              </div>
              <div>
                <span className="text-gray-400">Service Areas:</span>
                <p className="text-white font-medium mt-1">
                  Punjab, Haryana, Himachal Pradesh, Delhi NCR
                </p>
              </div>
            </div>
          </div>

          {/* Quick Help Links */}
          <div className="bg-slate-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Help</h3>
            <div className="space-y-3 text-sm">
              <Link href="/routes" className="block text-cyan-600 hover:text-cyan-500 transition">
                → View Available Routes
              </Link>
              <Link href="/privacy" className="block text-cyan-600 hover:text-cyan-500 transition">
                → Privacy Policy
              </Link>
              <Link href="/terms" className="block text-cyan-600 hover:text-cyan-500 transition">
                → Terms of Service
              </Link>
              <a href="tel:+919876543210" className="block text-cyan-600 hover:text-cyan-500 transition">
                → Emergency Booking
              </a>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-slate-800 border border-gray-700 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/30 transition"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:support@modgilltravels.com"
              className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition"
            >
              <EmailIcon className="w-6 h-6" />
            </a>
            <a
              href="tel:+919876543210"
              className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-800 border border-cyan-600/20 rounded-xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg mx-auto">
            Our support team is available 24/7 to help you with bookings and emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I need urgent taxi booking assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
