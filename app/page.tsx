"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, ArrowRight, Users, Award, Clock, Zap, Shield, MapPin, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';

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

  const serviceAreas = ["Ottawa", "Kanata", "Vanier", "Stittsville", 
    "Nepean", "Alta Visa", "Riverside South", "Findlay Creek", "Orleans", "Westboro", "Manotick", "Crystal Beach", "Kanata",
     "Greely", "Barrhaven", "Bells Corners", "Smithfall"]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };




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

              {/* 1. Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight ">
                Lizzo Cleaning
              </h1>

              {/* 2. Slogan */}
              <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
                Sparkling Spaces. Zero Stress.
              </h2>

              {/* 3. Paragraph */}
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed max-w-lg">
                Lizzo Cleaning is your trusted local cleaning service for homes, offices, and rentals. We show up on time, pay attention to the details, and leave every space fresh, organized, and guest-ready.
              </p>

              {/* 4. Checklist (Moved above buttons as per document flow) */}
              <ul className="space-y-3 mb-2">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Trained, trusted cleaners</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Transparent pricing</span>
                </li>
              </ul>

              {/* 5. Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Book Your Cleaning <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+1 (613) 854-7507"
                  className="px-8 py-3.5 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground/5 transition-all font-semibold inline-flex items-center justify-center gap-2"
                >
                  Call Now
                </a>
              </div>

            </div>

            {/* Right Side Image (Unchanged) */}
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

      {/* How It Works - Scroll animated cards */}
      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">How It Works</h2>
            <p className="text-black-500 text-xl md:text-xl max-w-2xl mx-auto font-medium">We clean so you can focus on what matters.</p>
              <p className="text-slate-500 text-xl md:text-xl max-w-xl mx-auto font-medium">
                Whether it is a busy family household, a high-traffic office, or a short-term rental that needs fast turnovers, Lizzo Cleaning delivers reliable, consistent results every time.
              </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Tell Us About Your Space",
                desc: "Fill out a quick form with details",
                icon: "📋",
              },
              {
                number: "02",
                title: "Choose Your Date & Time",
                desc: "Pick a time that works for you",
                icon: "📅",
              },
              { number: "03", title: "Book & Pay Online", desc: "Secure, transparent pricing", icon: "💳" },
              { number: "04", title: "Relax", desc: "We deliver pristine results", icon: "✨" },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-center">
                  {step.icon}
                </div>
                <div className="text-4xl font-extrabold text-blue-900 mb-3 opacity-90 group-hover:opacity-100">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-14 md:py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">We clean so you can focus</h2>
              <p className="text-foreground/60 mb-8 text-lg leading-relaxed">
                Whether it's your home, office, or rental property, Lizzo Cleaning delivers reliable, consistent results
                every time with trained professionals.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Check, text: "Trained, trusted cleaners" },
                  { icon: Zap, text: "Flexible scheduling" },
                  { icon: Shield, text: "Fully bonded & insured" },
                  { icon: Users, text: "Transparent pricing" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 fade-up p-3 rounded-lg hover:bg-primary/10 transition"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scale-in">
              <div className="relative glass rounded-2xl overflow-hidden neon-border neon-glow h-96">
                <img
                  src="/happy-customers-cleaning-service.jpg"
                  alt="Happy customers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
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




      <section className="py-8 relative overflow-hidden bg-slate-50/50">

        {/* 1. Modern Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* 2. Soft Gradient Blurs */}
        <div className="absolute left-0 top-0 -ml-[20%] -mt-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 -mr-[20%] -mb-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-xs font-bold uppercase tracking-widest shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Service Coverage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              Bringing the shine to <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Ottawa & Surroundings</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              From downtown condos to suburban family homes, our mobile team covers the entire National Capital Region.
            </motion.p>
          </div>

          {/* Grid Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3">
                  <div className="p-3 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">{area}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
            >
              Check if we cover your specific street <ArrowUpRight size={16} />
            </Link>
          </motion.div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Typography */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready for a spotlessly <br /> clean space?
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Whether it's a short-term rental or your forever home, our team provides the consistent quality you've been looking for.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
              >
                Book Now <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1234567890"
                className="px-7 py-3.5 text-slate-600 hover:text-primary font-medium transition-colors inline-flex items-center"
              >
                Call us:  +1 (613) 854-7507
              </a>
            </div>
          </div>

          {/* Right Side: Abstract Visual or Stats */}
          <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <span className="block text-3xl font-bold text-slate-900 mb-1">100%</span>
                <span className="text-sm text-slate-500">Satisfaction</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <span className="block text-3xl font-bold text-slate-900 mb-1">5★</span>
                <span className="text-sm text-slate-500">Rated Service</span>
              </div>
              <div className="col-span-2 bg-primary/5 p-6 rounded-xl border border-primary/10">
                <p className="text-primary font-medium">"Lizzo Cleaning transformed our office space!"</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
