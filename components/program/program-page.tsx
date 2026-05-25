import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Camera,
  ChevronRight,
  Globe,
  MessageCircle,
  Music,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProgramHeroSection } from "./program-hero-section"

const whatYouGet = [
  {
    number: "01",
    title: "ORIGINAL MUSIC CREATION",
    titleCn: "原创音乐制作打造",
    icon: Music,
    accent: "border-cyan-400/40 shadow-[0_0_24px_rgba(0,194,245,0.12)]",
    bullets: [
      "Signature song tailored to your style",
      "International arrangement and production",
      "Create your first defining track",
    ],
    tagline: "Not just making songs — defining your sound.",
  },
  {
    number: "02",
    title: "PERFORMANCE & CHOREOGRAPHY",
    titleCn: "舞台表演与舞蹈设计",
    icon: User,
    accent: "border-purple-400/40 shadow-[0_0_24px_rgba(167,139,250,0.12)]",
    bullets: [
      "Custom choreography for your concept",
      "Camera performance training",
      "Build strong stage presence",
    ],
    tagline: "Not just learning moves — building stage presence.",
  },
  {
    number: "03",
    title: "VISUAL PRODUCTION",
    titleCn: "视觉内容打造",
    icon: Camera,
    accent: "border-pink-400/40 shadow-[0_0_24px_rgba(244,114,182,0.12)]",
    bullets: [
      "High-quality MV production",
      "Poster & visual campaign shoots",
      "Short-form content system",
    ],
    tagline: "Not just shooting videos — shaping your visual identity.",
  },
  {
    number: "04",
    title: "ARTIST BRANDING",
    titleCn: "艺人形象与定位",
    icon: Sparkles,
    accent: "border-cyan-400/35 shadow-[0_0_24px_rgba(0,194,245,0.1)]",
    bullets: [
      "Personal style positioning",
      "Persona & content direction",
      "Unified social media image",
    ],
    tagline: "Not just packaging — building your IP.",
  },
  {
    number: "05",
    title: "GLOBAL MUSIC DISTRIBUTION",
    titleCn: "全球音乐发行",
    icon: Globe,
    accent: "border-purple-400/35 shadow-[0_0_24px_rgba(167,139,250,0.1)]",
    bullets: [
      "Distribute to Apple Music, Spotify, QQ Music",
      "Reach global audiences",
      "TikTok / 小红书 / YouTube track distribution",
    ],
    tagline: "Not just uploading — defining the market.",
  },
  {
    number: "06",
    title: "CONTENT & PLATFORM GROWTH",
    titleCn: "内容运营与平台增长",
    icon: TrendingUp,
    accent: "border-pink-400/35 shadow-[0_0_24px_rgba(244,114,182,0.1)]",
    bullets: [
      "TikTok launch strategy",
      "Short-form content planning",
      "Data-driven testing + optimization",
    ],
    tagline: "Not just posting videos — getting discovered.",
  },
  {
    number: "07",
    title: "COMMERCIAL OPPORTUNITIES",
    titleCn: "商业管理与合作",
    icon: Briefcase,
    accent: "border-cyan-400/30 shadow-[0_0_24px_rgba(0,194,245,0.08)]",
    bullets: [
      "Brand collaborations",
      "Advertising shoots",
      "Livestreams & event opportunities",
    ],
    tagline: "Not just taking gigs — starting to earn as an artist.",
  },
]

const incubationSteps = [
  {
    number: "01",
    title: "Artist Evaluation",
    titleCn: "评估",
    description:
      "We evaluate your talent, potential, and goals to build a personalized development roadmap.",
  },
  {
    number: "02",
    title: "Identity & Positioning",
    titleCn: "定位",
    description:
      "Define your unique identity, concept, and positioning that stands out in the global market.",
  },
  {
    number: "03",
    title: "Music & Content Creation",
    titleCn: "内容",
    description: "Create original music and high-quality content that brings your vision to life.",
  },
  {
    number: "04",
    title: "Release & Growth",
    titleCn: "发行与增长",
    description: "Launch your music, expand your audience, and grow your presence across key platforms.",
  },
  {
    number: "05",
    title: "Monetization",
    titleCn: "商业化",
    description: "Unlock commercial opportunities and build sustainable income as an artist.",
  },
]

const platformPartners = [
  { name: "Apple Music", icon: "/images/partner-icon/apple_music_logo.png" },
  { name: "Spotify", icon: "/images/partner-icon/spotify.png" },
  { name: "QQ Music", icon: "/images/partner-icon/qq_music.png" },
  { name: "TikTok", icon: "/images/partner-icon/tiktok.png" },
  { name: "Tencent Music", icon: "/images/partner-icon/tencent_music.png" },
  { name: "YouTube", icon: "/images/partner-icon/youtube_logo.png" },
]

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2
        className="font-heading text-2xl font-bold uppercase tracking-[0.2em] sm:text-3xl"
        style={{
          background: "linear-gradient(90deg, #7ee8ff 0%, #c77dff 50%, #f651c8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

export function ProgramPageBody() {
  return (
    <>
      <ProgramHeroSection />

      <section className="py-14 sm:py-20 bg-[#050816]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-purple-400/25 bg-[#0a0f27]/80 px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <Image src="/images/audition-banner.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative flex gap-4">
              <span className="font-serif text-5xl leading-none text-cyan-300/80">&ldquo;</span>
              <p className="font-heading text-xl font-semibold leading-relaxed text-white sm:text-2xl lg:text-3xl">
                We don&apos;t just produce content. We build artists from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="py-16 sm:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What You Get"
            subtitle="Everything you need to turn raw potential into an artist-ready identity."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatYouGet.slice(0, 4).map((item) => (
              <WhatYouGetCard key={item.number} item={item} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.slice(4).map((item) => (
              <WhatYouGetCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="incubation-path" className="py-16 sm:py-20 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Incubation Path" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-4">
            {incubationSteps.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-stretch gap-2 lg:gap-3">
                <div className="flex flex-1 flex-col rounded-xl border border-white/10 bg-[#0a0f27]/80 p-5">
                  <p className="text-sm font-bold text-cyan-300">{step.number}</p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-[#c9b8ff]">{step.titleCn}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
                {index < incubationSteps.length - 1 ? (
                  <div className="hidden shrink-0 items-center lg:flex">
                    <ChevronRight className="h-6 w-6 text-cyan-400/70" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-black border-y border-white/5">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Distributed to Global Platforms" />
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16">
            {platformPartners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src={partner.icon}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="h-18 w-auto max-w-[280px] object-contain sm:h-16"
                  />
                </div>
                {/* <span className="text-center text-sm font-medium text-white/85 sm:text-base">{partner.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8 sm:p-12 lg:p-16">
            <Image src="/images/footer-banner.png" alt="Concert crowd" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#050816]/50" />
            <div className="relative text-center">
              <h3 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Start your artist{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
                  journey
                </span>{" "}
                with NEXT STAGE
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
                Your talent deserves the right stage. Take the next step and let&apos;s build your future together.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border-0 px-8 font-semibold text-white"
                  style={{
                    background: "linear-gradient(90deg, #00c2f5 0%, #7b4dff 55%, #f651c8 100%)",
                  }}
                >
                  <Link href="/apply" className="inline-flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/35 bg-transparent px-8 text-white hover:bg-white/10"
                >
                  <Link href="#" className="inline-flex items-center gap-2">
                    Talk to Us
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function WhatYouGetCard({
  item,
}: {
  item: (typeof whatYouGet)[number]
}) {
  const Icon = item.icon
  return (
    <article
      className={`flex h-full flex-col rounded-xl border bg-[#0a0f27]/90 p-5 ${item.accent}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-lg font-bold text-cyan-300/90">{item.number}</span>
        <Icon className="h-5 w-5 text-purple-300/80" />
      </div>
      <h3 className="mt-3 font-heading text-sm font-bold leading-tight text-white sm:text-base">{item.title}</h3>
      <p className="mt-1 text-xs text-[#c9b8ff] sm:text-sm">{item.titleCn}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm text-white/70">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-pink-400" />
            {bullet}
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-white/10 pt-4 text-xs italic text-white/55 sm:text-sm">{item.tagline}</p>
    </article>
  )
}
