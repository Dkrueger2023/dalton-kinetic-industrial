import { Navbar } from "./navbar"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-image-kinetic.webp"
        alt="Pipeline Construction Site"
        className="absolute inset-0 w-full h-full object-cover object-left md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />

      {/* Navigation - positioned over hero background */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row w-full h-auto">
          {/* LEFT ELEMENT */}
          <div className="w-full lg:w-[60%] flex items-center bg-black/40 p-8 md:p-12 lg:border-l-8 border-[#d81e1f]">
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
          </div>

          <div className="lg:hidden bg-black/40">
            <hr className="w-[60%] h-1.5 bg-[#d81e1f] ml-8 md:ml-12 rounded-full border-none" />
          </div>

          {/* RIGHT ELEMENT */}
          <div className="w-full lg:w-[40%] bg-black/40 p-8 md:p-12 lg:border-l-2 border-[#d81e1f] text-white">
            <p className="text-justify text-center space-y-4 text-white font-[var(--font-helvetica)] text-lg tracking-wide leading-relaxed">
              Kinetic Industrial is a top tier industrial contractor offering specialized construction services to a
              broad range of energy, infrastructure, utility, and power generation customers. We deliver reliable
              industrial infrastructure solutions across the United States, specializing in oil & gas, electrical, water
              and other critical systems to support the nation's most essential systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
