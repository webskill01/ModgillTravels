// data/vehicles.js

export const VEHICLE_TYPES = {
  SEDAN: {
    name: "Sedan",
    capacity: "4",
    icon: "🚘",
    luggage: "3 Bags",
    description: "Comfortable for long rides",
    models: "Toyota Etios, Maruti Dzire, Honda Amaze, Aura",
    perKmRate: 12
  },
  SUV: {
    name: "Maruti Ertiga WC",
    capacity: "7",
    icon: "🚙",
    luggage: "5 Bags",
    description: "Perfect for family trips",
    models: "Maruti Ertiga",
    perKmRate: 15
  },
  PREMIUM: {
    name: "Toyota Innova WC",
    capacity: "6",
    icon: "🚗",
    luggage: "4 Bags",
    description: "Luxury travel experience",
    models: "Toyota Innova",
    perKmRate: 18
  },
  TRAVELLER: {
    name: "Toyota Innova Crysta WC",
    capacity: "6",
    icon: "🚐",
    luggage: "6 Bags",
    description: "Perfect for group travel",
    models: "Toyota Innova Crysta",
    perKmRate: 22
  }
};

export const getVehicleTypes = () => Object.values(VEHICLE_TYPES);
export const getVehicleByName = (name) => 
  Object.values(VEHICLE_TYPES).find(v => v.name === name);
