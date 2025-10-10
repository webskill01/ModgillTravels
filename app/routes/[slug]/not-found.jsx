// app/not-found.jsx - MINIMAL DARK VERSION
import Link from 'next/link';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchOffIcon from '@mui/icons-material/SearchOff';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-12 text-center">
        
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 rounded-full mb-6">
          <SearchOffIcon className="w-12 h-12 text-cyan-400" />
        </div>

        {/* 404 */}
        <h2 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          Route Not Available
        </h2>
        
        
        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg mb-6 max-w-md mx-auto">
           This route isn't listed yet, but we'd love to help you book a taxi for your journey!
        </p>
        
        <p className="text-gray-500 text-md mb-8">
          Call or WhatsApp us now to book ride for this route
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:+916284992669"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/916284992669"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Back Link */}
        <Link 
          href="/booking" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition"
        >
          <DirectionsCarIcon />
          Browse Available Routes
        </Link>
      </div>
    </div>
  );
}
