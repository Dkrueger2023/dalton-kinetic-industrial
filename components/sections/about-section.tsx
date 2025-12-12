import { Shield, Wrench, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safety",
    description: "Field-focused leadership ensures top-down safety culture",
  },
  {
    icon: Wrench,
    title: "Execution",
    description:
      "Field first mentality from executive leadership ensures tight deadlines are met while quality and efficiency are maintained",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description: "Deep-rooted customer relationships based on years of exceptional service",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
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
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
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
