'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'

// Images from /public/images/ folder
const imagesFolder = [
  { src: '/images/amphitheatre.jpg', alt: 'Amphitheatre' },
  { src: '/images/arial_view.jpg', alt: 'Arial view of Legacy community' },
  { src: '/images/art_corner.jpg', alt: 'Art corner' },
  { src: '/images/building1.jpg', alt: 'Building 1' },
  { src: '/images/building2.jpg', alt: 'Building 2' },
  { src: '/images/buildings.jpg', alt: 'Buildings' },
  { src: '/images/coffee_shop.jpg', alt: 'Coffee shop' },
  { src: '/images/dining_area.jpg', alt: 'Dining area' },
  { src: '/images/elderly_care.jpg', alt: 'Elderly care' },
  { src: '/images/family_visits.jpg', alt: 'Family visits' },
  { src: '/images/games_room.jpg', alt: 'Games room' },
  { src: '/images/orchard.jpg', alt: 'Orchard' },
  { src: '/images/yoga_corner.jpg', alt: 'Yoga corner' },
]

// Gallery images from /public/images/gallery/ folder
const galleryImages = Array.from({ length: 52 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.png`,
  alt: `Gallery image ${i + 1}`,
}))

// Combine all images
const allImages = [...imagesFolder, ...galleryImages]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <section className="py-section bg-surface">
        <SectionWrapper>
          <div className="mb-4">
            <p className="text-warm-gray text-sm font-medium uppercase tracking-wide">
              Photo Gallery
            </p>
          </div>
          <motion.h2
            className="text-3xl font-bold text-charcoal sm:text-4xl mb-12 lg:mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Life at Legacy
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
