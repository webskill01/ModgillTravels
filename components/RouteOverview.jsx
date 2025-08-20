import RouteIcon from '@mui/icons-material/Route';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PeopleIcon from '@mui/icons-material/People';

export default function RouteOverview({ route }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
      {/* Header */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
        <RouteIcon className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
        <span>Route Overview</span>
      </h3>
      
      {/* Key Metrics - Responsive Grid */}
      <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="flex items-center gap-3 bg-slate-700/30 p-3 sm:p-0 sm:bg-transparent rounded-lg sm:rounded-none">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <RouteIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-400 text-xs sm:text-sm">Distance</p>
            <p className="text-white font-semibold text-base sm:text-lg truncate">{route.distanceKm} km</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-slate-700/30 p-3 sm:p-0 sm:bg-transparent rounded-lg sm:rounded-none">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <AccessTimeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-400 text-xs sm:text-sm">Duration</p>
            <p className="text-white font-semibold text-base sm:text-lg truncate">{route.duration}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-slate-700/30 p-3 sm:p-0 sm:bg-transparent rounded-lg sm:rounded-none sm:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <LocalOfferIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-400 text-xs sm:text-sm">Starting From</p>
            <p className="text-white font-semibold text-base sm:text-lg truncate">₹{route.displayFare.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-white/10 pt-4 sm:pt-6 mb-4 sm:mb-6">
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {route.description}
        </p>
      </div>

      {/* Features & Amenities */}
      <div className="mb-6">
        <p className="text-xl sm:text-2xl font-semibold  mb-3 sm:mb-4 flex items-center gap-2">
          <DirectionsCarIcon className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
          <span className='text-white'>Features & Amenities</span>
        </p>
        
        {/* Responsive grid for features */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {route.carFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 p-2 sm:p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
              {feature === "AC" && <AcUnitIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
              {feature === "GPS Tracking" && <GpsFixedIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
              {feature.includes("Seats") && <PeopleIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
              {!["AC", "GPS Tracking"].includes(feature) && !feature.includes("Seats") && 
                <DirectionsCarIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              }
              <span className="text-gray-300 text-xs sm:text-sm truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights
      {route.highlights && route.highlights.length > 0 && (
        <div className="pt-4 sm:pt-6 border-t border-white/10">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {route.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-2 sm:p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5 sm:mt-2"></div>
                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}
