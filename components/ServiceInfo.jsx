// components/ServiceInfo.jsx - NEW LIGHTWEIGHT COMPONENT
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

export default function ServiceInfo() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
              <DirectionsCarIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white font-bold text-lg">Outstation Service</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Regular taxi from Patiala to <strong className="text-white">Delhi</strong> (250 km), <strong className="text-white">Chandigarh</strong> (65 km), <strong className="text-white">Shimla</strong> (180 km), and <strong className="text-white">Manali</strong> (300 km). Experienced highway drivers with GPS tracking.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 hover:border-purple-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <LocalTaxiIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-lg">Local Patiala Service</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Hourly rental for <strong className="text-white">local sightseeing</strong>, business meetings, shopping, and airport transfers. Minimum 4-hour booking. Perfect for weddings and events. Call <strong className="text-white">+91-62849-92669</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
