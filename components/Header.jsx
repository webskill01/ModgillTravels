// components/Header.jsx
// Server component: there is no state here, so none of this needs to ship as
// client JS. The mobile menu is a native <details>, not a useState toggle.
import Link from "next/link";
import Image from "next/image";
import site from "@/data/site";
import Button from "@/components/ui/Button";
import {
  PhoneIcon,
  WhatsAppIcon,
  Article,
  InfoOutline,
  PersonOutline,
  RemoveRedEye,
  MenuIcon,
} from "@/components/Icons";

const NAV = [
  { href: "/blog", label: "Blogs", Icon: Article },
  { href: "/sitemap-html", label: "Overview", Icon: RemoveRedEye },
  { href: "/contact", label: "Contact", Icon: PersonOutline },
  { href: "/about", label: "About", Icon: InfoOutline },
];

// hover:bg-surface-2, not hover:bg-surface — the header itself is bg-surface,
// so a surface hover was invisible.
const navLink =
  "flex items-center gap-2 px-4 py-2 rounded-xl text-ink-muted " +
  "hover:text-ink hover:bg-surface-2 font-medium transition-colors duration-200";

// Glass: the fill has to be translucent enough for backdrop-blur to show
// anything through it. The original was `bg-surface /95` — a typo that left
// the bar fully opaque with a junk `/95` class, so the blur did nothing.
const HEADER =
 "sticky top-0 z-50 border-b border-line bg-white/70 " +
 "backdrop-blur-xl backdrop-saturate-150 shadow-lg";

export default function Header() {
  return (
    <header className={HEADER}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group min-w-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden shrink-0">
              <Image
                src="/BrandLogo.webp"
                alt=""
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-ink font-bold text-lg lg:text-xl tracking-tight group-hover:text-brand transition-colors duration-200">
                ModgillTravels
              </span>
              <span className="text-ink-muted text-sm font-medium -mt-1 truncate">
                <span className="sm:hidden">Patiala</span>
                <span className="hidden sm:inline">
                  Your trusted travel companion
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(({ href, label, Icon }) => (
              <Link key={href} href={href} className={navLink}>
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}

            <div className="flex items-center gap-3 ml-6">
              {/* Icons inherit the button's white — never text-brand, which is
                  navy on navy and vanishes. */}
              <Button variant="call" href={`tel:${site.callPhone}`}>
                <PhoneIcon className="w-4 h-4" />
                <span className="hidden xl:inline">Call</span>
              </Button>
              <Button variant="whatsapp" external href={site.whatsapp}>
                <WhatsAppIcon className="w-5 h-5" />
                <span>Book Now</span>
              </Button>
            </div>
          </nav>

          {/* Mobile: call + native details menu. Before this the four nav
              links were unreachable on phones, which is most of the traffic. */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="call" size="sm" href={`tel:${site.callPhone}`}>
              <PhoneIcon className="w-4 h-4" />
              <span>Call</span>
            </Button>

            <details className="relative group">
              <summary
                className="list-none flex items-center justify-center w-11 h-11 rounded-xl text-ink-muted hover:text-ink hover:bg-surface-2 cursor-pointer transition-colors"
                aria-label="Menu"
              >
                <MenuIcon className="w-6 h-6" />
              </summary>
              <nav className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-line bg-bg shadow-lg p-2 z-50">
                {NAV.map(({ href, label, Icon }) => (
                  <Link key={href} href={href} className={navLink}>
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Link>
                ))}
                <Button
                  variant="whatsapp"
                  external
                  href={site.whatsapp}
                  className="w-full mt-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Book Now</span>
                </Button>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
