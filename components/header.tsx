"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Audition", href: "/#audition" },
  { label: "Program", href: "/#process" },
  { label: "Apply", href: "/#apply" },
]

function linkClassName(href: string, pathname: string | null) {
  const active =
    href === "/about"
      ? pathname === "/about"
      : href === "/"
        ? pathname === "/"
        : false
  return active
    ? "text-sm font-medium text-white transition-colors"
    : "text-sm font-medium text-gray-400 hover:text-white transition-colors"
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-4xl font-extrabold text-white tracking-tight">
              SMM <span className="font-normal text-xl text-white underline">ENTERTAINMENT</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={linkClassName(item.href, pathname)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="font-semibold px-6 text-white border-0"
              style={{
                background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)",
              }}
            >
              <Link href="/#apply">Apply Now</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a12] border-b border-gray-800"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${linkClassName(item.href, pathname)} py-2`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="font-semibold w-full mt-2 text-white border-0"
                style={{
                  background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)",
                }}
              >
                <Link href="/#apply" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
