"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Home,
  Droplets,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Loader2,
  User,
} from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  propertyType: "apartment" | "house" | "condo" | "office" | "other"
  bedrooms: string
  bathrooms: string
  squareFeet: string
  serviceType: "regular" | "deep" | "move" | "carpet" | "commercial"
  areas: {
    kitchen: boolean
    bathrooms: boolean
    bedrooms: boolean
    livingAreas: boolean
  }
  frequency: "one-time" | "weekly" | "biweekly" | "monthly"
  preferredDate: string
  preferredTime: "morning" | "afternoon" | "evening" | "flexible"
  addOns: {
    insideOvens: boolean
    fridge: boolean
    windows: boolean
    laundry: boolean
  }
  specialInstructions: string
  petFriendly: boolean
}

const STEPS = [
  { number: 1, title: "Contact Info", icon: User },
  { number: 2, title: "Location", icon: MapPin },
  { number: 3, title: "Property Type", icon: Home },
  { number: 4, title: "Property Size", icon: Droplets },
  { number: 5, title: "Service Type", icon: Droplets },
  { number: 6, title: "Service Areas", icon: Home },
  { number: 7, title: "Frequency", icon: Calendar },
  { number: 8, title: "Schedule", icon: Clock },
  { number: 9, title: "Add-ons", icon: DollarSign },
  { number: 10, title: "Review", icon: Check },
]

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSending, setIsSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStep])

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      propertyType: "house",
      bedrooms: "",
      bathrooms: "",
      squareFeet: "",
      serviceType: "regular",
      areas: {
        kitchen: true,
        bathrooms: true,
        bedrooms: true,
        livingAreas: true,
      },
      frequency: "one-time",
      preferredDate: "",
      preferredTime: "morning",
      addOns: {
        insideOvens: false,
        fridge: false,
        windows: false,
        laundry: false,
      },
      specialInstructions: "",
      petFriendly: false,
    },
    onSubmit: async (values) => {
      setIsSending(true)

      const selectedAreas = Object.entries(values.areas)
        .filter(([_, isSelected]) => isSelected)
        .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
        .join(", ")

      const selectedAddOns = Object.entries(values.addOns)
        .filter(([_, isSelected]) => isSelected)
        .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
        .join(", ")

      const payload = {
        _subject: `New Cleaning Quote: ${values.fullName}`,
        _template: "table",
        _captcha: "false",
        "Full Name": values.fullName,
        Email: values.email,
        Phone: values.phone,
        Address: `${values.address}, ${values.city}, ${values.postalCode}`,
        "Property Type": values.propertyType,
        Size: `${values.bedrooms} Bed, ${values.bathrooms} Bath, ${values.squareFeet} sqft`,
        "Service Type": values.serviceType,
        "Areas to Clean": selectedAreas || "None selected",
        Frequency: values.frequency,
        "Preferred Schedule": `${values.preferredDate} (${values.preferredTime})`,
        "Add-Ons": selectedAddOns || "None selected",
        "Pet Friendly": values.petFriendly ? "Yes" : "No",
        message: values.specialInstructions,
      }

      try {
        const response = await fetch("https://formsubmit.co/ajax/kocebi8671@roastic.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          setSubmitted(true)
          setTimeout(() => {
            setSubmitted(false)
            setCurrentStep(1)
            formik.resetForm()
          }, 3000)
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        console.error("FAILED...", error)
        alert("Failed to send quote. Please check your internet connection.")
      } finally {
        setIsSending(false)
      }
    },
  })

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepComplete = (step: number): boolean => {
    const v = formik.values
    switch (step) {
      case 1:
        return v.fullName !== "" && v.email !== "" && v.phone !== ""
      case 2:
        return v.address !== "" && v.city !== "" && v.postalCode !== ""
      case 3:
        return v.propertyType !== ""
      case 4:
        return v.bedrooms !== "" && v.bathrooms !== ""
      case 5:
        return v.serviceType !== ""
      case 6:
        return Object.values(v.areas).some((val) => val)
      case 7:
        return v.frequency !== ""
      case 8:
        return v.preferredDate !== "" && v.preferredTime !== ""
      case 9:
        return true
      case 10:
        return true
      default:
        return false
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Let's get your contact information</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Where is your property located?</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Street Address *</label>
              <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="123 Main Street"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ottawa"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="K1A 0A1"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">What type of property do you have?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "apartment", label: "Apartment/Condo" },
                { value: "house", label: "House" },
                { value: "condo", label: "Condo" },
                { value: "office", label: "Office" },
                { value: "other", label: "Other" },
              ].map((type) => (
                <button
                  type="button"
                  key={type.value}
                  onClick={() => formik.setFieldValue("propertyType", type.value)}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formik.values.propertyType === type.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Tell us about your property size</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formik.values.bedrooms}
                  onChange={formik.handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="2"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formik.values.bathrooms}
                  onChange={formik.handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Square Feet (Optional)</label>
                <input
                  type="number"
                  name="squareFeet"
                  value={formik.values.squareFeet}
                  onChange={formik.handleChange}
                  min="0"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="1500"
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">What type of cleaning service do you need?</h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { value: "regular", label: "Regular Cleaning", desc: "Routine maintenance cleaning" },
                { value: "deep", label: "Deep Cleaning", desc: "Top-to-bottom thorough cleaning" },
                { value: "move", label: "Move-In/Out", desc: "Comprehensive pre/post-move cleaning" },
                { value: "carpet", label: "Carpet Cleaning", desc: "Professional carpet sanitization" },
                { value: "commercial", label: "Commercial", desc: "Office & commercial spaces" },
              ].map((service) => (
                <button
                  type="button"
                  key={service.value}
                  onClick={() => formik.setFieldValue("serviceType", service.value)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formik.values.serviceType === service.value
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold text-foreground">{service.label}</div>
                  <div className="text-sm text-foreground/70">{service.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Which areas need cleaning?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { key: "kitchen", label: "Kitchen" },
                { key: "bathrooms", label: "Bathrooms" },
                { key: "bedrooms", label: "Bedrooms" },
                { key: "livingAreas", label: "Living Areas" },
              ].map((area) => (
                <label
                  key={area.key}
                  className="flex items-center p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <input
                    type="checkbox"
                    name={`areas.${area.key}`}
                    checked={formik.values.areas[area.key as keyof typeof formik.values.areas]}
                    onChange={formik.handleChange}
                    className="w-5 h-5 rounded border-border"
                  />
                  <span className="ml-3 font-medium text-foreground">{area.label}</span>
                </label>
              ))}
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">How often do you need cleaning?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { value: "one-time", label: "One-Time Service" },
                { value: "weekly", label: "Weekly" },
                { value: "biweekly", label: "Bi-Weekly" },
                { value: "monthly", label: "Monthly" },
              ].map((freq) => (
                <button
                  type="button"
                  key={freq.value}
                  onClick={() => formik.setFieldValue("frequency", freq.value)}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formik.values.frequency === freq.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">When would you like to schedule?</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={formik.values.preferredDate}
                onChange={formik.handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Preferred Time</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "morning", label: "Morning (8am - 12pm)" },
                  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
                  { value: "evening", label: "Evening (5pm - 8pm)" },
                  { value: "flexible", label: "Flexible" },
                ].map((time) => (
                  <button
                    type="button"
                    key={time.value}
                    onClick={() => formik.setFieldValue("preferredTime", time.value)}
                    className={`p-3 rounded-lg border-2 transition-all font-medium ${
                      formik.values.preferredTime === time.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Any add-on services?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { key: "insideOvens", label: "Inside Ovens" },
                { key: "fridge", label: "Inside Fridge" },
                { key: "windows", label: "Windows (Interior)" },
                { key: "laundry", label: "Laundry Service" },
              ].map((addon) => (
                <label
                  key={addon.key}
                  className="flex items-center p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <input
                    type="checkbox"
                    name={`addOns.${addon.key}`}
                    checked={formik.values.addOns[addon.key as keyof typeof formik.values.addOns]}
                    onChange={formik.handleChange}
                    className="w-5 h-5 rounded border-border"
                  />
                  <div className="ml-3 flex-1">
                    <div className="font-medium text-foreground">{addon.label}</div>
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-4 md:mt-8">
              <label className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer">
                <input
                  type="checkbox"
                  name="petFriendly"
                  checked={formik.values.petFriendly}
                  onChange={formik.handleChange}
                  className="w-5 h-5 rounded border-border"
                />
                <span className="font-medium text-foreground">I have pets in my home</span>
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-foreground mb-2">Special Instructions</label>
              <textarea
                name="specialInstructions"
                value={formik.values.specialInstructions}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none"
                placeholder="Gate code, parking info, etc..."
              />
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Review Your Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p className="text-sm text-foreground/70">{formik.values.fullName}</p>
                <p className="text-sm text-foreground/70">{formik.values.email}</p>
                <p className="text-sm text-foreground/70">{formik.values.phone}</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-foreground/70">{formik.values.address}</p>
                <p className="text-sm text-foreground/70">
                  {formik.values.city}, {formik.values.postalCode}
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Property</h3>
                <p className="text-sm text-foreground/70">
                  {formik.values.propertyType.charAt(0).toUpperCase() + formik.values.propertyType.slice(1)}
                </p>
                <p className="text-sm text-foreground/70">
                  {formik.values.bedrooms} bed, {formik.values.bathrooms} bath
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Service</h3>
                <p className="text-sm text-foreground/70">
                  {formik.values.serviceType.charAt(0).toUpperCase() + formik.values.serviceType.slice(1)} -{" "}
                  {formik.values.frequency}
                </p>
                <p className="text-sm text-foreground/70">{formik.values.preferredDate}</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white   py-4 md:py-8">
      {submitted && (
        <div className="fixed top-4 left-4 right-4 max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg animate-fade-in z-50">
          ✓ Thank you! Your quote request has been received. We'll contact you shortly!
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Mobile Step Indicator (< 768px) */}
        <div className="md:hidden mb-6">
             <div className="flex justify-between items-end mb-2">
                 <h2 className="text-lg font-bold text-foreground">
                    {STEPS[currentStep - 1].title}
                 </h2>
                 <span className="text-sm text-foreground/60 font-medium">
                    Step {currentStep}/{STEPS.length}
                 </span>
             </div>
             <div className="h-2 bg-border rounded-full overflow-hidden">
                <div 
                    className="h-full bg-primary transition-all duration-300" 
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                ></div>
             </div>
        </div>

        {/* Desktop Step Indicator (>= 768px) */}
        <div className="hidden md:block mb-12">
          <div className="flex justify-between mb-4">
            {STEPS.map((step, index) => {
              const isComplete = index < currentStep - 1
              const isCurrent = step.number === currentStep
              return (
                <div key={step.number} className="flex flex-col items-center flex-1">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(step.number)}
                    disabled={index >= currentStep && !isComplete}
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold transition-all mb-2 ${
                      isComplete
                        ? "bg-primary text-white"
                        : isCurrent
                          ? "bg-primary text-white ring-4 ring-primary/30"
                          : "bg-border text-foreground/50"
                    }`}
                  >
                    {isComplete ? <Check size={20} /> : step.number}
                  </button>
                  <span className="text-[10px] lg:text-xs text-center font-medium text-foreground/70 hidden lg:block">
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {/* Changed min-h-[400px] to md:min-h-[400px] here */}
          <div className="bg-white rounded-2xl p-5 md:p-8 border border-border shadow-lg mb-6 md:mb-8 md:min-h-[400px]">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex-1 sm:flex-initial"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Back</span>
            </button>

            {currentStep === STEPS.length ? (
              <button
                type="submit"
                disabled={isSending || submitted}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-initial"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Check size={20} />
                    Get Quote
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepComplete(currentStep)}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold flex-1 sm:flex-initial"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-sm text-foreground/60 mt-6 md:hidden">
          Step {currentStep} of {STEPS.length}
        </p>
      </div>
    </div>
  )
}