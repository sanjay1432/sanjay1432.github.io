'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pageLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/' || pathname === ''
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-sm font-bold shadow-md shadow-indigo-200/50 group-hover:shadow-lg group-hover:shadow-indigo-300/50 transition-shadow">
            SK
          </span>
          <span className="hidden sm:block text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
            Sanjay Kumar
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {pageLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                relative px-3 py-2 text-sm rounded-lg transition-all duration-200
                ${
                  isActive(item.href)
                    ? 'text-indigo-700 font-medium'
                    : 'text-slate-500 hover:text-slate-900'
                }
              `}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
              )}
            </Link>
          ))}

          {/* CTA button */}
          <Link
            href="/contact"
            className={`
              ml-3 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200
              ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200/50'
                  : 'bg-slate-900 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-md hover:shadow-indigo-200/50'
              }
            `}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                isActive('/') && pathname === '/' ? 'text-indigo-700 font-medium bg-indigo-50/60' : 'text-slate-600 hover:bg-slate-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {pageLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                  isActive(item.href) ? 'text-indigo-700 font-medium bg-indigo-50/60' : 'text-slate-600 hover:bg-slate-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 px-4 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
