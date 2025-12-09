"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const items = [
  "Fresh Daily",
  "100% Halal",
  "NYC Street Food",
  "Handcrafted Boba",
  "Loaded Subs",
  "Crispy Wings",
  "Juicy Burgers",
  "Made with Love",
]

export function MarqueeStrip() {
  return (
    <div className="relative bg-secondary">
      {/* Background Pattern matching hero section */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      {/* Spacing with hero section background */}
      <div className="h-4 md:h-6 lg:h-8"></div>
      {/* Marquee strip */}
      <div className="bg-primary py-4 overflow-hidden relative z-10">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-6">
              <Star className="w-4 h-4 text-primary-foreground mr-3 fill-current" />
              <span className="text-primary-foreground font-bold text-sm md:text-base uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
