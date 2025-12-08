"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Lizzo Cleaning</h3>
            <p className="text-card/80 text-sm leading-relaxed">
              Professional cleaning services for homes, offices, and rentals. Trusted, reliable, and detail-oriented.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-card/80 hover:text-card transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-card/80 hover:text-card transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-card/80 hover:text-card transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-card/80 hover:text-card transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-card/80 hover:text-card transition-colors">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-card/80 hover:text-card transition-colors">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-card/80 hover:text-card transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-card/80 hover:text-card transition-colors">
                  Move-In/Out
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-card/80 hover:text-card transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@lizzo.ca" className="text-card/80 hover:text-card transition-colors">
                  hello@lizzo.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-card/80">Service Areas: Ottawa & Surrounding</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8">
          <p className="text-center text-card/60 text-sm">&copy; 2025 Lizzo Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
