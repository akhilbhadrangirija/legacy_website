"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/orchard.jpg",
    title: "Nature All Around You",
    caption: "Walk through lush orchards and gardens designed to refresh your soul."
  },
  {
    image: "/images/yoga_corner.jpg",
    title: "Find Your Inner Peace",
    caption: "Start your mornings with yoga and meditation in tranquil green spaces."
  },
  {
    image: "/images/art_corner.jpg",
    title: "Creative Living",
    caption: "Paint, perform, and participate — express yourself every day."
  },
  {
    image: "/images/coffee_shop.jpg",
    title: "Friendship Over Coffee",
    caption: "Enjoy meaningful conversations in our cozy community café."
  },
  {
    image: "/images/dining_area.jpg",
    title: "A Taste of Freedom",
    caption: "Choose from multi-cuisine, à la carte dining designed for your preferences."
  },
  {
    image: "/images/family_visits.jpg",
    title: "Home That Welcomes Everyone",
    caption: "Invite your loved ones anytime — share moments that matter."
  },
  {
    image: "/images/games_room.jpg",
    title: "Stay Active and Engaged",
    caption: "From billiards to cultural events — life here is always in motion."
  }
];

export default function CommunityCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="community" className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h2
          key={slides[index].title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif mb-4 drop-shadow-lg"
        >
          {slides[index].title}
        </motion.h2>
        <motion.p
          key={slides[index].caption}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl font-light"
        >
          {slides[index].caption}
        </motion.p>
      </div>

      {/* Navigation */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 flex gap-2 justify-center w-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

