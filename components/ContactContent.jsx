// components/ContactContent.jsx
"use client";

import Link from "next/link";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { LinkedIn } from "@mui/icons-material";

const contactMethods = [
  {
    id: "phone",
    title: "Call Us",
    icon: <PhoneIcon className="w-6 h-6" />,
    value: "+91-62849-92669",
    action: "tel:+916284992669",
    description: "Immediate taxi booking assistance",
    availability: "Available 24/7",
    color: "green",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    icon: <WhatsAppIcon className="w-6 h-6" />,
    value: "+91-62849-92669",
    action: "https://wa.me/916284992669?text=Hi, I want to book a taxi",
    description: "Quick chat support & instant booking",
    availability: "Response within 2 min",
    color: "green",
  },
  {
    id: "email",
    title: "Email Us",
    icon: <EmailIcon className="w-6 h-6" />,
    value: "modgilltravels@gmail.com",
    action: "mailto:modgilltravels@gmail.com",
    description: "Detailed inquiries & feedback",
    availability: "Reply within 2 hours",
    color: "blue",
  },
  {
    id: "location",
    title: "Visit Office",
    icon: <LocationOnIcon className="w-6 h-6" />,
    value: "Patiala, Punjab",
    action: "#office-location",
    description: "In-person consultation available",
    availability: "Mon-Sun: 9 AM - 8 PM",
    color: "purple",
  },
];

export default function ContactContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Header - Mobile Optimized */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HeadsetMicIcon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Contact ModgillTravels
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Need a taxi in Patiala or nearby areas? We're here to help 24/7. 
              Get instant booking confirmation via WhatsApp or call us now.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Contact Methods Grid - Mobile First */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method) => (
              <Link
                key={method.id}
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                    method.color === "green"
                      ? "bg-green-500/20 group-hover:bg-green-500/30"
                      : method.color === "blue"
                      ? "bg-blue-500/20 group-hover:bg-blue-500/30"
                      : "bg-purple-500/20 group-hover:bg-purple-500/30"
                  }`}
                >
                  <span
                    className={
                      method.color === "green"
                        ? "text-green-400"
                        : method.color === "blue"
                        ? "text-blue-400"
                        : "text-purple-400"
                    }
                  >
                    {method.icon}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                  {method.title}
                </h3>
                <p className="text-cyan-400 text-sm sm:text-base font-medium mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mb-3">{method.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <AccessTimeIcon className="w-4 h-4" />
                  <span>{method.availability}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Info Sections - Responsive Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {/* Business Hours */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AccessTimeIcon className="text-cyan-400" />
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400">Phone Support:</span>
                <span className="text-green-400 font-semibold">24/7</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400">WhatsApp:</span>
                <span className="text-green-400 font-semibold">24/7</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400">Email Response:</span>
                <span className="text-white font-medium">Within 2 hrs</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400">Office Visits:</span>
                <span className="text-white font-medium">9 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div
            id="office-location"
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <LocationOnIcon className="text-cyan-400" />
              Our Location
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400 text-xs block mb-1">Office Address:</span>
                <p className="text-white font-medium leading-relaxed">
                  Urban Estate, Phase 2<br />
                  Near Police Station<br />
                  Patiala, Punjab 147001<br />
                  India
                </p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <span className="text-gray-400 text-xs block mb-1">Service Coverage:</span>
                <p className="text-white font-medium">
                  Punjab • Haryana • Himachal Pradesh • Delhi NCR
                </p>
              </div>
            </div>
          </div>

          {/* Quick Help Links */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link
                href="/"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50"
              >
                <span>→</span>
                <span>Book Taxi Now</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50"
              >
                <span>→</span>
                <span>About Us</span>
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50"
              >
                <span>→</span>
                <span>Privacy Policy</span>
              </Link>
              <a
                href="tel:+916284992669"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition p-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 font-semibold"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Emergency Booking</span>
              </a>
            </div>
          </div>
        </section>

        {/* Social Media - Enhanced */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 sm:p-6 mb-10 sm:mb-12">
          <h3 className="text-lg font-bold text-white mb-4 text-center">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/916284992669"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/30 hover:scale-110 transition-all"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:modgilltravels@gmail.com"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <EmailIcon className="w-6 h-6" />
            </a>
            <a
              href="tel:+916284992669"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:scale-110 transition-all"
              aria-label="Phone"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/modgilltravels?igsh=MXJ5eXplem9ndmxrcg=="
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Bottom CTA - Enhanced */}
        <section className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Need Immediate Taxi Booking?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            Our support team is ready to assist you 24/7. Call now for instant booking 
            or WhatsApp us for quick confirmation. Professional drivers, transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call +91-62849-92669</span>
            </a>
            <a
              href="https://wa.me/916284992669?text=Hi, I need a taxi booking from Patiala"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
