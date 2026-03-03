import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter: max 3 submissions per IP per hour.
// Note: resets on serverless cold starts. For persistent limiting, use Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 3
  const record = rateLimitMap.get(ip)
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return false
  }
  if (record.count >= maxRequests) return true
  record.count++
  return false
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { name, email, message, _hp } = body as Record<string, unknown>

  // Honeypot check — bots fill hidden fields, real users don't
  if (_hp) {
    return NextResponse.json({ success: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  // Sanitize inputs — strip HTML tags to prevent injection
  const cleanName = stripHtml(String(name)).slice(0, 100)
  const cleanEmail = stripHtml(String(email)).slice(0, 254)
  const cleanMessage = stripHtml(String(message)).slice(0, 500)

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!isValidEmail(cleanEmail)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  // Rate limit by IP — prevents spam flooding
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    )
  }

  const { error } = await resend.emails.send({
    from: 'michaelcalayo.com <onboarding@resend.dev>',
    to: ['michaelcalayo@gmail.com'],
    replyTo: cleanEmail,
    subject: `${cleanName}, ${cleanEmail}`,
    text: cleanMessage,
  })

  if (error) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
