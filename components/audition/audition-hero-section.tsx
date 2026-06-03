"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuditionHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/audition-banner.jpg"
          alt="Audition stage banner"
          fill
          className="object-cover object-center opacity-50 md:object-right md:opacity-100"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#050816]/30 md:bg-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6 uppercase"
          >
            <span
              className="block text-white"
            >
              Your Audition
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(180deg, #7ee8ff 0%, #c77dff 55%, #f651c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Starts Here
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white mb-3 leading-relaxed"
          >
            Show us your voice, movement, presence and potential.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-white/60 max-w-lg mb-4 leading-relaxed"
          >
            For singers, dancers, performers and creators ready to grow into artists.
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
              className="rounded-full font-semibold px-8 text-white border-0"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #7b4dff 55%, #f651c8 100%)",
              }}
            >
              <Link href="#apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent hover:bg-white/10 text-white font-semibold px-8"
            >
              <Link href="#requirements" className="flex items-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                View Requirements
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
