import { Link } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import { nav, profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">{nav.map(([to, l]) => <Link key={to} to={to} className="hover:text-accent">{l}</Link>)}</nav>
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent"><Linkedin size={20} /></a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
