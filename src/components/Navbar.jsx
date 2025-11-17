import { Link, useLocation } from 'react-router-dom'
import { Menu, BarChart3, Sparkles, Play, Gauge } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        location.pathname === to
          ? 'text-white bg-white/10'
          : 'text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-lg shadow-[0_0_25px_rgba(168,85,247,0.6)]" />
            <span className="font-bold tracking-tight">TokIntel</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/10"
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/analytics"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-shadow"
            >
              <Gauge className="h-4 w-4" /> Open Dashboard
            </Link>
            <button className="md:hidden text-white/80 hover:text-white p-2 rounded-md hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
