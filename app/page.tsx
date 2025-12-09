"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, Shield, Users, Phone, Mail, MapPin, Menu, X, Check } from "lucide-react"
import { useState } from "react"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const serviceDetails = {
    "Oil & Gas Pipeline Construction": [
      "Installation",
      "ROW",
      "Trenching",
      "Boring",
      "Fabrication",
      "Stations",
      "Infrastructure",
      "Processing",
      "Integrity",
      "Testing",
      "Maintenance",
      "Decommissioning",
    ],
    Coatings: ["Shop or field applied coatings with NACE certified professional oversight"],
    "Shop Fabrications": [
      "Fabricated assemblies",
      "Piping",
      "Launcher/receiver",
      "Valve settings",
      "Catwalks",
      "Bollards",
      "Gates",
      "Custom fits",
    ],
    "Land Services": [
      "Clearing",
      "Grading",
      "Erosion control devices",
      "Erosion repair",
      "Restoration services",
      "Re-seeding",
      "Reclamation",
    ],
    Access: [
      "Temporary fencing",
      "Site storage solutions",
      "Temporary housing",
      "ROW access/maintenance",
      "Lease road construction and maintenance",
      "Matting",
      "Mowing",
    ],
    "Pigging Services & Support": [
      "Cleaning",
      "Batching",
      "Corrosion",
      "Cracking",
      "Mapping",
      "Operations",
      "Tracking",
    ],
    "Testing Services": ["Piping and fabrication hydrotesting in shop or field setting"],
    "Water/Waste/Municipal Pipeline": [
      "Mains",
      "Lines",
      "Hydrants",
      "Meters",
      "Sewer",
      "Forcemains",
      "Manholes",
      "Stations",
      "Stormwater",
      "Inlets",
      "Rehab",
      "Repair",
      "Leaks",
      "Cleaning",
    ],
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Navigation */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <img
          src="/Hero-Image-KineticInd.jpg"
          alt="Pipeline Construction Site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />

        {/* Navigation - positioned over hero background */}
        <nav className="relative w-full z-50 bg-transparent border-b border-white/20">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:flex-none flex-1 justify-center md:justify-start">
              <a href="/" className="cursor-pointer">
                <img src="/all-white-kinetic-logo.png" alt="Kinetic Industrial" className="h-24 w-auto" />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-[#d81e1f] transition-colors">
                Services
              </a>
              <a href="#industries" className="text-white hover:text-[#d81e1f] transition-colors">
                Industries
              </a>
              <a href="#about" className="text-white hover:text-[#d81e1f] transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-[#d81e1f] transition-colors">
                Contact
              </a>
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
              <div className="container mx-auto px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-white hover:text-[#d81e1f] transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="block w-full text-left text-white hover:text-[#d81e1f] transition-colors py-2"
                >
                  Industries
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-white hover:text-[#d81e1f] transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-white hover:text-[#d81e1f] transition-colors py-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex-1 flex items-center">
          <div className="flex w-full h-auto">
            <div className="flex-1 bg-black/40 p-8 md:p-12 border-l-8 border-[#d81e1f]">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 text-balance uppercase tracking-wide font-[var(--font-impact)]"
                style={{ color: "#ffffff" }}
              >
                INTEGRITY.
                <br />
                QUALITY.
                <br />
                COMMITMENT.
              </h1>
              <p
                className="text-lg md:text-xl text-white mb-8 text-pretty font-normal font-[var(--font-helvetica)]"
                style={{ color: "#ffffff", opacity: 0.95 }}
              >
                Kinetic Industrial empowers our clients in the most demanding industries by delivering premier
                industrial services and tailored solutions.
              </p>
            </div>

            <div className="flex-1 bg-black/40 p-8 md:p-12 border-l-2 border-[#d81e1f] hidden lg:block">
              <ul className="space-y-4 text-white font-[var(--font-helvetica)] text-lg font-bold uppercase tracking-wide">
                <li>OIL & GAS PIPELINE CONSTRUCTION</li>
                <li>COATINGS</li>
                <li>SHOP FABRICATIONS</li>
                <li>LAND SERVICES</li>
                <li>ACCESS</li>
                <li>PIGGING SERVICES & SUPPORT</li>
                <li>TESTING SERVICES</li>
                <li>WATER/WASTE/MUNICIPAL PIPELINE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-foreground mb-6 font-[var(--font-impact)]">
              TRUSTED PARTNER IN INDUSTRIAL EXCELLENCE
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty font-[var(--font-sans)]">
              From oil & gas pipeline construction to testing services and beyond, we offer a wide range of solutions so
              you can count on us for all your industrial needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d81e1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#d81e1f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[var(--font-helvetica)]">
                  Safety First
                </h3>
                <p className="text-muted-foreground font-[var(--font-sans)]">
                  Zero-incident safety record with comprehensive training and protocols
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d81e1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-[#d81e1f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[var(--font-helvetica)]">
                  Expert Execution
                </h3>
                <p className="text-muted-foreground font-[var(--font-sans)]">
                  Skilled professionals delivering projects on time and within budget
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d81e1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#d81e1f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[var(--font-helvetica)]">
                  Trusted Partnership
                </h3>
                <p className="text-muted-foreground font-[var(--font-sans)]">
                  Long-term relationships built on reliability and exceptional service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 font-[var(--font-impact)]">OUR SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oil & Gas Pipeline Construction",
                image: "/oil_gas_pipeline.webp",
              },
              {
                title: "Coatings",
                image: "/coatings.avif",
              },
              {
                title: "Shop Fabrications",
                image: "/shop-fabrications.avif",
              },
              {
                title: "Land Services",
                image: "/land-clearing.avif",
              },
              {
                title: "Access",
                image: "/row-maintenance.avif",
              },
              {
                title: "Pigging Services & Support",
                image: "/pigging-pipeline.png",
              },
              {
                title: "Testing Services",
                image: "/testing-services.avif",
              },
              {
                title: "Water/Waste/Municipal Pipeline",
                image: "/water-waste-municipal-pipeline.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer h-80"
                onClick={() => {
                  if (flippedCards.includes(index)) {
                    setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index))
                  } else {
                    setFlippedCards([...flippedCards, index])
                  }
                }}
              >
                <div className="relative w-full h-full [perspective:1000px]">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                      flippedCards.includes(index) ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden relative">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                      {/* Bottom-left text */}
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white font-[var(--font-helvetica)] uppercase leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border-2 border-white p-6 flex flex-col !bg-[#000000] overflow-y-auto">
                      <h3 className="font-[var(--font-helvetica)] text-xl font-bold uppercase mb-4 text-center !text-[#ffffff]">
                        {service.title}
                      </h3>
                      <ul className="font-[var(--font-helvetica)] text-sm space-y-2 flex-1 grid grid-cols-2 gap-x-4 gap-y-2">
                        {serviceDetails[service.title as keyof typeof serviceDetails]?.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <Check className="mr-2 flex-shrink-0 !text-[#d81e1f] h-4 w-4 mt-0.5" />
                            <span className="!text-[#ffffff]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4 font-[var(--font-impact)]">INDUSTRIES</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-[var(--font-sans)]">
              We serve diverse industries with specialized expertise and solutions tailored to meet unique operational
              requirements and regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Oil/Gas midstream",
              "Electrical transmission/High voltage",
              "Water/Waste Water",
              "Power Generation/Plant Services",
            ].map((industry, index) => (
              <div
                key={index}
                className="h-24 flex items-center justify-center p-4 rounded-lg border border-border hover:border-[#d81e1f] transition-colors"
              >
                <Badge
                  variant="outline"
                  className="text-xs font-medium border-[#d81e1f] text-[#d81e1f] text-center leading-tight px-3 py-2"
                >
                  {industry}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographical Reach Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl font-black text-white mb-6 font-[var(--font-impact)]">OUR GEOGRAPHICAL REACH</h2>
              <p className="text-lg text-white/90 mb-8 text-pretty font-[var(--font-sans)]">
                Our operations are managed from three central Oklahoma locations—yards in Woodward, OK and Amber, OK,
                and our HQ in Norman, OK. This positioning allows us to effectively serve the entire region, including:
              </p>
              <ul className="grid grid-cols-2 lg:flex lg:flex-col gap-3 text-white font-[var(--font-sans)] lg:items-start">
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Texas</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">New Mexico</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Colorado</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Kansas</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Missouri</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Arkansas</span>
                </li>
                <li className="flex items-center justify-start lg:justify-start">
                  <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Louisiana</span>
                </li>
              </ul>
            </div>

            {/* Map Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/images/reach-20-281-29-20-281-29.webp"
                alt="Kinetic Industrial Service Area Map showing Oklahoma, Texas, New Mexico, Colorado, Kansas, Missouri, Arkansas, and Louisiana"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/kinetic-industrial-logo.png" alt="Kinetic Industrial" className="h-18 w-auto" />
              </div>
              <p className="text-gray-600 mb-4 text-pretty font-[var(--font-sans)]">
                Built on Integrity, defined by Quality, driven by Commitment. Moving industry Forever Forward.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-[var(--font-helvetica)] text-black">Services</h3>
              <ul className="space-y-2 text-gray-600 font-[var(--font-sans)]">
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Oil & Gas Pipeline Construction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Coatings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Shop Fabrications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Land Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Access
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Pigging Services & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Testing Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Water/Waste/Municipal Pipeline
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-[var(--font-helvetica)] text-black">Industries</h3>
              <ul className="space-y-2 text-gray-600 font-[var(--font-sans)]">
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Oil/Gas midstream
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Electrical transmission/High voltage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Water/Waste Water
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    Power Generation/Plant Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-[var(--font-helvetica)] text-black">Contact Us</h3>
              <div className="space-y-3 text-gray-600 font-[var(--font-sans)]">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#d81e1f]" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#d81e1f]" />
                  <a href="mailto:info@kineticind.com" className="hover:text-[#d81e1f] transition-colors">
                    info@kineticind.com
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#d81e1f] mt-1" />
                  <span>Oklahoma</span>
                </div>
              </div>
              <a href="tel:580-744-0881">
                <Button className="mt-4 bg-[#d81e1f] text-white hover:bg-[#b91c1c]">Contact Us Today</Button>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
            <p className="font-[var(--font-sans)]">&copy; 2025 Kinetic Industrial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
