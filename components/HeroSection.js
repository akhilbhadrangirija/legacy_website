'use client'

import Link from 'next/link'
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const carouselImages = [
  '/carousel/1_13 - Photo.jpg',
  '/carousel/1_16 - Photo.jpg',
  '/carousel/1_18 - Photo.jpg',
  '/carousel/V_Photo - 3.jpg'
]

const mobileCarouselImages = [
  '/carousel/mobile/pic_1.jpg',
  '/carousel/mobile/pic_2.jpg',
  '/carousel/mobile/pic_3.jpg',
  '/carousel/mobile/pic_4.jpg'
]

export default function HeroSection() {
  const ref = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const images = isMobile ? mobileCarouselImages : carouselImages
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isMobile])

  return (
    <section ref={ref} className="relative w-full">
      <div className="relative w-full min-h-[700px] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        {/* Carousel Background */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[150%]"
          style={{ y, opacity }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={(isMobile ? mobileCarouselImages : carouselImages)[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/50 z-10"></div>
              <img 
                src={(isMobile ? mobileCarouselImages : carouselImages)[currentIndex]} 
                alt="Legacy Premium Retirement Living" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Overlay Text */}
        <div className="absolute bottom-20 left-6 right-6 md:right-auto text-white max-w-2xl z-20">
          <h2 className="text-4xl md:text-7xl font-script font-semibold mb-4 leading-tight">
          Enjoy your golden<br />
          years in bliss
          </h2>
          <p className="text-white/95 mb-4 leading-relaxed">
            Leaving loved ones at home or relying on outside help can be difficult—and old age homes don’t always feel right.
          </p>
          <p className="text-white/95 mb-6 leading-relaxed">
            Legacy Premium Retirement Homes was created to provide a caring, vibrant community for seniors seeking comfort and connection.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact-us" className="bg-light-pink text-dark-brown px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Book a Free Visit
            </Link>
            <Link href="/about" className="text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Learn More
            </Link>
            {/* <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">4.9 (48 Reviews)</span>
            </div> */}
          </div>
        </div>

        {/* Right Icons */}
        {/* <div className="absolute top-6 right-6 flex gap-4 z-10">
          <button className="text-dark-brown bg-white/80 rounded-full p-2 hover:bg-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button className="text-dark-brown bg-white/80 rounded-full p-2 hover:bg-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  )
}

