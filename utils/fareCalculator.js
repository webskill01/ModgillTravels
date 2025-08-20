// utils/fareCalculator.js

/**
 * Calculate the total fare for a taxi booking
 * @param {Object} params - The parameters for fare calculation
 * @param {number} params.basePrice - The base price for the route
 * @param {number} params.multiplier - The vehicle type multiplier
 * @param {boolean} params.isRoundTrip - Whether the trip is round trip
 * @param {number} params.days - Number of days for round trip
 * @param {boolean} params.isNightRide - Whether the ride is during night hours (11 PM - 5 AM)
 * @returns {number} The calculated total fare
 */
export const calculateFare = ({
  basePrice,
  multiplier,
  isRoundTrip = false,
  days = 1,
  isNightRide = false
}) => {
  let fare = Math.round(basePrice * multiplier);
  
  // Apply round trip multiplication
  if (isRoundTrip) {
    fare = fare * 2 * days;
  }
  
  // Apply night charges if applicable (10% extra)
  if (isNightRide) {
    fare = fare * 1.1;
  }
  
  return Math.round(fare);
};

/**
 * Check if the given time is during night hours (11 PM - 5 AM)
 * @param {string} time - Time in 24-hour format (HH:mm)
 * @returns {boolean}
 */
export const isNightTime = (time) => {
  if (!time) return false;
  
  const hour = parseInt(time.split(':')[0], 10);
  return hour >= 23 || hour < 5;
};
