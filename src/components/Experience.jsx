import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { experience } from '../data/site'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" subtitle="Hands-on front-end work from my internship." />
      {experience.map((e) => (
        <div key={e.role} className="grid gap-6 border-t border-fg/20 pt-8 md:grid-cols-[260px_1fr]">
          <div><h3 className="font-display text-2xl font-semibold">{e.role}</h3><p className="mt-1 text-muted">{e.org}</p></div>
          <ul className="space-y-3">
            {e.points.map((pt) => {
              const key = Object.keys(e.links).find((k) => pt.startsWith(k))
              return <li key={pt} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {key ? <Link to={`/projects/${e.links[key]}`} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">{pt}</Link> : <span>{pt}</span>}</li>
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}
