// components/RouteOverview.jsx
import RouteIcon from '@mui/icons-material/Route';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PeopleIcon from '@mui/icons-material/People';
import { calculateFare } from '@/utils/fareCalculator';

export default function RouteOverview({ route }) {
  // Calculate starting fare (using Sedan as base)
  const startingFare = calculateFare({
    distanceKm: route.distanceKm,
    vehicleName: 'Sedan',
    isRoundTrip: false,
    days: 1,
    isNightRide: false
  });

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 sm:p-4">
      {/* Header */}
      <h2 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4 flex items-center gap-2">
        <RouteIcon className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5" />
        <span>Route Overview</span>
      </h2>
      
      {/* Key Metrics - Compact Grid */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex flex-col items-center bg-slate-700/30 p-2 sm:p-3 rounded-lg text-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mb-1">
            <RouteIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
          </div>
          <p className="text-gray-400 text-xs mb-0.5">Distance</p>
          <p className="text-white font-semibold text-sm sm:text-base">{route.distanceKm} km</p>
        </div>
        
        <div className="flex flex-col items-center bg-slate-700/30 p-2 sm:p-3 rounded-lg text-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-1">
            <AccessTimeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
          </div>
          <p className="text-gray-400 text-xs mb-0.5">Duration</p>
          <p className="text-white font-semibold text-sm sm:text-base">{route.duration}</p>
        </div>
        
        <div className="flex flex-col items-center bg-slate-700/30 p-2 sm:p-3 rounded-lg text-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-1">
            <LocalOfferIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
          </div>
          <p className="text-gray-400 text-xs mb-0.5">From</p>
          <p className="text-white font-semibold text-sm sm:text-base">₹{startingFare.toLocaleString()}</p>
        </div>
      </div>

      {/* Compact Two-Column Layout for Description and Features */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 sm:gap-4">
        {/* Description */}
        <div className="border-t sm:hidden border-white/10 pt-2 sm:pt-3">
          <p className="text-gray-300 leading-snug text-xs sm:text-sm">
            {route.description || `Professional taxi service from ${route.from} to ${route.to} with experienced drivers and comfortable vehicles.`}
          </p>
        </div>

        {/* Features & Amenities */}
        <div className="border-t lg:border-t-0 border-white/10 pt-2 sm:pt-3 lg:pt-0">
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
            <DirectionsCarIcon className="text-cyan-400 w-3 h-3 sm:w-4 sm:h-4" />
            <span>Features & Amenities</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols- gap-1.5">
            {route.carFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-1.5 p-1.5 sm:p-2 bg-slate-700/50 rounded text-center hover:bg-slate-700/70 transition-colors">
                {feature === "AC" && <AcUnitIcon className="w-3 h-3 text-cyan-400 flex-shrink-0" />}
                {feature === "GPS Tracking" && <GpsFixedIcon className="w-3 h-3 text-cyan-400 flex-shrink-0" />}
                {feature.includes("Seats") && <PeopleIcon className="w-3 h-3 text-cyan-400 flex-shrink-0" />}
                {!["AC", "GPS Tracking"].includes(feature) && !feature.includes("Seats") && 
                  <DirectionsCarIcon className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                }
                <span className="text-gray-300 text-xs leading-tight truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
