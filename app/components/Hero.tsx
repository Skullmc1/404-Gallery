'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Hero Component
const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full flex flex-col items-start justify-end p-8 md:p-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      <motion.h1
        className="text-6xl md:text-8xl font-black font-serif uppercase leading-none mb-4"
        variants={itemVariants}
      >
        404 GALLERY
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg md:text-2xl font-sans tracking-wide leading-relaxed"
        variants={itemVariants}
      >
        A curated collection of the internet's most interesting and unexpected 
        404 pages. A tribute to digital dead ends.
      </motion.p>
    </motion.div>
  );
};

export default Hero;