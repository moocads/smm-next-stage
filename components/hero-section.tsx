"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const HOME_DEFAULTS = {
  backgroundSrc: "/images/smm-entertainment-banner.png",
  backgroundAlt: "NEXT STAGE background with performers",
  eyebrow: "Artist Audition Program",
  headlineLine1: "NEXT",
  headlineLine2: "STAGE",
  chineseLine: "艺人招募计划",
  description:
    "Discover, train and launch the next generation of singers, dancers, performers and creators.",
  primaryCta: { label: "Start Your Audition", href: "#apply" },
  secondaryCta: { label: "Watch Teaser", href: "#" },
} as const

export interface HeroSectionProps {
  backgroundSrc?: string
  backgroundAlt?: string
  eyebrow?: string
  headlineLine1?: string
  headlineLine2?: string
  chineseLine?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function HeroSection(props: HeroSectionProps = {}) {
  const backgroundSrc = props.backgroundSrc ?? HOME_DEFAULTS.backgroundSrc
  const backgroundAlt = props.backgroundAlt ?? HOME_DEFAULTS.backgroundAlt
  const eyebrow = props.eyebrow ?? HOME_DEFAULTS.eyebrow
  const headlineLine1 = props.headlineLine1 ?? HOME_DEFAULTS.headlineLine1
  const headlineLine2 = props.headlineLine2 ?? HOME_DEFAULTS.headlineLine2
  const chineseLine = props.chineseLine ?? HOME_DEFAULTS.chineseLine
  const description = props.description ?? HOME_DEFAULTS.description
  const primaryCta = props.primaryCta ?? HOME_DEFAULTS.primaryCta
  const secondaryCta = props.secondaryCta ?? HOME_DEFAULTS.secondaryCta

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          className="object-cover object-right"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#ff4cc8] font-medium text-lg sm:text-2xl mb-4 gradient-text text-balance"
            style={{
              background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 20%, #ff4cc8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-6xl sm:text-7xl lg:text-[160px] font-bold tracking-tight leading-none mb-4"
          >
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headlineLine1}
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%,#ff4cc8 20%, #ff4cc8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headlineLine2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl text-gray-400 mb-4 font-heading"
          >
            {chineseLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-md mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="font-semibold px-8 text-white border-0"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)",
              }}
            >
              <Link href={primaryCta.href} className="flex items-center gap-2">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-600 bg-transparent hover:bg-gray-800/50 text-white font-semibold px-8"
            >
              <Link href={secondaryCta.href} className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                {secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
