// app/blog/page.jsx
import Link from 'next/link';
import blogs from '@/data/blogs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import Image from 'next/image';

export const metadata = {
  title: 'Travel Blog & Guides | ModgillTravels',
  description: 'Read travel guides, taxi booking tips, destination information, and travel stories from ModgillTravels. Expert advice for Patiala, Delhi, Shimla, Chandigarh trips.',
  keywords: ['travel blog', 'travel guide', 'taxi tips', 'shimla guide', 'patiala travel', 'cab booking guide'],
  alternates: {
    canonical: 'https://modgilltravels.in/blog',
  },
  robots: {
    index: true,
    follow: true,
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Travel Blog & Guides
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Expert travel guides, booking tips, and destination information to help you plan your perfect trip.
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
