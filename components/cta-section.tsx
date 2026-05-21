"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="apply" className="relative py-20 sm:py-28 overflow-hidden bg-[#0a0a12]" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#12121a] border border-gray-800 p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          {/* Crowd silhouette background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ff4cc8]/20 via-[#1c5bd1]/10 to-transparent" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Next Stage-entertainment-banner-ZQsbgRGnXQRsuE62mEVXy2ISKMwCcg.png"
              alt=""
              fill
              className="object-cover object-bottom opacity-10"
            />
          </div>

          {/* Subtle glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff4cc8]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00c2f5]/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance"
                style={{
                  background: "linear-gradient(90deg, #00c2f5 0%, #ff4cc8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready for your next stage?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Submit your application and audition material to join the NEXT STAGE program.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <Link href="#" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 bg-transparent hover:bg-gray-800/50 text-white font-semibold px-8"
              >
                <Link href="#" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
