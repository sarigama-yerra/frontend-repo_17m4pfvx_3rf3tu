import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_50%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Purpose-built apps for civil infrastructure
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Bold, 3D-first software for construction at scale
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            We design mission-critical apps for contractors, engineers, and owners building the world’s roads, bridges, and utilities — with real-time data, offline-first workflows, and ruggedized UX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4" id="cta">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
              Request a demo
            </a>
            <a href="#solutions" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/10 transition">
              Explore solutions
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
            {[
              ['Offline-first', 'Works where connectivity is limited'],
              ['Field-ready', 'Designed for harsh jobsite conditions'],
              ['Secure', 'Role-based permissions & audit trails'],
              ['Interoperable', 'Integrates with your ERP & BIM'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-slate-300/80">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
