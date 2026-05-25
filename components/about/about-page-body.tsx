import fs from "node:fs"
import path from "node:path"
import { cache } from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe2, Music, Camera, Crown, Globe, Star, Clapperboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TikTokIcon } from "./tiktok-icon"

export interface AboutPageData {
  navigation: string[]
  hero: {
    title: string
    lead: string
    body: string
    chineseLabel: string
    primaryCta: string
    secondaryCta: string
  }
  why: {
    title: string
    subtitle: string
    cards: { title: string; description: string; img: string }[]
  }
  quote: { line1: string; line2: string }
  advantage: {
    title: string
    cards: { title: string; bullets: string[] }[]
  }
  powered: {
    title: string
    items: string[]
  }
  cta: {
    title: string
    body: string
    primaryCta: string
    secondaryCta: string
  }
  footer: {
    nav: string[]
    social: string[]
    copyright: string
  }
}

function stripBold(s: string) {
  return s.replace(/^\*\*|\*\*$/g, "").trim()
}

function parseListAfterHeading(block: string, heading: string): string[] {
  const lines = block.split("\n")
  const start = lines.findIndex((l) => l.trim() === heading)
  if (start === -1) return []
  const items: string[] = []
  for (let j = start + 1; j < lines.length; j++) {
    const t = lines[j].trim()
    if (!t) continue
    if (t.startsWith("## ") || t.startsWith("©")) break
    if (t.startsWith("- ")) items.push(t.slice(2).trim())
  }
  return items
}

export const loadAboutPageContent = cache((): AboutPageData => {
  const fullPath = path.join(process.cwd(), "public", "about-page-content")
  if (!fs.existsSync(fullPath)) {
    throw new Error(
      "Missing public/about-page-content. Ensure this file is committed and deployed.",
    )
  }
  const raw = fs.readFileSync(fullPath, "utf8")
  const sections = raw.split(/\n---\n/).map((s) => s.trim())

  const navSection = sections[0] ?? ""
  const navigation = parseListAfterHeading(navSection, "## Navigation").filter((l) => l !== "Apply Now")

  const heroBlock = sections[1] ?? ""
  const heroLines = heroBlock.split("\n").map((l) => l.trim())
  let heroTitle = "ABOUT NEXT STAGE"
  let lead = ""
  let body = ""
  let chineseLabel = ""
  let primaryCta = "Apply Now"
  let secondaryCta = "View Program"
  const bodyParts: string[] = []
  for (let i = 0; i < heroLines.length; i++) {
    const line = heroLines[i]
    if (!line) continue
    if (line.startsWith("# ")) {
      heroTitle = line.slice(2).trim()
      continue
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      const inner = stripBold(line)
      if (inner.includes("关于")) chineseLabel = inner
      else if (!lead) lead = inner
      continue
    }
    if (line.startsWith("[") && line.includes("]")) {
      const m = line.match(/\[([^\]]+)\]\s*\[([^\]]+)\]/)
      if (m) {
        primaryCta = m[1]
        secondaryCta = m[2]
      }
      continue
    }
    if (line && !line.startsWith("#")) bodyParts.push(line)
  }
  body = bodyParts.join(" ").trim()

  const whyBlock = sections[2] ?? ""
  const whyLines = whyBlock.split("\n")
  let whyTitle = "WHY NEXT STAGE"
  let whySubtitle = ""
  const whyCards: { title: string; description: string; img: string }[] = []
  let currentCard: { title: string; description: string; img: string } | null = null
  for (const rawLine of whyLines) {
    const line = rawLine.trim()
    if (!line) continue
    if (line.startsWith("# ") && !line.startsWith("##")) {
      whyTitle = line.slice(2).trim()
      continue
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      whySubtitle = stripBold(line)
      continue
    }
    if (line.startsWith("## ")) {
      if (currentCard) whyCards.push(currentCard)
      currentCard = {
        title: line.slice(3).trim(),
        description: "",
        img: "/images/about-tiktok-partner.png",
      }
      continue
    }
    if (currentCard && !line.startsWith("#")) {
      currentCard.description = currentCard.description
        ? `${currentCard.description} ${line}`
        : line
    }
  }
  if (currentCard) whyCards.push(currentCard)

  const whyCardImages = [
    "/images/about-tiktok-partner.png",
    "/images/about-global-network.png",
    "/images/about-international-distribution.png",
    "/images/about-powerful-resource.png",
  ]
  const whyCardsResolved = whyCards.map((c, i) => ({
    ...c,
    img: whyCardImages[i] ?? c.img,
  }))

  const quoteBlock = sections[3] ?? ""
  const quoteLines = quoteBlock
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("# "))
  const line1 = quoteLines[0]?.replace(/^#\s*/, "").trim() ?? ""
  const line2 = quoteLines[1]?.replace(/^#\s*/, "").trim() ?? ""

  const advBlock = sections[4] ?? ""
  const advLines = advBlock.split("\n")
  let advTitle = "OUR ADVANTAGE"
  const advCards: { title: string; bullets: string[] }[] = []
  let curAdv: { title: string; bullets: string[] } | null = null
  for (const rawLine of advLines) {
    const line = rawLine.trim()
    if (!line) continue
    if (line.startsWith("# ") && !line.startsWith("##")) {
      advTitle = line.slice(2).trim()
      continue
    }
    if (line.startsWith("## ")) {
      if (curAdv) advCards.push(curAdv)
      curAdv = { title: line.slice(3).trim(), bullets: [] }
      continue
    }
    if (line.startsWith("- ") && curAdv) {
      curAdv.bullets.push(line.slice(2).trim())
    }
  }
  if (curAdv) advCards.push(curAdv)

  const powBlock = sections[5] ?? ""
  const powLines = powBlock.split("\n").map((l) => l.trim())
  let powTitle = "POWERED BY RESOURCES"
  const powItems: string[] = []
  for (const line of powLines) {
    if (!line) continue
    if (line.startsWith("# ") && !line.startsWith("##")) {
      powTitle = line.slice(2).trim()
      continue
    }
    if (line.startsWith("- ")) powItems.push(line.slice(2).trim())
  }

  const ctaBlock = sections[6] ?? ""
  const ctaLines = ctaBlock.split("\n").map((l) => l.trim())
  let ctaTitle = ""
  const ctaBodyLines: string[] = []
  let ctaPrimary = "Apply Now"
  let ctaSecondary = "Contact Us"
  for (const line of ctaLines) {
    if (!line) continue
    if (line.startsWith("# ")) {
      ctaTitle = line.slice(2).trim()
      continue
    }
    if (line.startsWith("[") && line.includes("]")) {
      const m = line.match(/\[([^\]]+)\]\s*\[([^\]]+)\]/)
      if (m) {
        ctaPrimary = m[1]
        ctaSecondary = m[2]
      }
      continue
    }
    if (!line.startsWith("#")) ctaBodyLines.push(line)
  }
  const ctaBody = ctaBodyLines.join(" ").trim()

  const footBlock = sections[7] ?? ""
  const footerNav = parseListAfterHeading(footBlock, "## Footer Navigation")
  const footerSocial = parseListAfterHeading(footBlock, "## Social")
  const copyrightLine =
    footBlock
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l.startsWith("©")) ?? "© NEXT STAGE ENTERTAINMENT. All rights reserved."

  return {
    navigation: navigation.length ? navigation : ["Home", "Audition", "Program", "Apply", "About"],
    hero: {
      title: heroTitle,
      lead,
      body,
      chineseLabel,
      primaryCta,
      secondaryCta,
    },
    why: {
      title: whyTitle,
      subtitle: whySubtitle,
      cards: whyCardsResolved,
    },
    quote: { line1, line2 },
    advantage: {
      title: advTitle,
      cards: advCards,
    },
    powered: {
      title: powTitle,
      items: powItems,
    },
    cta: {
      title: ctaTitle,
      body: ctaBody,
      primaryCta: ctaPrimary,
      secondaryCta: ctaSecondary,
    },
    footer: {
      nav: footerNav.length ? footerNav : ["Home", "Audition", "Program", "Apply", "About"],
      social: footerSocial.length ? footerSocial : ["TikTok", "Instagram", "YouTube", "小红书"],
      copyright: copyrightLine,
    },
  }
})

const gradientText = {
  background: "linear-gradient(90deg, #c4b5fd 0%, #ff4cc8 55%, #00c2f5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const

const gradientBtn =
  "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)" as const

const advantageIcons = [
  { label: "TikTok Ecosystem Access", img: "/images/about-tiktok-partner.png" },
  { label: "International Industry Reach", img: "/images/about-global-network.png" },
  { label: "Distribution & Exposure", img: "/images/tiktok-partner.png" },
  { label: "Real Production Capability", img: "/images/about-advantages.png" }
] as const

const poweredIcons = [
 { label: "Music", img: "/images/about-music.png" },
 { label: "Visuals", img: "/images/about-visuals.png" },
 { label: "Branding", img: "/images/about-branding.png" },
 { label: "Distribution", img: "/images/about-distribution.png" },
 { label: "Opportunities", img: "/images/about-opportunities.png" },
]

function QuoteBlock({ line1, line2 }: { line1: string; line2: string }) {
  const highlight = (sentence: string, phrase: string) => {
    const idx = sentence.toLowerCase().indexOf(phrase.toLowerCase())
    if (idx === -1) return <>{sentence}</>
    const before = sentence.slice(0, idx)
    const mid = sentence.slice(idx, idx + phrase.length)
    const after = sentence.slice(idx + phrase.length)
    return (
      <>
        {before}
        <span style={gradientText} className="[text-fill-color:transparent]">
          {mid}
        </span>
        {after}
      </>
    )
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#a855f7]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent hidden sm:block" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
          {highlight(line1, "discover talent")}
        </p>
        <p className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
          {highlight(line2, "opportunity")}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent mt-20" />
    </section>
  )
}

export function AboutPageBody({ data }: { data: AboutPageData }) {
  const powered =
    data.powered.items.length >= 5
      ? data.powered.items
      : ["Music", "Visuals", "Branding", "Distribution", "Opportunities"]

  return (
    <>
      <section className="py-20 sm:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
              {data.why.title}
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">{data.why.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.why.cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-[#0d0d12]/90 p-6 shadow-[0_0_32px_-12px_rgba(168,85,247,0.35)] hover:border-[#00c2f5]/40 transition-colors flex flex-col items-center justify-start"
              >
                <Image src={card.img} alt={card.title} width={200} height={200} className="object-contain" />
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-md text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black">
        <QuoteBlock line1={data.quote.line1} line2={data.quote.line2} />
      </div>

      <section className="py-20 sm:py-28 bg-[#050508]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-center text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase mb-14">
            {data.advantage.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.advantage.cards.map((card, i) => (
              <div
                key={card.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#0d0d12]/90 p-6 sm:p-8 hover:border-[#ff4cc8]/25 transition-colors"
              >
                <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#00c2f5]/15 to-[#ff4cc8]/10 text-[#93c5fd]">
                  <Image src={advantageIcons[i].img} alt={advantageIcons[i].label} width={200} height={200} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{card.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-lg text-white">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-[#00c2f5] to-[#ff4cc8]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-black border-y border-white/5 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h2 className="font-heading text-center text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase mb-14">
            {data.powered.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-10 sm:gap-14 md:gap-16 border border-[#00c2f5]/40 p-16 rounded-2xl">
            {powered.map((label, i) => (
              <div key={`${label}-${i}`} className="flex flex-col items-center gap-4 w-[100px] sm:w-[120px] ">
                <div
                  className="flex items-center justify-center rounded-2xl text-[#7dd3fd] bg-[#00c2f5]/5"
                >
                  <Image src={poweredIcons[i].img} alt={poweredIcons[i].label} width={200} height={200} className="object-contain" />
                </div>
                <span className="text-lg font-bold text-white text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundImage: "url('/images/footer-banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.5] text-white text-balance">
            {data.cta.title}
          </h2>
          <p className="mt-6 text-white text-lg sm:text-lg leading-relaxed">{data.cta.body}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full font-semibold px-8 text-white border-0"
              style={{ background: gradientBtn }}
            >
              <Link href="/#apply">{data.cta.primaryCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-semibold px-8 border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="#">{data.cta.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
