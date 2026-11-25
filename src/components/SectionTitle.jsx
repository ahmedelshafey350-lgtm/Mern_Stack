import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-accent via-accent to-accent" />
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </motion.div>
  )
}
