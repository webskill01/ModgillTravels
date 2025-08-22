// components/VehicleOptions.jsx
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import LugageIcon from '@mui/icons-material/BusinessCenter';
import { VEHICLE_TYPES } from '@/data/vehicles';

export default function VehicleOptions({ route, tripType = "oneway", searchParams = {} }) {
  const vehicles = Object.values(VEHICLE_TYPES);
  const isRoundTrip = tripType === "roundtrip";

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-3 sm:p-4">
      <h3 className="text-sm sm:text-base font-semibold text-white sm:mb-3 flex items-center gap-2">
        <DirectionsCarIcon className="text-cyan-400 w-3 h-3 sm:w-4 sm:h-4" />
        <span>Available Vehicles</span>
      </h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3">
        {vehicles.map((vehicle, index) => {
          // Get fare from route data (hardcoded fares)
          const fare = isRoundTrip 
            ? (route?.roundTripFare?.[vehicle.name] || 0)
            : (route?.fare?.[vehicle.name] || 0);

          return (
            <div key={index} className="bg-slate-700/50 rounded-lg p-2.5 pt-3 pb-0 sm:p-3 border border-white/5 hover:border-cyan-400/30 transition-all group cursor-pointer">
              {/* Vehicle Name */}
              <div className="text-center ">
                <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {vehicle.name}
                </h4>
                <span className="text-xs text-gray-400 font-medium">
                  {isRoundTrip ? 'Round Trip' : 'One Way'}
                </span>
              </div>
              
              {/* Price */}
              <div className="text-center mb-2 sm:mb-3">
                <div className="text-base sm:text-lg font-bold text-cyan-400">
                  ₹{fare.toLocaleString()}
                </div>
              </div>
              
              {/* Vehicle Specs */}
              <div className="flex justify-center items-center gap-2 sm:gap-3 mb-1">
                <span className="flex items-center gap-1 text-xs text-gray-300">
                  <PeopleIcon className="w-3 h-3" />
                  <span className="font-medium">{vehicle.capacity}</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-300">
                  <LugageIcon className="w-3 h-3" />
                  <span className="font-medium">{vehicle.luggage}</span>
                </span>
              </div>

              {/* Models */}
              <div className="text-center">
                <p className="text-xs text-gray-500 font-normal leading-tight">
                  {vehicle.models || 'Swift, Baleno, Dzire'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
