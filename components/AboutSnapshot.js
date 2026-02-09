'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { PrimaryButton } from './PrimaryButton'
import { Check, ArrowRight, Zap, Heart } from 'lucide-react'

export default function AboutSnapshot() {
  return (
    <section id="about-snapshot" className="relative min-h-[480px] md:min-h-[560px] flex items-center">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="/coverImage3.jpg"
          alt="Legacy Retirement Living — thoughtfully designed community"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.5) 40%, rgba(30,32,35,0) 100%)'
          }}
        />
      </div>

      {/* Content overlay */}
      <SectionWrapper className="relative z-10 py-section w-full">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-1 md:order-2 md:max-w-[50%] md:ml-auto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white leading-tight sm:text-4xl drop-shadow-sm">
              Thoughtfully Designed for a Fulfilling Retirement
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Zap, text: 'Peace of Mind — a peaceful, purpose-built environment for seniors seeking comfort, security, and meaningful community life.' },
                { icon: Heart, text: 'Managed Resources — set amidst calm surroundings, our residences support independence while ensuring care is always within reach.' },
                { icon: Check, text: 'Personalized Care — every detail designed with seniors in mind.' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-coral mt-1 shrink-0"><Icon className="h-5 w-5" /></span>
                  <span className="text-white/95 text-[1.0625rem] leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-coral hover:text-coral/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 rounded"
              >
                Learn More About Legacy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          {/* <motion.div
            className="relative order-2 md:order-1 flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:max-w-[320px] bg-coral rounded-card-lg p-6 shadow-card">
              <p className="text-charcoal text-sm leading-relaxed">
                Set amidst calm surroundings, our residences are designed to support independence while ensuring care is always within reach.
              </p>
              <PrimaryButton href="/about" className="mt-4 !bg-white !text-charcoal hover:!bg-white/95 !border-0 rounded-lg">
                Learn More About Legacy
              </PrimaryButton>
            </div>
          </motion.div> */}
        </div>
      </SectionWrapper>
    </section>
  )
}
