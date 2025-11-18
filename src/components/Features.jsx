import { HardHat, Radio, ShieldCheck, Cloud, Cpu, Workflow, Sparkles } from 'lucide-react'

const features = [
  {
    icon: HardHat,
    title: 'Field Operations',
    desc: 'Daily reports, inspections, punchlists, and QA/QC optimized for crews and inspectors.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Turn submittals, RFIs, and approvals into streamlined, auditable digital flows.'
  },
  {
    icon: Radio,
    title: 'Real-time Telemetry',
    desc: 'Live asset status from IoT sensors and equipment data—visualized for decisions.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Safety',
    desc: 'Permitting, stormwater, and safety procedures with location-aware checklists.'
  },
  {
    icon: Cpu,
    title: 'Edge-first Architecture',
    desc: 'Offline sync, conflict resolution, and background jobs engineered for the field.'
  },
  {
    icon: Cloud,
    title: 'Open Integrations',
    desc: 'Connect to ERP, GIS, BIM, and scheduling tools using secure APIs.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_70%_10%,rgba(59,130,246,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for civil infrastructure</h2>
          <p className="mt-3 text-slate-300">Modular building blocks you can deploy fast and adapt to your projects.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-blue-600/0 opacity-0 blur-xl transition group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
