import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const impact = Inter({
  subsets: ["latin"],
  variable: "--font-impact",
  display: "swap",
  weight: ["900"], // Impact-like weight
})

const helveticaNeue = Inter({
  subsets: ["latin"],
  variable: "--font-helvetica-neue",
  display: "swap",
  weight: ["400", "500", "600"],
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Kinetic Industrial",
  description:
    "Leading industrial services company providing comprehensive solutions across multiple sectors with a focus on safety, quality, and execution.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${impact.variable} ${helveticaNeue.variable} ${roboto.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
