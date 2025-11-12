export default function FreedomAndCareSection() {
  return (
    <section className="bg-light-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-6 text-center">
          Freedom and Care Combined
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
            At Legacy, residents experience the happiness and freedom of home life, while having every need taken care of. Gardening, growing fruit trees, or enjoying leisurely walks are part of daily life. The environment encourages independence, with nursing assistance available around the clock.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-beige rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown">24/7 Nursing Care</h3>
              </div>
              <p className="text-dark-brown/70">
                Each floor has a nursing bay, and doctors visit weekly. An ambulance is available at any time.
              </p>
            </div>
            <div className="bg-beige rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown">Medical Partnership</h3>
              </div>
              <p className="text-dark-brown/70">
                Legacy has partnered with Kolencherry Medical Mission Multi-Speciality Hospital, located just ten minutes away, to ensure prompt and professional medical care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

