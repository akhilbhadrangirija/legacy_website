'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { ArrowLeft, Plus } from 'lucide-react'

const heroImage1 = '/carousel/1_13 - Photo.jpg'
const heroImage2 = '/carousel/1_16 - Photo.jpg'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-surface-warm">
      <div className="relative z-10 w-full max-w-section mx-auto px-4 py-16 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-accent/60 hidden lg:block" aria-hidden>
              <ArrowLeft className="h-10 w-10" />
            </div>
            <p className="text-warm-gray text-sm font-medium uppercase tracking-wide mb-3">
              Welcome to Legacy
            </p>
            <h1 className="text-4xl font-bold text-charcoal leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.15]">
              Premium Retirement Living Designed for Comfort & Community
            </h1>
            <p className="mt-5 text-lg text-warm-gray leading-relaxed max-w-prose sm:text-xl">
              A serene, senior-centric lifestyle where independence, care, and connection come together in harmony.
            </p>
            <div className="mt-8">
              <PrimaryButton
                href="/#about-snapshot"
                className="!bg-accent !text-white hover:!bg-accent/90 !border-0 rounded-xl px-8 py-4 text-base"
              >
                Explore Our Community
              </PrimaryButton>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="absolute right-0 top-0 w-24 h-24 rounded-full bg-coral/30 -translate-y-4 translate-x-4 hidden lg:block" aria-hidden />
            <div className="absolute right-8 top-12 text-coral hidden lg:block" aria-hidden>
              <Plus className="h-8 w-8" strokeWidth={2} />
            </div>
            <div className="relative w-full max-w-sm space-y-4">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card-hover">
                <img
                  src={heroImage1}
                  alt="Legacy Retirement Living — serene senior community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card-hover ml-8">
                <img
                  src={heroImage2}
                  alt="Community and care at Legacy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl hidden lg:block" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
