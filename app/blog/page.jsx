// app/blog/page.jsx
import Link from 'next/link';
import blogs from '@/data/blogs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import Image from 'next/image';

export const metadata = {
  // patch_032: Title rewrite
  title: 'Taxi Travel Guides for Patiala, Punjab | Cab Tips & Route Guides — ModgillTravels',
  // patch_033: Meta description rewrite
  description: 'Expert taxi travel guides for routes from Patiala — Delhi, Shimla, Manali, Amritsar. Cab booking tips, fare guides, hill station travel advice, and airport transfer guides from ModgillTravels.',
  keywords: ['travel blog', 'travel guide', 'taxi tips', 'shimla guide', 'patiala travel', 'cab booking guide'],
  alternates: {
    canonical: 'https://www.modgilltravels.in/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
  // patch_035: Add OG image
  openGraph: {
    title: 'Taxi Travel Guides for Patiala, Punjab | ModgillTravels Blog',
    description: 'Expert taxi travel guides for routes from Patiala — Delhi, Shimla, Manali, Amritsar. Cab booking tips and fare guides.',
    type: 'website',
    url: 'https://www.modgilltravels.in/blog',
    siteName: 'ModgillTravels',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModgillTravels Travel Blog — Taxi & Travel Guides from Patiala, Punjab'
      }
    ],
  },
  // patch_036: Add Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Travel Guides for Patiala | ModgillTravels Blog',
    description: 'Expert cab booking tips and route guides from Patiala to Delhi, Shimla, Manali, Amritsar.',
    images: ['/og-image.jpg'],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">

        {/* Header */}
        <section className="text-center mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArticleIcon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
          </div>
          {/* patch_031: H1 rewrite */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Taxi & Travel Guides from Patiala — ModgillTravels Blog
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Expert travel guides, booking tips, and destination information to help you plan your perfect trip.
          </p>
          {/* patch_034: keyword-rich intro paragraph */}
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            We cover fare guides for Patiala to Delhi, Shimla, Manali, and Amritsar routes; vehicle comparison tips (Sedan vs Ertiga vs Innova Crysta); airport transfer guides for Chandigarh Airport; and hill station travel advice for first-time travelers from Punjab.
          </p>
        </section>

{/* Categories (Future Enhancement) */}
        <section className="mt-12 mb-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Popular Categories</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm cursor-pointer hover:bg-purple-500/30 transition">
              Travel Guides
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm cursor-pointer hover:bg-blue-500/30 transition">
              Booking Tips
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm cursor-pointer hover:bg-green-500/30 transition">
              Destination Info
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm cursor-pointer hover:bg-cyan-500/30 transition">
              Travel Stories
            </span>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all hover:scale-105"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-800">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarMonthIcon className="w-4 h-4" />
                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <AccessTimeIcon className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                </div>

                <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded mb-3">
                  {blog.category}
                </span>

                <h2 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowForwardIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </section>


      </div>
    </div>
  );
}
