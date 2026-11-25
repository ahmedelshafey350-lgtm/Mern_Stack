import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { profile } from '../data/site'

const field = 'w-full rounded-xl border border-fg/15 bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-accent'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!profile.email) {
      setStatus({ ok: false, text: 'Sending is not set up yet. The site owner needs to add an email address in src/data/site.js. You can reach me on LinkedIn meanwhile.' })
      return
    }
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setStatus({ ok: true, text: 'Your email app should open with the message ready to send.' })
  }

  return (
    <section id="contact" className="section">
      <SectionTitle title="Get in touch" subtitle="Have a project or opportunity in mind? Send a message." />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={submit} className="glass glow-border space-y-4 p-6 sm:p-8" noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-1.5 block text-sm">Full name</label><input id="name" required value={f.name} onChange={set('name')} autoComplete="name" className={field} /></div>
            <div><label htmlFor="email" className="mb-1.5 block text-sm">Email</label><input id="email" type="email" required value={f.email} onChange={set('email')} autoComplete="email" className={field} /></div>
          </div>
          <div><label htmlFor="subject" className="mb-1.5 block text-sm">Subject</label><input id="subject" required value={f.subject} onChange={set('subject')} className={field} /></div>
          <div><label htmlFor="message" className="mb-1.5 block text-sm">Message</label><textarea id="message" required rows={5} value={f.message} onChange={set('message')} className={field} /></div>
          <button type="submit" className="btn-primary"><Send size={18} aria-hidden="true" /> Send message</button>
          {status && <p role="status" className={`text-sm ${status.ok ? 'text-fg' : 'text-muted'}`}>{status.text}</p>}
        </form>
        <div className="ink flex flex-col justify-center gap-3 rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold">Direct contact</h3>
          <p className="flex items-center gap-3 text-sm"><MapPin size={18} className="text-accent" aria-hidden="true" />{profile.location}</p>
          {[[`mailto:${profile.email}`, Mail, profile.email], [profile.phoneHref, Phone, profile.phone], [profile.whatsappHref, MessageCircle, `WhatsApp ${profile.whatsapp}`], [profile.github, Github, 'GitHub'], [profile.linkedin, Linkedin, 'LinkedIn']].map(([h, I, l]) => (
            <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-accent"><I size={18} className="text-accent" aria-hidden="true" />{l}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
