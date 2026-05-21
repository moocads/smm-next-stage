import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuditionPageBody } from "@/components/audition/audition-page"

export const metadata: Metadata = {
  title: "Audition — NEXT STAGE",
  description:
    "Your audition starts here. Apply to NEXT STAGE as a singer, dancer, performer or creator.",
}

export default function AuditionPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <AuditionPageBody />
      <Footer />
    </main>
  )
}
