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

      <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-b md:from-gray-900/10 md:via-transparent md:to-transparent" />

      {/* Navigation - positioned over hero background */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex items-start justify-center py-12 md:items-center md:pt-0 md:py-0">
        <div className="flex flex-col lg:flex-row w-full h-auto">
          {/* LEFT ELEMENT - Heading */}
          <div className="w-full lg:w-[60%] flex items-center justify-center md:justify-start bg-transparent md:bg-black/40 md:p-8 lg:p-12 md:lg:border-l-8 md:border-[#d81e1f] pb-8 md:pb-0">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-balance uppercase tracking-wide font-[var(--font-impact)] text-center md:text-left"
              style={{ color: "#ffffff" }}
            >
              INTEGRITY.
              <br />
              QUALITY.
              <br />
              COMMITMENT.
            </h1>
          </div>

          <div className="lg:hidden bg-transparent px-4">
            <hr className="w-full max-w-md h-1 bg-[#d81e1f] rounded-full border-none" />
          </div>

          {/* RIGHT ELEMENT - Body Text */}
          <div className="w-full lg:w-[40%] bg-transparent md:bg-black/40 p-4 md:p-8 lg:p-12 md:lg:border-l-2 md:border-[#d81e1f] text-white">
            <div className="text-center md:text-justify text-base md:text-lg text-white font-[var(--font-helvetica)] tracking-wide leading-relaxed space-y-4">
              <p>
                Kinetic Industrial is a top tier industrial contractor offering specialized construction services to a
                broad range of energy, infrastructure, utility, and power generation customers.
              </p>
              <p>
                We deliver reliable industrial infrastructure solutions across the United States, specializing in oil
                &amp; gas, electrical, water and other critical systems to support the nation&apos;s most essential
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
