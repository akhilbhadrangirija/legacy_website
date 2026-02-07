'use client'

import { motion } from 'framer-motion'

export default function PageHero() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/arial_view.jpg"
          alt="About Legacy Retirement Living"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" aria-hidden />
      </div>
      <div className="relative z-10 w-full max-w-section mx-auto px-4 pb-14 pt-20 sm:px-6">
        <motion.h1
          className="text-4xl font-semibold text-white leading-tight sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Legacy
        </motion.h1>
        <motion.p
          className="mt-3 text-lg text-white/95 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Premium Retirement Living — Where Comfort, Care, and Community Come Together
        </motion.p>
      </div>
    </section>
  )
}
