"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const routes = [
  {
    id: 1,
    title: "Delhi To Patiala",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: "INR 2500/-",
    image: "/img1.png",
    slug: "delhi-to-patiala"
  },
  {
    id: 2,
    title: "Delhi To Manali",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: "INR 6500/-",
    image: "/img2.jpg",
    slug: "delhi-to-manali"
  },
  {
    id: 3,
    title: "Chandigarh To Shimla",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: "INR 2200/-",
    image: "/img3.jpg",
    slug: "chandigarh-to-shimla"
  },
  {
    id: 4,
    title: "Chandigarh To Manali",
    carInfo: "Swift Dzire / Toyota Etios / Similar",
    seats: "4 Passenger Seats",
    features: ["Air Conditioning", "GPS Tracking"],
    price: "INR 4800/-",
    image: "/img4.jpg",
    slug: "chandigarh-to-manali"
  }
];

export default function RouteCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = isLargeScreen ? 320 : window.innerWidth - 40;
      const gap = isLargeScreen ? 24 : 0;
      const scrollPosition = index * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? routes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === routes.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

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
    <section className="max-w-7xl mx-auto px-5 py-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">A Cab For Every Occasion</h2>
        <p className="text-gray-400">ModgillTravels offers one way cab at very reasonable prices</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 lg:gap-6 pb-4 px-2 lg:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {routes.map((route, index) => (
            <div 
              key={route.id} 
              className="min-w-[calc(100vw-2.5rem)] lg:min-w-[320px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg overflow-hidden snap-center"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{route.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{route.carInfo}</p>
                <p className="text-gray-300 text-sm mb-3">{route.seats}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <AcUnitIcon className="w-4 h-4 text-cyan-400" />
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <GpsFixedIcon className="w-4 h-4 text-cyan-400" />
                    <span>GPS Tracking</span>
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold text-lg">{route.price}</span>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="text-center mt-4">
        <p className="text-gray-500 text-sm">← Scroll to see more routes →</p>
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
