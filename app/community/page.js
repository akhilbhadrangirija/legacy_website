import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-dark-brown mb-8">
            You will belong to a community where the people and place are right
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1521737605893-282e58a3d4c6?w=1200&q=80" 
              alt="Community Life at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ul className="space-y-6 text-dark-brown/70 text-lg mb-12">
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The project is tucked away in a green oasis just a few km from NH 66.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>There will be an orchard, garden with sitout, meditation/yoga corner, vegetable garden and a pond for angling.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>You will be living among people of your own ilk and social background comprising senior citizens with illustrious careers behind and erstwhile professionals.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The community life here is engaging and meaningful. There's an Art Corner where you can express yourself, an amphitheatre for performing arts, a home theatre to watch your favourite movies and a coffee shop.</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light-cream rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-2">Art Corner</h3>
                <p className="text-dark-brown/70 text-sm">Creative spaces for artistic expression</p>
              </div>

              <div className="bg-light-cream rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-2">Home Theatre</h3>
                <p className="text-dark-brown/70 text-sm">Entertainment and movie screenings</p>
              </div>

              <div className="bg-light-cream rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-2">Amphitheatre</h3>
                <p className="text-dark-brown/70 text-sm">Outdoor events and gatherings</p>
              </div>

              <div className="bg-light-cream rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-2">Coffee Shop</h3>
                <p className="text-dark-brown/70 text-sm">Social hub for residents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


