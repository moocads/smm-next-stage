"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Talent {
  iconSrc: string
  title: string
}

const talents: Talent[] = [
  {
    iconSrc: "/images/04_singers-vocalists_microphone.svg",
    title: "Singers / Vocalists",
  },
  {
    iconSrc: "/images/05_dancers-performers_dancer.svg",
    title: "Dancers / Performers",
  },
  {
    iconSrc: "/images/06_creators-influencers_video-camera.svg",
    title: "Creators / Influencers",
  },
  {
    iconSrc: "/images/07_trainees-with-potential_people.svg",
    title: "Trainees with potential",
  },
]

export function TalentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="audition" className="py-20 sm:py-28 bg-[#0d0d15]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#00c2f5] font-medium text-sm mb-3">Who we are looking for</p>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
            style={{
              background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Show us what makes you unforgettable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-[#12121a] border border-gray-800 hover:border-[#00c2f5]/50 transition-colors group text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-[150px] h-[150px] rounded-full flex items-center justify-center group-hover:bg-[#00c2f5]/20 transition-colors">
                  <Image
                    src={talent.iconSrc}
                    alt=""
                    width={150}
                    height={150}
                    className="h-[150px] w-[150px] object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white">
                  {talent.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
