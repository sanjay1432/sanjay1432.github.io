import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Engineering services offered by Sanjay Kumar — full-stack development, cloud infrastructure, DevOps, security, and more.',
}

const services = [
  {
    title: 'Full-Stack Application Development',
    description:
      'End-to-end development of web applications using Node.js on the backend and React, Angular, or Vue.js on the frontend. Built for production use, not prototyping.',
    who: 'Teams that need reliable, maintainable web applications — not just MVPs that break under real load.',
    pain: "Eliminates the risk of fragile applications, inconsistent code quality, and systems that can't scale past the first hundred users.",
    success:
      'A production-ready application with clean architecture, proper error handling, and code that your team can maintain and extend.',
  },
  {
    title: 'Cloud Infrastructure Design & Optimization',
    description:
      'AWS infrastructure architected for your actual needs — not over-provisioned and not under-secured. Includes compute, storage, networking, serverless, and managed services.',
    who: 'Companies running on AWS that want their infrastructure to be cost-effective, secure, and operationally manageable.',
    pain: "Reduces cloud costs, eliminates configuration drift, and removes the anxiety of not knowing what's running in your account.",
    success:
      "Infrastructure that's documented, version-controlled, cost-optimized, and easy to operate.",
  },
  {
    title: 'Containerization & Orchestration',
    description:
      'Docker containerization and Kubernetes orchestration for applications that need consistent environments, reliable deployments, and horizontal scalability.',
    who: 'Teams moving from manual deployments to containerized workflows, or existing Kubernetes users who need stability improvements.',
    pain: 'Eliminates "works on my machine" problems, deployment inconsistencies, and environment configuration headaches.',
    success:
      'Applications that deploy consistently across environments with clear rollback procedures and resource management.',
  },
  {
    title: 'Monitoring, Observability & Reliability',
    description:
      'Prometheus-based monitoring stacks, alerting pipelines, and observability practices that give you real visibility into system health.',
    who: 'Teams that are flying blind — no dashboards, no alerts, no way to diagnose production issues quickly.',
    pain: "Removes the guesswork from production incidents. You'll know what's broken, when it broke, and why.",
    success:
      'Dashboards that show real system health, alerts that fire for real problems, and runbooks for common incidents.',
  },
  {
    title: 'CI/CD Automation & Delivery Pipelines',
    description:
      'GitLab-based CI/CD pipelines that automate testing, building, and deployment. Designed for safety and speed — not just automation for its own sake.',
    who: 'Teams deploying manually, or with fragile pipelines that break often and slow down delivery.',
    pain: "Eliminates manual deployment steps, reduces human error, and gives you confidence that what's in production is what you tested.",
    success:
      'Reliable, repeatable deployments that your team can trigger without fear. Clear pipeline stages with proper gating.',
  },
  {
    title: 'Infrastructure Hardening & Security',
    description:
      'Security-focused infrastructure work: hardened OS images, least-privilege access controls, network segmentation, and compliance-ready configurations.',
    who: 'Organizations that handle sensitive data or operate in regulated industries, or any team that takes security seriously.',
    pain: 'Reduces your attack surface, addresses audit findings, and eliminates the common misconfigurations that lead to breaches.',
    success:
      'A security posture you can defend in an audit. Hardened systems with documented controls and access policies.',
  },
  {
    title: 'Legacy System Migration & Modernization',
    description:
      'Careful, incremental migration of legacy systems to modern stacks. No big-bang rewrites — just systematic, low-risk improvements.',
    who: 'Teams stuck on aging infrastructure or outdated frameworks that are expensive to maintain and risky to change.',
    pain: 'Reduces the cost and risk of maintaining legacy systems without the disruption of a complete rewrite.',
    success:
      "A modernized system that's cheaper to run, easier to maintain, and built on a stack your team can hire for.",
  },
]

export default function Services() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
        Services
      </h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        I offer engineering services focused on building, stabilizing, and
        scaling production systems. Each engagement is scoped to deliver
        measurable outcomes — not just deliverables.
      </p>

      <div className="mt-12 space-y-10">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-semibold flex-shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Who it&apos;s for
                    </p>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {service.who}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Pain removed
                    </p>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {service.pain}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Success looks like
                    </p>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {service.success}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-slate-900 rounded-xl text-center">
        <h2 className="text-xl font-semibold text-white">
          Need something specific?
        </h2>
        <p className="mt-2 text-slate-400 text-sm max-w-md mx-auto">
          Every system is different. If your needs don&apos;t fit neatly into
          one of the above, let&apos;s discuss what you&apos;re trying to
          solve.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors"
        >
          Start a conversation
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
