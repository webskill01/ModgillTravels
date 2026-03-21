// utils/blogSchema.js
export function getBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://www.modgilltravels.in${blog.image || '/og-image.jpg'}`,
      "width": 1200,
      "height": 630
    },
    "datePublished": blog.date,
    "dateModified": blog.dateModified || blog.date,
    "author": {
      "@type": "Organization",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ModgillTravels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.modgilltravels.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.modgilltravels.in/blog/${blog.slug}`
    },
    "articleBody": blog.content.substring(0, 500),
    "keywords": blog.keywords.join(', ')
  };
}
