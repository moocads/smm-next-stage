"use client"

import type { ChangeEvent, ComponentType, FormEvent, ReactNode } from "react"
import { useRef, useState } from "react"
import {
  ArrowRight,
  AtSign,
  Calendar,
  Check,
  CloudUpload,
  Link2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  User,
  Video,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const fieldClass =
  "h-11 border-white/15 bg-[#0a0f27]/80 text-white placeholder:text-white/35 focus-visible:border-cyan-400/50 focus-visible:ring-cyan-400/20"

const MAX_FILE_BYTES = 2 * 1024 * 1024
const ACCEPTED_FILE_TYPES = "image/jpeg,image/png,application/pdf"

const talentLabels: Record<string, string> = {
  singer: "Singer / Vocalist",
  dancer: "Dancer / Performer",
  creator: "Creator / Influencer",
  trainee: "Trainee with Potential",
  other: "Other",
}

const prepareItems = [
  {
    icon: User,
    title: "Basic Profile",
    description: "Complete your personal details and contact info.",
  },
  {
    icon: Video,
    title: "Performance Video",
    description: "One clear video that shows your talent and personality.",
  },
  {
    icon: AtSign,
    title: "Social Links",
    description: "Share your Instagram or TikTok so we can learn more about you.",
  },
  {
    icon: CloudUpload,
    title: "Optional Photos",
    description: "Add portfolio images if you have them.",
  },
  {
    icon: Calendar,
    title: "Availability Info",
    description: "Let us know your schedule and location.",
  },
]

const initialForm = {
  fullname: "",
  age: "",
  city: "",
  email: "",
  phone: "",
  talentCategory: "",
  socialmedia: "",
  videolink: "",
  message: "",
}

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string
  children: ReactNode
  required?: boolean
}) {
  return (
    <Label htmlFor={htmlFor} className="text-sm text-white/80">
      {children}
      {required ? <span className="ml-0.5 text-red-500">*</span> : null}
    </Label>
  )
}

function FormField({
  id,
  label,
  icon: Icon,
  required = false,
  children,
}: {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
  required?: boolean
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        {children}
      </div>
    </div>
  )
}

export function ApplyApplicationSection() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState(initialForm)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) {
      setResumeFile(null)
      return
    }
    if (file.size > MAX_FILE_BYTES) {
      toast.error("File must be 2MB or smaller.")
      event.target.value = ""
      return
    }
    if (!ACCEPTED_FILE_TYPES.split(",").includes(file.type)) {
      toast.error("Only JPG, PNG, or PDF files are allowed.")
      event.target.value = ""
      return
    }
    setResumeFile(file)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.fullname.trim()) {
      toast.error("Please enter your full name.")
      return
    }
    if (!form.email.trim()) {
      toast.error("Please enter your email.")
      return
    }
    if (!form.phone.trim()) {
      toast.error("Please enter your phone number.")
      return
    }
    if (!form.talentCategory) {
      toast.error("Please select a talent category.")
      return
    }
    if (!form.socialmedia.trim()) {
      toast.error("Please enter your Instagram or TikTok.")
      return
    }
    if (!resumeFile) {
      toast.error("Please upload your photos or portfolio.")
      return
    }

    const payload = new FormData()
    payload.append("fullname", form.fullname.trim())
    payload.append("email", form.email.trim())
    if (form.city.trim()) payload.append("city", form.city.trim())
    if (form.phone.trim()) payload.append("phone", form.phone.trim())
    if (form.age.trim()) payload.append("age", form.age.trim())
    if (form.socialmedia.trim()) payload.append("socialmedia", form.socialmedia.trim())
    if (form.videolink.trim()) payload.append("videolink", form.videolink.trim())

    const talentLabel = form.talentCategory ? talentLabels[form.talentCategory] : ""
    const messageParts = [
      talentLabel ? `Talent category: ${talentLabel}` : "",
      form.message.trim(),
    ].filter(Boolean)
    if (messageParts.length) payload.append("message", messageParts.join("\n\n"))

    payload.append("resume", resumeFile)

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/next-stage-resumes", {
        method: "POST",
        body: payload,
      })
      const result = (await response.json()) as { error?: string }
      if (!response.ok) {
        throw new Error(result.error ?? "Failed to submit application.")
      }

      toast.success("Application submitted successfully!")
      setForm(initialForm)
      setResumeFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit application.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="application-form" className="py-16 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
          <div className="rounded-2xl border border-white/10 bg-[#0a0f27]/60 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-white sm:text-3xl">
                Application Form
              </h2>
              <p className="mt-2 text-white/60">Tell us who you are.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="fullname" label="Full Name" icon={User} required>
                  <Input
                    id="fullname"
                    name="fullname"
                    required
                    value={form.fullname}
                    onChange={(e) => updateField("fullname", e.target.value)}
                    placeholder="Your full name"
                    className={`${fieldClass} pl-10`}
                  />
                </FormField>
                <FormField id="age" label="Age" icon={Calendar}>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min={1}
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    placeholder="Your age"
                    className={`${fieldClass} pl-10`}
                  />
                </FormField>
                <FormField id="city" label="City" icon={MapPin}>
                  <Input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Your city"
                    className={`${fieldClass} pl-10`}
                  />
                </FormField>
                <FormField id="email" label="Email" icon={Mail} required>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`${fieldClass} pl-10`}
                  />
                </FormField>
                <FormField id="phone" label="Phone" icon={Phone} required>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="Your phone number"
                    className={`${fieldClass} pl-10`}
                  />
                </FormField>
                <div className="space-y-2">
                  <FieldLabel htmlFor="talent-category" required>
                    Talent Category
                  </FieldLabel>
                  <Select
                    value={form.talentCategory}
                    onValueChange={(value) => updateField("talentCategory", value)}
                  >
                    <SelectTrigger id="talent-category" className={`${fieldClass} w-full`}>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="border-white/15 bg-[#0a0f27] text-white">
                      <SelectItem value="singer">Singer / Vocalist</SelectItem>
                      <SelectItem value="dancer">Dancer / Performer</SelectItem>
                      <SelectItem value="creator">Creator / Influencer</SelectItem>
                      <SelectItem value="trainee">Trainee with Potential</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <FormField id="socialmedia" label="Instagram / TikTok" icon={AtSign} required>
                <Input
                  id="socialmedia"
                  name="socialmedia"
                  required
                  value={form.socialmedia}
                  onChange={(e) => updateField("socialmedia", e.target.value)}
                  placeholder="@yourhandle"
                  className={`${fieldClass} pl-10`}
                />
              </FormField>

              <FormField id="videolink" label="Video Link" icon={Link2}>
                <Input
                  id="videolink"
                  name="videolink"
                  type="url"
                  value={form.videolink}
                  onChange={(e) => updateField("videolink", e.target.value)}
                  placeholder="https://..."
                  className={`${fieldClass} pl-10`}
                />
              </FormField>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-white/80">
                  Why do you want to join NEXT STAGE?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell us about your goals, passion and what you hope to achieve..."
                  className={`${fieldClass} min-h-32 resize-none`}
                />
              </div>

              <div className="space-y-2">
                <FieldLabel htmlFor="resume" required>
                  Photos / Portfolio
                </FieldLabel>
                <input
                  ref={fileInputRef}
                  id="resume"
                  name="resume"
                  type="file"
                  accept={ACCEPTED_FILE_TYPES}
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/25 bg-[#050816]/50 px-6 py-10 text-center transition-colors hover:border-cyan-400/40 hover:bg-[#050816]/70"
                >
                  <CloudUpload className="mb-3 h-10 w-10 text-cyan-300/80" />
                  <p className="text-white/80">
                    {resumeFile ? resumeFile.name : "Drag & drop files here or click to upload"}
                  </p>
                  <p className="mt-1 text-sm text-white/45">JPG, PNG or PDF — Max 2MB each</p>
                </button>
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full max-w-md rounded-full border-0 font-semibold text-white sm:w-auto sm:px-12"
                  style={{
                    background: "linear-gradient(90deg, #00c2f5 0%, #7b4dff 55%, #f651c8 100%)",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </div>

          <aside className="space-y-4">
            <h3 className="mb-2 text-center text-sm font-medium uppercase tracking-[0.28em] text-white/70 lg:text-left">
              What to Prepare
            </h3>
            {prepareItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#0a0f27]/60 p-4 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/10 shadow-[0_0_20px_rgba(167,139,250,0.25)]">
                  <item.icon className="h-5 w-5 text-purple-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{item.description}</p>
                </div>
                <Check className="mt-1 h-5 w-5 shrink-0 text-cyan-300/80" />
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
