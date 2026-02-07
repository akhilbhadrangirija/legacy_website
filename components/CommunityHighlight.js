'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { PrimaryButton } from './PrimaryButton'

export default function CommunityHighlight() {
  return (
    <section id="community" className="bg-surface">
      <div className="bg-navy text-white py-10">
        <SectionWrapper>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wide mb-1">
                About Our Home
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                A Community That Feels Like Home
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors shrink-0"
            >
              View All
            </Link>
          </div>
        </SectionWrapper>
      </div>
      <div className="py-section bg-surface">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              className="relative aspect-[16/10] rounded-card-lg overflow-hidden shadow-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/arial_view.jpg"
                alt="Legacy community at Vadavucode — greenery and calm"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-charcoal leading-tight sm:text-3xl">
                A Community That Feels Like Home
              </h3>
              <p className="mt-5 text-warm-gray text-[1.0625rem] leading-relaxed max-w-prose">
                Located in Vadavucode near Puthencruz, Legacy Retirement Living spans a thoughtfully planned residential space surrounded by greenery, fresh air, and tranquility.
              </p>
              <p className="mt-4 text-warm-gray text-[1.0625rem] leading-relaxed max-w-prose">
                Every detail is designed with seniors in mind—safe pathways, accessible layouts, and calming open spaces.
              </p>
              <div className="mt-8">
                <PrimaryButton href="/contact-us" className="!bg-accent !text-white hover:!bg-accent/90 !border-0 rounded-xl">
                  Schedule a Tour
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
