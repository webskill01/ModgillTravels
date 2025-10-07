// app/robots.js - Production Ready with All Pages

export default function robots() {
  return {
    rules: [
      // Default rule for all bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
        ],
      },
      // Priority for major search engines
      {
        userAgent: ['Googlebot', 'Googlebot-Image'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0, // No delay for Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Social media for link previews
      {
        userAgent: ['facebookexternalhit', 'Twitterbot', 'WhatsApp'],
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://modgilltravels.in/sitemap.xml',
    host: 'https://modgilltravels.in',
  };
}
