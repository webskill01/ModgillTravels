// components/BlogSection.jsx - FULLY SCROLLABLE WITH DRAG
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function BlogSection() {
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const blogs = [
    {
      title: 'Best Places to Visit in Shimla',
      description: 'ModgillTravels offers comfortable taxi service from Patiala to Shimla covering 180 km. Explore Mall Road, Jakhoo Temple, Kufri, and more scenic destinations. Our experienced hill drivers ensure safe mountain travel with well-maintained AC vehicles.',
      slug: 'best-places-to-visit-in-shimla',
      readTime: '8 min',
      category: 'Travel Guide',
      borderColor: 'border-purple-500/40',
      accentColor: 'text-purple-400',
      dotColor: 'bg-purple-400',
      emoji: '⛰️',
      keywords: 'shimla taxi, patiala to shimla, hill station travel'
    },
    {
      title: 'Patiala to Delhi Complete Guide',
      description: 'Planning a trip from Patiala to Delhi? Book reliable taxi service covering 250 km in 4-5 hours. Our professional drivers know the best routes via Rajpura, Ambala, and Panipat. Get transparent pricing starting at ₹3,500 for one-way trips.',
      slug: 'patiala-to-delhi-travel-guide',
      readTime: '6 min',
      category: 'Route Guide',
      borderColor: 'border-blue-500/40',
      accentColor: 'text-blue-400',
      dotColor: 'bg-blue-400',
      emoji: '🚗',
      keywords: 'patiala to delhi, taxi booking, outstation cab'
    },
    {
      title: 'How to Book One Way Taxi',
      description: 'Save up to 40% with our one-way taxi service in Patiala. No return charges! Book cabs to Delhi, Chandigarh, Shimla, or Ludhiana paying only for your journey. Available 24/7 with instant confirmation. Call +91-62849-92669 for best rates.',
      slug: 'how-to-book-one-way-taxi',
      readTime: '5 min',
      category: 'Booking Tips',
      borderColor: 'border-green-500/40',
      accentColor: 'text-green-400',
      dotColor: 'bg-green-400',
      emoji: '💡',
      keywords: 'one way taxi, cheap cab booking, no return fare'
    },
  ];

  // Mouse/Touch Drag Handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    setDragDistance(Math.abs(walk));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle card click - prevent navigation if dragging
  const handleCardClick = (e, slug) => {
    if (dragDistance > 10) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    router.push(`/blog/${slug}`);
  };

  // Update current card indicator based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentCard(newIndex);
  };

  // Scroll to specific card
  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-4 sm:p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
            <AutoStoriesIcon className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Travel Guides & Booking Tips
            </h2>
            <p className="text-gray-500 text-xs">Expert advice for your journey</p>
          </div>
        </div>
        <Link 
          href="/blog" 
          className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition flex items-center gap-1 group flex-shrink-0"
        >
          <span>All Guides</span>
          <ArrowForwardIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scrollable Carousel */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            onClick={(e) => handleCardClick(e, blog.slug)}
            className="flex-shrink-0 w-full snap-center"
          >
            <div
              className={`group border-2 ${blog.borderColor} hover:border-opacity-80 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 cursor-pointer`}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Top Section with Emoji */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {blog.emoji}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`px-2 py-0.5 ${blog.borderColor} border rounded text-xs font-medium ${blog.accentColor}`}>
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <AccessTimeIcon className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className={`text-white font-bold text-base sm:text-lg mb-2 group-hover:${blog.accentColor} transition-colors`}>
                      {blog.title}
                    </h3>
                  </div>
                </div>
                
                {/* Enhanced Description with SEO Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
                  {blog.description}
                </p>

                {/* Keywords Tag */}
                <div className="mb-4 pb-3 border-b border-gray-700">
                  <div className="flex items-center gap-2 flex-wrap">
                    {blog.keywords.split(', ').map((keyword, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-slate-700/50 px-2 py-1 rounded text-gray-400"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <div className={`flex items-center gap-2 ${blog.accentColor} text-sm font-semibold group-hover:gap-3 transition-all`}>
                  <ArticleIcon className="w-5 h-5" />
                  <span>Read Complete Guide</span>
                  <ArrowForwardIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {blogs.map((blog, index) => (
          <span
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-2 rounded-full transition-all ${
              currentCard === index 
                ? `w-2 ${blog.dotColor}` 
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to ${blog.title}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <p className="text-center text-gray-500 text-xs mt-2">
        Article {currentCard + 1} of {blogs.length}
      </p>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
