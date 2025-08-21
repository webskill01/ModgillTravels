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

const stats = [
  { label: 'Happy Customers', value: '5000+', icon: <PeopleIcon className="w-6 h-6" /> },
  { label: 'Routes Covered', value: '50+', icon: <LocationOnIcon className="w-6 h-6" /> },
  { label: 'Professional Drivers', value: '25+', icon: <DirectionsCarIcon className="w-6 h-6" /> },
  { label: 'Years Experience', value: '10+', icon: <StarIcon className="w-6 h-6" /> },
];

const features = [
  {
    icon: <SecurityIcon className="w-6 h-6" />,
    title: 'Safe & Secure',
    description: 'Professional drivers with verified licenses and clean vehicles for your safety.'
  },
  {
    icon: <SupportAgentIcon className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via phone and SMS for all your travel needs.'
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6" />,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay with upfront fare calculation.'
  },
  {
    icon: <DirectionsCarIcon className="w-6 h-6" />,
    title: 'Modern Fleet',
    description: 'Well-maintained AC vehicles from hatchbacks to tempo travellers for all group sizes.'
  },
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <InfoIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About ModgillTravels</h1>
            <p className="text-xl text-gray-300  mx-auto leading-relaxed">
              Your trusted partner for comfortable and reliable taxi services across Punjab, Haryana, and Himachal Pradesh. 
              We've been connecting destinations with quality service since over a decade.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center border border-gray-700">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Our Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Founded on Trust</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ModgillTravels began with a simple mission: to provide reliable, comfortable, and affordable 
                taxi services to connect people with their destinations. What started as a small family business 
                has grown into one of the most trusted transportation services in the region.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We understand that every journey matters, whether it's a business trip, family vacation, 
                or emergency travel. That's why we've built our service around punctuality, safety, and customer satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most reliable taxi service provider by offering transparent pricing, 
                professional drivers, and excellent customer support. We aim to make every journey 
                comfortable, safe, and memorable for our passengers.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us</h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Service Areas */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <LocationOnIcon className="text-cyan-400" />
              Service Areas
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-3">Punjab</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Patiala</li>
                  <li>• Chandigarh</li>
                  <li>• Ludhiana</li>
                  <li>• Amritsar</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Popular Routes</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Delhi - Patiala</li>
                  <li>• Chandigarh - Shimla</li>
                  <li>• Delhi - Manali</li>
                  <li>• Patiala - Shimla</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-600">
              <p className="text-gray-300 text-sm">
                <strong>Coverage:</strong> Punjab, Haryana, Himachal Pradesh, and Delhi NCR
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <PhoneIcon className="text-cyan-400" />
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Phone & SMS</h4>
                <a href="tel:+916284992669" className="text-cyan-400 hover:text-cyan-300 transition">
                  +91-62849-92669
                </a>
                <p className="text-gray-400 text-sm mt-1">Available 24/7 for bookings and support</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <a href="mailto:modgilltravels@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition">
                  modgilltravels@gmail.com
                </a>
                <p className="text-gray-400 text-sm mt-1">Response within 2 hours</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Office</h4>
                <p className="text-gray-300">Urban Estate, Phase 2 Near Police Station <br /> Patiala, Punjab, India</p>
                <p className="text-gray-400 text-sm mt-1">Visit us: Mon-Sun 9 AM - 8 PM</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-600">
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition text-sm">
                → Visit our contact page for more details
              </Link>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SecurityIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Safety First</h3>
              <p className="text-gray-300 text-sm">Every journey prioritizes passenger safety with verified drivers and maintained vehicles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reliability</h3>
              <p className="text-gray-300 text-sm">On-time pickups, transparent communication, and consistent service quality.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SupportAgentIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Customer First</h3>
              <p className="text-gray-300 text-sm">Your comfort and satisfaction drive every decision we make.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Travel with Us?</h2>
          <p className="text-gray-400 mb-8 w-full mx-auto text-center">
            Experience the difference with ModgillTravels. Book your next journey and discover why thousands of customers trust us for their transportation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Your Ride
            </Link>
            <Link
              href="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
