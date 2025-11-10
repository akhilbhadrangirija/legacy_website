export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-beige px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-script text-dark-brown">Carely.</h1>
        <button className="text-dark-brown">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-200 to-gray-300">
          {/* Hero Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-20 left-6 text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Trusted elderly care designed with heart, respect, and experience
            </h2>
            <div className="flex items-center gap-4">
              <button className="bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Book a Free Visit
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
                </div>
                <span className="text-white font-medium">4.9 (2.5k Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="absolute top-6 right-6 flex gap-4 z-10">
            <button className="text-dark-brown bg-white/80 rounded-full p-2 hover:bg-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="text-dark-brown bg-white/80 rounded-full p-2 hover:bg-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Backed by experience Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown text-center mb-12 max-w-4xl mx-auto">
            Backed by experience, guided by empathy — we provide expert care that prioritizes senior wellness, independence, and family peace of mind.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-4">24/7 Skilled Nursing Support</h3>
              <p className="text-dark-brown/70 mb-4 leading-relaxed">
                Our dedicated team of skilled nurses provides round-the-clock care, ensuring your loved ones receive the medical attention and support they need at any time.
              </p>
              <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
            </div>

            {/* Card 2 */}
            <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-4">Personalized Care Plans</h3>
              <p className="text-dark-brown/70 mb-4 leading-relaxed">
                Every resident receives a customized care plan tailored to their unique needs, preferences, and health requirements, ensuring the best possible quality of life.
              </p>
              <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
            </div>

            {/* Card 3 */}
            <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-4">Safe, Supportive Environment</h3>
              <p className="text-dark-brown/70 mb-4 leading-relaxed">
                Our facilities are designed with safety and comfort in mind, creating a warm and secure environment where residents can thrive and families can have peace of mind.
              </p>
              <a href="#" className="text-light-pink font-medium hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Care services Section */}
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

      {/* Exceptional senior care Section */}
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

      {/* Celebrating moments Section */}
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

      {/* Comprehensive elderly care Section */}
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

      {/* Pricing Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown text-center mb-12">
            Compassionate care that won't break your budget
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Basic Plan */}
            <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-dark-brown mb-4">Basic Plan</h3>
              <p className="text-dark-brown/70 mb-6 leading-relaxed">
                Essential care services for residents who need basic support and assistance with daily activities.
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-dark-brown">$39</span>
                <span className="text-dark-brown ml-2">Month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Daily Assistance</span>
                </li>
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Meal Services</span>
                </li>
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Housekeeping</span>
                </li>
              </ul>
              <button className="w-full bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Get Started With Plan
              </button>
            </div>

            {/* Standard Plan - Highlighted */}
            <div className="bg-dark-brown rounded-2xl p-8 shadow-lg transform scale-105">
              <h3 className="text-2xl font-semibold text-white mb-4">Standard Plan</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Comprehensive care with skilled nursing support and personalized attention for residents with moderate care needs.
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-white ml-2">Month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Skilled Nursing</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <svg className="w-5 h-5 text-light-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Therapy Services</span>
                </li>
              </ul>
              <button className="w-full bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Get Started With Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-dark-brown mb-4">Premium Plan</h3>
              <p className="text-dark-brown/70 mb-6 leading-relaxed">
                Premium care with enhanced services, specialized medical attention, and luxury amenities for the highest level of comfort.
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-dark-brown">$59</span>
                <span className="text-dark-brown ml-2">Month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All Standard Features</span>
                </li>
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Medical Support</span>
                </li>
                <li className="flex items-center gap-3 text-dark-brown">
                  <svg className="w-5 h-5 text-dark-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Luxury Amenities</span>
                </li>
              </ul>
              <button className="w-full bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Get Started With Plan
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-dark-brown/30"></div>
            <div className="w-2 h-2 rounded-full bg-dark-brown"></div>
            <div className="w-2 h-2 rounded-full bg-dark-brown/30"></div>
          </div>
        </div>
      </section>

      {/* Admission process Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown text-center mb-12">
            Our admission process made simple and supportive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Schedule a Free Consultation</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  Begin your journey by scheduling a complimentary consultation where we'll discuss your needs, answer questions, and provide a personalized tour of our facilities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Personalized Care</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  Our team works closely with you and your family to develop a comprehensive care plan tailored to your specific health needs, preferences, and lifestyle goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Choose Your Care Option</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  Select from our range of care options—from assisted living to skilled nursing—that best fits your current needs and future plans.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-light-cream rounded-2xl p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Move-In & Welcome Day</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  On your move-in day, our team ensures a smooth transition, helping you settle in comfortably and introducing you to your new community and care team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

