export default function BackedByExperienceSection() {
  return (
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
  )
}

