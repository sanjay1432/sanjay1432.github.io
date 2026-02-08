'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Smart, non-intrusive contact prompt.
 *
 * - Appears once per session after 20 seconds of browsing
 * - Does NOT appear on the Contact page
 * - Dismissable, remembers dismissal for the session
 * - Positioned bottom-left to avoid overlapping the ContactFloat (bottom-right)
 */
export default function ContactPrompt() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Don't show on the contact page
    if (pathname === '/contact' || pathname === '/contact/') return

    // Don't show if already dismissed this session
    try {
      if (sessionStorage.getItem('sk_prompt_dismissed') === '1') return
    } catch {
      // sessionStorage not available (SSR or private mode)
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 20_000) // 20 seconds

    return () => clearTimeout(timer)
  }, [pathname])

  function dismiss() {
    setIsVisible(false)
    try {
      sessionStorage.setItem('sk_prompt_dismissed', '1')
    } catch {
      // ignore
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm animate-slide-up hidden md:block">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-5">
        <div className="flex items-start gap-4">
          {/* Green availability dot */}
          <span className="relative mt-1 flex-shrink-0">
            <span className="block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </span>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900">
              Available for new projects
            </p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Have a system that needs building, scaling, or stabilizing? I&apos;d be happy to discuss it.
            </p>
            <Link
              href="/contact"
              onClick={dismiss}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Let&apos;s talk
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <button
            onClick={dismiss}
            className="flex-shrink-0 text-slate-300 hover:text-slate-500 transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
