'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { ServiceCard } from './ServiceCard'
import {
  Home,
  Heart,
  Activity,
  Users,
} from 'lucide-react'

const options = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Independent Living',
    description: 'For active seniors who value freedom, privacy, and a vibrant community.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Assisted Living',
    description: 'Personalized support for daily needs while maintaining dignity and independence.',
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: 'Wellness & Healthcare',
    description: 'On-call medical support, wellness programs, and preventative care.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Lifestyle & Community',
    description: 'Social, cultural, and recreational activities that keep life engaging.',
  },
]

export default function LivingOptions() {
  return (
    <section id="living-options" className="py-section bg-surface">
      <SectionWrapper>
        <motion.h2
          className="text-3xl font-bold text-charcoal text-center sm:text-4xl mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Living Options Tailored to You
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
