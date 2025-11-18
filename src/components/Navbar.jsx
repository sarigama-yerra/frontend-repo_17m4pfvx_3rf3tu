import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
            <span className="text-white font-semibold tracking-tight">InfraTech Apps</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:opacity-95 transition">
              Get a Demo
            </a>
          </nav>
          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl md:hidden">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5">
                  {item.name}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-center font-semibold">
                Get a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
