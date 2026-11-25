import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ProjectCard, { EmptyState } from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { categories, publicProjects as projects, statuses } from '../data/projects'

const sorts = {
  featured: ['Featured first', (a, b) => Number(b.featured) - Number(a.featured)],
  title: ['Title A to Z', (a, b) => a.title.localeCompare(b.title)],
}
const sel = 'rounded-xl border border-fg/15 bg-bg px-3 py-2.5 text-sm outline-none focus:border-accent'

export default function Projects() {
  const [q, setQ] = useState(''); const [cat, setCat] = useState('All'); const [st, setSt] = useState('All'); const [sort, setSort] = useState('featured')
  const list = useMemo(() => projects
    .filter((p) => p.title.toLowerCase().includes(q.trim().toLowerCase()) && (cat === 'All' || p.category === cat) && (st === 'All' || p.status === st))
    .sort(sorts[sort][1]), [q, cat, st, sort])
  const featured = projects.filter((p) => p.featured)
  return (
    <div className="section pt-32">
      <SectionTitle title="Projects" subtitle="Only projects with real screenshots and complete details are listed." />
      {projects.length === 0 ? <EmptyState /> : (<>
      {featured.length > 0 && q === '' && cat === 'All' && st === 'All' && (
        <div className="mb-12"><h2 className="mb-4 font-display text-xl font-semibold">Featured</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map((p) => <ProjectCard key={p.id} p={p} />)}</div></div>
      )}
      <div className="mb-4 flex flex-wrap gap-3">
        <label className="relative min-w-[220px] flex-1"><span className="sr-only">Search projects by name</span>
          <Search size={16} className="absolute left-3 top-3.5 text-muted" aria-hidden="true" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by project name" className={`${sel} w-full pl-9`} /></label>
        {projects.some((p) => p.status) && <label><span className="sr-only">Status</span><select value={st} onChange={(e) => setSt(e.target.value)} className={sel}><option>All</option>{statuses.map((s) => <option key={s}>{s}</option>)}</select></label>}
        <label><span className="sr-only">Sort</span><select value={sort} onChange={(e) => setSort(e.target.value)} className={sel}>{Object.entries(sorts).map(([k, [l]]) => <option key={k} value={k}>{l}</option>)}</select></label>
      </div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {['All', ...categories.filter((c) => projects.some((p) => p.category === c))].map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-xl px-3 py-1.5 text-sm transition ${cat === c ? 'bg-accent text-on-accent' : 'glass text-muted hover:text-fg'}`}>
            {c} <span className="opacity-60">{c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}</span></button>
        ))}
      </div>
      <p className="mb-4 text-sm text-muted" role="status">{list.length} project{list.length === 1 ? '' : 's'}</p>
      {list.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
        : <p className="glass p-8 text-center text-muted">No published projects match these filters. Clear the search or choose another category.</p>}
      </>)}
    </div>
  )
}
