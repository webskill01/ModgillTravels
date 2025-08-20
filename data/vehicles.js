// data/vehicles.js

export const VEHICLE_TYPES = {
  SEDAN: {
    name: "Sedan",
    multiplier: 1.2,
    capacity: "4",
    icon: "🚘",
    luggage: "3 Bags",
    description: "Comfortable for long rides",
     models:"Toyota Etios,Maruti Dzire,Honda Amaze,Aura"
  },
  SUV: {
    name: "Maruti Ertiga WC",
    multiplier: 1.4,
    capacity: "7",
    icon: "🚙",
    luggage: "5 Bags",
    description: "Perfect for family trips",
     models:""
  },
  PREMIUM: {
    name: "Toyota Innova WC",
    multiplier: 1.6,
    capacity: "6",
    icon: "🚗",
    luggage: "4 Bags",
    description: "Luxury travel experience",
  },
  TRAVELLER: {
    name: "Toyota Innova Crysta WC",
    multiplier: 2.2,
    capacity: "6",
    icon: "🚐",
    luggage: "6 Bags",
    description: "Perfect for group travel"
  }
};

export const getVehicleTypes = () => Object.values(VEHICLE_TYPES);

export const getVehicleByName = (name) => 
  Object.values(VEHICLE_TYPES).find(v => v.name === name);
