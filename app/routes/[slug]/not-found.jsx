// app/not-found.jsx - MINIMAL DARK VERSION
import Link from 'next/link';
import BookCta from "@/components/ui/BookCta";
import { DirectionsCarIcon, SearchOffIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-white border border-line shadow-2xl rounded-2xl p-8 md:p-12 text-center">
        
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-accent-soft border-2 border-brand rounded-full mb-6">
          <SearchOffIcon className="w-12 h-12 text-brand" />
        </div>

        {/* 404 */}
        <h2 className="text-6xl sm:text-8xl font-bold text-brand mb-4">
          Route Not Available
        </h2>
        
        
        {/* Description */}
        <p className="text-ink-muted text-base sm:text-lg mb-6 max-w-md mx-auto">
           This route isn't listed yet, but we'd love to help you book a taxi for your journey!
        </p>
        
        <p className="text-ink-muted text-md mb-8">
          Call or WhatsApp us now to book ride for this route
        </p>

        {/* CTA Buttons */}
        <BookCta align="center" size="lg" />

        {/* Back Link */}
        <Link 
          href="/booking" 
          className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-semibold transition"
        >
          <DirectionsCarIcon />
          Browse Available Routes
        </Link>
      </div>
    </div>
  );
}
