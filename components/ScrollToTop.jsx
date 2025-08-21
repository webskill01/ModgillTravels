'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrollFromBottomToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Start from bottom instantly
    window.scrollTo(0, document.body.scrollHeight);

    // Then smoothly scroll to top
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }, 100); // Small delay to ensure bottom scroll happened
  }, [pathname]);

  return null;
}
