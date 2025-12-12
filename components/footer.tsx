"use client"

import Link from "next/link"
import { Mail, Phone, MapPin ,  Send, Loader2, CheckCircle,AlertCircle } from "lucide-react"
import Image from "next/image"
import { useFormik } from "formik"
import { useState } from "react"

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setErrorMsg("");
      
      try {
        const response = await fetch("https://formsubmit.co/ajax/kocebi8671@roastic.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: values.email,
             _subject: "New Newsletter Subscriber",
            _captcha: "false", 
            _template: "table", 
            message: `New subscription request from: ${values.email}`
          })
        });

        if (response.ok) {
          setSuccess(true);
          resetForm();
          setTimeout(() => setSuccess(false), 3000);
        } else {
           console.error("FormSubmit Error");
          setErrorMsg("Submission failed. Check activation.");
        }
      } catch (error) {
         console.error("Network Error:", error);
        setErrorMsg("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <footer className="bg-foreground text-card mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/Logo-Navbar.jpeg"
              alt="Lizzo Logo"
              width={130}
              height={120}
              className="object-contain"
              priority
            />
          </Link>

            <p className="text-card/80 text-sm leading-relaxed pt-2">
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
                  +1 (613) 854-7507
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

      
        <div className="max-w-md mx-auto mb-10">
          <h4 className="font-semibold text-center mb-3">Subscribe to Our Newsletter</h4>

          <form onSubmit={formik.handleSubmit} className="flex items-center gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white text-black text-sm"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-card text-foreground flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>

            {errorMsg && (
               <p className="text-red-400 text-xs text-center mt-1 flex items-center justify-center gap-1">
                 <AlertCircle size={14} /> {errorMsg}
               </p>
            )}
            
          {success && (
            <p className="text-green-400 text-center mt-3 flex items-center justify-center gap-2">
              <CheckCircle size={18} /> Subscription successful
            </p>
          )}
        </div>
     

        <div className="border-t border-card/20 pt-8">
          <p className="text-center text-card/60 text-sm">&copy; 2025 Lizzo Cleaning. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
