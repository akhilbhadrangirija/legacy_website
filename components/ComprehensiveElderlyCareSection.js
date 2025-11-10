export default function ComprehensiveElderlyCareSection() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-6">
            Comprehensive elderly care for every life stage
          </h2>
          <p className="text-dark-brown/70 mb-6 leading-relaxed max-w-3xl">
            From independent living to specialized medical care, we offer a full spectrum of services designed to meet the evolving needs of our residents at every stage of their journey.
          </p>
          <button className="bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Item 1 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Residential Living</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Comfortable, independent living with access to support services and community amenities.
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Post-Acute</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Specialized care for recovery after hospitalization, surgery, or medical procedures.
              </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Skilled Nursing</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Comprehensive medical care provided by licensed nurses for complex health needs.
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Customized Therapy</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Physical, occupational, and speech therapy tailored to individual recovery goals.
              </p>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Short-Term Stays</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Flexible temporary care options for respite, recovery, or trial stays.
              </p>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-brown mb-2">Nutritional</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                Balanced, nutritious meals designed by dietitians to meet individual dietary needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

