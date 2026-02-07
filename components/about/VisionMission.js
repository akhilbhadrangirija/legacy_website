'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../SectionWrapper'
import { Eye, Target } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-section bg-charcoal text-white">
      <SectionWrapper>
        <h2 className="text-3xl font-semibold text-center sm:text-4xl mb-12">
          Vision & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="rounded-card-lg bg-white/10 backdrop-blur-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-accent/20 p-3 text-accent">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-white/85 leading-relaxed">
              To be the epitome of retirement living, providing a self-sustaining community that offers luxurious accommodation and lifestyle amenities for a contended living experience for senior citizens.
            </p>
          </motion.div>
          <motion.div
            className="rounded-card-lg bg-white/10 backdrop-blur-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-accent/20 p-3 text-accent">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white/85 leading-relaxed">
              To create a humanitarian, self-sustaining community that prioritizes the well-being and happiness of our residents over profit, ensuring value for money while providing exceptional care and comfort.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}
