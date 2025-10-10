// app/robots.js - FINAL OPTIMIZED VERSION
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/private/',
        ],
      },
      // Google-specific (no crawlDelay - they ignore it)
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-News'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Bing (supports crawlDelay if needed)
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        // Add crawlDelay only if server can't handle load
        // crawlDelay: 1,
      },
    ],
    sitemap: 'https://modgilltravels.in/sitemap.xml',
    host: 'https://modgilltravels.in',
  };
}
