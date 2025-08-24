export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/static/", "/private/", "/temp/"],
      },
    ],
    sitemap: "https://modgilltravels.in/sitemap.xml",
  };
}
