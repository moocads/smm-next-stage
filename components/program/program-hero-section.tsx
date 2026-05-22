"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProgramHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,194,245,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(246,81,200,0.1),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your Path to Becoming an Artist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg"
          >
            NEXT STAGE builds a full artist development system for emerging talent — music, performance,
            visuals, branding, distribution, growth, and commercial opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full border-0 px-8 font-semibold text-white"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #7b4dff 55%, #f651c8 100%)",
              }}
            >
              <Link href="#what-you-get" className="inline-flex items-center gap-2">
                Explore the Program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10"
            >
              <Link href="/apply" className="inline-flex items-center gap-2">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 shadow-[0_0_40px_rgba(0,194,245,0.15)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
              <Image
                src="/images/program-banner-image.jpg"
                alt="NEXT STAGE artist system"
                fill
                className="object-cover opacity-50 md:opacity-100"
                priority
                quality={90}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
