import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about/about-hero-section"
import { loadAboutPageContent, AboutPageBody } from "@/components/about/about-page-body"

export const metadata: Metadata = {
  title: "About NEXT STAGE — NEXT STAGE",
  description:
    "Built to launch the next generation of artists. A performance-driven platform powered by content, music, distribution and global connections.",
}

function splitHeadline(pageTitle: string) {
  const words = pageTitle.trim().split(/\s+/)
  if (words.length <= 1) {
    return { line1: pageTitle, line2: pageTitle }
  }
  return { line1: words[0]!, line2: words.slice(1).join(" ") }
}

export default function AboutPage() {
  const data = loadAboutPageContent()
  const { line1, line2 } = splitHeadline(data.hero.title)

  return (
    <main className="min-h-screen bg-[#0a0a12] text-white">
      <Header />
      <AboutHeroSection
        headlineLine1={line1}
        headlineLine2={line2}
        eyebrow={data.hero.lead}
        description={data.hero.body}
        chineseLine={data.hero.chineseLabel}
        primaryCta={{ label: data.hero.primaryCta, href: "/apply" }}
        secondaryCta={{ label: data.hero.secondaryCta, href: "/#process" }}
      />
      <AboutPageBody data={data} />
      <Footer />
    </main>
  )
}
