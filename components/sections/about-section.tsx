import { Shield, Wrench, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-incident safety record with comprehensive training and protocols",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description: "Skilled professionals delivering projects on time and within budget",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description: "Long-term relationships built on reliability and exceptional service",
  },
]

export function AboutSection() {
  return (
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
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-[#d81e1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#d81e1f]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-[var(--font-helvetica)]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-[var(--font-sans)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
