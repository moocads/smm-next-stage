import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TalentSection } from "@/components/talent-section"
import { ProcessSection } from "@/components/process-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TalentSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
