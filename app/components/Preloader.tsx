'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Preloader Component
const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.p
        className="text-2xl md:text-3xl font-black font-serif uppercase text-gray-900"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;