"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const leftNavItems = [
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
]

const rightNavItems = [
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-5 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile Layout: Logo Left, Hamburger Right */}
          <div className="flex items-center justify-between md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/safaricon.svg"
                  alt="Safar Kitchen"
                  width={180}
                  height={60}
                  className="h-10 w-auto sm:h-12"
                  priority
                />
              </Link>
            </motion.div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-foreground z-50" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Layout: Logo centered with links close on both sides */}
          <div className="hidden md:flex items-center justify-center w-full">
            {/* Left Navigation - Close to logo */}
            <div className="flex items-center gap-6 lg:gap-8 flex-1 justify-end pr-8 lg:pr-12">
              {leftNavItems.map((item) => (
                <motion.div key={item.label} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                      pathname === item.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Logo - Perfectly Centered */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/safaricon.svg"
                  alt="Safar Kitchen"
                  width={180}
                  height={60}
                  className="h-14 w-auto lg:h-16"
                  priority
                />
              </Link>
            </motion.div>

            {/* Right Navigation - Close to logo */}
            <div className="flex items-center gap-6 lg:gap-8 flex-1 justify-start pl-8 lg:pl-12">
              {rightNavItems.map((item) => (
                <motion.div key={item.label} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                      pathname === item.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium uppercase tracking-wider bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-all"
                >
                  Order Online
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {[...leftNavItems, ...rightNavItems].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-medium uppercase tracking-wider transition-colors ${
                      pathname === item.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (leftNavItems.length + rightNavItems.length) * 0.1 }}
              >
                <a
                  href="https://www.doordash.com/store/safar-kitchen-muncie-37659687/85211748/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium uppercase tracking-wider bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
                >
                  Order Online
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
