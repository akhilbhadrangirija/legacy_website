'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { FeatureCard } from './FeatureCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Building2,
  TreePine,
  HeartPulse,
  Clock,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'

const amenities = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Senior-friendly architecture',
    description: 'Thoughtfully designed spaces for accessibility, safety, and comfort.',
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: 'Landscaped gardens & walking paths',
    description: 'Green spaces and safe pathways for relaxation and gentle exercise.',
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: 'Wellness & medical support',
    description: 'On-site wellness programs and access to medical care when needed.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 assistance',
    description: 'Round-the-clock support so you and your family have peace of mind.',
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8" />,
    title: 'Nutritious dining services',
    description: 'Balanced, senior-friendly meals in a social dining setting.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Cultural & social engagement spaces',
    description: 'Activities and spaces that foster connection and a sense of community.',
  },
]

const chunkSize = 2
const chunks = []
for (let i = 0; i < amenities.length; i += chunkSize) {
  chunks.push(amenities.slice(i, i + chunkSize))
}

export default function AmenitiesGrid() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % chunks.length)
  const prev = () => setIndex((i) => (i - 1 + chunks.length) % chunks.length)

  return (
    <section id="amenities" className="py-section bg-surface-warm">
      <SectionWrapper>
        <div className="mb-4">
          <p className="text-warm-gray text-sm font-medium uppercase tracking-wide">
            Our Amenities
          </p>
        </div>
        <motion.h2
          className="text-3xl font-bold text-charcoal sm:text-4xl mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Amenities That Support Everyday Well-Being
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {chunks[index].map((item, i) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="rounded-full p-2 text-charcoal hover:bg-charcoal/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {chunks.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-accent' : 'w-2 bg-charcoal/25 hover:bg-charcoal/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="rounded-full p-2 text-charcoal hover:bg-charcoal/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
