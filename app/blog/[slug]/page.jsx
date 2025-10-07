// app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import blogs from '@/data/blogs';
import cities from '@/data/cities';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getBlogSchema } from '@/utils/blogSchema';
import Breadcrumbs from '@/components/BreadCrumbs';
import Image from 'next/image';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  
  
  if (!blog) {
    return {
      title: '404 - Blog Not Found',
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://modgilltravels.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://modgilltravels.in/blog/${blog.slug}`,
      siteName: 'ModgillTravels',
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  const blogSchema = getBlogSchema(blog);

  if (!blog) {
    notFound();
  }

  // Get related cities for internal linking
  const relatedCityPages = blog.relatedCities
    ? cities.filter(c => blog.relatedCities.includes(c.slug))
    : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        <Breadcrumbs items={[
            { label: "Back to Blog", href: `/blog` },
            { label: blog.metaTitle, href: blog.slug },
          ]} 
          />

        {/* Article Header */}
        <article className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8">
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-lg mb-4">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 pb-6 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <PersonIcon className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarMonthIcon className="w-5 h-5" />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <AccessTimeIcon className="w-5 h-5" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden my-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
  <div 
    className="text-gray-300 leading-relaxed space-y-6"
    dangerouslySetInnerHTML={{ __html: blog.content }}
  />
</div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Ready to Book Your Trip?
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Call us now or WhatsApp for instant booking confirmation with professional drivers and comfortable vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916284992669"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Call +91-62849-92669</span>
            </a>
            <a
              href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </section>

        {/* Related Cities */}
        {relatedCityPages.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore These Cities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCityPages.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <h3 className="text-white font-bold text-lg mb-2">{city.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{city.description}</p>
                  <span className="text-cyan-400 text-sm mt-3 inline-block">
                    View Taxi Service →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Blogs */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">More Travel Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.slug !== slug)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-5 hover:border-cyan-500/40 transition-all hover:scale-105"
                >
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded mb-3">
                    {relatedBlog.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {relatedBlog.excerpt}
                  </p>
                  <span className="text-cyan-400 text-sm font-semibold">
                    Read More →
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
</>
  );
}
