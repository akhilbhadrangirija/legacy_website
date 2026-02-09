'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'
import { Eye, Target, Heart } from 'lucide-react'

const cards = [
  {
    icon: Eye,
    title: 'Vision',
    text: 'To redefine retirement living by creating communities that nurture independence, wellness, and meaningful human connection.',
  },
  {
    icon: Target,
    title: 'Mission',
    text: 'To provide a secure, senior-centric living environment that combines comfort, professional care, and a strong sense of belonging.',
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Dignity, Compassion, Trust, and Community',
  },
]

export default function VisionMission() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-charcoal text-center sm:text-4xl mb-12">
          Our Vision & Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              className="rounded-card-lg bg-surface p-8 shadow-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-6 inline-flex rounded-full bg-accent/15 p-4 text-accent">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">{title}</h3>
              <p className="text-warm-gray leading-relaxed text-[1.0625rem]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
