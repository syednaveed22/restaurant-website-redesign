"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export function VisitUs() {
  return (
    <section className="px-4 py-4 md:py-8">
      {/* Curved Card Container */}
      <div className="bg-foreground text-primary-foreground rounded-[2rem] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 items-stretch">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-center text-center w-full h-full justify-center order-2 lg:order-1"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-2">Find Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
              Visit Us Today
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md mx-auto px-4">
              Stop by for a taste of authentic halal street food. We're ready to serve you bold flavors and fresh
              ingredients every day.
            </p>

            <div className="space-y-4 sm:space-y-6 w-full max-w-md">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-center">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">Location</h3>
                  <p className="text-primary-foreground/70 text-sm sm:text-base">
                    509 N Martin St
                    <br />
                    Muncie, IN 47303
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-center">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">Hours</h3>
                  <p className="text-primary-foreground/70 text-sm sm:text-base">
                    Sunday - Saturday
                    <br />
                    11:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-center">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">Contact</h3>
                  <p className="text-primary-foreground/70 text-sm sm:text-base">
                    (765) 216-1052
                    <br />
                    Call for takeout orders
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center">
              <a
                href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors"
              >
                Order Online
              </a>
              <a
                href="https://www.google.com/maps/dir//509+N+Martin+St,+Muncie,+IN+47303"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right side - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-stretch w-full order-1 lg:order-2"
          >
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full rounded-2xl lg:rounded-3xl overflow-hidden bg-muted/10 relative max-w-lg mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.2573842814844!2d-85.38943492346056!3d40.19350047147516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814055555555555%3A0x5555555555555555!2s509%20N%20Martin%20St%2C%20Muncie%2C%20IN%2047303!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
