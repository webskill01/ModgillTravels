// components/Header.jsx
"use client";
import Link from "next/link";
import site from "@/data/site";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PhoneIcon, WhatsAppIcon, Article, InfoOutline, PersonOutline, RemoveCircle, RemoveRedEye } from "@/components/Icons";

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[--color-surface] /95 border-b border-[--color-line] shadow-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 group">
                {/* Replace the temporary logo div with: */}
                <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-[--shadow] transition-all duration-300">
                  <Image
                    src="/BrandLogo.png" // Your logo path
                    alt="ModgillTravels Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[--color-ink] font-bold text-lg lg:text-xl tracking-tight group-hover:text-[--color-brand] transition-colors duration-300">
                    ModgillTravels
                  </span>
                  <span className="text-[--color-ink-muted] sm:hidden">Patiala</span>
                  <span className="text-[--color-ink-muted] text-xs lg:text-sm font-medium -mt-1 hidden sm:block">
                    Your trusted travel companion
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Only show on large screens */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/blog"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[--color-ink-muted] hover:text-[--color-ink] hover:bg-[--color-surface] font-medium transition-all duration-200"
              >
                <Article className="w-4 h-4" />
                <span>Blogs</span>
              </Link>
              <Link
                href="/sitemap-html"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[--color-ink-muted] hover:text-[--color-ink] hover:bg-[--color-surface] font-medium transition-all duration-200"
              >
                <RemoveRedEye className="w-4 h-4" />
                <span>Overview</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[--color-ink-muted] hover:text-[--color-ink] hover:bg-[--color-surface] font-medium transition-all duration-200"
              >
                <PersonOutline className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[--color-ink-muted] hover:text-[--color-ink] hover:bg-[--color-surface] font-medium transition-all duration-200"
              >
                <InfoOutline className="w-4 h-4" />
                <span>About</span>
              </Link>
              

              {/* Desktop CTA Buttons */}
              <div className="flex items-center space-x-3 ml-6">
                <Button variant="call" href={`tel:${site.phone}`} className=""><PhoneIcon className="w-4 h-4 text-[--color-brand]" />
                  <span className="hidden xl:inline">Call</span></Button>

                <Link
                  href="https://wa.me/916284992669?text=Hi, I want to book a taxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[--color-brand] text-white font-semibold hover:bg-[--color-brand-hover] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-[--shadow]"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Book Now</span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button - Only show on small/medium screens */}
            <div className="lg:hidden">
              <Button variant="call" href={`tel:${site.phone}`} className=""><PhoneIcon className="w-4 h-4 text-[--color-brand]" />
                  <span className="inline">Call</span></Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
