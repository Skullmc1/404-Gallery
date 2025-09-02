'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple Page Component
const Page: React.FC = () => {
  const fullText = "I don't have that ;-; ";
  const [typedText, setTypedText] = useState('');
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1)); // Use slice to avoid concatenation issues
        index++;
        timeout = setTimeout(type, 100); // 0.1s stagger
      } else {
        setIsTypingFinished(true);
      }
    };

    const initialDelay = setTimeout(type, 3000); // 3-second delay before typing starts

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, []);

  const cursorVariants = {
    blink: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-start justify-center p-8 bg-gray-50 text-gray-900 font-sans">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-black font-serif uppercase text-left max-w-lg"
        style={{ whiteSpace: 'pre-wrap' }} // Ensure whitespace is preserved
      >
        {typedText}
        {!isTypingFinished && (
          <motion.span
            className="inline-block w-1 h-8 bg-gray-900 ml-1"
            variants={cursorVariants}
            animate="blink"
          />
        )}
      </motion.h1>
    </div>
  );
};

export default Page;