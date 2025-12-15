"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-foreground/60">
            Quick answers to the most common questions our clients ask.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

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
              className="group border border-border rounded-lg p-6 
                         hover:border-primary/30 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>

              <p className="mt-4 text-foreground/60 leading-relaxed">{faq.a}</p>
            </details>
          ))}

        </div>
      </section>

      <Footer />
    </main>
  )
}
