'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const amenitiesList = [
  {
    title: 'Business Centre',
    description: `The business centre at Legacy provides a quiet, professional environment with high-speed Wi-Fi and secretarial support. Residents can easily manage personal affairs, pursue hobbies, or stay connected with friends and family. Ergonomic furniture and natural lighting create a comfortable workspace, and friendly staff are always on hand to help with printing, scanning, and basic clerical needs. It’s designed to help you stay independent, productive, and engaged.`,
    image: '/amenities/gathering.jpg',
  },
  {
    title: 'Cultural Gatherings',
    description: `Legacy’s cultural spaces are perfect for performances, creative workshops, and lively discussions. Residents can enjoy music, art, theatre, and literary events in the amphitheatre or activity hall. These venues host regular programs that foster social engagement and meaningful exchanges, enriching daily life with art and creativity. Whether participating or attending, everyone feels part of a vibrant community.`,
    image: '/amenities/Cultural_events.jpg',
  },
  {
    title: 'Games Room',
    description: `The games room at Legacy is a social hub for friendly matches and relaxation. Equipped for billiards, chess, cards, carrom, and table soccer, it provides the ideal spot to share laughter and conversations. Bright, airy, and comfortably furnished, it’s a welcoming space to unwind, stay mentally active, and form new friendships with fellow residents.`,
    image: '/amenities/Game_room.jpg',
  },
  {
    title: 'Modern Gym',
    description: `Legacy’s modern gym encourages safe and enjoyable fitness for all abilities. It features state-of-the-art equipment, from treadmills and bikes to yoga mats and light weights. Experienced trainers guide you through personalized routines, helping you build strength, flexibility, and wellness. Large windows bring in natural light and views of lush gardens, making every workout energizing and uplifting.`,
    image: '/amenities/gym.jpg',
  },
  {
    title: 'Monthly Programs',
    description: `Legacy’s monthly programs keep community life vibrant and engaging. Residents enjoy a diverse calendar of cultural events, workshops, wellness talks, and group outings. Each activity is designed to inspire, educate, and entertain, fostering strong social bonds and encouraging new interests. At Legacy, staying active is all about joy, connection, and celebrating life together.`,
    image: '/amenities/Meeting.jpg',
  },
  {
    title: 'Multi-Cuisine Dining',
    description: `Dining at Legacy is a celebration of choice, taste, and freedom. Residents can enjoy a wide variety of delicious multi-cuisine meals prepared by expert chefs and served with warmth and care. From regional favorites to international dishes, every plate reflects freshness, quality, and creativity. Whether you prefer homely comfort food or wish to explore new flavors, the à la carte menu offers endless options. The bright, welcoming dining area suits both peaceful meals and lively gatherings. Dietary preferences and health needs are thoughtfully met—because at Legacy, every meal nourishes both body and joy.`,
    image: '/images/dining_area.jpg',
  }
];


export default function AmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const amenities = amenitiesList[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % amenitiesList.length);
    }, 3000); // Change every 3 seconds (3000ms)

    return () => clearInterval(interval);
  }, []);

  const handleAmenitySelect = (amenity) => {
    const index = amenitiesList.findIndex(a => a.title === amenity.title);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-dark-brown py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
          All the amenities to make life on a song
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
            <div className="flex flex-col gap-2 rounded-md p-2">
              <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">{amenities.title}</h3>
              <p className="text-white/90 text-sm">{amenities.description}</p>
            </div>
            {/* <Link href="/amenities" className="inline-block text-light-pink font-medium hover:underline">
              Learn More →
            </Link> */}
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
          {amenitiesList.map((amenity, index) => {
            const isSelected = index === currentIndex;
            return (
              <div 
                onClick={() => handleAmenitySelect(amenity)}
                onMouseEnter={() => handleAmenitySelect(amenity)}
                key={amenity.title} 
                className={`bg-cover bg-center rounded-2xl backdrop-blur-sm relative overflow-hidden min-h-[200px] group transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col cursor-pointer ${
                  isSelected ? 'ring-4 ring-light-pink shadow-2xl scale-105' : ''
                }`}
                style={{ backgroundImage: `url(${amenity.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/50 to-transparent transition-opacity duration-300  group-hover:from-transparent group-hover:via-transparent"></div>
                <div className="relative z-10 mt-auto group-hover:bg-black/50 px-6 py-2">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300">{amenity.title}</h3>
                  {/* <p className="text-white/90 text-sm">{amenity.description}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

