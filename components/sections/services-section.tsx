"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const services = [
  { title: "Pipeline Construction", image: "/oil_gas_pipeline.webp" },
  { title: "Facilities", image: "/shop-fabrications.avif" },
  { title: "Civil", image: "/testing-services.avif" },
  { title: "ROW", image: "/land-clearing.avif" },
  { title: "Fabrication", image: "/row-maintenance.avif" },
  { title: "Technical Services", image: "/pigging-pipeline.png" },
  { title: "Coatings", image: "/coatings.avif" },
]

const serviceDetails: Record<string, string[]> = {
  "Pipeline Construction": [
    "Well-Connects",
    "Maintenance",
    "Integrity Digs",
    "HDD's",
    "Emergency Leak Repair",
    "Cleanup/Remediation",
  ],
  Facilities: [
    "Fabricated assemblies",
    "Piping",
    "Launcher/receiver",
    "Valve settings",
    "Catwalks",
    "Bollards",
    "Gates",
    "Custom fits",
  ],
  Civil: ["Pad Construction", "Site Foundations", "Turnkey Facility Underground", "Large Scale Retention/Detention"],
  ROW: ["Maintenance", "Mowing", "Brush Hogging/Mulching", "Access/Fencing", "Washouts", "Reseeding"],
  Fabrication: ["Shop-Built Piping Assemblies", "Traps", "Valves", "Misc. Custom Fabrication", "Catwalks/Platforms"],
  "Technical Services": ["Pigging Support/Pigging", "Hydrotesting", "Tracking", "Survey/DCVG", "Asbestos Removal"],
  Coatings: ["Blasting/Coating", "Final Painted Assemblies", "Galvanizing"],
}

export function ServicesSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4 font-[var(--font-impact)]">OUR SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group cursor-pointer h-80" onClick={() => toggleCard(index)}>
              <div className="relative w-full h-full [perspective:1000px]">
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedCards.includes(index) ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
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
                      {serviceDetails[service.title]?.map((detail) => (
                        <li key={detail} className="flex items-start">
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
  )
}
