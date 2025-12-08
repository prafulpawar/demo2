"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Lizzo Cleaning</h1>
          <p className="text-xl text-foreground/60">Professional cleaning with a personal touch</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden mb-12 h-96">
            <img src="/professional-cleaning-team-happy.jpg" alt="Our Team" className="w-full h-full object-cover" />
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

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Reliability", description: "We show up on time, every time." },
              { title: "Respect", description: "We treat your space with care and dignity." },
              { title: "Detail", description: "We pay attention to every corner." },
              { title: "Care", description: "We clean like it is our own home." },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-background">
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
                className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
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
