import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { asset } from '../utils/asset'

export const statusStyle = { Completed: 'bg-fg text-bg', 'In Progress': 'border border-fg/30', Planned: 'bg-fg/10 text-muted' }

// Renders only a real image supplied in project data. No fallback artwork, ever.
export function Cover({ p, className = '' }) {
  const img = p.images[0]
  return (
    <figure className="relative m-0">
      <img src={asset(img.src)} alt={img.alt} loading="lazy" decoding="async" className={`${className} aspect-[16/10] w-full object-cover object-top`} />
      {img.kind === 'concept' && <figcaption className="absolute bottom-2 left-2 rounded-md bg-bg/85 px-2 py-1 text-xs text-muted">Conceptual artwork, not a screenshot</figcaption>}
    </figure>
  )
}

export function EmptyState() {
  return (
    <div className="glass p-10 text-center">
      <h3 className="font-display text-xl font-semibold">Projects are on the way</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">Each project is published only once it has real screenshots and complete details. Check back soon, or find my code on GitHub.</p>
    </div>
  )
}

export default function ProjectCard({ p }) {
  return (
    <Link to={`/projects/${p.slug}`} className="glass group flex h-full flex-col overflow-hidden transition hover:border-fg/30">
      <Cover p={p} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-muted">{p.category}</span>
          {p.status && <span className={`rounded-full px-2.5 py-1 ${statusStyle[p.status]}`}>{p.status}</span>}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{p.shortDescription || p.fullDescription}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">{p.technologies.map((t) => <li key={t} className="rounded-md bg-fg/5 px-2 py-1 text-xs">{t}</li>)}</ul>
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted group-hover:text-fg">View details <ArrowUpRight size={15} aria-hidden="true" /></span>
      </div>
    </Link>
  )
}
