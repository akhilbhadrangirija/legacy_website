import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-dark-brown py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
            All the amenities to make life on a song
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80" 
              alt="Amenities at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ul className="space-y-6 text-white/80 text-lg mb-12">
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The amenities are thoughtfully provided to make you connected to the outside world as and when you wish. A business centre with secretarial support, high speed wi-fi connection, activity area for intellectual gatherings, monthly cultural programmes.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>Games room with lighter sportive equipment like pool table, chess, card table, table top soccer and the like to fulfill your leisure time with the inmates.</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Business Centre</h3>
                <p className="text-white/80 text-sm">Secretarial support and high-speed Wi-Fi</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cultural Gatherings</h3>
                <p className="text-white/80 text-sm">Spaces for intellectual and cultural events</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.751 9.75l3.501 3.5L14.75 17.25M5 12.25h13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Games Room</h3>
                <p className="text-white/80 text-sm">Billiards, chess, cards, and table soccer</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Modern Gym</h3>
                <p className="text-white/80 text-sm">Fitness center with professional trainers</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ayurveda Spa</h3>
                <p className="text-white/80 text-sm">Massage centre and wellness treatments</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">NABH Laboratory</h3>
                <p className="text-white/80 text-sm">Accredited lab and pharmacy on-site</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Beauty Salon</h3>
                <p className="text-white/80 text-sm">Professional grooming services</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Laundry Service</h3>
                <p className="text-white/80 text-sm">Professional disinfected laundry</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monthly Programs</h3>
                <p className="text-white/80 text-sm">Regular events to stay active and connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


