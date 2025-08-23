// data/vehicles.js

export const VEHICLE_TYPES = {
  SEDAN: {
    name: "Sedan",
    capacity: "4",
    icon: "🚘",
    luggage: "3 Bags",
    description: "Comfortable for long rides",
    models: "Toyota Etios, Maruti Dzire, Honda Amaze, Aura",
    perKmRate: 21,
    perKmRateRound: 19.5
  },
  SUV: {
    name: "Maruti Ertiga WC",
    capacity: "7",
    icon: "🚙",
    luggage: "5 Bags",
    description: "Perfect for family trips",
    models: "Maruti Ertiga",
    perKmRate: 27,
    perKmRateRound: 25.5
  },
  PREMIUM: {
    name: "Toyota Innova WC",
    capacity: "6",
    icon: "🚗",
    luggage: "4 Bags",
    description: "Luxury travel experience",
    models: "Toyota Innova",
    perKmRate: 36,
    perKmRateRound: 31.5
  },
  KIA_CARENS: {
    name: "Kia Carens WC",
    capacity: "7",
    icon: "🚐",
    luggage: "4 Bags",
    description: "Modern family MPV with premium features",
    models: "Kia Caren",
    perKmRate: 36,
    perKmRateRound: 31.5
  },
  TRAVELLER: {
    name: "Toyota Innova Crysta WC",
    capacity: "6",
    icon: "🚐",
    luggage: "6 Bags",
    description: "Perfect for group travel",
    models: "Toyota Innova Crysta",
    perKmRate: 51,
    perKmRateRound: 37.5
  }
};

export const getVehicleTypes = () => Object.values(VEHICLE_TYPES);
export const getVehicleByName = (name) => 
  Object.values(VEHICLE_TYPES).find(v => v.name === name);
