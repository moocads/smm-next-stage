import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { loadAboutPageContent } from "@/components/about/about-page-body"
import { aboutNavHref } from "@/lib/about-nav-href"
import { getSocialHref } from "@/lib/social-links"
import { TikTokIcon } from "@/components/about/tiktok-icon"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function socialIcon(name: string) {
  const n = name.toLowerCase()
  if (n.includes("tiktok")) return <TikTokIcon className="h-5 w-5" />
  if (n.includes("instagram")) return <Instagram className="h-5 w-5" />
  if (n.includes("youtube")) return <Youtube className="h-5 w-5" />
  if (n.includes("xiaohongshu") || n.includes("小红书") || n.includes("rednote")) {
    return <Image src="/images/xiaohongshu.svg" alt="" width={20} height={20} className="h-5 w-5" aria-hidden />
  }
  if (n === "x" || n.includes("twitter")) return <XIcon className="h-5 w-5" />
  return null
}

export function Footer() {
  const { nav, social, copyright } = loadAboutPageContent().footer

  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-white shrink-0">
            NEXT STAGE
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {nav.map((label) => (
              <Link key={label} href={aboutNavHref(label)} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 text-gray-400">
            {social.map((name) => {
              const href = getSocialHref(name)
              if (!href) return null
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 transition-colors hover:bg-white/5 hover:text-white"
                  aria-label={name}
                >
                  {socialIcon(name)}
                </a>
              )
            })}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">{copyright}</p>
      </div>
    </footer>
  )
}
