export default function CareServicesSection() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown text-center mb-12">
          Care services that prioritize health and happiness
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Service Card 1 */}
          <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark-brown mb-4">Assisted Living</h3>
            <p className="text-dark-brown/70 mb-6 leading-relaxed">
              Comprehensive support for daily activities while maintaining independence and dignity in a comfortable, home-like setting.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 Care Online</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Daily Activities</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Medication Reminders</span>
              </li>
            </ul>
            <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark-brown mb-4">Skilled Nursing Care</h3>
            <p className="text-dark-brown/70 mb-6 leading-relaxed">
              Professional medical care provided by licensed nurses for residents with complex health needs requiring ongoing medical attention.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Constant Care</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Therapy & Rehab</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Wound Care</span>
              </li>
            </ul>
            <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark-brown mb-4">Memory Care</h3>
            <p className="text-dark-brown/70 mb-6 leading-relaxed">
              Specialized care for residents with Alzheimer's, dementia, and other memory-related conditions in a secure, supportive environment.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Safe & Secure Zone</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Cognitive Activities</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized Support</span>
              </li>
            </ul>
            <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
          </div>

          {/* Service Card 4 */}
          <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark-brown mb-4">Short-Term Care</h3>
            <p className="text-dark-brown/70 mb-6 leading-relaxed">
              Flexible short-term care options for recovery, respite, or temporary stays with the same high-quality care and attention.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Post-Op Care</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Respite Care</span>
              </li>
              <li className="flex items-center gap-3 text-dark-brown">
                <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Vacation Only Stays</span>
              </li>
            </ul>
            <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}

