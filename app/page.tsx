"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, ArrowRight, Users, Award, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      title: "Residential Cleaning",
      description: "Professional cleaning for homes, apartments, and condos with attention to detail.",
      icon: "🏠",
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive cleaning for spring cleaning or special occasions.",
      icon: "✨",
    },
    {
      title: "Move-In/Out Cleaning",
      description: "Complete turnover cleaning for transitions between properties.",
      icon: "📦",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and business space cleaning services.",
      icon: "🏢",
    },
    {
      title: "Airbnb Turnovers",
      description: "Quick, reliable turnovers between guests for rental properties.",
      icon: "🛏️",
    },
    {
      title: "Post-Renovation",
      description: "Complete dust removal and cleanup after construction work.",
      icon: "🔨",
    },
  ]

  const stats = [
    { number: "500+", label: "Homes Cleaned", icon: Users },
    { number: "4.9★", label: "Average Rating", icon: Award },
    { number: "5 Yrs", label: "Experience", icon: Clock },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section
        className={`pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(60, 100, 180, 0.08) 0%, rgba(60, 100, 180, 0.04) 100%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6">
                Ottawa's #1 House Cleaning Service
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
                Professional residential and commercial cleaning. We deliver immaculate results and get the job done
                right. Trusted by hundreds of families and businesses across Ottawa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Get A Quote <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="px-8 py-3.5 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground/5 transition-all font-semibold inline-flex items-center justify-center gap-2"
                >
                  Call Now
                </a>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Trained, professional cleaners</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Flexible scheduling & recurring options</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Transparent pricing, no hidden fees</span>
                </li>
              </ul>
            </div>

            <div className="animate-slide-in-right hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-3xl" />
                <img
                  src="/professional-cleaning-service-modern-clean.jpg"
                  alt="Professional cleaning team working"
                  className="relative rounded-2xl w-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-foreground/70 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for every need. Professional service you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">We Clean So You Can Focus On What Matters</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether it's a busy family household, a high-traffic office, or a short-term rental, Lizzo Cleaning delivers
            reliable, consistent results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold inline-flex items-center justify-center gap-2"
            >
              Get Started Today <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+1234567890"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold inline-flex items-center justify-center"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
