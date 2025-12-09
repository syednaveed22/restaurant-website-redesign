import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Safar Kitchen | Authentic Halal Street Food in Muncie",
  description:
    "Experience the bold flavors of New York street food — from subs and wings to burgers and boba — all made fresh daily with 100% halal-certified ingredients.",
  keywords: ["halal food", "street food", "Muncie", "boba tea", "burgers", "wings", "New York cuisine"],
  authors: [{ name: "Safar Kitchen" }],
  creator: "Safar Kitchen",
  publisher: "Safar Kitchen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Safar Kitchen | Authentic Halal Street Food",
    description: "Bold flavors. Fresh ingredients. 100% Halal.",
    type: "website",
    locale: "en_US",
    siteName: "Safar Kitchen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safar Kitchen | Authentic Halal Street Food",
    description: "Bold flavors. Fresh ingredients. 100% Halal.",
  },
  verification: {
    // Add your verification codes here if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fe989d",
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
