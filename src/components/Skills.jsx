import { Compass } from 'lucide-react'
import SectionTitle from './SectionTitle'
import Icon from './Icon'
import { exploring, skillGroups } from '../data/site'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Technical skills" subtitle="Frontend and backend side by side. No percentages, just the tools I work with." />
      <div className="divide-y divide-fg/15 border-y border-fg/15">
        {skillGroups.map((g) => (
          <div key={g.title} className="grid gap-4 py-6 md:grid-cols-[260px_1fr]">
            <h3 className="flex items-center gap-3 font-display text-lg font-semibold"><Icon name={g.icon} size={20} className="text-accent" />{g.title}</h3>
            <ul className="flex flex-wrap gap-2">{g.items.map((it) => <li key={it} className="chip">{it}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="ink mt-14 rounded-2xl p-6 sm:p-10">
        <div className="flex items-center gap-3"><Compass className="text-accent" aria-hidden="true" /><h3 className="font-display text-2xl font-semibold">Currently exploring</h3></div>
        <p className="mb-6 mt-2 text-sm text-muted">Learning roadmap. These are topics I'm studying, not skills I claim to have mastered.</p>
        <ul className="flex flex-wrap gap-2">{exploring.map((t) => <li key={t} className="rounded-lg border border-dashed border-fg/30 px-3 py-1.5 text-sm">{t}</li>)}</ul>
      </div>
    </section>
  )
}
