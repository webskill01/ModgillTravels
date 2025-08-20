import Link from "next/link";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function QuickBookingSidebar({ route, searchParams = {} }) {
  const buildBookingUrl = () => {
    const query = new URLSearchParams();
    query.set('route', route.slug);
    return `/book?${query.toString()}`;
  };
  
  return (
    <div className="space-y-3 sticky top-4">
      {/* Quick Booking Card */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl px-6 pt-4">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Quick Booking</h3>
        
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-cyan-400 mb-1">
            From ₹{route.displayFare.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">Starting price • One way</div>
        </div>

        <div className="space-y-3 mb-6">
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
          {searchParams.date && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Travel Date:</span>
              <span className="text-white">{searchParams.date}</span>
            </div>
          )}
        </div>

        <Link
          href={buildBookingUrl()}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold text-center transition-all hover:scale-105 flex items-center justify-center gap-2 "
        >
          <DirectionsCarIcon className="w-5 h-5" />
          Book Now
        </Link>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400 text-center">
            ✓ Instant confirmation<br/>
            ✓ Professional drivers<br/>
            ✓ 24/7 customer support
          </p>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Need Help?</h3>
        
        <div className="space-y-3">
          <a
            href="tel:+919876543210"
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
