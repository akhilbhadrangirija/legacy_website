'use client'

import { SectionWrapper } from '../SectionWrapper'
import { PrimaryButton } from '../PrimaryButton'

export default function AboutCTA() {
  return (
    <section className="py-section bg-surface-warm">
      <SectionWrapper>
        <div className="text-center max-w-xl mx-auto">
          <p className="text-lg text-charcoal leading-relaxed">
            We would be glad to show you around. Schedule a visit and experience Legacy in person.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact-us">Schedule a Visit</PrimaryButton>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
