'use client'

import { SectionWrapper } from '../SectionWrapper'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'

export default function AboutCTA() {
  return (
    <section className="py-section bg-navy text-white">
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-white leading-relaxed sm:text-2xl">
            Experience a retirement lifestyle built around peace, dignity, and care.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton
              href="/contact-us"
              className="!bg-accent !text-white hover:!bg-accent/90 !border-0 rounded-xl px-8 py-4"
            >
              Schedule a Visit
            </PrimaryButton>
            <SecondaryButton
              href="/contact-us"
              className="!border-white !text-white hover:!bg-white/10 rounded-xl px-8 py-4"
            >
              Contact Us
            </SecondaryButton>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
