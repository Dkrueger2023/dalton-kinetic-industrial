import { Factory, Zap, Droplets, Power } from "lucide-react"

const industries = [
  {
    icon: Factory,
    title: "Oil/Gas midstream",
    description: "Pipeline construction and maintenance for energy transportation",
  },
  {
    icon: Zap,
    title: "Electrical transmission/High voltage",
    description: "Infrastructure for power distribution networks",
  },
  {
    icon: Droplets,
    title: "Water/Waste Water",
    description: "Municipal and industrial water system solutions",
  },
  {
    icon: Power,
    title: "Power Generation/Plant Services",
    description: "Facility construction and maintenance services",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Sectors We Serve</h2>
          <p className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground">INDUSTRIES</p>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide specialized expertise tailored to your industry, ensuring your distinct operational needs and
            regulatory standards are met with precision.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 font-semibold text-card-foreground">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
