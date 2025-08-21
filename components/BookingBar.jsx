"use client"
import PhoneIcon from '@mui/icons-material/Phone';

export function InstantBookingBar() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 border-b border-cyan-700 overflow-hidden relative">
      <div 
        className="flex items-center gap-2 whitespace-nowrap animate-pulse"
        style={{
          animation: 'slide 8s linear infinite',
        }}
      >
        <PhoneIcon className="w-5 h-5 text-green-400 ml-4" />
        <span className="font-semibold text-base tracking-wide">
          For instant booking, call at{' '}
          <a href="tel:+916284992669" className="underline underline-offset-2 transition">
            +91-62849-92669
          </a>
        </span>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100vw); }
        }
      `}</style>
    </div>
  );
}

