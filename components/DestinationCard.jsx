// components/DestinationCard.jsx
import Link from "next/link";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RouteIcon from '@mui/icons-material/Route';
import StarIcon from '@mui/icons-material/Star';

export default function DestinationCard({ route }) {
  return (
    <div className="card group hover:scale-[1.02] transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {route.from} → {route.to}
          </h3>
          {route.tags.includes('popular') && (
            <div className="flex items-center space-x-1 mt-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-medium">Popular Route</span>
            </div>
          )}
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-cyan-400">₹{route.displayFare.toLocaleString()}</p>
          <p className="text-xs text-gray-400">starting from</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {route.description}
      </p>

      {/* Route Info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <RouteIcon className="w-4 h-4 text-purple-400" />
          <span className="text-gray-400">{route.distanceKm} km</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <AccessTimeIcon className="w-4 h-4 text-green-400" />
          <span className="text-gray-400">{route.duration}</span>
        </div>
      </div>

      {/* Vehicle Options */}
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-2">Available vehicles:</p>
        <div className="flex gap-2">
          {route.vehicles.map((vehicle, index) => (
            <div key={index} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
              {vehicle.name}: ₹{vehicle.fare.toLocaleString()}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        {route.carFeatures.slice(0, 3).map((feature, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-400/20"
          >
            {feature}
          </span>
        ))}
        {route.carFeatures.length > 3 && (
          <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10">
            +{route.carFeatures.length - 3} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-white/10">
        <Link
          href={`/destinations/${route.slug}`}
          className="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 font-medium transition-all duration-200 flex-1 text-sm"
        >
          <span>View Details</span>
        </Link>
        
        <Link
          href={`/book?route=${route.slug}`}
          className="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex-1 text-sm"
        >
          <DirectionsCarIcon className="w-4 h-4" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );
}
