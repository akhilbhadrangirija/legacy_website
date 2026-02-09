'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

export default function CarePhilosophy() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper size="narrow">
        <motion.h2
          className="text-3xl font-bold text-charcoal text-center sm:text-4xl mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Our Care Philosophy
        </motion.h2>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-warm-gray text-[1.0625rem] leading-relaxed">
            At Legacy, care is not intrusive — it is supportive.
          </p>
          <p className="mt-5 text-warm-gray text-[1.0625rem] leading-relaxed">
            We believe seniors thrive best when they are empowered to live independently, with the assurance that help is available whenever needed. Our approach balances freedom, safety, and personalized attention, ensuring every resident feels respected and valued.
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  )
}
