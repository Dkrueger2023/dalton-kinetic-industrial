import {
  HeroSection,
  AboutSection,
  ServicesSection,
  IndustriesSection,
  GeographicalReachSection,
  Footer,
} from "@/components/sections"

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <GeographicalReachSection />
      <Footer />
    </div>
  )
}
