// components/AboutContent.jsx
"use client";

import Link from 'next/link';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const stats = [
  { label: 'Happy Customers', value: '5000+', icon: <PeopleIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'cyan' },
  { label: 'Routes Covered', value: '50+', icon: <LocationOnIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'green' },
  { label: 'Professional Drivers', value: '25+', icon: <DirectionsCarIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'blue' },
  { label: 'Years Experience', value: '10+', icon: <StarIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'purple' },
];

const features = [
  {
    icon: <SecurityIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Safe & Secure',
    description: 'All drivers undergo background verification with valid licenses. Vehicles are sanitized and maintained regularly for your safety.',
    color: 'green'
  },
  {
    icon: <SupportAgentIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance via phone and WhatsApp. Emergency support available for all bookings.',
    color: 'blue'
  },
  {
    icon: <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Transparent Pricing',
    description: 'Upfront fare calculation with no hidden charges. What you see at booking is what you pay.',
    color: 'cyan'
  },
  {
    icon: <DirectionsCarIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Modern Fleet',
    description: 'Well-maintained AC vehicles ranging from sedans to SUVs. Clean, comfortable rides for all group sizes.',
    color: 'purple'
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Header - Mobile Optimized */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
              <InfoIcon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              About ModgillTravels
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comfortable and reliable taxi services across Punjab, Haryana, 
              Himachal Pradesh and Delhi NCR. Serving customers with quality service since 2020.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Stats Section - Mobile First Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Our Journey in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
                  stat.color === 'cyan' ? 'bg-cyan-500/20' :
                  stat.color === 'green' ? 'bg-green-500/20' :
                  stat.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                }`}>
                  <span className={
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    stat.color === 'green' ? 'text-green-400' :
                    stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                  }>
                    {stat.icon}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Grid - Mobile Stacked */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Our Story */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Founded on Trust
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                ModgillTravels was founded in Patiala with a vision to provide reliable, comfortable, 
                and affordable taxi services. What began as a small family-owned business has grown 
                into one of the region's most trusted transportation providers.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We understand that every journey matters—whether it's a business meeting in Chandigarh, 
                a family vacation to Shimla, or an emergency trip to Delhi. That's why we've built our 
                service on punctuality, safety, and customer satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To be North India's most reliable taxi service by delivering transparent pricing, 
                professional drivers, and exceptional customer support. We strive to make every 
                journey safe, comfortable, and memorable for our passengers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-5">
              <p className="text-cyan-200 text-sm sm:text-base leading-relaxed">
                <strong className="text-cyan-400">Serving since 2015:</strong> Over a decade of excellence 
                in taxi services with thousands of satisfied customers across Punjab, Haryana, and beyond.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Why Choose Us?</h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 sm:p-5 border border-gray-700 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                      feature.color === 'green' ? 'bg-green-500/20' :
                      feature.color === 'blue' ? 'bg-blue-500/20' :
                      feature.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                    }`}>
                      <span className={
                        feature.color === 'green' ? 'text-green-400' :
                        feature.color === 'blue' ? 'text-blue-400' :
                        feature.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                      }>
                        {feature.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas & Contact - Responsive */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
          {/* Service Areas */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2">
              <LocationOnIcon className="text-cyan-400" />
              Service Coverage
            </h3>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Major Cities</h4>
                <ul className="text-gray-400 text-xs sm:text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Patiala
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Chandigarh
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Ludhiana
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Amritsar
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Popular Routes</h4>
                <ul className="text-gray-400 text-xs sm:text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Delhi - Patiala
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Patiala - Shimla
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Chandigarh - Manali
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Delhi - Shimla
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-600">
              <p className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Full Coverage:</strong> Punjab, Haryana, Himachal Pradesh, and Delhi NCR region</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2">
              <PhoneIcon className="text-cyan-400" />
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Phone & WhatsApp</h4>
                <a 
                  href="tel:+916284992669" 
                  className="text-cyan-400 hover:text-cyan-300 transition text-sm sm:text-base font-medium"
                >
                  +91-62849-92669
                </a>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Available 24/7 for bookings</p>
              </div>
              
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h4>
                <a 
                  href="mailto:modgilltravels@gmail.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition text-sm sm:text-base break-all"
                >
                  modgilltravels@gmail.com
                </a>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Response within 2 hours</p>
              </div>
              
              <div className="p-3 bg-slate-700/30 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Office Location</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Urban Estate, Phase 2<br />
                  Near Police Station<br />
                  Patiala, Punjab 147001, India
                </p>
                <p className="text-gray-400 text-xs mt-2">Visit us: Mon-Sun 9 AM - 8 PM</p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-600">
              <Link 
                href="/contact" 
                className="text-cyan-400 hover:text-cyan-300 transition text-xs sm:text-sm flex items-center gap-2"
              >
                <span>→ View detailed contact information</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values - Enhanced */}
        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SecurityIcon className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Safety First</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Every journey prioritizes passenger safety with background-verified drivers and well-maintained vehicles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Reliability</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                On-time pickups, transparent communication, and consistent service quality you can count on.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SupportAgentIcon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Customer First</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Your comfort and satisfaction drive every decision we make in our service delivery.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Experience Quality Service?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust ModgillTravels for their transportation needs. 
            Book your next journey today and discover the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <DirectionsCarIcon className="w-5 h-5" />
              <span>Book Your Ride</span>
            </Link>
            <a
              href="https://wa.me/916284992669?text=Hi, I want to know more about your services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
