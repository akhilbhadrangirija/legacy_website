import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function CarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-light-cream py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-dark-brown mb-8">
            All the freedom you crave with all there is to care
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=80" 
              alt="Freedom and Care at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ul className="space-y-6 text-dark-brown/70 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>Feel at home with happiness and freedom at Legacy. The kind of freedom you enjoyed with your family at your own home in your robust years. The gardening, nurturing some fruit trees, tending to the flower beds or lazy walks in the backyard. It's your choice, as you wish and as the health may permit.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>Round the clock nursing assistance with a nursing bay on each floor. Weekly visit and consultation with doctors, an ambulance ready any time. We have a tie-up with nearby Kolencherry Medical Mission Multi-speciality Hospital, which is only 10 minutes off.</span>
              </li>
            </ul>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-beige rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark-brown mb-4">24/7 Nursing Care</h3>
                <p className="text-dark-brown/70">
                  Each floor has a nursing bay, and doctors visit weekly. An ambulance is available at any time.
                </p>
              </div>
              <div className="bg-beige rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Medical Partnership</h3>
                <p className="text-dark-brown/70">
                  Legacy has partnered with Kolencherry Medical Mission Multi-Speciality Hospital, located just ten minutes away, to ensure prompt and professional medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


