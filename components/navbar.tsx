"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing & Plans" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    // Added backdrop-blur for better visibility when scrolling
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Responsive Width */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Image
              src="/Logo-Navbar.jpeg"
              alt="Lizzo Logo"
              width={180}
              height={60}
              // w-32 on mobile, w-44 on larger screens to prevent overlap
              className="object-contain w-32 sm:w-40 md:w-44 h-auto"
              priority
            />
          </Link>

          {/* Desktop Menu - Changed from md:flex to lg:flex for better tablet support */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm xl:text-base font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Changed from md:flex to lg:flex */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold shadow-sm"
            >
              Get Quote
            </Link>

            <Link
              href="/about#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button - Visible on Tablet and Mobile (lg:hidden) */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Added max-h logic for smooth transition and scrolling support */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              {/* Mobile CTA Buttons */}
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-base shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>

              <Link
                href="/about#contact" // Aligned href with desktop version
                className="block w-full text-center px-4 py-3 text-foreground hover:bg-gray-50 rounded-lg transition-colors text-base font-medium border border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}