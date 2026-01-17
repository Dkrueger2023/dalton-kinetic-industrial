"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "./navbar"
import Image from "next/image"

const slides = [
  {
    image: "/images/initial-kinetic-website-hero.webp",
    alt: "Pipeline Construction Stretching to Horizon",
  },
  {
    image: "/hero-image-kinetic.webp",
    alt: "Pipeline Construction Site",
  },
  {
    image: "/images/kinetic-website-hero-welding.webp",
    alt: "Pipeline Welder at Work",
  },
  {
    image: "/images/weldingimagehero-kinetic.webp",
    alt: "Industrial Welding Team",
  },
  {
    image: "/images/hero-3-kinetic.webp",
    alt: "Pipeline in Desert Landscape",
  },
  {
    image: "/images/6-kinetic-website-hero.webp",
    alt: "Industrial Site Panoramic View",
  },
  {
    image: "/images/kinetic-hero-t.webp",
    alt: "Molten Metal Industrial Process",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const loadedCount = useRef(0)

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])
  const brightness = useTransform(scrollY, [0, 500], [1, 0.6])

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = slide.image
      img.onload = () => {
        loadedCount.current += 1
        if (loadedCount.current >= slides.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length)
          return 0
        }
        return prev + 100 / 40
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              zIndex: { delay: index === currentSlide ? 0 : 1.2 },
            }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                scale: scale,
              }}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={index < 2}
                className="object-cover object-center"
                style={{
                  filter: `brightness(${brightness.get()})`,
                }}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        ))}
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
