"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Home, 
  Building2, 
  Box, 
  SprayCan, 
  Zap,
  Briefcase
} from "lucide-react"
import { motion } from "framer-motion"

export default function Pricing() {
  
  const packages = [
    {
      name: "Standard Apartment",
      type: "Apartments & Condos",
      price: "$149",
      period: "starting from",
      description: "Perfect for regular maintenance and upkeep.",
      icon: SprayCan,
      features: [
        "Dusting and wiping",
        "Vacuuming and mopping",
        "Bathroom cleaning",
        "Kitchen surfaces",
        "Trash removal",
      ],
    },
    {
      name: "Deep Apartment",
      type: "Apartments & Condos",
      price: "$249",
      period: "starting from",
      description: "Comprehensive cleaning for special occasions.",
      icon: Sparkles,
      features: [
        "Everything in Standard",
        "Baseboards and doors",
        "Inside microwave",
        "Extra bathroom detail",
        "Hard-to-reach areas",
      ],
    },
    {
      name: "Standard House",
      type: "Houses",
      price: "$199",
      period: "starting from",
      description: "Regular maintenance for your home.",
      icon: Home,
      features: [
        "All standard services",
        "Multiple bedrooms",
        "Multiple bathrooms",
        "Flexible scheduling",
        "Recurring discounts",
      ],
    },
    {
      name: "Deep House",
      type: "Houses",
      price: "$349",
      period: "starting from",
      description: "Thorough cleaning for larger spaces.",
      icon: Zap,
      features: [
        "All deep clean services",
        "Every bedroom detail",
        "Complete kitchen detail",
        "Window wiping",
        "Interior appliance cleaning",
      ],
    },
    {
      name: "Move-In / Out",
      type: "All Properties",
      price: "$299",
      period: "starting from",
      description: "Ensure your space is ready for transition.",
      icon: Box,
      features: [
        "Inside all cabinets",
        "Fridge and oven",
        "Full kitchen scrub",
        "Complete floor care",
        "Wall spot cleaning",
      ],
    },
    {
      name: "Commercial",
      type: "Office & Business",
      price: "Custom",
      period: "tailored quote",
      description: "Tailored for your business needs.",
      icon: Building2,
      features: [
        "Daily / Weekly / Bi-weekly",
        "Common areas",
        "Restroom sanitization",
        "Desk cleaning",
        "Flexible scheduling",
      ],
    },
  ]

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary"
          >
            <Briefcase size={24} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Choose the service that fits your needs. No hidden fees, just honest work.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col"
              >
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <pkg.icon size={28} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground/50">{pkg.type}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-foreground/60 mb-6 h-10">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6 pt-6 border-t border-border group-hover:border-primary/20 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-sm text-foreground/50">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="flex-shrink-0 mt-0.5 text-primary"
                      />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link href="/contact" className="mt-auto">
                  <button className="w-full py-3 px-4 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    Get Quote
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recurring Service Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex p-4 rounded-full bg-background border border-primary/20 text-primary shadow-sm">
                 <Briefcase size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Regular Maintenance Plans</h2>
                <p className="text-foreground/70 max-w-xl">
                  Weekly, bi-weekly, and monthly clients receive preferred rates. 
                  Contact us to set up a recurring schedule that keeps your space spotless year-round.
                </p>
              </div>
            </div>
            
            <Link href="/about#contact" className="flex-shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2">
                Inquire About Recurring
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}