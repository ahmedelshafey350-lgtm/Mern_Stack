import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile, skillGroups } from '../data/site'

const gear = (cx, cy, r, n = 14, d = 16) => 'M' + Array.from({ length: n * 4 }, (_, i) => {
  const a = (i / (n * 4)) * Math.PI * 2, rr = i % 4 < 2 ? r + d : r
  return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`
}).join('L') + 'Z'

function downloadCV() {
  if (profile.cvUrl) { window.open(profile.cvUrl, '_blank', 'noopener'); return }
  const lines = [profile.name, profile.roles, 'Mechatronics Engineering Student, ' + profile.university + ', expected graduation ' + profile.graduation, '',
    `Location: ${profile.location}`, `Email: ${profile.email}`, `Phone: ${profile.phone}`, `WhatsApp: ${profile.whatsapp}`, `LinkedIn: ${profile.linkedin}`, `GitHub: ${profile.github}`, '',
    ...profile.intro, '', 'SKILLS', ...skillGroups.map((g) => `${g.title}: ${g.items.join(', ')}`)]
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain' }))
  Object.assign(document.createElement('a'), { href: url, download: 'Ahmed-Elshafey-CV.txt' }).click(); URL.revokeObjectURL(url)
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="flex items-center gap-2 text-sm text-muted"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">{profile.name}</h1>
        <p className="mt-6 font-display text-xl sm:text-2xl">{profile.title}</p>
        <p className="mt-4 max-w-xl text-lg text-muted">{profile.headline}</p>
        <p className="mt-4 max-w-xl text-muted">{profile.intro[0]}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">View My Projects</Link>
          <button onClick={downloadCV} className="btn-ghost"><Download size={18} aria-hidden="true" /> Download My CV</button>
        </div>
        <div className="mt-6 flex gap-3">
          {[[profile.github, Github, 'GitHub profile'], [profile.linkedin, Linkedin, 'LinkedIn profile'], [`mailto:${profile.email}`, Mail, 'Email me']].map(([h, I, l]) => (
            <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-fg/20 transition hover:border-accent hover:bg-accent hover:text-on-accent"><I size={19} /></a>
          ))}
        </div>
      </motion.div>
      <svg viewBox="0 0 400 400" className="mx-auto w-full max-w-sm" role="img" aria-label="A gear enclosing a code symbol, representing software and mechatronics engineering">
        <circle cx="200" cy="200" r="190" style={{ fill: 'rgb(var(--accent))' }} />
        <circle cx="318" cy="92" r="34" style={{ fill: 'rgb(var(--olive))' }} />
        <motion.path d={gear(200, 200, 120)} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 90, ease: 'linear' }} style={{ fill: 'rgb(23 33 29)', originX: '200px', originY: '200px' }} />
        <circle cx="200" cy="200" r="86" fill="rgb(245 241 232)" />
        <text x="200" y="218" textAnchor="middle" fontSize="52" fontWeight="600" fill="rgb(23 33 29)" fontFamily="Fraunces, serif">{'</>'}</text>
      </svg>
    </section>
  )
}
