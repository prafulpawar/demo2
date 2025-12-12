"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function About() {
  // State for the contact form
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  // Handler for the contact form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    // Simulate network request
    setTimeout(() => setFormStatus("success"), 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* --- ABOUT HEADER --- */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Lizzo Cleaning</h1>
          <p className="text-xl text-foreground/60">Professional cleaning with a personal touch</p>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden mb-12 h-64 sm:h-96 bg-muted">
            {/* Placeholder image background if image is missing */}
            <img 
              src="/professional-cleaning-team-happy.jpg" 
              alt="Our Team" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Story</h2>
            <p className="mb-6 leading-relaxed">
              Lizzo Cleaning was created with a simple promise: deliver reliable, detailed cleaning with the same care
              we would want in our own homes.
            </p>
            <p className="mb-6 leading-relaxed">
              We know inviting someone into your space requires trust. That is why we focus on clear communication,
              professionalism, punctuality, and consistent quality every visit.
            </p>
            <p className="leading-relaxed">
              Whether we are cleaning a family home, a growing office, or a busy short-term rental, our goal is the
              same: a fresh, calm space that makes your day easier.
            </p>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Reliability", description: "We show up on time, every time." },
              { title: "Respect", description: "We treat your space with care and dignity." },
              { title: "Detail", description: "We pay attention to every corner." },
              { title: "Care", description: "We clean like it is our own home." },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-background shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EMBEDDED CONTACT FORM SECTION --- */}
      <section id="contact" className=" py-20 px-4 sm:px-6 lg:px-8  scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-xl text-foreground/60">Contact us today for a free quote.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Side: Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Details</h3>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  Whether you need a quick quote for a one-time clean or want to discuss a 
                  recurring schedule for your office, we are here to help.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-foreground/60 hover:text-primary transition-colors">
                        <a href="tel:+1 (613) 854-7507">+1 (613) 854-7507</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-foreground/60 hover:text-primary transition-colors">
                        <a href="mailto:hello@lizzo.ca">hello@lizzo.ca</a>
                      </p>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Service Areas</h4>
                      <p className="text-foreground/60">Ottawa & Surrounding Regions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Box */}
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <ul className="space-y-2 text-foreground/60 text-sm">
                  <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Request a Free Quote</h2>
              
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-foreground/60">Thank you for contacting Lizzo Cleaning. We will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Type</label>
                    <select 
                      id="service" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service...</option>
                      <option value="standard">Standard Residential Cleaning</option>
                      <option value="deep">Deep Cleaning / Move-in Move-out</option>
                      <option value="office">Office / Commercial Cleaning</option>
                      <option value="airbnb">Airbnb / Short-term Rental</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message / Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      placeholder="Tell us about your space (sq ft, number of bedrooms/bathrooms)..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                  >
                    {formStatus === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>Send Message <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to be home during the cleaning?",
                a: "No. Many clients are at work or out while we clean. We just need safe access instructions and a way to lock up when we are done.",
              },
              {
                q: "Do you bring your own supplies and equipment?",
                a: "Yes, our team arrives fully equipped with professional-grade products and tools. If you prefer we use specific products, let us know in advance.",
              },
              {
                q: "Are you insured?",
                a: "Yes, Lizzo Cleaning is fully insured for your peace of mind.",
              },
              {
                q: "What if I am not satisfied with the cleaning?",
                a: "Please contact us within 24 hours. We will make it right with a touch-up or solution that works for you.",
              },
              {
                q: "How do payments work?",
                a: "All bookings are confirmed with secure online payment. For ongoing commercial clients, we also offer invoicing.",
              },
              {
                q: "Do you offer recurring cleaning?",
                a: "Yes. Weekly, bi-weekly, and monthly plans are available at preferred rates.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-border bg-background rounded-lg p-6 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors list-none">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-foreground/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}