'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

export default function WhoWeAre() {
  return (
    <section className="py-section bg-surface">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative aspect-[4/3] rounded-card-lg overflow-hidden shadow-card order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/building1.jpg"
              alt="Legacy residential environment"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal leading-tight sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 text-warm-gray text-[1.0625rem] leading-relaxed">
              Legacy Retirement Living is a thoughtfully planned senior living community designed to support a fulfilling and independent lifestyle for retirees.
            </p>
            <p className="mt-5 text-warm-gray text-[1.0625rem] leading-relaxed">
              Rooted in the values of care, respect, and community, we provide a safe and nurturing environment where seniors can enjoy their golden years with confidence and peace of mind.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}
