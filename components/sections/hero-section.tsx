"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "./navbar"
import Image from "next/image"

const slides = [
  {
    image: "/images/initial-kinetic-website-hero.webp",
    alt: "Pipeline Construction Stretching to Horizon",
    mobilePosition: "center 60%",
    desktopPosition: "center center",
  },
  {
    image: "/hero-image-kinetic.webp",
    alt: "Pipeline Construction Site",
    mobilePosition: "center 40%",
    desktopPosition: "center center",
  },
  {
    image: "/images/kinetic-website-hero-welding.webp",
    alt: "Pipeline Welder at Work",
    mobilePosition: "center 30%",
    desktopPosition: "center center",
  },
  {
    image: "/images/weldingimagehero-kinetic.webp",
    alt: "Industrial Welding Team",
    mobilePosition: "40% center",
    desktopPosition: "center center",
  },
  {
    image: "/images/hero-3-kinetic.webp",
    alt: "Pipeline in Desert Landscape",
    mobilePosition: "center 70%",
    desktopPosition: "center center",
  },
  {
    image: "/images/6-kinetic-website-hero.webp",
    alt: "Industrial Site Panoramic View",
    mobilePosition: "70% 60%",
    desktopPosition: "center center",
  },
  {
    image: "/images/kinetic-hero-t.webp",
    alt: "Molten Metal Industrial Process",
    mobilePosition: "40% center",
    desktopPosition: "center center",
  },
  {
    image: "/images/excavator-kinetic.webp",
    alt: "Excavator Working on Pipeline Trench",
    mobilePosition: "center 40%",
    desktopPosition: "center center",
  },
]

/* Intrinsic dimensions for CLS prevention (all hero images are 1920x1080) */
const IMG_WIDTH = 1920
const IMG_HEIGHT = 1080

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  /* Track which slides have been visited so we only mount them on demand */
  const [mountedSlides, setMountedSlides] = useState<Set<number>>(() => new Set([0]))

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])
  const brightness = useTransform(scrollY, [0, 500], [1, 0.6])

  /* Pre-load the NEXT slide ~1 s before the transition fires */
  const prefetchNext = useCallback((current: number) => {
    const next = (current + 1) % slides.length
    setMountedSlides((prev) => {
      if (prev.has(next)) return prev
      const copy = new Set(prev)
      copy.add(next)
      return copy
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => {
            const next = (current + 1) % slides.length
            return next
          })
          return 0
        }
        /* When we hit ~75 %, pre-mount and lazy-load the next slide */
        if (prev >= 75 && prev < 75 + 100 / 40) {
          prefetchNext(currentSlide)
        }
        return prev + 100 / 40
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentSlide, prefetchNext])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isFirst = index === 0
          const isActive = index === currentSlide
          const shouldMount = isFirst || mountedSlides.has(index)

          if (!shouldMount) return null

          return (
            <motion.div
              key={slide.image}
              className="absolute inset-0"
              initial={{ opacity: isFirst ? 1 : 0 }}
              animate={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                zIndex: { delay: isActive ? 0 : 1.2 },
              }}
            >
              <motion.div
                className="w-full h-full"
                style={{ scale }}
              >
                <div className="relative w-full h-full">
                  {/* Mobile Image */}
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    width={IMG_WIDTH}
                    height={IMG_HEIGHT}
                    priority={isFirst}
                    loading={isFirst ? "eager" : "lazy"}
                    fetchPriority={isFirst ? "high" : "low"}
                    className="object-cover md:hidden"
                    style={{
                      filter: `brightness(${brightness.get()})`,
                      objectPosition: slide.mobilePosition,
                    }}
                    sizes="(max-width: 768px) 100vw, 0px"
                  />
                  {/* Desktop Image */}
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    width={IMG_WIDTH}
                    height={IMG_HEIGHT}
                    priority={isFirst}
                    loading={isFirst ? "eager" : "lazy"}
                    fetchPriority={isFirst ? "high" : "low"}
                    className="object-cover hidden md:block"
                    style={{
                      filter: `brightness(${brightness.get()})`,
                      objectPosition: slide.desktopPosition,
                    }}
                    sizes="(max-width: 768px) 0px, 100vw"
                  />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="absolute inset-0 bg-black pointer-events-none z-[2]"
        style={{
          opacity: useTransform(scrollY, [0, 500], [0, 0.4]),
        }}
      />

      <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-b md:from-gray-900/10 md:via-transparent md:to-transparent z-[3]" />

      {/* Navigation - positioned over hero background */}
      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex items-start justify-center py-12 md:items-center md:pt-0 md:py-0">
        <div className="flex flex-col lg:flex-row w-full h-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[60%] flex items-center justify-center md:justify-start bg-transparent md:bg-black/40 md:p-8 lg:p-12 md:lg:border-l-8 md:border-[#d81e1f] pb-8 md:pb-0"
          >
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
          </motion.div>

          <div className="lg:hidden bg-transparent px-4">
            <hr className="w-full max-w-md h-1 bg-[#d81e1f] rounded-full border-none" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full lg:w-[40%] bg-transparent md:bg-black/40 p-4 md:p-8 lg:p-12 md:lg:border-l-2 md:border-[#d81e1f] text-white"
          >
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
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20 backdrop-blur-sm">
        <motion.div
          className="h-full bg-[#d81e1f]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </section>
  )
}
