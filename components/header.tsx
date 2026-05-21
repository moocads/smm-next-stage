"use client"

import "./header-nav.css"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Audition", href: "/audition" },
  { label: "Apply", href: "/apply" },
  { label: "About", href: "/about" },
]

function isNavActive(href: string, pathname: string | null) {
  if (href.startsWith("/#")) return false
  if (href === "/") return pathname === "/"
  return pathname === href || pathname?.startsWith(`${href}/`)
}

function NavLink({
  href,
  label,
  pathname,
  onClick,
  className,
}: {
  href: string
  label: string
  pathname: string | null
  onClick?: () => void
  className?: string
}) {
  const active = isNavActive(href, pathname)

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "relative inline-block pb-1.5 text-sm font-medium transition-colors",
        active ? "text-white" : "text-gray-400 hover:text-white",
        className ?? "",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
      {active ? (
        <>
          <span aria-hidden className="nav-active-glow" />
          <span aria-hidden className="nav-active-beam" />
        </>
      ) : null}
    </Link>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-visible border-b border-gray-800/50 bg-[#0a0a12]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/next-stage-logo.png" alt="Next Stage" width={400} height={100} />
          </Link>

          <nav className="hidden items-center gap-8 overflow-visible md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} label={item.label} pathname={pathname} />
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
              <Link href="/apply">Apply Now</Link>
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
                <NavLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                  className="py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              <Button
                asChild
                className="font-semibold w-full mt-2 text-white border-0"
                style={{
                  background: "linear-gradient(90deg, #00c2f5 0%, #1c5bd1 50%, #f651c8 100%)",
                }}
              >
                <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
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
