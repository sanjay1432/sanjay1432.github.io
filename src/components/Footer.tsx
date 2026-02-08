import Link from 'next/link'
import { CONTACT, SITE } from '@/lib/constants'

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <p className="text-base font-semibold text-slate-900">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              {SITE.title}
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Connect
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with precision. Runs on reliability.
          </p>
        </div>
      </div>
    </footer>
  )
}
