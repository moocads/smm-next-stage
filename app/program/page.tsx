import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgramPageBody } from "@/components/program/program-page"

export const metadata: Metadata = {
  title: "Program — NEXT STAGE",
  description:
    "Your path to becoming an artist. NEXT STAGE builds a full artist development system — music, performance, visuals, branding, distribution, and growth.",
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <ProgramPageBody />
      <Footer />
    </main>
  )
}
