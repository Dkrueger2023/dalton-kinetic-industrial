"use client"
import Image from "next/image"
import { ContactFormModal } from "@/components/ContactFormModal"

export function Footer() {
  return (
    <footer className="w-full bg-background py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Centered Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/kinetic-logo-nobuffer.webp"
            alt="Kinetic Industrial"
            width={250}
            height={100}
            className="h-25 w-auto"
          />
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mb-12">
          <ContactFormModal />
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        <div className="flex justify-center items-center gap-2 text-center text-sm text-muted-foreground">
          <span>© 2025 Kinetic Industrial. All rights reserved.</span>
          <Image
            src="/american-flag.webp"
            alt="American Flag"
            width={36}
            height={24}
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
