"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Flame, Heart, Shield, ChevronRight, Award, Users, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "100% Halal Certified",
    description: "All ingredients sourced from trusted, certified suppliers ensuring authentic halal cuisine",
  },
  {
    icon: Flame,
    title: "Made Fresh Daily",
    description: "Every item prepared with care, right when you order for maximum freshness",
  },
  {
    icon: Heart,
    title: "Bold NYC Flavors",
    description: "Authentic New York street food taste brought to Muncie, Indiana",
  },
]

const stats = [
  { icon: Award, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Clock, value: "11-10", label: "Daily Hours" },
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img
            src="/Attached_image.png"
            alt="Safar Kitchen sign"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/95 to-secondary" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-foreground">NYC Flavor, </span>
            <span className="text-primary italic font-[var(--font-display)]">Indiana Heart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            Bringing the bold flavors of New York street food to Muncie, Indiana
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-full order-2 lg:order-1"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
                {/* Large Image - Circular Sign */}
                <motion.div
                  className="absolute top-0 left-0 w-[60%] h-[200px] sm:h-[280px] md:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/Attached_image.png"
                    alt="Safar Kitchen circular sign"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Storefront - Top Right */}
                <motion.div
                  className="absolute top-12 sm:top-16 right-0 w-[48%] h-[160px] sm:h-[220px] md:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-20"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/Attached_image1.png"
                    alt="Safar Kitchen storefront"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Food Spread - Bottom */}
                <motion.div
                  className="absolute bottom-0 left-[10%] w-[85%] h-[140px] sm:h-[180px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/Attached_image3.png"
                    alt="Our food spread"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight text-gray-900">
                About Safar Kitchen
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Every item is made fresh and packed with flavor, giving you the perfect mix of comfort food and quality you can taste. Bringing the bold flavors of New York street food to Muncie, Indiana.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Our commitment to 100% halal certified ingredients means you can enjoy authentic cuisine with complete
                peace of mind. We source only from trusted suppliers who share our dedication to quality and integrity.
              </p>

              {/* Features */}
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
