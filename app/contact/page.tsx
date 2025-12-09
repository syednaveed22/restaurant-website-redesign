"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock, ExternalLink, ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img
            src="/restaurant-exterior-evening-warm-lights.jpg"
            alt="Restaurant exterior"
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
            <span className="text-foreground">Come Taste the </span>
            <span className="text-primary italic font-[var(--font-display)]">Difference</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            We're here to serve you the best halal cuisine in town. Stop by, call ahead, or order online — we can't wait to feed you!
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Three Info Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Address</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                509 N Martin St
                <br />
                Muncie, IN 47303
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Phone</h3>
              <a href="tel:+17652161052" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                (765) 216-1052
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-foreground">Hours</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Sunday - Saturday
                <br />
                11:00 AM - 10:00 PM
              </p>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl border border-border"
          >
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">Contact</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 text-foreground">Write us a message</h3>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">We'd love to hear from you!</p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 sm:py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 sm:py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 sm:py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 sm:py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 sm:py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm sm:text-base"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-12 h-12 sm:h-14 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  Send a Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
