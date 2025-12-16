"use client"
import { ContactFormModal } from "@/components/ContactFormModal"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-0.5 lg:pt-2 lg:pb-3 flex items-center justify-between lg:justify-start lg:relative">
        <div className="flex items-center justify-center flex-1 md:flex-initial md:justify-start lg:flex-initial">
          <a href="/" className="cursor-pointer">
            <img
              src="/kinetic-white-logo.webp"
              alt="Kinetic Industrial"
              className="h-32 w-auto md:h-24 lg:h-60 lg:mb-0"
            />
          </a>
        </div>

        <div className="absolute right-6 md:relative md:right-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12">
          <Image
            src="/american-flag.webp"
            alt="American Flag"
            width={72}
            height={48}
            className="h-8 w-auto md:h-12 lg:h-14 object-contain"
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <ContactFormModal />
        </div>
      </div>
    </nav>
  )
}
