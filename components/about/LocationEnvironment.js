'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'
import { MapPin, Trees, Building2, Layers } from 'lucide-react'

const details = [
  { icon: MapPin, label: 'Location', value: 'Vadavucode near Puthencruz, Ernakulam, Kerala' },
  { icon: Trees, label: 'Property size', value: '5.5 acres of lush, well-planned landscape' },
  { icon: Building2, label: 'Phase 1', value: '100 senior-friendly apartment units' },
  { icon: Layers, label: 'Developer', value: 'Manivelil Retirement Living (P) Ltd.' },
]

export default function LocationEnvironment() {
  return (
    <section className="py-section bg-charcoal text-white">
      <SectionWrapper>
        <motion.h2
          className="text-3xl font-semibold text-center sm:text-4xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Location & Environment
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {details.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              className="rounded-card bg-white/10 p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Icon className="h-7 w-7 text-accent mb-3" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">{label}</h3>
              <p className="mt-2 text-white/95 text-sm leading-relaxed">{value}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="relative aspect-video rounded-card-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/buildings.jpg"
            alt="Legacy community buildings and landscape"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </SectionWrapper>
    </section>
  )
}
