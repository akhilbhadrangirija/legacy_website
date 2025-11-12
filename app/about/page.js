import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark-brown py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-light-pink hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            About Legacy
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Premium Retirement Living — Where Comfort, Care, and Community Come Together
          </p>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="/arial_view.jpg" 
              alt="Aerial view of Legacy Retirement Living" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
              Legacy Premium Retirement Homes is conceived to be the epitome of retirement living. 
              Located in the serene village atmosphere of Vadavucode, near Puthencruz town, our 
              5.5-acre expanse offers a tranquil haven for senior citizens seeking a premium 
              retirement experience.
            </p>
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
              The development is an architect-designed, functionally elegant structure housing 
              100 units of senior-friendly apartments in the first phase. What sets Legacy apart 
              is our commitment to preserving nature — only 25% of the land area is occupied by 
              buildings, with the rest dedicated to luxuriant vegetation and outdoor amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-dark-brown py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the epitome of retirement living, providing a self-sustaining community 
                that offers luxurious accommodation and lifestyle amenities for a contended 
                living experience for senior citizens.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-light-pink flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To create a humanitarian, self-sustaining community that prioritizes the well-being 
                and happiness of our residents over profit, ensuring value for money while providing 
                exceptional care and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8">
            What Makes Legacy Special
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-light-pink font-bold text-2xl mt-1">•</span>
              <div>
                <h3 className="text-xl font-semibold text-dark-brown mb-2">Tranquil Location</h3>
                <p className="text-dark-brown/70">
                  Nestled in a peaceful village atmosphere at Vadavucode, near Puthencruz, 
                  offering the perfect blend of serenity and accessibility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-light-pink font-bold text-2xl mt-1">•</span>
              <div>
                <h3 className="text-xl font-semibold text-dark-brown mb-2">Spacious Design</h3>
                <p className="text-dark-brown/70">
                  Only 25% of the 5.5-acre property is built upon, with the rest dedicated 
                  to lush greenery and outdoor amenities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-light-pink font-bold text-2xl mt-1">•</span>
              <div>
                <h3 className="text-xl font-semibold text-dark-brown mb-2">Senior-Friendly Architecture</h3>
                <p className="text-dark-brown/70">
                  Thoughtfully designed apartments with accessibility and comfort as top priorities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-light-pink font-bold text-2xl mt-1">•</span>
              <div>
                <h3 className="text-xl font-semibold text-dark-brown mb-2">Value Investment</h3>
                <p className="text-dark-brown/70">
                  Own an apartment with undivided share in common areas for a minimum 
                  lease period of 10 years, with renewal options.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden mt-8">
            <img 
              src="/buildings.jpg" 
              alt="Legacy buildings and facilities" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="bg-dark-brown py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            About the Project
          </h2>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
            <div className="space-y-6 text-white/80">
              <div>
                <h4 className="text-light-pink font-semibold text-lg mb-2">Project Developer</h4>
                <p className="text-lg">
                  Manivelil Retirement Living (P) Ltd.
                </p>
              </div>
              <div>
                <h4 className="text-light-pink font-semibold text-lg mb-2">Location</h4>
                <p className="text-lg">
                  Vadavucode near Puthencruz, Ernakulam, Kerala
                </p>
              </div>
              <div>
                <h4 className="text-light-pink font-semibold text-lg mb-2">Property Size</h4>
                <p className="text-lg">
                  5.5 acres of lush, well-planned landscape
                </p>
              </div>
              <div>
                <h4 className="text-light-pink font-semibold text-lg mb-2">Phase 1 Capacity</h4>
                <p className="text-lg">
                  100 senior-friendly apartment units
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <img 
                src="/elderly_care.jpg" 
                alt="Elderly care at Legacy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <img 
                src="/family_visit.jpg" 
                alt="Family visits at Legacy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8">
            Our Philosophy
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
              Legacy is not a profit-driven venture, but a humanitarian, self-sustaining community 
              with the objective of providing luxurious accommodation and lifestyle amenities to 
              ensure a contended living for senior citizens.
            </p>
            <p className="text-dark-brown/70 text-lg leading-relaxed">
              We believe that retirement should be a time of freedom, comfort, and joy. Our 
              community is designed to foster connections, promote wellness, and provide peace 
              of mind for both residents and their families. Every aspect of Legacy is crafted 
              with care, from our architect-designed buildings to our comprehensive amenities and 
              services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

