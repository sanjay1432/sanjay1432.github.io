import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    "Selected case studies and project examples from Sanjay Kumar's engineering work.",
}

const caseStudies = [
  {
    title: 'Cloud Infrastructure Cost Optimization',
    context: 'Mid-size SaaS company — AWS infrastructure',
    challenge:
      "The company's AWS bill had grown significantly over 18 months without corresponding growth in usage. Resources were over-provisioned, unused services were still running, and there was no visibility into cost drivers.",
    approach:
      'Conducted a full infrastructure audit. Identified unused resources, right-sized compute instances, implemented auto-scaling policies, and set up cost monitoring with alerts. Migrated eligible workloads to reserved instances and spot instances where appropriate.',
    outcome:
      'Achieved meaningful reduction in monthly AWS costs while maintaining the same performance characteristics. Established ongoing cost monitoring and review processes that prevented future drift.',
    tags: ['AWS', 'Cost Optimization', 'Infrastructure Audit'],
  },
  {
    title: 'Zero-Downtime Deployment Pipeline',
    context: 'Product team with manual deployment process',
    challenge:
      'Deployments required scheduled maintenance windows and often resulted in user-facing downtime. Rollbacks were manual and error-prone, leading to extended outage periods when issues were discovered post-deployment.',
    approach:
      'Designed and implemented a GitLab CI/CD pipeline with blue-green deployment strategy. Containerized the application with Docker, set up automated testing gates, and implemented health check–based traffic switching with automatic rollback capabilities.',
    outcome:
      'The team moved from weekly scheduled deployments to multiple deployments per day with zero downtime. Rollback time dropped from hours to minutes. Developer confidence in the deployment process increased significantly.',
    tags: ['GitLab CI/CD', 'Docker', 'Blue-Green Deployment', 'Kubernetes'],
  },
  {
    title: 'Production System Stabilization',
    context: 'Application experiencing frequent outages',
    challenge:
      'A customer-facing application was experiencing recurring outages with no clear root cause. There was no monitoring, no centralized logging, and no alerting. The team was in reactive mode, responding to customer complaints rather than detecting issues proactively.',
    approach:
      'Implemented a Prometheus and Grafana monitoring stack. Set up structured logging with centralized collection. Identified and resolved the root causes of recurring outages — primarily resource exhaustion and unhandled edge cases. Established alerting thresholds based on actual system behavior.',
    outcome:
      'System uptime improved substantially. The team shifted from reactive firefighting to proactive monitoring. Mean time to detection dropped significantly, and most issues were resolved before users noticed.',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'Reliability'],
  },
  {
    title: 'Infrastructure Security Hardening',
    context: 'Organization preparing for security audit',
    challenge:
      'The organization needed to pass a security audit but had significant gaps: default configurations on production servers, overly permissive access controls, unpatched systems, and no documented security baseline.',
    approach:
      'Built hardened base images with CIS benchmark compliance. Implemented least-privilege IAM policies, network segmentation, and encrypted data stores. Set up automated patch management and configuration drift detection. Documented all controls and procedures.',
    outcome:
      'The organization passed the security audit with no critical findings. The hardened baseline became the standard for all new infrastructure, reducing ongoing security maintenance burden.',
    tags: ['Security', 'Hardened Images', 'IAM', 'Compliance'],
  },
]

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
        Experience
      </h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        A selection of representative projects from my engineering work. Client
        details are anonymized, but the challenges and outcomes are real.
      </p>

      <div className="mt-12 space-y-8">
        {caseStudies.map((study, index) => (
          <article
            key={index}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-semibold flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {study.title}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {study.context}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Challenge
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Approach
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {study.approach}
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Outcome
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {study.outcome}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex-1">
          <p className="text-base text-slate-600 leading-relaxed">
            These examples represent a cross-section of my work. For a broader
            view, my public repositories are available on{' '}
            <a
              href="https://github.com/sanjay1432"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline underline-offset-2 hover:text-indigo-800 transition-colors font-medium"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          Discuss a project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
