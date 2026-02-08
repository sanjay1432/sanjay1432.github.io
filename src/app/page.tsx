import Image from 'next/image'
import Link from 'next/link'

const strengths = [
  {
    title: 'Production-Grade Development',
    description:
      'Full-stack applications built with Node.js, React, Angular, and Vue.js — designed for reliability, not just features.',
    gradient: 'from-blue-500 to-indigo-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'AWS infrastructure architected for cost efficiency, security, and operational clarity.',
    gradient: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'DevOps & Delivery',
    description:
      'CI/CD pipelines with GitLab, Docker, Kubernetes, and Prometheus — deploy with confidence.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: 'Security & Reliability',
    description:
      'Hardened images, secure configs, and observability stacks that catch problems before users do.',
    gradient: 'from-amber-500 to-orange-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-dots" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/40 blur-3xl animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 blur-3xl animate-float-delayed" />
        <div className="absolute top-[20%] left-[50%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
            {/* Text */}
            <div className="flex-1 max-w-2xl">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-emerald-200/60 shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-700">
                  Available for new projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.08]">
                I build systems
                <br />
                that{' '}
                <span className="text-gradient">stay up.</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                Senior Software Engineer &amp; Cloud Infrastructure Specialist.
                I help teams ship reliable software, secure their infrastructure,
                and sleep through the night.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Work with me
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200"
                >
                  View services
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <div className="relative group">
                {/* Gradient ring */}
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-60 blur-md group-hover:opacity-80 group-hover:blur-lg transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-30" />
                <Image
                  src="/images/sanjay.jpg"
                  alt="Sanjay Kumar"
                  width={320}
                  height={320}
                  priority
                  className="relative rounded-2xl object-cover w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-2xl ring-4 ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CORE STRENGTHS ════════ */}
      <section className="relative bg-slate-50/80 border-y border-slate-200/80">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What I bring to the table
            </h2>
            <p className="mt-3 text-slate-500">
              Core areas where I deliver measurable results for teams and
              organizations.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient}`} />

                <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-md`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FEATURED PROJECTS ════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Shipped &amp; running in production
            </h2>
            <p className="mt-3 text-slate-500">
              Real systems I&apos;ve built — serving users, processing
              transactions, and running reliably every day.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {/* HipTrain */}
            <a
              href="https://www.hiptrain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        HipTrain
                      </h3>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Live Product
                      </span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  Live 1-on-1 personal training platform with real-time video,
                  scheduling, payments, and native mobile apps — serving
                  thousands of users globally.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['React', 'Node.js', 'AWS', 'Mobile', 'Payments'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-500 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>

            {/* Tracker */}
            <Link
              href="/projects"
              className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-500" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                        Tracker
                      </h3>
                      <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                        Internal Tool
                      </span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  Internal tracking and management tool with real-time dashboards,
                  workflow automation, and role-based access — used daily by
                  operations teams.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['React', 'GraphQL', 'DynamoDB', 'Amplify', 'AWS'].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-500 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="group text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
            >
              View all project details
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ TRUST SIGNALS ════════ */}
      <section className="border-y border-slate-200/80 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
                label: 'End-to-End Ownership',
                detail: 'From code to cloud to production — I own the full lifecycle',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                label: 'Security-First',
                detail: 'Built into architecture from day one, not bolted on after',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Long-Term Thinking',
                detail: 'Every decision makes next year easier, not harder',
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 shadow-sm">
                  {item.icon}
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Decorative orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 text-center">
          <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">
            Ready to start?
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Looking for a dependable engineer?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            If you need someone who can own production systems end-to-end — from
            code to cloud — let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-full hover:bg-indigo-50 hover:shadow-lg transition-all duration-200"
            >
              Get in touch
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://github.com/sanjay1432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-700 text-slate-300 text-sm font-medium rounded-full hover:bg-white/5 hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
