'use client'
import Link from 'next/link'
import { useState } from 'react';

const amenitiesList = [
  {
    title: 'Business Centre',
    description: 'Secretarial support and high-speed Wi-Fi',
    image: '/amenities/Meeting.jpg',
  },
  {
    title: 'Cultural Gatherings',
    description: 'Spaces for intellectual and cultural events',
    image: '/amenities/Cultural_events.jpg',
  },
  {
    title: 'Games Room',
    description: 'Billiards, chess, cards, and table soccer',
    image: '/amenities/Game_room.jpg',
  },
  {
    title: 'Modern Gym',
    description: 'Fitness center with professional trainers',
    image: '/amenities/gym.jpg',
  },
 
  {
    title: 'Monthly Programs',
    description: 'Regular events to stay active and connected',
    image: '/amenities/gathering.jpg',  
  }
]

export default function AmenitiesSection() {
  const [amenities, setAmenities] = useState(amenitiesList[0]);
    return (
    <section className="bg-dark-brown py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
          All the amenities to make life on a song
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <ul className="space-y-5 text-white/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The amenities are thoughtfully provided to make you connected to the outside world as and when you wish. A business centre with secretarial support, high speed wi-fi connection, activity area for intellectual gatherings, monthly cultural programmes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>Games room with lighter sportive equipment like pool table, chess, card table, table top soccer and the like to fulfill your leisure time with the inmates.</span>
              </li>
            </ul>
            <Link href="/amenities" className="inline-block text-light-pink font-medium hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={amenities.image} 
              alt="Amenities at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesList.map((amenity) => (
            <div 
              onClick={() => setAmenities(amenity)}
              onMouseEnter={() => setAmenities(amenity)}
              key={amenity.title} 
              className="bg-cover bg-center rounded-2xl backdrop-blur-sm relative overflow-hidden min-h-[200px] group transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
              style={{ backgroundImage: `url(${amenity.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/50 to-transparent transition-opacity duration-300  group-hover:from-transparent group-hover:via-transparent"></div>
              <div className="relative z-10 mt-auto group-hover:bg-black/50 px-6 py-2">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300">{amenity.title}</h3>
                <p className="text-white/90 text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

