export default function ExceptionalSeniorCareSection() {
  return (
    <section className="bg-dark-brown py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Exceptional senior care with heart and expertise
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed max-w-3xl">
            At Carely, we believe that exceptional care goes beyond medical attention. Our compassionate team is dedicated to creating meaningful connections, fostering independence, and ensuring every resident feels valued, respected, and at home.
          </p>
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
              <span>24/7 Skilled Nursing</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Compassionate Team</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Safe & Secure Environment</span>
            </li>
            <li className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Engaging Activities</span>
            </li>
          </ul>
        </div>

        {/* Video/Image Placeholder */}
        <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl mb-12 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-light-pink flex items-center justify-center">
            <svg className="w-10 h-10 text-dark-brown ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>

        {/* Feature Descriptions */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resident-First Philosophy</h3>
            <p className="text-white/80 leading-relaxed">
              Every decision we make centers on the well-being, dignity, and happiness of our residents. Their comfort and quality of life are our top priorities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">24/7 Skilled Nursing</h3>
            <p className="text-white/80 leading-relaxed">
              Our licensed nursing staff provides round-the-clock medical care, ensuring residents receive immediate attention whenever they need it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Compassionate Team</h3>
            <p className="text-white/80 leading-relaxed">
              Our caregivers are not just professionals—they're compassionate individuals who form genuine connections with residents and their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

