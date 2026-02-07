'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { PrimaryButton } from './PrimaryButton'
import { Check, ArrowRight, Zap, Heart } from 'lucide-react'

export default function AboutSnapshot() {
  return (
    <section id="about-snapshot" className="py-section bg-surface">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal leading-tight sm:text-4xl">
              Thoughtfully Designed for a Fulfilling Retirement
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Zap, text: 'Peace of Mind — a peaceful, purpose-built environment for seniors seeking comfort, security, and meaningful community life.' },
                { icon: Heart, text: 'Managed Resources — set amidst calm surroundings, our residences support independence while ensuring care is always within reach.' },
                { icon: Check, text: 'Personalized Care — every detail designed with seniors in mind.' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent mt-1 shrink-0"><Icon className="h-5 w-5" /></span>
                  <span className="text-warm-gray text-[1.0625rem] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                Learn More About Legacy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden">
              <img
                src="/arial_view.jpg"
                alt="Legacy Retirement Living — thoughtfully designed community"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 left-4 md:left-auto md:right-4 md:max-w-[280px] bg-coral rounded-card-lg p-6 shadow-card">
                <p className="text-charcoal text-sm leading-relaxed">
                  Set amidst calm surroundings, our residences are designed to support independence while ensuring care is always within reach.
                </p>
                <PrimaryButton href="/about" className="mt-4 !bg-white !text-charcoal hover:!bg-white/95 !border-0 rounded-lg">
                  Learn More About Legacy
                </PrimaryButton>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl hidden md:block" aria-hidden />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}
