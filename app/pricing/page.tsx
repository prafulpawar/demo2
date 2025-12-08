"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

export default function Pricing() {
  const packages = [
    {
      name: "Standard Cleaning",
      type: "Apartments & Condos",
      price: "Starting from $149",
      description: "Perfect for regular maintenance and upkeep",
      features: [
        "Dusting and wiping",
        "Vacuuming and mopping",
        "Bathroom cleaning",
        "Kitchen surfaces",
        "Trash removal",
      ],
    },
    {
      name: "Deep Cleaning",
      type: "Apartments & Condos",
      price: "Starting from $249",
      description: "Comprehensive cleaning for special occasions",
      features: [
        "Everything in Standard, plus:",
        "Baseboards and doors",
        "Inside microwave",
        "Extra bathroom detail",
        "Hard-to-reach areas",
      ],
      highlighted: true,
    },
    {
      name: "Standard Cleaning",
      type: "Houses",
      price: "Starting from $199",
      description: "Regular maintenance for your home",
      features: [
        "All standard services",
        "Multiple bedrooms",
        "Multiple bathrooms",
        "Flexible scheduling",
        "Recurring discounts",
      ],
    },
    {
      name: "Deep Cleaning",
      type: "Houses",
      price: "Starting from $349",
      description: "Thorough cleaning for larger spaces",
      features: [
        "All deep clean services",
        "Every bedroom detail",
        "Complete kitchen detail",
        "Window wiping",
        "Interior appliance cleaning",
      ],
    },
    {
      name: "Move-In / Move-Out",
      type: "All Properties",
      price: "Starting from $299",
      description: "Ensure your space is ready for transition",
      features: [
        "Inside all cabinets",
        "Fridge and oven",
        "Full kitchen scrub",
        "Complete floor care",
        "Wall spot cleaning",
      ],
    },
    {
      name: "Commercial Cleaning",
      type: "Office & Business",
      price: "Custom Quote",
      description: "Tailored for your business needs",
      features: [
        "Daily/weekly/bi-weekly",
        "Common areas",
        "Restroom sanitization",
        "Desk cleaning",
        "Flexible scheduling",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Transparent Pricing</h1>
          <p className="text-xl text-foreground/60">No hidden fees, no surprises. Just honest, fair pricing.</p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden group hover:shadow-lg ${
                  pkg.highlighted
                    ? "border-primary bg-primary/5 scale-105 lg:scale-110 relative z-10"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="p-8">
                  {pkg.highlighted && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{pkg.type}</p>
                  <div className="mb-6">
                    <p className={`text-3xl font-bold mb-2 ${pkg.highlighted ? "text-primary" : "text-foreground"}`}>
                      {pkg.price}
                    </p>
                    <p className="text-sm text-foreground/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className={`flex-shrink-0 mt-0.5 ${pkg.highlighted ? "text-primary" : "text-primary"}`}
                        />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-2 rounded-lg font-medium transition-all text-center inline-block ${
                      pkg.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Discount Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Save with Recurring Service</h2>
            <p className="text-foreground/60 mb-6">
              Weekly, bi-weekly, and monthly clients receive preferred rates and priority scheduling.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              Request a Custom Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
