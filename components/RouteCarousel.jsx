"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import destinations from '@/data/destinations';
import { calculateFare } from '@/utils/fareCalculator';

// Updated routes with dynamic fare calculation
const routes = [
  {
    id: 1,
    title: "Delhi To Patiala",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR ${calculateFare({
      distanceKm: destinations.find(d => d.slug === "delhi-to-patiala")?.distanceKm || 260,
      vehicleName: 'Sedan',
      isRoundTrip: false,
      days: 1,
      isNightRide: false
    }).toLocaleString()}/-`,
    image: "/img1.jpg",
    slug: "delhi-to-patiala"
  },
  {
    id: 2,
    title: "Delhi To Manali",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR ${calculateFare({
      distanceKm: destinations.find(d => d.slug === "delhi-to-manali")?.distanceKm || 520,
      vehicleName: 'Sedan',
      isRoundTrip: false,
      days: 1,
      isNightRide: false
    }).toLocaleString()}/-`,
    image: "/img2.png",
    slug: "delhi-to-manali"
  },
  {
    id: 3,
    title: "Chandigarh To Shimla",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR ${calculateFare({
      distanceKm: destinations.find(d => d.slug === "chandigarh-to-shimla")?.distanceKm || 114,
      vehicleName: 'Sedan',
      isRoundTrip: false,
      days: 1,
      isNightRide: false
    }).toLocaleString()}/-`,
    image: "/img3.png",
    slug: "chandigarh-to-shimla"
  },
  {
    id: 4,
    title: "Chandigarh To Manali",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR ${calculateFare({
      distanceKm: destinations.find(d => d.slug === "chandigarh-to-manali")?.distanceKm || 305,
      vehicleName: 'Sedan',
      isRoundTrip: false,
      days: 1,
      isNightRide: false
    }).toLocaleString()}/-`,
    image: "/img4.png",
    slug: "chandigarh-to-manali"
  }
];

export default function RouteCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleScroll = () => {
    if (carouselRef.current && isLargeScreen) {
      const cardWidth = 320;
      const gap = 24;
      const scrollLeft = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="py-6 md:py-12 px-4 md:px-6 relative">
      <div className="text-center mb-5 md:mb-8">
        <h2 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">
          A Cab For Every Occasion
        </h2>
        <p className="text-gray-400 text-xs md:text-base max-w-xl mx-auto">
          ModgillTravels offers one way cab at very reasonable prices
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex gap-0 lg:gap-6 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollSnapType: 'x mandatory', WebkitScrollSnapType: 'x mandatory' }}
      >
        {routes.map((route, index) => (
          <div
            key={route.id}
            className="flex-none w-full lg:w-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-white/10 flex flex-col"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Image */}
            <div className="relative h-40 md:h-48 flex-shrink-0">
              <Image
                src={route.image}
                alt={route.title}
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content - Positioned at bottom with flex-grow */}
            <div className="p-3 md:p-4 flex flex-col flex-grow mb-4">
              {/* Top content - grows to push bottom content down */}
              <div className="flex-grow">
                <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
                  {route.title}
                </h3>
                <div className="text-gray-300 text-xs mb-1">
                  {route.carInfo}
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  {route.seats}
                </div>
              </div>

              {/* Bottom content - stays at bottom */}
              <div className="mt-auto">
                {/* Features - Inline grid */}
                <div className="grid grid-cols-2  gap-1 mb-4">
                  <div className="flex items-center justify-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    <AcUnitIcon className="w-3 h-3" />
                    AC
                  </div>
                  <div className="flex items-center justify-center gap-1 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    <GpsFixedIcon className="w-3 h-3" />
                    GPS
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="grid grid-cols-2 justify-items-center items-center gap-2">
                  <div className="text-base md:text-lg font-bold text-cyan-400">
                    {route.price}
                  </div>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="bg-cyan-500 w-full text-center hover:bg-cyan-600 text-white text-xs px-2 py-1 rounded-md font-medium transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile scroll indicator */}
      <div className="block text-center mt-3">
        <span className="text-gray-400 text-xs ">
          ← Scroll to see more routes →
        </span>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
