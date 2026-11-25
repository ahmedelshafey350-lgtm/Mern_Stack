import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative grid min-h-screen place-items-center px-6 text-center">
      <div className="bg-grid absolute inset-0" />
      <div className="relative">
        <p className="font-display text-8xl font-bold bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">This page doesn't exist</h1>
        <p className="mt-2 text-muted">The link may be broken, or the page was moved.</p>
        <Link to="/" className="btn-primary mt-8"><Home size={18} aria-hidden="true" /> Back to home</Link>
      </div>
    </div>
  )
}
