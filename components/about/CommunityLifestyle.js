'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

export default function CommunityLifestyle() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative aspect-[16/10] lg:aspect-[4/3] rounded-card-lg overflow-hidden shadow-card order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/gallery/gallery-38.png"
              alt="Life at Legacy — community and connection"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal leading-tight sm:text-4xl">
              Life at Legacy
            </h2>
            <p className="mt-6 text-warm-gray text-[1.0625rem] leading-relaxed">
              Life at Legacy goes beyond comfortable living. Residents enjoy opportunities to socialize, engage in cultural activities, pursue hobbies, and build lasting friendships.
            </p>
            <p className="mt-5 text-warm-gray text-[1.0625rem] leading-relaxed">
              Our community is designed to feel warm, welcoming, and alive — a place where every individual belongs.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}
