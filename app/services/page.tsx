"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Home,
  Sparkles,
  Truck,
  Building2,
  BedDouble,
  Hammer,
  ArrowRight,
  CheckCircle,
  Check,
  X,
  Calendar
} from "lucide-react";

export default function Services() {
  const serviceDetails = [
    {
      id: "residential",
      title: "Residential Cleaning",
      description:
        "Consistent cleanliness for busy families and professionals.",
      longDescription:
        "For busy families, professionals, and anyone who wants a consistently clean home without the hassle. We create a healthy environment for you to relax in.",
      icon: Home,
      image:
        "https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "/contact",
      includes: [
        "Dusting and wiping surfaces",
        "Vacuuming and mopping floors",
        "Bathrooms cleaned and sanitized",
        "Kitchen surfaces & appliances exterior",
        "Emptying trash ",
      ],
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      description:
        "Detailed attention for spring cleaning or special occasions.",
      longDescription:
        "Perfect for spring cleaning, before guests arrive, or when your space needs extra attention. We go beyond the surface to remove hidden dust and grime.",
      icon: Sparkles,
      image:
        "https://5.imimg.com/data5/IY/VT/WG/SELLER-92734525/bathroom-cleaning-1000x1000.jpg",
      url: "/contact",
      includes: [

        "Baseboards, door ,and light switches",
        "Inside microwave ",
        "Extra detail in bathrooms and kitchen",
        "High-touch & hard-to-reach areas",

      ],
    },
    {
      id: "move-in-out",
      title: "Move-In / Move-Out Cleaning",
      description: "Ensure the property is pristine for the next chapter.",
      longDescription:
        "Ideal for landlords, tenants, and homeowners. Whether you want your deposit back or a fresh start in a new home, we leave the place spotless.",
      icon: Truck,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
      url: "/contact",
      includes: [
        "Inside cabinets and drawers (empty units)",
        "Inside fridge and oven",
        "Full bathroom and kitchen scrub",
        "Floors thoroughly vacuumed and mopped",
        "Spot cleaning walls where possible",
      ]
    },
    {
      id: "commercial",
      title: "Commercial & Office Cleaning",
      description: "Professional spaces kept clean for employees and clients.",
      longDescription:
        "Keep your workplace clean, professional, and welcoming. A clean office boosts productivity and leaves a great first impression on clients.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      url: "/contact",
      includes: [
        "Daily, weekly, or bi-weekly service",
        "Common areas, restrooms, break rooms",
        "Desks and touch points wiped",
        "Trash removal and floors",
      ],
    },
    {
      id: "airbnb",
      title: "Airbnb & Rental Turnover Cleaning",
      description: "Fast, reliable turnovers to maintain Superhost status.",
      longDescription:
        "Quick, reliable turnovers between guests. We understand the tight schedules of short-term rentals and ensure 5-star cleanliness every time.",
      icon: BedDouble,
      image:
        "https://cdn.prod.website-files.com/66eae7c3f6bec634152a5d82/66fdad7178925f4d926262f9_Cleaning%20Company%20(2).webp",
      url: "/contact",
      includes: [
        "Full cleaning of all rooms",
        "Bed stripping and remaking",
        "Basic restocking (soap, toilet paper, etc. if provided)",
        "Light staging so your listing looks great in reviews",
      ],
    },
    {
      id: "renovation",
      title: "Post-Renovation ",
      description: "Removing dust and debris so you can enjoy your new space.",
      longDescription:
        "Construction is messy. We handle the fine dust and debris left behind by contractors so you can move your furniture in immediately.",
      icon: Hammer,
      image:
        "https://reallycleanservices.com/wp-content/uploads/2025/02/diploma-1.webp",
      url: "/contact",
      includes: [
        "Dust removal ",
        "Surface wipe-down ",
        "Floor and window cleaning",
      ],
    },
    {
      id: "seasonal-specialty",
      title: "Seasonal & Specialty Services",
      description: "Specialized assistance for holidays, moving, and organization.",
      longDescription:
        "Beyond standard cleaning, we assist with seasonal transitions, real estate preparation, and organizing cluttered spaces like garages and closets.",
      icon: Calendar, // You may need to import this icon or choose another
      image: "https://officepride.com/wp-content/uploads/2021/11/OP1014-Office-Pride-Blog_10Oct2021-Micro.jpg", // Replace with your specific image
      url: "/contact",
      includes: [
        "Christmas tree teardown & holiday clean-up",
        "Post-home-sale cleaning (listing prep and turnover)",
        "Closet organizing & decluttering",
        "Garage organizing & clean-up",
      ],
    },
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      description: "Deep cleaning treatments for carpets, rugs, and stains.",
      longDescription:
        "Revitalize your flooring with our deep cleaning methods designed to handle odors, tough stains, and general wear and tear on carpets.",
      icon: Sparkles, // You may need to import this icon or choose another
      image: "https://img.freepik.com/premium-photo/carpet-cleaning-vacuum-cleaner_266247-56.jpg?semt=ais_hybrid&w=740&q=80", // Replace with your specific image
      url: "/contact",
      includes: [
        "Carpet shampooing",
        "Spot and stain treatment",
        "Odor removal",
        "Area rug cleaning",
      ],
    },
  ];

  const addOns = [
    "Inside Fridge",
    "Inside Oven",
    "Inside Cabinets",
    "Interior Window  ",
    "Laundry Wash & Fold",
    "Balcony or porch Cleaning",
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32  bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Expert Cleaning Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              Spotless Cleaning for <br className="hidden sm:block" />
              <span className="text-primary">Every Space</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Professional, reliable, and thorough. Choose the perfect service package aimed at restoring freshness to your home or office.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group relative flex flex-col overflow-hidden border-border/60 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="h-12 w-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    {/* DRAWER IMPLEMENTATION */}
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button
                          className="w-full group-hover:bg-primary/90 transition-all text-base font-medium"
                          variant="outline"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </DrawerTrigger>

                      {/* Responsive Scrollable Content */}
                      <DrawerContent className="max-h-[70vh] flex flex-col fixed bottom-0 left-0 right-0 outline-none">
                        {/* Header - Fixed */}
                        <DrawerHeader className="text-left border-b border-border/10 pb-4 shrink-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Icon className="h-5 w-5" />
                              </div>
                              <DrawerTitle className="text-2xl font-bold">
                                {service.title}
                              </DrawerTitle>
                            </div>
                            <DrawerClose asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <X className="h-4 w-4" />
                              </Button>
                            </DrawerClose>
                          </div>
                          <DrawerDescription className="mt-2 text-base">
                            Overview of the {service.title} package.
                          </DrawerDescription>
                        </DrawerHeader>

                        {/* Body - Scrollable */}
                        <div className="p-4 md:p-6 flex-1 overflow-y-auto md:overflow-hidden max-h-[70vh] md:max-h-none">
                          <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                            {/* Left: Image (Hidden on very small screens if needed, or kept) */}
                            <div className="w-full md:w-1/3 shrink-0">
                              <div className="aspect-video  rounded-xl overflow-hidden shadow-md relative">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full object-cover"
                                />
                              </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 space-y-6">
                              <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">Description</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {service.longDescription}
                                </p>
                              </div>

                              <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-primary" />
                                  What's Included?
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {service.includes.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-muted/30 border border-border/40">
                                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                      <span className="text-sm text-foreground/90">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer - Fixed CTA */}
                        <DrawerFooter className="border-t border-border/10 pt-4 shrink-0 bg-background">
                          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-4xl mx-auto">
                            <DrawerClose asChild>
                              <Button variant="outline" className="flex-1 sm:flex-none">Close</Button>
                            </DrawerClose>
                            <Link href={service.url} className="flex-1">
                             
                              <Button
                                className="w-full text-sm sm:text-base"
                                size="lg"
                              >
                                Book {service.title} Now
                              </Button>
                            </Link>
                          </div>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>




      {/* Add-ons Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Add-On Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Need a little extra? Add these specialized services to any package to tailor the cleaning to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default group"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check size={16} className="text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}