'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Footer Component
const Footer: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-start justify-end p-8 md:p-16 bg-gray-100 text-gray-900 border-t-2 border-black">
      <h2 className="text-4xl md:text-5xl font-black font-serif uppercase mb-4">
        The End of the Line
      </h2>
      <p className="max-w-lg text-lg md:text-xl text-gray-600 mb-8">
        A final resting place for the digital lost.
      </p>
      
      <div className="flex space-x-6 text-sm md:text-base font-mono mb-8">
        <a href="contact" className="hover:text-gray-500 transition-colors">
          Contact
        </a>
        <a href="twitter" className="hover:text-gray-500 transition-colors">
          Twitter
        </a>
        <a href="https://github.com/Skullmc1" className="hover:text-gray-500 transition-colors">
          GitHub
        </a>
      </div>

      <p className="text-sm md:text-base font-sans text-gray-600">
        A project by{' '}
        <motion.span
          className="font-bold text-gray-900 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Qclid
        </motion.span>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;