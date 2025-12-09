"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="px-4 pb-4">
      {/* Main Footer Section */}
      <div className="bg-primary rounded-[2rem] py-12 sm:py-16 px-4 sm:px-6 text-center">
        {/* Logo */}
        <motion.div
          className="mx-auto mb-8 sm:mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/safaricon.svg"
            alt="Safar Kitchen"
            width={100}
            height={100}
            className="h-16 sm:h-20 w-auto mx-auto"
          />
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-white font-medium transition-colors text-sm sm:text-base"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white font-medium transition-colors text-sm sm:text-base"
          >
            Order Online
          </a>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Safar Kitchen. All rights reserved.</p>
          <span className="hidden md:inline">•</span>
          <p>100% Halal Certified</p>
        </div>
      </div>
    </footer>
  )
}
