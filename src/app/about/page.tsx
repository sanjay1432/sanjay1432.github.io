import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Sanjay Kumar — a senior software engineer focused on building reliable, secure production systems.',
}

const philosophy = [
  {
    title: 'Reliability over hype',
    description:
      'I choose proven solutions over trending ones. Production systems deserve stability.',
  },
  {
    title: 'Security-first mindset',
    description:
      'Security is not an afterthought. It is built into architecture, configuration, and process.',
  },
  {
    title: 'Boring, production-grade engineering',
    description:
      'The best infrastructure is the kind nobody notices — because it just works.',
  },
  {
    title: 'Ownership and accountability',
    description:
      'I take responsibility for the systems I build — not just the code, but the outcomes.',
  },
  {
    title: 'Long-term sustainability',
    description:
      'Every technical decision should make the next six months easier, not harder.',
  },
]

const capabilities = [
  'Node.js · React · Angular · Vue.js',
  'AWS (EC2, Lambda, S3, DynamoDB, Amplify)',
  'Docker · Kubernetes · Helm',
  'GitLab CI/CD · GitHub Actions',
  'Prometheus · Grafana · ELK',
  'GraphQL · REST · WebSockets',
  'Infrastructure as Code · Terraform',
  'Hardened images · CIS benchmarks',
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      {/* Intro with photo */}
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/sanjay.jpg"
            alt="Sanjay Kumar"
            width={160}
            height={160}
            priority
            className="rounded-xl object-cover w-28 h-28 sm:w-36 sm:h-36 shadow-sm"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
            About
          </h1>
          <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
            <p>
              I&apos;m a senior software engineer based in India with experience
              building and operating production systems across the full stack.
            </p>
            <p>
              My work spans backend development with Node.js, frontend engineering
              with React, Angular, and Vue.js, AWS cloud infrastructure, and
              DevOps — but what ties it all together is a focus on reliability. The
              systems I build are meant to run in production, serve real users, and
              not break at 2 AM.
            </p>
          </div>
        </div>
      </div>

      {/* How I Work */}
      <h2 className="mt-14 text-xl font-semibold text-slate-900">
        How I Work
      </h2>
      <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
        <p>
          I take ownership of systems end-to-end. That means understanding the
          business context, making pragmatic architectural decisions, writing
          code that other engineers can maintain, and setting up the
          infrastructure and delivery pipelines to keep everything running.
        </p>
        <p>
          I&apos;m not interested in building things that only work in demos. I
          care about what happens after deployment — monitoring, security, cost
          management, and long-term maintainability.
        </p>
      </div>

      {/* Technical Capabilities */}
      <h2 className="mt-14 text-xl font-semibold text-slate-900">
        Technical Capabilities
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {capabilities.map((cap) => (
          <span
            key={cap}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-sm text-slate-600 rounded-lg"
          >
            {cap}
          </span>
        ))}
      </div>

      {/* On AI */}
      <h2 className="mt-14 text-xl font-semibold text-slate-900">
        On AI and Modern Tooling
      </h2>
      <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
        <p>
          I use modern AI tools as a productivity multiplier — for code
          generation, refactoring, debugging, and documentation. I understand
          both the capabilities and the limitations of these tools.
        </p>
        <p>
          AI accelerates my work, but engineering judgment, security awareness,
          and production experience are what make the output reliable. I
          don&apos;t position myself as an AI engineer — I&apos;m a software
          engineer who uses the best available tools responsibly.
        </p>
      </div>

      {/* Philosophy */}
      <h2 className="mt-14 text-xl font-semibold text-slate-900">
        Engineering Philosophy
      </h2>
      <ul className="mt-6 space-y-4">
        {philosophy.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
            <div>
              <span className="text-slate-900 font-medium">{item.title}</span>
              <span className="text-slate-500"> — {item.description}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-16 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-base font-medium text-slate-900">
            Want to work together?
          </p>
          <p className="mt-1 text-sm text-slate-500">
            I&apos;m always open to discussing new projects and challenges.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          Get in touch
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
