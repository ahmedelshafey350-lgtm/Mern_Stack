import AboutSection from '../components/About'
import Journey from '../components/Journey'
import SectionTitle from '../components/SectionTitle'
import { education, goals, profile } from '../data/site'

export default function About() {
  return (
    <div className="pt-20">
      <AboutSection />
      <section className="section pt-0">
        <SectionTitle title="Mechatronics engineering background" />
        <p className="max-w-2xl text-muted">I study {profile.department} at {profile.university} (expected graduation {profile.graduation.replace(' (expected)', '')}). The program sits alongside my software work, so I approach web development with an engineering mindset.</p>
        <ul className="mt-6 space-y-3">{education.map((e) => <li key={e.heading} className="glass p-5"><p className="font-display font-semibold">{e.heading}</p><p className="text-sm text-muted">{e.place} · {e.period}</p></li>)}</ul>
      </section>
      <Journey />
    </div>
  )
}
