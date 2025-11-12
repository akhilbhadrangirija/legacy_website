import Link from 'next/link'
import Image from 'next/image'

export default function PhilosophySection() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center">
          Building a Legacy of Trust
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-6">
              Legacy Premium Retirement Homes is conceived to be the epitome of retirement living.
            </p>
            <ul className="space-y-4 text-dark-brown/70">
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The 5.5 acre expanse is located at Vadavucode, near Puthencruz town in a tranquil village atmosphere</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The development is an architect-designed, functionally elegant structure to house in senior-friendly 100 units of apartments to suite your taste in the first phase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The complex will occupy only 25% of the land area and the rest is earmarked for luxuriant vegetation and outdoor amenities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The project is not a profit driven venture, but a humanitarian, self sustaining community with the objective of providing luxurious accommodation and other lifestyle amenities to ensure a contended living for the senior citizens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>This is a value for money business proposition as well. You invest in the property by owning an apartment with undivided share in the common area for a minimum lease period of 10 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>You will have the apartment registered in your name for 10 years and on completion of the lease you have option to renewal</span>
              </li>
            </ul>
            <Link href="/philosophy" className="inline-block mt-6 text-light-pink font-medium hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="relative h-[700px] rounded-2xl overflow-hidden">
            <img 
              src='/buildings.jpg' 
              alt="Legacy Premium Retirement Homes" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

