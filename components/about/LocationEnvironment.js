'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

export default function LocationEnvironment() {
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
              src="/images/gallery/gallery-6.png"
              alt="Legacy location — Vadavucode, calm green surroundings"
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
              A Location That Inspires Peace
            </h2>
            <p className="mt-6 text-warm-gray text-[1.0625rem] leading-relaxed">
              Located in Vadavucode near Puthencruz, Legacy Retirement Living is set amidst calm, green surroundings away from urban chaos yet well connected to essential services.
            </p>
            <p className="mt-5 text-warm-gray text-[1.0625rem] leading-relaxed">
              The environment is carefully chosen to promote mental well-being, physical comfort, and a relaxed pace of life.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}
