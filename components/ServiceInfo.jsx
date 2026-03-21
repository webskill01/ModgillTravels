// components/ServiceInfo.jsx - NEW LIGHTWEIGHT COMPONENT
import { DirectionsCarIcon, LocalTaxiIcon } from '@/components/Icons';

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
            Book outstation taxi from Patiala to <strong className="text-white">Delhi</strong> (240 km, Sedan ₹3,400), <strong className="text-white">Chandigarh</strong> (67 km, ₹1,400), <strong className="text-white">Shimla</strong> (180 km, ₹2,600), and <strong className="text-white">Manali</strong> (301 km, ₹5,400). Highway-experienced drivers, AC vehicles, GPS tracking. One-way and round-trip available.
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
            Patiala local taxi service for <strong className="text-white">sightseeing</strong>, business meetings, Punjabi University, Rajindra Hospital transfers, and Chandigarh Airport drop-off. Hourly rental from 4 hours. Book via WhatsApp: <strong className="text-white">+91-62849-92669</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
