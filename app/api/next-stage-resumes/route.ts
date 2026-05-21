import { NextResponse } from "next/server"
import { createNextStageResume, StrapiApiError, uploadStrapiFile } from "@/lib/strapi"

const MAX_FILE_BYTES = 2 * 1024 * 1024
const ALLOWED_FILE_TYPES = new Set(["image/jpeg", "image/png", "application/pdf"])

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const fullname = String(formData.get("fullname") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const city = String(formData.get("city") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const socialmedia = String(formData.get("socialmedia") ?? "").trim()
    const videolink = String(formData.get("videolink") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()
    const ageRaw = String(formData.get("age") ?? "").trim()
    const resumeFile = formData.get("resume")

    if (!fullname) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 })
    }
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 })
    }
    if (!phone) {
      return NextResponse.json({ error: "Phone is required." }, { status: 400 })
    }
    if (!socialmedia) {
      return NextResponse.json({ error: "Instagram / TikTok is required." }, { status: 400 })
    }

    let age: number | undefined
    if (ageRaw) {
      const parsed = Number(ageRaw)
      if (!Number.isFinite(parsed) || parsed < 1) {
        return NextResponse.json({ error: "Age must be a valid number." }, { status: 400 })
      }
      age = parsed
    }

    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json({ error: "Photos / portfolio file is required." }, { status: 400 })
    }
    if (resumeFile.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: "File must be 2MB or smaller." }, { status: 400 })
    }
    if (!ALLOWED_FILE_TYPES.has(resumeFile.type)) {
      return NextResponse.json({ error: "Only JPG, PNG, or PDF files are allowed." }, { status: 400 })
    }
    const resumeId = await uploadStrapiFile(resumeFile)

    const result = await createNextStageResume({
      fullname,
      email,
      city: city || undefined,
      phone,
      socialmedia,
      videolink: videolink || undefined,
      message: message || undefined,
      age,
      resume: resumeId,
    })

    return NextResponse.json({ ok: true, data: result }, { status: 201 })
  } catch (error) {
    if (error instanceof StrapiApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status })
    }
    const message = error instanceof Error ? error.message : "Submission failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
