// app/sitemap.js - Fixed version
import destinations from '@/data/destinations';
import cities from '@/data/cities';
import blogs from '@/data/blogs';

export default function sitemap() {
  const baseUrl = 'https://modgilltravels.in';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Route pages (destinations) - FIXED: Changed /route/ to /routes/
  const routePages = destinations.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,  // ← FIXED: plural "routes"
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // City pages - High priority for local SEO
  const cityPages = (cities || []).map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog pages - With actual publish dates
  const blogPages = (blogs || []).map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...routePages, ...cityPages, ...blogPages];
}
