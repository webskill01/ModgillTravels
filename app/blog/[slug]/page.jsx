// app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import BookCta from "@/components/ui/BookCta";
import Link from 'next/link';
import blogs from '@/data/blogs';
import cities from '@/data/cities';
import { CalendarMonthIcon, AccessTimeIcon, PersonIcon } from '@/components/Icons';
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
      canonical: `https://www.modgilltravels.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.modgilltravels.in/blog/${blog.slug}`,
      siteName: 'ModgillTravels',
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      images: [
        {
          url: blog.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: blog.metaTitle,
        }
      ],
    },
    // patch_037: Add Twitter Card to blog post pages
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image || '/og-image.jpg'],
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
        <article className="bg-white border border-line rounded-2xl p-6 sm:p-8 mb-8">

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-surface text-brand text-sm rounded-lg mb-4">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-ink-muted pb-6 border-b border-line">
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
          <div className="rich-text">
  <div
    className="text-ink-muted leading-relaxed space-y-6"
    dangerouslySetInnerHTML={{ __html: blog.content }}
  />
</div>
        </article>

        {/* CTA Section */}
        <section className="bg-surface border border-brand rounded-2xl p-6 sm:p-8 mb-8">
          {/* patch_038: CTA H2 rewrite */}
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 text-center">
            Book Your Taxi from Patiala — Call or WhatsApp Us
          </h2>
          <p className="text-ink-muted text-center mx-auto mb-6">
            Call us now or WhatsApp for instant booking confirmation with professional drivers and comfortable vehicles.
          </p>
          <BookCta align="center" size="lg" />
        </section>

        {/* Related Cities */}
        {relatedCityPages.length > 0 && (
          <section className="mb-8">
            {/* patch_039: Related Cities H2 rewrite */}
            <h2 className="text-2xl font-bold text-ink mb-6">Taxi Service in Nearby Cities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCityPages.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="bg-white border border-line rounded-xl p-5 hover:border-brand transition-all"
                >
                  <h3 className="text-ink font-bold text-lg mb-2">{city.name}</h3>
                  <p className="text-ink-muted text-sm line-clamp-2">{city.description}</p>
                  <span className="text-brand text-sm mt-3 inline-block">
                    View Taxi Service →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Blogs */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-6">More Travel Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.slug !== slug)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="bg-white border border-line rounded-xl p-5 hover:border-brand transition-all"
                >
                  <span className="inline-block px-2 py-1 bg-surface text-brand text-sm rounded mb-3">
                    {relatedBlog.category}
                  </span>
                  <h3 className="text-ink font-bold text-lg mb-2 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-ink-muted text-sm line-clamp-2 mb-3">
                    {relatedBlog.excerpt}
                  </p>
                  <span className="text-brand text-sm font-semibold">
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
