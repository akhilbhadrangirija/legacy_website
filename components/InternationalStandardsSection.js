'use client'

import Link from 'next/link'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function InternationalStandardsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <section ref={ref} className="bg-light-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center"
        >
          Retirement Homes on par with international standards
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <motion.div 
              style={{ y }}
              className="absolute inset-0"
            >
              <img 
                src='/arial_view1.jpg' 
                alt="International Standard Retirement Homes" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-5 text-dark-brown/70">
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The Legacy is secluded with round the clock security and it's a world unto itself in facilities and self sustainability</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>Besides the well appointed, plush apartment with optional air-conditioning, the outdoors are lavishly spread out to give you infinite freedom, clean air and a sense of belonging in the lap of nature</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>You have all the assistance you may need at your be call. An errand runner to fetch your needy things, a chauffeur in wait to take you to nearby places you may cherish to visit individually or as a group</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>To take care of your or your wellness part, there is a multi-gym with trainer, an ayurveda massage and spa, NABH accredited lab and pharmacy and beauty salon</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The entire property will be maintained to extreme hygiene standards and the disinfected laundry service will be there for your well being</span>
              </motion.li>
            </ul>
            {/* <Link href="/standards" className="inline-block mt-6 text-light-pink font-medium hover:underline">
              Learn More →
            </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
