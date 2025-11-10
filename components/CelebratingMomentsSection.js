export default function CelebratingMomentsSection() {
  return (
    <section className="bg-dark-brown py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Celebrating moments that matter, by the numbers
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl">
            Our commitment to excellence is reflected in the lives we touch, the families we support, and the community we've built over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image 1 */}
          <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl"></div>
          
          {/* Image 2 with bullet points */}
          <div className="relative">
            <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl mb-6"></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized Care Plans</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Daily Activities</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Medication Reminders</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-6xl font-bold text-white mb-2">300+</div>
            <div className="text-white/80">Happy Residents</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Skilled Nurses</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}

