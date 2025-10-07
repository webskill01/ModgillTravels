// components/BlogSection.jsx - FIXED VERSION
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0); // Track total drag distance
  const carouselRef = useRef(null);

  const blogs = [
    {
      title: 'Best Places to Visit in Shimla',
      description: 'Top 10 must-visit destinations with complete travel guide and tips',
      slug: 'best-places-to-visit-in-shimla',
      readTime: '8 min',
      category: 'Travel Guide',
      borderColor: 'border-purple-500/40',
      accentColor: 'text-purple-400',
      dotColor: 'bg-purple-400',
      emoji: '⛰️'
    },
    {
      title: 'Patiala to Delhi Complete Guide',
      description: 'Route details, timing, stops, and smart booking tips for your journey',
      slug: 'patiala-to-delhi-travel-guide',
      readTime: '6 min',
      category: 'Route Guide',
      borderColor: 'border-blue-500/40',
      accentColor: 'text-blue-400',
      dotColor: 'bg-blue-400',
      emoji: '🚗'
    },
    {
      title: 'How to Book One Way Taxi',
      description: 'Save money and book smarter with our one way taxi booking guide',
      slug: 'how-to-book-one-way-taxi',
      readTime: '5 min',
      category: 'Booking Tips',
      borderColor: 'border-green-500/40',
      accentColor: 'text-green-400',
      dotColor: 'bg-green-400',
      emoji: '💡'
    },
  ];

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragDistance(0); // Reset drag distance
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
    setDragDistance(Math.abs(diff)); // Track how far user dragged
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // Only change slide if drag distance is significant
    if (dragDistance > 50) {
      if (translateX > 50 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (translateX < -50 && currentSlide < blogs.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    
    setTranslateX(0);
    setDragDistance(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
    setDragDistance(Math.abs(diff));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Only change slide if drag distance is significant
    if (dragDistance > 50) {
      if (translateX > 50 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (translateX < -50 && currentSlide < blogs.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    
    setTranslateX(0);
    setDragDistance(0);
  };

  // Handle click - prevent navigation if user was dragging
  const handleCardClick = (e, slug) => {
    // If user dragged more than 10px, prevent navigation
    if (dragDistance > 10) {
      e.preventDefault();
      return;
    }
    // Otherwise, allow normal Link navigation
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startX, translateX]);

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-4 sm:p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
            <AutoStoriesIcon className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Travel Guides & Tips
            </h2>
            <p className="text-gray-500 text-xs">Swipe for more articles</p>
          </div>
        </div>
        <Link 
          href="/blog" 
          className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition flex items-center gap-1 group flex-shrink-0"
        >
          <span>All Blogs</span>
          <ArrowForwardIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {/* Cards */}
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`,
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="w-full flex-shrink-0 px-1"
            >
              <Link
                href={`/blog/${blog.slug}`}
                onClick={(e) => handleCardClick(e, blog.slug)}
                className={`group border-2 ${blog.borderColor} hover:border-opacity-80 rounded-xl p-4 sm:p-5 block transition-all duration-300 hover:scale-[1.01] relative overflow-hidden`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Large Emoji Icon */}
                      <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                        {blog.emoji}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 ${blog.borderColor} border rounded text-xs font-medium ${blog.accentColor}`}>
                            {blog.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <AccessTimeIcon className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className={`text-white font-bold text-base sm:text-lg line-clamp-2 group-hover:${blog.accentColor} transition-colors`}>
                          {blog.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base line-clamp-2 mb-4 ml-1">
                    {blog.description}
                  </p>

                  {/* Read More Button */}
                  <div className={`flex items-center gap-2 ${blog.accentColor} text-sm font-semibold group-hover:gap-3 transition-all ml-1`}>
                    <ArticleIcon className="w-5 h-5" />
                    <span>Read Full Guide</span>
                    <ArrowForwardIcon className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <p className="text-center text-gray-500 text-xs mt-2">
        {currentSlide + 1} / {blogs.length}
      </p>
    </div>
  );
}
