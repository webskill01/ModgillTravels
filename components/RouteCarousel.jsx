"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


const routes = [
  {
    id: 1,
    title: "Delhi to Patiala Taxi",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR 3,400`,
    image: "/img1.jpg",
    slug: "delhi-to-patiala"
  },
  {
    id: 2,
    title: "Patiala to Manali Cab",
    carInfo: "Swift Dzire / Toyota Etios / Similar", 
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR 5,400`,
    image: "/img2.png",
    slug: "patiala-to-manali"
  },
  {
    id: 3,
    title: "Shimla to Patiala Taxi",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats", 
    features: ["Air Conditioning", "GPS Tracking"],
    price: `INR 2,600`,
    image: "/img3.png",
    slug: "shimla-to-patiala"
  },
  {
    id: 4,
    title: "Patiala to Chandigarh Cab",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"], 
    price: `INR 1,400`,
    image: "/img4.png",
    slug: "patiala-to-chandigarh"
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
          Popular Taxi Routes from Patiala
        </h2>
        <p className="text-gray-400 text-xs md:text-base max-w-xl mx-auto">
          One way cab service at affordable prices 
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
                alt={`${route.title} - ModgillTravels Cab Booking`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-3 md:p-4 flex flex-col flex-grow mb-4">
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

              <div className="mt-auto">
                {/* Features */}
                <div className="grid grid-cols-2 gap-1 mb-4">
                  <div className="flex items-center justify-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    <AcUnitIcon className="w-3 h-3" />
                    AC
                  </div>
                  <div className="flex items-center justify-center gap-1 bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    <GpsFixedIcon className="w-3 h-3" />
                    GPS
                  </div>
                </div>

                {/* Price and Button */}
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
        <span className="text-gray-400 text-xs">
          ← Scroll to see more routes →
        </span>
      </div>

      {/* Custom CSS */}
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
