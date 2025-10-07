"use client"
import PhoneIcon from '@mui/icons-material/Phone';

export function InstantBookingBar() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 border-b border-cyan-700 overflow-hidden relative">
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="flex items-center gap-2 whitespace-nowrap px-4">
            <PhoneIcon className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-base tracking-wide">
               For instant booking, call at{' '}
              <a href="tel:+916284992669" className="underline underline-offset-2 hover:text-yellow-300 transition">
                +91-62849-92669
              </a>
              {' '}• Available 24/7 • One Way Cab Service • Best Taxi Service Near Me in Patiala 
            </span>
          </div>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content" aria-hidden="true">
          <div className="flex items-center gap-2 whitespace-nowrap px-4">
            <PhoneIcon className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-base tracking-wide">
              For instant booking, call at{' '}
              <a href="tel:+916284992669" className="underline underline-offset-2 hover:text-yellow-300 transition">
                +91-62849-92669
              </a>
              {' '}• Available 24/7 • One Way Cab Service • Best Taxi Service Near Me in Patiala 
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 15s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
