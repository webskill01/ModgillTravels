// data/vehicles.js

export const VEHICLE_TYPES = {
  HATCHBACK: {
    name: "Hatchback",
    multiplier: 1,
    capacity: "4",
    icon: "🚗",
    luggage: "2 Bags",
    description: "Economic & fuel efficient"
  },
  SEDAN: {
    name: "Sedan",
    multiplier: 1.2,
    capacity: "4",
    icon: "🚘",
    luggage: "3 Bags",
    description: "Comfortable for long rides"
  },
  SUV: {
    name: "SUV",
    multiplier: 1.4,
    capacity: "7",
    icon: "🚙",
    luggage: "5 Bags",
    description: "Perfect for family trips"
  },
  PREMIUM: {
    name: "Premium",
    multiplier: 1.6,
    capacity: "4",
    icon: "🚗",
    luggage: "4 Bags",
    description: "Luxury travel experience"
  },
  TRAVELLER: {
    name: "Traveller",
    multiplier: 2.2,
    capacity: "15",
    icon: "🚐",
    luggage: "10 Bags",
    description: "Perfect for group travel"
  }
};

export const getVehicleTypes = () => Object.values(VEHICLE_TYPES);

export const getVehicleByName = (name) => 
  Object.values(VEHICLE_TYPES).find(v => v.name === name);
