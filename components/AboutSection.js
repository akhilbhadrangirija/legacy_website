'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-dark-brown mb-12 text-center"
        >
          About Legacy
        </motion.h2>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-dark-brown mb-6">
              Our Story
            </h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-dark-brown/70 text-lg leading-relaxed mb-6"
            >
              Legacy Premium Retirement Homes is conceived to be the epitome of retirement living. 
              Located in the serene village atmosphere of Vadavucode, near Puthencruz town, our 
              5.5-acre expanse offers a tranquil haven for senior citizens seeking a premium 
              retirement experience.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-dark-brown/70 text-lg leading-relaxed mb-6"
            >
              The development is an architect-designed, functionally elegant structure housing 
              100 units of senior-friendly apartments in the first phase. What sets Legacy apart 
              is our commitment to preserving nature — only 25% of the land area is occupied by 
              buildings, with the rest dedicated to luxuriant vegetation and outdoor amenities.
            </motion.p>
            <Link 
              href="/about" 
              className="inline-block mt-4 text-light-pink font-medium hover:underline"
            >
              Learn More →
            </Link>
          </motion.div>
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/arial_view.jpg" 
              alt="Aerial view of Legacy Retirement Living" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-dark-brown rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the epitome of retirement living, providing a self-sustaining community 
              that offers luxurious accommodation and lifestyle amenities for a contended 
              living experience for senior citizens.
            </p>
          </motion.div>

          <motion.div 
            className="bg-dark-brown rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To create a humanitarian, self-sustaining community that prioritizes the well-being 
              and happiness of our residents over profit, ensuring value for money while providing 
              exceptional care and comfort.
            </p>
          </motion.div>
        </div> */}
      </div>
    </section>
  )
}

