// utils/fareCalculator.js

// Updated fare calculation function using hardcoded fares from route data
export const calculateFare = ({
  route, // Pass the entire route object
  vehicleName,
  isRoundTrip = false,
  days = 1
}) => {
  if (!route || !vehicleName) return 0;

  let fare;

  if (isRoundTrip) {
    // Use hardcoded round trip fares
    fare = route.roundTripFare[vehicleName] || 0;
    
    // Add extra days cost (₹1000 per additional day)
    if (days > 1) {
      fare += 1000 * (days - 1);
    }
  } else {
    // Use hardcoded one-way fares
    fare = route.fare[vehicleName] || 0;
  }

  return fare;
};

// Helper function to get display fare for UI
export const getDisplayFare = (route, vehicleName, isRoundTrip = false) => {
  if (!route || !vehicleName) return 0;
  
  return isRoundTrip 
    ? route.roundTripFare[vehicleName] || 0 
    : route.fare[vehicleName] || 0;
};

// Legacy function for backward compatibility
export const isNightTime = (timeString) => {
  if (!timeString) return false;
  const hour = parseInt(timeString.split(':')[0]);
  return hour >= 23 || hour < 5;
};

// Helper to get all fare options for a route
export const getAllFareOptions = (route, isRoundTrip = false) => {
  if (!route) return {};
  
  return isRoundTrip ? route.roundTripFare : route.fare;
};
