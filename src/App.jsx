import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_110%_10%,rgba(29,78,216,0.18),transparent)]" />
      <div className="pointer-events-none fixed inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <UseCases />
        <CTA />
        <footer className="relative border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} InfraTech Apps. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
