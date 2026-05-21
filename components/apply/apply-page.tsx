import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, MapPin, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ApplyApplicationSection } from "./apply-application-section"
import { ApplyHeroSection } from "./apply-hero-section"

const whoCanApply = [
  { icon: "/images/audition-icon-01.png", title: "Singers / Vocalists" },
  { icon: "/images/audition-icon-02.png", title: "Dancers / Performers" },
  { icon: "/images/audition-icon-03.png", title: "Creators / Influencers" },
  { icon: "/images/audition-icon-04.png", title: "Trainees with Potential" },
]

const whoCanApplyNotes = [
  { icon: User, text: "Age 16+ preferred" },
  { icon: MapPin, text: "Canada / GTA priority" },
  { icon: Globe, text: "Online submissions welcome" },
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
  return (
    <h2 className="mb-10 text-center text-xl uppercase tracking-[0.28em] text-white/90 md:text-3xl">{children}</h2>
  )
}

function WhoCanApplyTitle() {
  return (
    <div className="mb-10 flex items-center justify-center gap-4">
      <span className="hidden h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-cyan-400/60 sm:block" />
      <h2 className="text-center text-xl uppercase tracking-[0.28em] text-white/90 md:text-3xl">Who Can Apply</h2>
      <span className="hidden h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-pink-400/60 sm:block" />
    </div>
  )
}

export function ApplyPageBody() {
  return (
    <>
      <ApplyHeroSection />
      <ApplyApplicationSection />

      <section id="who-can-apply" className="py-16 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WhoCanApplyTitle />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whoCanApply.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#000012]/80 p-4 text-center shadow-[0_0_24px_rgba(0,194,245,0.08)]"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="mx-auto mb-6 h-[140px] w-[140px] object-contain"
                />
                <p className="text-2xl leading-tight text-white lg:text-3xl">{item.title}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
            {whoCanApplyNotes.map((note) => (
              <li key={note.text} className="flex items-center gap-2 text-white/65">
                <note.icon className="h-5 w-5 text-cyan-300/80" />
                <span className="text-base sm:text-lg">{note.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="py-16 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>What Happens Next</SectionTitle>
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
                  <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 32px ${step.glow}` }} aria-hidden />
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
                <summary className="flex cursor-pointer list-none items-center justify-between text-2xl text-white">
                  {item.question}
                  <Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-lg leading-relaxed text-white/70">{item.answer}</p>
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
              <h3 className="mb-4 font-heading text-5xl font-bold text-white md:text-6xl">Your next stage starts here.</h3>
              <p className="mb-8 text-2xl text-white/85">
                Submit your application and let us discover your potential.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="border-0 px-8 font-semibold text-white"
                  style={{ background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)" }}
                >
                  <Link href="#application-form" className="inline-flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent px-8 text-white hover:bg-white/10">
                  <Link href="#" className="inline-flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
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
