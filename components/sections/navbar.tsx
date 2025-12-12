"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ContactFormModal } from "@/components/ContactFormModal"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
      <div className="container mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:flex-none flex-1 justify-center md:justify-start">
          <a href="/" className="cursor-pointer">
            <img src="/all-white-kinetic-logo.png" alt="Kinetic Industrial" className="h-24 w-auto" />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-[#d81e1f] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <ContactFormModal />

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm border-b border-white/20">
          <div className="container mx-auto px-6 lg:px-8 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="block w-full text-left text-white hover:text-[#d81e1f] transition-colors py-2"
              >
                {link.label === "Contact" ? "Contact Us" : link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
