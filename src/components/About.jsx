import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { journey, profile } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="About me" subtitle="From low-level languages to full-stack web applications." />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-muted">{profile.intro.map((p) => <p key={p}>{p}</p>)}</div>
        <ol className="relative space-y-6 border-l border-fg/15 pl-8">
          {journey.map((s, i) => (
            <motion.li key={s.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.05 }} className="relative">
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-accent to-accent text-[10px] font-bold text-on-accent">{i + 1}</span>
              <h3 className="font-display font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
