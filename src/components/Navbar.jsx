import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/site'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const cls = (mobile) => ({ isActive }) => `rounded-lg px-3 py-2 text-sm transition ${isActive ? 'font-semibold text-fg underline decoration-accent decoration-2 underline-offset-8' : 'text-muted hover:text-fg'} ${mobile ? 'block text-base' : ''}`
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <Link to="/" className="font-display text-lg font-bold" aria-label={`${profile.name}, home`}>Ahmed Elshafey</Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls(false)}>{l}</NavLink>)}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={toggleTheme} className="rounded-lg p-2 text-muted hover:text-accent" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-muted lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-4 mt-2 p-3 lg:hidden">
            {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls(true)}>{l}</NavLink>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
