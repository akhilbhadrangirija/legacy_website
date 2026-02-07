'use client'

import { SectionWrapper } from './SectionWrapper'
import { PrimaryButton } from './PrimaryButton'

export default function PrimaryCTA() {
  return (
    <section className="bg-surface">
      <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
          <img
            src="/carousel/1_19 - Photo.jpg"
            alt="Legacy community — fulfilling retirement"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-surface-warm flex items-center py-16 lg:py-0">
          <SectionWrapper className="lg:py-16">
            <h2 className="text-3xl font-bold text-charcoal leading-tight sm:text-4xl">
              Begin a retirement life built on peace, dignity, and care.
            </h2>
            <div className="mt-8">
              <PrimaryButton
                href="/contact-us"
                className="rounded-xl border-2 border-accent !bg-transparent !text-charcoal hover:!bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact Us
              </PrimaryButton>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
