import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';
import BookingSummary from '@/components/BookingSummary';

export const metadata = {
  title: "Book Your Taxi - ModgillTravels | Instant Confirmation",
  description: "Complete your taxi booking with ModgillTravels. One-way and round-trip options available. Professional drivers, transparent pricing, instant WhatsApp confirmation.",
  keywords: "taxi booking, cab booking, ModgillTravels, Punjab taxi, Delhi to Patiala taxi, instant booking"
};

function BookingPageContent() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-5 md:py-8 relative">
        {/* Page Header */}
        <div className="text-center mb-6 md:mb-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-2 md:mb-4">
            Complete Your Booking
          </h2>
          <p className="text-gray-400 text-center text-sm md:text-lg max-w-2xl mx-auto">
            Fill in your travel details below and we'll confirm your booking Instantly
          </p>
        </div>

        {/* Main Booking Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 overflow-hidden">
          {/* Left: Booking Form */}
          <div className="lg:col-span-3 min-w-0">
            <BookingForm />
          </div>

          {/* Right: Booking Summary */}
          <div className="lg:col-span-1 min-w-0">
            <BookingSummary />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-6 text-center">
          <div className="flex flex-col items-center p-3 md:p-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
              <span className="text-green-400 text-lg md:text-xl">✓</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
              Instant Confirmation
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Get booking confirmation via WhatsApp within minutes
            </p>
          </div>
          
          <div className="flex flex-col items-center p-3 md:p-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
              <span className="text-blue-400 text-sm md:text-xl">24/7</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
              24/7 Support
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Round-the-clock customer support for your peace of mind
            </p>
          </div>
          
          <div className="flex flex-col items-center p-3 md:p-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
              <span className="text-purple-400 text-lg md:text-xl">₹</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">
              Transparent Pricing
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              No hidden charges. What you see is what you pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 md:px-5 py-8 text-center overflow-x-hidden">
        <div className="animate-pulse">
          <div className="h-6 md:h-8 bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="h-96 bg-gray-700 rounded-2xl"></div>
            </div>
            <div className="lg:col-span-1 h-64 bg-gray-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    }>
      <BookingPageContent />
    </Suspense>
  );
}
