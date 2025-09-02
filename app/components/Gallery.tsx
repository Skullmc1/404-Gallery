'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '@/data/galleryData';


// Gallery Component
const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 3;
  const totalItems = galleryData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

const carouselVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16">
      <h2 className="text-4xl md:text-5xl font-black font-serif uppercase text-center mb-12">
        The Lost & Forgotten
      </h2>
      <div className="relative w-full max-w-6xl">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 rounded-full bg-white border-2 border-black text-black shadow-lg opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 rounded-full bg-white border-2 border-black text-black shadow-lg opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Carousel Content */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            variants={carouselVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
            custom={direction}
          >
            {galleryData
              .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group border-2 border-black"
                  style={{ paddingTop: '100%', position: 'relative' }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm mt-1 text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;