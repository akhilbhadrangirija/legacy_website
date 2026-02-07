'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'

const values = [
  {
    title: 'Tranquil location',
    description: 'Nestled in a peaceful village atmosphere at Vadavucode, near Puthencruz, offering the perfect blend of serenity and accessibility.',
  },
  {
    title: 'Spacious design',
    description: 'Only 25% of the 5.5-acre property is built upon, with the rest dedicated to lush greenery and outdoor amenities.',
  },
  {
    title: 'Senior-friendly architecture',
    description: 'Thoughtfully designed apartments with accessibility and comfort as top priorities.',
  },
  {
    title: 'Value and clarity',
    description: 'Own an apartment with undivided share in common areas for a minimum lease period of 10 years, with renewal options.',
  },
]

export default function WhyLegacy() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <motion.h2
          className="text-3xl font-semibold text-charcoal sm:text-4xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Why Legacy
        </motion.h2>
        <ul className="space-y-6 max-w-prose">
          {values.map((item, i) => (
            <motion.li
              key={item.title}
              className="flex gap-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="text-accent font-semibold mt-1 shrink-0">•</span>
              <div>
                <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed mt-1">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  )
}
