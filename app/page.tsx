import { HeroSection } from "@/components/hero-section"
import { MarqueeStrip } from "@/components/marquee-strip"
import { WhatWeServe } from "@/components/what-we-serve"
import { VisitUs } from "@/components/visit-us"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MarqueeStrip />
      <WhatWeServe />
      <VisitUs />
      <Footer />
    </main>
  )
}
