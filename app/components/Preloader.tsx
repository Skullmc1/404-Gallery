'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Preloader Component
const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0 }} 
    >
      <div className="w-64 h-2 bg-gray-300 border-2 border-black">
        <motion.div
          className="h-full bg-gray-900 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;