export const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@next_stage6?_r=1&_t=ZS-96etsLL5OoG",
  instagram:
    "https://www.instagram.com/nextstage_26?igsh=MWwzbmdqczVzeWZkeQ%3D%3D&utm_source=qr",
  youtube: "https://youtube.com/@smmentertainment-2026?si=ZgTrbQsQWksHFRb2",
  xiaohongshu: "https://xhslink.com/m/9aZ03XIT3ut",
} as const

export function getSocialHref(name: string): string | undefined {
  const key = name.toLowerCase()
  if (key.includes("tiktok")) return SOCIAL_LINKS.tiktok
  if (key.includes("instagram")) return SOCIAL_LINKS.instagram
  if (key.includes("youtube")) return SOCIAL_LINKS.youtube
  if (key.includes("xiaohongshu") || key.includes("小红书") || key.includes("rednote")) {
    return SOCIAL_LINKS.xiaohongshu
  }
  return undefined
}
