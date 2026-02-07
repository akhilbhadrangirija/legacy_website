'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { TestimonialCard } from './TestimonialCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Legacy gives me peace of mind. I live independently, yet I always know help is close by.',
    name: 'Resident',
    role: 'Resident',
  },
  {
    quote:
      'The community and the staff make every day feel safe and welcoming. I am glad we chose Legacy.',
    name: 'Family Member',
    role: 'Family',
  },
  {
    quote:
      'A place that respects your independence while offering care when you need it. That is what retirement should be.',
    name: 'Resident',
    role: 'Resident',
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  )

  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <div className="mb-4">
          <p className="text-warm-gray text-sm font-medium uppercase tracking-wide">
            Testimonials
          </p>
        </div>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl mb-12 lg:mb-14">
          Stories from Our Community
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name + t.quote.slice(0, 20)}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full p-2 text-charcoal hover:bg-charcoal/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-accent' : 'w-2 bg-charcoal/25 hover:bg-charcoal/40'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full p-2 text-charcoal hover:bg-charcoal/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </SectionWrapper>
    </section>
  )
}
