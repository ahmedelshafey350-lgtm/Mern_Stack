import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] grid place-items-center bg-bg" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <motion.span className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
          <motion.span className="absolute inset-3 rounded-full border-2 border-accent border-b-transparent" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }} />
          <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-accent">AE</span>
        </div>
        <p className="font-display text-sm tracking-wide text-muted">Starting up…</p>
      </div>
    </motion.div>
  )
}
