// Enhanced PricingInfoTooltip.jsx
import { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function PricingInfoTooltip({ perKmRate, tripType, days }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipMessage = () => {
    if (tripType === "roundtrip") {
      return `Rates shown for mentioned locations. ₹${perKmRate}/km for ${days} days Rates apply beyond destination.`;
    } else {
      return `Rates shown for mentioned locations. ₹${perKmRate}/km Rates apply beyond destination.`;
    }
  };

  return (
    <div className="relative">
      <span
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="text-white hover:text-cyan-400"
      >
        <InfoOutlinedIcon className="w-3 h-3" />
      </span>
      
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-1 w-44 bg-slate-900 text-white text-xs rounded px-2 py-1 shadow-lg z-50 border text-center font-light border-gray-700">
          {getTooltipMessage()}
      </div>
      )}
    </div>
  );
}
