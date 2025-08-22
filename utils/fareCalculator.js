// utils/fareCalculator.js

// Define per-km prices for different vehicle types
export const PER_KM_RATES = {
  SEDAN: 22.38,           // Rs per km
  SUV: 32.20,             // Rs per km  
  PREMIUM: 38.46,         // Rs per km
  TRAVELLER: 52.30        // Rs per km
};

// Get per-km rate by vehicle name
export const getPerKmRate = (vehicleName) => {
  const rateMap = {
    'Sedan': PER_KM_RATES.SEDAN,
    'Maruti Ertiga WC': PER_KM_RATES.SUV,
    'Toyota Innova WC': PER_KM_RATES.PREMIUM,
    'Toyota Innova Crysta WC': PER_KM_RATES.TRAVELLER
  };
  return rateMap[vehicleName] || PER_KM_RATES.SEDAN;
};

// New fare calculation function
export const calculateFare = ({
  distanceKm,
  vehicleName,
  isRoundTrip = false,
  days = 1,
  isNightRide = false
}) => {
  const perKmRate = getPerKmRate(vehicleName);
  let fare = perKmRate * distanceKm;
  
  if (isRoundTrip) {
    // 1.9 times the base fare + 1000 Rs per extra day
    fare = fare * 1.93 + (1000 * Math.max(days - 1, 0));
  }
  
  // Night charges: 10% extra (11 PM - 5 AM)
  if (isNightRide) {
    fare *= 1.1;
  }
  
  return Math.round(fare);
};

// Helper function to check if time is night time
export const isNightTime = (timeString) => {
  if (!timeString) return false;
  const hour = parseInt(timeString.split(':')[0]);
  return hour >= 23 || hour < 5;
};
