// components/Footer.jsx
import Link from "next/link";
import site from "@/data/site";
import Button from "@/components/ui/Button";
import {
  PhoneIcon,
  EmailIcon,
  WhatsAppIcon,
  InstagramIcon,
  LocationOnIcon,
  ArticleIcon,
  LinkedIn,
} from "@/components/Icons";

const popularRoutes = [
  { name: "Patiala → Delhi", slug: "patiala-to-delhi" },
  { name: "Delhi → Patiala", slug: "delhi-to-patiala" },
  { name: "Patiala → Chandigarh", slug: "patiala-to-chandigarh" },
  { name: "Patiala → Shimla", slug: "patiala-to-shimla" },
];

const cities = [
  { name: "Patiala", slug: "patiala" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Ludhiana", slug: "ludhiana" },
  { name: "Delhi", slug: "delhi" },
  { name: "Shimla", slug: "shimla" },
];

const blogLinks = [
  { name: "Patiala to Chandigarh Taxi", slug: "patiala-to-chandigarh-taxi" },
  { name: "Patiala to Manali Guide", slug: "patiala-to-manali-travel-guide" },
  { name: "Chandigarh to Shimla Cab", slug: "chandigarh-to-shimla-taxi" },
  {
    name: "Patiala to Amritsar Taxi",
    slug: "patiala-to-amritsar-golden-temple-taxi",
  },
  { name: "Best Places in Shimla", slug: "best-places-to-visit-in-shimla" },
];

const colLink =
  "block text-ink-muted hover:text-brand text-sm transition-colors";
// Amber is a fill, never a text colour — ink on amber is 9.63:1. The previous
// hover repeated the resting background, so nothing happened on hover.
const socialLink =
  "rounded-full bg-accent-soft text-brand flex items-center justify-center " +
  "hover:bg-accent transition-colors";
const heading =
  "text-ink font-semibold mb-3 text-sm uppercase tracking-wider";
const bottomLink = "text-ink-muted hover:text-brand transition-colors";
const moreLink =
  "block text-brand hover:text-brand-hover text-sm font-medium transition-colors pt-1";

const socials = [
  { href: site.whatsappBook, label: "WhatsApp", Icon: WhatsAppIcon },
  {
    href: "https://www.linkedin.com/in/tanishq-kumar-modgill-09b308265",
    label: "LinkedIn",
    Icon: LinkedIn,
  },
  {
    href: "https://www.instagram.com/modgilltravels",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

function Credit() {
  return (
    <>
      Designed By{" "}
      <a
        href="https://easebuilds.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand hover:text-brand-hover transition-colors"
      >
        EaseBuilds
      </a>
    </>
  );
}

function Socials() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 ${socialLink}`}
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-ink font-bold text-base mb-3">
              {site.businessName}
            </h4>
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              Your trusted taxi service in Patiala. Professional cab booking for
              local and outstation travel. Available 24/7.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link
                href="/about"
                className="text-ink-muted hover:text-brand text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-ink-muted hover:text-brand text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="text-ink-muted hover:text-brand text-sm transition-colors"
              >
                Book Taxi
              </Link>
            </div>
          </div>

          {/* Routes */}
          <div>
            <h4 className={heading}>Popular Routes</h4>
            <div className="space-y-2">
              {popularRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/routes/${route.slug}`}
                  className={colLink}
                >
                  {route.name}
                </Link>
              ))}
              <Link href="/booking" className={moreLink}>
                View All Routes →
              </Link>
            </div>
          </div>

          {/* Cities */}
          <div>
            <h4 className={heading}>Cities We Serve</h4>
            <div className="space-y-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className={colLink}
                >
                  {city.name}
                </Link>
              ))}
              <Link href="/booking" className={moreLink}>
                More Cities →
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div>
            <h4 className={`${heading} flex items-center gap-1`}>
              <ArticleIcon className="w-4 h-4" />
              Travel Guides
            </h4>
            <div className="space-y-2">
              {blogLinks.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className={`${colLink} line-clamp-1`}
                >
                  {blog.name}
                </Link>
              ))}
              <Link href="/blog" className={moreLink}>
                Read More Blogs →
              </Link>
            </div>
          </div>

          {/* Contact. Every control here is one inline row — icon then label,
              no stacked caption. The two CTAs are dark fills, so their content
              is white; they previously carried ink-muted labels on navy and
              green, which rendered as an all-but-empty button. */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className={heading}>Contact Us</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              <Button
                variant="call"
                size="sm"
                href={`tel:${site.phone}`}
                className="justify-start"
              >
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <span className="truncate">Call Now</span>
              </Button>

              <Button
                variant="whatsapp"
                size="sm"
                external
                href={site.whatsappBook}
                className="justify-start"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="truncate">Book on WhatsApp</span>
              </Button>

              <Button
                variant="secondary"
                size="sm"
                external
                href={site.gbp}
                className="justify-start col-span-2 lg:col-span-1"
              >
                <LocationOnIcon className="w-4 h-4 shrink-0 text-brand" />
                <span className="truncate">View us on Google</span>
              </Button>

              {/* Email and address share one block. They were two grid cells
                  with min-h-11 each, which left a gap wide enough to read as
                  a section break. */}
              <div className="col-span-2 lg:col-span-1 space-y-1.5 pt-1">
              <a
                href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-ink-muted hover:text-brand transition-colors"
              >
                <EmailIcon className="w-4 h-4 shrink-0 text-brand" />
                <span className="text-sm truncate">{site.email}</span>
              </a>

                <address className="flex items-start gap-2 text-ink-muted not-italic">
                  <LocationOnIcon className="w-4 h-4 shrink-0 text-brand mt-0.5" />
                  <span className="text-sm leading-snug">
                    {site.address.street}, {site.address.locality},<br />
                    {site.address.region} {site.address.postalCode}
                  </span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-4">
          {/* Mobile */}
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <Socials />
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-ink-muted">
              <Link href="/privacy" className={bottomLink}>
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className={bottomLink}>
                Terms
              </Link>
              <span>•</span>
              <Link href="/blog" className={bottomLink}>
                Blog
              </Link>
            </div>
            <div className="text-center text-sm text-ink-muted">
              <div>
                &copy; {currentYear} {site.businessName}
              </div>
              <div className="mt-1">
                <Credit />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="text-ink-muted text-sm">
                &copy; {currentYear} {site.businessName}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Link href="/privacy" className={bottomLink}>
                  Privacy
                </Link>
                <span className="text-ink-muted">•</span>
                <Link href="/terms" className={bottomLink}>
                  Terms
                </Link>
                <span className="text-ink-muted">•</span>
                <Link href="/blog" className={bottomLink}>
                  Blog
                </Link>
                <span className="text-ink-muted">•</span>
                <Link href="/sitemap.xml" className={bottomLink}>
                  Sitemap
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Socials />
              <div className="text-ink-muted text-sm">
                <Credit />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp — mobile only. This carried no background token at
          all, so it rendered as a bare icon with a shadow behind it. */}
      <a
        href={site.whatsappBook}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-cta text-white shadow-lg hover:bg-cta-hover transition-colors lg:hidden"
        aria-label="Book on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </footer>
  );
}
