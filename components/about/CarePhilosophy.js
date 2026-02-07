'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

export default function CarePhilosophy() {
  return (
    <section className="py-section bg-surface">
      <SectionWrapper>
        <motion.h2
          className="text-3xl font-semibold text-charcoal sm:text-4xl mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Our Philosophy
        </motion.h2>
        <motion.div
          className="rounded-card-lg bg-surface-warm p-8 shadow-card max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-warm-gray text-[1.0625rem] leading-relaxed">
            Legacy is not a profit-driven venture, but a humanitarian, self-sustaining community with the objective of providing luxurious accommodation and lifestyle amenities to ensure a contended living for senior citizens.
          </p>
          <p className="text-warm-gray text-[1.0625rem] leading-relaxed mt-5">
            We believe that retirement should be a time of freedom, comfort, and joy. Our community is designed to foster connections, promote wellness, and provide peace of mind for both residents and their families.
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  )
}
