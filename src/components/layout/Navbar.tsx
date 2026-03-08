import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { navItems, personalInfo } from '../../data/portfolio-data';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.href.slice(1)));

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
          <Rocket className="h-5 w-5 text-cyan-400" />
          {personalInfo.name.split(' ')[0]}
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                activeSection === href.slice(1)
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden rounded-lg p-1.5 text-slate-400 hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-slate-800 bg-slate-900 px-4 pb-3 pt-2 space-y-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeSection === href.slice(1)
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
