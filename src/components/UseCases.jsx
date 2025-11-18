import { MapPinned, Building2, Ruler, Truck, Waves, Route } from 'lucide-react'

const cases = [
  {
    icon: MapPinned,
    title: 'Highways & Roads',
    desc: 'Paving QC, lane closures, material tickets, and e-ticketing workflows.'
  },
  {
    icon: Building2,
    title: 'Bridges & Structures',
    desc: 'Rebar tracking, concrete pours, deck scans, and inspection logs.'
  },
  {
    icon: Ruler,
    title: 'Utilities',
    desc: 'As-built capture, trench compaction, locates, and restoration.'
  },
  {
    icon: Truck,
    title: 'Heavy Civil',
    desc: 'Fleet usage, haul counts, and cycle-time analytics for earthwork.'
  },
  {
    icon: Waves,
    title: 'Water & Wastewater',
    desc: 'Pressure tests, chlorination logs, and compliance records.'
  },
  {
    icon: Route,
    title: 'Transit & Rail',
    desc: 'Track condition, work windows, and safety verifications.'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Proven across the jobsite</h2>
            <p className="mt-3 text-slate-300">From precon to closeout, our platform adapts to how your teams actually build.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cases.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/0 via-cyan-500/20 to-blue-600/0 blur-2xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 p-4 opacity-80">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/[0.06]" />
                ))}
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_70%_40%,rgba(56,189,248,0.25),transparent)]" />
            </div>
            <p className="mt-4 text-sm text-slate-300">A 3D-forward design language provides intuitive spatial context for field teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
