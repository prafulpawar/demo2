"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function Services() {
  const serviceDetails = [
    {
      title: "Residential Cleaning",
      description:
        "For busy families, professionals, and anyone who wants a consistently clean home without the hassle.",
      includes: [
        "Dusting and wiping surfaces",
        "Vacuuming and mopping floors",
        "Bathrooms cleaned and sanitized",
        "Kitchen surfaces and exterior of appliances",
        "Emptying trash",
      ],
    },
    {
      title: "Deep Cleaning",
      description: "Perfect for spring cleaning, before guests arrive, or when your space needs extra attention.",
      includes: [
        "Everything in a standard clean plus:",
        "Baseboards, doors, and light switches",
        "Inside microwave",
        "Extra detail in bathrooms and kitchen",
        "High-touch and hard-to-reach areas",
      ],
    },
    {
      title: "Move-In / Move-Out Cleaning",
      description: "Ideal for landlords, tenants, and homeowners.",
      includes: [
        "Inside cabinets and drawers (empty units)",
        "Inside fridge and oven",
        "Full bathroom and kitchen scrub",
        "Floors thoroughly vacuumed and mopped",
        "Spot cleaning walls where possible",
      ],
    },
    {
      title: "Commercial & Office Cleaning",
      description: "Keep your workplace clean, professional, and welcoming.",
      includes: [
        "Daily, weekly, or bi-weekly service options",
        "Common areas, restrooms, break rooms",
        "Desks and touch points wiped",
        "Trash removal and floor care",
        "Customizable schedules",
      ],
    },
    {
      title: "Airbnb & Rental Turnover Cleaning",
      description: "Quick, reliable turnovers between guests.",
      includes: [
        "Guest-ready cleaning",
        "Fresh bedding and restocking",
        "Same-day turnover available",
        "Deep sanitization",
        "Quick-turnaround service",
      ],
    },
    {
      title: "Post-Renovation Cleaning",
      description: "Comprehensive cleaning after construction or renovation.",
      includes: [
        "Dust removal and cleanup",
        "Surface wipe-down and polishing",
        "Floor and window detailing",
        "Debris and waste removal",
        "Final inspection for perfection",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-xl text-foreground/60">Professional cleaning solutions for every need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h2>
                <p className="text-foreground/60 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-8">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Inside fridge",
              "Inside oven",
              "Inside cabinets",
              "Laundry wash & fold",
              "Balcony or porch cleaning",
              "Carpet shampooing",
              "Spot and stain treatment",
              "Odor removal",
              "Area rug cleaning",
            ].map((addon, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border/50">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
