"use client"

import type React from "react"
import { useState } from "react"
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
} from "lucide-react"

interface FormData {
  // Step 1: Contact
  fullName: string
  email: string
  phone: string

  // Step 2: Location
  address: string
  city: string
  postalCode: string

  // Step 3: Property Type
  propertyType: "apartment" | "house" | "condo" | "office" | "other"

  // Step 4: Property Size
  bedrooms: string
  bathrooms: string
  squareFeet: string

  // Step 5: Service Type
  serviceType: "regular" | "deep" | "move" | "carpet" | "commercial"

  // Step 6: Service Areas
  areas: {
    kitchen: boolean
    bathrooms: boolean
    bedrooms: boolean
    livingAreas: boolean
    windows: boolean
    carpets: boolean
    baseboards: boolean
  }

  // Step 7: Frequency
  frequency: "one-time" | "weekly" | "biweekly" | "monthly"

  // Step 8: Schedule
  preferredDate: string
  preferredTime: "morning" | "afternoon" | "evening" | "flexible"

  // Step 9: Add-ons
  addOns: {
    insideOvens: boolean
    fridge: boolean
    windows: boolean
    laundry: boolean
  }

  // Step 10: Additional Info
  specialInstructions: string
  petFriendly: boolean
}

const STEPS = [
  { number: 1, title: "Contact Info", icon: Phone },
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
  const [formData, setFormData] = useState<FormData>({
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
      windows: false,
      carpets: false,
      baseboards: false,
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
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const inputElement = e.target as HTMLInputElement

    if (type === "checkbox") {
      const [category, key] = name.split(".")
      if (category === "areas" || category === "addOns") {
        setFormData((prev) => ({
          ...prev,
          [category]: {
            ...prev[category as keyof typeof prev],
            [key]: inputElement.checked,
          },
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: inputElement.checked,
        }))
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setCurrentStep(1)
    }, 3000)
  }

  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.fullName !== "" && formData.email !== "" && formData.phone !== ""
      case 2:
        return formData.address !== "" && formData.city !== "" && formData.postalCode !== ""
      case 3:
        return formData.propertyType !== ""
      case 4:
        return formData.bedrooms !== "" && formData.bathrooms !== ""
      case 5:
        return formData.serviceType !== ""
      case 6:
        return Object.values(formData.areas).some((v) => v)
      case 7:
        return formData.frequency !== ""
      case 8:
        return formData.preferredDate !== "" && formData.preferredTime !== ""
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Let's get your contact information</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Where is your property located?</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Street Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="123 Main Street"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ottawa"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="K1A 0A1"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">What type of property do you have?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "apartment", label: "Apartment/Condo" },
                { value: "house", label: "House" },
                { value: "condo", label: "Condo" },
                { value: "office", label: "Office" },
                { value: "other", label: "Other" },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFormData((prev) => ({ ...prev, propertyType: type.value as any }))}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formData.propertyType === type.value
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Tell us about your property size</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
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
                  value={formData.bathrooms}
                  onChange={handleInputChange}
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
                  value={formData.squareFeet}
                  onChange={handleInputChange}
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">What type of cleaning service do you need?</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { value: "regular", label: "Regular Cleaning", desc: "Routine maintenance cleaning" },
                { value: "deep", label: "Deep Cleaning", desc: "Top-to-bottom thorough cleaning" },
                { value: "move", label: "Move-In/Out", desc: "Comprehensive pre/post-move cleaning" },
                { value: "carpet", label: "Carpet Cleaning", desc: "Professional carpet sanitization" },
                { value: "commercial", label: "Commercial", desc: "Office & commercial spaces" },
              ].map((service) => (
                <button
                  key={service.value}
                  onClick={() => setFormData((prev) => ({ ...prev, serviceType: service.value as any }))}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.serviceType === service.value
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Which areas need cleaning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "kitchen", label: "Kitchen" },
                { key: "bathrooms", label: "Bathrooms" },
                { key: "bedrooms", label: "Bedrooms" },
                { key: "livingAreas", label: "Living Areas" },
                { key: "windows", label: "Windows" },
                { key: "carpets", label: "Carpets" },
                { key: "baseboards", label: "Baseboards" },
              ].map((area) => (
                <label
                  key={area.key}
                  className="flex items-center p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    name={`areas.${area.key}`}
                    checked={formData.areas[area.key as keyof typeof formData.areas]}
                    onChange={handleInputChange}
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">How often do you need cleaning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "one-time", label: "One-Time Service" },
                { value: "weekly", label: "Weekly" },
                { value: "biweekly", label: "Bi-Weekly" },
                { value: "monthly", label: "Monthly" },
              ].map((freq) => (
                <button
                  key={freq.value}
                  onClick={() => setFormData((prev) => ({ ...prev, frequency: freq.value as any }))}
                  className={`p-4 rounded-lg border-2 transition-all font-semibold ${
                    formData.frequency === freq.value
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">When would you like to schedule?</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-4">Preferred Time</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: "morning", label: "Morning (8am - 12pm)" },
                  { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
                  { value: "evening", label: "Evening (5pm - 8pm)" },
                  { value: "flexible", label: "Flexible" },
                ].map((time) => (
                  <button
                    key={time.value}
                    onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time.value as any }))}
                    className={`p-3 rounded-lg border-2 transition-all font-medium ${
                      formData.preferredTime === time.value
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Any add-on services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "insideOvens", label: "Inside Ovens", price: "+$50" },
                { key: "fridge", label: "Inside Fridge", price: "+$40" },
                { key: "windows", label: "Windows (Interior)", price: "+$60" },
                { key: "laundry", label: "Laundry Service", price: "+$35" },
              ].map((addon) => (
                <label
                  key={addon.key}
                  className="flex items-center p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    name={`addOns.${addon.key}`}
                    checked={formData.addOns[addon.key as keyof typeof formData.addOns]}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-border"
                  />
                  <div className="ml-3 flex-1">
                    <div className="font-medium text-foreground">{addon.label}</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">{addon.price}</div>
                </label>
              ))}
            </div>
            <div className="mt-8">
              <label className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-background/80 cursor-pointer">
                <input
                  type="checkbox"
                  name="petFriendly"
                  checked={formData.petFriendly}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-border"
                />
                <span className="font-medium text-foreground">I have pets in my home</span>
              </label>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Review Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <p className="text-sm text-foreground/70">{formData.fullName}</p>
                <p className="text-sm text-foreground/70">{formData.email}</p>
                <p className="text-sm text-foreground/70">{formData.phone}</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-foreground/70">{formData.address}</p>
                <p className="text-sm text-foreground/70">
                  {formData.city}, {formData.postalCode}
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Property</h3>
                <p className="text-sm text-foreground/70">
                  {formData.propertyType.charAt(0).toUpperCase() + formData.propertyType.slice(1)}
                </p>
                <p className="text-sm text-foreground/70">
                  {formData.bedrooms} bed, {formData.bathrooms} bath
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Service</h3>
                <p className="text-sm text-foreground/70">
                  {formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)} - {formData.frequency}
                </p>
                <p className="text-sm text-foreground/70">{formData.preferredDate}</p>
              </div>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-sm text-foreground">
                ✓ We'll contact you within 24 hours with a personalized quote based on your requirements.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-background min-h-screen py-8">
      {submitted && (
        <div className="fixed top-4 left-4 right-4 max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg animate-fade-in z-50">
          ✓ Thank you! Your quote request has been received. We'll contact you shortly!
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              const isComplete = index < currentStep - 1
              const isCurrent = step.number === currentStep
              return (
                <div key={step.number} className="flex flex-col items-center flex-1">
                  <button
                    onClick={() => setCurrentStep(step.number)}
                    disabled={index >= currentStep && !isComplete}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all mb-2 ${
                      isComplete
                        ? "bg-primary text-white"
                        : isCurrent
                          ? "bg-primary text-white ring-4 ring-primary/30"
                          : "bg-border text-foreground/50"
                    }`}
                  >
                    {isComplete ? <Check size={20} /> : step.number}
                  </button>
                  <span className="text-xs text-center font-medium text-foreground/70 hidden sm:block">
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

        {/* Form Content */}
        <div className="bg-white rounded-2xl p-8 border border-border shadow-lg mb-8 min-h-96">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          {currentStep === STEPS.length ? (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all font-bold text-lg"
            >
              <Check size={20} />
              Get My Quote
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isStepComplete(currentStep)}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
            >
              Next
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        <p className="text-center text-sm text-foreground/60 mt-6">
          Step {currentStep} of {STEPS.length}
        </p>
      </div>
    </div>
  )
}
