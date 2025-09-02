'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Not Found Component
const NotFound: React.FC = () => {
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
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 text-center bg-gray-50 text-gray-900 font-sans">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-9xl md:text-[10rem] font-black font-serif uppercase leading-none"
          variants={itemVariants}
        >
          404
        </motion.h1>
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-light max-w-lg"
          variants={itemVariants}
        >
          Lost in the Digital Void
        </motion.p>
        <Link href="/">
        <motion.p
          className="mt-8 px-6 py-3 font-mono text-base uppercase border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300"
          variants={itemVariants}
        >Return to The Gallery
        </motion.p></Link>
      </motion.div>
    </div>
  );
};

export default NotFound;