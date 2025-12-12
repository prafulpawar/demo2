"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Send, CheckCircle2, Star, Shield, Clock, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => setFormStatus("success"), 1500)
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      <Navbar />

      {/* --- HERO SECTION (Animated Gradient Background) --- */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Lizzo Cleaning</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-foreground/70 max-w-2xl mx-auto font-light"
          >
            Professional cleaning with a personal touch
          </motion.p>
        </div>
      </section>

      {/* --- STORY SECTION (Scroll Reveal) --- */}
      <section className=" px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="rounded-2xl overflow-hidden h-80 sm:h-[500px] shadow-2xl">
                <img
                  src="/professional-cleaning-team-happy.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Lizzo Cleaning was created with a simple promise: deliver reliable, detailed cleaning with the same care
                  we would want in our own homes.
                </p>
                <p>
                  We know inviting someone into your space requires trust. That is why we focus on clear communication,
                  professionalism, punctuality, and consistent quality every visit.
                </p>
                <p>
                  Whether we are cleaning a family home, a growing office, or a busy short-term rental, our goal is the
                  same: a fresh, calm space that makes your day easier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION (Staggered Cards) --- */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Reliability", description: "We show up on time, every time.", icon: Clock },
              { title: "Respect", description: "We treat your space with care and dignity.", icon: Shield },
              { title: "Detail", description: "We pay attention to every corner.", icon: Star },
              { title: "Care", description: "We clean like it is our own home.", icon: Heart },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="p-8 rounded-2xl bg-background border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/60">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT FORM SECTION (Glassmorphism & Floating) --- */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 relative scroll-mt-10">
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-xl text-foreground/60">Contact us today for a free quote.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Side: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Details</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Whether you need a quick quote for a one-time clean or want to discuss a
                  recurring schedule for your office, we are here to help.
                </p>

                <div className="space-y-8">
                  {[
                    { title: "Phone", value: "+1 (613) 854-7507", link: "tel:+1 (613) 854-7507", icon: Phone },
                    { title: "Email", value: "hello@lizzo.ca", link: "mailto:hello@lizzo.ca", icon: Mail },
                    { title: "Service Areas", value: "Ottawa & Surrounding Regions", link: null, icon: MapPin },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-foreground/60 hover:text-primary transition-colors text-lg">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/60 text-lg">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background/80 backdrop-blur-md border border-border rounded-3xl p-8 sm:p-10 shadow-2xl relative"
            >
              {/* Decorative accent */}
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

              <h2 className="text-2xl font-bold text-foreground mb-8">Request a Free Quote</h2>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-96 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-foreground/60 text-lg">Thank you for contacting Lizzo Cleaning. We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Type</label>
                    <select
                      id="service"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select service.</option>
                      <option value="standard">Residential Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="deep"> Move-in / Move-out Cleaning</option>
                      <option value="office"> Commercial & Office  Cleaning</option>
                      <option value="airbnb">Airbnb & Rental Turnover Cleaning</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Area</label>
                    <select
                      id="serviceArea"
                      className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select area.</option>
                      <option id="Ottawa" value="Ottawa">Ottawa</option>
                      <option id="Kanata" value="Kanata">Kanata</option>
                      <option id="Vanier" value="Vanier">Vanier</option>
                      <option id="Stittsville" value="Stittsville">Stittsville</option>
                      <option id="Nepean" value="Nepean">Nepean</option>
                      <option id="Alta_Visa" value="Alta Visa">Alta Visa</option>
                      <option id="Riverside_South" value="Riverside South">Riverside South</option>
                      <option id="Findlay_Creek" value="Findlay Creek">Findlay Creek</option>
                      <option id="Orleans" value="Orleans">Orleans</option>
                      <option id="Westboro" value="Westboro">Westboro</option>
                      <option id="Manotick" value="Manotick">Manotick</option>
                      <option id="Crystal_Beach" value="Crystal Beach">Crystal Beach</option>
                      <option id="Kanata_2" value="Kanata">Kanata</option>
                      <option id="Greely" value="Greely">Greely</option>
                      <option id="Barrhaven" value="Barrhaven">Barrhaven</option>
                      <option id="Bells_Corners" value="Bells Corners">Bells Corners</option>
                      <option id="Smithfall" value="Smithfall">Smithfall</option>
                      <option value="other">Other (Not Listed)</option>

                    </select>
                  </div>


                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message / Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="flex w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-base transition-all focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your space (sq ft, number of bedrooms/bathrooms)..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full inline-flex items-center justify-center rounded-xl text-base font-bold transition-colors disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 shadow-lg shadow-primary/25"
                  >
                    {formStatus === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>Send Message <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}