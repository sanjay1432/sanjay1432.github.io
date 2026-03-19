'use client'

import { useState, useEffect, useRef, FormEvent, useMemo } from 'react'
import { CONTACT } from '@/lib/constants'

const serviceOptions = [
  'Full-stack application development',
  'Cloud infrastructure (AWS)',
  'DevOps & CI/CD pipelines',
  'Monitoring & reliability engineering',
  'Security & infrastructure hardening',
  'Legacy system modernization',
  'Other / Not sure yet',
]

// ─── Anti-bot utilities ──────────────────────────────────────────────

/** Generate a simple math challenge */
function generateChallenge() {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { question: `${a} + ${b}`, answer: a + b }
}

/** Rate limiter — max submissions per time window (stored in sessionStorage) */
function checkRateLimit(maxAttempts = 3, windowMs = 3600_000): boolean {
  try {
    const key = 'sk_form_submissions'
    const now = Date.now()
    const raw = sessionStorage.getItem(key)
    const timestamps: number[] = raw ? JSON.parse(raw) : []

    // Remove entries outside the window
    const recent = timestamps.filter((t) => now - t < windowMs)

    if (recent.length >= maxAttempts) return false

    recent.push(now)
    sessionStorage.setItem(key, JSON.stringify(recent))
    return true
  } catch {
    return true // Allow if sessionStorage unavailable
  }
}

// ─── Component ───────────────────────────────────────────────────────

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'blocked'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [challengeAnswer, setChallengeAnswer] = useState('')
  const loadTimeRef = useRef<number>(Date.now())

  // Generate a math challenge (stable for the component lifecycle)
  const challenge = useMemo(() => generateChallenge(), [])

  // Record the exact time the form mounts (for time-trap)
  useEffect(() => {
    loadTimeRef.current = Date.now()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)

    // ── Layer 1: Honeypot check ──
    const honeypot = formData.get('_honey') as string
    if (honeypot) {
      // Bot filled the hidden field — silently pretend success
      setStatus('success')
      return
    }

    // ── Layer 2: Time trap — reject if submitted in under 3 seconds ──
    const elapsed = Date.now() - loadTimeRef.current
    if (elapsed < 3000) {
      setStatus('success') // Silently fake success for bots
      return
    }

    // ── Layer 3: Math challenge verification ──
    if (parseInt(challengeAnswer, 10) !== challenge.answer) {
      setStatus('error')
      setErrorMessage('Incorrect answer to the verification question. Please try again.')
      return
    }

    // ── Layer 4: Rate limiting — max 3 submissions per hour ──
    if (!checkRateLimit(3, 3600_000)) {
      setStatus('blocked')
      return
    }

    // ── All checks passed — send the message ──
    setStatus('loading')

    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: (formData.get('service') as string) || 'Not specified',
      message: formData.get('message') as string,
      _subject: `New inquiry from ${formData.get('name')} — sanjaykumar.dev`,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      const result = await response.json()

      if (result.success === 'true' || result.success === true) {
        setStatus('success')
        setChallengeAnswer('')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again or email me directly.')
    }
  }

  // ── Blocked state (rate limited) ──
  if (status === 'blocked') {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 mb-4">
          <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Too many submissions</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
          You&apos;ve reached the submission limit. Please try again later or reach out directly.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Email me directly
        </a>
      </div>
    )
  }

  // ── Success state ──
  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 mb-4">
          <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Message sent successfully</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
          Thank you for reaching out. I&apos;ll review your message and get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
        >
          Send another message
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    )
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Layer 1: Honeypot — hidden from users, catches dumb bots */}
      <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Service selection */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          What can I help with?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors appearance-none"
        >
          <option value="" disabled>
            Select a service area (optional)
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your project, challenge, or what you're looking for…"
          className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Layer 3: Math challenge — simple, accessible, no third-party */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <label htmlFor="challenge" className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          Quick verification — What is {challenge.question}? <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="challenge"
          inputMode="numeric"
          required
          value={challengeAnswer}
          onChange={(e) => setChallengeAnswer(e.target.value)}
          placeholder="Your answer"
          className="mt-2 block w-32 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <div>
            <p>{errorMessage}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 inline-block font-medium underline underline-offset-2"
            >
              Email me directly instead →
            </a>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-slate-400">
        Your information is sent directly to my inbox. No spam, no newsletters, no third-party sharing.
      </p>
    </form>
  )
}
