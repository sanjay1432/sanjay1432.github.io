import type { Metadata } from 'next'
import { CONTACT } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Sanjay Kumar for engineering consulting, development work, or project discussions.',
}

const contactMethods = [
  {
    name: 'Email',
    value: CONTACT.email,
    description: 'For detailed discussions and formal inquiries.',
    href: `mailto:${CONTACT.email}?subject=Project%20Inquiry&body=Hi%20Sanjay%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A`,
    accent: 'border-blue-200 bg-blue-50/50',
    iconBg: 'bg-blue-100 text-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    value: '+91 959 268 4598',
    description: 'For quick questions and conversations.',
    href: `${CONTACT.whatsapp}?text=Hi%20Sanjay%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20potential%20project.`,
    accent: 'border-emerald-200 bg-emerald-50/50',
    iconBg: 'bg-emerald-100 text-emerald-600',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    value: 'sanjay0091',
    description: 'Professional network and background.',
    href: CONTACT.linkedin,
    accent: 'border-sky-200 bg-sky-50/50',
    iconBg: 'bg-sky-100 text-sky-600',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    value: CONTACT.githubHandle,
    description: 'Review my code and contributions.',
    href: CONTACT.github,
    accent: 'border-slate-200 bg-slate-50/50',
    iconBg: 'bg-slate-100 text-slate-600',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
          Let&apos;s work together
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">
          Whether you need a production system built from scratch, an existing
          infrastructure stabilized, or a team augmented with senior engineering
          support — I&apos;m here to help.
        </p>
      </div>

      {/* Availability indicator */}
      <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200/60 rounded-lg">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <div>
          <p className="text-sm font-medium text-emerald-800">
            Currently accepting new projects
          </p>
          <p className="text-xs text-emerald-600 mt-0.5">
            Typical response time: within one business day
          </p>
        </div>
      </div>

      {/* Main content: Form + Sidebar */}
      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        {/* Contact form — takes 3/5 columns */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <svg className="w-4.5 h-4.5 text-indigo-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send a message
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill out the form and I&apos;ll get back to you directly
              </p>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Sidebar — quick contact methods — takes 2/5 columns */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Or reach out directly
          </p>

          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className={`group flex items-start gap-3 rounded-xl border p-4 transition-all duration-200 hover:shadow-md ${method.accent}`}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 ${method.iconBg}`}
              >
                {method.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {method.name}
                  </h3>
                  <svg
                    className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{method.value}</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </a>
          ))}

          {/* How to get started tips */}
          <div className="mt-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">
              Helpful to include
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                'A brief description of the project or challenge',
                'Your timeline and any hard deadlines',
                'Whether you need a one-time project or ongoing support',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-xs text-slate-500">
                  <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
