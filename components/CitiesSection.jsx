// components/CitiesSection.jsx - ENHANCED VERSION
import Link from 'next/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CitiesSection() {
  const cities = [
    { name: 'Patiala', slug: 'patiala', color: 'from-purple-500/20 to-purple-600/20 border-purple-500/40 hover:border-purple-500/60' },
    { name: 'Chandigarh', slug: 'chandigarh', color: 'from-green-500/20 to-green-600/20 border-green-500/40 hover:border-green-500/60' },
    { name: 'Delhi', slug: 'delhi', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/40 hover:border-blue-500/60' },
    { name: 'Shimla', slug: 'shimla', color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/40 hover:border-cyan-500/60' },
    { name: 'Ludhiana', slug: 'ludhiana', color: 'from-orange-500/20 to-orange-600/20 border-orange-500/40 hover:border-orange-500/60' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
            <LocationOnIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Cities We Serve
            </h2>
            <p className="text-gray-500 text-xs">Taxi service across major cities</p>
          </div>
        </div>
        <Link 
          href="/booking" 
          className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition flex items-center gap-1 group flex-shrink-0"
        >
          <span className="hidden sm:inline">More Cities</span>
          <ArrowForwardIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Cities Grid - Compact Pills */}
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/city/${city.slug}`}
            className={`group relative px-4 py-2.5 bg-gradient-to-br ${city.color} border rounded-lg text-white text-sm font-medium transition-all hover:scale-105 overflow-hidden`}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-1.5">
              <LocationOnIcon className="w-4 h-4 opacity-70" />
              <span>{city.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500 text-xs mt-4">
        Professional drivers · Clean vehicles · 24/7 availability
      </p>
    </div>
  );
}
