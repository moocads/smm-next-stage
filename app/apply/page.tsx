import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplyPageBody } from "@/components/apply/apply-page"

export const metadata: Metadata = {
  title: "Apply — NEXT STAGE",
  description:
    "Apply to NEXT STAGE. Submit your application as a singer, dancer, performer or creator.",
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <ApplyPageBody />
      <Footer />
    </main>
  )
}
