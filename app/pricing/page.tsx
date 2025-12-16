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
  Briefcase,
  Repeat
} from "lucide-react"
import { motion } from "framer-motion"

export default function Pricing() {
  
  const packages = [
    {
      name: "Apartments & Condos",
      type: "Residential",
      price: "$119",
      period: "starting from",
      description: "Transparent Pricing, No Surprises.",
      icon: Building2,
      features: [
        "From $119 for a standard clean",
        "From $199 for a deep clean",
        "Final price confirmed at booking"
      ],
    },
    {
      name: "Houses",
      type: "Residential",
      price: "$169",
      period: "starting from",
      description: "Comprehensive care for your entire home.",
      icon: Home,
      features: [
        "From $169 for a standard clean",
        "From $299 for a deep clean",
        "Final price confirmed at booking"
      ],
    },
    {
      name: "Move-In / Move-Out",
      type: "Transition",
      price: "$249",
      period: "starting from",
      description: "Price depends on size and condition.",
      icon: Box,
      features: [
        "Dependent on property size",
        "Dependent on condition",
        "Deep detailed cleaning",
        "Ready for new occupants"
      ],
    },
    {
      name: "Commercial & Office",
      type: "Business",
      price: "Custom",
      period: "quote",
      description: "Custom quotes based on square footage and frequency.",
      icon: Briefcase,
      features: [
        "Based on square footage",
        "Based on cleaning frequency",
        "Tailored to business needs",
        "Flexible scheduling"
      ],
    },
    {
      name: "Airbnb Turnovers",
      type: "Short-term Rental",
      price: "Flat Rate",
      period: "or per-clean",
      description: "Pricing based on unit size and laundry needs.",
      icon: Sparkles,
      features: [
        "Flat-rate pricing available",
        "Per-clean pricing options",
        "Based on unit size",
        "Laundry needs handled"
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
            Pricing & Packages
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Transparent Pricing, No Surprises. <br className="hidden md:block"/>
            Final price is confirmed at booking.
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
                <p className="text-sm text-foreground/60 mb-6 min-h-[40px]">{pkg.description}</p>

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
                  <button className="w-full cursor-pointer py-3 px-4 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                    Request Quote
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
                 <Repeat size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Need recurring service?</h2>
                <p className="text-foreground/70 max-w-xl">
                  Weekly, bi-weekly, and monthly clients receive preferred rates.
                </p>
              </div>
            </div>
            
            <Link href="/contact" className="flex-shrink-0 w-full md:w-auto">
              <button className="w-full cursor-pointer md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium flex items-center justify-center gap-2">
                Book Now
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