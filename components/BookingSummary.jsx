"use client";

import { useSearchParams } from 'next/navigation';
import destinations from '@/data/destinations';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CompactBookingTerms from './CompactBookingTerms';

export default function BookingSummary() {
  const searchParams = useSearchParams();
  const routeSlug = searchParams?.get('route');
  const selectedVehicle = searchParams?.get('vehicle');
  
  const route = destinations.find(r => r.slug === routeSlug);

  return (
    <div className="space-y-4 lg:space-y-6 sticky top-4">
      <CompactBookingTerms/>
      {/* Route Information */}
      {route && (
        <div className="hidden md:block bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 lg:p-6">
          <div className="text-xl font-semibold text-white mb-6">Route Information</div>
          
          <div className="space-y-2 lg:space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Route:</span>
              <span className="text-white font-medium">{route.from} → {route.to}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Distance:</span>
              <span className="text-white">{route.distanceKm} km</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Duration:</span>
              <span className="text-white">{route.duration}</span>
            </div>
            {selectedVehicle && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Selected Vehicle:</span>
                <span className="text-white font-medium">{selectedVehicle}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Booking Process - Compact for mobile */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 lg:p-6">
        <span className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
          <InfoIcon className="text-cyan-400" />
          How It Works
        </span>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
            <div className='flex justify-center items-center'>
              <span className="text-white font-medium text-sm ">Fill the form & get instant confirmation</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
            <div>
              <span className="text-white font-medium text-sm">Driver will contact you for advance payment and ride conformation</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
            <div>
              <span className="text-white font-medium text-sm">Enjoy your comfortable ride</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support - Compact */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 lg:p-6">
        <h3 className="text-lg text-center font-semibold text-white mb-4">Need Help?</h3>
        
        <div className="space-y-2 lg:space-y-3 flex flex-col md:flex-col ">
          <a
            href="tel:+916284992669"
            className="flex items-center gap-3 p-2 lg:p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <span className="text-white font-medium text-sm">+91-62849-92669</span>
            </div>
          </a>
          
          <a
            href="https://wa.me/916284992669?text=Hi, I need help with my booking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 lg:p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <span className="text-white font-medium text-sm">WhatsApp support</span>
            </div>
          </a>
        </div>
      </div>

      {/* Important Notes - Compact */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 lg:p-4">
        <h4 className="text-yellow-400 font-medium text-sm mb-2">Important Notes</h4>
        <ul className="text-yellow-200 text-xs space-y-1">
          <li>• Tolls & parking charges extra</li>
          <li>• Night charges: 10% extra (11 PM - 5 AM)</li>
          <li>• Cancellation allowed up to 2 hours before pickup</li>
        </ul>
      </div>
    </div>
  );
}
