export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_250px_at_30%_0%,rgba(56,189,248,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">See it in action</h3>
              <p className="mt-2 text-slate-300">Tell us about your project and we’ll tailor a demo for your operations.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
                <li>• 30-minute walkthrough</li>
                <li>• Use-case deep dive</li>
                <li>• Integration options</li>
              </ul>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Name" />
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Work email" />
              </div>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Company" />
              <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="What are you building?" />
              <button type="button" className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
                Request demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
