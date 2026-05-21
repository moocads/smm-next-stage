"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Step {
  number: string
  iconSrc: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: "01",
    iconSrc: "/images/08_online-application_document.svg",
    title: "Online Application",
    description: "Submit your application and audition materials through our portal.",
  },
  {
    number: "02",
    iconSrc: "/images/09_audition-review_magnifier.svg",
    title: "Audition Review",
    description: "Our team reviews your submission and selects top candidates.",
  },
  {
    number: "03",
    iconSrc: "/images/10_training-camp_group.svg",
    title: "Training Camp",
    description: "Intensive training in vocal, dance, performance and content creation.",
  },
  {
    number: "04",
    iconSrc: "/images/11_content-launch_play-monitor.svg",
    title: "Content Launch",
    description: "Produce and release high-quality content and prepare for debut.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#0a0a12]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#ff4cc8] font-medium text-sm mb-3">Process</p>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
            style={{
              background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            From audition to debut-ready content.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-[#12121a] border border-gray-800 group overflow-hidden hover:border-[#ff4cc8]/30 transition-colors"
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-heading text-4xl sm:text-5xl font-bold"
                    style={{
                      background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="w-14 h-14 flex items-center justify-center">
                    <Image
                      src={step.iconSrc}
                      alt=""
                      width={180}
                      height={180}
                      className="object-contain"
                      aria-hidden
                    />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
