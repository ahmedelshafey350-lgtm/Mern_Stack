import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import SectionTitle from '../components/SectionTitle'
import ProjectCard, { EmptyState } from '../components/ProjectCard'
import Icon from '../components/Icon'
import { publicProjects } from '../data/projects'
import { education, profile, skillGroups } from '../data/site'

const More = ({ to, children }) => <Link to={to} className="mt-8 inline-flex items-center gap-1 text-sm text-accent hover:underline">{children} <ArrowRight size={15} aria-hidden="true" /></Link>

export default function Home() {
  const featured = publicProjects.filter((p) => p.featured).slice(0, 3)
  return (
    <>
      <Hero />
      <section className="section">
        <SectionTitle title="Technical expertise" subtitle="Frontend, backend and database work, plus the programming fundamentals underneath." />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => <li key={g.title} className="glass flex items-center gap-3 p-4 text-sm"><Icon name={g.icon} size={18} className="text-accent" />{g.title}</li>)}
        </ul>
        <More to="/skills">All skills and learning roadmap</More>
      </section>
      <section className="section pt-0">
        <SectionTitle title="Featured projects" subtitle="Real projects with screenshots and full details." />
        {featured.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map((p) => <ProjectCard key={p.id} p={p} />)}</div> : <EmptyState />}
        <More to="/projects">View projects</More>
      </section>
      <section className="section pt-0">
        <SectionTitle title="Education" />
        {education.map((e) => (
          <div key={e.heading} className="glass flex gap-4 p-6"><GraduationCap className="shrink-0 text-accent" aria-hidden="true" />
            <div><p className="font-display font-semibold">{e.heading}</p><p className="text-muted">{e.place} · {e.period}</p></div></div>
        ))}
        <More to="/education">Education details</More>
      </section>
      <Journey />
      <section className="section">
        <div className="ink rounded-2xl p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-bold">Let's talk</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">Interested in working together or want to know more about {profile.name.split(' ')[0]}'s work?</p>
          <Link to="/contact" className="btn-primary mt-6">Contact me</Link>
        </div>
      </section>
    </>
  )
}
