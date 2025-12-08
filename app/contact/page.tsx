"use client"
import QuoteForm from "@/components/quote-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Get a Quote</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Save your time for what matters most. Fill out our quick quote form and we'll contact you within 24 hours
            with a personalized estimate.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>

      <Footer />
    </main>
  )
}
