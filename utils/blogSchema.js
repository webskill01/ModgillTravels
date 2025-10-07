// utils/blogSchema.js
export function getBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "datePublished": blog.date,
    "dateModified": blog.date,
    "author": {
      "@type": "Organization",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "ModgillTravels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://modgilltravels.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://modgilltravels.in/blog/${blog.slug}`
    },
    "articleBody": blog.content.substring(0, 500),
    "keywords": blog.keywords.join(', ')
  };
}
