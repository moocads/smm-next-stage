import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuditionHeroSection } from "./audition-hero-section"

const lookingFor = [
  { icon: "/images/audition-icon-01.png", title: "Singers / Vocalists" },
  { icon: "/images/audition-icon-02.png", title: "Dancers / Performers" },
  { icon: "/images/audition-icon-03.png", title: "Creators / Influencers" },
  { icon: "/images/audition-icon-04.png", title: "Trainees with Potential" },
]

const requirements = [
  { icon: "/images/audition-icon-05.png", title: "Age 16+ preferred" },
  { icon: "/images/audition-icon-06.png", title: "Canada / GTA priority" },
  { icon: "/images/audition-icon-07.png", title: "Submit one performance or self-introduction video" },
  { icon: "/images/audition-icon-08.png", title: "Open to training and content creation" },
]

const processSteps = [
  {
    number: "01",
    icon: "/images/audition-icon-09.png",
    title: "Submit",
    description: "Send in your application and video.",
    accent: "#6ee7ff",
    glow: "rgba(110, 231, 255, 0.55)",
    connectorFrom: "#6ee7ff",
    connectorTo: "#a78bfa",
    connectorDot: "#8f9dff",
    connectorGlow: "rgba(143, 157, 255, 0.85)",
  },
  {
    number: "02",
    icon: "/images/audition-icon-10.png",
    title: "Review",
    description: "Our team reviews your submission.",
    accent: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.55)",
    connectorFrom: "#a78bfa",
    connectorTo: "#f472b6",
    connectorDot: "#d08aff",
    connectorGlow: "rgba(208, 138, 255, 0.85)",
  },
  {
    number: "03",
    icon: "/images/audition-icon-11.png",
    title: "Callback",
    description: "Selected applicants will be contacted.",
    accent: "#f472b6",
    glow: "rgba(244, 114, 182, 0.55)",
    connectorFrom: "#f472b6",
    connectorTo: "#fb7185",
    connectorDot: "#ff7eb8",
    connectorGlow: "rgba(255, 126, 184, 0.85)",
  },
  {
    number: "04",
    icon: "/images/audition-icon-12.png",
    title: "Start Training",
    description: "Begin your journey with NEXT STAGE.",
    accent: "#fb7185",
    glow: "rgba(251, 113, 133, 0.55)",
  },
]

const faq = [
  {
    question: "Can I apply if I have no experience?",
    answer:
      "Yes. We welcome beginners with strong potential, discipline and commitment. Show us your personality and willingness to grow.",
  },
  {
    question: "Do I need professional materials?",
    answer:
      "No studio-level production is required. A clear phone video with good lighting and sound is enough for the first review.",
  },
  {
    question: "Can I apply from outside Toronto?",
    answer:
      "Yes. We accept submissions from outside Toronto. Candidates based in Canada and the GTA are currently prioritized.",
  },
]

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-center text-xl md:text-3xl tracking-[0.28em] text-white/90 uppercase mb-10">{children}</h2>
}

export function AuditionPageBody() {
  return (
    <>
      <AuditionHeroSection />

      <section className="py-16 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>WHO WE ARE LOOKING FOR</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lookingFor.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/15 bg-[#000012] p-4 text-center">
                <Image src={item.icon} alt={item.title} width={160} height={160} className="mx-auto mb-6 h-[160px] w-[160px]" />
                <p className="text-white text-3xl leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-10 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>AUDITION REQUIREMENTS</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {requirements.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/15 bg-[#090d23] p-6 text-center">
                <Image src={item.icon} alt={item.title} width={160} height={160} className="mx-auto mb-6 h-[160px] w-[160px]" />
                <p className="text-white text-3xl leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>AUDITION PROCESS</SectionTitle>
          <ol className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="audition-process-step relative text-center"
                style={
                  step.connectorFrom
                    ? ({
                        ["--connector-from" as string]: step.connectorFrom,
                        ["--connector-to" as string]: step.connectorTo,
                        ["--connector-dot" as string]: step.connectorDot,
                        ["--connector-glow" as string]: step.connectorGlow,
                      } as CSSProperties)
                    : undefined
                }
              >
                <p
                  className="mb-4 font-heading text-5xl font-bold leading-none"
                  style={{
                    color: step.accent,
                    textShadow: `0 0 28px ${step.glow}`,
                  }}
                >
                  {step.number}
                </p>

                <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 32px ${step.glow}` }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 bg-[#050816]/80"
                    style={{
                      borderColor: step.accent,
                      boxShadow: `0 0 20px ${step.glow}, inset 0 0 16px ${step.glow}`,
                    }}
                  >
                    <Image src={step.icon} alt={step.title} width={56} height={56} className="h-14 w-14 object-contain" />
                  </div>
                </div>

                <h3 className="mb-2 text-3xl font-semibold text-white">{step.title}</h3>
                <p className="text-lg leading-relaxed text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 bg-[#050816]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>FAQ</SectionTitle>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="group rounded-xl border border-white/15 bg-[#0a0f27] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-white text-2xl">
                  {item.question}
                  <Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-white/70 text-lg leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="relative py-20 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8 sm:p-12 lg:p-16">
            <Image src="/images/footer-banner.png" alt="Concert crowd" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#050816]/45" />
            <div className="relative text-center">
              <h3 className="font-heading text-5xl md:text-6xl font-bold mb-4">
                <span className="text-cyan-300">Ready for </span>
                <span className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">your next stage?</span>
              </h3>
              <p className="text-white/85 text-2xl mb-8">Apply now and let us discover your potential.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="font-semibold px-8 text-white border-0" style={{ background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)" }}>
                  <Link href="#">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent hover:bg-white/10 text-white px-8">
                  <Link href="#" className="inline-flex items-center gap-2">Contact Us <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
