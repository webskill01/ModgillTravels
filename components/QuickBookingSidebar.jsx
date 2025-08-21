import Link from "next/link";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { calculateFare } from '@/utils/fareCalculator';

export default function QuickBookingSidebar({ route, searchParams = {} }) {
  // Calculate starting fare using Sedan as base vehicle (lowest price)
  const startingFare = calculateFare({
    distanceKm: route.distanceKm,
    vehicleName: 'Sedan',
    isRoundTrip: false,
    days: 1,
    isNightRide: false
  });

  const buildBookingUrl = () => {
    const query = new URLSearchParams();
    query.set('route', route.slug);
    return `/book?${query.toString()}`;
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6 sticky top-4">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <DirectionsCarIcon className="text-cyan-400" />
        Quick Booking
      </h3>
      
      <div className="mb-6">
        <div className="text-center p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-xl mb-4">
          <div className="text-sm text-gray-400">Starting from</div>
          <div className="text-2xl font-bold text-cyan-400 mb-1">
            ₹{startingFare.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">
           One Way
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Distance:</span>
            <span className="text-white">{route.distanceKm} km</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="text-white">{route.duration}</span>
          </div>
        </div>
      </div>
      
      <Link
        href={buildBookingUrl()}
        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-center py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 mb-4"
      >
        Book Now
      </Link>
      
      <div className="space-y-2 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span>Instant confirmation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span>Professional drivers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span>24/7 customer support</span>
        </div>
      </div>
       {/* Contact Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mt-6 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
        
        <div className="space-y-3">
          <a
            href="tel:+916284992669"
            className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400">📞</span>
            </div>
            <div>
              <span className="text-white font-medium text-sm">Call Us</span>
              <p className="text-gray-400 text-xs">+91-62849-92669</p>
            </div>
          </a>
          
          <a
            href={`https://wa.me/6284992669?text=Hi, I want to book a taxi from ${route.from} to ${route.to}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400">💬</span>
            </div>
            <div>
              <span className="text-white font-medium text-sm">WhatsApp</span>
              <p className="text-gray-400 text-xs">Quick support</p>
            </div>
          </a>
        </div>
      </div>

      {/* Terms Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <h4 className="text-yellow-400 font-medium text-sm mb-2">Important Information</h4>
        <ul className="text-yellow-200 text-xs space-y-1">
          <li>• Parking charges extra</li>
          <li>• Advance booking recommended</li>
          <li>• Cancellation charges may apply</li>
        </ul>
      </div>
    </div>
  );
}
