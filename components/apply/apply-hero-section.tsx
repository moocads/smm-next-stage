"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ApplyHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/audition-banner.png"
          alt="NEXT STAGE apply banner"
          fill
          className="object-cover object-center md:object-right"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-[#050816]/30 md:bg-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/90 sm:text-base"
          >
            Start Your Journey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-heading text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #7ee8ff 0%, #c77dff 50%, #f651c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Apply to
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, #7ee8ff 0%, #c77dff 50%, #f651c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Next Stage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 max-w-lg text-lg leading-relaxed text-white sm:text-xl"
          >
            For singers, dancers, performers and creators ready to grow into artists.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 text-base text-[#c9b8ff] sm:text-lg"
          >
            报名申请页面
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full border-0 px-8 font-semibold text-white"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #7b4dff 55%, #f651c8 100%)",
              }}
            >
              <Link href="#application-form" className="inline-flex items-center gap-2">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent px-8 font-semibold text-white hover:bg-white/10"
            >
              <Link href="#who-can-apply" className="inline-flex items-center gap-2">
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
