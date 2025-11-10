export default function PricingSection() {
  return (
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
  )
}

