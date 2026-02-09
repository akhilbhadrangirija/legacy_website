'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PrimaryButton } from './PrimaryButton'
import { ArrowLeft, Plus } from 'lucide-react'
import { useState } from 'react'

const heroImage1 = '/images/gallery/gallery-11.png'
const heroImage2 = '/images/gallery/gallery-16.png'

// Stagger animation variants for text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Floating animation for decorative elements
const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function HeroSection() {
  const [hoveredImage, setHoveredImage] = useState(null)

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
            {/* Floating arrow decoration */}
            <motion.div
              className="absolute -left-2 top-1/2 -translate-y-1/2 text-accent/60 hidden lg:block"
              aria-hidden
              variants={floatingVariants}
              animate="animate"
            >
              <ArrowLeft className="h-10 w-10" />
            </motion.div>

            {/* Staggered text animations */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={itemVariants}
                className="text-warm-gray text-sm font-medium uppercase tracking-wide mb-3"
              >
                Welcome to Legacy
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold text-charcoal leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-[3.25rem] lg:leading-[1.15]"
              >
                Premium Retirement Living Designed for Comfort & Community
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-5 text-lg text-warm-gray leading-relaxed max-w-prose sm:text-xl"
              >
                A serene, senior-centric lifestyle where independence, care, and connection come together in harmony.
              </motion.p>
            </motion.div>

            {/* Animated button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <PrimaryButton
                  href="/#about-snapshot"
                  className="!bg-accent !text-white hover:!bg-accent/90 !border-0 rounded-xl px-8 py-4 text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Our Community
                </PrimaryButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Floating decorative elements */}
            <motion.div
              className="absolute right-0 top-0 w-24 h-24 rounded-full bg-coral/30 -translate-y-4 translate-x-4 hidden lg:block"
              aria-hidden
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div
              className="absolute right-8 top-12 text-coral hidden lg:block"
              aria-hidden
              variants={floatingVariants}
              animate="animate"
            >
              <Plus className="h-8 w-8" strokeWidth={2} />
            </motion.div>

            {/* Image containers with hover effects */}
            <div className="relative w-full max-w-sm space-y-4">
              <motion.div
                className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card-hover cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                onHoverStart={() => setHoveredImage(1)}
                onHoverEnd={() => setHoveredImage(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.img
                  src={heroImage1}
                  alt="Legacy Retirement Living — serene senior community"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredImage === 1 ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </motion.div>
              <motion.div
                className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card-hover ml-8 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                onHoverStart={() => setHoveredImage(2)}
                onHoverEnd={() => setHoveredImage(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.img
                  src={heroImage2}
                  alt="Community and care at Legacy"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredImage === 2 ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </motion.div>
            </div>

            {/* Animated background blur */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl hidden lg:block"
              aria-hidden
              variants={pulseVariants}
              animate="animate"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
