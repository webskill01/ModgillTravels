import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import LugageIcon from '@mui/icons-material/BusinessCenter';
import { getVehicleTypes } from '@/data/vehicles';
import { calculateFare } from '@/utils/fareCalculator';

export default function VehicleOptions({ route }) {
  const vehicles = getVehicleTypes().map(vehicle => ({
    ...vehicle,
    fare: calculateFare({
      basePrice: route.displayFare,
      multiplier: vehicle.multiplier,
      isRoundTrip: false
    })
  }));
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
      {/* Header */}
      <p className="text-lg sm:text-2xl font-bold  mb-3 sm:mb-4 flex items-center gap-2">
        <DirectionsCarIcon className="text-cyan-400 w-5 h-5 sm:w-5 sm:h-5" />
        <span className='text-white'>Available Vehicles</span>
      </p>
      
      {/* Vehicle Cards Grid - 2 columns on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="bg-slate-700/50 rounded-lg p-3 border border-white/5 hover:border-cyan-400/30 transition-all group">
            
            {/* Vehicle Icon & Name */}
            <div className="text-center mb-2 text-white">
              <span className="text-base text-white  sm:text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                {vehicle.name}
              </span>
            </div>
            
            {/* Price */}
            <div className="text-center mb-2">
              <div className="text-sm sm:text-base font-bold text-cyan-400">₹{vehicle.fare.toLocaleString()}</div>
              <div className="text-xs text-gray-400">One way</div>
            </div>
            
            {/* Compact Features */}
            <div className="flex justify-center items-center gap-3 mb-3 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <PeopleIcon className="w-3 h-3" />
                {vehicle.capacity}
              </span>
              <span className="flex items-center gap-1">
                <LugageIcon className="w-3 h-3" />
                {vehicle.luggage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
