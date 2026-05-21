export function getStrapiConfig() {
  const url = (process.env.STRAPI_URL ?? process.env.STRAPI_API_URL)?.replace(/\/$/, "")
  const token = (process.env.STRAPI_API_TOKEN ?? process.env.STRIP_API_TOKEN)?.trim()

  if (!url || !token) {
    return null
  }
  return { url, token }
}

export type NextStageResumePayload = {
  fullname: string
  city?: string
  age?: number
  email: string
  phone?: string
  socialmedia?: string
  videolink?: string
  message?: string
  resume?: number
}

export class StrapiApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = "StrapiApiError"
    this.status = status
  }
}

function strapiConfigError() {
  return new StrapiApiError(
    "Strapi is not configured. Set STRAPI_URL and STRAPI_API_TOKEN in .env.local (local) or Vercel Environment Variables (production), then restart or redeploy.",
    503,
  )
}

function parseStrapiError(status: number, body: string, action: "upload" | "create"): StrapiApiError {
  if (status === 403) {
    const hint =
      action === "upload"
        ? "Allow Upload (plugin::upload) on your API token."
        : "Allow Create on next-stage-resumes on your API token."
    return new StrapiApiError(
      `Strapi permission denied. In Admin → Settings → API Tokens → edit your token (Full access recommended): ${hint}`,
      403,
    )
  }

  try {
    const json = JSON.parse(body) as { error?: { message?: string } }
    const msg = json.error?.message
    if (msg) return new StrapiApiError(msg, status)
  } catch {
    // not JSON
  }

  return new StrapiApiError(body || `Strapi request failed (${status})`, status)
}

export async function uploadStrapiFile(file: File): Promise<number> {
  const config = getStrapiConfig()
  if (!config) throw strapiConfigError()

  const body = new FormData()
  body.append("files", file)

  const response = await fetch(`${config.url}/api/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}` },
    body,
  })

  if (!response.ok) {
    throw parseStrapiError(response.status, await response.text(), "upload")
  }

  const uploaded = (await response.json()) as { id: number }[]
  const fileId = uploaded[0]?.id
  if (!fileId) throw new StrapiApiError("Strapi upload returned no file id", 500)
  return fileId
}

export async function createNextStageResume(data: NextStageResumePayload) {
  const config = getStrapiConfig()
  if (!config) throw strapiConfigError()

  const response = await fetch(`${config.url}/api/next-stage-resumes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })

  if (!response.ok) {
    throw parseStrapiError(response.status, await response.text(), "create")
  }

  return response.json()
}
