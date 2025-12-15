"use client"
import { ContactFormModal } from "@/components/ContactFormModal"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:flex-none flex-1 justify-center md:justify-start">
          <a href="/" className="cursor-pointer">
            <img src="/all-white-kinetic-logo.webp" alt="Kinetic Industrial" className="h-24 w-auto" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ContactFormModal />
          <Image
            src="/american-flag.webp"
            alt="American Flag"
            width={60}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </nav>
  )
}
