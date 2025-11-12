'use client'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactUsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full">
        <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
          {/* Hero Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 z-10"></div>
            <div className="absolute inset-0 h-[150%]">
              <img 
                src="/family_visit.jpg" 
                alt="Contact Legacy Retirement Living" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Overlay Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
            <div className="max-w-7xl mx-auto w-full text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-script font-semibold text-white mb-4"
              >
                Contact us
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white/90 text-sm md:text-base"
              >
                <Link href="/" className="hover:text-light-pink transition">Home</Link>
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-beige py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Reach out Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-light-pink"></span>
                  <span className="text-dark-brown/70 text-sm font-medium uppercase tracking-wide">Reach out</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-semibold text-dark-brown mb-4 leading-tight"
                >
                  Have questions? we're just a <span className="italic">message</span> away
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-dark-brown/70 text-lg leading-relaxed"
                >
                  Fill out the form below and our team will get back to you shortly with the care and answers you need.
                </motion.p>
              </div>

              {/* Opening Hours Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-dark-brown rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-light-pink flex items-center justify-center">
                    <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold">Opening hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Monday - Friday</span>
                    <span className="text-white">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Saturday - Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-light-cream rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-dark-brown/70 text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-transparent text-dark-brown"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-dark-brown/70 text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-transparent text-dark-brown"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-dark-brown/70 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-transparent text-dark-brown"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-dark-brown/70 text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-transparent text-dark-brown"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-dark-brown/70 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-transparent text-dark-brown resize-none"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-light-pink text-dark-brown px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200"
                  >
                    Submit Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-light-pink"></span>
                <span className="text-dark-brown/70 text-sm font-medium uppercase tracking-wide">Contact us</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold text-dark-brown leading-tight"
              >
                We're here to listen, <span className="italic">help</span>, and support
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-dark-brown font-semibold text-lg mb-2">Address</h3>
                  <p className="text-dark-brown/70">
                    6/342A, Vadavucode P.O.,<br />
                    Puthencruz, Ernakulam - 682310
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-dark-brown font-semibold text-lg mb-2">Email</h3>
                  <div className="space-y-1 text-dark-brown/70">
                    <p>info@legacy.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-light-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-dark-brown font-semibold text-lg mb-2">Phone</h3>
                  <div className="space-y-1 text-dark-brown/70">
                    <p>0484 2828282</p>
                    <p>+91 98950 88888</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

