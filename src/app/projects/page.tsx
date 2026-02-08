import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Production systems and applications built by Sanjay Kumar — from public-facing platforms to internal enterprise tools.',
}

const projects = [
  {
    name: 'HipTrain',
    type: 'Public Application',
    url: 'https://www.hiptrain.com/',
    description:
      'A live, one-on-one personal training platform that connects users with fitness professionals worldwide through real-time video sessions. The platform serves thousands of active users across web, iOS, and Android.',
    role: 'Full-stack development and infrastructure engineering for a production platform handling live video sessions, real-time scheduling, payment processing, and multi-platform delivery.',
    highlights: [
      'Real-time video conferencing infrastructure for live 1-on-1 training sessions',
      'Native iOS and Android applications alongside the web platform',
      'In-app scheduling system with automated calendar management and reminders',
      'Trainer matching and assignment engine based on user preferences and availability',
      'In-app messaging for direct trainer-client communication',
      'Payment integration with HSA/FSA approval workflows',
      'Corporate wellness program onboarding and management',
      'Scalable architecture supporting thousands of concurrent users and sessions',
    ],
    stack: [
      'React',
      'Node.js',
      'AWS',
      'Real-time Video',
      'Mobile (iOS/Android)',
      'Payment Integration',
      'Scheduling Engine',
    ],
    impact:
      'A fully operational platform used daily by thousands of users and hundreds of trainers globally. The system handles live sessions, payments, scheduling, and communication reliably at scale.',
  },
  {
    name: 'Tracker',
    type: 'Internal Tool',
    url: null,
    description:
      'An internal tracking and management tool built for operational visibility and process control. Designed to give teams real-time insight into workflows, resource allocation, and system status across the organization.',
    role: 'End-to-end design and development of a purpose-built internal tool — from requirements gathering through deployment and ongoing iteration based on team feedback.',
    highlights: [
      'Custom-built dashboard with real-time data visualization and status tracking',
      'Role-based access control and permission management',
      'Workflow automation for repetitive operational tasks',
      'Reporting and analytics for operational decision-making',
      'Integration with existing internal systems and data sources',
      'Built for reliability — used daily by teams for critical operational workflows',
    ],
    stack: [
      'React',
      'Node.js',
      'AWS',
      'GraphQL',
      'DynamoDB',
      'AWS Amplify',
    ],
    impact:
      'Replaced manual tracking processes with a centralized, reliable system. Improved operational visibility and reduced the time teams spent on status reporting and coordination.',
  },
]

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
        Projects
      </h1>
      <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
        Production systems I&apos;ve built and shipped — from public-facing
        platforms serving thousands of users to internal tools that teams depend
        on daily.
      </p>

      <div className="mt-12 space-y-12">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Project header */}
            <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {project.name}
                  </h2>
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                    {project.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {project.description}
                </p>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0 self-start"
                >
                  Visit site
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              )}
            </div>

            {/* Project body */}
            <div className="p-6 space-y-6">
              {/* Role */}
              <div>
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                  My Role
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {project.role}
                </p>
              </div>

              {/* Key highlights */}
              <div>
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                  Key Contributions
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                  Technology
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                  Impact
                </h3>
                <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex-1">
          <p className="text-base font-medium text-slate-900">
            Have a similar challenge?
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Whether it&apos;s a customer-facing platform or an internal tool
            your team depends on — I build systems that work reliably in
            production.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          Discuss your project
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
