"use client"
import { ContactFormModal } from "@/components/ContactFormModal"
import Image from "next/image"

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfWsBM81-69MeqhtKNsQvV74GB2_CgIovT_vyj0Y8DiB4MJxQ/viewform?usp=dialog"

export function Navbar() {
  return (
    <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-0.5 lg:pt-2 lg:pb-3 grid grid-cols-[1fr_auto_1fr] items-center lg:flex lg:relative">
        {/* Column 1: Apply button - Left aligned */}
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-start inline-flex lg:hidden items-center justify-center px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-transparent text-white border border-white/70 hover:bg-white/10 transition-all duration-300 ease-in-out"
        >
          Apply
        </a>

        {/* Column 2: Logo - Center aligned on mobile, flex left on desktop */}
        <div className="justify-self-center lg:flex-1 lg:justify-self-auto">
          <a href="/" className="cursor-pointer">
            <img
              src="/kinetic-white-logo.webp"
              alt="Kinetic Industrial"
              className="h-32 w-auto md:h-24 lg:h-60 lg:mb-0"
            />
          </a>
        </div>

        {/* Column 3: Flag - Right aligned on mobile | Apply Here + Flag on desktop */}
        <div className="justify-self-end flex items-center gap-4 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12">
          {/* Desktop Apply Here button */}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2 text-sm font-bold uppercase tracking-wider rounded-sm bg-transparent text-white border border-white/70 hover:bg-white/10 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Apply Here
          </a>
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
