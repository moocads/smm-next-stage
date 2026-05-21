"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Feature {
  iconSrc: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    iconSrc: "/images/01_artist-development_star.svg",
    title: "Artist Development",
    description:
      "Personalized training in vocal, dance, performance and mindset to unlock your full potential.",
  },
  {
    iconSrc: "/images/02_content-production_clapperboard.svg",
    title: "Content Production",
    description:
      "High-quality music, performance videos and original content that showcases your unique identity.",
  },
  {
    iconSrc: "/images/03_media-exposure_globe.svg",
    title: "Media Exposure",
    description:
      "Global platform exposure through Next Stage's network, media partners and official channels.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-28 bg-black" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-[#00c2f5]/50 rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#ff4cc8] font-medium text-sm mb-3" style={{
            background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 3%, #ff4cc8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>About NEXT STAGE</p>
          <h2
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-balance"
          >
            More than an audition. A launch system.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-[#12121a] border border-gray-800 hover:border-[#ff4cc8]/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-[150px] h-[150px] rounded-lg flex items-center justify-center group-hover:bg-[#ff4cc8]/20 transition-colors">
                  <Image
                    src={feature.iconSrc}
                    alt=""
                    width={150}
                    height={150}
                    className="h-[150px] w-[150px] obje ct-contain"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
