export default function AdmissionProcessSection() {
  return (
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
  )
}

