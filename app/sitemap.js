import destinations from '@/data/destinations';
import cities from '@/data/cities';
import blogs from '@/data/blogs';

export default function sitemap() {
  const baseUrl = 'https://www.modgilltravels.in';

  // Bump this by hand when route/city content actually changes. It used to be
  // `new Date()`, which stamped all 36 URLs as modified on every deploy —
  // Google learns to ignore a lastmod that always says "just now".
  const now = '2026-09-12T00:00:00.000Z';

  const routePages = destinations.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date || now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/booking`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];

  return [...staticPages, ...routePages, ...cityPages, ...blogPages];
}
