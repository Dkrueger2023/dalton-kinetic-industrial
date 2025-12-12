const statesColumn1 = ["Texas", "New Mexico", "Colorado", "Kansas", "Missouri", "Montana", "North Dakota"]

const statesColumn2 = ["Oklahoma", "South Dakota", "Minnesota", "Wyoming", "Nebraska", "Arkansas", "Louisiana"]

function StateListItem({ state }: { state: string }) {
  return (
    <li className="flex items-center justify-start lg:justify-start">
      <div className="w-2 h-2 bg-[#d81e1f] rounded-full mr-4 flex-shrink-0" />
      <span className="text-lg">{state}</span>
    </li>
  )
}

export function GeographicalReachSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl font-black text-white mb-6 font-[var(--font-impact)]">OUR GEOGRAPHICAL REACH</h2>
            <p className="text-lg text-white/90 mb-8 text-pretty font-[var(--font-sans)]">
              Our operations are managed from three central Oklahoma locations—yards in Woodward, OK and Amber, OK, and
              our HQ in Norman, OK. This positioning allows us to effectively serve the entire region, including:
            </p>
            <div className="flex flex-row gap-16">
              <ul className="text-white font-[var(--font-sans)] lg:items-start">
                {statesColumn1.map((state) => (
                  <StateListItem key={state} state={state} />
                ))}
              </ul>
              <ul className="text-white font-[var(--font-sans)] lg:items-start">
                {statesColumn2.map((state) => (
                  <StateListItem key={state} state={state} />
                ))}
              </ul>
            </div>
          </div>

          {/* Map Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/reach-updated.webp"
              alt="Kinetic Industrial Service Area Map showing Oklahoma, Texas, New Mexico, Colorado, Kansas, Missouri, Arkansas, and Louisiana"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
