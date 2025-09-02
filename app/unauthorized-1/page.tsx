'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const glitchVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const textArray = ['ERROR 404', 'PAGE NOT FOUND', 'SYSTEM FAILURE'];

export default function NotFound() {
  const [displayText, setDisplayText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const currentIndex = textArray.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 1000); // Change text every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-lime-400 font-mono p-4 text-center">
      <motion.div
        key={displayText} // Key prop to trigger animation on text change
        initial="initial"
        animate="animate"
        variants={glitchVariants}
        transition={{ duration: 0.1 }}
      >
        <h1 className="text-8xl md:text-9xl font-extrabold mb-4 animate-pulse">
          {displayText}
        </h1>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        ACCESS DENIED. PLEASE RETURN TO THE START.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link href="/" className="px-6 py-3 border-2 border-lime-400 text-lime-400 uppercase font-bold hover:bg-lime-400 hover:text-black transition-colors duration-300">
          START
        </Link>
      </motion.div>
    </div>
  );
}