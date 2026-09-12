// components/Analytics.js
'use client';

import Script from 'next/script';
// lazyOnload, not afterInteractive: gtag.js plus the GTM container was the
// largest single contributor to TBT, and it was running the moment hydration
// finished. Deferring to the load event costs the tail of very fast bounces
// and buys back main-thread time on the metric Google actually scores.
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get GA4 Measurement ID from environment variable
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Track page views on route changes
    if (pathname && GA_MEASUREMENT_ID && window.gtag) {  // ✅ FIXED: Removed blocking condition
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Track page view (only once per navigation)
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
      });
      
      // ✅ REMOVED duplicate event tracking
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  // ✅ FIXED: Only check if variable exists
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics: NEXT_PUBLIC_GA_MEASUREMENT_ID not set');
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag.js */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />

      {/* Optional: Google Tag Manager */}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}
    </>
  );
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}

// Custom event tracking helper
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
