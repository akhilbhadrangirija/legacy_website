import Link from 'next/link'

export default function CommunityLifeSection() {
  const communityFeatures = [
    "The project is tucked away in a green oasis just a few km from NH 66.",
    "There will be an orchard, garden with sitout, meditation/yoga corner, vegetable garden and a pond for angling.",
    "You will be living among people of your own ilk and social background comprising senior citizens with illustrious careers behind and erstwhile professionals.",
    "The community life here is engaging and meaningful. There's an Art Corner where you can express yourself, an amphitheatre for performing arts, a home theatre to watch your favourite movies and a coffee shop."
  ]

  const amenities = [
    {
      title: "Art Corner",
      image: "/images/art_corner.jpg",
      description: "Creative spaces for artistic expression",
      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Home Theatre",
      image: "/images/family_visits.jpg",
      description: "Entertainment and movie screenings",
      iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    },
    {
      title: "Amphitheatre",
      image: "/images/amphitheatre.jpg",
      description: "Outdoor events and gatherings",
      iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Coffee Shop",
      image: "/images/coffee_shop.jpg",
      description: "Social hub for residents",
      iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    }
  ]

  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center">
          You will belong to a community where the people and place are right
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <ul className="space-y-5 text-dark-brown/70">
              {communityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-light-pink font-bold mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* <Link href="/community" className="inline-block mt-6 text-light-pink font-medium hover:underline">
              Learn More →
            </Link> */}
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="/right_community.jpg" 
              alt="Community Life at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${amenity.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="group bg-light-cream rounded-2xl h-60 overflow-clip transition-transform duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="relative z-10 mt-auto bg-gradient-to-r from-black/50 to-transparent px-6 py-2 transition-colors duration-300 group-hover:from-black/70">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-light-pink">{amenity.title}</h3>
                <p className="text-white/90 text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

