import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function FreedomPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-dark-brown mb-8">
            A community that won't suffocate you with restrictions
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80" 
              alt="Freedom at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ul className="space-y-6 text-dark-brown/70 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>You may receive visitors at any time of the day. You may spend time with your offspring and siblings as much as you wish and they can live at your apartment for a few days at a stretch.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>We understand that the best ingredient that sustains your health and happiness is what you eat. You won't be forced to devour a prescribed and regimented bland food. You have the freedom to choose from an assorted multi cuisine menu. Your choice will be vast and à la carte.</span>
              </li>
            </ul>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-light-cream rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Flexible Visitation</h3>
                <p className="text-dark-brown/70">
                  Visitors welcome at any time. Family members can stay for extended periods in your apartment.
                </p>
              </div>
              <div className="bg-light-cream rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark-brown mb-4">Dining Freedom</h3>
                <p className="text-dark-brown/70">
                  Choose from an assorted multi-cuisine menu with à la carte options. No prescribed or regimented meals.
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


