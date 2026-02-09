'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'
import { Shield, Users, Heart, CheckCircle } from 'lucide-react'

const points = [
  {
    icon: Shield,
    title: 'Transparent operations',
  },
  {
    icon: Users,
    title: 'Dedicated management',
  },
  {
    icon: Heart,
    title: 'Respectful and trained staff',
  },
  {
    icon: CheckCircle,
    title: 'Commitment to resident well-being',
  },
]

export default function TrustAssurance() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-charcoal text-center sm:text-4xl mb-12">
          A Place You Can Trust
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="rounded-full bg-accent/15 p-4 text-accent mb-4">
                <Icon className="h-7 w-7" />
              </div>
              <p className="text-charcoal font-medium">{title}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
