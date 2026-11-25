import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { journey } from '../data/site'

export default function Journey() {
  const [i, setI] = useState(0)
  const s = journey[i]
  return (
    <section id="journey" className="section">
      <SectionTitle title="Development journey" subtitle="Select a stage to see what I learned there." />
      <div className="relative mb-8 overflow-x-auto pb-2">
        <div role="tablist" aria-label="Journey stages" className="flex min-w-max items-center gap-0">
          {journey.map((st, n) => (
            <div key={st.title} className="flex items-center">
              <button role="tab" aria-selected={i === n} onClick={() => setI(n)} className="group flex flex-col items-center gap-2 px-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full border-2 font-display font-bold transition ${n <= i ? 'border-transparent bg-gradient-to-br from-accent to-accent text-on-accent' : 'border-fg/20 text-muted group-hover:border-accent'}`}>{n + 1}</span>
                <span className={`max-w-[110px] text-center text-xs ${i === n ? 'text-accent' : 'text-muted'}`}>{st.title}</span>
              </button>
              {n < journey.length - 1 && <span className={`mb-6 h-0.5 w-8 rounded ${n < i ? 'bg-gradient-to-r from-accent to-accent' : 'bg-fg/15'}`} />}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="glass glow-border p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
          <p className="mt-3 max-w-2xl text-muted">{s.text}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{s.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
          <div className="mt-6 flex gap-3">
            <button onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0} className="btn-ghost disabled:opacity-40">Previous</button>
            <button onClick={() => setI(Math.min(journey.length - 1, i + 1))} disabled={i === journey.length - 1} className="btn-ghost disabled:opacity-40">Next</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
