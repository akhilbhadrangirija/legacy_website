'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'
import {
  Building2,
  TreePine,
  HeartPulse,
  Shield,
  Users,
  HandHeart,
} from 'lucide-react'

const points = [
  {
    icon: Building2,
    title: 'Senior-friendly architectural design',
  },
  {
    icon: TreePine,
    title: 'Peaceful, green surroundings',
  },
  {
    icon: HeartPulse,
    title: 'Professional healthcare and wellness support',
  },
  {
    icon: Shield,
    title: 'Safe, secure, and accessible living spaces',
  },
  {
    icon: Users,
    title: 'A warm, community-driven environment',
  },
  {
    icon: HandHeart,
    title: 'Focus on independence with support always nearby',
  },
]

export default function WhyLegacy() {
  return (
    <section className="py-section bg-surface">
      <SectionWrapper>
        <motion.h2
          className="text-3xl font-bold text-charcoal sm:text-4xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Legacy
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              className="rounded-card-lg bg-surface p-6 shadow-card border border-charcoal/5 flex gap-4 items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <span className="text-accent shrink-0 mt-0.5">
                <Icon className="h-6 w-6" />
              </span>
              <p className="text-charcoal font-medium leading-relaxed">{title}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
