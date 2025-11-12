import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-dark-brown mb-8">
            Building a Legacy of Trust
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80" 
              alt="Legacy Premium Retirement Homes" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
              Legacy Premium Retirement Homes is conceived to be the epitome of retirement living.
            </p>
            
            <ul className="space-y-6 text-dark-brown/70 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The 5.5 acre expanse is located at Vadavucode, near Puthencruz town in a tranquil village atmosphere</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The development is an architect-designed, functionally elegant structure to house in senior-friendly 100 units of apartments to suite your taste in the first phase</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The complex will occupy only 25% of the land area and the rest is earmarked for luxuriant vegetation and outdoor amenities</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>The project is not a profit driven venture, but a humanitarian, self sustaining community with the objective of providing luxurious accommodation and other lifestyle amenities to ensure a contended living for the senior citizens</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>This is a value for money business proposition as well. You invest in the property by owning an apartment with undivided share in the common area for a minimum lease period of 10 years</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-light-pink font-bold text-2xl mt-1">w</span>
                <span>You will have the apartment registered in your name for 10 years and on completion of the lease you have option to renewal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


