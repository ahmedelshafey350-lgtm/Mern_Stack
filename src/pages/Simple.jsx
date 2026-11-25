import { GraduationCap } from 'lucide-react'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import SectionTitle from '../components/SectionTitle'
import { education } from '../data/site'

export const SkillsPage = () => <div className="pt-20"><Skills /></div>
export const ExperiencePage = () => <div className="pt-20"><Experience /></div>
export const ContactPage = () => <div className="pt-20"><Contact /></div>
export const EducationPage = () => (
  <div className="section pt-32">
    <SectionTitle title="Education" subtitle="Currently an undergraduate student, not yet a graduate." />
    {education.map((e) => (
      <div key={e.heading} className="glass glow-border flex gap-5 p-6 sm:p-8">
        <GraduationCap size={28} className="shrink-0 text-accent" aria-hidden="true" />
        <div><h3 className="font-display text-xl font-semibold">{e.heading}</h3><p className="mt-1 text-muted">{e.place}</p>
          <p className="mt-3 text-sm "><span className="rounded-full bg-fg/10 px-3 py-1 text-fg">{e.status}</span> <span className="ml-2 text-muted ">{e.period}</span></p></div>
      </div>
    ))}
  </div>
)
