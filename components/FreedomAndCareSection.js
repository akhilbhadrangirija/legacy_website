'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FreedomAndCareSection() {
  return (
    <section className="bg-light-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center"
        >
          All the freedom you crave with all there is to care
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-5 text-dark-brown/70 mb-6">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>Feel at home with happiness and freedom at Legacy. The kind of freedom you enjoyed with your family at your own home in your robust years. The gardening, nurturing some fruit trees, tending to the flower beds or lazy walks in the backyard. It's your choice, as you wish and as the health may permit.</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>Round the clock nursing assistance with a nursing bay on each floor. Weekly visit and consultation with doctors, an ambulance ready any time. We have a tie-up with nearby Kolencherry Medical Mission Multi-speciality Hospital, which is only 10 minutes off.</span>
              </motion.li>
            </ul>
            {/* <Link href="/care" className="inline-block text-light-pink font-medium hover:underline">
              Learn More →
            </Link> */}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img 
              src="/elderly_care.jpg" 
              alt="Freedom and Care at Legacy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

