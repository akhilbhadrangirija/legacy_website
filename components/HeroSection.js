export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-200 to-gray-300">
        {/* Hero Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
        
        {/* Overlay Text */}
        <div className="absolute bottom-20 left-6 text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Life at a leisurely pace<br />
          Living with amazing grace
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Book a Free Visit
            </button>
            {/* <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">4.9 (48 Reviews)</span>
            </div> */}
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
  )
}

