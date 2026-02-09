'use client'

import { motion } from 'framer-motion'

export default function PageHero() {
  return (
    <section className="relative w-full min-h-[42vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/arial_view.jpg"
          alt="Legacy community — greenery and seniors"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent"
          aria-hidden
        />
      </div>
      <div className="relative z-10 w-full max-w-section mx-auto px-4 py-16 sm:px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            A Retirement Community Built on Care, Comfort, and Trust
          </h1>
          <p className="mt-5 text-lg text-white/95 leading-relaxed max-w-xl">
            At Legacy Retirement Living, we believe retirement should be peaceful, purposeful, and secure — a time to live fully, with dignity and independence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
