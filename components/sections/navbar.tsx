"use client"
import { ContactFormModal } from "@/components/ContactFormModal"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-6 flex items-center justify-between">
        <div className="flex items-center justify-center flex-1 md:flex-initial md:justify-start">
          <a href="/" className="cursor-pointer">
            <img src="/kinetic-white-logo.webp" alt="Kinetic Industrial" className="h-48 w-auto md:h-24" />
          </a>
        </div>

        <div className="absolute right-6 md:relative md:right-0">
          <Image
            src="/american-flag.webp"
            alt="American Flag"
            width={72}
            height={48}
            className="h-10 w-auto md:h-12 object-contain"
          />
        </div>

        <div className="hidden md:block">
          <ContactFormModal />
        </div>
      </div>
    </nav>
  )
}
