import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

const footerServices = [
  "Oil & Gas Pipeline Construction",
  "Coatings",
  "Shop Fabrications",
  "Land Services",
  "Access",
  "Pigging Services & Support",
  "Testing Services",
  "Water/Waste/Municipal Pipeline",
]

const footerIndustries = [
  "Oil/Gas midstream",
  "Electrical transmission/High voltage",
  "Water/Waste Water",
  "Power Generation/Plant Services",
]

export function Footer() {
  return (
    <footer id="contact" className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/kinetic-industrial-logo.png" alt="Kinetic Industrial" className="h-18 w-auto" />
            </div>
            <p className="text-gray-600 mb-4 text-pretty font-[var(--font-sans)]">
              Built on Integrity, defined by Quality, driven by Commitment. Moving industry Forever Forward.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-[var(--font-helvetica)] text-black">Services</h3>
            <ul className="space-y-2 text-gray-600 font-[var(--font-sans)]">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-[var(--font-helvetica)] text-black">Industries</h3>
            <ul className="space-y-2 text-gray-600 font-[var(--font-sans)]">
              {footerIndustries.map((industry) => (
                <li key={industry}>
                  <a href="#" className="hover:text-[#d81e1f] transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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
  )
}
